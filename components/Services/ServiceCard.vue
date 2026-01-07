<script setup lang="ts">
interface Props {
  title: string
  description: string
  link: string
  colorScheme: 'blue' | 'cyan' | 'indigo' | 'green' | 'purple' | 'gray' | 'orange' | 'red' | 'yellow' | 'violet' | 'pink'
  icon?: 'refrigerator' | 'freezer' | 'ice-maker' | 'wine-cooler' | 'under-counter' | 'built-in-fridge' |
         'range' | 'stove' | 'oven' | 'double-oven' | 'cooktop' |
         'washer' | 'dryer' | 'dishwasher'
}

const props = defineProps<Props>()

const colorClasses = {
  blue: {
    bg: 'from-white to-blue-50',
    border: 'border-blue-100 hover:border-blue-200',
    icon: 'bg-blue-500',
    pulse: 'bg-blue-500',
    title: 'group-hover:text-blue-600',
    link: 'text-blue-600 group-hover:text-blue-700'
  },
  cyan: {
    bg: 'from-white to-cyan-50',
    border: 'border-cyan-100 hover:border-cyan-200',
    icon: 'bg-cyan-500',
    pulse: 'bg-cyan-500',
    title: 'group-hover:text-cyan-600',
    link: 'text-cyan-600 group-hover:text-cyan-700'
  },
  indigo: {
    bg: 'from-white to-indigo-50',
    border: 'border-indigo-100 hover:border-indigo-200',
    icon: 'bg-indigo-500',
    pulse: 'bg-indigo-500',
    title: 'group-hover:text-indigo-600',
    link: 'text-indigo-600 group-hover:text-indigo-700'
  },
  green: {
    bg: 'from-white to-green-50',
    border: 'border-green-100 hover:border-green-200',
    icon: 'bg-green-500',
    pulse: 'bg-green-500',
    title: 'group-hover:text-green-600',
    link: 'text-green-600 group-hover:text-green-700'
  },
  purple: {
    bg: 'from-white to-purple-50',
    border: 'border-purple-100 hover:border-purple-200',
    icon: 'bg-purple-500',
    pulse: 'bg-purple-500',
    title: 'group-hover:text-purple-600',
    link: 'text-purple-600 group-hover:text-purple-700'
  },
  gray: {
    bg: 'from-white to-gray-50',
    border: 'border-gray-100 hover:border-gray-200',
    icon: 'bg-gray-500',
    pulse: 'bg-gray-500',
    title: 'group-hover:text-gray-600',
    link: 'text-gray-600 group-hover:text-gray-700'
  },
  orange: {
    bg: 'from-white to-orange-50',
    border: 'border-orange-100 hover:border-orange-200',
    icon: 'bg-orange-500',
    pulse: 'bg-orange-500',
    title: 'group-hover:text-orange-600',
    link: 'text-orange-600 group-hover:text-orange-700'
  },
  red: {
    bg: 'from-white to-red-50',
    border: 'border-red-100 hover:border-red-200',
    icon: 'bg-red-500',
    pulse: 'bg-red-500',
    title: 'group-hover:text-red-600',
    link: 'text-red-600 group-hover:text-red-700'
  },
  yellow: {
    bg: 'from-white to-yellow-50',
    border: 'border-yellow-100 hover:border-yellow-200',
    icon: 'bg-yellow-500',
    pulse: 'bg-yellow-500',
    title: 'group-hover:text-yellow-600',
    link: 'text-yellow-600 group-hover:text-yellow-700'
  },
  violet: {
    bg: 'from-white to-violet-50',
    border: 'border-violet-100 hover:border-violet-200',
    icon: 'bg-violet-500',
    pulse: 'bg-violet-500',
    title: 'group-hover:text-violet-600',
    link: 'text-violet-600 group-hover:text-violet-700'
  },
  pink: {
    bg: 'from-white to-pink-50',
    border: 'border-pink-100 hover:border-pink-200',
    icon: 'bg-pink-500',
    pulse: 'bg-pink-500',
    title: 'group-hover:text-pink-600',
    link: 'text-pink-600 group-hover:text-pink-700'
  }
}

const colors = computed(() => colorClasses[props.colorScheme])
</script>

<template>
  <NuxtLink
    :to="link"
    :class="[
      'group bg-gradient-to-br rounded-3xl p-8 shadow-xl hover:shadow-2xl',
      'transition-all duration-500 transform hover:-translate-y-3',
      'flex flex-col items-center text-center h-full border',
      colors.bg,
      colors.border
    ]"
  >
    <div class="relative mb-6">
      <div
        :class="[
          'w-20 h-20 rounded-2xl flex items-center justify-center',
          'group-hover:scale-110 transition-transform duration-300 shadow-lg',
          colors.icon
        ]"
      >
        <!-- Refrigerator -->
        <svg v-if="icon === 'refrigerator'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v6h12V4H6zm0 8v8h12v-8H6zm2-6h2v3H8V6zm0 10h2v3H8v-3z"/>
        </svg>

        <!-- Freezer (simple snowflake) -->
        <svg v-else-if="icon === 'freezer'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 2h2v5.17l3.59-3.58 1.41 1.41L13 10h5v2h-5l5 5-1.41 1.41L13 14.83V20h-2v-5.17l-3.59 3.58L6 17l5-5H6v-2h5L6 5l1.41-1.41L11 7.17V2z"/>
        </svg>

        <!-- Ice Maker -->
        <svg v-else-if="icon === 'ice-maker'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h6v6H4V4zm2 2v2h2V6H6zm8-2h6v6h-6V4zm2 2v2h2V6h-2zM4 14h6v6H4v-6zm2 2v2h2v-2H6zm8-2h6v6h-6v-6zm2 2v2h2v-2h-2z"/>
        </svg>

        <!-- Wine Cooler -->
        <svg v-else-if="icon === 'wine-cooler'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c1.1 0 2 .9 2 2v4c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2V4c0-1.1.9-2 2-2zm0 2h-1v4h2V4h-1zm-2 6v10h4V10h-4zm1 2h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
        </svg>

        <!-- Under Counter Fridge -->
        <svg v-else-if="icon === 'under-counter'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm2 2h3v2H6V8zm0 4h3v2H6v-2z"/>
        </svg>

        <!-- Built-in Fridge -->
        <svg v-else-if="icon === 'built-in-fridge'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm1 2v7h6V4H5zm8 0v7h6V4h-6zM5 13v7h6v-7H5zm8 0v7h6v-7h-6zM7 6h2v3H7V6zm8 0h2v3h-2V6zM7 15h2v3H7v-3zm8 0h2v3h-2v-3z"/>
        </svg>

        <!-- Range -->
        <svg v-else-if="icon === 'range'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 2h16a2 2 0 012 2v4H2V4a2 2 0 012-2zm2 2a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zM2 10h20v10a2 2 0 01-2 2H4a2 2 0 01-2-2V10zm3 2v6h14v-6H5z"/>
        </svg>

        <!-- Stove -->
        <svg v-else-if="icon === 'stove'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c.55 0 1 .45 1 1v2.07c1.09.1 2.09.46 2.96 1.01l1.46-1.46a1 1 0 011.42 1.42l-1.46 1.46c.55.87.91 1.87 1.01 2.96H20a1 1 0 110 2h-1.61c-.1 1.09-.46 2.09-1.01 2.96l1.46 1.46a1 1 0 01-1.42 1.42l-1.46-1.46c-.87.55-1.87.91-2.96 1.01V20a1 1 0 11-2 0v-1.61c-1.09-.1-2.09-.46-2.96-1.01l-1.46 1.46a1 1 0 01-1.42-1.42l1.46-1.46c-.55-.87-.91-1.87-1.01-2.96H4a1 1 0 110-2h1.61c.1-1.09.46-2.09 1.01-2.96L5.16 6.58a1 1 0 011.42-1.42l1.46 1.46c.87-.55 1.87-.91 2.96-1.01V3c0-.55.45-1 1-1zm0 6a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"/>
        </svg>

        <!-- Oven -->
        <svg v-else-if="icon === 'oven'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v4h16V4H4zm2 1h2v2H6V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5zM4 10v10h16V10H4zm2 2h12v6H6v-6z"/>
        </svg>

        <!-- Double Oven -->
        <svg v-else-if="icon === 'double-oven'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v3h16V4H4zm2 .5h2v2H6v-2zm4 0h2v2h-2v-2zM4 9v5h16V9H4zm2 1h12v3H6v-3zm-2 6v5h16v-5H4zm2 1h12v3H6v-3z"/>
        </svg>

        <!-- Cooktop -->
        <svg v-else-if="icon === 'cooktop'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 6h20a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V8a2 2 0 012-2zm5 3a3 3 0 100 6 3 3 0 000-6zm0 2a1 1 0 110 2 1 1 0 010-2zm10-2a3 3 0 100 6 3 3 0 000-6zm0 2a1 1 0 110 2 1 1 0 010-2z"/>
        </svg>

        <!-- Washer -->
        <svg v-else-if="icon === 'washer'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v3h12V4H6zm1 1h2v1H7V5zm4 0h2v1h-2V5zM6 9v11h12V9H6zm6 1a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
        </svg>

        <!-- Dryer (tumble dryer with circular motion) -->
        <svg v-else-if="icon === 'dryer'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v3h12V4H6zm1 1h2v1H7V5zm4 0h2v1h-2V5zM6 9v11h12V9H6zm6 1a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm0 1c.83 0 1.5.67 1.5 1.5S12.83 15 12 15s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>
        </svg>

        <!-- Dishwasher -->
        <svg v-else-if="icon === 'dishwasher'" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v4h16V4H4zm2 1h2v2H6V5zm4 0h2v2h-2V5zM4 10v10h16V10H4zm3 2h10v2H7v-2zm0 4h10v2H7v-2z"/>
        </svg>

        <!-- Default gear icon -->
        <svg v-else class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.533 1.533 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.533 1.533 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.533 1.533 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div
        :class="[
          'absolute -top-2 -right-2 w-6 h-6 rounded-full',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse',
          colors.pulse
        ]"
      ></div>
    </div>

    <h3 :class="['text-2xl font-bold text-gray-900 mb-4 transition-colors', colors.title]">
      {{ title }}
    </h3>

    <p class="text-gray-600 leading-relaxed flex-grow mb-6">
      {{ description }}
    </p>

    <div class="mt-auto">
      <div :class="['inline-flex items-center font-semibold transition-colors', colors.link]">
        <span>Learn More</span>
        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>
