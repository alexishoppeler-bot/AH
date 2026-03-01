/* ===== JS/DATA/PAIRE-DATA.JS ===== */
'use strict';

window.PAIRE_DATA = [
  // === VRAIES PAIRES ===
  {
    category: 'ORP / Job Room',
    isPair: true,
    card1: { emoji: '🧾', text: 'CV' },
    card2: { emoji: '📄', text: 'Format PDF' },
    explication: 'Le CV est envoyé en format PDF pour que sa mise en page reste identique sur l\'ordinateur du recruteur.'
  },
  {
    category: 'ORP / Job Room',
    isPair: true,
    card1: { emoji: '📧', text: 'E-mail' },
    card2: { emoji: '📝', text: 'Objet clair' },
    explication: 'Tout e-mail professionnel doit contenir un objet précis (ex. "Candidature — Vendeur") pour que le recruteur identifie rapidement votre message.'
  },
  {
    category: 'ORP / Job Room',
    isPair: true,
    card1: { emoji: '🌐', text: 'Job Room' },
    card2: { emoji: '👤', text: 'Profil complété' },
    explication: 'Un profil Job Room complet (CV, compétences, disponibilité) est indispensable pour que votre conseiller ORP puisse vous orienter efficacement.'
  },
  {
    category: 'Organisation',
    isPair: true,
    card1: { emoji: '💾', text: 'Clé USB' },
    card2: { emoji: '🗂️', text: 'Sauvegarde de documents' },
    explication: 'Une clé USB vous permet de sauvegarder et d\'emporter vos documents importants partout avec vous.'
  },
  {
    category: 'Sécurité',
    isPair: true,
    card1: { emoji: '🔒', text: 'Mot de passe fort' },
    card2: { emoji: '🛡️', text: 'Compte protégé' },
    explication: 'Un mot de passe fort (long, avec chiffres et symboles) est la meilleure protection pour vos comptes personnels.'
  },
  {
    category: 'Bureautique',
    isPair: true,
    card1: { emoji: '📝', text: 'Word' },
    card2: { emoji: '✍️', text: 'Rédaction de documents' },
    explication: 'Word (ou LibreOffice Writer) est le logiciel utilisé pour rédiger des lettres de motivation, des courriers et tout type de document texte.'
  },
  {
    category: 'Bureautique',
    isPair: true,
    card1: { emoji: '📊', text: 'Excel' },
    card2: { emoji: '🔢', text: 'Tableaux et calculs' },
    explication: 'Excel (ou Google Sheets) est un tableur qui permet de créer des tableaux et d\'effectuer des calculs automatiques.'
  },

  // === FAUSSES PAIRES ===
  {
    category: 'ORP / Job Room',
    isPair: false,
    card1: { emoji: '📧', text: 'E-mail' },
    card2: { emoji: '🔑', text: 'Mot de passe' },
    explication: 'Un mot de passe ne doit jamais être partagé par e-mail. Aucun organisme officiel (ORP, banque, Poste) ne vous le demandera ainsi.'
  },
  {
    category: 'ORP / Job Room',
    isPair: false,
    card1: { emoji: '🧾', text: 'CV' },
    card2: { emoji: '✏️', text: 'Fichier modifiable' },
    explication: 'Un CV envoyé à un recruteur ne doit pas être modifiable. Le format PDF garantit que votre document reste tel quel à la réception.'
  },
  {
    category: 'Organisation',
    isPair: false,
    card1: { emoji: '📄', text: 'Document important' },
    card2: { emoji: '🗑️', text: 'Corbeille' },
    explication: 'Un document important (attestation, CV, diplôme) ne doit jamais être laissé dans la corbeille, car il sera définitivement supprimé.'
  },
  {
    category: 'Sécurité',
    isPair: false,
    card1: { emoji: '📶', text: 'Wi-Fi public' },
    card2: { emoji: '🧾', text: 'Documents personnels' },
    explication: 'Envoyer des documents personnels ou vous connecter à vos comptes via un Wi-Fi public (café, gare) comporte des risques de vol de données.'
  },
  {
    category: 'Bureautique',
    isPair: false,
    card1: { emoji: '📝', text: 'Word' },
    card2: { emoji: '📊', text: 'Base de données' },
    explication: 'Word est un logiciel de traitement de texte, conçu pour écrire des lettres et des rapports, pas pour gérer des bases de données.'
  },
  {
    category: 'Bureautique',
    isPair: false,
    card1: { emoji: '📊', text: 'PowerPoint' },
    card2: { emoji: '🔢', text: 'Calcul automatique' },
    explication: 'PowerPoint (ou Google Slides) est un outil de présentation visuelle. Pour les calculs automatiques, il faut utiliser Excel ou Google Sheets.'
  },
  {
    category: 'Sécurité',
    isPair: false,
    card1: { emoji: '👤', text: 'Compte personnel' },
    card2: { emoji: '👥', text: 'Partage des identifiants' },
    explication: 'Vos identifiants (adresse e-mail et mot de passe) sont strictement personnels et confidentiels. Ne les partagez jamais, même avec un proche.'
  },
];
