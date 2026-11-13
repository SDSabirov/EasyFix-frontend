<template>
  <LpBrandLandingPage :page="subzero" />
</template>

<script setup>
import { subzero } from '~/data/ppc_brand_landing'

useSeoMeta(subzero.seo)
</script>
