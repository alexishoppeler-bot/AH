'use strict';

window.EMAIL_PRO_DATA = [
  {
    category: 'ORP',
    received: {
      from: 'De : Mme Dupont (Conseillere ORP)',
      subject: 'Demande de preuves de recherches',
      body: 'Bonjour Monsieur,\n\nMerci de m envoyer vos preuves de recherches d emploi pour le mois de fevrier avant vendredi 17h.\n\nSalutations,\nMme Dupont',
      request: 'Action attendue : repondre poliment et indiquer la piece jointe demandee.'
    },
    responses: [
      {
        subject: 'Re: Demande de preuves de recherches',
        body: 'Bonjour Madame Dupont,\n\nJe vous envoie en piece jointe mes preuves de recherches d emploi pour fevrier.\n\nJe vous remercie.\n\nCordialement,\nYacine Ben Saad',
        attachment: 'Preuves jointes',
        signature: 'Signature complete',
        reasonIfWrong: ''
      },
      {
        subject: 'Re',
        body: 'Salut,\n\nVoila.\n\nYacine',
        attachment: 'Piece jointe non precisee',
        signature: 'Signature incomplete',
        reasonIfWrong: 'Le ton est trop familier et la reponse est trop vague.'
      },
      {
        subject: 'Question ORP',
        body: 'Bonjour,\n\nJe n ai pas encore fini. Je vous enverrai plus tard.\n\nMerci',
        attachment: 'Aucune piece jointe',
        signature: 'Pas de signature complete',
        reasonIfWrong: 'La demande n est pas traitee : la piece jointe manque.'
      }
    ],
    answer: 0,
    correctFeedback: 'Bonne reponse : politesse, information claire et document joint.'
  },
  {
    category: 'Emploi',
    received: {
      from: 'De : RH Garage Martin',
      subject: 'Disponibilite pour entretien',
      body: 'Bonjour,\n\nNous vous proposons un entretien mardi a 10h. Merci de confirmer votre disponibilite.\n\nCordialement,\nService RH',
      request: 'Action attendue : confirmer clairement la disponibilite.'
    },
    responses: [
      {
        subject: 'Re: Disponibilite pour entretien',
        body: 'Bonjour,\n\nMerci pour votre message. Je confirme ma disponibilite mardi a 10h pour l entretien.\n\nMeilleures salutations,\nInes Carvalho',
        attachment: 'Aucune piece jointe necessaire',
        signature: 'Signature complete',
        reasonIfWrong: ''
      },
      {
        subject: 'Ok',
        body: 'Oui c est bon.',
        attachment: 'Aucune',
        signature: 'Aucune signature',
        reasonIfWrong: 'La reponse est trop courte et sans formule professionnelle.'
      },
      {
        subject: 'Recrutement',
        body: 'Bonjour,\n\nPouvez-vous me dire le salaire avant l entretien ?\n\nMerci',
        attachment: 'Aucune',
        signature: 'Signature incomplete',
        reasonIfWrong: 'La reponse est hors sujet : il faut d abord confirmer le rendez-vous.'
      }
    ],
    answer: 0,
    correctFeedback: 'Correct : la disponibilite est confirmee clairement avec un ton professionnel.'
  },
  {
    category: 'Administratif',
    received: {
      from: 'De : Commune de Nyon',
      subject: 'Attestation demandee',
      body: 'Bonjour Madame,\n\nMerci de nous transmettre votre attestation de domicile en PDF.\n\nCordialement,\nGuichet population',
      request: 'Action attendue : annoncer la piece jointe PDF dans la reponse.'
    },
    responses: [
      {
        subject: 'Re: Attestation demandee',
        body: 'Bonjour,\n\nVeuillez trouver en piece jointe mon attestation de domicile au format PDF.\n\nJe vous remercie.\n\nMeilleures salutations,\nLina Messaoudi',
        attachment: 'Attestation PDF jointe',
        signature: 'Signature complete',
        reasonIfWrong: ''
      },
      {
        subject: 'Demande commune',
        body: 'Bonjour,\n\nJe pense que je vous ai deja envoye ce document hier.\n\nSalutations',
        attachment: 'Aucune piece jointe',
        signature: 'Pas de nom',
        reasonIfWrong: 'La reponse est incomplete et la piece jointe demandee est absente.'
      },
      {
        subject: '(aucun objet)',
        body: 'Bonjour,\n\nPiece jointe.\n\nLina',
        attachment: 'Non precise',
        signature: 'Signature incomplete',
        reasonIfWrong: 'Objet absent et message trop pauvre pour un contexte administratif.'
      },
      {
        subject: 'URGENT',
        body: 'Hello,\n\nFaites vite svp.\n\nMerci',
        attachment: 'Aucune piece jointe',
        signature: 'Aucune signature',
        reasonIfWrong: 'Ton inadapté et document demande non fourni.'
      }
    ],
    answer: 0,
    correctFeedback: 'Exact : le message est clair, poli et annonce la piece jointe PDF.'
  },
  {
    category: 'Emploi',
    received: {
      from: 'De : Mme Renaud, Entreprise CleanPlus',
      subject: 'Merci d envoyer votre CV mis a jour',
      body: 'Bonjour,\n\nAfin de finaliser votre dossier, merci de repondre a ce message avec votre CV mis a jour en piece jointe.\n\nCordialement,\nMme Renaud',
      request: 'Action attendue : reponse complete avec mention du CV joint.'
    },
    responses: [
      {
        subject: 'Re: Merci d envoyer votre CV mis a jour',
        body: 'Bonjour Madame Renaud,\n\nMerci pour votre message. Je vous transmets mon CV mis a jour en piece jointe.\n\nCordialement,\nJoao Pereira',
        attachment: 'CV joint',
        signature: 'Signature complete',
        reasonIfWrong: ''
      },
      {
        subject: 'Re',
        body: 'Bonjour,\n\nJe vais le faire bientot.\n\nMerci',
        attachment: 'Aucune piece jointe',
        signature: 'Pas de nom complet',
        reasonIfWrong: 'La demande n est pas executee : le CV n est pas joint.'
      },
      {
        subject: 'CV',
        body: 'Salut,\n\nTu trouveras mon CV.\n\nA+',
        attachment: 'CV possiblement joint',
        signature: 'Signature absente',
        reasonIfWrong: 'Le ton est trop familier et la formule de cloture est inadaptée.'
      }
    ],
    answer: 0,
    correctFeedback: 'Bonne pratique : reponse professionnelle avec piece jointe annoncee.'
  },
  {
    category: 'ORP',
    received: {
      from: 'De : ORP Lausanne',
      subject: 'Convocation entretien ORP',
      body: 'Bonjour,\n\nVous etes convoque le jeudi 14 mars a 09h00. Merci de confirmer votre presence.\n\nSalutations,\nORP Lausanne',
      request: 'Action attendue : confirmer sa presence.'
    },
    responses: [
      {
        subject: 'Re: Convocation entretien ORP',
        body: 'Bonjour,\n\nJe confirme ma presence a l entretien ORP du jeudi 14 mars a 09h00.\n\nMeilleures salutations,\nFatima El Idrissi',
        attachment: 'Aucune piece jointe necessaire',
        signature: 'Signature complete',
        reasonIfWrong: ''
      },
      {
        subject: 'Convocation',
        body: 'Bonjour,\n\nJe crois que je peux venir mais pas sur.\n\nFatima',
        attachment: 'Aucune',
        signature: 'Signature incomplete',
        reasonIfWrong: 'La confirmation n est pas claire.'
      },
      {
        subject: 'Re',
        body: 'Ok',
        attachment: 'Aucune',
        signature: 'Aucune signature',
        reasonIfWrong: 'Reponse trop courte et non professionnelle.'
      }
    ],
    answer: 0,
    correctFeedback: 'Correct : confirmation claire, ton adapte et signature complete.'
  },
  {
    category: 'Administratif',
    received: {
      from: 'De : Assurance Sante Helvia',
      subject: 'Formulaire a signer',
      body: 'Bonjour,\n\nMerci de nous retourner le formulaire signe en piece jointe.\n\nCordialement,\nService clients',
      request: 'Action attendue : envoyer le formulaire signe et le mentionner.'
    },
    responses: [
      {
        subject: 'Re: Formulaire a signer',
        body: 'Bonjour,\n\nVeuillez trouver en piece jointe le formulaire signe demande.\n\nJe vous remercie de votre confirmation de reception.\n\nCordialement,\nNora Ait Ali',
        attachment: 'Formulaire signe joint',
        signature: 'Signature complete',
        reasonIfWrong: ''
      },
      {
        subject: 'Formulaire',
        body: 'Bonjour,\n\nJe regarderai ce soir.\n\nMerci',
        attachment: 'Aucune piece jointe',
        signature: 'Signature absente',
        reasonIfWrong: 'Le formulaire signe demande n est pas envoye.'
      },
      {
        subject: 'Hello assurance',
        body: 'Hello,\n\nC est bon pour moi.\n\nA bientot',
        attachment: 'Aucune piece jointe',
        signature: 'Pas de signature',
        reasonIfWrong: 'Formulation trop familiere et reponse incomplete.'
      }
    ],
    answer: 0,
    correctFeedback: 'Exact : reponse claire, polie, et piece jointe correctement annoncee.'
  }
];
