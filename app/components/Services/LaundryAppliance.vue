<script setup lang="ts">
const services = [
  {
    title: 'Washer Repair',
    description: 'Expert repairs for front load, top load, and all types of washing machines from major brands.',
    link: '/services/washer-repair',
    colorScheme: 'purple' as const
  },
  {
    title: 'Dryer Repair',
    description: 'Fast and reliable repairs for gas and electric dryers to keep your laundry routine running smoothly.',
    link: '/services/dryer-repair',
    colorScheme: 'violet' as const
  },
  {
    title: 'Dishwasher Repair',
    description: 'Professional repairs for built-in and portable dishwashers to restore sparkling clean dishes.',
    link: '/services/dishwasher-repair',
    colorScheme: 'pink' as const
  }
]
</script>

<template>
  <section class="py-16 lg:py-20 relative">
    <!-- Background Elements -->
    <div class="absolute top-12 left-10 w-28 h-28 bg-purple-100 rounded-full blur-xl opacity-50"></div>
    <div class="absolute bottom-20 right-16 w-36 h-36 bg-violet-100 rounded-full blur-2xl opacity-40"></div>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <ServicesSectionHeader
        badge="Full Service Appliance Repair"
        title="Laundry & Dishwasher"
        title-highlight="Repair Services"
        description="Keep your home running smoothly with expert laundry and dishwasher repair services for all major brands"
        color-scheme="purple"
      />

      <!-- Service Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <ServicesServiceCard
          v-for="service in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
          :link="service.link"
          :color-scheme="service.colorScheme"
        />
      </div>

      <ServicesSectionCTA
        title="Complete Home Appliance Repair Services"
        description="From laundry to kitchen appliances, our certified technicians repair all major brands. Don't let a broken appliance disrupt your daily routine."
        color-scheme="purple"
        call-text="Call for Repair Service"
      />
    </div>
  </section>
</template>
