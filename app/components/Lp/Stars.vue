<template>
  <!-- Five gold stars; `size` is the Tailwind size classes for each star. -->
  <span class="flex text-[#F5B301]" role="img" :aria-label="label">
    <svg v-for="i in 5" :key="i" :class="size" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path :d="starPath" /></svg>
  </span>
</template>

<script setup>
defineProps({
  size: { type: String, default: 'w-4 h-4' },
  label: { type: String, default: '5 out of 5 stars' },
})

const starPath = 'M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.3 4.02a1 1 0 0 0 .95.69h4.22c.97 0 1.37 1.24.59 1.81l-3.42 2.48a1 1 0 0 0-.36 1.12l1.3 4.02c.3.92-.75 1.69-1.54 1.12l-3.42-2.48a1 1 0 0 0-1.18 0l-3.42 2.48c-.78.57-1.84-.2-1.54-1.12l1.3-4.02a1 1 0 0 0-.36-1.12L1.95 9.45c-.78-.57-.38-1.81.59-1.81h4.22a1 1 0 0 0 .95-.69z'
</script>
