<template>
  <div />
</template>

<script setup>
// First address of the Sub-Zero & Wolf page. Redirects to the current one and keeps the
// query string (gclid, utm_*) that ad clicks carry. Done here rather than with a
// routeRules redirect, so it does not depend on how the host's redirect file treats
// query strings.
definePageMeta({
  middleware: (to) => navigateTo({ path: '/ppc/sub-zero-wolf-repair', query: to.query }, { redirectCode: 301 }),
})
</script>
