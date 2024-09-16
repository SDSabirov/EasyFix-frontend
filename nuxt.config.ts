// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  alias: {
    '@': resolve(__dirname),
    '~': resolve(__dirname),
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/seo'],
  site: {
    url: 'https://example.com',
    name: 'Easy Fix Appliance',
    description: 'Appliance service and repair near Bay area',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  robots: {
    UserAgent: '*', // Applies to all user agents
    Disallow: '/admin', // Disallow access to admin pages
    Allow: '/' // Allow access to all other pages
  }
})