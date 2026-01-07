<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-12 lg:pt-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #164863 1px, transparent 0); background-size: 30px 30px;"></div>
      </div>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center mb-8">
          <div class="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-6">
            <svg class="w-6 h-6 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-primary font-bold text-lg">Professional Appliance Services</span>
          </div>

          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Expert Appliance Repair
            <span class="block text-primary">Services in Bay Area</span>
          </h1>

          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Serving <strong class="text-primary">San Francisco, San Mateo, Palo Alto, Mountain View</strong>, and the entire Bay Area with quality service you can trust.
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
    <ModalsPrivacy />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useFlowbite } from "~/composables/useFlowbite";

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
