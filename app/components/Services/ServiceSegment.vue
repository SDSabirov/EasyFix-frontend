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
      <p class="text-center font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500 mb-5">
        What are you looking for?
      </p>

      <div class="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 max-w-xl mx-auto">
        <!-- Premium Brands Option -->
        <button
          @click="selectSegment('premium')"
          :aria-pressed="selected === 'premium'"
          :class="[
            'flex-1 inline-flex items-center justify-center gap-2.5 min-h-[52px] px-8 py-3.5 rounded-full font-montserrat text-[12px] font-semibold uppercase tracking-[0.12em] transition-all duration-300',
            selected === 'premium'
              ? 'bg-ink text-white shadow-lg shadow-ink/20'
              : 'bg-white text-primary border border-primary/15 hover:border-brass hover:text-brass-dark hover:scale-[1.03]'
          ]"
        >
          <span
            class="w-1 h-1 rotate-45 shrink-0"
            :class="selected === 'premium' ? 'bg-brass-light' : 'bg-brass'"
            aria-hidden="true"
          ></span>
          Premium Brands
        </button>

        <!-- All Appliances Option -->
        <button
          @click="selectSegment('all')"
          :aria-pressed="selected === 'all'"
          :class="[
            'flex-1 inline-flex items-center justify-center gap-2.5 min-h-[52px] px-8 py-3.5 rounded-full font-montserrat text-[12px] font-semibold uppercase tracking-[0.12em] transition-all duration-300',
            selected === 'all'
              ? 'bg-ink text-white shadow-lg shadow-ink/20'
              : 'bg-white text-primary border border-primary/15 hover:border-brass hover:text-brass-dark hover:scale-[1.03]'
          ]"
        >
          <span
            class="w-1 h-1 rotate-45 shrink-0"
            :class="selected === 'all' ? 'bg-brass-light' : 'bg-brass'"
            aria-hidden="true"
          ></span>
          All Appliances
        </button>
      </div>

      <p class="text-center text-sm text-gray-500 mt-5">
        <span v-if="selected === 'premium'">Sub-Zero, Wolf, Viking, Thermador &amp; more luxury brands</span>
        <span v-else>Refrigerators, Washers, Dryers, Ovens &amp; all major brands</span>
      </p>
    </div>
  </div>
</template>
