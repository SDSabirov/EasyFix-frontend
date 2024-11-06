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
});

// Define cities and zip codes data
const cities = [
  "Atherton", "Belmont", "Burlingame", "Emerald Hills", "Foster City",
  "Half Moon Bay", "Hillsborough", "Los Altos", "Los Altos Hills", "Los Gatos",
  "Menlo Park", "Millbrae", "Monte Sereno", "Mountain View", "Pacifica",
  "Palo Alto", "Portola Valley", "Redwood City", "San Carlos", "San Francisco",
  "San Mateo", "Saratoga", "Sunnyvale", "Woodside"
];

const zipCodes = [
  "94020", "94022", "94028", "94301", "94302", "94303", "94304", "94306", "95033",
  "94010", "94401", "94402", "94403", "94404", "94497",
  "94025", "94026", "94027", "94061", "94062", "94023",
  "94024", "95030", "95032", "94010", "95030", "94019",
  "94063", "94064", "94065", "94039", "94040", "94041",
  "94042", "94043", "94085", "94086", "94087", "94089",
  "95070", "95071", "94002", "94070", "94121", "94122",
  "94123", "94118", "94115", "94158", "94114", "94117",
  "94110", "94113", "94127"
];

// Define JSON-LD structured data
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Appliance Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Easy Fix Appliance",
    "image": "https://example.com/logo.svg", // Update with your logo URL
    "address": cities.map((city, index) => ({
      "@type": "PostalAddress",
      "addressLocality": city,
      "postalCode": zipCodes[index] || "", // Match city to zip code
      "addressRegion": "CA",
      "addressCountry": "US"
    })),
    "url": "https://easyfixappliance.com", // Update with your website URL
    "telephone": "+14159414144" // Update with your business phone number
  },
  "areaServed": cities.map(city => ({
    "@type": "Place",
    "name": city
  }))
};

// Inject JSON-LD structured data into head
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(jsonLdData)
    }
  ]
});
</script>

