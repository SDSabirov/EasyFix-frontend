<template>
  <nav
    :class="[
      'fixed w-full z-50 top-0 start-0 font-montserrat transition-all duration-300',
      isScrolled || route.path !== '/'
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
        : 'bg-transparent'
    ]"
  >
    <div
      :class="[
        'w-full flex items-center justify-between px-4 lg:px-6 transition-all duration-300',
        isScrolled ? 'py-2' : 'py-3 lg:py-4'
      ]"
    >
      <!-- Logo Section -->
      <NuxtLink to="/" class="flex items-center space-x-2 group flex-shrink-0">
        <div class="relative">
          <svg
            width="36"
            height="36"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full transition-transform duration-300 group-hover:scale-110"
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

        <div class="flex flex-col">
          <div class="flex items-baseline">
            <span
              :class="[
                'text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300',
                isScrolled || route.path !== '/' ? 'text-primary' : 'text-white'
              ]"
            >Easy</span>
            <span
              :class="[
                'text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300',
                isScrolled || route.path !== '/' ? 'text-secondary' : 'text-tertiary'
              ]"
            >Fix</span>
          </div>
          <span
            :class="[
              'text-xs font-medium transition-colors duration-300 hidden sm:block',
              isScrolled || route.path !== '/' ? 'text-gray-500' : 'text-white/80'
            ]"
          >
            Appliance Repair
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-1">
        <!-- Home -->
        <NuxtLink
          to="/"
          :class="[
            'relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group',
            isScrolled || route.path !== '/'
              ? 'text-gray-700 hover:text-primary hover:bg-gray-50'
              : 'text-white/90 hover:text-white hover:bg-white/10',
            route.path === '/' && 'font-semibold'
          ]"
        >
          <span>Home</span>
          <span
            :class="[
              'absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left',
              route.path === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            ]"
          ></span>
        </NuxtLink>

        <!-- Services Dropdown -->
        <div
          class="relative"
          @mouseenter="openDropdown('services')"
          @mouseleave="closeDropdown"
        >
          <button
            :class="[
              'flex items-center px-4 py-2 font-medium transition-all duration-300 rounded-lg group',
              isScrolled || route.path !== '/'
                ? 'text-gray-700 hover:text-primary hover:bg-gray-50'
                : 'text-white/90 hover:text-white hover:bg-white/10',
              route.path.startsWith('/services') && 'font-semibold'
            ]"
          >
            <span>Services</span>
            <svg
              :class="[
                'w-4 h-4 ml-1 transition-transform duration-200',
                activeDropdown === 'services' && 'rotate-180'
              ]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- Services Dropdown Menu -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
          >
            <div
              v-show="activeDropdown === 'services'"
              class="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div class="p-2">
                <p class="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">By Category</p>
                <NuxtLink
                  v-for="item in servicesDropdown.categories"
                  :key="item.label"
                  :to="item.link"
                  @click="closeDropdown"
                  class="flex items-center px-3 py-2.5 rounded-xl text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors group"
                >
                  <span class="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center mr-3 transition-colors">
                    <component :is="item.icon" class="w-4 h-4" />
                  </span>
                  <span class="font-medium">{{ item.label }}</span>
                </NuxtLink>
              </div>
              <div class="border-t border-gray-100 p-2">
                <p class="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">By Brand</p>
                <NuxtLink
                  v-for="item in servicesDropdown.brands"
                  :key="item.label"
                  :to="item.link"
                  @click="closeDropdown"
                  class="flex items-center px-3 py-2.5 rounded-xl text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors group"
                >
                  <span class="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center mr-3 transition-colors">
                    <component :is="item.icon" class="w-4 h-4" />
                  </span>
                  <span class="font-medium">{{ item.label }}</span>
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Locations Dropdown -->
        <div
          class="relative"
          @mouseenter="openDropdown('locations')"
          @mouseleave="closeDropdown"
        >
          <button
            :class="[
              'flex items-center px-4 py-2 font-medium transition-all duration-300 rounded-lg group',
              isScrolled || route.path !== '/'
                ? 'text-gray-700 hover:text-primary hover:bg-gray-50'
                : 'text-white/90 hover:text-white hover:bg-white/10',
              route.path.startsWith('/areas') && 'font-semibold'
            ]"
          >
            <span>Locations</span>
            <svg
              :class="[
                'w-4 h-4 ml-1 transition-transform duration-200',
                activeDropdown === 'locations' && 'rotate-180'
              ]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- Locations Dropdown Menu -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
          >
            <div
              v-show="activeDropdown === 'locations'"
              class="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div class="p-2">
                <NuxtLink
                  v-for="location in locationsDropdown"
                  :key="location.label"
                  :to="location.link"
                  @click="closeDropdown"
                  class="flex items-center px-3 py-2.5 rounded-xl text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span class="font-medium">{{ location.label }}</span>
                </NuxtLink>
                <div class="border-t border-gray-100 mt-2 pt-2">
                  <NuxtLink
                    to="/areas"
                    @click="closeDropdown"
                    class="flex items-center px-3 py-2.5 rounded-xl text-primary hover:bg-primary/5 transition-colors font-medium"
                  >
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                    </svg>
                    View All Areas
                  </NuxtLink>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Blog -->
        <NuxtLink
          to="/blogs"
          :class="[
            'relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group',
            isScrolled || route.path !== '/'
              ? 'text-gray-700 hover:text-primary hover:bg-gray-50'
              : 'text-white/90 hover:text-white hover:bg-white/10',
            route.path.startsWith('/blogs') && 'font-semibold'
          ]"
        >
          <span>Blog</span>
          <span
            :class="[
              'absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left',
              route.path.startsWith('/blogs') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            ]"
          ></span>
        </NuxtLink>

        <!-- FAQ -->
        <NuxtLink
          to="/faq"
          :class="[
            'relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group',
            isScrolled || route.path !== '/'
              ? 'text-gray-700 hover:text-primary hover:bg-gray-50'
              : 'text-white/90 hover:text-white hover:bg-white/10',
            route.path === '/faq' && 'font-semibold'
          ]"
        >
          <span>FAQ</span>
          <span
            :class="[
              'absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left',
              route.path === '/faq' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            ]"
          ></span>
        </NuxtLink>

        <!-- Contact -->
        <NuxtLink
          to="/contact-us"
          :class="[
            'relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group',
            isScrolled || route.path !== '/'
              ? 'text-gray-700 hover:text-primary hover:bg-gray-50'
              : 'text-white/90 hover:text-white hover:bg-white/10',
            route.path === '/contact-us' && 'font-semibold'
          ]"
        >
          <span>Contact</span>
          <span
            :class="[
              'absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left',
              route.path === '/contact-us' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            ]"
          ></span>
        </NuxtLink>
      </div>

      <!-- CTA Buttons -->
      <div class="hidden lg:flex items-center space-x-3">
        <!-- Call Button -->
        <a
          href="tel:4159414144"
          class="group relative inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-primary via-primary to-secondary text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
        >
          <!-- Shine effect -->
          <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

          <!-- Pulse ring on hover -->
          <span class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span class="absolute inset-0 rounded-xl animate-ping bg-primary/20"></span>
          </span>

          <svg class="w-4 h-4 mr-2 relative z-10 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          <span class="relative z-10 hidden xl:inline">(415) 941-4144</span>
          <span class="relative z-10 xl:hidden">Call Us</span>
        </a>

        <!-- Book Now Button -->
        <NuxtLink
          to="/booking"
          class="group relative inline-flex items-center px-5 py-2.5 bg-white border-2 border-primary text-primary font-semibold rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
        >
          <!-- Background fill on hover -->
          <span class="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

          <svg class="w-4 h-4 mr-2 relative z-10 transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <span class="relative z-10 transition-colors duration-300 group-hover:text-white">Book Now</span>

          <!-- Arrow indicator -->
          <svg class="w-4 h-4 ml-1 relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="lg:hidden p-2.5 rounded-xl transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
        :class="isScrolled || route.path !== '/' ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-show="mobileMenuOpen"
        class="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute top-full left-0 right-0 max-h-[80vh] overflow-y-auto"
      >
        <div class="p-4 space-y-1">
          <!-- Home -->
          <NuxtLink
            to="/"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary rounded-xl transition-colors"
          >
            Home
          </NuxtLink>

          <!-- Services Accordion -->
          <div class="rounded-xl overflow-hidden">
            <button
              @click="toggleMobileAccordion('services')"
              class="w-full flex items-center justify-between py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 rounded-xl transition-colors"
            >
              <span>Services</span>
              <svg
                :class="['w-5 h-5 transition-transform duration-200', mobileAccordion === 'services' && 'rotate-180']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="mobileAccordion === 'services'" class="pl-4 pb-2 space-y-1">
              <NuxtLink
                v-for="item in [...servicesDropdown.categories, ...servicesDropdown.brands]"
                :key="item.label"
                :to="item.link"
                @click="closeMobileMenu"
                class="block py-2.5 px-4 text-gray-600 hover:text-primary rounded-lg transition-colors"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Locations Accordion -->
          <div class="rounded-xl overflow-hidden">
            <button
              @click="toggleMobileAccordion('locations')"
              class="w-full flex items-center justify-between py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 rounded-xl transition-colors"
            >
              <span>Locations</span>
              <svg
                :class="['w-5 h-5 transition-transform duration-200', mobileAccordion === 'locations' && 'rotate-180']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="mobileAccordion === 'locations'" class="pl-4 pb-2 space-y-1">
              <NuxtLink
                v-for="location in locationsDropdown"
                :key="location.label"
                :to="location.link"
                @click="closeMobileMenu"
                class="block py-2.5 px-4 text-gray-600 hover:text-primary rounded-lg transition-colors"
              >
                {{ location.label }}
              </NuxtLink>
              <NuxtLink
                to="/areas"
                @click="closeMobileMenu"
                class="block py-2.5 px-4 text-primary font-medium rounded-lg transition-colors"
              >
                View All Areas
              </NuxtLink>
            </div>
          </div>

          <!-- Blog -->
          <NuxtLink
            to="/blogs"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary rounded-xl transition-colors"
          >
            Blog
          </NuxtLink>

          <!-- FAQ -->
          <NuxtLink
            to="/faq"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary rounded-xl transition-colors"
          >
            FAQ
          </NuxtLink>

          <!-- Contact -->
          <NuxtLink
            to="/contact-us"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary rounded-xl transition-colors"
          >
            Contact
          </NuxtLink>

          <!-- Mobile CTAs -->
          <div class="pt-4 space-y-3 border-t border-gray-100 mt-4">
            <a
              href="tel:4159414144"
              class="group relative flex items-center justify-center w-full px-4 py-4 bg-gradient-to-r from-primary via-primary to-secondary text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
            >
              <!-- Shine effect -->
              <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-500"></span>

              <svg class="w-5 h-5 mr-2 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span class="relative z-10">Call (415) 941-4144</span>
            </a>

            <NuxtLink
              to="/booking"
              @click="closeMobileMenu"
              class="group relative flex items-center justify-center w-full px-4 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-xl overflow-hidden active:scale-[0.98] transition-transform"
            >
              <!-- Background fill on tap -->
              <span class="absolute inset-0 bg-primary/5"></span>

              <svg class="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="relative z-10">Book Service Online</span>
              <svg class="w-4 h-4 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, h } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// State
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
const activeDropdown = ref(null);
const mobileAccordion = ref(null);

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

const locationsDropdown = [
  { label: 'San Francisco', link: '/areas/san-francisco' },
  { label: 'San Mateo', link: '/areas/san-mateo' },
  { label: 'Palo Alto', link: '/areas/palo-alto' },
  { label: 'Mountain View', link: '/areas/mountain-view' },
];

// Handlers
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
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
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
