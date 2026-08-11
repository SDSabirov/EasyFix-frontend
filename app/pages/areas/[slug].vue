<template>
  <div class="relative">
    <Navbar />

    <!-- Hero Section -->
    <header class="grain glow-brass relative bg-ink pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
      <span class="ghost-word ghost-word--light text-[6rem] lg:text-[11rem] top-24 -right-6" aria-hidden="true">Local</span>

      <!-- Hero Content -->
      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <Breadcrumb
            dark
            :custom-breadcrumbs="[
              { name: 'Service Areas', path: '/areas' },
              { name: pageTitle, path: `/areas/${route.params.slug}` }
            ]"
          />

          <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Local Service Area
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6 capitalize">
            Expert Appliance Repair in
            <em class="block font-display font-semibold italic text-brass-light">{{ pageTitle }}</em>
          </h1>

          <p class="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
            Fast, reliable appliance repair services in {{ pageTitle }}.
            <strong class="text-white font-semibold">Same-day service available</strong> for all major appliance brands.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <a
              href="tel:4159414144"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
            >
              Call Now: (415) 941-4144
            </a>

            <NuxtLink
              to="/booking"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation"
            >
              Schedule Service in {{ pageTitle }}
            </NuxtLink>
          </div>

          <!-- Service Guarantees -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <div class="font-display font-semibold text-3xl text-white mb-1">Same-Day</div>
              <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-light">Service Available</div>
            </div>
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <div class="font-display font-semibold text-3xl text-white mb-1">90-Day</div>
              <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-light">Warranty Included</div>
            </div>
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <div class="font-display font-semibold text-3xl text-white mb-1">100%</div>
              <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-light">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Content Section -->
    <section class="relative bg-cream py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[6rem] lg:text-[11rem] -top-2 -left-8" aria-hidden="true">Trusted</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <!-- Introduction -->
        <div class="text-center max-w-4xl mx-auto mb-14 lg:mb-16" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Professional Service in {{ pageTitle }}
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] capitalize">
            Why Choose Easy Fix Appliance in
            <em class="font-display font-semibold italic text-brass-dark">{{ pageTitle }}?</em>
          </h2>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <!-- Left Column - Content -->
          <div class="space-y-5">
            <div class="group bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5" v-reveal>
              <div class="flex items-start gap-5">
                <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream shrink-0 transition-colors duration-300 group-hover:bg-brass/15">
                  <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </span>
                <div>
                  <h3 class="font-montserrat font-bold text-lg text-primary mb-2">Expert Technicians</h3>
                  <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                    At Easy Fix Appliance, we pride ourselves on delivering top-tier appliance repair services in {{ pageTitle }}. Our team of expert technicians is equipped to handle all major appliance issues with professional expertise.
                  </p>
                </div>
              </div>
            </div>

            <div class="group bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5" v-reveal="90">
              <div class="flex items-start gap-5">
                <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream shrink-0 transition-colors duration-300 group-hover:bg-brass/15">
                  <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </span>
                <div>
                  <h3 class="font-montserrat font-bold text-lg text-primary mb-2">Local {{ pageTitle }} Service</h3>
                  <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                    With years of experience serving the {{ pageTitle }} area, we've built a reputation for reliability, professionalism, and exceptional customer service. We understand the unique needs of {{ pageTitle }} residents.
                  </p>
                </div>
              </div>
            </div>

            <div class="group bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5" v-reveal="180">
              <div class="flex items-start gap-5">
                <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream shrink-0 transition-colors duration-300 group-hover:bg-brass/15">
                  <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
                <div>
                  <h3 class="font-montserrat font-bold text-lg text-primary mb-2">Genuine Parts & Tools</h3>
                  <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Our team uses genuine manufacturer parts and advanced diagnostic tools to ensure lasting repairs for all major appliance brands. Whether emergency repairs or routine maintenance, we're your trusted partner.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Services -->
          <div class="grain glow-brass relative bg-ink rounded-[2rem] p-8 lg:p-10 overflow-hidden" v-reveal="150">
            <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
            <div class="relative z-10">
              <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-white mb-8">
                Appliances We Repair in
                <em class="font-display font-semibold italic text-brass-light">{{ pageTitle }}</em>
              </h3>

              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <li class="flex items-start gap-3 border-b border-white/10 pb-4">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h4 class="font-montserrat font-bold text-base text-white">Refrigerators</h4>
                    <p class="text-sm text-white/50">All brands &amp; models</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 border-b border-white/10 pb-4">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h4 class="font-montserrat font-bold text-base text-white">Stoves &amp; Ovens</h4>
                    <p class="text-sm text-white/50">Gas &amp; electric</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 border-b border-white/10 pb-4">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h4 class="font-montserrat font-bold text-base text-white">Cooktops</h4>
                    <p class="text-sm text-white/50">Induction &amp; ceramic</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 border-b border-white/10 pb-4">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h4 class="font-montserrat font-bold text-base text-white">Dishwashers</h4>
                    <p class="text-sm text-white/50">Built-in &amp; portable</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 border-b border-white/10 pb-4">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h4 class="font-montserrat font-bold text-base text-white">Wine Coolers</h4>
                    <p class="text-sm text-white/50">Temperature controlled</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 border-b border-white/10 pb-4">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h4 class="font-montserrat font-bold text-base text-white">Ice Makers</h4>
                    <p class="text-sm text-white/50">Built-in &amp; standalone</p>
                  </div>
                </li>
              </ul>

              <div class="text-center mt-10">
                <a
                  href="tel:4159414144"
                  class="inline-flex items-center justify-center min-h-[52px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
                >
                  Call for {{ pageTitle }} Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[6rem] lg:text-[11rem] -top-4 -right-6" aria-hidden="true">Nearby</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-12" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Service Coverage Map
          </span>

          <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-4xl text-primary mb-6 capitalize">
            Find Us in
            <em class="font-display font-semibold italic text-brass-dark">{{ pageTitle }}</em>
          </h3>

          <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
            Easy Fix Appliance proudly serves {{ pageTitle }} and surrounding areas with professional appliance repair services
          </p>
        </div>

        <div class="rounded-[2rem] overflow-hidden border border-primary/10 shadow-sm bg-cream" style="height: 500px;" v-reveal>
          <LocationsGoogleMap v-model="location" />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const capitalize = (str) => {
  if (!str) return ""; // Handle empty strings
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
};
const replaceUnderscoreWithSpaces = (str) => str.replace(/_/g, " ");
const serviceAreas = {
  atherton: { lat: 37.4613, lng: -122.1977 },
  belmont: { lat: 37.5202, lng: -122.2758 },
  burlingame: { lat: 37.5841, lng: -122.3661 },
  emerald_hills: { lat: 37.4716, lng: -122.262 },
  foster_city: { lat: 37.553, lng: -122.2658 },
  half_moon_bay: { lat: 37.4636, lng: -122.4286 },
  hillsborough: { lat: 37.5523, lng: -122.379 },
  los_altos: { lat: 37.3852, lng: -122.1141 },
  los_altos_hills: { lat: 37.3797, lng: -122.1374 },
  los_gatos: { lat: 37.2266, lng: -121.9747 },
  menlo_park: { lat: 37.4529, lng: -122.1822 },
  millbrae: { lat: 37.5985, lng: -122.3872 },
  monte_sereno: { lat: 37.2364, lng: -121.9916 },
  mountain_view: { lat: 37.3861, lng: -122.0838 },
  pacifica: { lat: 37.6138, lng: -122.4869 },
  palo_alto: { lat: 37.4419, lng: -122.143 },
  portola_valley: { lat: 37.3841, lng: -122.2355 },
  redwood_city: { lat: 37.4852, lng: -122.2364 },
  san_carlos: { lat: 37.5072, lng: -122.2605 },
  san_francisco: { lat: 37.7749, lng: -122.4194 },
  san_mateo: { lat: 37.5629, lng: -122.3255 },
  saratoga: { lat: 37.2638, lng: -122.023 },
  sunnyvale: { lat: 37.3688, lng: -122.0363 },
  woodside: { lat: 37.4299, lng: -122.2539 },
};

const route = useRoute();
const pageTitle = capitalize(replaceUnderscoreWithSpaces(route.params.slug));
const location = ref(serviceAreas[route.params.slug] || serviceAreas.atherton);

useHead(() => ({
  title: `Appliance Repair in ${pageTitle || "Atherton"}, CA | Easy Fix Appliance`,
  meta: [
    {
      name: "description",
      content: `Certified Sub-Zero, Wolf, Viking & Thermador appliance repair in ${pageTitle || "Atherton"}, CA. Same-day service, genuine OEM parts, factory-trained local technicians. Call (415) 941-4144.`,
    },
    {
      property: "og:title",
      content: `Appliance Repair in ${pageTitle || "Atherton"}, CA | Easy Fix Appliance`,
    },
    {
      property: "og:description",
      content: `Same-day luxury appliance repair in ${pageTitle || "Atherton"} with genuine OEM parts and factory-trained technicians.`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Appliance Repair",
        name: `Appliance Repair in ${pageTitle}`,
        url: `https://easyfixappliance.com/areas/${route.params.slug}`,
        areaServed: {
          "@type": "Place",
          name: `${pageTitle}, CA`,
          geo: {
            "@type": "GeoCoordinates",
            latitude: location.value.lat,
            longitude: location.value.lng,
          },
        },
        provider: {
          "@type": "LocalBusiness",
          name: "Easy Fix Appliance",
          telephone: "+1-415-941-4144",
          url: "https://easyfixappliance.com",
        },
      }),
    },
  ],
}));
watch(
  () => route.params.slug,
  (newSlug) => {
    location.value = serviceAreas[newSlug] || serviceAreas.atherton;
  }
);
</script>
