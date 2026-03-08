<template>
    <div class="pb-[72px] lg:pb-0">
        <Navbar />
        <main role="main">
            <LandingHero />
            <LandingServices />
            <LandingApplianceTypes2/>
            <LandingStats />
            <LandingPrices />
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
  "openingHours": "Mo-Su 08:00-20:00"
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