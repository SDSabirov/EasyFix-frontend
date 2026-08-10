<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section class="relative bg-cream pt-32 pb-6 lg:pt-40 lg:pb-8 overflow-hidden">
      <span class="ghost-word text-[6rem] lg:text-[11rem] top-20 -right-6" aria-hidden="true">Services</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-4xl mx-auto mb-6">
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Professional Appliance Services
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-primary leading-[1.05] mb-6">
            Expert Appliance Repair
            <em class="block font-display font-semibold italic text-brass-dark">Services in Bay&nbsp;Area</em>
          </h1>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Serving <strong class="text-primary font-semibold">San Francisco, San Mateo, Palo Alto, Mountain View</strong>, and the entire Bay Area with quality service you can trust.
          </p>
        </div>

        <!-- Service Segment Selection -->
        <ServicesServiceSegment :selected="selectedSegment" @select="selectedSegment = $event" />
      </div>
    </section>

    <!-- Dynamic Content Based on Selection -->
    <Transition name="fade" mode="out-in">
      <ServicesEnhancedServices v-if="selectedSegment === 'premium'" key="premium" />
      <ServicesEnhancedApplianceTypes v-else key="all" />
    </Transition>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const selectedSegment = ref('premium')

const description =
  "Expert appliance repair services for all major brands. We specialize in fixing refrigerators, stoves, ovens, washers, dryers, and more across San Francisco, San Mateo, Palo Alto, Mountain View, and the Bay Area. Schedule reliable service today!";

onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});

useHead({
  title: "Appliance Repair Services | San Francisco Bay Area | Easy Fix Appliance",
  meta: [{ name: "description", content: description.slice(0, 170) }],
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
