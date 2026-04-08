'use strict';

window.EMAIL_PRO_DATA = [
  {
    category: 'ORP',
    received: {
      from: 'De : Mme Dupont (Conseillère ORP)',
      subject: 'Demande de preuves de recherches',
      body: 'Bonjour Monsieur,\n\nMerci de m\'envoyer vos preuves de recherches d\'emploi pour le mois de février avant vendredi 17h.\n\nSalutations,\nMme Dupont',
      request: 'Action attendue : répondre poliment et indiquer la pièce jointe demandée.'
    },
    responses: [
      {
        subject: 'Re: Demande de preuves de recherches',
        body: 'Bonjour Madame Dupont,\n\nJe vous envoie en pièce jointe mes preuves de recherches d’emploi pour le mois de février.\n\nJe vous remercie et reste à votre disposition.\n\nCordialement,\nYacine Ben Saad',
        attachment: 'Preuves jointes',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Demande de preuves de recherches',
        body: 'Bonjour Madame Dupont,\n\nJe vous transmets mes preuves de recherches d’emploi pour le mois de février.\n\nCordialement,\nYacine Ben Saad',
        attachment: 'Pièce jointe non annoncée clairement',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est correct, mais il ne dit pas clairement qu’une pièce jointe est envoyée.'
      },
      {
        subject: 'Preuves de recherches - février',
        body: 'Bonjour Madame Dupont,\n\nVeuillez trouver en pièce jointe mes preuves de recherches d’emploi.\n\nMeilleures salutations,\nYacine Ben Saad',
        attachment: 'Preuves jointes',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse est bonne, mais elle reprend moins bien le message reçu et ne précise pas clairement “le mois de février” dans le texte.'
      },
      {
        subject: 'Re: Demande de preuves de recherches',
        body: 'Bonjour Madame Dupont,\n\nJe vous envoie mes documents.\n\nCordialement,\nYacine Ben Saad',
        attachment: 'Documents trop vagues',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est trop vague : il ne précise pas qu’il s’agit des preuves de recherches d’emploi.'
      }
    ],
    answer: 0,
    correctFeedback: 'Bonne réponse : le message est poli, précis, et la pièce jointe est clairement annoncée.'
  },

  {
    category: 'Emploi',
    received: {
      from: 'De : RH Garage Martin',
      subject: 'Disponibilité pour entretien',
      body: 'Bonjour,\n\nNous vous proposons un entretien mardi à 10h. Merci de confirmer votre disponibilité.\n\nCordialement,\nService RH',
      request: 'Action attendue : confirmer clairement la disponibilité.'
    },
    responses: [
      {
        subject: 'Re: Disponibilité pour entretien',
        body: 'Bonjour,\n\nMerci pour votre message. Je confirme ma disponibilité mardi à 10h pour l’entretien.\n\nMeilleures salutations,\nInes Carvalho',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Disponibilité pour entretien',
        body: 'Bonjour,\n\nJe confirme que je suis disponible mardi à 10h pour l’entretien.\n\nCordialement,\nInes Carvalho',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse est correcte, mais la meilleure remercie aussi pour le message reçu.'
      },
      {
        subject: 'Disponibilité entretien mardi',
        body: 'Bonjour,\n\nMerci pour votre message. Je serai disponible mardi à 10h.\n\nMeilleures salutations,\nInes',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Prénom uniquement',
        reasonIfWrong: 'La signature est incomplète.'
      },
      {
        subject: 'Re: Disponibilité pour entretien',
        body: 'Bonjour,\n\nMerci pour votre message. Je confirme ma disponibilité pour mardi.\n\nMeilleures salutations,\nInes Carvalho',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse oublie l’heure précise de 10h.'
      }
    ],
    answer: 0,
    correctFeedback: 'Correct : la disponibilité est confirmée clairement avec la date, l’heure et un ton professionnel.'
  },

  {
    category: 'Administratif',
    received: {
      from: 'De : Commune de Nyon',
      subject: 'Attestation demandée',
      body: 'Bonjour Madame,\n\nMerci de nous transmettre votre attestation de domicile en PDF.\n\nCordialement,\nGuichet population',
      request: 'Action attendue : annoncer la pièce jointe PDF dans la réponse.'
    },
    responses: [
      {
        subject: 'Re: Attestation demandée',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile au format PDF.\n\nJe vous remercie pour votre confirmation de réception.\n\nMeilleures salutations,\nLina Messaoudi',
        attachment: 'Attestation PDF jointe',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Attestation demandée',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile.\n\nJe vous remercie pour votre confirmation de réception.\n\nMeilleures salutations,\nLina Messaoudi',
        attachment: 'Attestation jointe',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse ne précise pas que le document est envoyé au format PDF.'
      },
      {
        subject: 'Attestation de domicile - Lina Messaoudi',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile au format PDF.\n\nCordialement,\nLina Messaoudi',
        attachment: 'Attestation PDF jointe',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse fonctionne, mais la meilleure garde l’objet du message reçu et demande une confirmation de réception.'
      },
      {
        subject: 'Re: Attestation demandée',
        body: 'Bonjour,\n\nJe vous envoie mon document.\n\nMeilleures salutations,\nLina Messaoudi',
        attachment: 'Document trop vague',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est trop vague et ne précise ni le type de document ni le format PDF.'
      }
    ],
    answer: 0,
    correctFeedback: 'Exact : le message est clair, poli, et annonce bien la pièce jointe PDF.'
  },

  {
    category: 'Emploi',
    received: {
      from: 'De : Mme Renaud, Entreprise CleanPlus',
      subject: 'Merci d’envoyer votre CV mis à jour',
      body: 'Bonjour,\n\nAfin de finaliser votre dossier, merci de répondre à ce message avec votre CV mis à jour en pièce jointe.\n\nCordialement,\nMme Renaud',
      request: 'Action attendue : réponse complète avec mention du CV joint.'
    },
    responses: [
      {
        subject: 'Re: Merci d’envoyer votre CV mis à jour',
        body: 'Bonjour Madame Renaud,\n\nMerci pour votre message. Je vous transmets mon CV mis à jour en pièce jointe.\n\nCordialement,\nJoao Pereira',
        attachment: 'CV joint',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Merci d’envoyer votre CV mis à jour',
        body: 'Bonjour Madame Renaud,\n\nJe vous transmets mon CV mis à jour.\n\nCordialement,\nJoao Pereira',
        attachment: 'Pièce jointe non annoncée clairement',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message ne précise pas clairement qu’une pièce jointe accompagne la réponse.'
      },
      {
        subject: 'CV mis à jour - Joao Pereira',
        body: 'Bonjour Madame Renaud,\n\nMerci pour votre message. Vous trouverez mon CV mis à jour en pièce jointe.\n\nMeilleures salutations,\nJoao Pereira',
        attachment: 'CV joint',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse est bonne, mais la meilleure reprend directement l’objet du message reçu.'
      },
      {
        subject: 'Re: Merci d’envoyer votre CV mis à jour',
        body: 'Bonjour Madame Renaud,\n\nMerci pour votre message. Je vous transmets mon CV en pièce jointe.\n\nCordialement,\nJoao Pereira',
        attachment: 'CV joint',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse ne précise pas que le CV est bien mis à jour.'
      }
    ],
    answer: 0,
    correctFeedback: 'Bonne pratique : réponse professionnelle, précise, avec pièce jointe clairement annoncée.'
  },

  {
    category: 'ORP',
    received: {
      from: 'De : ORP Lausanne',
      subject: 'Convocation entretien ORP',
      body: 'Bonjour,\n\nVous êtes convoqué le jeudi 14 mars à 09h00. Merci de confirmer votre présence.\n\nSalutations,\nORP Lausanne',
      request: 'Action attendue : confirmer sa présence.'
    },
    responses: [
      {
        subject: 'Re: Convocation entretien ORP',
        body: 'Bonjour,\n\nJe confirme ma présence à l’entretien ORP du jeudi 14 mars à 09h00.\n\nMeilleures salutations,\nFatima El Idrissi',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Convocation entretien ORP',
        body: 'Bonjour,\n\nJe confirme ma présence à l’entretien ORP du jeudi 14 mars.\n\nMeilleures salutations,\nFatima El Idrissi',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse oublie l’heure précise de 09h00.'
      },
      {
        subject: 'Confirmation présence ORP',
        body: 'Bonjour,\n\nJe confirme ma présence le jeudi 14 mars à 09h00.\n\nCordialement,\nFatima El Idrissi',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse est correcte, mais la meilleure reprend plus précisément le contexte de l’entretien ORP.'
      },
      {
        subject: 'Re: Convocation entretien ORP',
        body: 'Bonjour,\n\nJe serai là.\n\nMeilleures salutations,\nFatima El Idrissi',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse est trop courte et ne reprend ni la date ni l’heure.'
      }
    ],
    answer: 0,
    correctFeedback: 'Correct : confirmation claire, complète et professionnelle.'
  },

  {
    category: 'Administratif',
    received: {
      from: 'De : Assurance Santé Helvia',
      subject: 'Formulaire à signer',
      body: 'Bonjour,\n\nMerci de nous retourner le formulaire signé en pièce jointe.\n\nCordialement,\nService clients',
      request: 'Action attendue : envoyer le formulaire signé et le mentionner.'
    },
    responses: [
      {
        subject: 'Re: Formulaire à signer',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe le formulaire signé demandé.\n\nJe vous remercie de votre confirmation de réception.\n\nCordialement,\nNora Ait Ali',
        attachment: 'Formulaire signé joint',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Formulaire à signer',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe le formulaire demandé.\n\nJe vous remercie de votre confirmation de réception.\n\nCordialement,\nNora Ait Ali',
        attachment: 'Formulaire joint',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse ne précise pas que le formulaire est bien signé.'
      },
      {
        subject: 'Formulaire signé - Nora Ait Ali',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe le formulaire signé demandé.\n\nMeilleures salutations,\nNora Ait Ali',
        attachment: 'Formulaire signé joint',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse fonctionne, mais la meilleure garde l’objet reçu et demande une confirmation de réception.'
      },
      {
        subject: 'Re: Formulaire à signer',
        body: 'Bonjour,\n\nJe vous envoie le formulaire.\n\nCordialement,\nNora Ait Ali',
        attachment: 'Document trop vague',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est trop vague et ne dit pas clairement que le formulaire est signé.'
      }
    ],
    answer: 0,
    correctFeedback: 'Exact : la réponse est claire, polie, et la pièce jointe est correctement annoncée.'
  }
];
