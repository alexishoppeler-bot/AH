/* ===== JS/SCORE.JS — Gestionnaire de score centralisé ===== */
'use strict';

const ScoreManager = (() => {
  const KEY = 'formation_scores';
  const GLOBAL_KEY = 'formation_global';
  const DEFAULT_METRICS = {
    correct: 0,
    typed: 0,
    errors: 0,
    xp: 0,
    status: 'not_started',
    startedAt: null,
    finishedAt: null,
    durationSec: 0,
    updatedAt: null
  };

  // --- Lecture/écriture localStorage avec fallback mémoire ---
  const _mem = {};
  function _get(k) {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; }
    catch(e) { return _mem[k] || null; }
  }
  function _set(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); }
    catch(e) { _mem[k] = v; }
  }

  // --- Données brutes ---
  function _getAllData() {
    return _get(KEY) || {};
  }
  function _saveAllData(d) {
    _set(KEY, d);
  }

  function _normalizeMetrics(data) {
    return { ...DEFAULT_METRICS, ...(data || {}) };
  }

  // --- API publique ---

  /**
   * Écrire/remplacer les métriques d'une page
   * @param {string} page - identifiant de la page (ex: 'clavier')
   * @param {object} data - {correct, typed, errors, xp, status}
   */
  function writeMetrics(page, data) {
    const all = _getAllData();
    const now = Date.now();
    const prev = _normalizeMetrics(all[page]);
    const next = _normalizeMetrics({ ...prev, ...data, updatedAt: now });

    if (next.status === 'in_progress' && !next.startedAt) next.startedAt = now;
    if (next.status !== 'completed') {
      next.finishedAt = null;
      if (!Number.isFinite(next.durationSec)) next.durationSec = 0;
    }
    if (next.status === 'completed' && !next.finishedAt) {
      next.finishedAt = now;
      if (next.startedAt) {
        next.durationSec = Math.max(0, Math.round((next.finishedAt - next.startedAt) / 1000));
      }
    }

    all[page] = next;
    _saveAllData(all);
    _dispatchUpdate();
  }

  /**
   * Mettre à jour en ajoutant un delta aux métriques existantes
   * @param {string} page
   * @param {object} delta - {correct, typed, errors, xp}
   */
  function updateMetrics(page, delta) {
    const all = _getAllData();
    const now = Date.now();
    const existing = _normalizeMetrics(all[page]);
    const next = {
      ...existing,
      correct:  (existing.correct || 0) + (delta.correct || 0),
      typed:    (existing.typed   || 0) + (delta.typed || 0),
      errors:   (existing.errors  || 0) + (delta.errors || 0),
      xp:       (existing.xp      || 0) + (delta.xp || 0),
      updatedAt: now
    };
    const activity = (delta.correct || 0) + (delta.typed || 0) + (delta.errors || 0) + (delta.xp || 0);
    if (activity > 0 && !next.startedAt) next.startedAt = now;
    all[page] = next;
    _saveAllData(all);
    _dispatchUpdate();
  }

  /**
   * Lire les métriques d'une page
   * @param {string} page
   * @returns {object}
   */
  function readMetrics(page) {
    const all = _getAllData();
    return _normalizeMetrics(all[page]);
  }

  /**
   * Promouvoir le statut d'une page
   * Ordre: not_started → in_progress → completed
   * @param {string} page
   * @param {string} status - 'not_started' | 'in_progress' | 'completed'
   */
  function promoteStatus(page, status) {
    const all = _getAllData();
    const now = Date.now();
    const existing = _normalizeMetrics(all[page]);
    const order = ['not_started', 'in_progress', 'completed'];
    const currentIdx = order.indexOf(existing.status || 'not_started');
    const newIdx = order.indexOf(status);
    if (newIdx > currentIdx || existing.status === status) {
      const next = { ...existing, status, updatedAt: now };
      if (status === 'in_progress' && !next.startedAt) next.startedAt = now;
      if (status === 'completed') {
        if (!next.startedAt) next.startedAt = now;
        next.finishedAt = now;
        next.durationSec = Math.max(0, Math.round((next.finishedAt - next.startedAt) / 1000));
      } else {
        next.finishedAt = null;
      }
      all[page] = next;
      _saveAllData(all);
      _dispatchUpdate();
    }
  }

  /**
   * Calculer le résumé global pour une liste de pages
   * @param {string[]} pages
   * @returns {object} - {totalCorrect, totalTyped, totalErrors, totalXp, completed, inProgress, notStarted, accuracy}
   */
  function getGlobalSummary(pages) {
    const all = _getAllData();
    let totalCorrect = 0, totalTyped = 0, totalErrors = 0, totalXp = 0;
    let completed = 0, inProgress = 0, notStarted = 0;

    for (const page of pages) {
      const d = all[page] || { correct: 0, typed: 0, errors: 0, xp: 0, status: 'not_started' };
      totalCorrect += d.correct || 0;
      totalTyped   += d.typed   || 0;
      totalErrors  += d.errors  || 0;
      totalXp      += d.xp     || 0;
      const s = d.status || 'not_started';
      if (s === 'completed')   completed++;
      else if (s === 'in_progress') inProgress++;
      else notStarted++;
    }

    const accuracy = totalTyped > 0 ? Math.round((totalCorrect / totalTyped) * 100) : 0;
    const level = Math.floor(totalXp / 100) + 1;

    return { totalCorrect, totalTyped, totalErrors, totalXp, completed, inProgress, notStarted, accuracy, level, pages: pages.length };
  }

  /**
   * Réinitialiser toutes les données
   */
  function reset() {
    _set(KEY, {});
    _dispatchUpdate();
  }

  /**
   * Dispatcher un événement custom pour que d'autres scripts puissent réagir
   */
  function _dispatchUpdate() {
    document.dispatchEvent(new CustomEvent('score:updated'));
  }

  /**
   * Récupérer toutes les données brutes
   */
  function getAllData() {
    return _getAllData();
  }

  // --- Calcul du niveau global (affiché dans le header) ---
  function getLevel() {
    const all = _getAllData();
    let totalXp = 0;
    Object.values(all).forEach(d => { totalXp += (d.xp || 0); });
    return Math.floor(totalXp / 100) + 1;
  }

  return { writeMetrics, updateMetrics, readMetrics, promoteStatus, getGlobalSummary, reset, getAllData, getLevel };
})();
