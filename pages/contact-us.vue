
<template>
  <div>
    <Navbar />
    <header class="w-screen max-h-[70vh] relative overflow-hidden">
      <img
        src="/assets/img/contact.webp"
        alt="background"
        class="object-cover object-bottom w-full h-full"
      />
      <div
        class="h-full w-full bg-black/20 absolute top-0 flex flex-col space-y-4 items-center justify-center"
      >
        
      </div>
    </header>
    <LandingContacts/>
    <Footer/>
  </div>
</template>

<script setup>
// SEO optimization
useHead({
  title: 'Contact Us | Easy Fix Appliance | Bay Area Appliance Repair',
  meta: [
    {
      name: 'description',
      content: 'Contact Easy Fix Appliance for professional appliance repair services in the Bay Area. Call (415) 941-4144 or schedule online. Serving San Francisco, Palo Alto, San Mateo & surrounding areas.'
    },
    {
      name: 'keywords',
      content: 'contact appliance repair, Bay Area appliance service, Easy Fix Appliance contact, appliance repair phone number, schedule appliance repair'
    },
    {
      property: 'og:title',
      content: 'Contact Easy Fix Appliance | Bay Area Appliance Repair'
    },
    {
      property: 'og:description',
      content: 'Get in touch with Bay Area\'s trusted appliance repair experts. Same-day service available for all major appliance brands.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
});
</script>
