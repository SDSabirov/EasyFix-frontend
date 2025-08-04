<template>
  <nav
    :class="[
      'transition-all duration-500 fixed w-full z-50 top-0 start-0 font-montserrat overflow-hidden',
      route.path !== '/' 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
    ]"
    style="max-width: 100vw !important; min-width: auto !important;"
  >
    <div class="w-full flex items-center justify-between px-3 sm:px-4 py-3 max-w-full overflow-hidden" style="box-sizing: border-box !important;">
      <!-- Logo Section -->
      <NuxtLink to="/" class="flex items-center space-x-1 sm:space-x-2 group flex-shrink-0 min-w-0">
        <div class="relative">
          <svg
            width="36"
            height="36"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full transition-transform duration-300 group-hover:scale-110"
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
        </div>
        
        <div class="flex flex-col min-w-0">
          <div class="flex items-baseline">
            <span 
              :class="[
                'text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300',
                route.path !== '/' || isScrolled ? 'text-primary' : 'text-white'
              ]"
            >Easy</span>
            <span 
              :class="[
                'text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300',
                route.path !== '/' || isScrolled ? 'text-secondary' : 'text-tertiary'
              ]"
            >Fix</span>
          </div>
          <span 
            :class="[
              'text-xs font-medium transition-colors duration-300 truncate max-w-[100px] sm:max-w-none',
              route.path !== '/' || isScrolled ? 'text-gray-600' : 'text-white/90'
            ]"
          >
            <span class="hidden sm:inline">Appliance </span>Repair
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-8">
        <nav class="flex space-x-8">
          <NuxtLink
            to="/"
            :class="[
              'relative py-2 px-1 font-medium transition-all duration-300 hover:scale-105',
              route.path !== '/' || isScrolled 
                ? 'text-gray-700 hover:text-primary' 
                : 'text-white hover:text-tertiary'
            ]"
          >
            <span>Home</span>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </NuxtLink>
          
          
          <NuxtLink
            to="/services"
            :class="[
              'relative py-2 px-1 font-medium transition-all duration-300 hover:scale-105',
              route.path !== '/' || isScrolled 
                ? 'text-gray-700 hover:text-primary' 
                : 'text-white hover:text-tertiary'
            ]"
          >
            <span>Services</span>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </NuxtLink>
          
          <NuxtLink
            to="/areas"
            :class="[
              'relative py-2 px-1 font-medium transition-all duration-300 hover:scale-105',
              route.path !== '/' || isScrolled 
                ? 'text-gray-700 hover:text-primary' 
                : 'text-white hover:text-tertiary'
            ]"
          >
            <span>Locations</span>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </NuxtLink>
          
          <NuxtLink
            to="/contact-us"
            :class="[
              'relative py-2 px-1 font-medium transition-all duration-300 hover:scale-105',
              route.path !== '/' || isScrolled 
                ? 'text-gray-700 hover:text-primary' 
                : 'text-white hover:text-tertiary'
            ]"
          >
            <span>Contact</span>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </NuxtLink>
        </nav>
        
        <!-- CTA Buttons -->
        <div class="flex items-center space-x-3">
          <a
            href="tel:4159414144"
            class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span class="hidden xl:inline">(415) 941-4144</span>
            <span class="xl:hidden">Call</span>
          </a>
          
          <NuxtLink
            to="/booking"
            class="inline-flex items-center px-4 py-2 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
            </svg>
            Book Now
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="lg:hidden p-2 sm:p-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] touch-manipulation flex-shrink-0"
        :class="route.path !== '/' || isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/10'"
      >
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="mobileMenuOpen"
      class="lg:hidden bg-white border-t border-gray-200 shadow-lg w-full absolute top-full left-0 right-0 z-50"
    >
      <div class="px-3 sm:px-4 py-6 space-y-4 w-full overflow-hidden">
        <NuxtLink
          to="/"
          @click="closeMobileMenu"
          class="block py-4 px-4 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-300 min-h-[48px] touch-manipulation text-base"
        >
          Home
        </NuxtLink>
        
        
        <NuxtLink
          to="/services"
          @click="closeMobileMenu"
          class="block py-4 px-4 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-300 min-h-[48px] touch-manipulation text-base"
        >
          Services
        </NuxtLink>
        
        <NuxtLink
          to="/areas"
          @click="closeMobileMenu"
          class="block py-4 px-4 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-300 min-h-[48px] touch-manipulation text-base"
        >
          Locations
        </NuxtLink>
        
        <NuxtLink
          to="/contact-us"
          @click="closeMobileMenu"
          class="block py-4 px-4 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-300 min-h-[48px] touch-manipulation text-base"
        >
          Contact
        </NuxtLink>
        
        <!-- Mobile CTA Buttons -->
        <div class="pt-4 space-y-3">
          <a
            href="tel:4159414144"
            class="flex items-center justify-center w-full px-4 py-4 min-h-[48px] bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 touch-manipulation text-base"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            Call (415) 941-4144
          </a>
          
          <NuxtLink
            to="/booking"
            @click="closeMobileMenu"
            class="flex items-center justify-center w-full px-4 py-4 min-h-[48px] border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 touch-manipulation text-base"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
            </svg>
            Book Service Online
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

// Reactive state
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
const route = useRoute(); 

// Function to handle scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Mobile menu functions
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>