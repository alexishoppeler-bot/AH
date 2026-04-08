/* ===== JS/DATA/COMPLETER-DATA.JS ===== */
'use strict';

window.COMPLETER_DATA = [
  {
    category: 'Formulaire',
    text: 'J’écris mon ___ de famille dans la première case.',
    answer: 'nom',
    choices: ['nom', 'pays', 'mail', 'document'],
    hint: 'Exemple : Dupont.'
  },
  {
    category: 'Formulaire',
    text: 'J’écris mon ___ après le nom.',
    answer: 'prénom',
    choices: ['prénom', 'âge', 'numéro', 'titre'],
    hint: 'Exemple : Nadia.'
  },
  {
    category: 'Adresse',
    text: 'J’écris mon ___ complète avec la rue et le numéro.',
    answer: 'adresse',
    choices: ['adresse', 'signature', 'photo', 'question'],
    hint: 'C’est l’endroit où vous habitez.'
  },
  {
    category: 'Contact',
    text: 'J’écris mon numéro de ___ pour être contacté.',
    answer: 'téléphone',
    choices: ['téléphone', 'passeport', 'clavier', 'papier'],
    hint: 'En Suisse, il commence souvent par 07.'
  },
  {
    category: 'Contact',
    text: 'J’écris mon ___ pour recevoir un message électronique.',
    answer: 'e-mail',
    choices: ['e-mail', 'nom', 'pays', 'stylo'],
    hint: 'Exemple : nom@email.ch'
  },
  {
    category: 'Identité',
    text: 'J’écris ma date de ___ : jour, mois, année.',
    answer: 'naissance',
    choices: ['naissance', 'ville', 'réponse', 'case'],
    hint: 'Exemple : 12.05.1990'
  },
  {
    category: 'Adresse',
    text: 'J’écris le code ___ de ma commune.',
    answer: 'postal',
    choices: ['postal', 'civil', 'numérique', 'simple'],
    hint: 'Exemple : 1003.'
  },
  {
    category: 'Adresse',
    text: 'J’écris le nom de ma ___ après le code postal.',
    answer: 'ville',
    choices: ['ville', 'date', 'ligne', 'page'],
    hint: 'Exemple : Lausanne.'
  },
  {
    category: 'Document',
    text: 'À la fin du formulaire, je mets ma ___.',
    answer: 'signature',
    choices: ['signature', 'photo', 'copie', 'fenêtre'],
    hint: 'Je signe avec mon nom.'
  },
  {
    category: 'Action',
    text: 'Je ___ la case correcte si la réponse est oui.',
    answer: 'coche',
    choices: ['coche', 'range', 'ferme', 'charge'],
    hint: 'Action avec une case ☑'
  },
  {
    category: 'Action',
    text: 'Je ___ le formulaire avant de l’envoyer.',
    answer: 'vérifie',
    choices: ['vérifie', 'dessine', 'coupe', 'branche'],
    hint: 'Je contrôle les informations.'
  },
  {
    category: 'Action',
    text: 'Quand tout est fini, je clique sur ___.',
    answer: 'envoyer',
    choices: ['envoyer', 'effacer', 'imprimer', 'ouvrir'],
    hint: 'Bouton final du formulaire.'
  },

  // ORP / Emploi
  {
    category: 'ORP',
    text: 'Je vais à l’___ pour parler avec mon conseiller et chercher un emploi.',
    answer: 'ORP',
    choices: ['ORP', 'gare', 'pharmacie', 'banque'],
    hint: 'Office Régional de Placement.'
  },
  {
    category: 'Emploi',
    text: 'J’envoie mon ___ pour montrer mon expérience professionnelle.',
    answer: 'CV',
    choices: ['CV', 'billet', 'formulaire', 'horaire'],
    hint: 'Document avec la formation et l’expérience.'
  },
  {
    category: 'Emploi',
    text: 'Je pose ma ___ pour un poste de cuisinier à Lausanne.',
    answer: 'candidature',
    choices: ['candidature', 'signature', 'adresse', 'date'],
    hint: 'Demande officielle pour obtenir un emploi.'
  },
  {
    category: 'Entretien',
    text: 'Je dois arriver à ___ pour mon entretien d’embauche à 9h00.',
    answer: 'l’heure',
    choices: ['l’heure', 'la gare', 'en retard', 'la maison'],
    hint: 'La ponctualité est importante.'
  },
  {
    category: 'Entretien',
    text: 'Pendant l’entretien, je parle de mes ___ pour ce poste.',
    answer: 'compétences',
    choices: ['compétences', 'vacances', 'voisins', 'formulaires'],
    hint: 'Ce que je sais faire pour le travail.'
  },

  // Transports
  {
    category: 'Transports',
    text: 'Je regarde l’___ pour connaître l’heure du prochain bus.',
    answer: 'horaire',
    choices: ['horaire', 'adresse', 'prénom', 'code postal'],
    hint: 'Tableau avec les heures de départ.'
  },
  {
    category: 'Transports',
    text: 'J’achète mon ___ avant de monter dans le tram.',
    answer: 'billet',
    choices: ['billet', 'stylo', 'formulaire', 'document'],
    hint: 'Ticket pour voyager.'
  },
  {
    category: 'Transports',
    text: 'Je descends à la prochaine ___ pour aller à la commune.',
    answer: 'station',
    choices: ['station', 'page', 'case', 'signature'],
    hint: 'Arrêt de bus ou de tram.'
  },

  // Vie quotidienne
  {
    category: 'Vie quotidienne',
    text: 'Je vais à la ___ pour envoyer mon dossier par courrier.',
    answer: 'poste',
    choices: ['poste', 'piscine', 'école', 'bibliothèque'],
    hint: 'Lieu où on envoie des lettres et des colis.'
  },
  {
    category: 'Vie quotidienne',
    text: 'Je demande une ___ de domicile à la commune.',
    answer: 'attestation',
    choices: ['attestation', 'billet', 'mot de passe', 'stylo'],
    hint: 'Document officiel qui prouve mon adresse.'
  },
];
