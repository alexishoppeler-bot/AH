/* ===== JS/EXERCISE-UTILS.JS - Fonctions utilitaires pour les exercices ===== */
'use strict';

const EXERCISE_COACH_TIPS = {
  default: [
    'Relis la consigne et cherche le mot important.',
    'Fais une action a la fois.',
    'Si c est difficile, recommence doucement.'
  ],
  formulaire: [
    'Regarde bien chaque case, surtout e-mail et telephone.',
    'Copie la meme chose que dans le profil.',
    'Corrige une erreur a la fois.'
  ],
  'email-ecrire': [
    'Commence par le sujet du message.',
    'Fais des phrases courtes.',
    'Verifie qu il y a toutes les informations importantes.'
  ],
  'email-pro': [
    'Reste simple et poli.',
    'Dis clairement ce que tu veux.',
    'Relis avant d envoyer.'
  ],
  clavier: [
    'Regarde la touche attendue avant de taper.',
    'Ralentis légèrement pour réduire les erreurs de frappe.',
    'Concentre-toi sur la régularité plutôt que sur la vitesse.'
  ],
  quiz: [
    'Enleve d abord les mauvaises reponses.',
    'Fais attention aux mots comme toujours ou jamais.',
    'Si tu hesites, reviens a l idee simple.'
  ],
  alphabet: [
    'Récite mentalement la suite avant de répondre.',
    'Concentre-toi sur la lettre juste avant et juste après.',
    'Ralentis pour éviter les inversions de lettres.'
  ],
  ecouter: [
    'Écoute une première fois sans écrire, puis une deuxième fois pour noter.',
    'Focalise-toi sur les mots-clés (noms, dates, actions).',
    'Si un mot manque, complète d\'abord le reste de la phrase.'
  ],
  cliquer: [
    'Lis la cible complète avant de cliquer.',
    'Privilégie la précision à la vitesse sur les premières tentatives.',
    'Balaye l\'écran de gauche à droite pour ne rien oublier.'
  ],
  'cherche-clique': [
    'Repère la forme/couleur de l\'élément recherché avant d\'agir.',
    'Découpe visuellement l\'écran en zones et scanne zone par zone.',
    'Évite les clics impulsifs: confirme la cible puis clique.'
  ],
  completer: [
    'Lis toute la phrase avant de proposer le mot manquant.',
    'Utilise la grammaire de la phrase pour éliminer les mauvaises options.',
    'Vérifie accords et conjugaison avant validation.'
  ],
  anagramme: [
    'Repère les voyelles et place-les d\'abord.',
    'Cherche les préfixes/suffixes fréquents (re-, -tion, -ment, etc.).',
    'Teste des combinaisons courtes puis allonge le mot.'
  ],
  apparier: [
    'Commence par les associations évidentes.',
    'Élimine les paires impossibles pour réduire les choix.',
    'Valide mentalement chaque duo avant de confirmer.'
  ],
  pendu: [
    'Commence par les lettres fréquentes (E, A, S, R, T).',
    'Observe le motif des lettres déjà trouvées pour prédire le mot.',
    'Garde les lettres rares (W, K, X, Z) pour la fin.'
  ],
  'vrai-faux': [
    'Repère les formulations absolues qui sont souvent fausses.',
    'Confronte l\'affirmation aux règles de base du thème.',
    'En cas de doute, choisis l\'option la plus cohérente avec la consigne.'
  ],
  classement: [
    'Identifie d\'abord le critère de tri (ordre, date, catégorie).',
    'Place les extrêmes (plus petit/plus grand) avant le reste.',
    'Refais une vérification finale du 1er au dernier élément.'
  ],
  'mots-croises': [
    'Commence par les définitions les plus simples.',
    'Utilise les lettres déjà posées pour déduire les mots voisins.',
    'Si un mot bloque, passe à une autre case puis reviens.'
  ],
  'mots-meles': [
    'Cherche les mots rares/longs en premier.',
    'Balaye ligne par ligne puis colonne par colonne.',
    'N\'oublie pas les diagonales et les mots à l\'envers.'
  ],
  demeler: [
    'Repère les groupes de lettres qui vont ensemble.',
    'Teste l\'ordre des syllabes plutôt que des lettres isolées.',
    'Lis le mot à voix basse pour vérifier s\'il sonne juste.'
  ],
  trier: [
    'Sépare d\'abord les éléments par grandes catégories.',
    'Applique un seul critère de tri à la fois.',
    'Contrôle chaque groupe avant de valider la manche.'
  ],
  paire: [
    'Mémorise la position de chaque carte retournée.',
    'Joue méthodiquement de gauche à droite.',
    'Privilégie la mémoire visuelle plutôt que le hasard.'
  ],
  accueil: [
    'Choisis un exercice clair plutôt que de sauter entre plusieurs jeux.',
    'Choisis un petit objectif pour cette session.',
    'Finis une activite avant d en ouvrir une autre.'
  ],
  evaluations: [
    'Regarde d abord le taux de reussite.',
    'Cherche les exercices les plus difficiles.',
    'Refais une petite session et compare.'
  ],
  regles: [
    'Comprends les règles de score avant de viser le maximum XP.',
    'Priorise la précision: elle améliore aussi la progression.',
    'Utilise les règles pour planifier ta séance suivante.'
  ],
  donnees: [
    'Vérifie les indicateurs importants: correct, erreurs, précision.',
    'Observe la tendance sur plusieurs sessions, pas une seule.',
    'Utilise ces données pour choisir l’exercice suivant.'
  ]
};

const EXERCISE_COACH_TIPS_BY_CATEGORY = {
  Navigation: [
    'Repère d\'abord où tu veux aller, puis fais une action unique.',
    'Observe l\'état visuel (élément actif, fenêtre ouverte, dossier courant).',
    'Si tu hésites, reviens à l\'écran stable précédent puis recommence.'
  ],
  Langue: [
    'Lis/écoute la consigne en entier avant de répondre.',
    'Privilégie précision et orthographe avant la vitesse.',
    'Valide mentalement la réponse avant de confirmer.'
  ],
  Compétences: [
    'Décompose la tâche en micro-actions.',
    'Vérifie un résultat à la fois avant de passer au suivant.',
    'Corrige immédiatement la première erreur repérée.'
  ],
  Jeu: [
    'Identifie le pattern avant d\'agir.',
    'Élimine les options peu probables pour réduire l\'incertitude.',
    'Garde un rythme régulier pour limiter les fautes.'
  ],
  Communication: [
    'Structure d\'abord ton message, puis affine la formulation.',
    'Vérifie la clarté et le ton avant validation.',
    'Relis les points obligatoires une dernière fois.'
  ],
  Candidature: [
    'Vérifie chaque champ sensible (mail, téléphone, date).',
    'Reste cohérent entre toutes les informations saisies.',
    'Corrige les erreurs une à une avant de soumettre.'
  ],
  Suivi: [
    'Regarde la tendance avant la valeur brute.',
    'Priorise les exercices au plus faible score de précision.',
    'Lance une courte session de correction ciblée.'
  ]
};

const EXERCISE_COACH = {
  byPage: {},
  minToastGapMs: 5000,
  accuracyToastEveryAttempts: 8,
  accuracyToastStartAtAttempts: 6
};
const EXERCISE_SESSION = {
  byPage: {}
};
const EXERCISE_COACH_STORAGE_KEY = 'exerciseCoachOptions';

function createSessionState() {
  return {
    correct: 0,
    typed: 0,
    errors: 0,
    xp: 0,
    startedAt: Date.now(),
    finalized: false
  };
}

function ensureActiveSessionState(page) {
  const current = EXERCISE_SESSION.byPage[page];
  if (!current || current.finalized) {
    EXERCISE_SESSION.byPage[page] = createSessionState();
  }
  return EXERCISE_SESSION.byPage[page];
}

function resetSessionState(page) {
  delete EXERCISE_SESSION.byPage[page];
}

function finalizeExerciseSession(page) {
  const session = EXERCISE_SESSION.byPage[page];
  if (!session || session.finalized || session.typed <= 0) return;

  const meta = (window.EXERCISE_CONFIG || {}).meta || {};
  const gameName = (meta[page] && meta[page].name) || page;
  const accuracy = calcAccuracy(session.correct, session.typed);

  session.finalized = true;
  ScoreManager.pushSessionHistory({
    page,
    name: gameName,
    xp: session.xp,
    correct: session.correct,
    typed: session.typed,
    errors: session.errors,
    accuracy,
    startedAt: session.startedAt,
    completedAt: Date.now()
  });
}

function getExerciseName(page) {
  const meta = (window.EXERCISE_CONFIG || {}).meta || {};
  return (meta[page] && meta[page].name) || page;
}

function getExerciseCategory(page) {
  const meta = (window.EXERCISE_CONFIG || {}).meta || {};
  return (meta[page] && meta[page].cat) || null;
}

function getCoachTips(page) {
  if (EXERCISE_COACH_TIPS[page]) return EXERCISE_COACH_TIPS[page];
  const category = getExerciseCategory(page);
  if (category && EXERCISE_COACH_TIPS_BY_CATEGORY[category]) {
    return EXERCISE_COACH_TIPS_BY_CATEGORY[category];
  }
  return EXERCISE_COACH_TIPS.default;
}

function getCoachContextLabel(page) {
  const category = getExerciseCategory(page);
  return category || 'General';
}

function getCoachState(page) {
  if (!EXERCISE_COACH.byPage[page]) {
    EXERCISE_COACH.byPage[page] = {
      attempts: 0,
      correctTotal: 0,
      errorTotal: 0,
      errorStreak: 0,
      successStreak: 0,
      lastToastAt: 0,
      lastAccuracyToastAttempt: 0
    };
  }
  return EXERCISE_COACH.byPage[page];
}

function getCoachLevel(errorStreak) {
  if (errorStreak >= 6) return 3;
  if (errorStreak >= 3) return 2;
  return 1;
}

function pickCoachTip(page, errorStreak) {
  const tips = getCoachTips(page);
  const tier = Math.max(1, Math.floor(errorStreak / 2));
  const index = Math.min(tips.length - 1, tier - 1);
  return {
    tip: tips[index],
    level: getCoachLevel(errorStreak)
  };
}

function maybeShowCoachToast(page, delta) {
  const state = getCoachState(page);
  const typed = Math.max(1, Number(delta.typed) || 0);
  state.attempts += typed;

  const errors = Math.max(0, Number(delta.errors) || 0);
  const correct = Math.max(0, Number(delta.correct) || 0);
  state.errorTotal += errors;
  state.correctTotal += correct;

  if (errors > 0) {
    state.errorStreak += errors;
    state.successStreak = 0;
  } else if (correct > 0) {
    state.successStreak += correct;
    if (state.errorStreak >= 2 && state.successStreak >= 1) {
      state.errorStreak = 0;
      const now = Date.now();
      if (now - state.lastToastAt >= EXERCISE_COACH.minToastGapMs) {
        state.lastToastAt = now;
        showToast(`C est mieux sur ${getExerciseName(page)}. Continue.`, 'success');
      }
      return;
    }
    state.errorStreak = 0;
    return;
  }

  const now = Date.now();
  const thresholdReached = state.errorStreak === 2 || state.errorStreak === 4 || (state.errorStreak > 4 && state.errorStreak % 3 === 0);
  if (!thresholdReached) return;
  if (now - state.lastToastAt < EXERCISE_COACH.minToastGapMs) return;

  state.lastToastAt = now;
  const choice = pickCoachTip(page, state.errorStreak);
  const context = getCoachContextLabel(page);
  showToast(`Aide ${getExerciseName(page)} (${context}): ${choice.tip}`, 'info');
}

function maybeShowAccuracyToast(page, state, now) {
  if (state.attempts < EXERCISE_COACH.accuracyToastStartAtAttempts) return;
  const cadence = EXERCISE_COACH.accuracyToastEveryAttempts;
  const isMilestone = state.attempts % cadence === 0;
  if (!isMilestone) return;
  if (state.lastAccuracyToastAttempt === state.attempts) return;
  if (now - state.lastToastAt < EXERCISE_COACH.minToastGapMs) return;

  state.lastAccuracyToastAttempt = state.attempts;
  const accuracy = calcAccuracy(state.correctTotal, state.correctTotal + state.errorTotal);

  if (accuracy >= 85) {
    state.lastToastAt = now;
    showToast(`Reussite ${getExerciseName(page)} : ${accuracy}%. Tres bien.`, 'success');
    return;
  }
  if (accuracy >= 65) {
    state.lastToastAt = now;
    showToast(`Reussite ${getExerciseName(page)} : ${accuracy}%. Bien.`, 'info');
    return;
  }
  state.lastToastAt = now;
  showToast(`Reussite ${getExerciseName(page)} : ${accuracy}%. Va plus doucement.`, 'info');
}

function setExerciseCoachOptions(options) {
  const opts = options || {};
  if (Number.isFinite(opts.minToastGapMs) && opts.minToastGapMs >= 500) {
    EXERCISE_COACH.minToastGapMs = Math.round(opts.minToastGapMs);
  }
  if (Number.isFinite(opts.accuracyToastEveryAttempts) && opts.accuracyToastEveryAttempts >= 2) {
    EXERCISE_COACH.accuracyToastEveryAttempts = Math.round(opts.accuracyToastEveryAttempts);
  }
  if (Number.isFinite(opts.accuracyToastStartAtAttempts) && opts.accuracyToastStartAtAttempts >= 1) {
    EXERCISE_COACH.accuracyToastStartAtAttempts = Math.round(opts.accuracyToastStartAtAttempts);
  }

  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.setItem(EXERCISE_COACH_STORAGE_KEY, JSON.stringify(getExerciseCoachOptions()));
    } catch (err) {
      // ignore storage errors (private mode / quota)
    }
  }
}

function getExerciseCoachOptions() {
  return {
    minToastGapMs: EXERCISE_COACH.minToastGapMs,
    accuracyToastEveryAttempts: EXERCISE_COACH.accuracyToastEveryAttempts,
    accuracyToastStartAtAttempts: EXERCISE_COACH.accuracyToastStartAtAttempts
  };
}

function initExerciseCoachOptionsFromStorage() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    const raw = window.localStorage.getItem(EXERCISE_COACH_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return;
    setExerciseCoachOptions(parsed);
  } catch (err) {
    // ignore malformed data
  }
}

if (typeof window !== 'undefined') {
  window.setExerciseCoachOptions = setExerciseCoachOptions;
  window.getExerciseCoachOptions = getExerciseCoachOptions;
  initExerciseCoachOptionsFromStorage();
}

/**
 * Enregistrer une progression (delta) pour un exercice
 * Appelle ScoreManager.updateMetrics + met a jour le statut in_progress
 * @param {string} page  - identifiant ex: 'clavier'
 * @param {object} delta - {correct, typed, errors, xp}
 */
function recordExerciseProgress(page, delta) {
  const session = ensureActiveSessionState(page);
  session.correct += Math.max(0, Number(delta && delta.correct) || 0);
  session.typed += Math.max(0, Number(delta && delta.typed) || 0);
  session.errors += Math.max(0, Number(delta && delta.errors) || 0);
  session.xp += Math.max(0, Number(delta && delta.xp) || 0);

  ScoreManager.updateMetrics(page, delta);
  ScoreManager.promoteStatus(page, 'in_progress');
  maybeShowCoachToast(page, delta);
  maybeShowAccuracyToast(page, getCoachState(page), Date.now());
}

/**
 * Enregistrer un snapshot complet (écrase les données)
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
  if (status === 'in_progress') {
    ensureActiveSessionState(page);
  }
  if (status === 'completed') {
    finalizeExerciseSession(page);
  }
  if (status === 'not_started') {
    delete EXERCISE_COACH.byPage[page];
    resetSessionState(page);
  }
}

/**
 * Démarrer explicitement une session d'exercice
 * @param {string} page
 */
function startExerciseSession(page) {
  ScoreManager.promoteStatus(page, 'in_progress');
  delete EXERCISE_COACH.byPage[page];
  EXERCISE_SESSION.byPage[page] = createSessionState();
}

/**
 * Terminer explicitement une session d'exercice
 * @param {string} page
 */
function endExerciseSession(page) {
  ScoreManager.promoteStatus(page, 'completed');
  finalizeExerciseSession(page);
  delete EXERCISE_COACH.byPage[page];
}

/**
 * Calculer la précision (en %)
 * @param {number} correct
 * @param {number} typed
 * @returns {number}
 */
function calcAccuracy(correct, typed) {
  if (!typed) return 0;
  return Math.round((correct / typed) * 100);
}

/**
 * Calculer les XP gagnés pour un exercice (formule simple)
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
 * Créer un effet de confetti (succès)
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
 * Les règles XP sont désormais centralisées sur games/regles.html.
 * Cette fonction reste en no-op pour compatibilité avec les pages existantes.
 */
function showXPRules() {
  return;
}

/**
 * Obtenir l'exercice suivant recommandé dans le parcours pédagogique
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

/**
 * Obtenir l'exercice précédent dans le parcours pédagogique
 * @param {string} currentPage - page actuelle (ex: 'clavier')
 * @returns {object} {name: string, href: string}
 */
function getPrevExercise(currentPage) {
  const config = window.EXERCISE_CONFIG || {};
  const pages = config.orderedPages || [];
  const meta = config.meta || {};
  const currentIndex = pages.indexOf(currentPage);
  if (currentIndex === -1) return { name: null, href: null };

  const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
  const prevPage = pages[prevIndex];
  const metaData = (meta[prevPage] && meta[prevPage].name) ? meta[prevPage] : {};
  return {
    name: metaData.name || prevPage,
    href: metaData.href || `${prevPage}.html`
  };
}

/**
 * Copier un résumé de session dans le presse-papiers
 * @param {string} pageName - nom du jeu
 * @param {object} stats - {correct, errors, xp, accuracy}
 */
function copyResultSummary(pageName, stats) {
  const date = new Date().toLocaleDateString('fr-CH');
  const text = [
    `Plateforme Autonomie numérique — ${date}`,
    `Jeu : ${pageName}`,
    `Correctes : ${stats.correct} | Erreurs : ${stats.errors}`,
    `Précision : ${stats.accuracy}% | XP : ${stats.xp}`,
    `---`,
    `Résultats générés sur la plateforme locale`
  ].join('\n');

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast('Résumé copié dans le presse-papiers !', 'success'))
      .catch(() => showToast('Impossible de copier automatiquement. Assurez-vous que le site est en HTTPS ou localhost.', 'error'));
    return;
  }

  const helper = document.createElement('textarea');
  helper.value = text;
  helper.setAttribute('readonly', '');
  helper.style.position = 'absolute';
  helper.style.left = '-9999px';
  document.body.appendChild(helper);
  helper.select();
  try {
    document.execCommand('copy');
    showToast('Résumé copié dans le presse-papiers !', 'success');
  } catch (err) {
    showToast('Impossible de copier automatiquement. Assurez-vous que le site est en HTTPS ou localhost.', 'error');
  } finally {
    helper.remove();
  }
}

const EXERCISE_INTRO_COPY = {
  alphabet: {
    header: 'Remettez les mots dans l’ordre alphabétique, du haut vers le bas.',
    steps: [
      'Lisez tous les mots.',
      'Faites glisser les lignes pour les remettre dans l’ordre.',
      'Cliquez sur « Vérifier » quand la liste vous semble juste.'
    ]
  },
  anagramme: {
    header: 'Remettez les lettres dans le bon ordre pour former le mot attendu.',
    steps: [
      'Lisez les lettres mélangées.',
      'Repérez les lettres qui vont ensemble.',
      'Validez quand le mot vous semble correct.'
    ]
  },
  apparier: {
    header: 'Associez chaque élément avec la bonne réponse.',
    steps: [
      'Lisez les deux colonnes.',
      'Repérez d’abord les associations évidentes.',
      'Vérifiez vos paires avant de confirmer.'
    ]
  },
  'cherche-clique': {
    header: 'Repérez l’icône demandée et cliquez dessus.',
    steps: [
      'Lisez la cible.',
      'Balayez la grille calmement.',
      'Cliquez seulement quand vous êtes sûr.'
    ]
  },
  classement: {
    header: 'Rangez les éléments dans le bon ordre.',
    steps: [
      'Lisez tous les éléments.',
      'Cherchez d’abord le premier et le dernier.',
      'Replacez ensuite les éléments du milieu.'
    ]
  },
  clavier: {
    header: 'Appuyez sur la bonne touche au bon moment.',
    steps: [
      'Regardez la touche demandée.',
      'Posez vos doigts calmement.',
      'Appuyez, puis passez à la suivante.'
    ]
  },
  cliquer: {
    header: 'Suivez les consignes pour pratiquer les gestes de la souris.',
    steps: [
      'Lisez l’action demandée.',
      'Faites le geste indiqué.',
      'Observez le résultat avant de continuer.'
    ]
  },
  completer: {
    header: 'Choisissez le mot qui complète correctement la phrase.',
    steps: [
      'Lisez toute la phrase.',
      'Comparez les propositions.',
      'Validez quand le mot choisi convient.'
    ]
  },
  demeler: {
    header: 'Retrouvez le bon mot à partir des lettres mélangées.',
    steps: [
      'Lisez les lettres.',
      'Cherchez les groupes qui vont ensemble.',
      'Recomposez le mot complet.'
    ]
  },
  ecouter: {
    header: 'Écoutez attentivement, puis donnez la bonne réponse.',
    steps: [
      'Écoutez une première fois.',
      'Repérez les mots importants.',
      'Répondez après avoir tout entendu.'
    ]
  },
  'email-ecrire': {
    header: 'Lisez la situation, puis choisissez l’e-mail qui convient le mieux.',
    steps: [
      'Lisez bien la situation.',
      'Comparez l’objet, le message et les pièces jointes.',
      'Choisissez l’e-mail le plus adapté.'
    ]
  },
  'email-pro': {
    header: 'Lisez le message, puis choisissez la réponse la plus adaptée.',
    steps: [
      'Lisez l’e-mail reçu.',
      'Repérez ce que la personne demande.',
      'Choisissez la réponse la plus professionnelle.'
    ]
  },
  formulaire: {
    header: 'Lisez le profil, puis recopiez les mêmes informations dans le formulaire.',
    steps: [
      'Lisez le profil à gauche.',
      'Copiez les mêmes informations à droite.',
      'Vérifiez avant de continuer.'
    ]
  },
  'mots-croises': {
    header: 'Complétez la grille à l’aide des définitions.',
    steps: [
      'Lisez la définition.',
      'Cherchez les lettres déjà disponibles.',
      'Complétez la grille mot par mot.'
    ]
  },
  'mots-meles': {
    header: 'Trouvez les mots cachés dans la grille.',
    steps: [
      'Lisez la liste de mots.',
      'Cherchez ligne par ligne puis colonne par colonne.',
      'N’oubliez pas les diagonales.'
    ]
  },
  paire: {
    header: 'Retournez les cartes pour retrouver les paires.',
    steps: [
      'Retournez deux cartes.',
      'Mémorisez leur position.',
      'Reformez toutes les paires.'
    ]
  },
  pendu: {
    header: 'Trouvez le mot avant d’épuiser tous les essais.',
    steps: [
      'Commencez par les lettres fréquentes.',
      'Observez le motif des lettres trouvées.',
      'Essayez de deviner le mot complet.'
    ]
  },
  quiz: {
    header: 'Lisez la question, puis choisissez la bonne réponse.',
    steps: [
      'Lisez toute la question.',
      'Comparez les réponses proposées.',
      'Choisissez celle qui convient le mieux.'
    ]
  },
  retaper: {
    header: 'Retapez le texte affiché en faisant le moins d’erreurs possible.',
    steps: [
      'Lisez le texte une première fois.',
      'Retapez-le sans vous presser.',
      'Corrigez si besoin avant de continuer.'
    ]
  },
  trier: {
    header: 'Classez chaque élément dans la bonne catégorie.',
    steps: [
      'Lisez les catégories.',
      'Prenez un élément à la fois.',
      'Vérifiez tous les classements à la fin.'
    ]
  },
  'vrai-faux': {
    header: 'Lisez l’affirmation, puis choisissez vrai ou faux.',
    steps: [
      'Lisez l’affirmation jusqu’au bout.',
      'Cherchez le mot important.',
      'Choisissez vrai ou faux.'
    ]
  }
};

function buildExerciseMission(page) {
  const copy = EXERCISE_INTRO_COPY[page];
  if (!copy || !Array.isArray(copy.steps) || copy.steps.length === 0) return null;

  const mission = document.createElement('div');
  mission.className = 'exercise-mission fade-up delay-1';
  copy.steps.forEach((step, index) => {
    const item = document.createElement('div');
    item.className = 'exercise-mission-item';

    const badge = document.createElement('span');
    badge.className = 'exercise-mission-step';
    badge.textContent = String(index + 1);

    const text = document.createElement('div');
    text.className = 'exercise-mission-text';
    text.textContent = step;

    item.appendChild(badge);
    item.appendChild(text);
    mission.appendChild(item);
  });
  return mission;
}

function enhanceExerciseIntro() {
  const page = (location.pathname.split('/').pop() || '').replace(/\.html$/i, '');
  const copy = EXERCISE_INTRO_COPY[page];
  if (!copy) return;

  const header = document.querySelector('.page-header');
  if (header && copy.header) {
    const paragraph = header.querySelector('p');
    if (paragraph) paragraph.textContent = copy.header;
  }

  const existingMission = document.querySelector(
    '.exercise-mission, .mission-strip, .mail-mission, .alphabet-mission, .route-summary, .target-topline, .mission-card'
  );
  if (existingMission || !header) return;

  const mission = buildExerciseMission(page);
  if (!mission) return;
  header.insertAdjacentElement('afterend', mission);
}

document.addEventListener('DOMContentLoaded', enhanceExerciseIntro);
