<template>
  <div class="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
    <div
      class="h-full transition-all duration-150"
      :style="{ width: progress + '%', background: 'linear-gradient(to right, #f97316, #facc15)' }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

const updateProgress = () => {
  if (typeof window !== 'undefined') {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', updateProgress)
    updateProgress() // Initial calculation
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', updateProgress)
  }
})
</script>
