/* ===== JS/DATA/QUIZ-DATA.JS ===== */
'use strict';

window.QUIZ_DATA = [

  // === ORP / JOB ROOM ===
  {
    category: 'ORP',
    difficulty: '⭐ Facile',
    question: 'Pourquoi est-il important de compléter son profil Job Room ?',
    choices: [
      'Pour que l\'ORP puisse valider le dossier plus vite',
      'Pour recevoir automatiquement un salaire',
      'Pour éviter de devoir chercher un emploi',
      'Pour être exempté de recherches d\'emploi'
    ],
    answer: 0,
    explication: 'Un profil complet facilite le suivi du dossier par votre conseiller ORP et accélère certaines démarches administratives.'
  },


  // === CANDIDATURE & E-MAIL ===
  {
    category: 'Candidature',
    difficulty: '⭐ Facile',
    question: 'Quel est le meilleur objet pour un e-mail de candidature ?',
    choices: [
      'Candidature',
      'Bonjour',
      'Candidature – Vendeur / Prénom Nom',
      'Merci de me répondre'
    ],
    answer: 2,
    explication: 'Un objet précis avec le nom du poste et votre identité permet au recruteur de comprendre immédiatement de quoi il s\'agit et de retrouver facilement votre message.'
  },


  // === E-MAIL PRATIQUE ===
  {
    category: 'E-mail',
    difficulty: '⭐ Facile',
    question: 'Vous voulez envoyer un document à votre conseiller. Quelle partie de l\'e-mail devez-vous remplir pour indiquer à qui vous écrivez ?',
    choices: [
      'Le champ "Objet"',
      'Le champ "À" (destinataire)',
      'La signature',
      'Le corps du message'
    ],
    answer: 1,
    explication: 'Le champ "À" contient l\'adresse e-mail de la personne à qui vous envoyez le message (ex : conseiller@emploi.ch). Sans cela, le message ne part pas.'
  },


  // === INTERNET ===
  {
    category: 'Internet',
    difficulty: '⭐ Facile',
    question: 'Vous voulez aller sur le site de la commune. Où tapez-vous l\'adresse du site ?',
    choices: [
      'Dans le moteur de recherche Google',
      'Dans la barre d\'adresse en haut du navigateur',
      'Dans l\'onglet "Favoris"',
      'Dans un document Word'
    ],
    answer: 1,
    explication: 'La barre d\'adresse (en haut du navigateur) permet d\'aller directement à un site si vous connaissez son adresse (ex : www.ch.ch). Sinon, utilisez Google pour chercher.'
  },


  // === DÉMARCHES EN LIGNE ===
  {
    category: 'Démarches',
    difficulty: '⭐ Facile',
    question: 'Vous devez prendre rendez-vous en ligne chez le médecin. Que cherchez-vous sur le site du cabinet ?',
    choices: [
      'La rubrique "Contact" ou "Prendre rendez-vous"',
      'La rubrique "Actualités"',
      'La rubrique "À propos"',
      'La rubrique "Emploi"'
    ],
    answer: 0,
    explication: 'Les sites proposent généralement une rubrique "Prendre rendez-vous" ou "Contact" bien visible. Sur certains sites, un bouton direct permet de réserver en ligne.'
  },


  // === SÉCURITÉ ===
  {
    category: 'Sécurité',
    difficulty: '⭐ Facile',
    question: 'Quel mot de passe est le plus sûr pour protéger votre compte e-mail ?',
    choices: [
      '123456',
      'Votre prénom',
      'Une combinaison de lettres, chiffres et symboles (ex : Soleil#2024)',
      'Le mot "password"'
    ],
    answer: 2,
    explication: 'Un bon mot de passe est long et mélange majuscules, minuscules, chiffres et symboles. Évitez les informations personnelles (prénom, date de naissance) facilement devinables.'
  },


  // === ORGANISATION & FICHIERS ===
  {
    category: 'Organisation',
    difficulty: '⭐ Facile',
    question: 'Pourquoi est-il important de bien nommer ses fichiers ?',
    choices: [
      'Pour faire joli',
      'Pour les retrouver et les partager facilement',
      'Pour réduire leur taille',
      'Pour les envoyer plus vite'
    ],
    answer: 1,
    explication: 'Un nom de fichier clair (ex : Nom_Prenom_CV.pdf) permet de retrouver rapidement un document et aide le destinataire à l\'identifier. Évitez les noms comme "Document1.pdf".'
  },

];
