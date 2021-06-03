export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Peliculas Demo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Este es un demo que lista y permite buscar películas obtenidas de la api http://www.omdbapi.com/',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@mdi/font/css/materialdesignicons.min.css', '~/assets/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/theme'],
  env: {
    OMDB_API_KEY: '4812f0e1',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components/UI', '~/components/Movies'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://www.omdbapi.com/',
  },

  // Make Global the Sass Variables global
  styleResources: {
    scss: ['~/assets/variables.scss'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  extend(config, { loaders }) {
    loaders.scss.additionalData = '@use "sass:math";'
  },
}
