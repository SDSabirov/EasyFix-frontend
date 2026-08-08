<template>
  <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <!-- Header -->
      <div class="relative mb-12 lg:mb-16">
        <span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 lg:-top-10 -right-4" aria-hidden="true">Repairs</span>
        <div class="relative z-10 max-w-3xl" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Expert Repairs
          </span>
          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
            Professional Appliance
            <em class="font-display font-semibold italic text-brass-dark">Repair Services</em>
          </h2>
          <p class="text-gray-600 leading-relaxed">
            From refrigeration to cooking appliances, our certified technicians provide comprehensive repair
            services for all major appliance types in your Bay Area home.
          </p>
        </div>
      </div>

      <!-- ========== DESKTOP: 3-Column Grid ========== -->
      <div class="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 lg:mb-20">
        <div
          v-for="(category, index) in categories"
          :key="category.id"
          class="group/card relative rounded-[1.75rem] p-8 lg:p-9 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
          :class="tints[category.id]"
          v-reveal="index * 120"
        >
          <!-- Category header -->
          <div class="flex items-start justify-between mb-6">
            <span class="font-display font-semibold text-6xl text-primary/10 leading-none transition-colors duration-500 group-hover/card:text-brass/30" aria-hidden="true">0{{ index + 1 }}</span>
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm">
              <component :is="getCategoryIcon(category.id)" class="w-5 h-5 text-brass-dark" aria-hidden="true" />
            </span>
          </div>
          <h3 class="font-montserrat font-bold tracking-[-0.01em] text-2xl text-primary mb-1">{{ category.title }}</h3>
          <p class="font-montserrat text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 mb-7">{{ category.subtitle }}</p>

          <!-- Service chips -->
          <div class="flex flex-wrap gap-2.5 mb-8">
            <NuxtLink
              v-for="service in category.services"
              :key="service.name"
              :to="service.link"
              class="inline-flex items-center gap-2 rounded-full bg-white/80 border border-primary/10 px-4 py-2.5 text-sm font-medium text-gray-800 transition-all duration-300 hover:bg-ink hover:text-white hover:border-ink hover:scale-[1.04]"
            >
              <component :is="getServiceIcon(service.icon)" class="w-4 h-4 opacity-60" aria-hidden="true" />
              {{ service.name }}
            </NuxtLink>
          </div>

          <NuxtLink
            :to="category.viewAllLink"
            class="group inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-primary hover:text-brass-dark transition-colors"
          >
            View All {{ category.id }} Services
            <span class="flex items-center justify-center w-8 h-8 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&rarr;</span>
          </NuxtLink>
        </div>
      </div>

      <!-- ========== MOBILE: Accordion ========== -->
      <div class="md:hidden border-t border-primary/10 mb-14">
        <div v-for="(category, index) in categories" :key="category.id" class="border-b border-primary/10">
          <button
            @click="toggleSection(category.id)"
            class="w-full py-5 flex items-center justify-between text-left"
            :aria-expanded="isExpanded(category.id)"
          >
            <span class="flex items-center gap-4">
              <span class="font-display text-base text-brass" aria-hidden="true">0{{ index + 1 }}</span>
              <span class="font-display font-semibold text-xl text-primary">{{ category.title }}</span>
              <span class="text-sm text-gray-400">({{ category.services.length }})</span>
            </span>
            <svg
              class="w-5 h-5 text-brass transition-transform duration-300"
              :class="isExpanded(category.id) ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-show="isExpanded(category.id)" class="overflow-hidden">
              <ul class="pb-4">
                <li v-for="service in category.services" :key="service.name">
                  <NuxtLink
                    :to="service.link"
                    class="flex items-center gap-3 py-2.5 pl-9 text-sm font-medium text-gray-700"
                  >
                    <component :is="getServiceIcon(service.icon)" class="w-4 h-4 text-brass" aria-hidden="true" />
                    {{ service.name }}
                  </NuxtLink>
                </li>
                <li class="pl-9 pt-2">
                  <NuxtLink
                    :to="category.viewAllLink"
                    class="inline-flex items-center font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-dark"
                  >
                    View All
                    <span class="ml-2" aria-hidden="true">&rarr;</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Service assurances -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="group rounded-[1.25rem] border border-primary/10 bg-white px-5 py-6 lg:px-7 transition-all duration-300 hover:border-brass/50 hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-1"
          v-reveal="index * 80"
        >
          <span class="flex items-center justify-center w-11 h-11 rounded-full bg-cream mb-4 transition-colors duration-300 group-hover:bg-brass/15">
            <component :is="feature.iconComponent" class="w-5 h-5 text-brass-dark" aria-hidden="true" />
          </span>
          <h4 class="font-montserrat font-bold text-base text-primary mb-1">{{ feature.title }}</h4>
          <p class="text-xs sm:text-sm text-gray-500 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'

// Mobile accordion state
const expandedSections = ref(['refrigeration'])

const toggleSection = (id) => {
  const index = expandedSections.value.indexOf(id)
  if (index > -1) {
    expandedSections.value.splice(index, 1)
  } else {
    expandedSections.value.push(id)
  }
}

const isExpanded = (id) => expandedSections.value.includes(id)

// Soft background tints per category (desktop cards)
const tints = {
  refrigeration: 'bg-[#EDF4F7]',
  cooking: 'bg-[#F8F0E4]',
  laundry: 'bg-[#F3F1EC]',
}

// Categories data
const categories = [
  {
    id: 'refrigeration',
    title: 'Refrigeration Services',
    subtitle: 'Keep your food fresh & safe',
    viewAllLink: '/services?tab=cooling',
    services: [
      { name: 'Refrigerators', icon: 'refrigerator', link: '/services/refrigerator-repair' },
      { name: 'Freezers', icon: 'freezer', link: '/services/freezer-repair' },
      { name: 'Ice Makers', icon: 'ice-maker', link: '/services/ice-maker-repair' },
      { name: 'Wine Coolers', icon: 'wine-cooler', link: '/services/wine-cooler-repair' }
    ]
  },
  {
    id: 'cooking',
    title: 'Cooking Appliances',
    subtitle: 'Professional cooking solutions',
    viewAllLink: '/services?tab=cooking',
    services: [
      { name: 'Ranges', icon: 'range', link: '/services/range-repair' },
      { name: 'Ovens', icon: 'oven', link: '/services/oven-repair' },
      { name: 'Cooktops', icon: 'cooktop', link: '/services/cooktop-repair' },
      { name: 'Stoves', icon: 'stove', link: '/services/stove-repair' }
    ]
  },
  {
    id: 'laundry',
    title: 'Laundry & Dishwasher',
    subtitle: 'Complete cleaning solutions',
    viewAllLink: '/services?tab=laundry',
    services: [
      { name: 'Washers', icon: 'washer', link: '/services/washer-repair' },
      { name: 'Dryers', icon: 'dryer', link: '/services/dryer-repair' },
      { name: 'Dishwashers', icon: 'dishwasher', link: '/services/dishwasher-repair' }
    ]
  }
]

// Category icons
const getCategoryIcon = (id) => {
  const icons = {
    refrigeration: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M11 2h2v5.17l3.59-3.58 1.41 1.41L13 10h5v2h-5l5 5-1.41 1.41L13 14.83V20h-2v-5.17l-3.59 3.58L6 17l5-5H6v-2h5L6 5l1.41-1.41L11 7.17V2z' })
    ]),
    cooking: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z', 'clip-rule': 'evenodd' })
    ]),
    laundry: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v3h12V4H6zm1 1h2v1H7V5zm4 0h2v1h-2V5zM6 9v11h12V9H6zm6 1a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z' })
    ])
  }
  return icons[id]
}

// Service icons (matching ServiceCard.vue)
const getServiceIcon = (icon) => {
  const icons = {
    refrigerator: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v6h12V4H6zm0 8v8h12v-8H6zm2-6h2v3H8V6zm0 10h2v3H8v-3z' })
    ]),
    freezer: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M11 2h2v5.17l3.59-3.58 1.41 1.41L13 10h5v2h-5l5 5-1.41 1.41L13 14.83V20h-2v-5.17l-3.59 3.58L6 17l5-5H6v-2h5L6 5l1.41-1.41L11 7.17V2z' })
    ]),
    'ice-maker': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M4 4h6v6H4V4zm2 2v2h2V6H6zm8-2h6v6h-6V4zm2 2v2h2V6h-2zM4 14h6v6H4v-6zm2 2v2h2v-2H6zm8-2h6v6h-6v-6zm2 2v2h2v-2h-2z' })
    ]),
    'wine-cooler': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M12 2c1.1 0 2 .9 2 2v4c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2V4c0-1.1.9-2 2-2zm0 2h-1v4h2V4h-1zm-2 6v10h4V10h-4zm1 2h2v2h-2v-2zm0 4h2v2h-2v-2z' })
    ]),
    range: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M4 2h16a2 2 0 012 2v4H2V4a2 2 0 012-2zm2 2a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zM2 10h20v10a2 2 0 01-2 2H4a2 2 0 01-2-2V10zm3 2v6h14v-6H5z' })
    ]),
    oven: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v4h16V4H4zm2 1h2v2H6V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5zM4 10v10h16V10H4zm2 2h12v6H6v-6z' })
    ]),
    cooktop: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M2 6h20a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V8a2 2 0 012-2zm5 3a3 3 0 100 6 3 3 0 000-6zm0 2a1 1 0 110 2 1 1 0 010-2zm10-2a3 3 0 100 6 3 3 0 000-6zm0 2a1 1 0 110 2 1 1 0 010-2z' })
    ]),
    stove: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M12 2c.55 0 1 .45 1 1v2.07c1.09.1 2.09.46 2.96 1.01l1.46-1.46a1 1 0 011.42 1.42l-1.46 1.46c.55.87.91 1.87 1.01 2.96H20a1 1 0 110 2h-1.61c-.1 1.09-.46 2.09-1.01 2.96l1.46 1.46a1 1 0 01-1.42 1.42l-1.46-1.46c-.87.55-1.87.91-2.96 1.01V20a1 1 0 11-2 0v-1.61c-1.09-.1-2.09-.46-2.96-1.01l-1.46 1.46a1 1 0 01-1.42-1.42l1.46-1.46c-.55-.87-.91-1.87-1.01-2.96H4a1 1 0 110-2h1.61c.1-1.09.46-2.09 1.01-2.96L5.16 6.58a1 1 0 011.42-1.42l1.46 1.46c.87-.55 1.87-.91 2.96-1.01V3c0-.55.45-1 1-1zm0 6a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z' })
    ]),
    washer: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v3h12V4H6zm1 1h2v1H7V5zm4 0h2v1h-2V5zM6 9v11h12V9H6zm6 1a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z' })
    ]),
    dryer: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v3h12V4H6zm1 1h2v1H7V5zm4 0h2v1h-2V5zM6 9v11h12V9H6zm6 1a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm0 1c.83 0 1.5.67 1.5 1.5S12.83 15 12 15s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z' })
    ]),
    dishwasher: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v4h16V4H4zm2 1h2v2H6V5zm4 0h2v2h-2V5zM4 10v10h16V10H4zm3 2h10v2H7v-2zm0 4h10v2H7v-2z' })
    ])
  }
  return icons[icon] || icons.refrigerator
}

// Feature icons as render functions
const ClockIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
  h('path', { 'fill-rule': 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z', 'clip-rule': 'evenodd' })
])

const BadgeIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
  h('path', { 'fill-rule': 'evenodd', d: 'M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z', 'clip-rule': 'evenodd' })
])

const CubeIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
  h('path', { d: 'M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' })
])

const ShieldIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
  h('path', { 'fill-rule': 'evenodd', d: 'M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z', 'clip-rule': 'evenodd' })
])

const features = [
  {
    title: 'Same-Day Service',
    description: 'Fast response for urgent repairs',
    iconComponent: ClockIcon
  },
  {
    title: 'Certified Technicians',
    description: 'Trained on all major brands',
    iconComponent: BadgeIcon
  },
  {
    title: 'Genuine Parts',
    description: 'OEM parts for lasting repairs',
    iconComponent: CubeIcon
  },
  {
    title: 'Warranty Included',
    description: 'Peace of mind guarantee',
    iconComponent: ShieldIcon
  }
]
</script>
