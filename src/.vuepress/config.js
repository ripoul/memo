module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
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
      { text: 'Home', link: '/' },
      { text: 'Developpement', link: '/development/' },
      { text: 'Cuisine', link: '/cuisine/' }
    ],
    sidebar: {
      '/development/': [
        '',
        'autre'
      ],
      '/cuisine/': [
        ''
      ],
    }
  }
}