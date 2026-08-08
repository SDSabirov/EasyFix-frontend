<script setup lang="ts">
const emit = defineEmits<{
  (e: 'select', segment: 'premium' | 'all'): void
}>()

interface Props {
  selected?: 'premium' | 'all'
}

const props = withDefaults(defineProps<Props>(), {
  selected: 'premium'
})

const selectSegment = (segment: 'premium' | 'all') => {
  emit('select', segment)
}
</script>

<template>
  <div class="py-8">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <div class="text-center mb-6">
        <p class="text-lg text-gray-600 font-medium">What are you looking for?</p>
      </div>

      <div class="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
        <!-- Premium Brands Option -->
        <button
          @click="selectSegment('premium')"
          :class="[
            'flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left group',
            selected === 'premium'
              ? 'border-primary bg-primary/5 shadow-lg'
              : 'border-gray-200 bg-white hover:border-primary/50 hover:shadow-md'
          ]"
        >
          <div class="flex items-start gap-4">
            <div :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors',
              selected === 'premium' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10'
            ]">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <div>
              <h3 :class="[
                'font-bold text-lg mb-1 transition-colors',
                selected === 'premium' ? 'text-primary' : 'text-gray-900'
              ]">
                Premium Brands
              </h3>
              <p class="text-sm text-gray-600">
                Sub-Zero, Wolf, Viking, Thermador & more luxury brands
              </p>
            </div>
          </div>
          <!-- Selected indicator -->
          <div v-if="selected === 'premium'" class="mt-4 flex items-center text-primary text-sm font-medium">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Selected
          </div>
        </button>

        <!-- All Appliances Option -->
        <button
          @click="selectSegment('all')"
          :class="[
            'flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left group',
            selected === 'all'
              ? 'border-secondary bg-secondary/5 shadow-lg'
              : 'border-gray-200 bg-white hover:border-secondary/50 hover:shadow-md'
          ]"
        >
          <div class="flex items-start gap-4">
            <div :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors',
              selected === 'all' ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-secondary/10'
            ]">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div>
              <h3 :class="[
                'font-bold text-lg mb-1 transition-colors',
                selected === 'all' ? 'text-secondary' : 'text-gray-900'
              ]">
                All Appliances
              </h3>
              <p class="text-sm text-gray-600">
                Refrigerators, Washers, Dryers, Ovens & all major brands
              </p>
            </div>
          </div>
          <!-- Selected indicator -->
          <div v-if="selected === 'all'" class="mt-4 flex items-center text-secondary text-sm font-medium">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Selected
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
