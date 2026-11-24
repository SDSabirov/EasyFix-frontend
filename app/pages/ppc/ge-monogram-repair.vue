<template>
  <LpBrandLandingPage :page="monogram" />
</template>

<script setup>
import { monogram } from '~/data/ppc_brand_landing'

useSeoMeta(monogram.seo)
</script>
