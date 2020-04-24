module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
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