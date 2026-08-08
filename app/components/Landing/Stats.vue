<template>
  <section ref="sectionEl" class="grain glow-brass relative bg-ink py-20 lg:py-28 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
    <span class="ghost-word ghost-word--light text-[8rem] lg:text-[14rem] top-8 -left-6" aria-hidden="true">Trusted</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Header -->
      <div class="max-w-3xl mb-14 lg:mb-16" v-reveal>
        <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          Trusted Excellence
        </span>
        <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-white leading-[1.05] mb-6">
          Why choose
          <em class="font-display font-semibold italic text-brass-light">Easy Fix Appliance?</em>
        </h2>
        <p class="text-white/60 leading-relaxed">
          Our commitment to excellence and customer satisfaction sets us apart as the Bay Area&rsquo;s
          premier appliance repair service.
        </p>
      </div>

      <!-- Animated stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
        <div
          v-for="(stat, index) in stats"
          :key="stat.title"
          class="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 lg:p-8 transition-all duration-500 hover:border-brass/40 hover:bg-white/[0.07] hover:-translate-y-1.5"
          v-reveal="index * 100"
        >
          <div class="font-display font-semibold text-5xl lg:text-6xl text-white mb-3 tabular-nums">
            {{ stat.prefix }}{{ display[index] }}{{ stat.suffix }}
          </div>
          <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-light mb-2">{{ stat.title }}</div>
          <p class="text-sm text-white/45 leading-relaxed">{{ stat.description }}</p>
        </div>
      </div>

      <!-- Trust features -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16 lg:mb-20">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="group flex items-start gap-5 rounded-[1.25rem] border border-white/10 p-6 transition-colors duration-300 hover:border-brass/40"
          v-reveal="index * 80"
        >
          <span class="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 shrink-0 transition-colors duration-300 group-hover:bg-brass/25">
            <img loading="lazy" decoding="async" :src="feature.icon" :alt="''" aria-hidden="true" class="w-5 h-5 filter brightness-0 invert opacity-80" />
          </span>
          <div>
            <h3 class="font-montserrat font-bold text-lg text-white mb-1">{{ feature.title }}</h3>
            <p class="text-sm text-white/50 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Quiet CTA -->
      <div class="text-center" v-reveal>
        <p class="font-display italic text-2xl sm:text-3xl text-white/85 mb-6">
          Experience service worthy of your appliances.
        </p>
        <a
          href="tel:4159414144"
          class="group inline-flex items-center gap-3 font-montserrat text-sm font-semibold uppercase tracking-[0.18em] text-brass-light hover:text-white transition-colors"
        >
          Speak with a Technician — (415) 941-4144
          <span class="flex items-center justify-center w-10 h-10 rounded-full border border-brass/40 transition-all duration-300 group-hover:bg-brass group-hover:text-ink" aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { value: 15, prefix: "", suffix: "+", title: "Years Experience", description: "Serving Bay Area with excellence" },
  { value: 5000, prefix: "", suffix: "+", title: "Repairs Completed", description: "Satisfied customers across Bay Area" },
  { value: 24, prefix: "", suffix: "h", title: "Same-Day Service", description: "Same-day & after-hours available" },
  { value: 100, prefix: "", suffix: "%", title: "Satisfaction Rate", description: "Guaranteed quality workmanship" },
]

const sectionEl = ref(null)
const display = ref(stats.map((s) => s.value))
let observer

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced || !sectionEl.value) return

  observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const duration = 1600
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - t, 3)
        display.value = stats.map((s) => Math.round(s.value * ease))
        if (t < 1) requestAnimationFrame(tick)
      }
      display.value = stats.map(() => 0)
      requestAnimationFrame(tick)
    },
    { threshold: 0.3 }
  )
  observer.observe(sectionEl.value)
})

onUnmounted(() => observer?.disconnect())

import featureIcon1 from "~/assets/icons/24hr.svg"
import featureIcon2 from "~/assets/icons/calendar-event.svg"
import featureIcon3 from "~/assets/icons/patch-check.svg"
import featureIcon4 from "~/assets/icons/certificate.svg"
const features = [
  {
    title: "Emergency Service",
    description: "Emergency and same-day service available. Quick response times for urgent repairs.",
    icon: featureIcon1
  },
  {
    title: "Flexible Scheduling",
    description: "Convenient scheduling options that work around your busy lifestyle and availability.",
    icon: featureIcon2
  },
  {
    title: "Genuine OEM Parts",
    description: "Original manufacturer parts with full warranties for lasting repairs and optimal performance.",
    icon: featureIcon3
  },
  {
    title: "Certified Technicians",
    description: "Factory-trained and authorized technicians with expertise across all major appliance brands.",
    icon: featureIcon4
  }
]
</script>
