# Quick Start

## Usage

1. Ouvrir `games/accueil.html` (local) ou `index.html` (GitHub Pages, redirection).
2. Suivre les etapes proposees.
3. Verifier la progression dans la sidebar.

## Verification rapide

1. Ouvrir `games/accueil.html` et verifier que la liste des jeux s'affiche.
2. Lancer 2 a 3 jeux differents et verifier l'etat (`Non commence` / `En cours` / `Termine`).
3. Ouvrir `games/evaluations.html` et confirmer la mise a jour des resultats.
4. Revenir a l'accueil et verifier la recommandation du prochain exercice.

## Admin (debug visuel)

1. Cliquer sur le bouton discret `adm` (header).
2. Entrer `1984`.
3. Verifier que toutes les etapes/bonus sont visibles.
4. Re-cliquer sur `adm*` pour revenir au mode normal.

## Reset local

Dans la console navigateur:

```javascript
ScoreManager.reset();
location.reload();
```
