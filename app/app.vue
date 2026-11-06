<template>
  <div class="font-roboto">
    <NuxtLayout>
       <NuxtPage />
    </NuxtLayout>
    <ModalsPrivacy />
  </div>
</template>

<script setup>
// Google Tag Manager, standard install: loads as the page loads, without waiting for
// any interaction. The anti-fraud tag (and Clarity, Ads, GA4) live in this container,
// and bot detection needs it to run for visitors who never move the mouse.
useHead({
  script: [
    {
      key: 'gtm',
      tagPriority: 'high',
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5RH2D8CH');`,
    },
  ],
  noscript: [
    {
      children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RH2D8CH"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    }
  ]
})
</script>
