<script setup lang="ts">
interface Props {
  badge: string
  title: string
  titleHighlight: string
  description: string
  colorScheme: 'blue' | 'cyan' | 'orange' | 'purple'
}

const props = defineProps<Props>()

const colorClasses = {
  blue: {
    badgeBg: 'from-blue-100 to-cyan-100',
    badgeBorder: 'border-blue-200',
    badgeText: 'text-blue-700',
    badgeIcon: 'text-blue-600',
    titleGradient: 'from-blue-600 to-cyan-600'
  },
  cyan: {
    badgeBg: 'from-cyan-100 to-teal-100',
    badgeBorder: 'border-cyan-200',
    badgeText: 'text-cyan-700',
    badgeIcon: 'text-cyan-600',
    titleGradient: 'from-cyan-600 to-teal-600'
  },
  orange: {
    badgeBg: 'from-orange-100 to-red-100',
    badgeBorder: 'border-orange-200',
    badgeText: 'text-orange-700',
    badgeIcon: 'text-orange-600',
    titleGradient: 'from-orange-600 to-red-600'
  },
  purple: {
    badgeBg: 'from-purple-100 to-violet-100',
    badgeBorder: 'border-purple-200',
    badgeText: 'text-purple-700',
    badgeIcon: 'text-purple-600',
    titleGradient: 'from-purple-600 to-violet-600'
  }
}

const colors = computed(() => colorClasses[props.colorScheme])
</script>

<template>
  <div class="text-center mb-16">
    <div
      :class="[
        'inline-flex items-center px-6 py-3 bg-gradient-to-r rounded-full mb-8 border',
        colors.badgeBg,
        colors.badgeBorder
      ]"
    >
      <slot name="icon">
        <svg :class="['w-6 h-6 mr-3', colors.badgeIcon]" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
      </slot>
      <span :class="['font-bold text-lg', colors.badgeText]">{{ badge }}</span>
    </div>

    <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
      {{ title }}
      <span :class="['text-transparent bg-clip-text bg-gradient-to-r', colors.titleGradient]">
        {{ titleHighlight }}
      </span>
    </h2>

    <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
