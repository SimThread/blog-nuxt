const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'font-awesome/css/font-awesome.css',
    'jackblog-sass/dist/index.css',
    '~/assets/scss/index.css',
    'vue-toast/dist/vue-toast.min.css',
    '~/assets/styles/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/validators.js',
      ssr: true
    },
    {
      src: '~/plugins/filters.js',
      ssr: true
    },
    {
      src: '~/plugins/bootstrap.js',
      ssr: false
    }
  ],
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'home',
          path: '/',
          component: resolve(__dirname, 'pages/index.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: resolve(__dirname, 'pages/login/index.vue'),
          meta: {
            requiresNotAuth: true
          }
        },
        {
          path: '/settings',
          name: 'settings',
          component: resolve(__dirname, 'pages/settings/index.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/article/:aid',
          name: 'article',
          component: resolve(__dirname, 'pages/article/_aid.vue'),
          meta: {
            goTop: true
          }
        },
        {
          path: '/apps',
          name: 'apps',
          component: resolve(__dirname, 'pages/apps/index.vue')
        },
        {
          path: '*',
          component: resolve(__dirname, 'pages/not_found/index.vue')
        }
      )
    }
  },

  vendor: ['axios'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    NODE_ENV: process.env.NODE_ENV || 'dev'
  }
}
