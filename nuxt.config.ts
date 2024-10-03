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
    name: "Certified High-End Appliance Repair | Trusted Sub-Zero, Wolf, & Viking Appliance Repair in San Mateo, Palo Alto, and Surroundings in Bay area | Appliance Repair and Service Bay Area, CA",
    description:
      "Sub-Zero, Wolf, & Viking Appliance Repair and Service near Atherton, Belmont, Burlingame, Emerald, San Francisco, and nearby areas. From Sub-zero Refrigerators and Freezers to Viking Cooking Appliances, our skilled technicians provide fast, reliable repairs using original parts. Serving homes in Mountain View, Palo Alto, San Mateo, and more. Schedule your service today!",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },
  robots: {
    UserAgent: "*", // Applies to all user agents
    Disallow: "/admin", // Disallow access to admin pages
    Allow: "/", // Allow access to all other pages
  },
});
