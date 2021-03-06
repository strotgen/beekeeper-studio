// .vuepress/config.js
module.exports = {
  title: 'Beekeeper Studio',
  description: 'Documentation & Support for Beekeeper Studio, the cross-platform SQL editor and database manager.',
  themeConfig: {
    logo: '/bk-logo-yellow-icon.svg',
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Installation', link: '/installation/' },
      { text: 'User Guide', link: '/guide/' },
      { text: 'Homepage', link: 'https://www.beekeeperstudio.io' }
    ],
    sidebar: [
      ['/', 'Overview'],
      '/installation/',
      '/guide/'
    ]
  }
}
