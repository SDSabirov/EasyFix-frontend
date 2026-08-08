<template>
  <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
    <span class="ghost-word text-[6rem] lg:text-[11rem] top-6 -left-6" aria-hidden="true">Bay Area</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Header -->
      <div class="max-w-3xl mb-12 lg:mb-16" v-reveal>
        <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          Service Coverage
        </span>
        <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
          Appliance repair
          <em class="font-display font-semibold italic text-brass-dark">throughout the Bay&nbsp;Area</em>
        </h2>
        <p class="text-gray-600 leading-relaxed">
          Expert Sub-Zero, Wolf, Viking, and luxury appliance repair in San Mateo, Palo Alto, San Francisco,
          and surrounding Bay Area communities. Same-day service available.
        </p>
      </div>

      <!-- City pill cloud -->
      <div class="flex flex-wrap gap-3 mb-12" v-reveal>
        <NuxtLink
          v-for="city in cities"
          :key="city"
          :to="cityLink(city)"
          class="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-ink hover:text-white hover:border-ink hover:scale-[1.05] hover:shadow-lg hover:shadow-ink/15"
        >
          <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
          {{ city }}
        </NuxtLink>
      </div>

      <!-- Zip codes (collapsed by default) -->
      <details class="group mb-12 rounded-[1.25rem] border border-primary/10 bg-cream px-6 sm:px-8">
        <summary class="flex items-center justify-between py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
          <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-600">Service Zip Codes</span>
          <span class="flex items-center justify-center w-9 h-9 rounded-full border border-primary/15 bg-white transition-transform duration-300 group-open:rotate-180">
            <svg class="w-4 h-4 text-brass-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </summary>
        <div class="pb-6 flex flex-wrap gap-2">
          <span
            v-for="zip in uniqueZipCodes"
            :key="zip"
            class="font-mono text-xs text-gray-500 bg-white border border-primary/10 rounded-full px-3 py-1.5"
          >
            {{ zip }}
          </span>
        </div>
      </details>

      <!-- Quiet CTA -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" v-reveal>
        <p class="text-sm text-gray-500 max-w-xl leading-relaxed">
          Don&rsquo;t see your city or zip code listed? We serve many additional communities throughout
          the Bay Area &mdash; call to confirm availability in your location.
        </p>
        <div class="flex items-center gap-6">
          <a
            href="tel:4159414144"
            class="group inline-flex items-center gap-3 whitespace-nowrap font-montserrat text-[12px] font-semibold uppercase tracking-[0.18em] text-primary hover:text-brass-dark transition-colors"
          >
            Call Now
            <span class="flex items-center justify-center w-9 h-9 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&rarr;</span>
          </a>
          <NuxtLink
            to="/areas"
            class="group inline-flex items-center gap-3 whitespace-nowrap font-montserrat text-[12px] font-semibold uppercase tracking-[0.18em] text-primary hover:text-brass-dark transition-colors"
          >
            All Areas
            <span class="flex items-center justify-center w-9 h-9 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const zipCodes = [
  "94020", "94022", "94028", "94301", "94302", "94303", "94304", "94306", "95033", // Palo Alto
  "94010", // Hillsborough
  "94401", "94402", "94403", "94404", "94497", // San Mateo
  "94025", "94026", // Menlo Park
  "94027", "94061", "94062", // Woodside
  "94062", // Emerald Hills
  "94027", // Atherton
  "94023", "94024", // Los Altos
  "95030", "95032", // Los Gatos
  "944011", // Burlingame
  "95030", // Monte Sereno
  "94019", // Half Moon Bay
  "94063", "94064", "94065", // Redwood City
  "94039", "94040", "94041", "94042", "94043", "94085", // Mountain View
  "94086", "94087", "94089", // Sunnyvale
  "95070", "95071", // Saratoga
  "94002", // Belmont
  "94070", // San Carlos
  "94121", "94122", "94123", "94118", "94115", "94158", "94114", "94117", "94110", "941131", "94127" // San Francisco
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
  "Woodside"
];

const uniqueZipCodes = computed(() => [...new Set(zipCodes)]);

// Area pages use underscore slugs, e.g. /areas/palo_alto
const cityLink = (city) => `/areas/${city.toLowerCase().replace(/ /g, "_")}`;
</script>
