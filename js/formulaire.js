'use strict';

const PAGE_ID = 'formulaire';
const FORMS = Array.isArray(window.FORMULAIRE_DATA) ? window.FORMULAIRE_DATA : [];

let session = {
  items: [],
  index: 0,
  correct: 0,
  errors: 0,
  typed: 0,
  correctFields: 0,
  xp: 0,
  answered: false,
  usedHint: false
};

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalize(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

function normalizePhone(value) {
  return String(value || '').replace(/[^\d+]/g, '');
}

function escapeHTML(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function startSession() {
  if (!FORMS.length) {
    showToast('Aucun formulaire disponible.', 'error');
    return;
  }

  session = {
    items: shuffle(FORMS),
    index: 0,
    correct: 0,
    errors: 0,
    typed: 0,
    correctFields: 0,
    xp: 0,
    answered: false,
    usedHint: false
  };

  document.getElementById('resultZone').classList.remove('show');
  document.getElementById('gameZone').classList.remove('hidden');
  renderRound();
}

function renderRound() {
  const current = session.items[session.index];
  session.answered = false;
  session.usedHint = false;

  document.getElementById('roundNum').textContent = session.index + 1;
  document.getElementById('roundTotal').textContent = session.items.length;
  document.getElementById('roundTag').textContent = current.category;

  document.getElementById('profileTitle').textContent = current.profileTitle;
  document.getElementById('profileIntro').textContent = current.profileIntro;
  document.getElementById('formTitle').textContent = current.formTitle;
  document.getElementById('formIntro').textContent = current.formIntro;

  const profileList = document.getElementById('profileList');
  profileList.innerHTML = '';
  current.profileDetails.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${escapeHTML(item.label)}</span><strong>${escapeHTML(item.value)}</strong>`;
    profileList.appendChild(li);
  });

  const fieldsBox = document.getElementById('formFields');
  fieldsBox.innerHTML = '';
  current.fields.forEach((field, fieldIndex) => {
    const row = document.createElement('div');
    row.className = 'field-row';
    const id = `field-${fieldIndex}`;
    const type = field.type || 'text';
    row.innerHTML = `<label for="${id}">${escapeHTML(field.label)}</label>`;

    if (type === 'textarea') {
      row.classList.add('field-row-wide');
      const textarea = document.createElement('textarea');
      textarea.id = id;
      textarea.setAttribute('autocomplete', 'off');
      textarea.dataset.fieldIndex = String(fieldIndex);
      textarea.placeholder = field.placeholder || '';
      textarea.rows = 3;
      row.appendChild(textarea);
    } else if (type === 'select') {
      const select = document.createElement('select');
      select.id = id;
      select.dataset.fieldIndex = String(fieldIndex);
      const placeholderOption = document.createElement('option');
      placeholderOption.value = '';
      placeholderOption.textContent = '-- Selectionner --';
      select.appendChild(placeholderOption);
      (field.options || []).forEach((optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        option.textContent = optionValue;
        select.appendChild(option);
      });
      row.appendChild(select);
    } else {
      const input = document.createElement('input');
      input.id = id;
      input.type = type;
      input.setAttribute('autocomplete', 'off');
      input.dataset.fieldIndex = String(fieldIndex);
      input.placeholder = field.placeholder || '';
      row.appendChild(input);
    }

    fieldsBox.appendChild(row);
  });

  const feedback = document.getElementById('formFeedback');
  feedback.className = 'form-feedback';
  feedback.textContent = '';

  document.getElementById('btnValidate').disabled = false;
  document.getElementById('btnHint').disabled = false;
  document.getElementById('btnNext').style.display = 'none';

  updateKPIs();
}

function getInputs() {
  return Array.from(document.querySelectorAll('#formFields [data-field-index]'));
}

function isFieldCorrect(field, userValue) {
  const expected = field.value;
  const type = field.type || 'text';
  if (type === 'email') return normalize(userValue) === normalize(expected);
  if (type === 'tel') return normalizePhone(userValue) === normalizePhone(expected);
  if (type === 'date') return String(userValue || '').trim() === String(expected || '').trim();
  if (type === 'select') return normalize(userValue) === normalize(expected);
  return normalize(userValue) === normalize(expected);
}

function useHint() {
  if (session.answered || session.usedHint) return;

  const current = session.items[session.index];
  const inputs = getInputs();
  const emptyInput = inputs.find((input) => normalize(input.value) === '');
  const target = emptyInput || inputs.find((input, idx) => normalize(input.value) !== normalize(current.fields[idx].value));

  if (!target) return;

  const fieldIndex = Number(target.dataset.fieldIndex);
  const expected = current.fields[fieldIndex] ? current.fields[fieldIndex].value : '';
  if (target.tagName === 'SELECT') {
    target.value = expected;
  } else {
    target.value = expected;
  }
  target.classList.add('hinted');
  session.usedHint = true;
  document.getElementById('btnHint').disabled = true;

  const feedback = document.getElementById('formFeedback');
  feedback.className = 'form-feedback info';
  feedback.textContent = 'Indice applique: un champ a ete pre-rempli.';
}

function validateRound() {
  if (session.answered) return;

  const current = session.items[session.index];
  const inputs = getInputs();
  if (!inputs.length) return;

  session.typed += 1;

  let wrongCount = 0;
  let correctCount = 0;
  const corrections = [];

  inputs.forEach((input, idx) => {
    const field = current.fields[idx];
    const expected = field ? field.value : '';
    const userValue = input.value;
    const isCorrect = isFieldCorrect(field, userValue);

    input.classList.remove('correct', 'wrong');
    input.classList.add(isCorrect ? 'correct' : 'wrong');

    if (!isCorrect) {
      wrongCount += 1;
      corrections.push(`${current.fields[idx].label}: ${expected}`);
    } else {
      correctCount += 1;
    }
  });

  session.answered = true;
  session.correctFields += correctCount;
  getInputs().forEach((input) => { input.disabled = true; });
  document.getElementById('btnValidate').disabled = true;
  document.getElementById('btnHint').disabled = true;

  const feedback = document.getElementById('formFeedback');
  const fullCorrect = wrongCount === 0;
  const totalFields = current.fields.length;
  const baseXp = correctCount * 5;
  const fullBonus = fullCorrect ? 20 : 0;
  const hintPenalty = session.usedHint ? 10 : 0;
  const gained = Math.max(0, baseXp + fullBonus - hintPenalty);

  if (fullCorrect) {
    session.correct += 1;
    session.xp += gained;
    recordExerciseProgress(PAGE_ID, { correct: 1, typed: 1, errors: 0, xp: gained });

    feedback.className = 'form-feedback ok';
    feedback.textContent = session.usedHint
      ? `Formulaire complet. ${correctCount}/${totalFields} champs corrects. +${gained} XP (indice utilise).`
      : `Excellent. ${correctCount}/${totalFields} champs corrects. +${gained} XP.`;
  } else {
    session.errors += 1;
    session.xp += gained;
    recordExerciseProgress(PAGE_ID, { correct: 0, typed: 1, errors: 1, xp: gained });

    feedback.className = 'form-feedback err';
    feedback.innerHTML = `
      <p>Formulaire incomplet: ${correctCount}/${totalFields} champs corrects. +${gained} XP.</p>
      <p class="correction-list"><strong>Corrections:</strong> ${escapeHTML(corrections.join(' | '))}</p>
    `;
  }

  const btnNext = document.getElementById('btnNext');
  btnNext.textContent = session.index < session.items.length - 1 ? 'Profil suivant' : 'Terminer';
  btnNext.style.display = 'inline-flex';

  updateKPIs();
}

function nextRound() {
  if (!session.answered) return;
  session.index += 1;

  if (session.index >= session.items.length) {
    finishSession();
    return;
  }

  renderRound();
}

function finishSession() {
  promoteExerciseStatus(PAGE_ID, 'completed');

  document.getElementById('gameZone').classList.add('hidden');
  document.getElementById('resultZone').classList.add('show');
  document.getElementById('progressFill').style.width = '100%';

  const accuracy = calcAccuracy(session.correct, session.typed);
  document.getElementById('resEmoji').textContent = accuracy >= 70 ? '🏆' : '📝';
  document.getElementById('resTitle').textContent = accuracy >= 70 ? 'Session reussie' : 'Session terminee';
  document.getElementById('resSubtitle').textContent = `${session.correct} formulaire(s) correct(s) sur ${session.items.length}.`;
  document.getElementById('resCorrect').textContent = session.correct;
  document.getElementById('resErrors').textContent = session.errors;
  document.getElementById('resXP').textContent = session.xp;
  document.getElementById('resAccuracy').textContent = accuracy + '%';
}

function updateKPIs() {
  const total = session.items.length || 1;
  const answeredCount = session.index + (session.answered ? 1 : 0);
  const progress = Math.round((answeredCount / total) * 100);

  document.getElementById('kpiCorrect').textContent = session.correct;
  document.getElementById('kpiErrors').textContent = session.errors;
  document.getElementById('kpiXP').textContent = session.xp;
  document.getElementById('kpiProgress').textContent = progress + '%';
  document.getElementById('progressFill').style.width = progress + '%';
}

document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.getElementById('btnNextExercise');
  const nextEx = getNextExercise(PAGE_ID);
  if (nextEx && nextEx.name && nextEx.href) {
    nextBtn.textContent = 'Exercice suivant : ' + nextEx.name;
    nextBtn.addEventListener('click', () => {
      window.location.href = nextEx.href;
    });
  } else {
    nextBtn.style.display = 'none';
  }

  document.getElementById('btnValidate').addEventListener('click', validateRound);
  document.getElementById('btnHint').addEventListener('click', useHint);
  document.getElementById('btnNext').addEventListener('click', nextRound);
  document.getElementById('btnRestart').addEventListener('click', startSession);

  document.addEventListener('keydown', (e) => {
    const tag = e.target && e.target.tagName;
    if (tag === 'TEXTAREA') return;

    if (e.key === 'Enter') {
      if (tag === 'INPUT') e.preventDefault();
      if (session.answered) {
        nextRound();
      } else {
        validateRound();
      }
    }
  });

  startSession();
});
