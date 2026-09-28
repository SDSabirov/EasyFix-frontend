<template>
  <LpLandingPage :variant="general" />
</template>

<script setup>
import { general } from '~/data/ppc_landing'

useSeoMeta({
  title: 'Appliance Repair in the Bay Area | Same-Day Service',
  description:
    'Locally owned appliance repair in the Bay Area. Experienced technicians for GE, Whirlpool, Samsung, LG, KitchenAid, Bosch and more. $99 diagnostic visit applied toward the repair.',
})
</script>
