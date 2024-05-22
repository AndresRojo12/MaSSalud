// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify", "vuejs3-datepicker"],
  },
  generate: {
    dir: 'dist'
  },
  pinia: {
    stores: [
      {name: 'auth', path: '~/store/auth.js'},
    ],
    // autoImports: [
    //   // automatically imports `defineStore`
    //   'defineStore', // import { defineStore } from 'pinia'
    //   ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    // ],
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_BASE_URL || 'https://massalud.onrender.com/api/v1'
    }
  }
});
