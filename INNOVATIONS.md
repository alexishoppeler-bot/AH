# Innovations & Positionnement Stratégique
## Proactif.ch — Plateforme Autonomie Numérique
### Analyse marché, opportunités et roadmap 5 ans (2026–2030)

---

## 1. Contexte Marché Suisse Romand

### Forces actuelles de Proactif.ch
- **30 ans d'expertise** en insertion professionnelle (Vevey & Lausanne)
- **Certification B Corp 2025** — 1er dans les 10 organismes de formation suisses
- **Certification EduQua** — gage de qualité reconnu par les institutions publiques
- **Expertise DYS unique** — seule organisation romande reconnue par l'AI Office pour les troubles dys/TDAH dans la formation numérique
- **Partenariats institutionnels solides** : SDE, DGEM Vaud, OAI

### Paysage concurrentiel
| Acteur | Force | Faiblesse |
|---|---|---|
| OSEO Suisse | Réseau national, présence cantonale | Pas de plateforme numérique propre |
| CEFIL / Fondation Le Relais | Large catalogue, EduQua | Peu d'innovation numérique |
| BM Formation | Marketing ciblé ORP | Contenu générique, pas adapté |
| ADIS (Alliance Inc. Num.) | Coordination nationale | Pas de formation directe |
| digitalswitzerland | Visibilité nationale, IA | Orienté entreprises, pas insertion |

### Chiffres clés
- **22–31%** de la population suisse a des compétences numériques insuffisantes (OFS 2024)
- **50%+** des bénéficiaires ORP ne peuvent pas utiliser les outils numériques de façon autonome (OSEO 2024)
- Dans le canton de Vaud, seulement **3 mesures sur 12** offrent des modules numériques dédiés
- Le Conseil fédéral a adopté en décembre 2024 la **stratégie "Suisse Numérique"** avec financement cantonal pour les compétences de base adultes
- **66% des employeurs** disent ne pas vouloir engager sans compétences numériques de base (Microsoft/LinkedIn 2025)

---

## 2. Ce Qui N'Existe Pas Encore Sur le Marché

### GAP 1 — Auto-évaluation numérique calibrée ORP/AI 🔴 PRIORITÉ HAUTE
**Ce qui manque :** Aucun outil français, validé, accessible aux personnes à faible littératie, pour mesurer les compétences numériques selon le cadre DigComp adapté au contexte suisse.

**Idée produit :** Un module d'auto-évaluation en 15 minutes, gamifié, visuel, sans texte dense, qui génère automatiquement un **profil de compétences** et une **recommandation de parcours** (quel exercice commencer, à quel niveau).

---

### GAP 2 — Parcours adaptatif piloté par l'IA 🔴 PRIORITÉ HAUTE
**Ce qui manque :** Toutes les plateformes romandes d'insertion (OSEO, CEFIL, Proactif) fonctionnent en présentiel, instructor-led. Aucune ne propose un parcours numérique qui s'adapte au rythme, aux erreurs et au profil apprenant.

**Idée produit :** Intégrer un moteur de recommandation simple (règles + scoring) qui :
- Analyse les performances par exercice
- Propose automatiquement le prochain exercice selon les lacunes détectées
- Adapte la difficulté intra-exercice (ex. : Hangman avec mots plus courts si trop d'erreurs)
- Envoie des "coups de pouce" contextuels basés sur les erreurs répétées

---

### GAP 3 — Mode DYS/ADHD en ligne (avantage compétitif unique de Proactif) 🔴 PRIORITÉ HAUTE
**Ce qui manque :** Proactif a une expertise DYS unique en Suisse romande mais elle reste offline. Aucune plateforme en ligne n'intègre réellement les principes d'accessibilité DYS.

**Idée produit :** Activer et développer le `body.dyslexia` déjà présent dans le code :
- Télécharger et intégrer **OpenDyslexic** en local (police spécialisée)
- Espacement inter-lignes adapté (déjà codé : line-height 1.9)
- Mode "Lecture facilitée" : affichage syllabique, fond coloré (crème/jaune pâle)
- Limiter les animations pour le TDAH (déjà géré par `prefers-reduced-motion`)
- Accès rapide au mode DYS depuis l'header (bouton visible)
- **Différenciateur : positionner Proactif comme "La seule plateforme de formation numérique DYS-friendly en Romandie"**

---

### GAP 4 — Micro-certifications vérifiables liées au dossier ORP 🔴 PRIORITÉ HAUTE
**Ce qui manque :** Quand un bénéficiaire ORP termine une formation numérique, il n'obtient rien de vérifiable. Les conseillers ORP ne voient pas la progression en temps réel.

**Idée produit :**
- Générer un **PDF d'attestation de compétences** téléchargeable (ex. : "A complété 18/24 exercices, niveau 4/5, date : XX.XX.XXXX")
- Inclure un **QR code de vérification** (hash simple stocké localement ou sur serveur minimal)
- Créer un **rapport de progression exportable** pour les conseillers ORP/AI
- À terme : intégration avec **OneDossier** ou systèmes cantonaux ORP

---

### GAP 5 — Communauté d'apprenants et accountability sociale 🟡 PRIORITÉ MOYENNE
**Ce qui manque :** Les demandeurs d'emploi sont souvent isolés. Aucune plateforme d'insertion ne propose de fonctionnalités communautaires ou de groupe d'apprentissage.

**Idée produit :**
- **Sessions de groupe hebdomadaires** : un formateur Proactif anime une session en ligne où les participants font des exercices en simultané (live + partage d'écran simplifié)
- **Tableau de bord de classe** (pour les formateurs) : voir la progression de tous leurs bénéficiaires sur un seul écran
- **Défis hebdomadaires** : un exercice recommandé par Proactif chaque semaine, partageable

---

### GAP 6 — IA conversationnelle comme "coach numérique" 🟡 PRIORITÉ MOYENNE
**Ce qui manque :** Toutes les plateformes sont passives (tu fais l'exercice, tu as un score). Aucune ne propose un accompagnement conversationnel pour les personnes en difficulté.

**Idée produit :**
- Un chatbot simple (Claude API ou similaire) qui :
  - Explique les erreurs en langage simple
  - Répond aux questions "Comment faire pour ..." (chercher un emploi en ligne, envoyer un email, etc.)
  - Encourage et motive (pas seulement score technique)
- Utiliser l'API Claude d'Anthropic pour un assistant contextualisé formation

---

### GAP 7 — Multilinguisme contextuel (migration) 🟡 PRIORITÉ MOYENNE
**Ce qui manque :** Une portion significative des bénéficiaires ORP vaud sont des migrants avec des langues maternelles non-latines (arabe, tigrinya, albanais, portugais...).

**Idée produit :**
- Interface traduite en **10 langues les plus fréquentes parmi les réfugiés/migrants en Suisse**
- Exercices bilingues : consigne en français + langue maternelle
- Audio des consignes (Text-to-Speech) pour les personnes à faible littératie
- Partenariat avec le **SEM** (Secrétariat d'État aux migrations) pour financement

---

### GAP 8 — Intégration e-gouvernement suisse 🟠 PRIORITÉ CROISSANTE
**Ce qui manque :** Les démarches administratives suisses se digitalisent rapidement (AVS online, impôts, soins de santé). Aucune formation ne prépare explicitement à ces portails.

**Idée produit :**
- Simulateurs de portails gouvernementaux suisses :
  - Simulateur "Mon compte ORP" (déposer un dossier en ligne)
  - Simulateur "ch.ch" (rechercher une information officielle)
  - Simulateur "SwissPass / CFF" (acheter un billet)
  - Simulateur "My.AVS" (consulter son compte AVS)
- Ces simulateurs s'inscrivent parfaitement dans la stratégie **"Suisse Numérique 2026"** du Conseil fédéral

---

## 3. Roadmap 5 Ans (2026–2030)

```
2026 — CONSOLIDATION & DIFFÉRENCIATION
├── Q1: Polices locales ✅ (fait), favicon ✅, bug fixes ✅
├── Q2: Mode DYS complet (OpenDyslexic local, bouton header, mode lecture)
├── Q3: Auto-évaluation initiale (15 min, gamifiée, profil de compétences)
└── Q4: Export PDF attestation + rapport formateur (Proactif)

2027 — INTELLIGENCE & PERSONNALISATION
├── Q1: Moteur de recommandation adaptatif (parcours auto)
├── Q2: Tableau de bord formateur (vue classe multi-bénéficiaires)
├── Q3: Simulateurs e-gouvernement suisse (ch.ch, ORP, AVS)
└── Q4: 10 premières traductions (arabe, albanais, tigrinya, portugais...)

2028 — COMMUNAUTÉ & CERTIFICATION
├── Q1: Sessions de groupe hebdomadaires (live facilité)
├── Q2: Micro-certifications vérifiables + QR code
├── Q3: Intégration systèmes cantonaux ORP Vaud (API ou export)
└── Q4: Coach IA conversationnel (chatbot Claude API)

2029 — EXPANSION ROMANDE
├── Q1: Déploiement cantonal (Genève, Fribourg, Neuchâtel, Valais)
├── Q2: Partenariat ADIS (Alliance Inclusion Numérique Suisse)
├── Q3: Financement fédéral via "programmes cantonaux compétences de base"
└── Q4: Version mobile native (PWA installable)

2030 — LEADERSHIP NATIONAL
├── Plateforme de référence nationale pour l'insertion numérique en Romandie
├── Modèle certifié DigComp-CH (cadre européen adapté Suisse)
├── 10'000+ bénéficiaires actifs/an sur la plateforme
└── Licence du modèle à d'autres cantons/pays francophones
```

---

## 4. Positionnement Proposé

### Tagline actuelle (implicite) :
> "Des exercices numériques pour demandeurs d'emploi"

### Positionnement proposé :
> **"La seule plateforme d'insertion numérique pensée pour chaque apprenant — DYS-friendly, multilingue, certifiante."**

### Piliers de différenciation Proactif vs. concurrence :
1. **DYS/ADHD** — expertise unique, à digitaliser (personne d'autre ne le fait)
2. **Certification vérifiable** — valeur concrète pour ORP et employeurs
3. **Adaptatif** — pas "one size fits all"
4. **Local** — ancrage Vaud/Romandie, compréhension des contextes locaux
5. **Humain** — B Corp, valeurs, approche pédagogique chaleureuse

---

## 5. Quick Wins Techniques Immédiats (sans développement majeur)

### 5.1 OpenDyslexic en local (1 jour de travail)
```
1. Télécharger OpenDyslexic-Regular.woff2 sur opendyslexic.org (license SIL Open Font)
2. Ajouter dans assets/fonts/
3. Ajouter @font-face dans theme.css (déjà préparé dans body.dyslexia)
4. Ajouter un bouton "Mode DYS" dans le header (shared.js)
5. Sauvegarder préférence dans localStorage
```

### 5.2 Bouton export progression PDF
```
1. Utiliser window.print() avec une CSS @media print dédiée
2. Créer une page evaluations-print.css qui formate proprement le rapport
3. Ajouter un bouton "Télécharger mon bilan" sur evaluations.html
```

### 5.3 Meta description + SEO minimal
```
1. Ajouter <meta name="description"> sur chaque page (pour démo professionnelle)
2. Ajouter Open Graph tags (og:title, og:description) pour partage facile
```

### 5.4 Manifest PWA (installable sur mobile)
```
1. Créer manifest.json (nom, icône, couleur thème)
2. Ajouter <link rel="manifest"> dans toutes les pages
3. Ajouter un Service Worker minimal pour offline
→ L'app devient installable sur le bureau/téléphone des bénéficiaires
```

---

## 6. Financements Disponibles en Suisse

| Source | Montant | Pertinence |
|---|---|---|
| Programmes cantonaux compétences de base (SEFRI) | ~CHF 50k–200k/projet | ★★★★★ |
| Appel projets inclusion numérique Genève | CHF 150k total (2025) | ★★★★☆ |
| Innosuisse (innovation sociale) | CHF 100k–500k | ★★★☆☆ |
| Fondation Gebert Rüf (innovation sociale Suisse) | CHF 50k–150k | ★★★★☆ |
| Fonds d'innovation LPP / AVS | Variable | ★★★☆☆ |
| Swisslos (fonds loterie Vaud) | CHF 20k–80k | ★★★☆☆ |

---

*Document rédigé sur la base d'une analyse de marché menée en mars 2026.*
*Sources : proactif.ch, OSEO, ADIS, digital.swiss, OFS, SECO, rapports sectoriels.*
