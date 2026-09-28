<template>
  <LpLandingPage :variant="highEnd" />
</template>

<script setup>
import { highEnd } from '~/data/ppc_landing'

useSeoMeta({
  title: 'Bay Area Appliance Repair | Same-Day Service',
  description:
    'Locally owned appliance repair in the Bay Area. Experienced technicians for Sub-Zero, Wolf, Miele, Viking, Thermador and more. $99 diagnostic visit applied toward the repair.',
})
</script>
