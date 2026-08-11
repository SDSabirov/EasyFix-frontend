<template>
  <section class="relative bg-cream py-20 lg:py-28 overflow-hidden">
    <span class="ghost-word text-[6rem] lg:text-[11rem] -top-6 -right-4" aria-hidden="true">Precision</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Header -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
        <div v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Why Easy Fix
          </span>
          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.05]">
            Precision Service for
            <em class="block font-display font-semibold italic text-brass-dark">High-Performance Kitchens</em>
          </h2>
        </div>
        <div class="space-y-8" v-reveal="120">
          <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
            Thermador appliances are known for their innovation, power, and
            sleek design, making them a top choice for luxury kitchens. When
            your Thermador range, oven, or refrigerator needs service, you need
            skilled professionals who understand their advanced engineering. At
            Easy Fix Appliance, we specialize in repairing Thermador appliances,
            ensuring they continue to perform flawlessly.
          </p>
          <a
            href="tel:4159414144"
            aria-label="Call us for Thermador appliance repair services"
            class="inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-ink text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:scale-[1.03] touch-manipulation"
          >
            Schedule a Repair
          </a>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <div
          v-for="(card, index) in cards"
          :key="card.title"
          class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
          v-reveal="(index % 3) * 90"
        >
          <span class="flex items-center justify-center w-14 h-14 rounded-full bg-ink mb-5">
            <img loading="lazy" decoding="async" :src="card.icon" :alt="card.iconAlt" class="w-7 h-7 object-contain" />
          </span>
          <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">{{ card.title }}</h3>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import userIcon from '/assets/icons/promotions/user.png'
import headphoneIcon from '/assets/icons/promotions/headphone.png'
import wrenchIcon from '/assets/icons/promotions/wrench.png'
import houseIcon from '/assets/icons/promotions/house.png'
import warrantyIcon from '/assets/icons/promotions/iconx2.png'

const cards = [
  {
    icon: userIcon,
    iconAlt: 'user icon',
    title: 'Factory-Trained Experts',
    description: 'Our technicians undergo rigorous training to handle Thermador high-performance technology.',
  },
  {
    icon: headphoneIcon,
    iconAlt: 'support icon',
    title: 'White-Glove Service',
    description: 'We respect your home with meticulous care, arriving in professional attire and using protective measures.',
  },
  {
    icon: wrenchIcon,
    iconAlt: 'wrench icon',
    title: 'Repairs Done Right the First Time',
    description: 'We use genuine Thermador parts and advanced diagnostics for precise, lasting repairs.',
  },
  {
    icon: wrenchIcon,
    iconAlt: 'wrench icon',
    title: 'Concierge-Level Convenience',
    description: 'Flexible scheduling, minimal disruption, and VIP priority service.',
  },
  {
    icon: houseIcon,
    iconAlt: 'house icon',
    title: 'Trusted in High-End Residences',
    description: 'Servicing luxury homes throughout the Bay Area.',
  },
  {
    icon: warrantyIcon,
    iconAlt: 'warranty icon',
    title: 'Longest Warranty Coverage in the Bay Area',
    description: 'We stand behind our work. Get up to 3 years of warranty coverage on select repairs.',
  },
]
</script>
