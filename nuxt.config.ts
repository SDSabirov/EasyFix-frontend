// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-08-01",
  devtools: { enabled: true },

  nitro: {
    preset: process.env.NITRO_PRESET || "cloudflare-pages",
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "author", content: "Easy Fix Appliance" },
        { name: "robots", content: "index, follow" },
        { property: "og:image", content: "https://easyfixappliance.com/og-image.jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:image", content: "https://easyfixappliance.com/og-image.jpg" },
      ],
    },
  },

  css: ["~/assets/css/main.css", "~/assets/css/global.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/seo", "@nuxtjs/google-fonts"],

  googleFonts: {
    // Only weights the site actually uses (font-medium/semibold/bold + body).
    // 600 was previously missing entirely despite 200+ font-semibold usages.
    families: {
      Montserrat: [400, 500, 600, 700],
      Roboto: [400, 500, 600, 700],
      "Cormorant Garamond": [500, 600],
    },
    display: "swap",
    preload: true,
    preconnect: true,
    inject: true,
  },

  site: {
    url: "https://easyfixappliance.com",
    name: "Easy Fix Appliance Bay Area, California",
    description:
      "Certified Sub-Zero, Wolf, and Viking appliance repair specialists serving San Mateo, Palo Alto, and the Bay Area. Expert appliance repair services including refrigerator repair for brands like Thermador, KitchenAid, and more. Fast, reliable service using original parts. Book your repair today!",
    defaultLocale: "en",
  },

  robots: {
    disallow: ["/admin"],
  },

  // Site-wide LocalBusiness identity rendered on every page (nuxt-schema-org).
  schemaOrg: {
    identity: {
      type: "LocalBusiness",
      name: "Easy Fix Appliance",
      description:
        "Certified Sub-Zero, Wolf, Viking, Thermador and luxury appliance repair specialists serving San Mateo, Palo Alto, San Francisco and the Bay Area.",
      url: "https://easyfixappliance.com",
      logo: "https://easyfixappliance.com/logo.svg",
      image: "https://easyfixappliance.com/og-image.jpg",
      telephone: "+1-415-941-4144",
      email: "care@easyfixappliance.com",
      address: {
        addressLocality: "San Mateo",
        addressRegion: "CA",
        addressCountry: "US",
      },
      areaServed: [
        "San Mateo",
        "Palo Alto",
        "San Francisco",
        "San Jose",
        "Redwood City",
        "Menlo Park",
        "Atherton",
        "Hillsborough",
        "Bay Area",
      ],
      priceRange: "$$",
      openingHours: ["Mo-Su 08:00-20:00"],
      sameAs: [
        "https://www.instagram.com/easyfixappliance/",
        "https://www.facebook.com/profile.php?id=61570244923151",
      ],
    },
  },

  // OG images are static assets on this site; the runtime satori/resvg renderer
  // would bloat the Cloudflare Pages worker.
  ogImage: { enabled: false },

  sitemap: {
    sources: ["/api/__sitemap__/blogs"],
  },

  runtimeConfig: {
    public: {
      mapsApiKey: process.env.MAPS_API,
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api",
    },
  },
});
