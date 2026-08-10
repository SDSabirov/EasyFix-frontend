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
  { id: 'cooling', label: 'Cooling Appliances' },
  { id: 'cooking', label: 'Cooking Appliances' },
  { id: 'laundry', label: 'Laundry & Dishwasher' }
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
      description: 'High-end Built-In Fridge repair service with precision and original parts.',
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
</script>

<template>
  <div class="pt-10 lg:pt-14">
    <div class="container mx-auto px-4 max-w-screen-xl">

      <!-- ========== DESKTOP: Tabs ========== -->
      <div class="hidden md:block">
        <!-- Tabs Navigation -->
        <div class="flex justify-center gap-3 mb-8">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeTab = category.id"
            :aria-pressed="activeTab === category.id"
            :class="[
              'inline-flex items-center gap-2.5 min-h-[48px] px-7 py-3 rounded-full font-montserrat text-[12px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 whitespace-nowrap',
              activeTab === category.id
                ? 'bg-ink text-white shadow-lg shadow-ink/20'
                : 'bg-white text-primary border border-primary/15 hover:border-brass hover:text-brass-dark hover:scale-[1.03]'
            ]"
          >
            <span
              class="w-1 h-1 rotate-45 shrink-0"
              :class="activeTab === category.id ? 'bg-brass-light' : 'bg-brass'"
              aria-hidden="true"
            ></span>
            {{ category.label }}
          </button>
        </div>

        <!-- "All Brands" Link -->
        <div class="text-center mb-10">
          <NuxtLink
            to="/services/all-brands"
            class="group inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:text-brass-dark transition-colors"
          >
            We also service all other major brands
            <span class="flex items-center justify-center w-8 h-8 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&rarr;</span>
          </NuxtLink>
        </div>

        <!-- Service Cards Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14">
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
      <div class="md:hidden mb-12">
        <div class="border-t border-primary/10 mb-8">
          <div
            v-for="(category, index) in categories"
            :key="category.id"
            class="border-b border-primary/10"
          >
            <!-- Accordion Header -->
            <button
              @click="toggleSection(category.id)"
              :aria-expanded="isExpanded(category.id)"
              class="w-full py-5 flex items-center justify-between text-left"
            >
              <span class="flex items-center gap-4">
                <span class="font-display text-base text-brass" aria-hidden="true">0{{ index + 1 }}</span>
                <span class="font-display font-semibold text-xl text-primary">{{ category.label }}</span>
                <span class="text-sm text-gray-400">({{ services[category.id as keyof typeof services].length }})</span>
              </span>

              <!-- Chevron -->
              <svg
                class="w-5 h-5 text-brass transition-transform duration-300"
                :class="isExpanded(category.id) ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Accordion Content -->
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-show="isExpanded(category.id)" class="overflow-hidden">
                <div class="grid grid-cols-2 gap-2.5 pb-5">
                  <NuxtLink
                    v-for="service in services[category.id as keyof typeof services]"
                    :key="service.title"
                    :to="service.link"
                    class="inline-flex items-center justify-center rounded-full border border-primary/15 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 text-center transition-all duration-300 hover:bg-ink hover:text-white hover:border-ink"
                  >
                    {{ service.title.replace(' Repair', '') }}
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- "All Brands" Link for Mobile -->
        <div class="text-center">
          <NuxtLink
            to="/services/all-brands"
            class="group inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:text-brass-dark transition-colors"
          >
            We also service all other major brands
            <span class="flex items-center justify-center w-8 h-8 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&rarr;</span>
          </NuxtLink>
        </div>
      </div>

      <!-- ========== Shared CTA ========== -->
      <div class="grain glow-brass relative bg-ink rounded-[2rem] px-6 py-12 sm:px-12 sm:py-14 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
        <div class="relative z-10 max-w-3xl mx-auto text-center">
          <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-white leading-tight mb-4">
            Need Expert
            <em class="font-display font-semibold italic text-brass-light">Appliance Repair?</em>
          </h3>
          <p class="text-white/60 leading-relaxed mb-8">
            Our certified technicians are ready to help. Fast, reliable service for all major brands.
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
    </div>
  </div>
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
</style>
