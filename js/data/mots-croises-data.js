/* ===== JS/DATA/MOTS-CROISES-DATA.JS ===== */
'use strict';

window.MOTS_CROISES_DATA = [
  {
    name: 'Grille 1 — Informatique',
    rows: 9,
    cols: 11,
    // Chaque ligne = chaîne de longueur `cols`. '#' = noir.
    layout: [
      'PROCESSEUR#',
      '#####E#####',
      '#####S#####',
      'CLAVIER####',
      '#####U#####',
      '######ECRAN',
      'INTERNET###',
      '###########',
      'SOURIS#####',
    ],
    words: [
      { id:1, dir:'across', r:0, c:0, answer:'PROCESSEUR', clue:'Composant principal qui exécute les instructions de votre ordinateur' },
      { id:2, dir:'across', r:3, c:0, answer:'CLAVIER',    clue:'Outil physique pour taper du texte sur votre ordinateur' },
      { id:3, dir:'across', r:5, c:6, answer:'ECRAN',      clue:'Surface qui affiche ce que vous faites sur votre ordinateur' },
      { id:4, dir:'across', r:6, c:0, answer:'INTERNET',   clue:'Réseau mondial qui connecte des milliards d\'appareils et de personnes' },
      { id:5, dir:'across', r:8, c:0, answer:'SOURIS',     clue:'Outil physique pour cliquer et naviguer à l\'écran' },
      { id:6, dir:'down',   r:0, c:5, answer:'RESEAU',     clue:'Ensemble d\'appareils connectés entre eux pour partager des informations' },
    ],
  },
  {
    name: 'Grille 2 — Bureautique',
    rows: 9,
    cols: 10,
    layout: [
      'FORMULE###',
      '##########',
      'TABLEAU###',
      '#A########',
      '#B########',
      '#L########',
      '#E####WORD',
      '#U########',
      '#R########',
    ],
    words: [
      { id:1, dir:'across', r:0, c:0, answer:'FORMULE', clue:'Calcul automatique dans un tableur, qui commence par le signe =' },
      { id:2, dir:'across', r:2, c:0, answer:'TABLEAU', clue:'Organisation de données en lignes et colonnes dans un tableur' },
      { id:3, dir:'across', r:6, c:6, answer:'WORD',    clue:'Logiciel Microsoft pour rédiger des lettres et des documents' },
      { id:4, dir:'down',   r:2, c:1, answer:'ABLEUR',  clue:null },
    ],
  },
  {
    name: 'Grille 3 — Réseau & Sécurité',
    rows: 9,
    cols: 10,
    layout: [
      'ROUTEUR###',
      '#######A##',
      '#######R##',
      'ADRESSE###',
      '#######F##',
      '#######E##',
      'SERVEUR###',
      '#######U##',
      'VIRUS#####',
    ],
    words: [
      { id:1, dir:'across', r:0, c:0, answer:'ROUTEUR', clue:'Appareil qui partage votre connexion Internet dans un logement ou un bureau' },
      { id:2, dir:'across', r:3, c:0, answer:'ADRESSE', clue:'Identifiant numérique qui localise votre appareil sur Internet (ex. adresse IP)' },
      { id:3, dir:'across', r:6, c:0, answer:'SERVEUR', clue:'Ordinateur distant qui stocke et envoie des données (e-mails, sites web…)' },
      { id:4, dir:'across', r:8, c:0, answer:'VIRUS',   clue:'Programme malveillant qui peut endommager votre ordinateur ou voler vos données' },
      { id:5, dir:'down',   r:0, c:7, answer:'AREFEU',  clue:null },
    ],
  },
];
