<script setup>
import { brandsData } from '~/data/brands_data'

// Premium brand logos (existing brands)
import logoSubzero from '~/assets/img/subzerowolfappliance.webp'
import logoViking from '~/assets/img/viking.png'
import logoThermador from '~/assets/img/thermador.png'
import logoGaggenau from '~/assets/img/gagganue-logo.png'
import logoKitchenaid from '~/assets/img/kitchenaid.png'
import logoDacor from '~/assets/img/dacor-logo.png'
import logoCornue from '~/assets/img/la_cornue.svg'
import logoMonogram from '~/assets/img/GEmonogram.png'

// New brand logos
import logoMiele from '~/assets/img/miele-logo.png'
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
      <section class="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24" style="background: linear-gradient(135deg, #0f172a 0%, #164863 50%, #1e3a5f 100%);">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>

        <div class="container mx-auto px-4 max-w-screen-xl relative z-10 text-center">
          <div class="inline-flex items-center px-5 py-2 rounded-full mb-6 border border-white/20" style="background: rgba(255,255,255,0.1); backdrop-filter: blur(8px);">
            <svg class="w-5 h-5 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-white font-semibold text-sm">27+ Premium Brands Serviced</span>
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Every Brand. <span class="text-emerald-400">Every Appliance.</span><br>
            Expert Repairs.
          </h1>
          <p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            From luxury European imports to trusted American brands, our factory-trained technicians deliver certified repair services for <strong class="text-white">every major appliance brand</strong>.
          </p>
        </div>
      </section>

      <!-- Established Premium Brands -->
      <section class="py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 max-w-screen-xl">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Our Flagship Brand Specializations</h2>
            <p class="text-lg text-gray-500">Luxury brands we've serviced for 15+ years</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            <NuxtLink
              v-for="brand in premiumBrands"
              :key="brand.slug"
              :to="brand.slug"
              class="group relative flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div class="h-16 flex items-center justify-center mb-3">
                <img :src="brand.logo" :alt="brand.name + ' logo'" class="max-h-14 max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
              </div>
              <span class="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">{{ brand.name }}</span>
              <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" :style="{ boxShadow: `0 0 0 2px ${brand.color}30` }"></div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- New Brand Specializations -->
      <section class="py-16 lg:py-20" style="background: linear-gradient(to bottom, #f8fafc, #ffffff);">
        <div class="container mx-auto px-4 max-w-screen-xl">
          <div class="text-center mb-12">
            <div class="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full mb-4">
              <span class="text-emerald-700 font-semibold text-sm">Expanded Coverage</span>
            </div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">More Premium Brands We Service</h2>
            <p class="text-lg text-gray-500 max-w-2xl mx-auto">Expert repair for these additional premium and specialty brands — each with a dedicated landing page</p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <NuxtLink
              v-for="key in newBrandKeys"
              :key="key"
              :to="'/' + brandsData[key].slug"
              class="group flex flex-col items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div class="h-14 w-full flex items-center justify-center mb-3">
                <img :src="getBrandLogo(key)" :alt="brandsData[key].name + ' logo'" class="max-h-12 max-w-[100px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100" data-not-lazy>
              </div>
              <span class="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors text-center">{{ brandsData[key].name }}</span>
              <span class="text-xs mt-1 px-2 py-0.5 rounded-full transition-colors" :style="{ color: brandsData[key].accentColor + '99', background: brandsData[key].accentColor + '10' }">
                {{ brandsData[key].tagline.split(' ').slice(0, 3).join(' ') }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Appliance Types -->
      <section class="py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 max-w-screen-xl">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Appliances We Repair</h2>
            <p class="text-lg text-gray-500">All types, all brands, all models</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div
              v-for="appliance in applianceTypes"
              :key="appliance.name"
              class="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100"
            >
              <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path :d="appliance.icon"/>
              </svg>
              <span class="text-gray-700 font-medium text-sm">{{ appliance.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="py-16 lg:py-20" style="background: linear-gradient(to bottom, #f8fafc, #ffffff);">
        <div class="container mx-auto px-4 max-w-screen-xl">
          <div class="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 max-w-4xl mx-auto">
            <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Easy Fix Appliance?</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="font-bold text-gray-900 mb-2">Certified Technicians</h3>
                <p class="text-gray-600 text-sm">Factory-trained experts with 15+ years of experience across all brands</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <p class="text-gray-600 text-sm">Fast response times throughout the Bay Area</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="font-bold text-gray-900 mb-2">2-Year Warranty</h3>
                <p class="text-gray-600 text-sm">All repairs backed by our comprehensive warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 max-w-screen-xl">
          <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 text-white max-w-3xl mx-auto text-center">
            <h3 class="text-2xl lg:text-3xl font-bold mb-4">
              Have an Appliance That Needs Repair?
            </h3>
            <p class="text-lg text-white/90 mb-8">
              Contact us today — we service all major brands!
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                :href="`tel:${phoneNumber}`"
                class="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                {{ phoneDisplay }}
              </a>

              <NuxtLink
                :to="bookingUrl"
                class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
                </svg>
                Schedule Service
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Back Link -->
      <div class="text-center pb-12 bg-white">
        <NuxtLink
          to="/services"
          class="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Services
        </NuxtLink>
      </div>
    </main>
    <Footer />
  </div>
</template>
