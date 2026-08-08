<template>
    <div class="pb-[72px] lg:pb-0">
        <Navbar />
        <main role="main">
            <LandingHero />
            <LandingServices />
            <LazyLandingApplianceTypes2 hydrate-on-visible />
            <LazyLandingStats hydrate-on-visible />
            <LazyLandingPrices hydrate-on-visible />

            <!-- Repair vs Replace Calculator teaser -->
            <section class="relative py-20 lg:py-28 bg-white overflow-hidden">
              <span class="ghost-word text-[7rem] lg:text-[12rem] top-4 -left-8" aria-hidden="true">Tools</span>
              <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  <div class="lg:col-span-5" v-reveal>
                    <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
                      <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
                      Free Tool
                    </span>
                    <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
                      Repair or replace?
                      <em class="block font-display font-semibold italic text-brass-dark">Run the math.</em>
                    </h2>
                    <p class="text-gray-600 mb-8 leading-relaxed">
                      Skip the guesswork. Plug in your repair quote and a few appliance details — we'll show you cost per year,
                      break-even, and the smarter long-term choice.
                    </p>
                    <ul class="space-y-3 mb-10">
                      <li class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                        <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                        Built on the 50% rule used by appliance pros
                      </li>
                      <li class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                        <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                        5-year cost projection &amp; break-even years
                      </li>
                      <li class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                        <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                        Free, no signup, takes about 30 seconds
                      </li>
                    </ul>
                    <NuxtLink
                      to="/tools/repair-vs-replace"
                      class="group inline-flex items-center gap-3 min-h-[52px] px-9 py-4 rounded-full bg-ink text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
                    >
                      Try the Calculator
                      <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    </NuxtLink>
                  </div>

                  <div class="lg:col-span-7" v-reveal="150">
                    <div class="bg-cream border border-primary/10 rounded-[2rem] p-7 sm:p-10 lg:-rotate-1 shadow-xl shadow-ink/5 transition-transform duration-500 hover:rotate-0">
                      <div class="flex items-center justify-between mb-8">
                        <span class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-500">Sample Result</span>
                        <span class="font-montserrat text-[10px] font-bold uppercase tracking-[0.18em] text-brass-dark border border-brass/40 px-2.5 py-1">Repair Wins</span>
                      </div>

                      <h3 class="font-display font-semibold text-2xl sm:text-3xl text-primary mb-2">Repair is the better value</h3>
                      <p class="text-sm text-gray-600 mb-8">$94/yr vs $67/yr — for a 5-year-old Sub-Zero with a $300 repair.</p>

                      <div class="space-y-5 mb-8">
                        <div>
                          <div class="flex items-baseline justify-between mb-2">
                            <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Repair</span>
                            <span class="font-display font-semibold text-lg text-primary">$94/yr</span>
                          </div>
                          <div class="h-1 bg-primary/10 overflow-hidden">
                            <div class="h-full bg-primary" style="width: 100%"></div>
                          </div>
                        </div>
                        <div>
                          <div class="flex items-baseline justify-between mb-2">
                            <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Replace</span>
                            <span class="font-display font-semibold text-lg text-brass-dark">$67/yr</span>
                          </div>
                          <div class="h-1 bg-primary/10 overflow-hidden">
                            <div class="h-full bg-brass" style="width: 71%"></div>
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-3 border-t border-primary/10 pt-6">
                        <div>
                          <div class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-1">Rule</div>
                          <div class="font-display font-semibold text-xl text-primary">25%</div>
                        </div>
                        <div class="border-l border-primary/10 pl-6">
                          <div class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-1">Break-even</div>
                          <div class="font-display font-semibold text-xl text-primary">6.3 yrs</div>
                        </div>
                        <div class="border-l border-primary/10 pl-6">
                          <div class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-1">5-yr diff</div>
                          <div class="font-display font-semibold text-xl text-primary">$135</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <LazyLandingLocations hydrate-on-visible />

            <LazyLandingBlogs hydrate-on-visible />
            <LazyLandingTestimonials hydrate-on-visible />
            <LazyLandingContacts hydrate-on-visible />
        </main>
        <Footer />

        <!-- Sticky Mobile CTA Bar -->
        <Transition name="slide-up">
          <div
            v-if="showStickyCta"
            class="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
            :style="{ paddingBottom: 'env(safe-area-inset-bottom)' }"
          >
            <div class="flex gap-3 px-4 py-3">
              <a
                href="tel:4159414144"
                class="flex-1 inline-flex items-center justify-center min-h-[48px] px-4 py-3 bg-ink text-white font-montserrat font-semibold uppercase tracking-[0.12em] transition-transform active:scale-[0.97] touch-manipulation text-xs"
              >
                <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Now
              </a>
              <NuxtLink
                to="/booking"
                class="flex-1 inline-flex items-center justify-center min-h-[48px] px-4 py-3 border border-ink text-ink font-montserrat font-semibold uppercase tracking-[0.12em] transition-transform active:scale-[0.97] touch-manipulation text-xs"
              >
                Book Online
              </NuxtLink>
            </div>
          </div>
        </Transition>
    </div>

</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

// Sticky mobile CTA bar
const showStickyCta = ref(false)

const handleScroll = () => {
  showStickyCta.value = window.scrollY > window.innerHeight * 0.75
}


// LocalBusiness structured data is emitted site-wide via schemaOrg.identity
// in nuxt.config.ts (nuxt-schema-org).

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

definePageMeta({
  title: 'Expert Sub-Zero, Wolf & Viking Appliance Repair Services | San Mateo Bay Area',
})

// Add structured data to head
useHead({
  title: 'Expert Sub-Zero, Wolf & Viking Appliance Repair Services | San Mateo Bay Area',
  meta: [
    {
      name: 'description',
      content: 'Professional appliance repair services for Sub-Zero, Wolf, Viking, Thermador & luxury brands in San Mateo, Palo Alto, San Francisco. Certified technicians, same-day service. Call (415) 941-4144'
    },
    {
      name: 'keywords', 
      content: 'appliance repair, Sub-Zero repair, Wolf repair, Viking repair, Thermador repair, San Mateo, Palo Alto, Bay Area, refrigerator repair, oven repair'
    },
    {
      property: 'og:title',
      content: 'Expert Sub-Zero, Wolf & Viking Appliance Repair Services | San Mateo Bay Area'
    },
    {
      property: 'og:description',
      content: 'Professional appliance repair services for luxury brands in Bay Area. Certified technicians, same-day service available.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>