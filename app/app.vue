<template>
  <div class="font-roboto">
    <NuxtLayout>
       <NuxtPage />
    </NuxtLayout>
    <ModalsPrivacy />
  </div>
</template>

<script setup>
// GTM + CallTrackingMetrics are injected by plugins/deferred-scripts.client.js
// (on first interaction / idle) to keep them off the critical rendering path.
useHead({
  noscript: [
    {
      children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RH2D8CH"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    }
  ]
})
</script>
