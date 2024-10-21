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
  css: ["~/assets/css/main.css"],

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
  },

  modules: ["@nuxtjs/seo"],

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
  head: {
    script: [
      {
        id: 'housecall-pro-chat-bubble',
        src: 'https://chat.housecallpro.com/proChat.js',
        type: 'text/javascript',
        defer: true, // Ensures script is executed after page load
        'data-color': '#0E6FBE', // Custom data attributes
        'data-organization': 'c473d1ee-641c-46a0-9caf-2b6a9168cc50', // Custom data attributes
      },
    ],
  },
});
