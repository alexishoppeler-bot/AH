'use strict';

window.EMAIL_ECRIRE_DATA = [
  {
    category: 'Candidature',
    situation: 'Vous postulez pour un poste de vendeuse. Vous devez envoyer votre CV et votre lettre de motivation.',
    choices: [
      {
        subject: 'Candidature au poste de vendeuse - Sara Martin',
        body: 'Bonjour Madame,\n\nJe vous envoie ma candidature pour le poste de vendeuse. Vous trouverez mon CV et ma lettre de motivation en pièces jointes.\n\nJe vous remercie pour votre retour.\n\nCordialement,\nSara Martin',
        attachment: 'CV + Lettre',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Candidature',
        body: 'Bonjour Madame,\n\nJe vous transmets ma candidature pour le poste de vendeuse. Mon CV est joint à ce message.\n\nJe vous remercie pour votre retour.\n\nCordialement,\nSara Martin',
        attachment: 'CV uniquement',
        signature: 'Signature complète',
        reasonIfWrong: 'Il manque la lettre de motivation demandée.'
      },
      {
        subject: 'Poste de vendeuse',
        body: 'Bonjour,\n\nJe vous adresse ma candidature pour le poste de vendeuse. Vous trouverez mon CV et ma lettre de motivation en pièces jointes.\n\nSara Martin',
        attachment: 'CV + Lettre',
        signature: 'Nom seul',
        reasonIfWrong: 'Il manque une formule de politesse à la fin, et l’objet est moins précis.'
      },
      {
        subject: 'Demande de travail - Sara Martin',
        body: 'Bonjour Madame,\n\nJe vous envoie mon CV et ma lettre de motivation pour le poste de vendeuse.\n\nMerci de me répondre.\n\nCordialement,\nSara Martin',
        attachment: 'CV + Lettre',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est compréhensible, mais l’objet et la formule “Merci de me répondre” sont moins professionnels.'
      }
    ],
    answer: 0,
    correctFeedback: 'Très bien : l’objet est précis, les pièces jointes sont annoncées, et le message est poli.'
  },

  {
    category: 'ORP',
    situation: 'Votre conseiller ORP demande un justificatif de recherche d’emploi. Vous répondez par e-mail.',
    choices: [
      {
        subject: 'Envoi du justificatif de recherche d’emploi - Malik Ben Ali',
        body: 'Bonjour Madame Dupont,\n\nSuite à votre demande, je vous transmets en pièce jointe mon justificatif de recherche d’emploi pour ce mois.\n\nJe reste à votre disposition.\n\nCordialement,\nMalik Ben Ali',
        attachment: 'Justificatif joint',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Justificatif ORP',
        body: 'Bonjour Madame Dupont,\n\nComme convenu, vous trouverez en pièce jointe mon justificatif de recherche d’emploi.\n\nCordialement,\nMalik Ben Ali',
        attachment: 'Justificatif joint',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message fonctionne, mais l’objet est moins précis et le mois concerné n’est pas indiqué.'
      },
      {
        subject: 'Transmission du justificatif - Malik Ben Ali',
        body: 'Bonjour Madame Dupont,\n\nJe vous transmets mon justificatif de recherche d’emploi pour ce mois.\n\nJe reste à votre disposition.\n\nCordialement,\nMalik Ben Ali',
        attachment: 'Pièce jointe non mentionnée',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message ne précise pas clairement qu’une pièce jointe est envoyée.'
      },
      {
        subject: 'Envoi justificatif ORP - Malik Ben Ali',
        body: 'Bonjour Madame Dupont,\n\nJe vous envoie mon justificatif.\n\nSalutations,\nMalik Ben Ali',
        attachment: 'Justificatif joint',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est trop court et manque de précision.'
      }
    ],
    answer: 0,
    correctFeedback: 'Bonne réponse : le message est clair, poli et la pièce jointe est bien annoncée.'
  },

  {
    category: 'Administratif',
    situation: 'Vous devez envoyer votre attestation de domicile à la commune.',
    choices: [
      {
        subject: 'Attestation de domicile - Lea Dubois',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile.\n\nJe vous remercie pour votre confirmation de réception.\n\nMeilleures salutations,\nLea Dubois',
        attachment: 'Attestation jointe',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Attestation de domicile',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile.\n\nMerci de confirmer la réception.\n\nMeilleures salutations,\nLea Dubois',
        attachment: 'Attestation jointe',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est correct, mais l’objet est moins précis et la formulation est un peu plus directe.'
      },
      {
        subject: 'Envoi attestation de domicile - Lea Dubois',
        body: 'Bonjour,\n\nJe vous transmets mon attestation de domicile en pièce jointe.\n\nJe vous remercie pour votre confirmation de réception.\n\nCordialement,\nLea Dubois',
        attachment: 'Attestation jointe',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse est bonne, mais “Meilleures salutations” convient mieux dans ce contexte administratif.'
      },
      {
        subject: 'Attestation de domicile - Lea Dubois',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile.\n\nJe vous remercie pour votre retour.\n\nMeilleures salutations,\nLea',
        attachment: 'Attestation jointe',
        signature: 'Prénom uniquement',
        reasonIfWrong: 'La signature est incomplète pour un envoi administratif.'
      }
    ],
    answer: 0,
    correctFeedback: 'Exact : objet clair, ton professionnel, pièce jointe annoncée et signature complète.'
  },

  {
    category: 'Entretien',
    situation: 'Une entreprise vous propose un entretien mardi à 14h00. Vous devez confirmer votre présence.',
    choices: [
      {
        subject: 'Confirmation de disponibilité pour l’entretien - Nadia Lopes',
        body: 'Bonjour Madame,\n\nMerci pour votre message. Je confirme ma disponibilité pour l’entretien du mardi à 14h00.\n\nMeilleures salutations,\nNadia Lopes',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Disponibilité entretien',
        body: 'Bonjour Madame,\n\nJe confirme ma disponibilité pour mardi à 14h00.\n\nCordialement,\nNadia Lopes',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message fonctionne, mais l’objet est moins précis et il manque un remerciement.'
      },
      {
        subject: 'Confirmation entretien - Nadia Lopes',
        body: 'Bonjour Madame,\n\nMerci pour votre message. Je confirme ma disponibilité pour mardi.\n\nMeilleures salutations,\nNadia Lopes',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse ne reprend pas l’heure de 14h00.'
      },
      {
        subject: 'Re: entretien',
        body: 'Bonjour,\n\nJe serai là.\n\nNadia',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Prénom uniquement',
        reasonIfWrong: 'La réponse est trop courte, peu professionnelle et la signature est incomplète.'
      }
    ],
    answer: 0,
    correctFeedback: 'Très bien : la réponse remercie, confirme clairement la date et l’heure, et reste professionnelle.'
  },

  {
    category: 'Assurance',
    situation: 'Votre assurance demande le formulaire signé en PDF. Vous devez l’envoyer par e-mail.',
    choices: [
      {
        subject: 'Envoi du formulaire signé en PDF - Karim Haddad',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon formulaire signé au format PDF.\n\nJe vous remercie pour votre confirmation de réception.\n\nCordialement,\nKarim Haddad',
        attachment: 'Formulaire signé PDF',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Formulaire signé',
        body: 'Bonjour,\n\nJe vous transmets mon formulaire signé.\n\nCordialement,\nKarim Haddad',
        attachment: 'Format PDF non mentionné',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message ne précise pas que le document est envoyé en PDF.'
      },
      {
        subject: 'Envoi du formulaire - Karim Haddad',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon formulaire signé au format PDF.\n\nMerci.\n\nKarim Haddad',
        attachment: 'Formulaire signé PDF',
        signature: 'Signature simple',
        reasonIfWrong: 'Le message est compréhensible, mais la formule de politesse et la signature sont plus faibles.'
      },
      {
        subject: 'Document',
        body: 'Bonjour,\n\nJe vous envoie le document demandé.\n\nCordialement,\nKarim Haddad',
        attachment: 'Document trop vague',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est trop vague et ne précise ni le formulaire signé ni le format PDF.'
      }
    ],
    answer: 0,
    correctFeedback: 'Bonne réponse : le document demandé est clairement annoncé, avec le format PDF et une formule polie.'
  },

  {
    category: 'Logement',
    situation: 'La gérance vous demande votre copie de permis et vos trois dernières fiches de salaire pour compléter votre dossier.',
    choices: [
      {
        subject: 'Envoi des documents demandés - Sofia Mendes',
        body: 'Bonjour,\n\nSuite à votre demande, je vous transmets en pièces jointes une copie de mon permis ainsi que mes trois dernières fiches de salaire.\n\nJe reste à votre disposition pour tout complément.\n\nMeilleures salutations,\nSofia Mendes',
        attachment: 'Permis + 3 fiches de salaire',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Documents pour le dossier',
        body: 'Bonjour,\n\nJe vous transmets une copie de mon permis en pièce jointe.\n\nMeilleures salutations,\nSofia Mendes',
        attachment: 'Permis uniquement',
        signature: 'Signature complète',
        reasonIfWrong: 'Il manque les trois fiches de salaire demandées.'
      },
      {
        subject: 'Envoi de documents - Sofia Mendes',
        body: 'Bonjour,\n\nJe vous transmets les documents demandés pour mon dossier.\n\nCordialement,\nSofia Mendes',
        attachment: 'Documents non détaillés',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est trop vague et ne détaille pas les pièces jointes.'
      },
      {
        subject: 'Dossier location',
        body: 'Bonjour,\n\nVous trouverez mes documents en pièce jointe.\n\nSofia',
        attachment: 'Documents non détaillés',
        signature: 'Prénom uniquement',
        reasonIfWrong: 'La signature est incomplète et les documents ne sont pas précisés.'
      }
    ],
    answer: 0,
    correctFeedback: 'Exact : l’e-mail annonce clairement les deux types de documents et garde un ton professionnel.'
  }
];
