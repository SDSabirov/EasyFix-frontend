<template>
  <ClientOnly>
    <GMapMap :center="modelValue" :zoom="14" class="w-full h-[600px]">
      <GMapMarker :position="modelValue" />
    </GMapMap>
  </ClientOnly>
</template>

<script setup>

defineProps(["modelValue"]);
// Define service area coordinates

// Get the route and dynamically update the map location
</script>

<style>
/* Add your custom map styles here */
</style>
