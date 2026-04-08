/* ===== JS/DATA/ANAGRAMME-DATA.JS ===== */
'use strict';

window.ANAGRAMME_DATA = [
  // Identité
  { word: 'NOM', hint: "Nom de famille", category: "Identité", difficulty: 'easy' },
  { word: 'PRENOM', hint: "Nom personnel", category: "Identité", difficulty: 'easy' },
  { word: 'GENRE', hint: "Case du formulaire : homme ou femme", category: "Identité", difficulty: 'easy' },

  // Localisation
  { word: 'ADRESSE', hint: "L’endroit où vous habitez", category: "Localisation", difficulty: 'medium' },
  { word: 'VILLE', hint: "La commune où vous habitez", category: "Localisation", difficulty: 'easy' },
  { word: 'RUE', hint: "Nom de la rue dans l’adresse", category: "Localisation", difficulty: 'easy' },
  { word: 'NUMERO', hint: "Chiffre de la maison ou du bâtiment", category: "Localisation", difficulty: 'easy' },
  { word: 'NPA', hint: "Code postal en Suisse", category: "Localisation", difficulty: 'easy' },
  { word: 'PAYS', hint: "Exemple : Suisse, France, Portugal", category: "Localisation", difficulty: 'easy' },

  // Contact
  { word: 'EMAIL', hint: "Adresse électronique", category: "Contact", difficulty: 'easy' },
  { word: 'TELEPHONE', hint: "Numéro pour appeler une personne", category: "Contact", difficulty: 'medium' },

  // Dates et état civil
  { word: 'DATE', hint: "Jour, mois et année", category: "Dates", difficulty: 'easy' },
  { word: 'NAISSANCE', hint: "Mot dans : date de ...", category: "Dates", difficulty: 'medium' },
  { word: 'MARIE', hint: "Quand on a un mari ou une femme", category: "État civil", difficulty: 'easy' },
  { word: 'CELIBATAIRE', hint: "Quand on n’est pas marié", category: "État civil", difficulty: 'hard' },
  { word: 'DIVORCE', hint: "Quand le mariage est terminé", category: "État civil", difficulty: 'medium' },

  // Nationalité et documents
  { word: 'NATIONALITE', hint: "Pays auquel vous appartenez", category: "Nationalité", difficulty: 'hard' },
  { word: 'SIGNATURE', hint: "Nom écrit à la main", category: "Documents", difficulty: 'medium' },
  { word: 'DOCUMENT', hint: "Papier demandé avec le formulaire", category: "Documents", difficulty: 'easy' },
  { word: 'FORMULAIRE', hint: "Document avec des cases à remplir", category: "Documents", difficulty: 'hard' },
  { word: 'PERMIS', hint: "Document officiel en Suisse", category: "Documents", difficulty: 'medium' },
  { word: 'ATTESTATION', hint: "Document officiel qui prouve quelque chose", category: "Documents", difficulty: 'hard' },

  // Emploi
  { word: 'EMPLOI', hint: "Travail que l’on cherche", category: "Emploi", difficulty: 'easy' },
  { word: 'TRAVAIL', hint: "Activité professionnelle", category: "Emploi", difficulty: 'easy' },
  { word: 'METIER', hint: "Profession : cuisinier, nettoyeur...", category: "Emploi", difficulty: 'medium' },
  { word: 'SALAIRE', hint: "Argent reçu pour le travail", category: "Emploi", difficulty: 'medium' },
  { word: 'CONTRAT', hint: "Document signé pour le travail", category: "Emploi", difficulty: 'medium' },
  { word: 'CANDIDATURE', hint: "Demande pour obtenir un poste", category: "Emploi", difficulty: 'hard' },

  // Entretien
  { word: 'ENTRETIEN', hint: "Rencontre avec l’employeur", category: "Entretien", difficulty: 'hard' },

  // Transports
  { word: 'GARE', hint: "Lieu où on prend le train", category: "Transports", difficulty: 'easy' },
  { word: 'TRAM', hint: "Transport public en ville", category: "Transports", difficulty: 'easy' },
  { word: 'HORAIRE', hint: "Heures de départ du bus ou du train", category: "Transports", difficulty: 'medium' },
  { word: 'BILLET', hint: "Ticket pour voyager", category: "Transports", difficulty: 'easy' },

  // Vie quotidienne
  { word: 'COMMUNE', hint: "Administration locale", category: "Vie quotidienne", difficulty: 'medium' },
  { word: 'LAUSANNE', hint: "Grande ville de Suisse romande", category: "Villes", difficulty: 'medium' }
];