<template>
  <div class="font-roboto">
    <NuxtLayout>
       <NuxtPage />
    </NuxtLayout>
    <ModalsPrivacy />
  </div>
</template>

<script setup>
// GTM is injected by plugins/deferred-scripts.client.js on first interaction,
// except on the /ppc/* landing pages, which load it with the page
// (head snippet in components/Lp/LandingPage.vue).
useHead({
  noscript: [
    {
      children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RH2D8CH"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    }
  ]
})
</script>
