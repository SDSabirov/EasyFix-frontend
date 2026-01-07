<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
          <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
          </svg>
          <span class="text-primary font-semibold text-sm">Expert Repairs</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Professional Appliance Repair Services
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          From refrigeration to cooking appliances, our certified technicians provide comprehensive repair services for all major appliance types in your Bay Area home.
        </p>
      </div>

      <!-- ========== DESKTOP: 3-Column Grid ========== -->
      <div class="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="category in categories"
          :key="category.id"
          :class="[
            'rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl',
            categoryStyles[category.color].bg,
            categoryStyles[category.color].border
          ]"
        >
          <!-- Category Header -->
          <div class="flex items-center mb-6">
            <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center mr-4', categoryStyles[category.color].icon]">
              <component :is="getCategoryIcon(category.id)" class="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900">{{ category.title }}</h3>
              <p :class="['text-sm font-medium', categoryStyles[category.color].subtitle]">{{ category.subtitle }}</p>
            </div>
          </div>

          <!-- Service Items -->
          <div class="grid grid-cols-2 gap-3 mb-6">
            <NuxtLink
              v-for="service in category.services"
              :key="service.name"
              :to="service.link"
              class="group bg-white/70 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div class="flex items-center">
                <div :class="['w-10 h-10 rounded-lg flex items-center justify-center mr-3', categoryStyles[category.color].itemIcon]">
                  <component :is="getServiceIcon(service.icon)" :class="['w-5 h-5', categoryStyles[category.color].itemIconColor]" />
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors truncate">{{ service.name }}</h4>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- View All Link -->
          <NuxtLink
            :to="category.viewAllLink"
            :class="['inline-flex items-center text-sm font-semibold transition-colors group', categoryStyles[category.color].link]"
          >
            <span>View all {{ category.id }} services</span>
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- ========== MOBILE: Accordion ========== -->
      <div class="md:hidden space-y-3 mb-12">
        <div
          v-for="category in categories"
          :key="category.id"
          class="rounded-2xl overflow-hidden border transition-colors"
          :class="[
            isExpanded(category.id)
              ? categoryStyles[category.color].border
              : 'border-gray-200'
          ]"
        >
          <!-- Accordion Header -->
          <button
            @click="toggleSection(category.id)"
            class="w-full px-4 py-4 flex items-center justify-between transition-colors"
            :class="[
              isExpanded(category.id)
                ? categoryStyles[category.color].bgLight
                : 'bg-white hover:bg-gray-50'
            ]"
          >
            <div class="flex items-center gap-3">
              <div
                :class="['w-10 h-10 rounded-xl flex items-center justify-center text-white', categoryStyles[category.color].icon]"
              >
                <component :is="getCategoryIcon(category.id)" class="w-5 h-5" />
              </div>
              <div class="text-left">
                <span
                  class="font-bold text-base"
                  :class="isExpanded(category.id) ? categoryStyles[category.color].textColor : 'text-gray-900'"
                >
                  {{ category.title }}
                </span>
                <span class="ml-2 text-sm text-gray-500">
                  ({{ category.services.length }})
                </span>
              </div>
            </div>

            <svg
              class="w-5 h-5 transition-transform duration-300"
              :class="[
                isExpanded(category.id) ? 'rotate-180' : '',
                isExpanded(category.id) ? categoryStyles[category.color].textColor : 'text-gray-400'
              ]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
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
              <div class="grid grid-cols-2 gap-3 p-4 bg-white">
                <NuxtLink
                  v-for="service in category.services"
                  :key="service.name"
                  :to="service.link"
                  class="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div :class="['w-8 h-8 rounded-lg flex items-center justify-center', categoryStyles[category.color].itemIcon]">
                    <component :is="getServiceIcon(service.icon)" :class="['w-4 h-4', categoryStyles[category.color].itemIconColor]" />
                  </div>
                  <span class="text-sm font-medium text-gray-800">{{ service.name }}</span>
                </NuxtLink>
              </div>
              <div class="px-4 pb-4 bg-white">
                <NuxtLink
                  :to="category.viewAllLink"
                  :class="['inline-flex items-center text-sm font-semibold transition-colors', categoryStyles[category.color].link]"
                >
                  <span>View all</span>
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Service Features -->
      <div class="bg-gray-50 rounded-3xl p-8 mb-12">
        <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">
          Why Choose Our Appliance Repair Services?
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="feature in features" :key="feature.title" class="text-center group">
            <div class="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <component :is="feature.iconComponent" class="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2 text-sm md:text-base">{{ feature.title }}</h4>
            <p class="text-xs md:text-sm text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white relative overflow-hidden">
          <!-- Background pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 20px 20px;"></div>
          </div>

          <div class="max-w-3xl mx-auto relative z-10">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">
              Ready to Fix Your Appliance?
            </h3>
            <p class="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Don't let a broken appliance disrupt your daily routine. Our expert technicians are ready to diagnose and repair your appliances quickly and efficiently.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <!-- Call Button with shine effect -->
              <a
                href="tel:4159414144"
                class="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden"
              >
                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <svg class="w-6 h-6 mr-3 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span class="relative z-10">Call Now: (415) 941-4144</span>
              </a>

              <!-- View All Services Button with fill effect -->
              <NuxtLink
                to="/services"
                class="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <span class="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <svg class="w-6 h-6 mr-3 relative z-10 transition-colors group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span class="relative z-10 transition-colors group-hover:text-primary">View All Services</span>
                <svg class="w-5 h-5 ml-2 relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
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

// Category styles
const categoryStyles = {
  blue: {
    bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
    bgLight: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'bg-blue-600',
    subtitle: 'text-blue-700',
    textColor: 'text-blue-600',
    itemIcon: 'bg-blue-100',
    itemIconColor: 'text-blue-600',
    link: 'text-blue-600 hover:text-blue-700'
  },
  orange: {
    bg: 'bg-gradient-to-br from-orange-50 to-orange-100',
    bgLight: 'bg-orange-50',
    border: 'border-orange-200',
    icon: 'bg-orange-600',
    subtitle: 'text-orange-700',
    textColor: 'text-orange-600',
    itemIcon: 'bg-orange-100',
    itemIconColor: 'text-orange-600',
    link: 'text-orange-600 hover:text-orange-700'
  },
  purple: {
    bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
    bgLight: 'bg-purple-50',
    border: 'border-purple-200',
    icon: 'bg-purple-600',
    subtitle: 'text-purple-700',
    textColor: 'text-purple-600',
    itemIcon: 'bg-purple-100',
    itemIconColor: 'text-purple-600',
    link: 'text-purple-600 hover:text-purple-700'
  }
}

// Categories data
const categories = [
  {
    id: 'refrigeration',
    title: 'Refrigeration Services',
    subtitle: 'Keep your food fresh & safe',
    color: 'blue',
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
    color: 'orange',
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
    color: 'purple',
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
