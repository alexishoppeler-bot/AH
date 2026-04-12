/* ===== JS/DATA/PENDU-DATA.JS ===== */
'use strict';

window.PENDU_DATA = [
  // Formulaire / identité - facile
  { word: 'NOM',        hint: 'Nom de famille',                        category: 'Identité',     difficulty: 'easy',   theme: 'numérique' },
  { word: 'PRENOM',     hint: 'Nom personnel',                         category: 'Identité',     difficulty: 'easy',   theme: 'numérique' },
  { word: 'DATE',       hint: 'Jour, mois et année',                   category: 'Document',     difficulty: 'easy',   theme: 'numérique' },
  { word: 'CASE',       hint: 'Petit espace à remplir ou à cocher',    category: 'Formulaire',   difficulty: 'easy',   theme: 'numérique' },
  { word: 'RUE',        hint: 'Nom de la voie dans votre adresse',     category: 'Adresse',      difficulty: 'easy',   theme: 'numérique' },
  { word: 'VILLE',      hint: 'Commune où vous habitez',               category: 'Adresse',      difficulty: 'easy',   theme: 'numérique' },
  { word: 'PAYS',       hint: 'Exemple : Suisse, France, Italie',      category: 'Adresse',      difficulty: 'easy',   theme: 'numérique' },
  { word: 'EMAIL',      hint: 'Adresse électronique',                  category: 'Contact',      difficulty: 'easy',   theme: 'numérique' },
  { word: 'MAIL',       hint: 'Message électronique',                  category: 'Contact',      difficulty: 'easy',   theme: 'numérique' },
  { word: 'PHOTO',      hint: 'Image demandée dans certains dossiers', category: 'Document',     difficulty: 'easy',   theme: 'numérique' },
  { word: 'PAPIER',     hint: 'Mot simple pour parler d'un document',  category: 'Document',     difficulty: 'medium', theme: 'numérique' },
  // Transports - facile
  { word: 'GARE',       hint: 'Lieu où on prend le train',             category: 'Transports',   difficulty: 'easy',   theme: 'transports' },
  { word: 'TRAM',       hint: 'Transport public en ville',             category: 'Transports',   difficulty: 'easy',   theme: 'transports' },
  { word: 'BUS',        hint: 'Transport public sur la route',         category: 'Transports',   difficulty: 'easy',   theme: 'transports' },
  { word: 'QUAI',       hint: 'Lieu où on attend le train',            category: 'Transports',   difficulty: 'easy',   theme: 'transports' },
  // Emploi / ORP - facile
  { word: 'ORP',        hint: 'Office pour aider à chercher un emploi',category: 'ORP',          difficulty: 'easy',   theme: 'orp' },
  { word: 'CV',         hint: 'Document avec expérience et formation', category: 'Emploi',       difficulty: 'easy',   theme: 'emploi' },

  // Moyen
  { word: 'ADRESSE',    hint: 'Lieu où vous habitez',                           category: 'Adresse',        difficulty: 'medium', theme: 'numérique' },
  { word: 'NUMERO',     hint: 'Chiffre de la maison ou du bâtiment',            category: 'Adresse',        difficulty: 'medium', theme: 'numérique' },
  { word: 'TELEPHONE',  hint: 'Numéro pour appeler la personne',                category: 'Contact',        difficulty: 'medium', theme: 'numérique' },
  { word: 'NAISSANCE',  hint: 'Mot dans : date de ...',                         category: 'Identité',       difficulty: 'medium', theme: 'numérique' },
  { word: 'SIGNATURE',  hint: 'Nom écrit à la main à la fin',                   category: 'Document',       difficulty: 'medium', theme: 'numérique' },
  { word: 'COCHER',     hint: 'Action pour sélectionner une case',              category: 'Action',         difficulty: 'medium', theme: 'numérique' },
  { word: 'ECRIRE',     hint: 'Action pour compléter le formulaire',            category: 'Action',         difficulty: 'medium', theme: 'numérique' },
  { word: 'ENVOYER',    hint: 'Action pour transmettre le formulaire',          category: 'Action',         difficulty: 'medium', theme: 'numérique' },
  { word: 'DOCUMENT',   hint: 'Papier demandé avec le formulaire',              category: 'Document',       difficulty: 'medium', theme: 'numérique' },
  { word: 'DOSSIER',    hint: 'Ensemble de papiers à préparer',                 category: 'Document',       difficulty: 'medium', theme: 'numérique' },
  { word: 'GUICHET',    hint: 'Lieu d'accueil dans une administration',         category: 'Vie quotidienne',difficulty: 'medium', theme: 'numérique' },
  { word: 'COMMUNE',    hint: 'Administration locale de la ville',              category: 'Vie quotidienne',difficulty: 'medium', theme: 'numérique' },
  { word: 'ASSURANCE',  hint: 'Service utile pour la santé ou le logement',     category: 'Vie quotidienne',difficulty: 'medium', theme: 'santé' },
  { word: 'PERMIS',     hint: 'Document officiel en Suisse',                    category: 'Document',       difficulty: 'medium', theme: 'orp' },
  { word: 'EMPLOI',     hint: 'Travail rémunéré',                               category: 'Emploi',         difficulty: 'medium', theme: 'emploi' },
  { word: 'TRAVAIL',    hint: 'Activité professionnelle rémunérée',             category: 'Emploi',         difficulty: 'medium', theme: 'emploi' },
  { word: 'METIER',     hint: 'Profession : vendeur, cuisinier, nettoyeur...',  category: 'Emploi',         difficulty: 'medium', theme: 'emploi' },
  { word: 'CONTRAT',    hint: 'Document signé pour le travail',                 category: 'Emploi',         difficulty: 'medium', theme: 'emploi' },
  { word: 'SALAIRE',    hint: 'Argent reçu pour le travail',                    category: 'Emploi',         difficulty: 'medium', theme: 'emploi' },
  { word: 'HORAIRE',    hint: 'Heures de départ du bus ou du train',            category: 'Transports',     difficulty: 'medium', theme: 'transports' },
  { word: 'BILLET',     hint: 'Ticket pour voyager',                            category: 'Transports',     difficulty: 'medium', theme: 'transports' },
  { word: 'ARRET',      hint: 'Endroit où le bus ou le tram s'arrête',          category: 'Transports',     difficulty: 'medium', theme: 'transports' },
  { word: 'LAUSANNE',   hint: 'Grande ville de Suisse romande',                 category: 'Villes',         difficulty: 'medium', theme: 'transports' },

  // Difficile
  { word: 'FORMULAIRE',  hint: 'Document avec des cases à remplir',             category: 'Formulaire',     difficulty: 'hard', theme: 'numérique' },
  { word: 'VERIFIER',    hint: 'Relire pour contrôler avant de finir',          category: 'Action',         difficulty: 'hard', theme: 'numérique' },
  { word: 'OBLIGATOIRE', hint: 'Champ qu'il faut remplir',                      category: 'Formulaire',     difficulty: 'hard', theme: 'numérique' },
  { word: 'JUSTIFICATIF',hint: 'Document demandé comme preuve',                 category: 'Document',       difficulty: 'hard', theme: 'orp' },
  { word: 'CANDIDATURE', hint: 'Demande pour obtenir un poste',                 category: 'Emploi',         difficulty: 'hard', theme: 'emploi' },
  { word: 'ENTRETIEN',   hint: 'Rencontre avec l'employeur',                    category: 'Entretien',      difficulty: 'hard', theme: 'emploi' },
  { word: 'CONSEILLER',  hint: 'Personne qui aide à l'ORP',                     category: 'ORP',            difficulty: 'hard', theme: 'orp' },
  { word: 'ATTESTATION', hint: 'Document officiel qui prouve quelque chose',    category: 'Document',       difficulty: 'hard', theme: 'orp' },
  { word: 'EXPERIENCE',  hint: 'Temps déjà travaillé dans un métier',           category: 'Emploi',         difficulty: 'hard', theme: 'emploi' },
  { word: 'ENTREPRISE',  hint: 'Lieu où l'on travaille',                        category: 'Emploi',         difficulty: 'hard', theme: 'emploi' },
  { word: 'FORMATION',   hint: 'Études ou apprentissage suivis',                category: 'Emploi',         difficulty: 'hard', theme: 'emploi' },
];
