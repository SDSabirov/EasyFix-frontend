<template>
  <div class="flex flex-col min-h-screen bg-white">
    <Navbar />

    <!-- Hero -->
    <header
      class="relative pt-32 pb-16 sm:pt-40 sm:pb-20"
      style="background: linear-gradient(135deg, #0c2a3b 0%, #1c6e8c 100%);"
    >
      <div class="max-w-screen-xl mx-auto px-4 text-center">
        <span
          class="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] mb-4"
          style="color: #f97316;"
        >
          We're hiring
        </span>
        <h1 class="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
          Easy Fix Appliance Technician Application
        </h1>
        <p class="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Join the Bay Area's trusted appliance repair team. Fill out the application below — we review every submission and follow up within a few business days.
        </p>
      </div>
    </header>

    <!-- Form Section -->
    <main class="flex-1 bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div class="max-w-3xl mx-auto px-4">
        <section
          class="bg-white rounded-3xl shadow-[0_20px_60px_-20px_rgba(12,42,59,0.18)] ring-1 ring-gray-100 p-6 sm:p-10 lg:p-12"
        >
          <FormsJobApplication />
        </section>

        <p class="text-center text-sm text-gray-500 mt-8">
          Questions about the position? Call us at
          <a href="tel:4159414144" class="text-primary font-medium hover:underline">(415) 941-4144</a>
          or email
          <a href="mailto:care@easyfixappliance.com" class="text-primary font-medium hover:underline">care@easyfixappliance.com</a>.
        </p>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Careers | Easy Fix Appliance | Technician Application',
  meta: [
    {
      name: 'description',
      content:
        "Apply to join Easy Fix Appliance as a technician. Bay Area appliance repair careers — submit your application online and our team will follow up within a few business days."
    },
    {
      name: 'keywords',
      content:
        'appliance repair jobs, appliance technician jobs Bay Area, Easy Fix careers, technician application, San Francisco appliance repair careers'
    },
    { property: 'og:title', content: 'Careers | Easy Fix Appliance Technician Application' },
    {
      property: 'og:description',
      content: "Join the Bay Area's trusted appliance repair team. Apply online today."
    },
    { property: 'og:type', content: 'website' }
  ]
});
</script>
