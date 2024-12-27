<template>
  <div class="font-roboto">
    <NuxtLayout>
       <NuxtPage />
    </NuxtLayout>
    <ContactButton/>  
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

useHead(() => {
  const route = useRoute();
  const canonicalURL = `https://easyfixappliance.com${route.fullPath}`;
  
  return {
    meta: [
      {
        rel: "canonical",
        href: canonicalURL,
      },
    ],
  };
});
// Inject Google Tag Manager script and noscript
useHead({
  script: [
    {
      // This JavaScript will be deferred until the user interacts
      children: `
        document.addEventListener('DOMContentLoaded', function() {
          const loadGTM = () => {
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5RH2D8CH');
          };

          // Lazy load GTM on user interaction (e.g., scroll or click)
          ['scroll', 'click'].forEach(event => {
            window.addEventListener(event, loadGTM, { once: true });
          });
        });
      `,
      type: 'text/javascript'
    }
  ],
  noscript: [
    {
      children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RH2D8CH"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    }
  ]
});



onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
    
})
</script>

