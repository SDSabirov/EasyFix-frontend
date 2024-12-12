<template>
  <div>
    <Navbar />
    <ServicesApplianceTypes />
    <LandingServices/>
    <Footer />
    <ModalsPrivacy />
  </div>
</template>

<script setup>

import { onMounted } from "vue";
import { useFlowbite } from "~/composables/useFlowbite";

const description =
  "Appliance repair service in Sanxplore our expert appliance repair services for all major brands. We specialize in fixing refrigerators, stoves, ovens, washers, dryers, and more across San Francisco, San Mateo, Palo Alto, Mountain View, and the Bay Area. Schedule reliable service today!";
// initialize components based on data attribute selectors
onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});

useHead({
  title: "Appliance Repairs Service | San Fransisco | San Mateo | Palo Alto",
  meta: [{ name: "description", content: description.slice(0, 170) }],
});

</script>
