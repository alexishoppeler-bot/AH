'use strict';

window.EXERCISE_CONFIG = {
  // Ordre global (navigation, evaluations, recommandations)
  orderedPages: [
    'clavier', 'cliquer', 'fenetres-web', 'anagramme', 'pendu', 'mots-meles',
    'mots-croises', 'quiz', 'email-ecrire', 'email-pro', 'formulaire', 'dossiers-explorateur', 'vrai-faux', 'ecouter', 'demeler',
    'completer', 'apparier', 'trier', 'classement', 'paire'
  ],

  // Metadonnees communes
  meta: {
    clavier:        { name: 'Dactylographie', href: 'clavier.html', cat: 'Pratique' },
    cliquer:        { name: 'Clic souris', href: 'cliquer.html', cat: 'Pratique' },
    'fenetres-web': { name: 'Navigation web et fenetres', href: 'fenetres-web.html', cat: 'Pratique' },
    demeler:        { name: 'Reconstruction de phrases', href: 'demeler.html', cat: 'Langue' },
    anagramme:      { name: 'Reorganisation lexicale', href: 'anagramme.html', cat: 'Langue' },
    apparier:       { name: 'Association conceptuelle', href: 'apparier.html', cat: 'Mémorisation' },
    classement:     { name: 'Classement logique', href: 'classement.html', cat: 'Logique' },
    completer:      { name: 'Completion de texte', href: 'completer.html', cat: 'Langue' },
    'mots-croises': { name: 'Grille de vocabulaire', href: 'mots-croises.html', cat: 'Langue' },
    'mots-meles':   { name: 'Recherche de termes', href: 'mots-meles.html', cat: 'Langue' },
    paire:          { name: 'Appariement de cartes', href: 'paire.html', cat: 'Mémorisation' },
    pendu:          { name: 'Devinette lexicale', href: 'pendu.html', cat: 'Langue' },
    quiz:           { name: 'Questionnaire de connaissances', href: 'quiz.html', cat: 'Logique' },
    'email-ecrire': { name: 'Redaction d e-mail', href: 'email-ecrire.html', cat: 'Professionnel' },
    'email-pro':    { name: 'Reponse e-mail professionnelle', href: 'email-pro.html', cat: 'Professionnel' },
    formulaire:     { name: 'Formulaire de candidature', href: 'formulaire.html', cat: 'Professionnel' },
    'dossiers-explorateur': { name: 'Gestion des dossiers', href: 'dossiers-explorateur.html', cat: 'Pratique' },
    trier:          { name: 'Tri et classification', href: 'trier.html', cat: 'Logique' },
    'vrai-faux':    { name: 'Validation d affirmations', href: 'vrai-faux.html', cat: 'Logique' },
    ecouter:        { name: 'Comprehension orale', href: 'ecouter.html', cat: 'Oral' }
  },

  // Etapes et bonus (source unique)
  stages: [
    {
      id: 'stage-1',
      number: 1,
      name: 'Fondamentaux',
      description: 'Maîtriser les bases de l’ordinateur',
      badge: '',
      level: 'beginner',
      color: '#34d399',
      exercises: [
        { page: 'clavier', name: 'Dactylographie', icon: '' },
        { page: 'cliquer', name: 'Clic souris', icon: '' }
      ],
      unlockCondition: 'always'
    },
    {
      id: 'stage-2',
      number: 2,
      name: 'Pratique courante',
      description: 'Développer les compétences utiles',
      badge: '',
      level: 'intermediate',
      color: '#f59e0b',
      exercises: [
        { page: 'anagramme', name: 'Reorganisation lexicale', icon: '' },
        { page: 'quiz', name: 'Questionnaire de connaissances', icon: '' },
        { page: 'ecouter', name: 'Comprehension orale', icon: '' }
      ],
      unlockCondition: 'always',
      minExercises: 1
    },
    {
      id: 'stage-3',
      number: 3,
      name: 'Maîtrise avancée',
      description: 'S’entraîner sur des jeux complets',
      badge: '',
      level: 'advanced',
      color: '#f87171',
      exercises: [
        { page: 'mots-croises', name: 'Grille de vocabulaire', icon: '' },
        { page: 'completer', name: 'Completion de texte', icon: '' }
      ],
      unlockCondition: 'always',
      minExercises: 2
    }
  ],

  bonusExercises: [
    { page: 'email-ecrire', name: 'Redaction d e-mail', icon: '', level: 'intermediate', unlocksAt: 'always' },
    { page: 'email-pro', name: 'Reponse e-mail professionnelle', icon: '', level: 'intermediate', unlocksAt: 'always' },
    { page: 'formulaire', name: 'Formulaire de candidature', icon: '', level: 'intermediate', unlocksAt: 'always' },
    { page: 'fenetres-web', name: 'Navigation web et fenetres', icon: '', level: 'intermediate', unlocksAt: 'always' },
    { page: 'dossiers-explorateur', name: 'Gestion des dossiers', icon: '', level: 'intermediate', unlocksAt: 'always' },
    { page: 'pendu', name: 'Devinette lexicale', icon: '', level: 'intermediate', unlocksAt: 'always' },
    { page: 'mots-meles', name: 'Recherche de termes', icon: '', level: 'advanced', unlocksAt: 'always' },
    { page: 'vrai-faux', name: 'Validation d affirmations', icon: '', level: 'intermediate', unlocksAt: 'always' },
    { page: 'apparier', name: 'Association conceptuelle', icon: '', level: 'advanced', unlocksAt: 'always' },
    { page: 'trier', name: 'Tri et classification', icon: '', level: 'advanced', unlocksAt: 'always' },
    { page: 'classement', name: 'Classement logique', icon: '', level: 'advanced', unlocksAt: 'always' },
    { page: 'demeler', name: 'Reconstruction de phrases', icon: '', level: 'advanced', unlocksAt: 'always' },
    { page: 'paire', name: 'Appariement de cartes', icon: '', level: 'advanced', unlocksAt: 'always' }
  ],

  // Regles XP centralisees (source unique pour games/regles.html)
  xpRules: {
    general: [
      'Les bonnes reponses donnent des XP selon les regles de chaque jeu.',
      'Les mauvaises reponses donnent en general 0 XP (dans Cliquer certaines erreurs retirent 1 XP, sans descendre sous 0).',
      'Chaque tranche de 100 XP fait progresser ton niveau global.'
    ],
    byPage: {
      clavier: '1 XP par caractere correct.',
      cliquer: 'Clic/placement correct: +2 XP (double-clic reussi: +3 XP). Erreur/faux clic: -1 XP (minimum 0).',
      'fenetres-web': 'Bonne action (ouvrir/reduire/agrandir/restaurer/fermer): +4 XP. Erreur: 0 XP.',
      anagramme: 'Bonne reponse: +3 XP (base + bonus possible sans indice).',
      pendu: 'Mot trouve: +5 XP sans indice, +3 XP avec indice.',
      'mots-meles': '+3 XP par mot trouve.',
      'mots-croises': '+5 XP par mot valide.',
      quiz: 'Bonne reponse: 3 XP + bonus serie (+2 des 3 bonnes d affilee).',
      'email-ecrire': 'Bonne reponse: +3 XP. Mauvaise reponse: 0 XP.',
      'email-pro': 'Bonne reponse: +3 XP. Mauvaise reponse: 0 XP.',
      formulaire: 'Par formulaire: +5 XP par champ correct, +20 XP bonus si tout est juste, -10 XP si indice utilise (minimum 0).',
      'dossiers-explorateur': 'Mission validee: +6 XP.',
      'vrai-faux': 'Bonne reponse: 2 XP + bonus serie (+1 des 3 bonnes d affilee).',
      ecouter: 'Bonne reponse: +4 XP si trouvee vite, sinon +2 XP.',
      demeler: 'Bonne reponse: +5 XP sans indice, +3 XP avec indice. Utiliser un indice retire 2 XP (minimum 0).',
      completer: 'Bonne reponse: +3 XP sans indice, +1 XP avec indice.',
      apparier: '+2 XP par paire correcte.',
      trier: 'Par manche: XP = (2 x reponses correctes) - erreurs, avec minimum 0.',
      classement: 'Ordre correct valide: +5 XP.',
      paire: 'Bonne reponse: +2 XP.'
    }
  }
};
