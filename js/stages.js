/* ===== JS/STAGES.JS — Système d'étapes centralisé ===== */
'use strict';

const StageManager = (() => {
  const CONFIG = window.EXERCISE_CONFIG || {};
  // --- Configuration des étapes et exercices ---
  const STAGES = CONFIG.stages || [
    {
      id: 'stage-1',
      number: 1,
      name: 'Fondamentaux',
      description: 'Maîtriser les bases de l\'ordinateur',
      badge: '🟢',
      level: 'beginner',
      color: '#34d399',
      exercises: [
        { page: 'clavier', name: 'Maîtriser le clavier', icon: '⌨️' },
        { page: 'cliquer', name: 'Naviguer à la souris', icon: '🖱️' }
      ],
      unlockCondition: 'always' // Toujours débloquée
    },
    {
      id: 'stage-2',
      number: 2,
      name: 'Pratique courante',
      description: 'Développer vos compétences',
      badge: '🟡',
      level: 'intermediate',
      color: '#f59e0b',
      exercises: [
        { page: 'anagramme', name: 'Vocabulaire métier', icon: '🔤' },
        { page: 'quiz', name: 'Comprendre les informations', icon: '❓' },
        { page: 'ecouter', name: 'Écouter et retenir', icon: '🎧' }
      ],
      unlockCondition: 'stage-1-completed', // Débloquée après étape 1
      minExercises: 1 // Au moins 1 exercice de l'étape 1 commencé
    },
    {
      id: 'stage-3',
      number: 3,
      name: 'Maîtrise avancée',
      description: 'Relever des défis complexes',
      badge: '🔴',
      level: 'advanced',
      color: '#f87171',
      exercises: [
        { page: 'mots-croises', name: 'Organiser les informations', icon: '🧩' },
        { page: 'completer', name: 'Résoudre les problèmes', icon: '✏️' }
      ],
      unlockCondition: 'stage-2-50pct', // Débloquée à 50% de l'étape 2
      minExercises: 2
    }
  ];

  // --- Exercices bonus (accessible après déblocage des étapes) ---
  const BONUS_EXERCISES = CONFIG.bonusExercises || [
    { page: 'pendu', name: 'Pendu', icon: '🪝', level: 'intermediate', unlocksAt: 'stage-1' },
    { page: 'mots-meles', name: 'Mots mêlés', icon: '🔠', level: 'advanced', unlocksAt: 'stage-2' },
    { page: 'vrai-faux', name: 'Vrai ou Faux', icon: '✅', level: 'intermediate', unlocksAt: 'stage-2' },
    { page: 'apparier', name: 'Apparier', icon: '🔗', level: 'advanced', unlocksAt: 'stage-2' },
    { page: 'trier', name: 'Trier', icon: '📂', level: 'advanced', unlocksAt: 'stage-3' },
    { page: 'classement', name: 'Classement', icon: '📊', level: 'advanced', unlocksAt: 'stage-3' },
    { page: 'demeler', name: 'Démêler', icon: '🔀', level: 'advanced', unlocksAt: 'stage-3' },
    { page: 'paire', name: 'Paire', icon: '🔁', level: 'advanced', unlocksAt: 'stage-3' }
  ];

  /**
   * Obtenir toutes les étapes
   */
  function getStages() {
    return STAGES;
  }

  /**
   * Obtenir une étape par ID
   */
  function getStage(stageId) {
    return STAGES.find(s => s.id === stageId);
  }

  /**
   * Obtenir l'étape actuelle (la plus avancée en cours)
   */
  function getCurrentStage() {
    const allData = ScoreManager.getAllData();

    for (let i = STAGES.length - 1; i >= 0; i--) {
      const stage = STAGES[i];
      const isUnlocked = isStageUnlocked(stage.id);
      if (isUnlocked) {
        return stage;
      }
    }
    return STAGES[0]; // Retour à l'étape 1 par défaut
  }

  /**
   * Vérifier si une étape est débloquée
   */
  function isStageUnlocked(stageId) {
    const stage = getStage(stageId);
    if (!stage) return false;

    if (stage.unlockCondition === 'always') return true;

    const allData = ScoreManager.getAllData();

    // Vérifier si l'étape précédente est complétée
    if (stage.unlockCondition === 'stage-1-completed' && stage.number > 1) {
      const prevStage = STAGES[stage.number - 2];
      return isStageCompleted(prevStage.id);
    }

    // Vérifier 50% de l'étape précédente
    if (stage.unlockCondition === 'stage-2-50pct' && stage.number > 2) {
      const prevStage = STAGES[stage.number - 2];
      return getStageProgress(prevStage.id) >= 50;
    }

    return false;
  }

  /**
   * Vérifier si une étape est complétée (tous les exercices complétés)
   */
  function isStageCompleted(stageId) {
    const stage = getStage(stageId);
    if (!stage) return false;

    const allData = ScoreManager.getAllData();
    return stage.exercises.every(ex => {
      const metrics = allData[ex.page];
      return metrics && metrics.status === 'completed';
    });
  }

  /**
   * Obtenir la progression d'une étape (en %)
   */
  function getStageProgress(stageId) {
    const stage = getStage(stageId);
    if (!stage || stage.exercises.length === 0) return 0;

    const allData = ScoreManager.getAllData();
    const completed = stage.exercises.filter(ex => {
      const metrics = allData[ex.page];
      return metrics && metrics.status === 'completed';
    }).length;

    return Math.round((completed / stage.exercises.length) * 100);
  }

  /**
   * Obtenir les exercices bonus débloqués
   */
  function getUnlockedBonuses() {
    return BONUS_EXERCISES.filter(bonus => {
      const unlocksAt = bonus.unlocksAt;
      if (unlocksAt === 'always') return true;
      return isStageUnlocked(unlocksAt);
    });
  }

  /**
   * Obtenir les exercices bonus non-débloqués
   */
  function getLockedBonuses() {
    return BONUS_EXERCISES.filter(bonus => {
      const unlocksAt = bonus.unlocksAt;
      if (unlocksAt === 'always') return false;
      return !isStageUnlocked(unlocksAt);
    });
  }

  /**
   * Obtenir le prochain exercice recommandé dans la progression
   */
  function getNextRecommendedExercise() {
    const currentStage = getCurrentStage();
    const allData = ScoreManager.getAllData();

    // Chercher le premier exercice non-complété de l'étape actuelle
    for (const exercise of currentStage.exercises) {
      const metrics = allData[exercise.page];
      if (!metrics || metrics.status !== 'completed') {
        return exercise;
      }
    }

    // Si l'étape est complétée, recommander la prochaine étape
    if (currentStage.number < STAGES.length) {
      const nextStage = STAGES[currentStage.number];
      if (isStageUnlocked(nextStage.id)) {
        return nextStage.exercises[0];
      }
    }

    // Sinon, recommander un bonus débloqué
    const unlockedBonuses = getUnlockedBonuses();
    if (unlockedBonuses.length > 0) {
      return unlockedBonuses[0];
    }

    return null;
  }

  /**
   * Obtenir le statut global de progression
   */
  function getGlobalProgress() {
    const stages = STAGES.map(stage => ({
      ...stage,
      progress: getStageProgress(stage.id),
      isCompleted: isStageCompleted(stage.id),
      isUnlocked: isStageUnlocked(stage.id)
    }));

    const totalProgress = Math.round(
      stages.reduce((sum, s) => sum + (s.isUnlocked ? s.progress : 0), 0) /
      stages.filter(s => s.isUnlocked).length || 0
    );

    return { stages, totalProgress };
  }

  return {
    getStages,
    getStage,
    getCurrentStage,
    isStageUnlocked,
    isStageCompleted,
    getStageProgress,
    getUnlockedBonuses,
    getLockedBonuses,
    getNextRecommendedExercise,
    getGlobalProgress
  };
})();
