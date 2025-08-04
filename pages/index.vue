<template>
    <div>
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
    </div>
    
</template>

<script setup>

import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';

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