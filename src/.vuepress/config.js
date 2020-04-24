module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "icons/logo128.png"}],
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