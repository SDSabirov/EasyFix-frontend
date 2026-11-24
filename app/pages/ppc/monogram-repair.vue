<template>
  <div />
</template>

<script setup>
// First address of the GE Monogram page. Redirects to the current one and keeps the
// query string (gclid, utm_*) that ad clicks carry.
definePageMeta({
  middleware: (to) => navigateTo({ path: '/ppc/ge-monogram-repair', query: to.query }, { redirectCode: 301 }),
})
</script>
