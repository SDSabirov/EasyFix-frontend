<template>
  <LpBrandLandingPage :page="miele" />
</template>

<script setup>
import { miele } from '~/data/ppc_brand_landing'

useSeoMeta(miele.seo)
</script>
