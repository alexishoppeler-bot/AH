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
  }
];
