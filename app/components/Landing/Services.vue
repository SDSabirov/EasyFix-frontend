<template>
  <section id="services" class="bg-cream py-20 lg:py-28 overflow-hidden">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <!-- Header -->
      <div class="relative mb-12 lg:mb-16">
        <span class="ghost-word text-[7rem] lg:text-[13rem] -top-6 lg:-top-12 right-0" aria-hidden="true">Brands</span>
        <div class="relative z-10 max-w-4xl" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Premium Services
          </span>
          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-[3.6rem] text-primary leading-[1.05]">
            Specialized Appliance Repair for
            <em class="font-display font-semibold italic text-brass-dark">Luxury&nbsp;Brands</em>
            in the Bay&nbsp;Area
          </h2>
        </div>
      </div>
    </div>

    <!-- Brand marquee -->
    <div class="marquee border-y border-primary/10 bg-white py-6 mb-14 lg:mb-20" v-reveal>
      <div class="marquee-track items-center" style="--marquee-speed: 34s;">
        <template v-for="n in 2">
          <NuxtLink
            v-for="brand in brands"
            :key="`${n}-${brand.name}`"
            :to="brand.link"
            class="group flex items-center gap-4 px-8 lg:px-12 shrink-0"
            :aria-hidden="n === 2 ? 'true' : undefined"
            :tabindex="n === 2 ? -1 : undefined"
          >
            <img
              loading="lazy"
              decoding="async"
              :src="brand.logo"
              :alt="n === 1 ? brand.name + ' appliance repair services' : ''"
              class="h-9 lg:h-11 object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            />
            <span class="font-display italic text-lg text-primary/30 group-hover:text-brass-dark transition-colors" aria-hidden="true">&#10022;</span>
          </NuxtLink>
        </template>
      </div>
    </div>

    <div class="container mx-auto px-4 max-w-screen-xl">
      <!-- Intro line -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14" v-reveal>
        <p class="lg:col-span-8 text-gray-600 leading-relaxed text-base sm:text-lg">
          <strong class="text-primary font-semibold">At Easy Fix Appliance</strong>, we deliver premium repair services for
          <strong>Sub-Zero, Viking, Dacor, Bertazzoni, Thermador, KitchenAid, GE Monogram,</strong> and more.
          Our <strong>certified technicians</strong> use <strong>genuine manufacturer parts</strong> and advanced techniques,
          with flexible scheduling built around your lifestyle.
        </p>
        <div class="lg:col-span-4 flex lg:justify-end items-start">
          <NuxtLink
            to="/services"
            class="group inline-flex items-center gap-3 font-montserrat text-[12px] font-semibold uppercase tracking-[0.2em] text-primary hover:text-brass-dark transition-colors"
          >
            All Brands &amp; Services
            <span class="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&rarr;</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Service cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-16 lg:mb-24">
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
            <h3 class="font-display font-semibold text-2xl text-primary mb-2 group-hover:text-brass-dark transition-colors">{{ service.name }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">{{ service.description }}</p>
          </div>
        </NuxtLink>
      </div>

      <!-- CTA panel -->
      <div class="grain glow-brass relative bg-ink rounded-[2rem] px-6 py-14 sm:px-14 sm:py-16 overflow-hidden" v-reveal>
        <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div class="max-w-xl">
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-4xl text-white leading-tight mb-4">
              Ready to schedule your
              <em class="font-display font-semibold italic text-brass-light">appliance repair?</em>
            </h3>
            <p class="text-white/60 leading-relaxed">
              Our certified technicians are ready to restore your appliances to peak performance.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="tel:4159414144"
              class="inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
            >
              Call (415) 941-4144
            </a>
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation"
            >
              Schedule Online
            </NuxtLink>
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
  { name: "Sub-Zero", logo: subZeroLogo, specialty: "Refrigeration", link: "/subzero-wolf-repairs" },
  { name: "Wolf", logo: wolfLogo, specialty: "Cooking", link: "/subzero-wolf-repairs" },
  { name: "Viking", logo: vikingLogo, specialty: "Professional", link: "/viking" },
  { name: "Thermador", logo: thermadorLogo, specialty: "Luxury", link: "/thermador" },
  { name: "KitchenAid", logo: kitchenaidLogo, specialty: "Performance", link: "/kitchenAid" },
  { name: "GE Monogram", logo: geMonogramLogo, specialty: "Premium", link: "/gemonogram" },
  { name: "La Cornue", logo: laCornueLogo, specialty: "French Luxury", link: "/la-cornue" },
  { name: "GAGGENAU", logo: gaggenauLogo, specialty: "German Engineering", link: "/gaggenau" },
  { name: "Liebherr", logo: liebherrLogo, specialty: "German Cooling", link: "/liebherr" },
]

const services = [
  {
    name: "Sub-Zero & Wolf",
    image: subzeroWolfImage,
    alt: "Sub-Zero and Wolf luxury appliances - professional repair services in Bay Area",
    logos: [
      { src: subzeroLogosilver, alt: "Sub-Zero Logo" },
      { src: wolfLogo, alt: "Wolf Logo" },
    ],
    description: "Expert services & repairs for all Sub-Zero & Wolf appliances including refrigerators, freezers, wine coolers, ovens, and more.",
    link: "/subzero-wolf-repairs",
    buttonText: "Sub-Zero & Wolf Services",
  },
  {
    name: "Viking Appliances",
    image: vikingImage,
    alt: "Viking professional kitchen appliances - expert repair services in San Mateo",
    logos: [{ src: vikingLogo, alt: "Viking Logo" }],
    description: "Trusted repair solutions for luxury Viking refrigeration, cooking appliances, and professional kitchen equipment.",
    link: "/viking",
    buttonText: "Viking Repair Services",
  },
  {
    name: "Thermador",
    image: thermadorImage,
    alt: "Thermador professional cooking appliances - certified repair technicians Bay Area",
    logos: [{ src: thermadorLogo, alt: "Thermador Logo" }],
    description: "High-quality repairs for Thermador refrigerators, ovens, dishwashers, and professional cooking appliances.",
    link: "/thermador",
    buttonText: "Thermador Repair Experts",
  },
  {
    name: "KitchenAid",
    image: kitchenaidImage,
    alt: "KitchenAid appliances in modern kitchen - certified repair technicians Bay Area",
    logos: [{ src: kitchenaidLogo, alt: "KitchenAid Logo" }],
    description: "Specialized repairs for KitchenAid refrigerators, ovens, ranges, and premium kitchen appliances.",
    link: "/kitchenAid",
    buttonText: "KitchenAid Repairs",
  },
  {
    name: "GE Monogram",
    image: geMonogramImage,
    alt: "GE Monogram luxury appliances - professional repair services Palo Alto",
    logos: [{ src: geMonogramLogo, alt: "GE Monogram Logo" }],
    description: "Precision repairs for GE Monogram refrigerators, ovens, ranges, and luxury kitchen appliances.",
    link: "/gemonogram",
    buttonText: "GE Monogram Expert Repairs",
  },
  {
    name: "Dacor",
    image: dacorImage,
    alt: "Dacor premium kitchen appliances - expert repair services San Francisco Bay Area",
    logos: [{ src: dacorLogo, alt: "Dacor Logo" }],
    description: "Expert repairs for Dacor refrigerators, ovens, cooktops, and premium kitchen appliances.",
    link: "/dacor-appliance",
    buttonText: "Dacor Repair Services",
  },
  {
    name: "La Cornue",
    image: laCornueImage,
    alt: "La Cornue French luxury ranges - expert repair services Bay Area",
    logos: [{ src: laCornueLogo, alt: "La Cornue Logo" }],
    description: "Specialized repairs for La Cornue Chateau, CornuFe, and all French luxury ranges.",
    link: "/la-cornue",
    buttonText: "La Cornue Repairs",
  },
  {
    name: "GAGGENAU",
    image: gaggenauImage,
    alt: "GAGGENAU German precision appliances - expert repair services Bay Area",
    logos: [{ src: gaggenauLogo, alt: "GAGGENAU Logo" }],
    description: "Expert repairs for GAGGENAU steam ovens, induction cooktops, and German precision appliances.",
    link: "/gaggenau",
    buttonText: "GAGGENAU Repairs",
  },
]
</script>
