/* ===== JS/SHARED.JS — HTML partagé (sidebar + header + footer) ===== */
'use strict';

const SIDEBAR_HTML = `
<aside class="sidebar" id="sidebar">
  <div class="sidebar-section">
    <div class="sidebar-group">
      <button class="sidebar-group-btn" type="button" aria-expanded="false">
        Navigation
        <span class="chev" aria-hidden="true">▾</span>
      </button>
      <div class="sidebar-group-body">
        <a href="../games/accueil.html" class="sidebar-link">Accueil</a>
        <a href="../games/evaluations.html" class="sidebar-link">Mes résultats</a>
        <a href="../games/regles.html" class="sidebar-link">Règles XP</a>
        <a href="../games/donnees.html" class="sidebar-link">Données locales</a>
      </div>
    </div>
    <div class="sidebar-group">
      <button class="sidebar-group-btn" type="button" aria-expanded="false">
        Jeux individuels
        <span class="chev" aria-hidden="true">▾</span>
      </button>
      <div class="sidebar-group-body">
        <a href="../games/clavier.html" class="sidebar-link">Clavier</a>
        <a href="../games/cliquer.html" class="sidebar-link">Cliquer</a>
        <a href="../games/fenetres-web.html" class="sidebar-link">Fenetres web</a>
        <a href="../games/email-ecrire.html" class="sidebar-link">Email ecrire</a>
        <a href="../games/email-pro.html" class="sidebar-link">Email pro</a>
        <a href="../games/formulaire.html" class="sidebar-link">Formulaire</a>
        <a href="../games/dossiers-explorateur.html" class="sidebar-link">Dossiers explorateur</a>
        <a href="../games/ecouter.html" class="sidebar-link">Ecouter</a>
      </div>
    </div>
    <div class="sidebar-group">
      <button class="sidebar-group-btn" type="button" aria-expanded="false">
        Tournois
        <span class="chev" aria-hidden="true">▾</span>
      </button>
      <div class="sidebar-group-body">
        <a href="../games/anagramme.html" class="sidebar-link">Anagramme</a>
        <a href="../games/pendu.html" class="sidebar-link">Pendu</a>
        <a href="../games/quiz.html" class="sidebar-link">Quiz</a>
        <a href="../games/vrai-faux.html" class="sidebar-link">Vrai/Faux</a>
        <a href="../games/demeler.html" class="sidebar-link">Demeler</a>
        <a href="../games/completer.html" class="sidebar-link">Completer</a>
        <a href="../games/apparier.html" class="sidebar-link">Apparier</a>
        <a href="../games/paire.html" class="sidebar-link">Paire</a>
      </div>
    </div>
    <div class="sidebar-group">
      <button class="sidebar-group-btn" type="button" aria-expanded="false">
        Cours Modeles
        <span class="chev" aria-hidden="true">▾</span>
      </button>
    <div class="sidebar-group-body">
        <a href="../pages/cours-du-jour.html" class="sidebar-link">Cours du jour</a>
        <a href="../pages/decouverte-partage.html" class="sidebar-link">Decouverte partage</a>
        <a href="../pages/debriefing.html" class="sidebar-link">Debriefing</a>
        <a href="../pages/conclusion.html" class="sidebar-link">Conclusion</a>
        <a href="../pages/atelier-recherche-emploi.html" class="sidebar-link">Atelier recherche d emploi</a>
      </div>
    </div>
    <div class="sidebar-group">
      <button class="sidebar-group-btn" type="button" aria-expanded="false">
        Supports de cours
        <span class="chev" aria-hidden="true">▾</span>
      </button>
      <div class="sidebar-group-body">
        <a href="../pages/souris-virtuelle.html" class="sidebar-link">Souris virtuelle v13</a>
        <a href="../pages/support-clavier.html" class="sidebar-link">Support clavier</a>
      </div>
    </div>
  </div>
</aside>`;

const HEADER_HTML = `
<header class="header">
  <div class="flex items-center gap-12">
    <button class="sidebar-toggle" id="sidebarToggle">☰</button>
    <a href="../games/accueil.html" class="header-logo" style="text-decoration:none;">
      <div class="header-logo-icon" aria-label="Logo Alexis Höppeler" role="img"></div>
      <span>Plateforme Autonomie numérique</span>
    </a>
  </div>
  <div class="header-right">
    <button class="btn-mode" id="btnMode">Mode clair</button>
  </div>
</header>`;

const FOOTER_HTML = `
<footer class="footer">
  <span>© 2026 Alexis Höppeler — Plateforme Autonomie numérique</span>
  <span style="color:var(--text3)">Données stockées localement · Aucune connexion requise</span>
</footer>`;

// Supprime l'affichage des cartes KPI tout en conservant les IDs
// nécessaires aux scripts de suivi/statistiques.
function stripVisibleKpiCardsKeepBindings() {
  const selectors = [
    '.container > .kpi-grid.fade-up.delay-1',
    '.container > .mm-kpi-row.fade-up.delay-1',
    '.container > .cw-kpi-row.fade-up.delay-1',
  ];

  document.querySelectorAll(selectors.join(',')).forEach(container => {
    const idNodes = container.querySelectorAll('[id]');
    if (!idNodes.length) {
      container.remove();
      return;
    }

    const sink = document.createElement('div');
    sink.style.display = 'none';
    sink.setAttribute('aria-hidden', 'true');
    sink.dataset.ahTelemetry = 'kpi';

    idNodes.forEach(node => {
      if (!node.id) return;
      if (document.getElementById(node.id) !== node) return;
      const mirror = document.createElement('span');
      mirror.id = node.id;
      mirror.textContent = node.textContent || '';
      sink.appendChild(mirror);
    });

    container.insertAdjacentElement('afterend', sink);
    container.remove();
  });
}

function initSharedLayout() {
  if (window.__AH_SHARED_INIT__) return;
  window.__AH_SHARED_INIT__ = true;

  stripVisibleKpiCardsKeepBindings();

  // Header
  const hSlot = document.getElementById('header-slot');
  if (hSlot) hSlot.outerHTML = HEADER_HTML;

  // Sidebar
  const sSlot = document.getElementById('sidebar-slot');
  if (sSlot) sSlot.outerHTML = SIDEBAR_HTML;

  // Footer
  const fSlot = document.getElementById('footer-slot');
  if (fSlot) fSlot.outerHTML = FOOTER_HTML;

}

// Injecter le layout des que possible pour eviter l'effet de flash.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSharedLayout, { once: true });
  if (document.getElementById('header-slot') || document.getElementById('sidebar-slot') || document.getElementById('footer-slot')) {
    initSharedLayout();
  }
} else {
  initSharedLayout();
}
