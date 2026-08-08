<template>
  <section class="relative min-h-screen flex flex-col overflow-hidden bg-ink" role="banner">
    <!-- Poster image is the LCP element; the video layers in after hydration -->
    <div class="absolute inset-0 z-0">
      <img
        src="/hero-poster.webp"
        alt="Luxury kitchen with professional-grade appliances in a Bay Area home"
        class="w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
      <video
        v-if="showVideo"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        :class="videoReady ? 'opacity-100' : 'opacity-0'"
        src="/hero-720.mp4"
        poster="/hero-poster.webp"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
        tabindex="-1"
        @canplay="videoReady = true"
      ></video>
      <!-- Cinematic scrim -->
      <div class="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80"></div>
    </div>

    <!-- Hero content -->
    <div class="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-24">
      <div class="max-w-5xl mx-auto text-center w-full">
        <p class="hero-reveal font-montserrat text-[11px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-brass-light mb-6 sm:mb-8">
          Bay Area&rsquo;s Luxury Appliance Specialists
        </p>

        <h1 class="hero-reveal hero-reveal-1 font-display font-medium text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 sm:mb-8">
          Expert <em class="not-italic text-brass-light">Sub-Zero, Wolf &amp; Viking</em><br class="hidden sm:block" />
          Appliance Repair <span class="hidden md:inline">in San Mateo &amp;</span> <span class="md:hidden">&mdash;</span> Bay Area
        </h1>

        <div class="hero-reveal hero-reveal-2 flex items-center justify-center gap-4 mb-6 sm:mb-8" aria-hidden="true">
          <span class="h-px w-12 bg-white/25"></span>
          <span class="w-1 h-1 rotate-45 bg-brass"></span>
          <span class="h-px w-12 bg-white/25"></span>
        </div>

        <h2 class="hero-reveal hero-reveal-2 font-roboto font-light text-base sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12">
          <span class="hidden sm:inline">Certified technicians serving Palo Alto, San Francisco, San Jose, and surrounding Bay Area communities with</span>
          same-day appliance repairs<span class="hidden sm:inline"> throughout the Bay Area</span>
        </h2>

        <!-- CTAs -->
        <div class="hero-reveal hero-reveal-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
          <a
            href="tel:4159414144"
            class="group inline-flex items-center justify-center w-full sm:w-auto min-h-[54px] px-10 py-4 bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-brass hover:text-white"
          >
            <svg class="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            (415) 941-4144
          </a>
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center w-full sm:w-auto min-h-[54px] px-10 py-4 border border-white/40 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:border-brass hover:text-brass-light"
          >
            Schedule Service
          </NuxtLink>
        </div>

        <!-- Trust line -->
        <p class="hero-reveal hero-reveal-4 font-montserrat text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-white/60">
          Same-Day Service <span class="text-brass mx-2 sm:mx-3">&middot;</span>
          Certified Technicians <span class="text-brass mx-2 sm:mx-3">&middot;</span>
          <span class="hidden sm:inline">Genuine OEM Parts <span class="text-brass mx-3">&middot;</span></span>
          Warranty Included
        </p>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-16 w-px overflow-hidden" aria-hidden="true">
      <span class="scroll-cue block h-8 w-px bg-white/50"></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showVideo = ref(false)
const videoReady = ref(false)

useHead({
  link: [
    { rel: 'preload', as: 'image', href: '/hero-poster.webp', fetchpriority: 'high' },
  ],
})

onMounted(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const saveData = navigator.connection?.saveData
  if (!reducedMotion && !saveData) {
    showVideo.value = true
  }
})
</script>

<style scoped>
.hero-reveal {
  opacity: 0;
  transform: translateY(18px);
  animation: heroReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.hero-reveal-1 { animation-delay: 0.12s; }
.hero-reveal-2 { animation-delay: 0.26s; }
.hero-reveal-3 { animation-delay: 0.4s; }
.hero-reveal-4 { animation-delay: 0.55s; }

@keyframes heroReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-cue {
  animation: scrollCue 2.2s ease-in-out infinite;
}
@keyframes scrollCue {
  0% { transform: translateY(-100%); }
  55% { transform: translateY(100%); }
  100% { transform: translateY(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-reveal {
    animation: none;
    opacity: 1;
    transform: none;
  }
  .scroll-cue { animation: none; }
}
</style>
