<template>
  <div class="flex flex-col min-h-screen bg-white">
    <Navbar />

    <!-- Hero -->
    <header class="relative bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <span class="ghost-word text-[6rem] lg:text-[11rem] top-20 -right-6" aria-hidden="true">Careers</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10 text-center">
        <Breadcrumb :custom-breadcrumbs="[{ name: 'Careers', path: '/careers' }]" />

        <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          We're Hiring
        </span>

        <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-primary leading-[1.05] mb-6">
          Easy Fix Appliance
          <em class="block font-display font-semibold italic text-brass-dark">Technician Application</em>
        </h1>

        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Join the Bay Area's trusted appliance repair team. Fill out the application below — we review every submission and follow up within a few business days.
        </p>
      </div>
    </header>

    <!-- Form Section -->
    <main class="flex-1 bg-white py-14 sm:py-16 lg:py-20">
      <div class="max-w-3xl mx-auto px-4">
        <section
          class="bg-white rounded-[2rem] border border-primary/10 shadow-xl shadow-ink/5 p-6 sm:p-10 lg:p-12"
        >
          <FormsJobApplication />
        </section>

        <p class="text-center text-sm text-gray-500 mt-8">
          Questions about the position? Call us at
          <a href="tel:4159414144" class="font-montserrat font-semibold text-brass-dark hover:text-brass transition-colors">(415) 941-4144</a>
          or email
          <a href="mailto:care@easyfixappliance.com" class="font-montserrat font-semibold text-brass-dark hover:text-brass transition-colors">care@easyfixappliance.com</a>.
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
