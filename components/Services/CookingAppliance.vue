<script setup lang="ts">
const services = [
  {
    title: 'Range Repair',
    description: 'Comprehensive repair solutions for all types of kitchen ranges, from gas to electric models.',
    link: '/services/range-repair',
    colorScheme: 'orange' as const
  },
  {
    title: 'Stove Repair',
    description: 'Safe and efficient stove repairs for all models and types with certified technician expertise.',
    link: '/services/stove-repair',
    colorScheme: 'red' as const
  },
  {
    title: 'Oven Repair',
    description: 'Expert oven repairs for reliable and consistent cooking results with genuine OEM parts.',
    link: '/services/oven-repair',
    colorScheme: 'yellow' as const
  },
  {
    title: 'Double Oven Repair',
    description: 'Specialized repairs for double ovens, ensuring even performance and optimal functionality.',
    link: '/services/double-oven-repair',
    colorScheme: 'purple' as const
  },
  {
    title: 'Cooktop Repair',
    description: 'Efficient repair solutions for gas, electric, and induction cooktops with professional service.',
    link: '/services/cooktop-repair',
    colorScheme: 'blue' as const
  }
]
</script>

<template>
  <section class="py-16 lg:py-20 relative">
    <!-- Background Elements -->
    <div class="absolute top-10 right-10 w-24 h-24 bg-orange-100 rounded-full blur-xl opacity-60"></div>
    <div class="absolute bottom-16 left-12 w-32 h-32 bg-red-100 rounded-full blur-2xl opacity-40"></div>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <ServicesSectionHeader
        badge="Professional Cooking Solutions"
        title="Cooking Appliance"
        title-highlight="Repair Experts"
        description="From ranges to cooktops, our certified technicians provide expert repair services for all your cooking appliances"
        color-scheme="orange"
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
        title="Need Your Cooking Appliances Fixed?"
        description="Our certified technicians specialize in all types of cooking appliance repairs. Get your kitchen back to full functionality today."
        color-scheme="orange"
        call-text="Call for Cooking Repair"
      />
    </div>
  </section>
</template>
