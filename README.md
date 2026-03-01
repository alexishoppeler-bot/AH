# Plateforme Autonomie Numerique

Plateforme web locale pour entrainer les competences numeriques via des exercices.

## Demarrage

1. Ouvrir `games/accueil.html` dans un navigateur.
2. La progression est stockee en local (`localStorage`).
3. Aucun backend requis.

## GitHub Pages

1. Activer GitHub Pages dans les settings du depot.
2. Source: `main` / `/ (root)`.
3. URL d'entree: `index.html` (redirige vers `games/accueil.html`).
4. Entree locale directe: `games/accueil.html`.

## Structure utile

- `games/`: pages des exercices.
- `js/stages.js`: logique de progression par etapes.
- `js/shared.js`: header, sidebar, footer, rendu dynamique.
- `js/score.js`: stockage et metriques.
- `js/exercise-utils.js`: helpers communs.
- `js/data/`: jeux de donnees par exercice.
- `css/`: theme, layout, composants, utilitaires.
- `cours-du-jour.html`: page "Cours du jour" (cours modele).

## Progression

- Les jeux et bonus sont visibles des l'accueil.
- La progression est suivie exercice par exercice (non commence, en cours, termine).
- Les recommandations de "prochain exercice" s'appuient sur la progression locale.

## Admin discret

- Bouton discret `adm` dans le header.
- Code: `1984`.
- Effet: affiche toutes les etapes et bonus dans l'accueil et la sidebar.
- Toggle: re-cliquer sur `adm*` pour desactiver.
- Cle locale: `ah_admin_unlock_all`.

## Dev rapide

- Ajouter un exercice:
1. Creer `games/<exercice>.html`.
2. Creer `js/data/<exercice>-data.js` si necessaire.
3. Ajouter la page dans la configuration (`js/exercises-config.js`).

## Revision automatique

- Lancer une revision complete locale:
1. Double-cliquer `REVISION.cmd` (Windows).
2. Ou executer `node admin/revision-complete.mjs`.
3. Corriger les erreurs listees en priorite, puis relancer.

## Documentation

- `README.md`: reference principale.
- `QUICK_START.md`: checklist courte de verification.
