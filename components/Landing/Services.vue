<template>
  <section
    id="services"
    class="bg-gray-50 py-16 lg:py-24"
  >
    <div class="container mx-auto px-4 max-w-screen-xl">
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
          <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span class="text-primary font-semibold text-sm">Premium Services</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Specialized Appliance Repair Services for Luxury Brands in Bay Area
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-2">
        <strong>At Easy Fix Appliance</strong>, we deliver premium appliance
        repair services for luxury brands like
        <strong>Sub-Zero,</strong>
        <strong> Viking,</strong>
        <strong> Dacor,</strong>
        <strong> Bertazzoni,</strong>
        <strong> Thermador,</strong>
        <strong> KitchenAid,</strong>
        <strong> GE Monogram,</strong>
        and more. Our <strong>highly trained and certified </strong> technicians
        specialize in high-end appliance repair, ensuring your appliances
        perform at their best. We use
        <strong>genuine manufacturer </strong> parts and advanced repair
        techniques to handle even the most challenging issues, guaranteeing
        long-lasting results. With flexible scheduling and a commitment to
        top-tier customer service, we make appliance repair convenient and
        stress-free. Trust Easy Fix Appliance for expert solutions that fit your
        busy lifestyle.
        </p>
      </div>
      
      <!-- Brand Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        <div v-for="brand in brands" :key="brand.name"
             class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div class="text-center">
            <img :src="brand.logo" :alt="brand.name + ' appliance repair services'"
                 class="h-12 mx-auto mb-4 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            <h3 class="font-semibold text-gray-900 text-sm">{{ brand.name }}</h3>
            <p class="text-xs text-gray-600 mt-1">{{ brand.specialty }}</p>
          </div>
        </div>
      </div>

      <!-- And Many More Link -->
      <div class="text-center mb-16">
        <NuxtLink
          to="/services"
          class="inline-flex items-center text-lg font-semibold text-primary hover:text-secondary transition-colors duration-300 group"
        >
          <span>And Many More</span>
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Services Grid -->
      <div class="flex flex-wrap justify-center gap-8">
        <div v-for="service in services" :key="service.name"
             class="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]">
          <div class="relative h-48 overflow-hidden">
            <img :src="service.image" :alt="service.alt"
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          
          <div class="p-6">
            <div class="text-center mb-4">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ service.name }}</h3>
              <div class="flex justify-center space-x-2 mb-4">
                <img v-for="logo in service.logos" :key="logo.alt" 
                     :src="logo.src" :alt="logo.alt"
                     class="h-8 object-contain" />
              </div>
              <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
            </div>
            
            <NuxtLink :to="service.link"
                      class="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <span>{{ service.buttonText }}</span>
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white">
          <div class="max-w-3xl mx-auto">
            <h3 class="text-3xl font-bold mb-4">
              Ready to Schedule Your Appliance Repair?
            </h3>
            <p class="text-xl text-white/90 mb-8 leading-relaxed">
              Get expert repair services for your luxury appliances. Our certified technicians are ready to help restore your appliances to peak performance.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:4159414144"
                class="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Now: (415) 941-4144
              </a>
              
              <NuxtLink 
                to="/booking"
                class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
                </svg>
                Schedule Service Online
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import images
import subZeroLogo from '/assets/img/sub-zero-logo.png'
import wolfLogo from '/assets/img/wolf.png'
import vikingLogo from '/assets/img/viking.png'
import thermadorLogo from '/assets/img/thermador.png'
import kitchenaidLogo from '/assets/img/kitchenaid.png'
import geMonogramLogo from '/assets/img/GEmonogram.png'
import subzeroLogosilver from '/assets/img/subzeroLogosilver.png'
import dacorLogo from '/assets/img/dacor-logo.png'
import laCornueLogo from '/assets/img/la_cornue.svg'
import gaggenauLogo from '/assets/img/gagganue-logo.png'

import subzeroWolfImage from '/assets/img/subzerowolfappliance.webp'
import laCornueImage from '/assets/img/la_courne.webp'
import gaggenauImage from '/assets/img/gaggenau.webp'
import vikingImage from '/assets/img/vikingAppliance.webp'
import thermadorImage from '/assets/img/thermador-cover.jpg'
import kitchenaidImage from '/assets/img/kitchenBlue.jpg'
import geMonogramImage from '/assets/img/redAppliance.jpeg'
import dacorImage from '/assets/img/dacor-cover.jpg'

const brands = [
  {
    name: "Sub-Zero",
    logo: subZeroLogo,
    specialty: "Refrigeration"
  },
  {
    name: "Wolf",
    logo: wolfLogo, 
    specialty: "Cooking"
  },
  {
    name: "Viking",
    logo: vikingLogo,
    specialty: "Professional"
  },
  {
    name: "Thermador",
    logo: thermadorLogo,
    specialty: "Luxury"
  },
  {
    name: "KitchenAid",
    logo: kitchenaidLogo,
    specialty: "Performance"
  },
  {
    name: "GE Monogram",
    logo: geMonogramLogo,
    specialty: "Premium"
  },
  {
    name: "La Cornue",
    logo: laCornueLogo,
    specialty: "French Luxury"
  },
  {
    name: "GAGGENAU",
    logo: gaggenauLogo,
    specialty: "German Engineering"
  }
]

const services = [
  {
    name: "Sub-Zero & Wolf",
    image: subzeroWolfImage,
    alt: "Sub-Zero and Wolf luxury appliances - professional repair services in Bay Area",
    logos: [
      { src: subzeroLogosilver, alt: "Sub-Zero Logo" },
      { src: wolfLogo, alt: "Wolf Logo" }
    ],
    description: "Expert services & repairs for all Sub-Zero & Wolf appliances including refrigerators, freezers, wine coolers, ovens, and more.",
    link: "/subzero-wolf-repairs",
    buttonText: "Sub-Zero & Wolf Services"
  },
  {
    name: "Viking Appliances",
    image: vikingImage,
    alt: "Viking professional kitchen appliances - expert repair services in San Mateo",
    logos: [
      { src: vikingLogo, alt: "Viking Logo" }
    ],
    description: "Trusted repair solutions for luxury Viking refrigeration, cooking appliances, and professional kitchen equipment.",
    link: "/viking",
    buttonText: "Viking Repair Services"
  },
  {
    name: "Thermador",
    image: thermadorImage,
    alt: "Thermador professional cooking appliances - certified repair technicians Bay Area",
    logos: [
      { src: thermadorLogo, alt: "Thermador Logo" }
    ],
    description: "High-quality repairs for Thermador refrigerators, ovens, dishwashers, and professional cooking appliances.",
    link: "/thermador",
    buttonText: "Thermador Repair Experts"
  },
  {
    name: "KitchenAid",
    image: kitchenaidImage,
    alt: "KitchenAid appliances in modern kitchen - certified repair technicians Bay Area",
    logos: [
      { src: kitchenaidLogo, alt: "KitchenAid Logo" }
    ],
    description: "Specialized repairs for KitchenAid refrigerators, ovens, ranges, and premium kitchen appliances.",
    link: "/kitchenAid",
    buttonText: "KitchenAid Repairs"
  },
  {
    name: "GE Monogram",
    image: geMonogramImage,
    alt: "GE Monogram luxury appliances - professional repair services Palo Alto",
    logos: [
      { src: geMonogramLogo, alt: "GE Monogram Logo" }
    ],
    description: "Precision repairs for GE Monogram refrigerators, ovens, ranges, and luxury kitchen appliances.",
    link: "/gemonogram",
    buttonText: "GE Monogram Expert Repairs"
  },
  {
    name: "Dacor",
    image: dacorImage,
    alt: "Dacor premium kitchen appliances - expert repair services San Francisco Bay Area",
    logos: [
      { src: dacorLogo, alt: "Dacor Logo" }
    ],
    description: "Expert repairs for Dacor refrigerators, ovens, cooktops, and premium kitchen appliances.",
    link: "/dacor-appliance",
    buttonText: "Dacor Repair Services"
  },
  {
    name: "La Cornue",
    image: laCornueImage,
    alt: "La Cornue French luxury ranges - expert repair services Bay Area",
    logos: [
      { src: laCornueLogo, alt: "La Cornue Logo" }
    ],
    description: "Specialized repairs for La Cornue Chateau, CornuFe, and all French luxury ranges.",
    link: "/la-cornue",
    buttonText: "La Cornue Repairs"
  },
  {
    name: "GAGGENAU",
    image: gaggenauImage,
    alt: "GAGGENAU German precision appliances - expert repair services Bay Area",
    logos: [
      { src: gaggenauLogo, alt: "GAGGENAU Logo" }
    ],
    description: "Expert repairs for GAGGENAU steam ovens, induction cooktops, and German precision appliances.",
    link: "/gaggenau",
    buttonText: "GAGGENAU Repairs"
  }
]
</script>