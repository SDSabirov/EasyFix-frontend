<template>
  <div>
    <NuxtLayout>
       <NuxtPage />
    </NuxtLayout>  
  </div>
</template>

<script setup>


// Inject Google Tag Manager script and noscript
useHead({
  script: [
    {
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5RH2D8CH');`,
      type: 'text/javascript'
    }
  ],
  noscript: [
    {
      children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RH2D8CH"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    }
  ]
})

// Append the housecall-pro-chat-bubble script to the head only on the client side
if (process.client) {
  const script = document.createElement('script')
  script.id = 'housecall-pro-chat-bubble'
  script.src = 'https://chat.housecallpro.com/proChat.js'
  script.type = 'text/javascript'
  script.defer = true
  script.setAttribute('data-color', '#0E6FBE')
  script.setAttribute('data-organization', 'c473d1ee-641c-46a0-9caf-2b6a9168cc50')

  document.head.appendChild(script)
}
</script>