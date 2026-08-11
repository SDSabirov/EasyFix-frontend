<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <header class="relative bg-cream pt-32 pb-14 lg:pt-40 lg:pb-16 overflow-hidden">
      <span class="ghost-word text-[6rem] lg:text-[11rem] top-20 -right-6" aria-hidden="true">Booking</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <Breadcrumb :custom-breadcrumbs="[{ name: 'Book Online', path: '/booking' }]" />

          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Online Scheduling
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-primary leading-[1.05] mb-6">
            Book Your Appliance Repair
            <em class="block font-display font-semibold italic text-brass-dark">in Minutes</em>
          </h1>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Pick a time that works for you and our <strong class="text-primary font-semibold">certified technicians</strong> will take it from there.
            Same-day appointments available across the <strong class="text-primary font-semibold">Bay Area</strong>.
          </p>

          <p class="text-sm text-gray-500">
            Prefer to talk?
            <a href="tel:4159414144" class="font-montserrat font-semibold text-brass-dark hover:text-brass transition-colors">Call (415) 941-4144</a>
          </p>
        </div>
      </div>
    </header>

    <!-- Booking Widget Section -->
    <section class="bg-white py-14 lg:py-20">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="bg-white rounded-[2rem] border border-primary/10 shadow-sm overflow-hidden">
          <iframe
            src="https://online-booking.workiz.com/?ac=df293d7dfac82f3233068ff6ed38d341f0f350efd0c9fbfe9070308fd4e0efa7"
            title="Easy Fix Appliance online booking"
            width="100%"
            height="800px"
            class="min-h-[600px] sm:min-h-[800px] lg:min-h-[1000px]"
            style="border: none"
          ></iframe>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'

// initialize components based on data attribute selectors
onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})

useHead({
  title: 'Book Appliance Repair Online | Easy Fix Appliance | Bay Area',
  meta: [
    {
      name: 'description',
      content: 'Schedule your appliance repair online with Easy Fix Appliance. Same-day appointments available across the Bay Area for Sub-Zero, Wolf, Viking, Thermador and more.'
    }
  ]
});
</script>
