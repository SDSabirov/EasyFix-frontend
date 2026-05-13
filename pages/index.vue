<template>
    <div class="pb-[72px] lg:pb-0">
        <Navbar />
        <main role="main">
            <LandingHero />
            <LandingServices />
            <LandingApplianceTypes2/>
            <LandingStats />
            <LandingPrices />

            <!-- Repair vs Replace Calculator teaser -->
            <section class="py-16 lg:py-24 bg-gradient-to-br from-light/40 via-white to-secondary/5 font-montserrat">
              <div class="container mx-auto px-4 max-w-screen-xl">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  <div class="lg:col-span-5">
                    <div class="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-5">
                      <svg class="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                      <span class="text-primary font-semibold text-sm">Free Tool</span>
                    </div>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
                      Repair or replace?
                      <span class="block text-secondary">Run the math.</span>
                    </h2>
                    <p class="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                      Skip the guesswork. Plug in your repair quote and a few appliance details — we'll show you cost per year,
                      break-even, and the smarter long-term choice.
                    </p>
                    <ul class="space-y-2 mb-8 text-gray-700">
                      <li class="flex items-center">
                        <svg class="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span class="text-sm sm:text-base">Built on the 50% rule used by appliance pros</span>
                      </li>
                      <li class="flex items-center">
                        <svg class="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span class="text-sm sm:text-base">5-year cost projection &amp; break-even years</span>
                      </li>
                      <li class="flex items-center">
                        <svg class="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span class="text-sm sm:text-base">Free, no signup, takes about 30 seconds</span>
                      </li>
                    </ul>
                    <NuxtLink
                      to="/tools/repair-vs-replace"
                      class="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer min-h-[52px] focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                    >
                      Try the calculator
                      <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </NuxtLink>
                  </div>

                  <div class="lg:col-span-7">
                    <div class="relative">
                      <!-- decorative glow -->
                      <div class="absolute -inset-4 bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent rounded-3xl blur-2xl"></div>
                      <div class="relative bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-6 sm:p-8">
                        <div class="flex items-center justify-between mb-6">
                          <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Sample result</span>
                          <span class="inline-flex items-center px-2.5 py-1 bg-emerald-50 ring-1 ring-emerald-200 rounded-full">
                            <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></span>
                            <span class="text-xs font-semibold text-emerald-700">Repair wins</span>
                          </span>
                        </div>

                        <div class="flex items-start gap-4 mb-6">
                          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <svg class="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766m-2.587 4.254L4.5 19.5l2.5-2.5 2.587-2.587"/>
                            </svg>
                          </div>
                          <div>
                            <h3 class="text-lg sm:text-xl font-bold text-primary mb-1">Repair is the better value</h3>
                            <p class="text-sm text-gray-600">$94/yr vs $67/yr — for a 5-year-old Sub-Zero with a $300 repair.</p>
                          </div>
                        </div>

                        <div class="space-y-4 mb-6">
                          <div>
                            <div class="flex items-baseline justify-between mb-1.5">
                              <span class="text-sm font-medium text-gray-700">Repair</span>
                              <span class="text-sm font-bold text-primary">$94/yr</span>
                            </div>
                            <div class="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                              <div class="h-full bg-gradient-to-r from-primary to-secondary rounded-full" style="width: 100%"></div>
                            </div>
                          </div>
                          <div>
                            <div class="flex items-baseline justify-between mb-1.5">
                              <span class="text-sm font-medium text-gray-700">Replace</span>
                              <span class="text-sm font-bold text-secondary">$67/yr</span>
                            </div>
                            <div class="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                              <div class="h-full bg-gradient-to-r from-secondary to-primary rounded-full" style="width: 71%"></div>
                            </div>
                          </div>
                        </div>

                        <div class="grid grid-cols-3 gap-3">
                          <div class="bg-gray-50 rounded-xl p-3 text-center">
                            <div class="text-xs text-gray-500 mb-1">Rule</div>
                            <div class="text-sm font-bold text-emerald-700">25%</div>
                          </div>
                          <div class="bg-gray-50 rounded-xl p-3 text-center">
                            <div class="text-xs text-gray-500 mb-1">Break-even</div>
                            <div class="text-sm font-bold text-gray-900">6.3 yrs</div>
                          </div>
                          <div class="bg-gray-50 rounded-xl p-3 text-center">
                            <div class="text-xs text-gray-500 mb-1">5-yr diff</div>
                            <div class="text-sm font-bold text-gray-900">$135</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <LandingLocations />

            <LandingBlogs />
            <LandingTestimonials />
            <LandingContacts />
        </main>
        <Footer />
        <ModalsPrivacy />

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
                class="flex-1 inline-flex items-center justify-center min-h-[48px] px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl transition-transform active:scale-[0.97] touch-manipulation text-sm"
              >
                <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Now
              </a>
              <NuxtLink
                to="/booking"
                class="flex-1 inline-flex items-center justify-center min-h-[48px] px-4 py-3 border-2 border-primary text-primary font-bold rounded-xl transition-transform active:scale-[0.97] touch-manipulation text-sm"
              >
                <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Book Online
              </NuxtLink>
            </div>
          </div>
        </Transition>
    </div>

</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';

// Sticky mobile CTA bar
const showStickyCta = ref(false)

const handleScroll = () => {
  showStickyCta.value = window.scrollY > window.innerHeight * 0.75
}


// Structured data for local business SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Easy Fix Appliance",
  "description": "Professional Sub-Zero, Wolf, Viking, Thermador, and luxury appliance repair services in Bay Area",
  "url": "https://easyfixappliance.com",
  "telephone": "+14159414144",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "CA",
    "addressLocality": "San Mateo",
    "addressCountry": "US"
  },
  "areaServed": [
    "San Mateo",
    "Palo Alto", 
    "San Francisco",
    "San Jose",
    "Bay Area"
  ],
  "serviceType": [
    "Appliance Repair",
    "Sub-Zero Repair",
    "Wolf Appliance Repair", 
    "Viking Appliance Repair",
    "Thermador Repair",
    "Refrigerator Repair",
    "Oven Repair"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Su 08:00-20:00",
  "sameAs": [
    "https://www.instagram.com/easyfixappliance/",
    "https://www.facebook.com/profile.php?id=61570244923151"
  ]
}

// initialize components based on data attribute selectors
onMounted(() => {
    // Only initialize Flowbite if there are Flowbite elements on this page
    const flowbiteElements = document.querySelectorAll('[data-flowbite]');
    if (flowbiteElements.length > 0) {
        useFlowbite(() => {
            initFlowbite();
        })
    }
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
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData)
    }
  ]
})


function onScroll() {
    if (window.scrollY == 0) {
        changeBackground();
    } else {
        changeBackground();
    }
}

function printScroll() {
    console.log(window.scrollY);
}
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