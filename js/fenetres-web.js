'use strict';

(function initFenetresWebGame() {
  const DATA = window.FENETRES_WEB_DATA;
  if (!DATA) return;

  const PAGE_ID = DATA.pageId || 'fenetres-web';
  const desktopEl = document.getElementById('fw-desktop');
  const launchersEl = document.getElementById('fw-launchers');
  const taskbarEl = document.getElementById('fw-taskbar');
  const instructionEl = document.getElementById('fw-instruction');
  const progressEl = document.getElementById('fw-progress');
  const feedbackEl = document.getElementById('fw-feedback');
  const resultEl = document.getElementById('fw-result');
  const restartBtn = document.getElementById('fw-restart');
  const doneEl = document.getElementById('fw-done');
  const errorsEl = document.getElementById('fw-errors');
  const xpEl = document.getElementById('fw-xp');
  if (!desktopEl || !launchersEl || !taskbarEl || !instructionEl || !progressEl || !feedbackEl || !resultEl || !restartBtn || !doneEl || !errorsEl || !xpEl) return;

  const state = {
    taskIndex: 0,
    done: 0,
    errors: 0,
    xp: 0,
    activeWindow: null,
    windows: {},
    nextTaskTimer: null
  };

  function clearNextTaskTimer() {
    if (state.nextTaskTimer) {
      clearTimeout(state.nextTaskTimer);
      state.nextTaskTimer = null;
    }
  }

  function createInitialWindowState() {
    const out = {};
    Object.keys(DATA.windows).forEach(id => {
      out[id] = {
        id,
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        activeTab: DATA.windows[id].tabs && DATA.windows[id].tabs[0] ? DATA.windows[id].tabs[0] : '',
        z: 0
      };
    });
    return out;
  }

  function updateScore(deltaDone, deltaErrors, deltaXp) {
    state.done += deltaDone;
    state.errors += deltaErrors;
    state.xp = Math.max(0, state.xp + deltaXp);
    doneEl.textContent = String(state.done);
    errorsEl.textContent = String(state.errors);
    xpEl.textContent = `${state.xp} XP`;
    recordExerciseProgress(PAGE_ID, {
      correct: Math.max(deltaDone, 0),
      typed: Math.max(deltaDone, 0) + Math.max(deltaErrors, 0),
      errors: Math.max(deltaErrors, 0),
      xp: Math.max(deltaXp, 0)
    });
  }

  function renderLaunchers() {
    launchersEl.innerHTML = '';
    Object.entries(DATA.windows).forEach(([id, def]) => {
      if (id === 'ad') return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'fw-launch';
      btn.dataset.action = 'open';
      btn.dataset.target = id;
      btn.textContent = `${def.icon} ${def.title}`;
      launchersEl.appendChild(btn);
    });
  }

  function renderTaskbar() {
    taskbarEl.innerHTML = '';
    Object.entries(state.windows).forEach(([id, w]) => {
      if (!w.isOpen) return;
      const def = DATA.windows[id];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'fw-task';
      btn.dataset.action = w.isMinimized ? 'restore' : 'focus';
      btn.dataset.target = id;
      btn.textContent = `${def.icon} ${def.title}${w.isMinimized ? ' (reduite)' : ''}`;
      taskbarEl.appendChild(btn);
    });
  }

  function topZ() {
    const open = Object.values(state.windows).filter(w => w.isOpen && !w.isMinimized);
    return open.length ? Math.max(...open.map(w => w.z)) : 1;
  }

  function focusWindow(id) {
    const w = state.windows[id];
    if (!w || !w.isOpen || w.isMinimized) return;
    w.z = topZ() + 1;
    state.activeWindow = id;
  }

  function applyWindowAction(type, target, value) {
    const w = state.windows[target];
    if (!w) return false;
    switch (type) {
      case 'open':
        w.isOpen = true;
        w.isMinimized = false;
        w.isMaximized = false;
        focusWindow(target);
        return true;
      case 'minimize':
        if (!w.isOpen) return false;
        w.isMinimized = true;
        w.isMaximized = false;
        if (state.activeWindow === target) state.activeWindow = null;
        return true;
      case 'maximize':
        if (!w.isOpen || w.isMinimized) return false;
        w.isMaximized = !w.isMaximized;
        focusWindow(target);
        return true;
      case 'close':
        if (!w.isOpen) return false;
        w.isOpen = false;
        w.isMinimized = false;
        w.isMaximized = false;
        if (state.activeWindow === target) state.activeWindow = null;
        return true;
      case 'restore':
        if (!w.isOpen || !w.isMinimized) return false;
        w.isMinimized = false;
        focusWindow(target);
        return true;
      case 'focus':
        if (!w.isOpen || w.isMinimized) return false;
        focusWindow(target);
        return true;
      case 'switch-tab':
        if (!w.isOpen || w.isMinimized) return false;
        w.activeTab = value || w.activeTab;
        focusWindow(target);
        return true;
      case 'close-ad':
        return applyWindowAction('close', target);
      default:
        return false;
    }
  }

  function renderWindows() {
    const windowsHtml = Object.entries(DATA.windows).map(([id, def]) => {
      const w = state.windows[id];
      const hiddenClass = !w.isOpen || w.isMinimized ? 'fw-hidden' : '';
      const maxClass = w.isMaximized ? 'maximized' : '';
      const activeClass = state.activeWindow === id ? 'active' : '';
      const tabs = (def.tabs || []).map(tab => {
        const active = tab === w.activeTab ? 'active' : '';
        return `<button type="button" class="fw-tab ${active}" data-action="switch-tab" data-target="${id}" data-value="${tab}">${tab}</button>`;
      }).join('');

      const text = id === 'ad'
        ? 'Clique sur X pour fermer cette publicite.'
        : `Fenetre active: ${def.title}. Onglet: ${w.activeTab || '-'}.`;

      return `
        <section class="fw-window ${hiddenClass} ${maxClass} ${activeClass}" data-id="${id}" style="z-index:${w.z || 1}">
          <div class="fw-titlebar" data-action="focus" data-target="${id}">
            <div class="fw-title">${def.icon} ${def.title}</div>
            <div class="fw-controls">
              <button type="button" data-action="minimize" data-target="${id}" title="Reduire">_</button>
              <button type="button" data-action="maximize" data-target="${id}" title="Agrandir">[]</button>
              <button type="button" data-action="${id === 'ad' ? 'close-ad' : 'close'}" data-target="${id}" title="Fermer">X</button>
            </div>
          </div>
          <div class="fw-tabs">${tabs}</div>
          <div class="fw-content" data-action="focus" data-target="${id}">
            ${text}
          </div>
        </section>`;
    }).join('');

    desktopEl.querySelectorAll('.fw-window').forEach(el => el.remove());
    desktopEl.insertAdjacentHTML('afterbegin', windowsHtml);
    renderTaskbar();
  }

  function applyTaskState(task) {
    const template = createInitialWindowState();
    state.windows = template;
    state.activeWindow = null;

    const openIds = task.state.open || [];
    const minimizedIds = task.state.minimized || [];
    const maximizedIds = task.state.maximized || [];

    openIds.forEach(id => {
      if (!state.windows[id]) return;
      state.windows[id].isOpen = true;
      state.windows[id].z = topZ() + 1;
    });
    minimizedIds.forEach(id => {
      if (!state.windows[id]) return;
      state.windows[id].isOpen = true;
      state.windows[id].isMinimized = true;
    });
    maximizedIds.forEach(id => {
      if (!state.windows[id]) return;
      state.windows[id].isOpen = true;
      state.windows[id].isMaximized = true;
    });
    if (task.state.adOpen) {
      state.windows.ad.isOpen = true;
      state.windows.ad.z = topZ() + 1;
    }
    if (task.state.activeTab && state.windows.browser) {
      state.windows.browser.activeTab = task.state.activeTab;
    }

    const topCandidate = Object.values(state.windows)
      .filter(w => w.isOpen && !w.isMinimized)
      .sort((a, b) => a.z - b.z)
      .pop();
    state.activeWindow = topCandidate ? topCandidate.id : null;
    renderWindows();
  }

  function currentTask() {
    return DATA.tasks[state.taskIndex];
  }

  function updateTaskPanel() {
    const task = currentTask();
    if (!task) return;
    instructionEl.textContent = task.instruction;
    progressEl.textContent = `Etape ${state.taskIndex + 1} / ${DATA.tasks.length}`;
  }

  function completeGame() {
    clearNextTaskTimer();
    promoteExerciseStatus(PAGE_ID, 'completed');
    launchConfetti();
    resultEl.classList.remove('fw-hidden');
    resultEl.innerHTML = `<strong>Parcours termine.</strong> ${state.done} actions correctes, ${state.errors} erreurs, ${state.xp} XP.`;
    feedbackEl.textContent = 'Bravo, toutes les actions ont ete validees.';
    feedbackEl.style.color = 'var(--success)';
  }

  function goToNextTask() {
    state.nextTaskTimer = null;
    state.taskIndex += 1;
    if (state.taskIndex >= DATA.tasks.length) {
      instructionEl.textContent = 'Parcours termine.';
      progressEl.textContent = `${DATA.tasks.length} / ${DATA.tasks.length}`;
      completeGame();
      return;
    }
    updateTaskPanel();
    applyTaskState(currentTask());
  }

  function isExpectedAction(expected, action) {
    if (!expected) return false;
    if (expected.type !== action.type) return false;
    if (expected.target && expected.target !== action.target) return false;
    if (typeof expected.value === 'string' && expected.value !== action.value) return false;
    return true;
  }

  function handleAction(action) {
    const task = currentTask();
    if (!task) return;

    if (!isExpectedAction(task.expected, action)) {
      state.errors += 1;
      errorsEl.textContent = String(state.errors);
      feedbackEl.textContent = 'Action incorrecte. Lis bien la consigne puis recommence.';
      feedbackEl.style.color = 'var(--danger)';
      recordExerciseProgress(PAGE_ID, { correct: 0, typed: 1, errors: 1, xp: 0 });
      return;
    }

    const ok = applyWindowAction(action.type, action.target, action.value);
    if (!ok) {
      state.errors += 1;
      errorsEl.textContent = String(state.errors);
      feedbackEl.textContent = 'Cette action n est pas possible dans cet etat.';
      feedbackEl.style.color = 'var(--danger)';
      recordExerciseProgress(PAGE_ID, { correct: 0, typed: 1, errors: 1, xp: 0 });
      return;
    }

    feedbackEl.textContent = 'Correct.';
    feedbackEl.style.color = 'var(--success)';
    updateScore(1, 0, 4);
    renderWindows();
    clearNextTaskTimer();
    state.nextTaskTimer = setTimeout(goToNextTask, 350);
  }

  function bindEvents() {
    desktopEl.addEventListener('click', event => {
      const target = event.target.closest('[data-action][data-target]');
      if (!target) return;
      const action = {
        type: target.dataset.action,
        target: target.dataset.target,
        value: target.dataset.value || ''
      };
      handleAction(action);
    });

    launchersEl.addEventListener('click', event => {
      const btn = event.target.closest('button[data-action][data-target]');
      if (!btn) return;
      handleAction({ type: btn.dataset.action, target: btn.dataset.target, value: '' });
    });

    taskbarEl.addEventListener('click', event => {
      const btn = event.target.closest('button[data-action][data-target]');
      if (!btn) return;
      handleAction({ type: btn.dataset.action, target: btn.dataset.target, value: '' });
    });

    restartBtn.addEventListener('click', () => {
      startGame();
    });
  }

  function startGame() {
    clearNextTaskTimer();
    state.taskIndex = 0;
    state.done = 0;
    state.errors = 0;
    state.xp = 0;
    doneEl.textContent = '0';
    errorsEl.textContent = '0';
    xpEl.textContent = '0 XP';
    feedbackEl.textContent = 'Suivez la consigne et faites la bonne action.';
    feedbackEl.style.color = 'var(--text2)';
    resultEl.classList.add('fw-hidden');
    state.windows = createInitialWindowState();
    promoteExerciseStatus(PAGE_ID, 'in_progress');
    updateTaskPanel();
    applyTaskState(currentTask());
  }

  renderLaunchers();
  bindEvents();
  startGame();
})();
