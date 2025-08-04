// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
import { applianceData } from "./data/appliance_data";

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
  css: ["~/assets/css/main.css", "~/assets/css/global.css"],

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
        tailwindcss: {},
        autoprefixer: {},
        cssnano: { preset: "default" }, // This minifies your CSS
      },
    },
  },
  buildModules: ["@nuxt/postcss8"],

  modules: [
    ["@nuxtjs/seo", {
      schemaOrg: {
        enabled: false
      }
    }],
    "@nuxtjs/google-fonts",
    "nuxt-lazy-load",
    "@nuxt/content",
  ],
  googleFonts: {
    families: {
      Montserrat: [100, 300, 400, 500, 700, 900],
      Roboto: [100, 300, 400, 500, 700, 900],
    },
    display: "swap",
    preload: true, 
    preconnect: true, // Optimize by preconnecting to Google Fonts
    inject:true
  },
  site: {
    url: "https://easyfixappliance.com",
    name: "Easy Fix Appliance Bay Area, California",
    
    description:
      "Certified Sub-Zero, Wolf, and Viking appliance repair specialists serving San Mateo, Palo Alto, and the Bay Area. Expert appliance repair services including refrigerator repair for brands like Thermador, KitchenAid, and more. Fast, reliable service using original parts. Book your repair today!",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },
  robots: {
    UserAgent: "*", // Applies to all user agents
    Disallow: "/admin", // Disallow access to admin pages
    Allow: "/", // Allow access to all other pages
  },
  vite: {
    optimizeDeps: {
      include: ['fast-deep-equal'],
    },
  },
  runtimeConfig: {
    public: {
      mapsApiKey: process.env.MAPS_API, // Define your public environment variable
    },
  },

  
  
});
