<template>
  <LpBrandLandingPage :page="laCornue" />
</template>

<script setup>
import { laCornue } from '~/data/ppc_brand_landing'

useSeoMeta(laCornue.seo)
</script>
