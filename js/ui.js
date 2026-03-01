/* ===== JS/UI.JS — Fonctions UI partagées ===== */
'use strict';

// === MODE SOMBRE/CLAIR ===
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark', saved === 'dark');
  updateThemeBtn();
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeBtn();
}

function updateThemeBtn() {
  const btn = document.getElementById('btnMode');
  if (btn) {
    const isDark = document.body.classList.contains('dark');
    btn.textContent = isDark ? 'Mode clair' : 'Mode sombre';
  }
}

// === SIDEBAR MOBILE ===
function initSidebar() {
  const toggle = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      const isOpen = sidebar.classList.toggle('open');
      // Mettre à jour le style du bouton quand le menu est ouvert
      toggle.classList.toggle('active', isOpen);
    });
    // Fermer si clic en dehors
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
        sidebar.classList.remove('open');
        toggle.classList.remove('active');
      }
    });

    // Evite le rechargement/flicker si l'utilisateur clique sur la page deja ouverte.
    sidebar.addEventListener('click', (e) => {
      const link = e.target.closest('.sidebar-link');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;

      const targetUrl = new URL(href, window.location.href);
      const samePath = targetUrl.pathname === window.location.pathname;
      const sameHash = (targetUrl.hash || '') === (window.location.hash || '');
      if (samePath && sameHash) {
        e.preventDefault();
      }
    });
  }
  initSidebarAccordion();
  // Marquer le lien actif
  markActiveLink();
}

function initSidebarAccordion() {
  const groups = document.querySelectorAll('.sidebar-group');
  if (!groups.length) return;

  groups.forEach(group => {
    const btn = group.querySelector('.sidebar-group-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = group.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
}

function markActiveLink() {
  const currentPath = window.location.pathname;
  const curr = currentPath.split('/').pop() || 'accueil.html';

  // Réinitialiser tous les liens actifs
  document.querySelectorAll('.sidebar-link.active').forEach(link => {
    link.classList.remove('active');
  });

  // Marquer le lien actif courant
  document.querySelectorAll('.sidebar-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Extraire le nom du fichier du href
    const hrefFile = href.split('/').pop();

    // Comparer les noms de fichiers exactement
    if (hrefFile === curr) {
      link.classList.add('active');
    }
  });

  // Ouvrir automatiquement le groupe contenant le lien actif
  const active = document.querySelector('.sidebar-link.active');
  if (active) {
    const group = active.closest('.sidebar-group');
    if (group) {
      group.classList.add('is-open');
      const btn = group.querySelector('.sidebar-group-btn');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }
  }
}

// === TABS ===
function initTabs(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      const content = container.querySelector('#' + target);
      if (content) content.classList.add('active');
    });
  });
}

// === INIT GLOBALE ===
function globalInit() {
  initTheme();
  initSidebar();

  const modeBtn = document.getElementById('btnMode');
  if (modeBtn) modeBtn.addEventListener('click', toggleTheme);

  // Observer les changements de page pour mettre à jour le lien actif
  const observer = new MutationObserver(() => {
    markActiveLink();
  });

  // Observer toutes les modifications du DOM (pour les liens dynamiques)
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false
  });

  // Aussi mettre à jour quand on revient sur la page (popstate)
  window.addEventListener('popstate', markActiveLink);
}

// Démarrer au chargement du DOM
document.addEventListener('DOMContentLoaded', globalInit);
