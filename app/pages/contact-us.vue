<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <header class="relative bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <span class="ghost-word text-[6rem] lg:text-[11rem] top-20 -right-6" aria-hidden="true">Contact</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <Breadcrumb :custom-breadcrumbs="[{ name: 'Contact', path: '/contact-us' }]" />

          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            We're Here to Help
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-primary leading-[1.05] mb-6">
            Contact Bay Area's Trusted
            <em class="block font-display font-semibold italic text-brass-dark">Appliance Repair Experts</em>
          </h1>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Same-day service for <strong class="text-primary font-semibold">Sub-Zero, Wolf, Viking, Thermador</strong> and all major appliance brands —
            serving <strong class="text-primary font-semibold">San Francisco, San Mateo, Palo Alto</strong> and the entire Bay Area.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:4159414144"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-ink text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:scale-[1.03] touch-manipulation"
            >
              Call (415) 941-4144
            </a>
            <NuxtLink
              to="/booking"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-ink/20 text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-dark hover:scale-[1.03] touch-manipulation"
            >
              Schedule Online
            </NuxtLink>
          </div>
        </div>

        <!-- Hero image band -->
        <div class="relative rounded-[2rem] overflow-hidden aspect-[16/9] sm:aspect-[21/9] shadow-xl shadow-ink/10">
          <img
            src="/assets/img/contact.webp"
            alt="Easy Fix Appliance technician assisting a Bay Area customer"
            class="w-full h-full object-cover object-bottom"
            loading="eager"
            decoding="async"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden="true"></div>
        </div>
      </div>
    </header>

    <!-- Quick Options Section -->
    <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 -left-8" aria-hidden="true">Connect</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Quick Options
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05]">
            Choose the way that
            <em class="font-display font-semibold italic text-brass-dark">works for you</em>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          <a
            href="tel:4159414144"
            class="group relative bg-white border border-primary/10 rounded-[1.5rem] p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
            v-reveal
          >
            <div class="flex items-start justify-between mb-8">
              <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">By Phone</span>
              <span class="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 text-primary transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&#8599;</span>
            </div>
            <h3 class="font-display font-semibold text-2xl text-primary mb-3 group-hover:text-brass-dark transition-colors">Call or Text Us</h3>
            <p class="text-sm text-gray-600 leading-relaxed mb-4">Speak directly with our team — same-day and after-hours emergency service available.</p>
            <p class="font-display font-semibold text-xl text-brass-dark">(415) 941-4144</p>
          </a>

          <NuxtLink
            to="/booking"
            class="group relative bg-white border border-primary/10 rounded-[1.5rem] p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
            v-reveal="90"
          >
            <div class="flex items-start justify-between mb-8">
              <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">Online</span>
              <span class="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 text-primary transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&#8599;</span>
            </div>
            <h3 class="font-display font-semibold text-2xl text-primary mb-3 group-hover:text-brass-dark transition-colors">Book an Appointment</h3>
            <p class="text-sm text-gray-600 leading-relaxed mb-4">Pick a time that works for you — our team confirms your appointment within two hours.</p>
            <p class="font-display font-semibold text-xl text-brass-dark">Same-Day Slots</p>
          </NuxtLink>

          <NuxtLink
            to="/faq"
            class="group relative bg-white border border-primary/10 rounded-[1.5rem] p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
            v-reveal="180"
          >
            <div class="flex items-start justify-between mb-8">
              <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">Self-Serve</span>
              <span class="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 text-primary transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&#8599;</span>
            </div>
            <h3 class="font-display font-semibold text-2xl text-primary mb-3 group-hover:text-brass-dark transition-colors">Browse Our FAQ</h3>
            <p class="text-sm text-gray-600 leading-relaxed mb-4">Answers on pricing, warranties, service areas, and luxury appliance brands.</p>
            <p class="font-display font-semibold text-xl text-brass-dark">Instant Answers</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <LandingContacts />
    <Footer />
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
