<script setup lang="ts">
const { phoneNumber, phoneDisplay, bookingUrl } = useContact()

// Desktop: Active tab
const activeTab = ref('cooling')

// Mobile: Expanded accordion sections (multiple can be open)
const expandedSections = ref<string[]>(['cooling'])

const toggleSection = (id: string) => {
  const index = expandedSections.value.indexOf(id)
  if (index > -1) {
    expandedSections.value.splice(index, 1)
  } else {
    expandedSections.value.push(id)
  }
}

const isExpanded = (id: string) => expandedSections.value.includes(id)

const categories = [
  { id: 'cooling', label: 'Cooling Appliances', icon: 'snowflake' },
  { id: 'cooking', label: 'Cooking Appliances', icon: 'fire' },
  { id: 'laundry', label: 'Laundry & Dishwasher', icon: 'washer' }
]

const services = {
  cooling: [
    {
      title: 'Refrigerator Repair',
      description: 'Expert repairs for built-in and freestanding refrigerators to keep your food fresh and safe.',
      link: '/services/refrigerator-repair',
      colorScheme: 'blue' as const,
      icon: 'refrigerator' as const
    },
    {
      title: 'Freezer Repair',
      description: 'Fast and effective freezer repairs to protect your frozen food and prevent spoilage.',
      link: '/services/freezer-repair',
      colorScheme: 'blue' as const,
      icon: 'freezer' as const
    },
    {
      title: 'Ice Maker Repair',
      description: 'Dependable repairs to ensure your ice maker produces fresh ice without interruptions.',
      link: '/services/ice-maker-repair',
      colorScheme: 'indigo' as const,
      icon: 'ice-maker' as const
    },
    {
      title: 'Under-Counter Fridge Repair',
      description: 'Specialized repairs for compact and built-in under-counter refrigerators.',
      link: '/services/under-counter-fridge-repair',
      colorScheme: 'green' as const,
      icon: 'under-counter' as const
    },
    {
      title: 'Wine Cooler Repair',
      description: 'Preserve your wine collection perfectly with our specialized wine cooler repair service.',
      link: '/services/wine-cooler-repair',
      colorScheme: 'purple' as const,
      icon: 'wine-cooler' as const
    },
    {
      title: 'Built-In Fridges Repair',
      description: 'High-end built-in fridge repair service with precision and original parts.',
      link: '/services/built-in-fridge-repair',
      colorScheme: 'gray' as const,
      icon: 'built-in-fridge' as const
    }
  ],
  cooking: [
    {
      title: 'Range Repair',
      description: 'Comprehensive repair solutions for all types of kitchen ranges, from gas to electric models.',
      link: '/services/range-repair',
      colorScheme: 'orange' as const,
      icon: 'range' as const
    },
    {
      title: 'Stove Repair',
      description: 'Safe and efficient stove repairs for all models and types with certified technician expertise.',
      link: '/services/stove-repair',
      colorScheme: 'red' as const,
      icon: 'stove' as const
    },
    {
      title: 'Oven Repair',
      description: 'Expert oven repairs for reliable and consistent cooking results with genuine OEM parts.',
      link: '/services/oven-repair',
      colorScheme: 'yellow' as const,
      icon: 'oven' as const
    },
    {
      title: 'Double Oven Repair',
      description: 'Specialized repairs for double ovens, ensuring even performance and optimal functionality.',
      link: '/services/double-oven-repair',
      colorScheme: 'purple' as const,
      icon: 'double-oven' as const
    },
    {
      title: 'Cooktop Repair',
      description: 'Efficient repair solutions for gas, electric, and induction cooktops with professional service.',
      link: '/services/cooktop-repair',
      colorScheme: 'blue' as const,
      icon: 'cooktop' as const
    }
  ],
  laundry: [
    {
      title: 'Washer Repair',
      description: 'Expert repairs for front load, top load, and all types of washing machines from major brands.',
      link: '/services/washer-repair',
      colorScheme: 'purple' as const,
      icon: 'washer' as const
    },
    {
      title: 'Dryer Repair',
      description: 'Fast and reliable repairs for gas and electric dryers to keep your laundry routine running smoothly.',
      link: '/services/dryer-repair',
      colorScheme: 'indigo' as const,
      icon: 'dryer' as const
    },
    {
      title: 'Dishwasher Repair',
      description: 'Professional repairs for built-in and portable dishwashers to restore sparkling clean dishes.',
      link: '/services/dishwasher-repair',
      colorScheme: 'pink' as const,
      icon: 'dishwasher' as const
    }
  ]
}

const currentServices = computed(() => services[activeTab.value as keyof typeof services])

const categoryColors = {
  cooling: {
    active: 'bg-blue-500 text-white',
    inactive: 'bg-white text-gray-700 hover:bg-blue-50',
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    icon: 'bg-blue-500'
  },
  cooking: {
    active: 'bg-orange-500 text-white',
    inactive: 'bg-white text-gray-700 hover:bg-orange-50',
    gradient: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
    icon: 'bg-orange-500'
  },
  laundry: {
    active: 'bg-purple-500 text-white',
    inactive: 'bg-white text-gray-700 hover:bg-purple-50',
    gradient: 'from-purple-500 to-violet-500',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
    icon: 'bg-purple-500'
  }
}

const currentColor = computed(() => categoryColors[activeTab.value as keyof typeof categoryColors])
</script>

<template>
  <section class="py-8 lg:py-16">
    <div class="container mx-auto px-4 max-w-screen-xl">

      <!-- ========== DESKTOP: Tabs ========== -->
      <div class="hidden md:block">
        <!-- Tabs Navigation -->
        <div class="flex justify-center gap-2 mb-10">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeTab = category.id"
            :class="[
              'px-5 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap relative',
              activeTab === category.id
                ? categoryColors[category.id as keyof typeof categoryColors].active + ' shadow-lg'
                : categoryColors[category.id as keyof typeof categoryColors].inactive + ' shadow-md'
            ]"
          >
            {{ category.label }}
            <span
              v-if="activeTab === category.id"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/50 rounded-full"
            ></span>
          </button>
        </div>

        <!-- "All Brands" Link -->
        <div class="text-center mb-8">
          <NuxtLink
            to="/services/all-brands"
            class="inline-flex items-center text-gray-600 hover:text-primary transition-colors duration-300 group"
          >
            <span>We also service all other major brands</span>
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Service Cards Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <TransitionGroup name="fade">
            <ServicesServiceCard
              v-for="service in currentServices"
              :key="service.title"
              :title="service.title"
              :description="service.description"
              :link="service.link"
              :color-scheme="service.colorScheme"
              :icon="service.icon"
            />
          </TransitionGroup>
        </div>
      </div>

      <!-- ========== MOBILE: Accordion ========== -->
      <div class="md:hidden space-y-3 mb-8">
        <div
          v-for="category in categories"
          :key="category.id"
          class="rounded-2xl overflow-hidden border"
          :class="[
            isExpanded(category.id)
              ? categoryColors[category.id as keyof typeof categoryColors].border
              : 'border-gray-200'
          ]"
        >
          <!-- Accordion Header -->
          <button
            @click="toggleSection(category.id)"
            class="w-full px-4 py-4 flex items-center justify-between transition-colors"
            :class="[
              isExpanded(category.id)
                ? categoryColors[category.id as keyof typeof categoryColors].bg
                : 'bg-white hover:bg-gray-50'
            ]"
          >
            <div class="flex items-center gap-3">
              <!-- Category Icon -->
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                :class="categoryColors[category.id as keyof typeof categoryColors].icon"
              >
                <svg v-if="category.id === 'cooling'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 3.011a1 1 0 01-1.732 1l-1.738-3.01-3.482 1.391V12h3.5a1 1 0 110 2h-3.5v3.098l3.482 1.391 1.738-3.01a1 1 0 011.732 1l-1.738 3.01 1.233.617a1 1 0 01-.894 1.79l-1.599-.8L11 19.677V21a1 1 0 11-2 0v-1.323l-3.954-1.582-1.599.8a1 1 0 01-.894-1.79l1.233-.616-1.738-3.011a1 1 0 111.732-1l1.738 3.01L9 14.098V12H5.5a1 1 0 110-2H9V6.902L5.518 5.511 3.78 8.521a1 1 0 11-1.732-1l1.738-3.01-1.233-.617a1 1 0 11.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1z"/>
                </svg>
                <svg v-else-if="category.id === 'cooking'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
                </svg>
                <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clip-rule="evenodd"/>
                </svg>
              </div>

              <div class="text-left">
                <span
                  class="font-bold text-base"
                  :class="isExpanded(category.id) ? categoryColors[category.id as keyof typeof categoryColors].text : 'text-gray-900'"
                >
                  {{ category.label }}
                </span>
                <span class="ml-2 text-sm text-gray-500">
                  ({{ services[category.id as keyof typeof services].length }})
                </span>
              </div>
            </div>

            <!-- Chevron -->
            <svg
              class="w-5 h-5 transition-transform duration-300"
              :class="[
                isExpanded(category.id) ? 'rotate-180' : '',
                isExpanded(category.id) ? categoryColors[category.id as keyof typeof categoryColors].text : 'text-gray-400'
              ]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Accordion Content -->
          <div
            v-show="isExpanded(category.id)"
            class="accordion-content"
          >
            <div class="grid grid-cols-2 gap-3 p-4 bg-white">
              <NuxtLink
                v-for="service in services[category.id as keyof typeof services]"
                :key="service.title"
                :to="service.link"
                class="block p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-center"
              >
                <span class="text-sm font-medium text-gray-800">{{ service.title.replace(' Repair', '') }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- "All Brands" Link for Mobile -->
        <div class="text-center pt-4">
          <NuxtLink
            to="/services/all-brands"
            class="inline-flex items-center text-gray-600 hover:text-primary transition-colors duration-300 group text-sm"
          >
            <span>We also service all other major brands</span>
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- ========== Shared CTA ========== -->
      <div class="text-center">
        <div :class="['bg-gradient-to-r rounded-3xl p-6 md:p-8 text-white', currentColor.gradient]">
          <div class="max-w-3xl mx-auto">
            <h3 class="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Need Expert Appliance Repair?
            </h3>
            <p class="text-sm md:text-lg text-white/90 mb-4 md:mb-6 leading-relaxed">
              Our certified technicians are ready to help. Fast, reliable service for all major brands.
            </p>

            <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <a
                :href="`tel:${phoneNumber}`"
                class="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg class="w-5 h-5 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                {{ phoneDisplay }}
              </a>

              <NuxtLink
                :to="bookingUrl"
                class="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg class="w-5 h-5 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
                </svg>
                Schedule Service
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Desktop tab transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Mobile accordion content */
.accordion-content {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}
</style>
