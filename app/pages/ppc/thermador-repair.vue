<template>
  <LpBrandLandingPage :page="thermador" />
</template>

<script setup>
import { thermador } from '~/data/ppc_brand_landing'

useSeoMeta(thermador.seo)
</script>
