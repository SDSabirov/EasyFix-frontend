<script setup lang="ts">
const services = [
  {
    title: 'Refrigerator Repair',
    description: 'Expert repairs for built-in and freestanding refrigerators to keep your food fresh and safe.',
    link: '/services/refrigerator-repair',
    colorScheme: 'blue' as const
  },
  {
    title: 'Freezer Repair',
    description: 'Fast and effective freezer repairs to protect your frozen food and prevent spoilage.',
    link: '/services/freezer-repair',
    colorScheme: 'cyan' as const
  },
  {
    title: 'Ice Maker Repair',
    description: 'Dependable repairs to ensure your ice maker produces fresh ice without interruptions.',
    link: '/services/ice-maker-repair',
    colorScheme: 'indigo' as const
  },
  {
    title: 'Under-Counter Fridge Repair',
    description: 'Specialized repairs for compact and built-in under-counter refrigerators.',
    link: '/services/under-counter-fridge-repair',
    colorScheme: 'green' as const
  },
  {
    title: 'Wine Cooler Repair',
    description: 'Preserve your wine collection perfectly with our specialized wine cooler repair service.',
    link: '/services/wine-cooler-repair',
    colorScheme: 'purple' as const
  },
  {
    title: 'Built-In Fridges Repair',
    description: 'High-end built-in fridge repair service with precision and original parts.',
    link: '/services/built-in-fridge-repair',
    colorScheme: 'gray' as const
  }
]
</script>

<template>
  <section class="py-16 lg:py-20 relative">
    <!-- Background Elements -->
    <div class="absolute top-12 left-10 w-28 h-28 bg-blue-100 rounded-full blur-xl opacity-50"></div>
    <div class="absolute bottom-20 right-16 w-36 h-36 bg-cyan-100 rounded-full blur-2xl opacity-40"></div>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <ServicesSectionHeader
        badge="Professional Cooling Solutions"
        title="Reliable Cooling Appliance"
        title-highlight="Repair Services"
        description="Keep your food fresh and beverages cold with our expert cooling appliance repair services for all major brands"
        color-scheme="blue"
      />

      <!-- Service Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
        title="Keep Your Food Fresh with Expert Cooling Repairs"
        description="Don't let a malfunctioning cooling appliance spoil your food. Our certified technicians provide fast, reliable repairs for all cooling systems."
        color-scheme="blue"
        call-text="Call for Cooling Repair"
      />
    </div>
  </section>
</template>
