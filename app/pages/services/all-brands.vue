<script setup>
import { brandsData } from '~/data/brands_data'

// Premium brand logos (existing brands)
import logoSubzero from '~/assets/img/sub-zero-logo.png'
import logoViking from '~/assets/img/viking.png'
import logoThermador from '~/assets/img/thermador.webp'
import logoGaggenau from '~/assets/img/gagganue-logo.png'
import logoKitchenaid from '~/assets/img/kitchenaid.png'
import logoDacor from '~/assets/img/dacor-logo.png'
import logoCornue from '~/assets/img/la_cornue.svg'
import logoMonogram from '~/assets/img/GEmonogram.webp'

// New brand logos
import logoMiele from '~/assets/img/miele-logo.webp'
import logoBosch from '~/assets/img/newbrand-logos/bosch.svg'
import logoBluestar from '~/assets/img/newbrand-logos/bluestar.svg'
import logoBertazzoni from '~/assets/img/newbrand-logos/bertazzoni.svg'
import logoHestan from '~/assets/img/newbrand-logos/hestan.svg'
import logoLiebherr from '~/assets/img/newbrand-logos/liebherr.webp'
import logoLg from '~/assets/img/newbrand-logos/lg.svg'
import logoMaytag from '~/assets/img/newbrand-logos/maytag.svg'
import logoAsko from '~/assets/img/newbrand-logos/asko.svg'
import logoLynx from '~/assets/img/newbrand-logos/lynx.svg'
import logoZephyr from '~/assets/img/newbrand-logos/zephyr.svg'
import logoDcs from '~/assets/img/newbrand-logos/dcs.svg'
import logoKalamazoo from '~/assets/img/newbrand-logos/kalamzoo.avif'
import logoVentahood from '~/assets/img/newbrand-logos/vent-a-hood.webp'
import logoScotsman from '~/assets/img/newbrand-logos/scotsman.webp'
import logoTrue from '~/assets/img/newbrand-logos/true.webp'
import logoDynasty from '~/assets/img/newbrand-logos/dynasty.webp'
import logoHoshizaki from '~/assets/img/newbrand-logos/hoshizaki.webp'
import logoUline from '~/assets/img/uline.png'

const { phoneNumber, phoneDisplay, bookingUrl } = useContact()

useHead({
  title: 'All Appliance Brands We Service | Easy Fix Appliance',
  meta: [
    {
      name: 'description',
      content: 'Easy Fix Appliance services ALL major appliance brands including Miele, Bosch, Sub-Zero, Viking, Thermador, and 20+ premium brands. Expert repair for refrigerators, washers, dryers, ovens, and more in the Bay Area.'
    }
  ]
})

const premiumBrands = [
  { name: 'Sub-Zero & Wolf', slug: '/subzero-wolf-repairs', logo: logoSubzero, color: '#1a3a5c' },
  { name: 'Viking', slug: '/viking', logo: logoViking, color: '#8B0000' },
  { name: 'Thermador', slug: '/thermador', logo: logoThermador, color: '#c41e3a' },
  { name: 'Gaggenau', slug: '/gaggenau', logo: logoGaggenau, color: '#636e72' },
  { name: 'KitchenAid', slug: '/kitchenAid', logo: logoKitchenaid, color: '#c41230' },
  { name: 'Dacor', slug: '/dacor-appliance', logo: logoDacor, color: '#1a1a1a' },
  { name: 'La Cornue', slug: '/la-cornue', logo: logoCornue, color: '#b8860b' },
  { name: 'GE Monogram', slug: '/gemonogram', logo: logoMonogram, color: '#003da5' },
]

// Logo lookup map (not reactive)
const logoMap = {
  'miele': logoMiele,
  'bosch': logoBosch,
  'bluestar': logoBluestar,
  'bertazzoni': logoBertazzoni,
  'hestan': logoHestan,
  'liebherr': logoLiebherr,
  'lg-signature': logoLg,
  'maytag': logoMaytag,
  'asko': logoAsko,
  'lynx': logoLynx,
  'zephyr': logoZephyr,
  'dcs': logoDcs,
  'kalamazoo': logoKalamazoo,
  'vent-a-hood': logoVentahood,
  'scotsman': logoScotsman,
  'true-residential': logoTrue,
  'dynasty': logoDynasty,
  'hoshizaki': logoHoshizaki,
  'u-line': logoUline,
}

const newBrandKeys = [
  'miele', 'bosch', 'bluestar', 'bertazzoni', 'hestan', 'liebherr',
  'lg-signature', 'maytag', 'asko', 'lynx', 'zephyr', 'dcs',
  'kalamazoo', 'vent-a-hood', 'scotsman', 'true-residential',
  'dynasty', 'hoshizaki', 'u-line'
]

function getBrandLogo(key) {
  return logoMap[key]
}

const applianceTypes = [
  { name: 'Refrigerators & Freezers', icon: 'M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v5h8V4H6zm0 7v5h8v-5H6z' },
  { name: 'Washers & Dryers', icon: 'M10 2a8 8 0 100 16 8 8 0 000-16zm0 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z' },
  { name: 'Dishwashers', icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v8h10V6H5zm3 2a2 2 0 114 0 2 2 0 01-4 0z' },
  { name: 'Ovens & Ranges', icon: 'M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm4 0v2h6V5H7zm-2 4h10v6H5V9z' },
  { name: 'Cooktops & Stoves', icon: 'M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-4a4 4 0 100 8 4 4 0 000-8z' },
  { name: 'Ice Makers', icon: 'M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8 11a2 2 0 114 0 2 2 0 01-4 0z' },
  { name: 'Wine Coolers', icon: 'M9 2a1 1 0 00-1 1v3.382l-2.553 1.276A1 1 0 005 8.382V17a1 1 0 001 1h8a1 1 0 001-1V8.382a1 1 0 00-.447-.724L12 6.382V3a1 1 0 00-1-1H9z' },
  { name: 'Built-In Appliances', icon: 'M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm5 7h6v6H7v-6z' },
]
</script>

<template>
  <div>
    <Navbar />
    <main role="main">
      <!-- Hero Section -->
      <section class="grain glow-brass relative bg-ink pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <span class="ghost-word ghost-word--light text-[6rem] lg:text-[11rem] top-24 -right-6" aria-hidden="true">Brands</span>

        <div class="container mx-auto px-4 max-w-screen-xl relative z-10 text-center">
          <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            27+ Premium Brands Serviced
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
            Every Brand. <em class="font-display font-semibold italic text-brass-light">Every Appliance.</em><br>
            Expert Repairs.
          </h1>
          <p class="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            From luxury European imports to trusted American brands, our factory-trained technicians deliver certified repair services for <strong class="text-white font-semibold">every major appliance brand</strong>.
          </p>
        </div>
      </section>

      <!-- Established Premium Brands -->
      <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
        <span class="ghost-word text-[6rem] lg:text-[11rem] -top-4 -left-8" aria-hidden="true">Flagship</span>

        <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
          <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-14" v-reveal>
            <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
              Flagship Expertise
            </span>
            <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-4">
              Our Flagship
              <em class="font-display font-semibold italic text-brass-dark">Brand Specializations</em>
            </h2>
            <p class="text-gray-600 leading-relaxed">Luxury brands we've serviced for 15+ years</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6 max-w-5xl mx-auto">
            <NuxtLink
              v-for="(brand, index) in premiumBrands"
              :key="brand.slug"
              :to="brand.slug"
              class="group flex flex-col items-center justify-center p-6 lg:p-7 bg-white rounded-[1.5rem] border border-primary/5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
              v-reveal="(index % 4) * 90"
            >
              <div class="h-16 flex items-center justify-center mb-4">
                <img :src="brand.logo" :alt="brand.name + ' logo'" loading="lazy" decoding="async" class="max-h-14 max-w-[120px] object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100">
              </div>
              <span class="font-montserrat text-sm font-semibold text-primary transition-colors group-hover:text-brass-dark">{{ brand.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- New Brand Specializations -->
      <section class="relative bg-cream py-20 lg:py-28 overflow-hidden">
        <span class="ghost-word text-[6rem] lg:text-[11rem] -top-4 -right-6" aria-hidden="true">Coverage</span>

        <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
          <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-14" v-reveal>
            <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
              Expanded Coverage
            </span>
            <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-4">
              More Premium Brands
              <em class="font-display font-semibold italic text-brass-dark">We Service</em>
            </h2>
            <p class="text-gray-600 leading-relaxed max-w-2xl mx-auto">Expert repair for these additional premium and specialty brands — each with a dedicated landing page</p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5 max-w-6xl mx-auto">
            <NuxtLink
              v-for="(key, index) in newBrandKeys"
              :key="key"
              :to="'/' + brandsData[key].slug"
              class="group flex flex-col items-center p-5 bg-white rounded-[1.5rem] border border-primary/5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
              v-reveal="(index % 5) * 70"
            >
              <div class="h-14 w-full flex items-center justify-center mb-3">
                <img :src="getBrandLogo(key)" :alt="brandsData[key].name + ' logo'" class="max-h-12 max-w-[100px] object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" data-not-lazy>
              </div>
              <span class="font-montserrat text-sm font-semibold text-primary transition-colors group-hover:text-brass-dark text-center">{{ brandsData[key].name }}</span>
              <span class="mt-1.5 font-montserrat text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400 text-center">
                {{ brandsData[key].tagline.split(' ').slice(0, 3).join(' ') }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Appliance Types -->
      <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
        <div class="container mx-auto px-4 max-w-screen-xl">
          <div class="text-center max-w-3xl mx-auto mb-12" v-reveal>
            <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
              Complete Coverage
            </span>
            <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-4">
              Appliances
              <em class="font-display font-semibold italic text-brass-dark">We Repair</em>
            </h2>
            <p class="text-gray-600 leading-relaxed">All types, all brands, all models</p>
          </div>

          <div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto" v-reveal="120">
            <div
              v-for="appliance in applianceTypes"
              :key="appliance.name"
              class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-5 py-3"
            >
              <svg class="w-4 h-4 text-brass-dark shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path :d="appliance.icon"/>
              </svg>
              <span class="text-sm font-medium text-gray-700">{{ appliance.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us + CTA -->
      <section class="grain glow-brass relative bg-ink py-20 lg:py-28 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
        <span class="ghost-word ghost-word--light text-[6rem] lg:text-[11rem] top-8 -left-6" aria-hidden="true">Trusted</span>

        <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
          <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-14" v-reveal>
            <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
              Trusted Excellence
            </span>
            <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-white leading-[1.05]">
              Why Choose
              <em class="font-display font-semibold italic text-brass-light">Easy Fix Appliance?</em>
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-4xl mx-auto mb-16 lg:mb-20">
            <div class="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:border-brass/40 hover:bg-white/[0.07] hover:-translate-y-1.5" v-reveal>
              <span class="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-5 transition-colors duration-300 group-hover:bg-brass/25">
                <svg class="w-5 h-5 text-brass-light" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </span>
              <h3 class="font-montserrat font-bold text-lg text-white mb-2">Certified Technicians</h3>
              <p class="text-sm text-white/50 leading-relaxed">Factory-trained experts with 15+ years of experience across all brands</p>
            </div>
            <div class="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:border-brass/40 hover:bg-white/[0.07] hover:-translate-y-1.5" v-reveal="90">
              <span class="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-5 transition-colors duration-300 group-hover:bg-brass/25">
                <svg class="w-5 h-5 text-brass-light" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
              </span>
              <h3 class="font-montserrat font-bold text-lg text-white mb-2">Same-Day Service</h3>
              <p class="text-sm text-white/50 leading-relaxed">Fast response times throughout the Bay Area</p>
            </div>
            <div class="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:border-brass/40 hover:bg-white/[0.07] hover:-translate-y-1.5" v-reveal="180">
              <span class="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-5 transition-colors duration-300 group-hover:bg-brass/25">
                <svg class="w-5 h-5 text-brass-light" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </span>
              <h3 class="font-montserrat font-bold text-lg text-white mb-2">2-Year Warranty</h3>
              <p class="text-sm text-white/50 leading-relaxed">All repairs backed by our comprehensive warranty</p>
            </div>
          </div>

          <!-- CTA -->
          <div class="text-center" v-reveal>
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-white leading-tight mb-3">
              Have an Appliance That Needs
              <em class="font-display font-semibold italic text-brass-light">Repair?</em>
            </h3>
            <p class="text-white/60 leading-relaxed mb-8">
              Contact us today — we service all major brands!
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                :href="`tel:${phoneNumber}`"
                class="w-full sm:w-auto inline-flex items-center justify-center min-h-[52px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
              >
                {{ phoneDisplay }}
              </a>

              <NuxtLink
                :to="bookingUrl"
                class="w-full sm:w-auto inline-flex items-center justify-center min-h-[52px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation"
              >
                Schedule Service
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Back Link -->
      <div class="bg-white py-12 text-center">
        <NuxtLink
          to="/services"
          class="group inline-flex items-center gap-3 font-montserrat text-[12px] font-semibold uppercase tracking-[0.18em] text-primary hover:text-brass-dark transition-colors"
        >
          <span class="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&larr;</span>
          Back to Services
        </NuxtLink>
      </div>
    </main>
    <Footer />
  </div>
</template>
