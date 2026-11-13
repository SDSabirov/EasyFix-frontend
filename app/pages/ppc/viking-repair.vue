<template>
  <LpBrandLandingPage :page="viking" />
</template>

<script setup>
import { viking } from '~/data/ppc_brand_landing'

useSeoMeta(viking.seo)
</script>
