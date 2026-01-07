<script setup lang="ts">
const { phoneNumber, phoneDisplay, bookingUrl } = useContact()

interface Props {
  title: string
  description: string
  colorScheme: 'blue' | 'orange' | 'purple' | 'primary'
  callText?: string
  bookText?: string
}

const props = withDefaults(defineProps<Props>(), {
  callText: 'Call for Repair Service',
  bookText: 'Schedule Service'
})

const colorClasses = {
  blue: {
    gradient: 'from-blue-500 to-cyan-500',
    buttonText: 'text-blue-600',
    buttonHover: 'hover:text-blue-600'
  },
  orange: {
    gradient: 'from-orange-500 to-red-500',
    buttonText: 'text-orange-600',
    buttonHover: 'hover:text-orange-600'
  },
  purple: {
    gradient: 'from-purple-500 to-violet-500',
    buttonText: 'text-purple-600',
    buttonHover: 'hover:text-purple-600'
  },
  primary: {
    gradient: 'from-primary to-secondary',
    buttonText: 'text-primary',
    buttonHover: 'hover:text-primary'
  }
}

const colors = computed(() => colorClasses[props.colorScheme])
</script>

<template>
  <div class="text-center">
    <div :class="['bg-gradient-to-r rounded-3xl p-8 text-white', colors.gradient]">
      <div class="max-w-3xl mx-auto">
        <h3 class="text-3xl font-bold mb-4">
          {{ title }}
        </h3>
        <p class="text-xl text-white/90 mb-8 leading-relaxed">
          {{ description }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            :href="`tel:${phoneNumber}`"
            :class="[
              'inline-flex items-center px-10 py-4 bg-white font-bold rounded-2xl',
              'hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl',
              'transform hover:-translate-y-1 text-lg',
              colors.buttonText
            ]"
          >
            <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            {{ callText }}
          </a>

          <NuxtLink
            :to="bookingUrl"
            :class="[
              'inline-flex items-center px-10 py-4 border-2 border-white text-white font-bold rounded-2xl',
              'hover:bg-white transition-all duration-300 transform hover:-translate-y-1 text-lg',
              colors.buttonHover
            ]"
          >
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
            </svg>
            {{ bookText }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
