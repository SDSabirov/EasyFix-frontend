<template>
  <section class="relative bg-white py-16 lg:py-24 overflow-hidden">
    <span class="ghost-word text-[6rem] lg:text-[11rem] -top-4 -right-6" aria-hidden="true">Repairs</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto" v-reveal>
        <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          All Major Brands
        </span>
        <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
          All Appliance Repair
          <em class="font-display font-semibold italic text-brass-dark">Services</em>
        </h2>
        <p class="text-gray-600 leading-relaxed">
          Expert repair services for refrigerators, ovens, washers, dryers, and more from all major brands
        </p>
      </div>
    </div>

    <!-- Appliance Tabs -->
    <div class="relative z-10">
      <ServicesApplianceTabs />
    </div>
  </section>
</template>

<script setup>
// Simplified appliance types component - tabs handle their own CTA
</script>
