<template>
  <LpBrandLandingPage :page="subzero" />
</template>

<script setup>
import { subzero } from '~/data/ppc_brand_landing'

useSeoMeta({
  title: 'Sub-Zero & Wolf Repair in the Bay Area | Same-Day Service',
  description:
    'Locally owned Sub-Zero and Wolf repair in the Bay Area. Experienced technicians, same-day service and genuine OEM parts. $99 diagnostic visit credited toward the repair.',
})
</script>
