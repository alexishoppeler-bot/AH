'use strict';

const PAGE_ID = 'email-ecrire';
const CASES = Array.isArray(window.EMAIL_ECRIRE_DATA) ? window.EMAIL_ECRIRE_DATA : [];

let session = { items: [], index: 0, correct: 0, errors: 0, typed: 0, xp: 0, answered: false };
let autoAdvanceTimer = null;

function clearAutoAdvance() {
  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }
}

function scheduleAutoAdvance(callback, delay = 1400) {
  clearAutoAdvance();
  autoAdvanceTimer = setTimeout(() => {
    autoAdvanceTimer = null;
    callback();
  }, delay);
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeHTML(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function formatBody(text) {
  return escapeHTML(text).replace(/\n/g, '<br>');
}

function prepareCases(cases) {
  return shuffle(cases).map((item) => {
    const indexedChoices = item.choices.map((choice, index) => ({
      ...choice,
      _isCorrect: index === item.answer
    }));
    const shuffledChoices = shuffle(indexedChoices);
    const answer = shuffledChoices.findIndex((choice) => choice._isCorrect);

    return {
      ...item,
      choices: shuffledChoices.map(({ _isCorrect, ...choice }) => choice),
      answer
    };
  });
}

function startSession() {
  clearAutoAdvance();
  if (!CASES.length) {
    showToast('Aucun exercice.', 'error');
    return;
  }
  session = { items: prepareCases(CASES), index: 0, correct: 0, errors: 0, typed: 0, xp: 0, answered: false };
  document.getElementById('resultZone').classList.remove('show');
  document.getElementById('gameZone').classList.remove('hidden');
  renderCase();
}

function renderCase() {
  clearAutoAdvance();
  const current = session.items[session.index];
  session.answered = false;
  document.getElementById('sNum').textContent = session.index + 1;
  document.getElementById('sTotal').textContent = session.items.length;
  document.getElementById('sTag').textContent = current.category;
  document.getElementById('sText').textContent = current.situation;
  document.getElementById('btnNext').style.display = 'none';

  const feedback = document.getElementById('mailFeedback');
  feedback.className = 'mail-feedback';
  feedback.textContent = 'Lis la situation. Puis choisis un e-mail.';

  const pct = Math.round((session.index / session.items.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';

  const box = document.getElementById('mailChoices');
  box.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  current.choices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.className = 'mail-choice';
    btn.type = 'button';
    btn.innerHTML = `
      <div class="mail-choice-head">
        <div class="mail-choice-intro">
          <span class="mail-letter">${letters[idx]}</span>
          <div class="mail-choice-title">
            <span class="mail-choice-label">Objet</span>
            <span class="mail-subject">${escapeHTML(choice.subject)}</span>
          </div>
        </div>
      </div>
      <div class="mail-choice-preview">
        <span class="mail-choice-label">Message</span>
        <div class="mail-body">${formatBody(choice.body)}</div>
      </div>
      <div class="mail-meta">
        <span class="mail-pill">PJ: ${escapeHTML(choice.attachment)}</span>
        <span class="mail-pill">Signature: ${escapeHTML(choice.signature)}</span>
      </div>`;
    btn.addEventListener('click', () => answer(idx));
    box.appendChild(btn);
  });

  updateKPIs();
}

function answer(idx) {
  if (session.answered) return;
  const current = session.items[session.index];
  if (idx < 0 || idx >= current.choices.length) return;

  session.answered = true;
  session.typed += 1;
  const ok = idx === current.answer;
  const buttons = document.querySelectorAll('.mail-choice');
  buttons.forEach((b) => { b.disabled = true; });

  if (ok) {
    session.correct += 1;
    session.xp += 3;
    buttons[idx].classList.add('correct');
    recordExerciseProgress(PAGE_ID, { correct: 1, typed: 1, errors: 0, xp: 3 });
    showFeedback(true, current.correctFeedback || 'C est le bon choix.');
  } else {
    session.errors += 1;
    buttons[idx].classList.add('wrong');
    if (buttons[current.answer]) buttons[current.answer].classList.add('correct');
    recordExerciseProgress(PAGE_ID, { correct: 0, typed: 1, errors: 1, xp: 0 });
    showFeedback(false, current.choices[idx].reasonIfWrong || 'Ce choix n est pas le bon.');
  }

  updateKPIs();
  scheduleAutoAdvance(nextCase);
}

function showFeedback(ok, text) {
  const feedback = document.getElementById('mailFeedback');
  feedback.className = 'mail-feedback ' + (ok ? 'ok' : 'err');
  feedback.textContent = (ok ? 'Bonne reponse. ' : 'Ce n est pas la bonne reponse. ') + text;
}

function nextCase() {
  if (!session.answered) return;
  session.index += 1;
  if (session.index >= session.items.length) return finish();
  renderCase();
}

function finish() {
  clearAutoAdvance();
  promoteExerciseStatus(PAGE_ID, 'completed');
  document.getElementById('gameZone').classList.add('hidden');
  document.getElementById('resultZone').classList.add('show');
  document.getElementById('progressFill').style.width = '100%';

  const accuracy = calcAccuracy(session.correct, session.typed);
  document.getElementById('resEmoji').textContent = accuracy >= 80 ? '🏆' : '✉️';
  document.getElementById('resTitle').textContent = accuracy >= 80 ? 'Tres bien' : 'Continuez';
  document.getElementById('resSubtitle').textContent = `${session.correct} bonne reponse sur ${session.items.length} exercice(s).`;
  document.getElementById('resCorrect').textContent = session.correct;
  document.getElementById('resErrors').textContent = session.errors;
  document.getElementById('resXP').textContent = session.xp;
  document.getElementById('resAccuracy').textContent = accuracy + '%';
}

function updateKPIs() {
  const total = session.items.length || 1;
  const progress = Math.round((session.index / total) * 100);
  document.getElementById('kpiCorrect').textContent = session.correct;
  document.getElementById('kpiErrors').textContent = session.errors;
  document.getElementById('kpiXP').textContent = session.xp;
  document.getElementById('kpiProgress').textContent = progress + '%';
}

document.addEventListener('DOMContentLoaded', () => {
  const btnNextEx = document.getElementById('btnNextExercise');
  const nextEx = getNextExercise(PAGE_ID);
  if (nextEx && nextEx.name && nextEx.href) {
    btnNextEx.addEventListener('click', () => { window.location.href = nextEx.href; });
    btnNextEx.textContent = 'Suite : ' + nextEx.name;
  } else {
    btnNextEx.style.display = 'none';
  }

  document.getElementById('btnNext').addEventListener('click', nextCase);
  document.getElementById('btnRestart').addEventListener('click', startSession);

  document.addEventListener('keydown', (e) => {
    if (e.target && e.target.tagName === 'INPUT') return;
    const map = { '1': 0, '2': 1, '3': 2, '4': 3 };
    if (!session.answered && Object.prototype.hasOwnProperty.call(map, e.key)) answer(map[e.key]);
  });

  startSession();
});
