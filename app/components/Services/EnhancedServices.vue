<template>
  <section class="relative bg-white py-16 lg:py-24 overflow-hidden">
    <span class="ghost-word text-[6rem] lg:text-[11rem] -top-4 -right-6" aria-hidden="true">Premium</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Header -->
      <div class="text-center max-w-4xl mx-auto mb-12 lg:mb-16" v-reveal>
        <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          Premium Brand Specialists
        </span>

        <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
          Luxury Appliance Repair Services
          <em class="block font-display font-semibold italic text-brass-dark">for Premium Brands</em>
        </h2>

        <p class="text-gray-600 leading-relaxed text-base sm:text-lg">
          <strong class="text-primary font-semibold">At Easy Fix Appliance</strong>, we deliver premium appliance repair services for luxury brands like
          <strong>Sub-Zero, Viking, Dacor, Bertazzoni, Thermador, KitchenAid, GE Monogram</strong>, and more.
          Our <strong>highly trained and certified</strong> technicians specialize in high-end appliance repair,
          ensuring your appliances perform at their best.
        </p>
      </div>

      <!-- Value Propositions -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-16 lg:mb-20">
        <div
          class="group rounded-[1.5rem] border border-primary/10 bg-white px-7 py-8 transition-all duration-300 hover:border-brass/50 hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-1"
          v-reveal
        >
          <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5 transition-colors duration-300 group-hover:bg-brass/15">
            <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
          </span>
          <h3 class="font-montserrat font-bold text-lg text-primary mb-2">Genuine OEM Parts</h3>
          <p class="text-sm text-gray-600 leading-relaxed">We use authentic manufacturer parts for lasting repairs and optimal performance</p>
        </div>

        <div
          class="group rounded-[1.5rem] border border-primary/10 bg-white px-7 py-8 transition-all duration-300 hover:border-brass/50 hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-1"
          v-reveal="90"
        >
          <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5 transition-colors duration-300 group-hover:bg-brass/15">
            <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
          </span>
          <h3 class="font-montserrat font-bold text-lg text-primary mb-2">Advanced Techniques</h3>
          <p class="text-sm text-gray-600 leading-relaxed">Our technicians use cutting-edge repair methods for challenging issues</p>
        </div>

        <div
          class="group rounded-[1.5rem] border border-primary/10 bg-white px-7 py-8 transition-all duration-300 hover:border-brass/50 hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-1"
          v-reveal="180"
        >
          <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5 transition-colors duration-300 group-hover:bg-brass/15">
            <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
          </span>
          <h3 class="font-montserrat font-bold text-lg text-primary mb-2">Flexible Scheduling</h3>
          <p class="text-sm text-gray-600 leading-relaxed">Convenient scheduling that fits your busy lifestyle with same-day service available</p>
        </div>
      </div>

      <!-- Brand Grid -->
      <div class="mb-16 lg:mb-20">
        <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary text-center mb-10" v-reveal>
          Authorized Service for
          <em class="font-display font-semibold italic text-brass-dark">Premium Brands</em>
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
          <NuxtLink
            v-for="(brand, index) in brands"
            :key="brand.name"
            :to="brand.link"
            class="group bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
            v-reveal="(index % 3) * 90"
          >
            <img
              loading="lazy"
              decoding="async"
              :src="brand.logo"
              :alt="brand.name + ' appliance repair services'"
              class="h-12 lg:h-14 object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 mb-4"
            />
            <h4 class="font-display font-semibold text-xl text-primary mb-1 transition-colors group-hover:text-brass-dark">{{ brand.name }}</h4>
            <p class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">{{ brand.specialty }}</p>
          </NuxtLink>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="mb-16 lg:mb-20">
        <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary text-center mb-10" v-reveal>
          Our Specialized
          <em class="font-display font-semibold italic text-brass-dark">Repair Services</em>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          <NuxtLink
            v-for="(service, index) in services"
            :key="service.name"
            :to="service.link"
            class="group relative bg-white rounded-[1.5rem] overflow-hidden border border-primary/5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
            v-reveal="(index % 4) * 90"
          >
            <div class="relative overflow-hidden aspect-[4/3]">
              <img
                loading="lazy"
                decoding="async"
                :src="service.image"
                :alt="service.alt"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"></div>
              <span
                class="absolute bottom-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-ink backdrop-blur-sm translate-y-14 group-hover:translate-y-0 transition-transform duration-500"
                aria-hidden="true"
              >&#8599;</span>
            </div>
            <div class="p-6">
              <h4 class="font-display font-semibold text-2xl text-primary mb-2 transition-colors group-hover:text-brass-dark">{{ service.name }}</h4>
              <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">{{ service.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Process Section -->
      <div class="mb-16 lg:mb-20" v-reveal>
        <div class="bg-cream border border-primary/10 rounded-[2rem] p-8 sm:p-12">
          <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary text-center mb-10">
            Our Simple
            <em class="font-display font-semibold italic text-brass-dark">Repair Process</em>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10">
            <div v-for="(step, index) in repairProcess" :key="step.title" v-reveal="index * 90">
              <div class="font-display font-semibold text-5xl text-brass/40 leading-none mb-4" aria-hidden="true">0{{ index + 1 }}</div>
              <h4 class="font-montserrat font-bold text-lg text-primary mb-2">{{ step.title }}</h4>
              <p class="text-sm text-gray-600 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="grain glow-brass relative bg-ink rounded-[2rem] px-6 py-14 sm:px-14 sm:py-16 overflow-hidden" v-reveal>
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
        <div class="relative z-10 max-w-4xl mx-auto text-center">
          <h3 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-4xl text-white leading-tight mb-4">
            Ready to Schedule Your Professional
            <em class="font-display font-semibold italic text-brass-light">Appliance Repair?</em>
          </h3>
          <p class="text-white/60 leading-relaxed mb-10">
            Get expert repair services for your luxury appliances. Our certified technicians are ready to help restore your appliances to peak performance with guaranteed satisfaction.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
              Schedule Service Online
            </NuxtLink>
          </div>

          <!-- Service Guarantees -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6">
              <div class="font-display font-semibold text-2xl text-brass-light mb-1">Same-Day Service</div>
              <div class="text-sm text-white/50">Available for urgent repairs</div>
            </div>
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6">
              <div class="font-display font-semibold text-2xl text-brass-light mb-1">90-Day Warranty</div>
              <div class="text-sm text-white/50">On all parts and labor</div>
            </div>
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6">
              <div class="font-display font-semibold text-2xl text-brass-light mb-1">100% Satisfaction</div>
              <div class="text-sm text-white/50">Guaranteed or money back</div>
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
import wolfLogo from '/assets/img/wolf.webp'
import vikingLogo from '/assets/img/viking.png'
import thermadorLogo from '/assets/img/thermador.webp'
import kitchenaidLogo from '/assets/img/kitchenaid.png'
import geMonogramLogo from '/assets/img/GEmonogram.webp'
import subzeroLogosilver from '/assets/img/subzeroLogosilver.png'
import dacorLogo from '/assets/img/dacor-logo.png'
import laCornueLogo from '/assets/img/la_cornue.svg'
import gaggenauLogo from '/assets/img/gagganue-logo.png'
import liebherrLogo from '/assets/img/newbrand-logos/logo_ci_liebherr.svg'

import subzeroWolfImage from '/assets/img/subzerowolfappliance.webp'
import laCornueImage from '/assets/img/la_courne.webp'
import gaggenauImage from '/assets/img/gaggenau.webp'
import vikingImage from '/assets/img/vikingAppliance.webp'
import thermadorImage from '/assets/img/thermador-cover.webp'
import kitchenaidImage from '/assets/img/kitchenBlue.jpg'
import geMonogramImage from '/assets/img/redAppliance.webp'
import dacorImage from '/assets/img/dacor-cover.webp'

const brands = [
  {
    name: "Sub-Zero",
    logo: subZeroLogo,
    specialty: "Premium Refrigeration",
    link: "/subzero-wolf-repairs"
  },
  {
    name: "Wolf",
    logo: wolfLogo,
    specialty: "Professional Cooking",
    link: "/subzero-wolf-repairs"
  },
  {
    name: "Viking",
    logo: vikingLogo,
    specialty: "Commercial Grade",
    link: "/viking"
  },
  {
    name: "Thermador",
    logo: thermadorLogo,
    specialty: "Luxury Performance",
    link: "/thermador"
  },
  {
    name: "KitchenAid",
    logo: kitchenaidLogo,
    specialty: "Culinary Excellence",
    link: "/kitchenAid"
  },
  {
    name: "GE Monogram",
    logo: geMonogramLogo,
    specialty: "Premium Design",
    link: "/gemonogram"
  },
  {
    name: "La Cornue",
    logo: laCornueLogo,
    specialty: "French Luxury",
    link: "/la-cornue"
  },
  {
    name: "GAGGENAU",
    logo: gaggenauLogo,
    specialty: "German Engineering",
    link: "/gaggenau"
  },
  {
    name: "Liebherr",
    logo: liebherrLogo,
    specialty: "German Cooling",
    link: "/liebherr"
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
    description: "Expert services & repairs for all Sub-Zero & Wolf appliances including refrigerators, freezers, wine coolers, ovens, ranges, and professional cooking equipment.",
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
    description: "Trusted repair solutions for luxury Viking refrigeration, cooking appliances, and professional-grade kitchen equipment with certified technician expertise.",
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
    description: "High-quality repairs for Thermador refrigerators, ovens, dishwashers, cooktops, and professional cooking appliances with genuine OEM parts.",
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
    description: "Specialized repairs for KitchenAid refrigerators, ovens, ranges, dishwashers, and premium kitchen appliances with factory-authorized service.",
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
    description: "Precision repairs for GE Monogram refrigerators, ovens, ranges, wine storage, and luxury kitchen appliances with certified expertise.",
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
    description: "Expert repairs for Dacor refrigerators, ovens, cooktops, wine preservation systems, and premium kitchen appliances with specialized training.",
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
    description: "Specialized repairs for La Cornue Chateau, CornuFe, and all French luxury ranges with factory-trained expertise and genuine parts.",
    link: "/la-cornue",
    buttonText: "La Cornue Repair Services"
  },
  {
    name: "GAGGENAU",
    image: gaggenauImage,
    alt: "GAGGENAU German precision appliances - expert repair services Bay Area",
    logos: [
      { src: gaggenauLogo, alt: "GAGGENAU Logo" }
    ],
    description: "Expert repairs for GAGGENAU steam ovens, induction cooktops, refrigeration, and all German precision appliances with certified technicians.",
    link: "/gaggenau",
    buttonText: "GAGGENAU Repair Services"
  }
]

const repairProcess = [
  {
    title: "Schedule Service",
    description: "Call us or book online for a convenient appointment time that works for you"
  },
  {
    title: "Expert Diagnosis",
    description: "Our certified technician will thoroughly diagnose your appliance issue"
  },
  {
    title: "Quality Repair",
    description: "We fix your appliance using genuine OEM parts and proven techniques"
  },
  {
    title: "Service Guarantee",
    description: "Enjoy peace of mind with our comprehensive warranty on all work"
  }
]
</script>
