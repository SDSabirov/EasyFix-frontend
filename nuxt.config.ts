// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname),
    "~": resolve(__dirname),
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: ["~/assets/css/main.css",'~/assets/css/global.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    rollupOptions: {
      external: ["axios"], // Add axios here
    },
    postcss: {
      plugins: {
        'tailwindcss': {},
        'autoprefixer': {},
        'cssnano': { preset: 'default' }, // This minifies your CSS
      }
    }
  },
  buildModules: [
    '@nuxt/postcss8'
  ],


  modules: ["@nuxtjs/seo",'@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Montserrat: [100, 300, 400, 500, 700, 900],
      Roboto: [100, 300, 400, 500, 700, 900],
    },
    display: 'swap',
    preconnect: true, // Optimize by preconnecting to Google Fonts
  },
  site: {
    url: "https://easyfixappliance.com",
    name:'Easy Fix Appliance Bay Area, CA',
    description:'Certified Sub-Zero, Wolf & Viking appliance repair in San Mateo, Palo Alto & Bay Area. Fast, reliable service using original parts. Book your repair today!',
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },
  robots: {
    UserAgent: "*", // Applies to all user agents
    Disallow: "/admin", // Disallow access to admin pages
    Allow: "/", // Allow access to all other pages
  },
  
});
