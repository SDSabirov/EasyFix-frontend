<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <header class="grain glow-brass relative bg-ink pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
      <!-- Background map image -->
      <div class="absolute inset-0" aria-hidden="true">
        <img src="/assets/img/baymap.webp" alt="" class="w-full h-full object-cover opacity-15" loading="eager" decoding="async">
        <div class="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink"></div>
      </div>

      <span class="ghost-word ghost-word--light text-[6rem] lg:text-[11rem] top-24 -right-6" aria-hidden="true">Coverage</span>

      <!-- Hero Content -->
      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <Breadcrumb dark :custom-breadcrumbs="[{ name: 'Service Areas', path: '/areas' }]" />

          <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Bay Area Service Coverage
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
            Professional Appliance Repair
            <em class="block font-display font-semibold italic text-brass-light">Across the Bay&nbsp;Area</em>
          </h1>

          <p class="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
            Serving <strong class="text-white font-semibold">24 cities</strong> with fast, reliable appliance repair services.
            From <strong class="text-white font-semibold">San Francisco to Palo Alto</strong>, we're your trusted local experts.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <a
              href="tel:(415) 941-4144"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
            >
              Call Now: (415) 941-4144
            </a>

            <NuxtLink
              to="/booking"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation"
            >
              Schedule Online
            </NuxtLink>
          </div>

          <!-- Trust Indicators -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <div class="font-display font-semibold text-3xl text-white mb-1">24</div>
              <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-light">Cities Served</div>
            </div>
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <div class="font-display font-semibold text-3xl text-white mb-1">15+</div>
              <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-light">Years Experience</div>
            </div>
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <div class="font-display font-semibold text-3xl text-white mb-1">Same Day</div>
              <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-light">Fast Service</div>
            </div>
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <div class="font-display font-semibold text-3xl text-white mb-1">100%</div>
              <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-light">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Service Areas Section -->
    <section class="relative bg-cream py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 -left-8" aria-hidden="true">Cities</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <!-- Header -->
        <div class="text-center max-w-4xl mx-auto mb-12 lg:mb-16" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Our Service Locations
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
            We Serve Your
            <em class="font-display font-semibold italic text-brass-dark">Neighborhood</em>
          </h2>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional appliance repair services across the San Francisco Bay Area.
            Click on your city to learn more about our local services and get a free estimate.
          </p>
        </div>

        <!-- Cities Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 mb-16 lg:mb-20">
          <NuxtLink
            v-for="(city, cityIndex) in cities"
            :key="cityIndex"
            :to="`/areas/${replaceSpacesWithUnderscore(city.toLowerCase())}`"
            class="group flex items-center justify-between gap-4 bg-white rounded-[1.5rem] border border-primary/5 shadow-sm px-6 py-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
            v-reveal="(cityIndex % 4) * 90"
          >
            <div class="flex items-start gap-3 min-w-0">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              <div class="min-w-0">
                <h3 class="font-montserrat font-bold text-base text-primary group-hover:text-brass-dark transition-colors truncate">{{ city }}</h3>
                <p class="text-xs text-gray-500">Professional Service</p>
              </div>
            </div>
            <span
              class="flex items-center justify-center w-9 h-9 rounded-full border border-primary/15 text-primary shrink-0 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white"
              aria-hidden="true"
            >&#8599;</span>
          </NuxtLink>
        </div>

        <!-- Zip Codes Panel -->
        <div class="bg-white rounded-[2rem] border border-primary/5 shadow-sm p-8 lg:p-12" v-reveal>
          <div class="text-center mb-10">
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary mb-4">
              Find Your
              <em class="font-display font-semibold italic text-brass-dark">Zip Code</em>
            </h3>
            <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide professional appliance repair services in these zip code areas across the Bay Area
            </p>
          </div>

          <div class="flex flex-wrap justify-center gap-2">
            <span
              v-for="(zipCode, zipIndex) in zipCodes"
              :key="zipIndex"
              class="font-mono text-xs text-gray-500 bg-cream border border-primary/10 rounded-full px-3 py-1.5"
            >
              {{ zipCode }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-white py-20 lg:py-28">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="grain glow-brass relative bg-ink rounded-[2rem] px-6 py-14 sm:px-14 sm:py-16 text-center overflow-hidden" v-reveal>
          <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
          <div class="relative z-10">
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-4xl text-white leading-tight mb-6">
              Ready to Get Your Appliances
              <em class="font-display font-semibold italic text-brass-light">Fixed?</em>
            </h3>

            <p class="text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
              Don't see your city listed? We serve the entire Bay Area!
              Call us today to confirm service in your location and get a free estimate.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:(415) 941-4144"
                class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
              >
                Call for Service Area Confirmation
              </a>

              <NuxtLink
                to="/contact-us"
                class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation"
              >
                Get Free Estimate
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const replaceSpacesWithUnderscore = (str) => str.replace(/\s+/g, "_");

const zipCodes = [
  "94020",
  "94022",
  "94028",
  "94301",
  "94302",
  "94303",
  "94304",
  "94306",
  "95033", // Palo Alto
  "94010", // Hillsborough
  "94401",
  "94402",
  "94403",
  "94404",
  "94497", // San Mateo
  "94025",
  "94026", // Menlo Park
  "94027",
  "94061",
  "94062", // Woodside
  "94062", // Emerald Hills
  "94027", // Atherton
  "94023",
  "94024", // Los Altos
  "95030",
  "95032", // Los Gatos
  "944011", // Burlingame
  "95030", // Monte Sereno
  "94019", // Half Moon Bay
  "94063",
  "94064",
  "94065", // Redwood City
  "94039",
  "94040",
  "94041",
  "94042",
  "94043",
  "94085", // Mountain View
  "94086",
  "94087",
  "94089", // Sunnyvale
  "95070",
  "95071", // Saratoga
  "94002", // Belmont
  "94070", // San Carlos
  "94121",
  "94122",
  "94123",
  "94118",
  "94115",
  "94158",
  "94114",
  "94117",
  "94110",
  "941131",
  "94127", // San Francisco
];

const cities = [
  "Atherton",
  "Belmont",
  "Burlingame",
  "Emerald Hills",
  "Foster City",
  "Half Moon Bay",
  "Hillsborough",
  "Los Altos",
  "Los Altos Hills",
  "Los Gatos",
  "Menlo Park",
  "Millbrae",
  "Monte Sereno",
  "Mountain View",
  "Pacifica",
  "Palo Alto",
  "Portola Valley",
  "Redwood City",
  "San Carlos",
  "San Francisco",
  "San Mateo",
  "Saratoga",
  "Sunnyvale",
  "Woodside",
];

const screenWidth = ref(0); // Initialize with 0 to avoid SSR issues

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  // Ensure the code runs only on the client side
  screenWidth.value = window.innerWidth;
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});

const cityColumns = computed(() => {
  const numColumns =
    screenWidth.value < 640
      ? 1
      : screenWidth.value < 768
      ? 2
      : screenWidth.value < 1024
      ? 3
      : 4;
  const numCities = cities.length;
  const citiesPerColumn = Math.ceil(numCities / numColumns);
  const columnsArray = [];

  for (let i = 0; i < numColumns; i++) {
    columnsArray.push(cities.slice(i * citiesPerColumn, (i + 1) * citiesPerColumn));
  }

  return columnsArray;
});

const zipCodeColumns = computed(() => {
  const numColumns =
    screenWidth.value < 640
      ? 3
      : screenWidth.value < 768
      ? 4
      : screenWidth.value < 1024
      ? 5
      : 8;
  const numZipCodes = zipCodes.length;
  const zipCodesPerColumn = Math.ceil(numZipCodes / numColumns);
  const columnsArray = [];

  for (let i = 0; i < numColumns; i++) {
    columnsArray.push(zipCodes.slice(i * zipCodesPerColumn, (i + 1) * zipCodesPerColumn));
  }

  return columnsArray;
});

useHead({
  title: "Appliance Repairs Service | San Francisco | San Mateo | Palo Alto",
  meta: [
    {
      name: "description",
      content:
        "Get top-quality appliance repair services nearby in cities like San Francisco, Burlingame, Palo Alto, Hayward, Millbrae, and South San Francisco.",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Easy Fix Appliance",
        "description":
          "Fast, reliable appliance repairs in San Francisco, Palo Alto, and the Bay Area.",
        "areaServed": [
          { "@type": "Place", "name": "Atherton", "postalCode": "94027" },
          { "@type": "Place", "name": "Belmont", "postalCode": "94002" },
          { "@type": "Place", "name": "Burlingame", "postalCode": "94401" },
          { "@type": "Place", "name": "Emerald Hills", "postalCode": "94062" },
          { "@type": "Place", "name": "Foster City", "postalCode": "94404" },
          { "@type": "Place", "name": "Half Moon Bay", "postalCode": "94019" },
          { "@type": "Place", "name": "Hillsborough", "postalCode": "94010" },
          { "@type": "Place", "name": "Los Altos", "postalCode": "94022" },
          { "@type": "Place", "name": "Los Altos Hills", "postalCode": "94024" },
          { "@type": "Place", "name": "Los Gatos", "postalCode": "95032" },
          { "@type": "Place", "name": "Menlo Park", "postalCode": "94025" },
          { "@type": "Place", "name": "Millbrae", "postalCode": "94030" },
          { "@type": "Place", "name": "Monte Sereno", "postalCode": "95030" },
          { "@type": "Place", "name": "Mountain View", "postalCode": "94040" },
          { "@type": "Place", "name": "Pacifica", "postalCode": "94044" },
          { "@type": "Place", "name": "Palo Alto", "postalCode": "94301" },
          { "@type": "Place", "name": "Portola Valley", "postalCode": "94028" },
          { "@type": "Place", "name": "Redwood City", "postalCode": "94063" },
          { "@type": "Place", "name": "San Carlos", "postalCode": "94070" },
          { "@type": "Place", "name": "San Francisco", "postalCode": "94115" },
          { "@type": "Place", "name": "San Mateo", "postalCode": "94401" },
          { "@type": "Place", "name": "Saratoga", "postalCode": "95070" },
          { "@type": "Place", "name": "Sunnyvale", "postalCode": "94087" },
          { "@type": "Place", "name": "Woodside", "postalCode": "94062" },
        ],
        "provider": {
          "@type": "LocalBusiness",
          "name": "EZ Fix Service",
          "telephone": "+1 (415) 941-4144",
          "url": "https://easyfixappliance.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "303 Twin Dolphin Drive",
            "addressLocality": "Redwood City",
            "addressRegion": "CA",
            "postalCode": "94065",
            "addressCountry": "US",
          },
          "sameAs": [
            "https://www.instagram.com/easyfixappliance/",
            "https://www.facebook.com/profile.php?id=61570244923151"
          ],
        },
      }),
    },
  ],
});

</script>
