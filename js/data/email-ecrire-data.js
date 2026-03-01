'use strict';

window.EMAIL_ECRIRE_DATA = [
  {
    category: 'Candidature',
    situation: 'Vous postulez pour un poste de vendeuse. Vous devez envoyer votre CV et votre lettre de motivation.',
    choices: [
      {
        subject: 'Candidature - Vendeuse - Sara Martin',
        body: 'Bonjour Madame,\n\nJe vous envoie ma candidature pour le poste de vendeuse. Vous trouverez mon CV et ma lettre de motivation en pieces jointes.\n\nJe vous remercie pour votre retour.\n\nCordialement,\nSara Martin',
        attachment: 'CV + Lettre',
        signature: 'Signature complete',
        reasonIfWrong: ''
      },
      {
        subject: '(aucun objet)',
        body: 'Bonjour,\n\nJe veux travailler chez vous. Repondez vite.\n\nSara',
        attachment: 'Aucune piece jointe',
        signature: 'Signature incomplete',
        reasonIfWrong: 'Il manque un objet clair et les pieces jointes demandees.'
      },
      {
        subject: 'Salut',
        body: 'Salut,\n\nTu peux regarder mon profil et me dire ?\n\nMerci',
        attachment: 'Aucune piece jointe',
        signature: 'Pas de signature',
        reasonIfWrong: 'Le ton est trop familier pour une candidature professionnelle.'
      }
    ],
    answer: 0,
    correctFeedback: 'Cet e-mail est correct : objet precis, politesse, pieces jointes et signature claire.'
  },
  {
    category: 'ORP',
    situation: 'Votre conseiller ORP demande un justificatif de recherche d emploi. Vous repondez par e-mail.',
    choices: [
      {
        subject: 'Document',
        body: 'Bonjour,\n\nJe vous envoie un truc.\n\nMerci',
        attachment: 'Piece jointe non precisee',
        signature: 'Pas de nom complet',
        reasonIfWrong: 'L objet et le contenu sont trop vagues.'
      },
      {
        subject: 'Envoi justificatif ORP - Malik Ben Ali',
        body: 'Bonjour Madame Dupont,\n\nSuite a votre demande, je vous transmets en piece jointe mon justificatif de recherche d emploi pour ce mois.\n\nJe reste a disposition.\n\nCordialement,\nMalik Ben Ali',
        attachment: 'Justificatif joint',
        signature: 'Signature complete',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: ORP',
        body: 'Bonjour,\n\nJe n ai pas eu le temps. Je verrai plus tard.\n\nSalutations',
        attachment: 'Aucune piece jointe',
        signature: 'Signature absente',
        reasonIfWrong: 'La piece jointe manque et le message ne repond pas a la demande.'
      }
    ],
    answer: 1,
    correctFeedback: 'Bonne reponse : message clair, poli, et piece jointe annoncee.'
  },
  {
    category: 'Administratif',
    situation: 'Vous devez envoyer votre attestation de domicile a la commune.',
    choices: [
      {
        subject: 'Attestation de domicile - Lea Dubois',
        body: 'Bonjour,\n\nVeuillez trouver en piece jointe mon attestation de domicile.\n\nJe vous remercie pour votre confirmation de reception.\n\nMeilleures salutations,\nLea Dubois',
        attachment: 'Attestation jointe',
        signature: 'Signature complete',
        reasonIfWrong: ''
      },
      {
        subject: 'Demande',
        body: 'Bonjour,\n\nPouvez-vous faire le necessaire ?\n\nMerci',
        attachment: 'Aucune piece jointe',
        signature: 'Pas de nom complet',
        reasonIfWrong: 'Le document demande n est pas joint.'
      },
      {
        subject: '(aucun objet)',
        body: 'Bonjour,\n\nJe vous ecris pour la commune.\n\nLea',
        attachment: 'Aucune piece jointe',
        signature: 'Signature incomplete',
        reasonIfWrong: 'Il manque un objet et le document administratif.'
      },
      {
        subject: 'URGENT !!!',
        body: 'Salut,\n\nJ ai deja tout envoye hier, merci.\n\nBye',
        attachment: 'Aucune piece jointe',
        signature: 'Pas de signature',
        reasonIfWrong: 'Le ton est inadapté et l objet ne correspond pas a la demande.'
      }
    ],
    answer: 0,
    correctFeedback: 'Exact : objet adapte, message professionnel, piece jointe et signature.'
  }
];
