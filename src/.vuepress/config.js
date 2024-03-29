module.exports = {
  title: 'Memo',
  description: 'Some memo and tips',
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    'reading-progress',
    '@vuepress/last-updated',
    ['vuepress-plugin-code-copy', true],
  ],
  head: [
    ['link', { rel: 'icon', href: '/icons/logo128.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/logo128.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/logo128.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/logo128.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Développement', link: '/development/' },
      { text: 'Cuisine', link: '/cuisine/' }
    ],
    sidebar: {
      '/development/': [
        '',
        'postgres',
        'vim',
        'git',
        'log',
      ],
      '/cuisine/': [
        '',
        'pancakes',
        'cookies',
        'rochers_coco',
        'verrine_pomme',
        'pate_sablee',
        'madeleines',
        'gaufres',
        'gateau_au_yaourt',
        'gateau_aux_blancs',
        'crepe',
        'creme_anglaise',
        'bottereaux',
        'risotto',
        'sauce_bearnaise',
        'gateau_au_chocolat',
        'galette_des_rois',
        'blanquette'
      ],
    }
  }
}