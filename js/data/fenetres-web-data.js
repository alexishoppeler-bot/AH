'use strict';

window.FENETRES_WEB_DATA = {
  pageId: 'fenetres-web',
  name: 'Gestion des fenetres internet',
  windows: {
    browser: { title: 'Google Chrome', icon: '🌐', tabs: ['Google', 'YouTube', 'Gmail'] },
    email: { title: 'Messagerie', icon: '📧', tabs: ['Inbox', 'Important'] },
    ad: { title: 'Publicite', icon: '📢', tabs: ['Offre speciale'] }
  },
  tasks: [
    {
      instruction: 'Ouvre la fenetre Google Chrome.',
      expected: { type: 'open', target: 'browser' },
      state: { open: [], minimized: [], maximized: [], activeTab: 'Google', adOpen: false }
    },
    {
      instruction: 'Agrandis la fenetre Google Chrome.',
      expected: { type: 'maximize', target: 'browser' },
      state: { open: ['browser'], minimized: [], maximized: [], activeTab: 'Google', adOpen: false }
    },
    {
      instruction: 'Reduis Google Chrome dans la barre des taches.',
      expected: { type: 'minimize', target: 'browser' },
      state: { open: ['browser'], minimized: [], maximized: ['browser'], activeTab: 'Google', adOpen: false }
    },
    {
      instruction: 'Restaure Google Chrome depuis la barre des taches.',
      expected: { type: 'restore', target: 'browser' },
      state: { open: ['browser'], minimized: ['browser'], maximized: [], activeTab: 'Google', adOpen: false }
    },
    {
      instruction: 'Clique sur l onglet Gmail dans Chrome.',
      expected: { type: 'switch-tab', target: 'browser', value: 'Gmail' },
      state: { open: ['browser'], minimized: [], maximized: [], activeTab: 'Google', adOpen: false }
    },
    {
      instruction: 'Une publicite apparait: ferme la fenetre publicitaire.',
      expected: { type: 'close-ad', target: 'ad' },
      state: { open: ['browser', 'ad'], minimized: [], maximized: [], activeTab: 'Gmail', adOpen: true }
    },
    {
      instruction: 'Ouvre la fenetre Messagerie.',
      expected: { type: 'open', target: 'email' },
      state: { open: ['browser'], minimized: [], maximized: [], activeTab: 'Gmail', adOpen: false }
    },
    {
      instruction: 'Clique dans la fenetre Messagerie pour la mettre au premier plan.',
      expected: { type: 'focus', target: 'email' },
      state: { open: ['browser', 'email'], minimized: [], maximized: [], activeTab: 'Gmail', adOpen: false }
    },
    {
      instruction: 'Ferme la fenetre Messagerie.',
      expected: { type: 'close', target: 'email' },
      state: { open: ['browser', 'email'], minimized: [], maximized: [], activeTab: 'Gmail', adOpen: false }
    },
    {
      instruction: 'Ferme Google Chrome.',
      expected: { type: 'close', target: 'browser' },
      state: { open: ['browser'], minimized: [], maximized: [], activeTab: 'Gmail', adOpen: false }
    }
  ]
};
