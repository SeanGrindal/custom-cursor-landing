export default {
  ssr: true,
  target: 'static',
  router: {
    base: '/custom-cursor-landing/'
  },
  components: true,
  head: {
    title: 'Custom Cursor JS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { title: 'Custom Cursor JS' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `custom-cursor.js a libaray that enables the creation and
			customization of javascript based cursors. Makes custom cursors easy.` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=block' },
    ]
  },
  modules: [
    '@nuxtjs/style-resources', 
  ],
  styleResources: {
    scss: [ 
      '~/assets/styles/tools/_functions.scss',
      '~/assets/styles/tools/_utils.scss',
      '~/assets/styles/settings/_config.template.scss',
      '~/assets/styles/settings/_config.custom.scss',
    ]
  }, 
  css: [
    { src: '~/assets/styles/main.scss', lang: 'scss' }
  ],
}
