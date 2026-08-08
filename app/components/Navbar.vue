<template>
  <nav
    :class="[
      'fixed top-3 inset-x-3 lg:top-4 lg:inset-x-6 z-50 font-montserrat transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
      isHidden ? '-translate-y-[150%]' : 'translate-y-0'
    ]"
  >
    <!-- Floating capsule -->
    <div
      :class="[
        'max-w-screen-2xl mx-auto flex items-center justify-between gap-3 rounded-full pl-4 pr-2 lg:pl-6 lg:pr-2.5 py-2 transition-all duration-500 border backdrop-blur-2xl',
        onDark
          ? 'bg-ink/35 border-white/15'
          : 'bg-white/85 border-ink/10 shadow-[0_10px_40px_-12px_rgba(10,35,51,0.25)]'
      ]"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5 shrink-0 group">
        <svg
          width="34"
          height="34"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="rounded-full transition-transform duration-500 group-hover:rotate-[30deg]"
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
        <span class="flex flex-col leading-none">
          <span :class="['text-lg font-bold tracking-tight transition-colors duration-300', onDark ? 'text-white' : 'text-ink']">
            Easy<span class="text-brass">Fix</span>
          </span>
          <span :class="['text-[8.5px] font-semibold uppercase tracking-[0.28em] mt-1 transition-colors duration-300 hidden sm:block', onDark ? 'text-white/50' : 'text-ink/40']">
            Appliance Repair
          </span>
        </span>
      </NuxtLink>

      <!-- Desktop links -->
      <div class="hidden lg:flex items-center">
        <NuxtLink
          to="/"
          :class="[linkClass, route.path === '/' ? activeTextClass : idleTextClass]"
        >
          Home
          <span v-if="route.path === '/'" class="nav-dot" aria-hidden="true"></span>
        </NuxtLink>

        <!-- Services dropdown -->
        <div class="relative" @mouseenter="openDropdown('services')" @mouseleave="closeDropdown">
          <button :class="[linkClass, route.path.startsWith('/services') ? activeTextClass : idleTextClass]">
            Services
            <svg :class="['w-3.5 h-3.5 ml-1.5 transition-transform duration-300', activeDropdown === 'services' && 'rotate-180']" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
            <span v-if="route.path.startsWith('/services')" class="nav-dot" aria-hidden="true"></span>
          </button>
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
          >
            <div v-show="activeDropdown === 'services'" class="absolute top-full left-1/2 -translate-x-1/2 pt-3">
              <div class="w-64 bg-white rounded-3xl shadow-2xl shadow-ink/15 border border-ink/5 overflow-hidden p-2">
                <p class="px-4 pt-2.5 pb-1.5 text-[10px] font-semibold text-ink/35 uppercase tracking-[0.22em]">By Category</p>
                <NuxtLink
                  v-for="item in servicesDropdown.categories"
                  :key="item.label"
                  :to="item.link"
                  @click="closeDropdown"
                  class="group flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium text-gray-700 hover:bg-cream hover:text-brass-dark transition-colors"
                >
                  <component :is="item.icon" class="w-4 h-4 text-brass" />
                  {{ item.label }}
                </NuxtLink>
                <p class="px-4 pt-3 pb-1.5 text-[10px] font-semibold text-ink/35 uppercase tracking-[0.22em] border-t border-ink/5 mt-2">By Brand</p>
                <NuxtLink
                  v-for="item in servicesDropdown.brands"
                  :key="item.label"
                  :to="item.link"
                  @click="closeDropdown"
                  class="group flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium text-gray-700 hover:bg-cream hover:text-brass-dark transition-colors"
                >
                  <component :is="item.icon" class="w-4 h-4 text-brass" />
                  {{ item.label }}
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Locations dropdown -->
        <div class="relative" @mouseenter="openDropdown('locations')" @mouseleave="closeDropdown">
          <button :class="[linkClass, route.path.startsWith('/areas') ? activeTextClass : idleTextClass]">
            Locations
            <svg :class="['w-3.5 h-3.5 ml-1.5 transition-transform duration-300', activeDropdown === 'locations' && 'rotate-180']" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
            <span v-if="route.path.startsWith('/areas')" class="nav-dot" aria-hidden="true"></span>
          </button>
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
          >
            <div v-show="activeDropdown === 'locations'" class="absolute top-full left-1/2 -translate-x-1/2 pt-3">
              <div class="w-56 bg-white rounded-3xl shadow-2xl shadow-ink/15 border border-ink/5 overflow-hidden p-2">
                <NuxtLink
                  v-for="location in locationsDropdown"
                  :key="location.label"
                  :to="location.link"
                  @click="closeDropdown"
                  class="flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium text-gray-700 hover:bg-cream hover:text-brass-dark transition-colors"
                >
                  <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
                  {{ location.label }}
                </NuxtLink>
                <NuxtLink
                  to="/areas"
                  @click="closeDropdown"
                  class="flex items-center gap-3 px-4 py-2.5 mt-1 rounded-full text-sm font-semibold text-brass-dark hover:bg-cream transition-colors border-t border-ink/5"
                >
                  View All Areas
                  <span aria-hidden="true">&rarr;</span>
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>

        <NuxtLink
          to="/blogs"
          :class="[linkClass, route.path.startsWith('/blogs') ? activeTextClass : idleTextClass]"
        >
          Blog
          <span v-if="route.path.startsWith('/blogs')" class="nav-dot" aria-hidden="true"></span>
        </NuxtLink>

        <NuxtLink
          to="/tools/repair-vs-replace"
          :class="[linkClass, route.path.startsWith('/tools') ? activeTextClass : idleTextClass]"
        >
          Calculator
          <span v-if="route.path.startsWith('/tools')" class="nav-dot" aria-hidden="true"></span>
        </NuxtLink>

        <!-- More dropdown -->
        <div class="relative" @mouseenter="openDropdown('more')" @mouseleave="closeDropdown">
          <button :class="[linkClass, moreLinks.some(l => route.path === l.link) ? activeTextClass : idleTextClass]">
            More
            <svg :class="['w-3.5 h-3.5 ml-1.5 transition-transform duration-300', activeDropdown === 'more' && 'rotate-180']" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
          >
            <div v-show="activeDropdown === 'more'" class="absolute top-full right-0 pt-3">
              <div class="w-52 bg-white rounded-3xl shadow-2xl shadow-ink/15 border border-ink/5 overflow-hidden p-2">
                <NuxtLink
                  v-for="item in moreLinks"
                  :key="item.label"
                  :to="item.link"
                  @click="closeDropdown"
                  :class="[
                    'flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium transition-colors',
                    route.path === item.link ? 'bg-cream text-brass-dark' : 'text-gray-700 hover:bg-cream hover:text-brass-dark'
                  ]"
                >
                  <component :is="item.icon" class="w-4 h-4 text-brass" />
                  {{ item.label }}
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Right cluster -->
      <div class="flex items-center gap-1.5 sm:gap-2">
        <!-- Phone (desktop) -->
        <a
          href="tel:4159414144"
          :class="[
            'hidden lg:inline-flex items-center px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-300',
            onDark ? 'text-white/85 hover:text-brass-light' : 'text-ink hover:text-brass-dark'
          ]"
        >
          <svg class="w-3.5 h-3.5 mr-2 text-brass" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          <span class="hidden xl:inline">(415) 941-4144</span>
          <span class="xl:hidden">Call</span>
        </a>

        <!-- Book Now pill -->
        <NuxtLink
          to="/booking"
          class="inline-flex items-center rounded-full bg-brass px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-brass-dark hover:scale-[1.03]"
        >
          Book Now
        </NuxtLink>

        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          :class="[
            'lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300',
            onDark ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-ink/5'
          ]"
          aria-label="Toggle menu"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h10M4 17h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu (floating card below the capsule) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3 scale-[0.98]"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-3 scale-[0.98]"
    >
      <div
        v-show="mobileMenuOpen"
        class="lg:hidden mt-2 bg-white rounded-3xl shadow-2xl shadow-ink/25 border border-ink/5 max-h-[75vh] overflow-y-auto origin-top"
      >
        <div class="p-3 space-y-0.5">
          <NuxtLink
            to="/"
            @click="closeMobileMenu"
            class="block py-3 px-5 text-gray-800 font-medium rounded-full hover:bg-cream hover:text-brass-dark transition-colors"
          >
            Home
          </NuxtLink>

          <!-- Services accordion -->
          <div>
            <button
              @click="toggleMobileAccordion('services')"
              class="w-full flex items-center justify-between py-3 px-5 text-gray-800 font-medium rounded-full hover:bg-cream transition-colors"
            >
              <span>Services</span>
              <svg :class="['w-4 h-4 text-brass transition-transform duration-200', mobileAccordion === 'services' && 'rotate-180']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="mobileAccordion === 'services'" class="pl-5 pb-1 space-y-0.5">
              <NuxtLink
                v-for="item in [...servicesDropdown.categories, ...servicesDropdown.brands]"
                :key="item.label"
                :to="item.link"
                @click="closeMobileMenu"
                class="block py-2.5 px-5 text-sm text-gray-600 rounded-full hover:bg-cream hover:text-brass-dark transition-colors"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Locations accordion -->
          <div>
            <button
              @click="toggleMobileAccordion('locations')"
              class="w-full flex items-center justify-between py-3 px-5 text-gray-800 font-medium rounded-full hover:bg-cream transition-colors"
            >
              <span>Locations</span>
              <svg :class="['w-4 h-4 text-brass transition-transform duration-200', mobileAccordion === 'locations' && 'rotate-180']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="mobileAccordion === 'locations'" class="pl-5 pb-1 space-y-0.5">
              <NuxtLink
                v-for="location in locationsDropdown"
                :key="location.label"
                :to="location.link"
                @click="closeMobileMenu"
                class="block py-2.5 px-5 text-sm text-gray-600 rounded-full hover:bg-cream hover:text-brass-dark transition-colors"
              >
                {{ location.label }}
              </NuxtLink>
              <NuxtLink
                to="/areas"
                @click="closeMobileMenu"
                class="block py-2.5 px-5 text-sm font-semibold text-brass-dark rounded-full transition-colors"
              >
                View All Areas &rarr;
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            to="/blogs"
            @click="closeMobileMenu"
            class="block py-3 px-5 text-gray-800 font-medium rounded-full hover:bg-cream hover:text-brass-dark transition-colors"
          >
            Blog
          </NuxtLink>

          <NuxtLink
            to="/tools/repair-vs-replace"
            @click="closeMobileMenu"
            class="block py-3 px-5 text-gray-800 font-medium rounded-full hover:bg-cream hover:text-brass-dark transition-colors"
          >
            Repair Calculator
          </NuxtLink>

          <!-- More accordion -->
          <div>
            <button
              @click="toggleMobileAccordion('more')"
              class="w-full flex items-center justify-between py-3 px-5 text-gray-800 font-medium rounded-full hover:bg-cream transition-colors"
            >
              <span>More</span>
              <svg :class="['w-4 h-4 text-brass transition-transform duration-200', mobileAccordion === 'more' && 'rotate-180']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="mobileAccordion === 'more'" class="pl-5 pb-1 space-y-0.5">
              <NuxtLink
                v-for="item in moreLinks"
                :key="item.label"
                :to="item.link"
                @click="closeMobileMenu"
                class="block py-2.5 px-5 text-sm text-gray-600 rounded-full hover:bg-cream hover:text-brass-dark transition-colors"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Mobile CTAs -->
          <div class="pt-3 mt-2 space-y-2.5 border-t border-ink/5 px-2 pb-2">
            <a
              href="tel:4159414144"
              class="flex items-center justify-center w-full px-4 py-3.5 rounded-full bg-ink text-white font-semibold text-sm active:scale-[0.98] transition-transform touch-manipulation"
            >
              <svg class="w-4 h-4 mr-2 text-brass-light" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call (415) 941-4144
            </a>
            <NuxtLink
              to="/booking"
              @click="closeMobileMenu"
              class="flex items-center justify-center w-full px-4 py-3.5 rounded-full bg-brass text-white font-semibold text-sm active:scale-[0.98] transition-transform touch-manipulation"
            >
              Book Service Online
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, h } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// State
const isScrolled = ref(false);
const isHidden = ref(false);
const mobileMenuOpen = ref(false);
const activeDropdown = ref(null);
const mobileAccordion = ref(null);
let lastScrollY = 0;

// Dark glass state: only at the top of the homepage (over the hero video)
const onDark = computed(() => !isScrolled.value && route.path === "/" && !mobileMenuOpen.value);

// Shared link styling
const linkClass = "relative inline-flex items-center px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300";
const activeTextClass = computed(() => (onDark.value ? "text-white" : "text-ink font-semibold"));
const idleTextClass = computed(() => (onDark.value ? "text-white/75 hover:text-white" : "text-ink/70 hover:text-ink"));

// Icons as render functions
const SnowflakeIcon = () => h('svg', { class: 'w-4 h-4', fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M11 2v4.062A7.992 7.992 0 007.938 8H4v2h3.938A7.992 7.992 0 0011 12.062V16H9l3 4 3-4h-2v-3.938A7.992 7.992 0 0016.062 10H20V8h-3.938A7.992 7.992 0 0013 6.062V2h-2zm1 6a4 4 0 100 8 4 4 0 000-8z' })
]);

const FireIcon = () => h('svg', { class: 'w-4 h-4', fill: 'currentColor', viewBox: '0 0 20 20' }, [
  h('path', { 'fill-rule': 'evenodd', d: 'M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z', 'clip-rule': 'evenodd' })
]);

const WasherIcon = () => h('svg', { class: 'w-4 h-4', fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v3h12V4H6zm1 1h2v1H7V5zm4 0h2v1h-2V5zM6 9v11h12V9H6zm6 1a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z' })
]);

const StarIcon = () => h('svg', { class: 'w-4 h-4', fill: 'currentColor', viewBox: '0 0 20 20' }, [
  h('path', { d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' })
]);

const ListIcon = () => h('svg', { class: 'w-4 h-4', fill: 'currentColor', viewBox: '0 0 20 20' }, [
  h('path', { 'fill-rule': 'evenodd', d: 'M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z', 'clip-rule': 'evenodd' })
]);

const QuestionIcon = () => h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
]);

const EnvelopeIcon = () => h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
]);

const BriefcaseIcon = () => h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
]);

const moreLinks = [
  { label: 'FAQ', link: '/faq', icon: QuestionIcon },
  { label: 'Contact', link: '/contact-us', icon: EnvelopeIcon },
  { label: 'Careers', link: '/careers', icon: BriefcaseIcon },
];

// Dropdown Data
const servicesDropdown = {
  categories: [
    { label: 'Cooling Appliances', link: '/services?tab=cooling', icon: SnowflakeIcon },
    { label: 'Cooking Appliances', link: '/services?tab=cooking', icon: FireIcon },
    { label: 'Laundry & Dishwasher', link: '/services?tab=laundry', icon: WasherIcon },
  ],
  brands: [
    { label: 'Premium Brands', link: '/services', icon: StarIcon },
    { label: 'All Brands We Service', link: '/services/all-brands', icon: ListIcon },
  ]
};

// Area pages use underscore slugs (see pages/areas/[slug].vue serviceAreas keys)
const locationsDropdown = [
  { label: 'San Francisco', link: '/areas/san_francisco' },
  { label: 'San Mateo', link: '/areas/san_mateo' },
  { label: 'Palo Alto', link: '/areas/palo_alto' },
  { label: 'Mountain View', link: '/areas/mountain_view' },
];

// Handlers: smart navbar — hides on scroll down, reveals on scroll up
const handleScroll = () => {
  const y = window.scrollY;
  isScrolled.value = y > 50;

  if (mobileMenuOpen.value) {
    isHidden.value = false;
  } else if (y > lastScrollY + 6 && y > 140) {
    isHidden.value = true;
    activeDropdown.value = null;
  } else if (y < lastScrollY - 6 || y <= 140) {
    isHidden.value = false;
  }
  lastScrollY = y;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  if (!mobileMenuOpen.value) {
    mobileAccordion.value = null;
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  mobileAccordion.value = null;
};

const openDropdown = (name) => {
  activeDropdown.value = name;
};

const closeDropdown = () => {
  activeDropdown.value = null;
};

const toggleMobileAccordion = (name) => {
  mobileAccordion.value = mobileAccordion.value === name ? null : name;
};

// Close menu on route change
watch(() => route.path, () => {
  closeMobileMenu();
  closeDropdown();
});

// Lifecycle
onMounted(() => {
  lastScrollY = window.scrollY;
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.nav-dot {
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 4px;
  height: 4px;
  background-color: #B08D57;
}
</style>
