/* ===== JS/EXERCISE-UTILS.JS - Fonctions utilitaires pour les exercices ===== */
'use strict';

/**
 * Enregistrer une progression (delta) pour un exercice
 * Appelle ScoreManager.updateMetrics + met a jour le statut in_progress
 * @param {string} page  - identifiant ex: 'clavier'
 * @param {object} delta - {correct, typed, errors, xp}
 */
function recordExerciseProgress(page, delta) {
  ScoreManager.updateMetrics(page, delta);
  ScoreManager.promoteStatus(page, 'in_progress');
}

/**
 * Enregistrer un snapshot complet (ecrase les donnees)
 * @param {string} page
 * @param {object} data - {correct, typed, errors, xp, status}
 */
function recordExerciseSnapshot(page, data) {
  ScoreManager.writeMetrics(page, data);
}

/**
 * Changer le statut d'un exercice
 * @param {string} page
 * @param {string} status - 'not_started' | 'in_progress' | 'completed'
 */
function promoteExerciseStatus(page, status) {
  ScoreManager.promoteStatus(page, status);
}

/**
 * Demarrer explicitement une session d'exercice
 * @param {string} page
 */
function startExerciseSession(page) {
  ScoreManager.promoteStatus(page, 'in_progress');
}

/**
 * Terminer explicitement une session d'exercice
 * @param {string} page
 */
function endExerciseSession(page) {
  ScoreManager.promoteStatus(page, 'completed');
}

/**
 * Calculer la precision (en %)
 * @param {number} correct
 * @param {number} typed
 * @returns {number}
 */
function calcAccuracy(correct, typed) {
  if (!typed) return 0;
  return Math.round((correct / typed) * 100);
}

/**
 * Calculer les XP gagnes pour un exercice (formule simple)
 * 1 correct = 1 XP, bonus si accuracy > 80%
 * @param {number} correct
 * @param {number} typed
 * @returns {number}
 */
function calcXP(correct, typed) {
  const base = correct;
  const bonus = calcAccuracy(correct, typed) >= 80 ? Math.floor(correct * 0.2) : 0;
  return base + bonus;
}

/**
 * Creer un effet de confetti (succes)
 */
function launchConfetti() {
  const colors = ['#4f8ef7','#7c5ff5','#34d399','#f59e0b','#f87171'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.top = '0';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.width  = (Math.random() * 8 + 4) + 'px';
      el.style.height = (Math.random() * 8 + 4) + 'px';
      el.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 3500);
    }, i * 20);
  }
}

/**
 * Formater un nombre pour affichage
 * @param {number} n
 * @returns {string}
 */
function fmt(n) {
  return (n || 0).toString();
}

/**
 * Afficher un toast de notification
 * @param {string} msg
 * @param {string} type - 'success' | 'error' | 'info'
 */
function showToast(msg, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  const colors = { success: '#34d399', error: '#f87171', info: '#4f8ef7' };
  toast.style.cssText = `background:var(--surface);border:1px solid ${colors[type] || colors.info}40;color:var(--text);padding:12px 18px;border-radius:12px;font-size:13px;font-weight:500;box-shadow:0 4px 20px rgba(0,0,0,0.4);animation:fadeUp 0.3s ease;max-width:280px;border-left:3px solid ${colors[type] || colors.info};`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 3000);
}

/**
 * Les regles XP sont desormais centralisees sur games/regles.html.
 * Cette fonction reste en no-op pour compatibilite avec les pages existantes.
 */
function showXPRules() {
  return;
}

/**
 * Obtenir l'exercice suivant recommande dans le parcours pedagogique
 * @param {string} currentPage - page actuelle (ex: 'clavier')
 * @returns {object} {name: string, href: string} ou {name: null, href: null} si fin du cycle
 */
function getNextExercise(currentPage) {
  const config = window.EXERCISE_CONFIG || {};
  const pages = config.orderedPages || [];
  const meta = config.meta || {};
  const sequence = pages.map(page => ({
    page,
    name: (meta[page] && meta[page].name) ? meta[page].name.replace(/^[^\s]+\s/, '') : page,
    href: (meta[page] && meta[page].href) ? meta[page].href : `${page}.html`
  }));

  const currentIndex = sequence.findIndex(ex => ex.page === currentPage);
  if (currentIndex === -1) return { name: null, href: null };

  const nextIndex = (currentIndex + 1) % sequence.length;
  const nextEx = sequence[nextIndex];
  return { name: nextEx.name, href: nextEx.href };
}
