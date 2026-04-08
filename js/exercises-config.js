'use strict';

(function initExerciseConfig() {
  const nonOrderedPages = ['accueil', 'evaluations', 'regles', 'donnees'];
  const entries = [
    { page: 'accueil', name: 'Accueil', icon: '🏠', cat: 'Navigation' },
    { page: 'formulaire', name: 'Formulaire', icon: '📝', cat: 'Candidature' },
    { page: 'email-ecrire', name: 'Ecrire un e-mail', icon: '✉️', cat: 'Communication' },
    { page: 'email-pro', name: 'E-mails professionnels', icon: '📧', cat: 'Communication' },
    { page: 'alphabet', name: 'Alphabet', icon: '🔤', cat: 'Langue' },
    { page: 'clavier', name: 'Clavier', icon: '⌨️', cat: 'Langue' },
    { page: 'ecouter', name: 'Ecouter', icon: '🎧', cat: 'Langue' },
    { page: 'cliquer', name: 'Cliquer', icon: '🖱️', cat: 'Competences' },
    { page: 'cherche-clique', name: 'Cherche & clique', icon: '🔎', cat: 'Competences' },
    { page: 'completer', name: 'Completer', icon: '🧩', cat: 'Competences' },
    { page: 'orientation', name: 'Orientation', icon: '🗺️', cat: 'Jeu' },
    { page: 'anagramme', name: 'Anagramme', icon: '🔀', cat: 'Jeu' },
    { page: 'apparier', name: 'Apparier', icon: '🔗', cat: 'Jeu' },
    { page: 'pendu', name: 'Pendu', icon: '🪢', cat: 'Jeu' },
    { page: 'vrai-faux', name: 'Vrai / Faux', icon: '✅', cat: 'Jeu' },
    { page: 'classement', name: 'Classement', icon: '📊', cat: 'Jeu' },
    { page: 'mots-croises', name: 'Mots croises', icon: '🧱', cat: 'Jeu' },
    { page: 'mots-meles', name: 'Mots meles', icon: '🔠', cat: 'Jeu' },
    { page: 'demeler', name: 'Demeler', icon: '🧶', cat: 'Jeu' },
    { page: 'quiz', name: 'Quiz', icon: '❓', cat: 'Jeu' },
    { page: 'trier', name: 'Trier', icon: '🗂️', cat: 'Jeu' },
    { page: 'paire', name: 'Paires', icon: '🃏', cat: 'Jeu' },
    { page: 'evaluations', name: 'Evaluations', icon: '📈', cat: 'Suivi' },
    { page: 'regles', name: 'Regles XP', icon: '📏', cat: 'Suivi' },
    { page: 'donnees', name: 'Donnees', icon: '💾', cat: 'Suivi' }
  ];

  const XP_RULES_BY_PAGE = {
    'alphabet': '+5 XP par bonne reponse.',
    'clavier': '+1 XP par bonne touche.',
    'cherche-clique': '+3 XP par clic correct.',
    'apparier': '+2 XP par paire trouvee.',
    'anagramme': '+3 XP sans indice, +1 XP avec indice.',
    'completer': '+3 XP sans indice, +1 XP avec indice.',
    'demeler': '+5 XP sans indice, +3 XP avec indice.',
    'ecouter': '+4 XP (1re ecoute), +3 XP (2e ecoute+).',
    'pendu': '+5 XP sans indice, +3 XP avec indice.',
    'cliquer': '+2-3 XP par action correcte.',
    'classement': '+5 XP par classement parfait.',
    'quiz': '+3 XP par bonne reponse + bonus de serie.',
    'vrai-faux': '+2 XP par bonne reponse + bonus de serie.',
    'mots-croises': '+5 XP par mot trouve.',
    'mots-meles': '+3 XP par mot trouve.',
    'paire': '+2 XP par paire memorisee.',
    'trier': '+2 XP par element correct (reduit par les erreurs).',
    'formulaire': '+6-9 XP par formulaire reussi (bonus si sans indice).',
    'email-ecrire': '+3 XP par bonne reponse.',
    'email-pro': '+3 XP par bonne reponse.',
    'simulations-dialogues': '+3 XP (bonne reponse), +1 XP (reponse moyenne).',
    'orientation': '+3 XP arrivee a destination, +2 XP chemin parfait.'
  };

  const CATEGORY_CONTENT_BY_CATEGORY = {
    Candidature: {
      title: 'Formulaire et papiers',
      desc: 'Ecrire les bonnes informations et choisir les bons documents.'
    },
    Communication: {
      title: 'E-mails simples',
      desc: 'Lire une situation et choisir ou ecrire la bonne reponse.'
    },
    Navigation: {
      title: 'Ordinateur et internet',
      desc: 'Utiliser les fenetres, les dossiers et les pages internet.'
    },
    Langue: {
      title: 'Lire, ecouter, ecrire',
      desc: 'Travailler les mots, les lettres, l ecoute et le clavier.'
    },
    Competences: {
      title: 'Petites actions utiles',
      desc: 'Observer, cliquer, completer et faire une action simple.'
    },
    Jeu: {
      title: 'Apprendre avec le jeu',
      desc: 'Memoriser, trier, apparier et repondre en jouant.'
    }
  };

  const meta = {};
  const orderedPages = [];
  const xpByPage = {};
  for (const e of entries) {
    meta[e.page] = {
      name: e.name,
      icon: e.icon,
      cat: e.cat,
      href: e.page + '.html'
    };
    if (!nonOrderedPages.includes(e.page)) {
      orderedPages.push(e.page);
      xpByPage[e.page] = XP_RULES_BY_PAGE[e.page] || { perCorrect: 1, perAttempt: 0, completionBonus: 3 };
    }
  }

  window.EXERCISE_CONFIG = {
    meta,
    orderedPages,
    nonOrderedPages,
    bonusExercises: [],
    categoryContentByCategory: CATEGORY_CONTENT_BY_CATEGORY,
    xpRules: { byPage: xpByPage },
    apps: [
      {
        name: 'Generateur de CV',
        icon: '📄',
        desc: 'Creez votre CV et votre lettre de motivation etape par etape. Export Word, sans internet.',
        href: 'generateur-cv/generateur-cv.html'
      },
      {
        name: 'Competences CV',
        icon: 'CV',
        desc: 'Choisissez un metier et copiez des competences simples a coller dans Word.',
        href: 'cv-competences.html'
      },
      {
        name: 'Simulateur d\'e-mails professionnels',
        icon: '📧',
        desc: 'Choisissez un sujet, completez les champs, puis copiez et envoyez votre e-mail.',
        href: 'simulateur-email/simulateur-email.html'
      }
    ]
  };
})();
