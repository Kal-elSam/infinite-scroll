// nuxt.config.js

// eslint-disable-next-line import/no-extraneous-dependencies
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  plugins: ['~/plugins/fontawesome.js'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Infinite-scroll',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Mi aplicación Nuxt',
        },
      ],
    },
  },
})
