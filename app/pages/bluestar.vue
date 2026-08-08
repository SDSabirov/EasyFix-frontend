<template>
  <BrandLanding :brand="brand" />
</template>

<script setup>
import { brandsData } from '~/data/brands_data';
const brand = brandsData.bluestar;
</script>
