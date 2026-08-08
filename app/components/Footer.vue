<template>
  <footer class="grain relative bg-ink text-white overflow-hidden" id="footer">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>

    <div class="relative z-10 max-w-screen-xl mx-auto px-4 pt-16 pb-8">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
        <!-- Company info -->
        <div class="lg:col-span-2 lg:pr-12">
          <NuxtLink to="/" class="inline-flex items-center gap-3 mb-6">
            <svg
              width="44"
              height="44"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="rounded-full"
            >
              <path
                d="M7.80934 8.52637L9.85214 12.745L8 16.5L5.5 20.5L5.52335 25.3528L1 26.8869L2.0214 32.9751H6.83658L8.00389 35.2761L4.64786 39.1592L8.92802 43.953L12.9163 41.8437L15.2996 43.4736L14.3268 47.7881L20.2607 50.185L22.3521 46.2541L25.6109 46.5417L27.1187 51L33.1012 50.185V45.3912L35.9222 44.4803L39.3268 47.4525L44.4825 43.4736L41.9047 39.1592L44.4825 35.8035L46 31.5L46.5253 26.5513L51 24.9214L50.0759 18.9291H45.358L44.142 15.9089L47.2062 12.745L42.9747 7.90316L39.035 10.1083L36.8463 8.52637L37.7218 3.9722L31.7393 1.95877L29.4533 5.50623L26.2918 5.17066L24.6868 1L18.4611 1.95877V6.56088L16.0292 7.90316L12.3327 4.88303L7.80934 8.52637Z"
                fill="#164863"
                stroke="white"
                stroke-width="0.5"
              />
              <path
                d="M24.8655 21.1518L4.72414 20.7782L7.30532 15.8288H24.3259C24.3259 15.0817 26.6803 12 30.4572 12C33.4787 12 35.4113 14.3658 35.9999 15.5486H30.7515L28.9857 18.1634L30.7515 20.7782H35.9999C35.3459 21.8521 33.8417 24 30.4572 24C27.5927 24 25.5358 22.1012 24.8655 21.1518Z"
                fill="#F8EDE3"
              />
              <path
                d="M27.0408 30.9243L46.7851 31.3078L45 36.5L27.5759 36.3893C27.5759 37.1564 25.2412 40.3203 21.4961 40.3203C18.5 40.3203 16.5836 37.8914 16 36.677L21.2043 36.677L22.9552 33.9924L21.2043 31.3078L16 31.3078C16.6485 30.2053 18.1401 28.0001 21.4961 28.0001C24.3366 28.0001 26.3761 29.9496 27.0408 30.9243Z"
                fill="#F8EDE3"
              />
            </svg>
            <span class="flex flex-col">
              <span class="font-montserrat text-2xl font-bold leading-none">
                <span class="text-white">Easy</span><span class="text-brass-light">Fix</span>
              </span>
              <span class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 mt-1.5">Appliance Repair</span>
            </span>
          </NuxtLink>

          <p class="font-display italic text-xl text-white/80 mb-4">
            Service worthy of your appliances.
          </p>
          <p class="text-sm text-white/50 leading-relaxed mb-8 max-w-md">
            Your trusted partner for luxury appliance repair in the San Francisco Bay Area.
            We specialize in Sub-Zero, Wolf, Viking, Thermador, and other premium brands
            with certified technicians and genuine OEM parts.
          </p>

          <!-- Contact rows -->
          <div class="space-y-1">
            <a href="tel:4159414144" class="group flex items-center gap-3 py-1.5 text-white/80 hover:text-brass-light transition-colors touch-manipulation">
              <svg class="w-4 h-4 text-brass" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span class="text-sm font-medium">(415) 941-4144</span>
            </a>
            <a href="mailto:care@easyfixappliance.com" class="group flex items-center gap-3 py-1.5 text-white/80 hover:text-brass-light transition-colors touch-manipulation">
              <svg class="w-4 h-4 text-brass" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span class="text-sm font-medium break-all">care@easyfixappliance.com</span>
            </a>
            <div class="flex items-center gap-3 py-1.5 text-white/50">
              <svg class="w-4 h-4 text-brass" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm">San Francisco Bay Area</span>
            </div>
          </div>
        </div>

        <!-- Quick links -->
        <nav aria-label="Footer quick links">
          <h3 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-5">Quick Links</h3>
          <ul class="space-y-1">
            <li v-for="link in quickLinks" :key="link.label">
              <NuxtLink :to="link.to" class="inline-block py-1.5 text-sm text-white/70 hover:text-brass-light transition-colors touch-manipulation">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Resources -->
        <nav aria-label="Footer resources">
          <h3 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-5">Resources</h3>
          <ul class="space-y-1">
            <li v-for="link in resourceLinks" :key="link.label">
              <NuxtLink :to="link.to" class="inline-block py-1.5 text-sm text-white/70 hover:text-brass-light transition-colors touch-manipulation">
                {{ link.label }}
              </NuxtLink>
            </li>
            <li>
              <button
                data-modal-target="privacy-modal"
                data-modal-toggle="privacy-modal"
                class="inline-block py-1.5 text-sm text-white/70 hover:text-brass-light transition-colors text-left touch-manipulation"
                type="button"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <a href="/sitemap.xml" class="inline-block py-1.5 text-sm text-white/70 hover:text-brass-light transition-colors touch-manipulation">
                Sitemap
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Hours + assurances strip -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 py-8 mb-8">
        <div>
          <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-3">Business Hours</h4>
          <p class="text-sm text-white/70">Monday &ndash; Friday, 8:00 AM &ndash; 8:00 PM</p>
          <p class="text-sm text-brass-light font-medium mt-1">Same-Day &amp; After-Hours Service Available</p>
        </div>
        <div>
          <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-3">Why Choose Us</h4>
          <ul class="space-y-1.5">
            <li v-for="point in assurances" :key="point" class="flex items-center gap-3 text-sm text-white/70">
              <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
              {{ point }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 pt-7">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div class="text-xs text-white/40">
            &copy; 2026 <span class="text-white/70 font-medium">Easy Fix Appliance&trade;</span>. All Rights Reserved.
          </div>

          <div class="flex flex-wrap items-center gap-x-7 gap-y-4">
            <div class="flex items-center gap-3">
              <a
                href="https://www.instagram.com/easyfixappliance/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Easy Fix Appliance on Instagram"
                class="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-brass hover:text-brass-light"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.141 0-3.503.012-4.74.068-.93.042-1.435.196-1.77.325-.445.173-.762.379-1.096.713-.334.334-.54.651-.713 1.096-.13.336-.283.84-.325 1.77-.057 1.238-.068 1.6-.068 4.74s.012 3.503.068 4.74c.042.93.196 1.435.325 1.77.173.445.379.762.713 1.096.334.334.651.54 1.096.713.336.13.84.283 1.77.325 1.238.057 1.6.068 4.74.068s3.503-.012 4.74-.068c.93-.042 1.435-.196 1.77-.325.445-.173.762-.379 1.096-.713.334-.334.54-.651.713-1.096.13-.336.283-.84.325-1.77.057-1.238.068-1.6.068-4.74s-.012-3.503-.068-4.74c-.042-.93-.196-1.435-.325-1.77-.173-.445-.379-.762-.713-1.096-.334-.334-.651-.54-1.096-.713-.336-.13-.84-.283-1.77-.325-1.238-.057-1.6-.068-4.74-.068zm0 3.063A4.972 4.972 0 1 1 12 17a4.972 4.972 0 0 1 0-9.972zm0 8.2a3.229 3.229 0 1 0 0-6.457 3.229 3.229 0 0 0 0 6.457zm6.338-8.394a1.162 1.162 0 1 1-2.324 0 1.162 1.162 0 0 1 2.324 0z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61570244923151"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Easy Fix Appliance on Facebook"
                class="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-brass hover:text-brass-light"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.99 22 12z"/>
                </svg>
              </a>
            </div>
            <span class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Licensed &amp; Insured</span>
            <span class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Factory Certified</span>
          </div>
        </div>

        <!-- Developer credit — bottom right corner -->
        <div class="flex justify-end mt-6">
          <a
            href="https://sdsabirov.com"
            target="_blank"
            rel="noopener"
            class="group inline-flex items-center gap-1.5 text-[11px] text-white/35 hover:text-brass-light transition-colors"
          >
            Developed by
            <span class="font-medium text-white/55 group-hover:text-brass-light transition-colors">sdsabirov</span>
            <span class="text-brass/60 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Appliances', to: '/#services' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'Online Booking', to: '/booking' },
  { label: 'Careers', to: '/careers' },
]

const resourceLinks = [
  { label: 'Blogs', to: '/blogs' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Service Areas', to: '/areas' },
  { label: 'Repair Calculator', to: '/tools/repair-vs-replace' },
]

const assurances = [
  'Certified Technicians',
  'Genuine OEM Parts',
  'Same-Day Service Available',
]
</script>
