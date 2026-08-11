<template>
  <section class="relative bg-cream py-20 lg:py-28 overflow-hidden">
    <span class="ghost-word text-[6rem] lg:text-[11rem] -top-6 -right-4" aria-hidden="true">Guarantee</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 lg:mb-16" v-reveal>
        <img
          loading="lazy"
          decoding="async"
          src="/assets/icons/promotions/badge.png"
          class="w-24 h-24 lg:w-28 lg:h-28 object-contain mx-auto mb-6"
          alt="guarantee badge"
        />
        <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          Our Promise
        </span>
        <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
          100%
          <em class="font-display font-semibold italic text-brass-dark">Job Satisfaction</em>
          Guarantee
        </h2>
        <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
          Need same-day appliance repair? We're available for same-day and after-hours service to answer your questions and address household appliance issues. Our technicians start repairs promptly upon appointment.
        </p>
      </div>

      <!-- Process steps -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="relative bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
          v-reveal="index * 90"
        >
          <span class="absolute top-5 right-6 font-display font-semibold text-5xl text-brass/25 leading-none" aria-hidden="true">0{{ index + 1 }}</span>
          <span class="flex items-center justify-center w-14 h-14 rounded-full bg-ink mb-5">
            <img
              loading="lazy"
              decoding="async"
              :src="step.icon"
              class="w-7 h-7 object-contain"
              :alt="step.iconAlt"
            />
          </span>
          <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">{{ step.title }}</h3>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bookIcon from '/assets/icons/promotions/book.svg'
import searchIcon from '/assets/icons/promotions/search.svg'
import wrenchIcon from '/assets/icons/promotions/wrench3.svg'
import awardIcon from '/assets/icons/promotions/award.svg'

const steps = [
  {
    icon: bookIcon,
    iconAlt: 'Schedule Service',
    title: 'Seamless scheduling',
    description: 'Reserve your appointment online or by phone. Our friendly team is always happy to help!',
  },
  {
    icon: searchIcon,
    iconAlt: 'Search icon',
    title: 'Our Expert Technician Arrives',
    description: 'Our technicians are on-time, prepared, and ready to serve!',
  },
  {
    icon: wrenchIcon,
    iconAlt: 'Wrench icon',
    title: 'Comprehensive Evaluation',
    description: 'We perform in-depth troubleshooting and diagnostic to get to the root cause of the problem.',
  },
  {
    icon: awardIcon,
    iconAlt: 'Award Icon',
    title: 'Problem Solved, Excellence Delivered',
    description: 'We ensure a flawless repair, so you can get back to what matters.',
  },
]
</script>
