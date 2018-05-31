module.exports = {
  head: {
    title: 'kriptomobile',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [

    ],
    script: [
      {defer: true, src: 'https://use.fontawesome.com/releases/v5.0.7/js/all.js'}
    ]
  },
  css: [
    '~/assets/styles.sass'
  ],
  plugins: ['~/plugins/components.js'],
  loading: {color: 'hsl(228, 26%, 27%)'},
  build: {
    extend(config, {isDev, isClient}) {
      const vueLoader = config.module.rules.find(({loader}) => loader === 'vue-loader');
      vueLoader.options.cssModules = {
        localIdentName: '[name]__[local]__[hash]'
      };

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  modules: ['nuxt-sass-resources-loader'],
  sassResources: [
    '@/assets/sass/utilities/_all.sass'
  ]
};
