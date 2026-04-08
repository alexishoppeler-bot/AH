/* ===== JS/DATA/PAIRE-DATA.JS ===== */
'use strict';

window.PAIRE_DATA = [
  // === VRAIES PAIRES ===
  {
    category: 'Formulaire',
    isPair: true,
    card1: { emoji: '👤', text: 'Nom' },
    card2: { emoji: '📝', text: 'Nom de famille' },
    explication: 'Dans un formulaire, le nom correspond au nom de famille.'
  },
  {
    category: 'Formulaire',
    isPair: true,
    card1: { emoji: '🧍', text: 'Prénom' },
    card2: { emoji: '🙂', text: 'Nom personnel' },
    explication: 'Le prénom est le nom personnel de la personne.'
  },
  {
    category: 'Adresse',
    isPair: true,
    card1: { emoji: '🏠', text: 'Adresse' },
    card2: { emoji: '📍', text: 'Lieu où j’habite' },
    explication: 'L’adresse indique le lieu où la personne habite.'
  },
  {
    category: 'Adresse',
    isPair: true,
    card1: { emoji: '📮', text: 'Code postal' },
    card2: { emoji: '🔢', text: 'Numéro de la commune' },
    explication: 'Le code postal est le numéro de la commune ou du quartier.'
  },
  {
    category: 'Contact',
    isPair: true,
    card1: { emoji: '📞', text: 'Téléphone' },
    card2: { emoji: '☎️', text: 'Numéro pour appeler' },
    explication: 'Le téléphone permet d’appeler une personne.'
  },
  {
    category: 'Contact',
    isPair: true,
    card1: { emoji: '✉️', text: 'E-mail' },
    card2: { emoji: '📧', text: 'Adresse électronique' },
    explication: 'L’e-mail est l’adresse électronique utilisée pour recevoir des messages.'
  },
  {
    category: 'Document',
    isPair: true,
    card1: { emoji: '✍️', text: 'Signature' },
    card2: { emoji: '✅', text: 'Nom écrit à la main' },
    explication: 'La signature est le nom écrit à la main à la fin du document.'
  },
  {
    category: 'Action',
    isPair: true,
    card1: { emoji: '☑️', text: 'Cocher' },
    card2: { emoji: '📦', text: 'Choisir une case' },
    explication: 'Cocher signifie sélectionner une case.'
  },
  {
    category: 'Action',
    isPair: true,
    card1: { emoji: '👀', text: 'Vérifier' },
    card2: { emoji: '🔎', text: 'Relire avant envoyer' },
    explication: 'Il faut vérifier les informations avant d’envoyer le formulaire.'
  },
  {
    category: 'Action',
    isPair: true,
    card1: { emoji: '📨', text: 'Envoyer' },
    card2: { emoji: '📤', text: 'Transmettre le document' },
    explication: 'Envoyer signifie transmettre le document.'
  },

  // === FAUSSES PAIRES ===
  {
    category: 'Formulaire',
    isPair: false,
    card1: { emoji: '👤', text: 'Nom' },
    card2: { emoji: '📅', text: 'Date' },
    explication: 'Le nom et la date sont deux informations différentes.'
  },
  {
    category: 'Formulaire',
    isPair: false,
    card1: { emoji: '🧍', text: 'Prénom' },
    card2: { emoji: '🏙️', text: 'Ville' },
    explication: 'Le prénom est une information personnelle, pas une adresse.'
  },
  {
    category: 'Adresse',
    isPair: false,
    card1: { emoji: '🏠', text: 'Adresse' },
    card2: { emoji: '✍️', text: 'Signature' },
    explication: 'L’adresse indique où on habite, la signature sert à valider le document.'
  },
  {
    category: 'Adresse',
    isPair: false,
    card1: { emoji: '📮', text: 'Code postal' },
    card2: { emoji: '📞', text: 'Téléphone' },
    explication: 'Le code postal concerne l’adresse, pas le téléphone.'
  },
  {
    category: 'Contact',
    isPair: false,
    card1: { emoji: '✉️', text: 'E-mail' },
    card2: { emoji: '🛣️', text: 'Rue' },
    explication: 'L’e-mail est une adresse électronique, la rue fait partie de l’adresse postale.'
  },
  {
    category: 'Document',
    isPair: false,
    card1: { emoji: '✍️', text: 'Signature' },
    card2: { emoji: '📞', text: 'Téléphone' },
    explication: 'La signature et le téléphone sont deux champs différents.'
  },
  {
    category: 'Action',
    isPair: false,
    card1: { emoji: '☑️', text: 'Cocher' },
    card2: { emoji: '✉️', text: 'E-mail' },
    explication: 'Cocher est une action, e-mail est une information de contact.'
  },
  {
    category: 'Action',
    isPair: false,
    card1: { emoji: '📨', text: 'Envoyer' },
    card2: { emoji: '❌', text: 'Formulaire vide' },
    explication: 'On n’envoie pas un formulaire vide.'
  },
  {
    category: 'Action',
    isPair: false,
    card1: { emoji: '👀', text: 'Vérifier' },
    card2: { emoji: '⚡', text: 'Aller vite sans lire' },
    explication: 'Vérifier veut dire relire avec attention.'
  },

  // === VRAIES PAIRES : Emploi / ORP ===
  {
    category: 'Recherche d’emploi',
    isPair: true,
    card1: { emoji: '🏢', text: 'ORP' },
    card2: { emoji: '💼', text: 'Office pour l’emploi' },
    explication: 'L’ORP aide les personnes à chercher un emploi.'
  },
  {
    category: 'Recherche d’emploi',
    isPair: true,
    card1: { emoji: '📋', text: 'CV' },
    card2: { emoji: '📄', text: 'Document avec mon expérience' },
    explication: 'Le CV présente la formation, l’expérience et les compétences.'
  },
  {
    category: 'Recherche d’emploi',
    isPair: true,
    card1: { emoji: '🤝', text: 'Entretien' },
    card2: { emoji: '🗣️', text: 'Rencontre avec l’employeur' },
    explication: 'L’entretien est une rencontre avec l’employeur.'
  },
  {
    category: 'Transports',
    isPair: true,
    card1: { emoji: '🚌', text: 'Bus' },
    card2: { emoji: '🛑', text: 'Arrêt' },
    explication: 'On attend le bus à l’arrêt.'
  },
  {
    category: 'Transports',
    isPair: true,
    card1: { emoji: '🎫', text: 'Billet' },
    card2: { emoji: '🚍', text: 'Ticket pour voyager' },
    explication: 'Le billet permet de voyager en bus, tram ou train.'
  },

  // === FAUSSES PAIRES : Emploi / ORP ===
  {
    category: 'Recherche d’emploi',
    isPair: false,
    card1: { emoji: '🏢', text: 'ORP' },
    card2: { emoji: '📮', text: 'Code postal' },
    explication: 'L’ORP est un office pour l’emploi, pas une information d’adresse.'
  },
  {
    category: 'Recherche d’emploi',
    isPair: false,
    card1: { emoji: '📋', text: 'CV' },
    card2: { emoji: '🎫', text: 'Billet de train' },
    explication: 'Le CV est un document pour postuler, pas pour voyager.'
  },
  {
    category: 'Transports',
    isPair: false,
    card1: { emoji: '🚌', text: 'Bus' },
    card2: { emoji: '✍️', text: 'Signature' },
    explication: 'Le bus est un transport, pas un élément de formulaire.'
  }
];
