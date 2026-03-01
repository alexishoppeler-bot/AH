/* ===== JS/DATA/ECOUTER-DATA.JS — Compréhension orale ===== */
/*
  Pour les 'histoire' : champ `transcript` (texte continu, 1 voix).
  Pour les 'dialogue'  : champ `lines` (tableau de répliques).
    Chaque ligne : { speaker: "Nom", gender: "f"|"m", text: "..." }
    Le transcript est généré automatiquement pour l'affichage.
*/
'use strict';

window.ECOUTER_DATA = [

  /* ══════════════════════════════════════════════════════
     ÉPISODE 1 — Histoire : La candidature de Sophie
  ══════════════════════════════════════════════════════ */
  {
    id: 'ep01',
    type: 'histoire',
    title: 'La candidature de Sophie',
    category: 'Candidature',
    transcript: `Sophie cherche un emploi depuis deux mois. Ce matin, elle a trouvé une offre intéressante sur Job Room : un poste d'employée de commerce dans une pharmacie à Berne. Elle décide de postuler immédiatement. Elle ouvre son ordinateur, lance Word, et commence à personnaliser sa lettre de motivation. Elle vérifie soigneusement l'orthographe, puis enregistre le document en PDF. Elle nomme le fichier CV_Durand_Sophie.pdf pour que le recruteur le retrouve facilement. Avant d'envoyer son e-mail, elle relit une dernière fois ses documents. Elle est satisfaite du résultat et clique sur Envoyer.`,
    questions: [
      {
        question: 'Sur quelle plateforme Sophie a-t-elle trouvé l\'offre d\'emploi ?',
        choices: ['LinkedIn', 'Job Room', 'Indeed', 'Son journal local'],
        answer: 1,
        explication: 'Sophie a trouvé l\'offre sur Job Room, la plateforme officielle suisse de recherche d\'emploi.'
      },
      {
        question: 'Dans quel format Sophie enregistre-t-elle sa lettre de motivation ?',
        choices: ['Word (.docx)', 'PDF', 'Image (.jpg)', 'Texte (.txt)'],
        answer: 1,
        explication: 'Le PDF conserve la mise en page exactement telle que conçue, quel que soit l\'appareil du recruteur.'
      },
      {
        question: 'Pourquoi Sophie nomme-t-elle son fichier CV_Durand_Sophie.pdf ?',
        choices: [
          'C\'est une obligation légale en Suisse',
          'Pour que le recruteur le retrouve facilement',
          'Pour réduire la taille du fichier',
          'Parce que Word l\'exige'
        ],
        answer: 1,
        explication: 'Un nom de fichier clair et structuré permet au recruteur d\'identifier votre document immédiatement parmi des dizaines de candidatures.'
      },
      {
        question: 'Que fait Sophie juste avant d\'envoyer son e-mail ?',
        choices: [
          'Elle appelle le recruteur',
          'Elle relit une dernière fois ses documents',
          'Elle demande à l\'ORP de valider sa candidature',
          'Elle imprime ses documents'
        ],
        answer: 1,
        explication: 'Relire avant d\'envoyer permet de détecter les fautes et de vérifier que les bons fichiers sont joints.'
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     ÉPISODE 2 — Dialogue : Appel à l'ORP
     Locuteurs : Marie (f, conseillère) · Ahmed (m, demandeur)
  ══════════════════════════════════════════════════════ */
  {
    id: 'ep02',
    type: 'dialogue',
    title: 'Appel à l\'ORP',
    category: 'ORP / Job Room',
    lines: [
      { speaker: 'Marie',  gender: 'f', text: 'Bonjour, ORP de Lausanne, Marie Rochat à l\'appareil.' },
      { speaker: 'Ahmed',  gender: 'm', text: 'Bonjour, je m\'appelle Ahmed Karim. J\'appelle parce que je n\'arrive pas à me connecter à mon compte Job Room.' },
      { speaker: 'Marie',  gender: 'f', text: 'Bonjour Monsieur Karim. Depuis quand avez-vous ce problème ?' },
      { speaker: 'Ahmed',  gender: 'm', text: 'Depuis hier soir. J\'ai essayé plusieurs fois mais le message dit que mon mot de passe est incorrect.' },
      { speaker: 'Marie',  gender: 'f', text: 'D\'accord. Avez-vous essayé la fonction "Mot de passe oublié" sur la page de connexion ?' },
      { speaker: 'Ahmed',  gender: 'm', text: 'Non, je ne savais pas que c\'était possible.' },
      { speaker: 'Marie',  gender: 'f', text: 'Oui, tout à fait. Cliquez sur ce lien sous le champ mot de passe, entrez votre adresse e-mail, et vous recevrez un lien pour créer un nouveau mot de passe.' },
      { speaker: 'Ahmed',  gender: 'm', text: 'D\'accord, je vais essayer. Et si ça ne fonctionne pas ?' },
      { speaker: 'Marie',  gender: 'f', text: 'Dans ce cas, rappelez-nous et nous créerons un accès temporaire. Avez-vous d\'autres questions ?' },
      { speaker: 'Ahmed',  gender: 'm', text: 'Non, merci beaucoup, je vais tester ça.' },
      { speaker: 'Marie',  gender: 'f', text: 'Très bien, bonne journée Monsieur Karim.' },
    ],
    questions: [
      {
        question: 'Pourquoi Ahmed appelle-t-il l\'ORP ?',
        choices: [
          'Pour annuler un rendez-vous',
          'Parce qu\'il ne peut pas se connecter à Job Room',
          'Pour signaler une offre d\'emploi incorrecte',
          'Pour demander une prolongation d\'indemnités'
        ],
        answer: 1,
        explication: 'Ahmed appelle parce que son mot de passe ne fonctionne plus et qu\'il est bloqué hors de son compte Job Room.'
      },
      {
        question: 'Quelle solution la conseillère propose-t-elle en premier ?',
        choices: [
          'Créer un nouveau compte',
          'Appeler le service informatique',
          'Utiliser la fonction "Mot de passe oublié"',
          'Se rendre physiquement à l\'ORP'
        ],
        answer: 2,
        explication: 'La fonction "Mot de passe oublié" est la procédure standard et rapide pour récupérer l\'accès à un compte en ligne.'
      },
      {
        question: 'Que doit faire Ahmed pour recevoir un lien de réinitialisation ?',
        choices: [
          'Fournir son numéro AVS',
          'Entrer son adresse e-mail sur la page de connexion',
          'Envoyer un courrier à l\'ORP',
          'Répondre à des questions de sécurité par téléphone'
        ],
        answer: 1,
        explication: 'La réinitialisation de mot de passe se fait en entrant son e-mail pour recevoir un lien de création de nouveau mot de passe.'
      },
      {
        question: 'Que proposera l\'ORP si la réinitialisation ne fonctionne pas ?',
        choices: [
          'Fermer le compte de Ahmed',
          'Créer un accès temporaire',
          'Renvoyer un courrier postal',
          'Lui interdire d\'utiliser Job Room pendant 30 jours'
        ],
        answer: 1,
        explication: 'L\'ORP peut créer un accès temporaire pour que vous puissiez continuer vos démarches sans interruption.'
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     ÉPISODE 3 — Histoire : Un e-mail suspect
  ══════════════════════════════════════════════════════ */
  {
    id: 'ep03',
    type: 'histoire',
    title: 'L\'e-mail suspect',
    category: 'Sécurité',
    transcript: `Lundi matin, Marco ouvre sa messagerie et voit un e-mail avec pour objet : "Votre compte bancaire bloqué - Action urgente requise". L'expéditeur s'appelle support@ubs-secure-login.net. Le message lui demande de cliquer sur un lien et d'entrer ses informations bancaires pour débloquer son compte. Marco ressent une pression immédiate à agir. Mais il se souvient d'un conseil de son conseiller numérique : ne jamais cliquer sur des liens dans un e-mail urgentiste. Il regarde l'adresse de l'expéditeur de plus près. Elle ne ressemble pas à une vraie adresse UBS. Il décide de ne pas cliquer, de marquer l'e-mail comme spam, puis d'appeler directement sa banque pour vérifier. La banque lui confirme qu'il n'y a aucun problème avec son compte. C'était bien une tentative d'hameçonnage.`,
    questions: [
      {
        question: 'Quel était l\'objet de l\'e-mail reçu par Marco ?',
        choices: [
          '"Votre candidature a été retenue"',
          '"Votre compte bancaire bloqué - Action urgente requise"',
          '"Mise à jour de vos données Job Room"',
          '"Confirmation de rendez-vous ORP"'
        ],
        answer: 1,
        explication: 'Les objets urgentistes sont une technique classique de phishing pour pousser la victime à agir sans réfléchir.'
      },
      {
        question: 'Qu\'est-ce qui aurait dû alerter Marco immédiatement ?',
        choices: [
          'La couleur de l\'e-mail',
          'L\'adresse de l\'expéditeur suspecte (ubs-secure-login.net)',
          'La longueur du message',
          'Le fait que l\'e-mail était en français'
        ],
        answer: 1,
        explication: 'Une vraie banque utilise un domaine officiel (ex: ubs.com). "ubs-secure-login.net" est un signe clair d\'arnaque.'
      },
      {
        question: 'Que fait Marco après avoir identifié l\'e-mail comme suspect ?',
        choices: [
          'Il répond à l\'e-mail pour signaler l\'erreur',
          'Il clique sur le lien pour vérifier',
          'Il marque l\'e-mail comme spam et appelle directement sa banque',
          'Il transfère l\'e-mail à ses amis'
        ],
        answer: 2,
        explication: 'La bonne démarche : ne pas cliquer, ne pas répondre, marquer comme spam, et contacter directement l\'institution concernée.'
      },
      {
        question: 'Comment s\'appelle ce type d\'attaque informatique ?',
        choices: ['Un virus', 'Un ransomware', 'De l\'hameçonnage (phishing)', 'Un logiciel espion'],
        answer: 2,
        explication: 'L\'hameçonnage (phishing) consiste à usurper l\'identité d\'un organisme officiel pour voler des données personnelles ou bancaires.'
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     ÉPISODE 4 — Dialogue : Entretien téléphonique
     Locuteurs : Pierre (m, RH) · Léa (f, candidate)
  ══════════════════════════════════════════════════════ */
  {
    id: 'ep04',
    type: 'dialogue',
    title: 'Entretien téléphonique',
    category: 'Candidature',
    lines: [
      { speaker: 'Pierre', gender: 'm', text: 'Bonjour, ici Pierre Favre, directeur des ressources humaines chez TechShop SA. Je vous appelle suite à votre candidature pour le poste d\'assistant administratif.' },
      { speaker: 'Léa',    gender: 'f', text: 'Bonjour Monsieur Favre, merci de me contacter. Je suis très intéressée par ce poste.' },
      { speaker: 'Pierre', gender: 'm', text: 'Très bien. Pouvez-vous me parler brièvement de votre expérience avec les outils informatiques ?' },
      { speaker: 'Léa',    gender: 'f', text: 'Bien sûr. Je maîtrise Word et Excel pour la gestion de documents et de tableaux. J\'utilise aussi Outlook pour la messagerie professionnelle, et je suis à l\'aise avec Internet pour les recherches et les outils en ligne.' },
      { speaker: 'Pierre', gender: 'm', text: 'Parfait. Avez-vous déjà utilisé un logiciel de gestion comme SAP ou Abacus ?' },
      { speaker: 'Léa',    gender: 'f', text: 'Pas directement, mais j\'ai de bonnes bases et je suis capable d\'apprendre rapidement un nouveau logiciel.' },
      { speaker: 'Pierre', gender: 'm', text: 'C\'est une qualité importante. Pouvez-vous vous rendre disponible pour un entretien en présentiel la semaine prochaine ?' },
      { speaker: 'Léa',    gender: 'f', text: 'Absolument, je suis disponible du lundi au vendredi en journée.' },
      { speaker: 'Pierre', gender: 'm', text: 'Très bien, mon assistante va vous envoyer une confirmation par e-mail. Bonne journée.' },
      { speaker: 'Léa',    gender: 'f', text: 'Merci, à bientôt Monsieur Favre.' },
    ],
    questions: [
      {
        question: 'Pour quel poste Léa a-t-elle postulé ?',
        choices: ['Technicien informatique', 'Assistant administratif', 'Responsable des ventes', 'Comptable'],
        answer: 1,
        explication: 'Pierre Favre précise dès le début qu\'il appelle "suite à la candidature pour le poste d\'assistant administratif".'
      },
      {
        question: 'Quels outils informatiques Léa mentionne-t-elle ?',
        choices: [
          'Photoshop, Illustrator et InDesign',
          'Word, Excel, Outlook et Internet',
          'SAP, Abacus et Oracle',
          'Google Docs et Slack uniquement'
        ],
        answer: 1,
        explication: 'Elle cite Word pour les documents, Excel pour les tableaux, Outlook pour la messagerie et Internet.'
      },
      {
        question: 'Que répond Léa à propos de SAP et Abacus ?',
        choices: [
          'Qu\'elle les maîtrise parfaitement',
          'Qu\'elle ne veut pas les utiliser',
          'Qu\'elle ne les a pas utilisés mais peut apprendre rapidement',
          'Qu\'ils sont trop compliqués'
        ],
        answer: 2,
        explication: 'Reconnaître honnêtement ses lacunes tout en soulignant sa capacité d\'apprentissage est une réponse professionnelle.'
      },
      {
        question: 'Comment la confirmation de l\'entretien sera-t-elle envoyée ?',
        choices: ['Par courrier postal', 'Par SMS', 'Par e-mail', 'Par appel téléphonique'],
        answer: 2,
        explication: 'Pierre Favre indique que son assistante enverra une confirmation par e-mail.'
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     ÉPISODE 5 — Histoire : Le bureau en désordre
  ══════════════════════════════════════════════════════ */
  {
    id: 'ep05',
    type: 'histoire',
    title: 'Le bureau en désordre',
    category: 'Organisation numérique',
    transcript: `Fatima a un problème : son bureau d'ordinateur est envahi de fichiers. Elle a des CV de différentes versions, des lettres de motivation non nommées, des captures d'écran et des documents téléchargés depuis des mois. Ce matin, elle doit envoyer sa dernière version de CV à un recruteur, mais elle n'arrive plus à retrouver le bon fichier. Elle perd dix minutes à chercher. Son conseiller de l'ORP lui a expliqué comment organiser ses documents : créer des dossiers thématiques, nommer clairement chaque fichier avec la date ou la version, et supprimer les doublons. Fatima décide d'agir. Elle crée trois dossiers : Candidatures, Documents officiels et Formations. Elle déplace chaque fichier au bon endroit et renomme son CV en CV_Benali_Fatima_2025.pdf. La prochaine fois, elle retrouvera tout en quelques secondes.`,
    questions: [
      {
        question: 'Quel est le problème principal de Fatima au début de l\'histoire ?',
        choices: [
          'Son ordinateur ne démarre plus',
          'Son bureau est encombré de fichiers mal organisés',
          'Elle n\'a pas de connexion Internet',
          'Elle a oublié son mot de passe'
        ],
        answer: 1,
        explication: 'Un bureau désorganisé fait perdre du temps précieux, surtout pour une candidature urgente.'
      },
      {
        question: 'Combien de temps Fatima perd-elle à chercher son CV ?',
        choices: ['Deux secondes', 'Une heure', 'Dix minutes', 'Toute la journée'],
        answer: 2,
        explication: 'Dix minutes perdues à chercher un fichier, c\'est du stress évitable grâce à une bonne organisation.'
      },
      {
        question: 'Quels dossiers Fatima crée-t-elle pour s\'organiser ?',
        choices: [
          'Personnel, Loisirs et Voyages',
          'Candidatures, Documents officiels et Formations',
          'Images, Vidéos et Musique',
          'Bureau, Téléchargements et Corbeille'
        ],
        answer: 1,
        explication: 'Des dossiers thématiques adaptés à sa situation lui permettent de retrouver n\'importe quel document rapidement.'
      },
      {
        question: 'Comment Fatima renomme-t-elle son CV ?',
        choices: [
          'cv_final_vrai_derniere_version.pdf',
          'CV_Benali_Fatima_2025.pdf',
          'MonCV.pdf',
          'document1.pdf'
        ],
        answer: 1,
        explication: 'Un nom structuré avec le type de document, le nom complet et l\'année permet d\'identifier immédiatement le fichier.'
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     ÉPISODE 6 — Dialogue : Problème de Wi-Fi
     Locuteurs : Carlos (m, technicien) · Yemi (f, utilisatrice)
  ══════════════════════════════════════════════════════ */
  {
    id: 'ep06',
    type: 'dialogue',
    title: 'Problème de connexion Wi-Fi',
    category: 'Pratique numérique',
    lines: [
      { speaker: 'Carlos', gender: 'm', text: 'Bonjour, je suis Carlos, technicien du centre d\'intégration numérique. Comment puis-je vous aider ?' },
      { speaker: 'Yemi',   gender: 'f', text: 'Bonjour, je m\'appelle Yemi. Mon ordinateur ne se connecte plus à Internet depuis ce matin.' },
      { speaker: 'Carlos', gender: 'm', text: 'D\'accord Yemi. Est-ce que le Wi-Fi est bien activé sur votre ordinateur ? Vous voyez une icône de signal en bas à droite ?' },
      { speaker: 'Yemi',   gender: 'f', text: 'Je vois une icône, mais elle a un point d\'exclamation dessus.' },
      { speaker: 'Carlos', gender: 'm', text: 'Ça veut dire que vous êtes connectée au réseau Wi-Fi mais sans accès à Internet. Est-ce que votre routeur, c\'est la petite boîte Internet chez vous, est bien allumé ?' },
      { speaker: 'Yemi',   gender: 'f', text: 'Attendez... oui, il est allumé, mais il clignote en rouge.' },
      { speaker: 'Carlos', gender: 'm', text: 'Voilà le problème. Éteignez-le, attendez trente secondes, puis rallumez-le. C\'est ce qu\'on appelle un redémarrage.' },
      { speaker: 'Yemi',   gender: 'f', text: 'D\'accord, je l\'éteins... j\'attends... je le rallume. Ça prend une minute.' },
      { speaker: 'Carlos', gender: 'm', text: 'Oui, attendez qu\'il soit stable. Comment est l\'icône maintenant ?' },
      { speaker: 'Yemi',   gender: 'f', text: 'Elle est normale, plus de point d\'exclamation ! Internet fonctionne.' },
      { speaker: 'Carlos', gender: 'm', text: 'Parfait ! Un simple redémarrage du routeur règle souvent ce genre de problème.' },
    ],
    questions: [
      {
        question: 'Quel symbole Yemi voit-elle sur l\'icône Wi-Fi ?',
        choices: ['Une croix rouge', 'Un cadenas', 'Un point d\'exclamation', 'Une étoile'],
        answer: 2,
        explication: 'Un point d\'exclamation sur l\'icône Wi-Fi indique une connexion au réseau sans accès à Internet.'
      },
      {
        question: 'Quelle est la cause du problème selon Carlos ?',
        choices: [
          'L\'ordinateur de Yemi est cassé',
          'Le mot de passe Wi-Fi a changé',
          'Le routeur clignote en rouge et ne fonctionne pas correctement',
          'Il y a trop d\'appareils connectés'
        ],
        answer: 2,
        explication: 'Un routeur qui clignote en rouge signale généralement un problème interne qui nécessite un redémarrage.'
      },
      {
        question: 'Que conseille Carlos pour résoudre le problème ?',
        choices: [
          'Appeler le fournisseur Internet',
          'Réinstaller Windows',
          'Éteindre le routeur 30 secondes puis le rallumer',
          'Changer le mot de passe Wi-Fi'
        ],
        answer: 2,
        explication: 'Redémarrer le routeur est la première action à faire — elle règle environ 80% des problèmes de connexion.'
      },
      {
        question: 'Comment Yemi sait-elle que le problème est résolu ?',
        choices: [
          'Carlos lui confirme par SMS',
          'L\'icône Wi-Fi redevient normale sans point d\'exclamation',
          'L\'écran de son ordinateur devient bleu',
          'Le routeur s\'éteint automatiquement'
        ],
        answer: 1,
        explication: 'Le retour à une icône Wi-Fi normale confirme que la connexion Internet est rétablie.'
      }
    ]
  }

];
