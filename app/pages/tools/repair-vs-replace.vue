<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <header class="grain glow-brass relative bg-ink pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      <span class="ghost-word ghost-word--light text-[6rem] lg:text-[11rem] top-20 -right-6" aria-hidden="true">Decide</span>

      <div class="relative z-10 container mx-auto px-4 max-w-screen-xl text-center">
        <Breadcrumb
          dark
          :custom-breadcrumbs="[{ name: 'Repair vs Replace Calculator', path: '/tools/repair-vs-replace' }]"
        />

        <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          Free Decision Tool
        </span>

        <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
          Repair or Replace?
          <em class="block font-display font-semibold italic text-brass-light">Find out in 30 seconds.</em>
        </h1>

        <p class="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-3 leading-relaxed">
          A simple cost-per-year calculator that helps you decide whether to fix your existing appliance
          or invest in a new one.
        </p>
        <p class="text-sm text-white/50">
          Built by our Bay Area technicians who've seen every common failure mode on Sub-Zero, Wolf, Viking &amp; more.
        </p>
      </div>
    </header>

    <!-- Calculator Section -->
    <section class="bg-cream py-14 sm:py-16 lg:py-20">
      <div class="container mx-auto px-4 max-w-3xl">
        <RepairReplaceCalculator />
      </div>
    </section>

    <!-- When repair vs replace makes sense -->
    <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 -left-8" aria-hidden="true">Advice</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            How to Think About It
          </span>
          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-5">
            When repair beats replace —
            <em class="font-display font-semibold italic text-brass-dark">and when it doesn't</em>
          </h2>
          <p class="text-gray-600 leading-relaxed">Decades of service calls boiled down to a short list. Use it as a sanity check against your calculator result.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
          <div class="relative rounded-[1.5rem] p-7 sm:p-9 border border-primary/5 overflow-hidden" style="background: #F8F0E4;" v-reveal>
            <span class="ghost-word text-[5rem] -top-4 -right-2" aria-hidden="true">01</span>
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-brass-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766m-2.587 4.254L4.5 19.5l2.5-2.5 2.587-2.587"/>
                  </svg>
                </div>
                <h3 class="font-montserrat font-bold tracking-[-0.01em] text-xl sm:text-2xl text-primary">Repair usually wins when…</h3>
              </div>
              <ul class="space-y-3.5 text-gray-700">
                <li class="flex items-start gap-3 text-sm sm:text-base">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <span>Repair is under <strong class="text-primary">50%</strong> of replacement cost.</span>
                </li>
                <li class="flex items-start gap-3 text-sm sm:text-base">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <span>The appliance is under <strong class="text-primary">two-thirds of its expected lifespan</strong>.</span>
                </li>
                <li class="flex items-start gap-3 text-sm sm:text-base">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <span>It's a <strong class="text-primary">luxury or built-in unit</strong> (Sub-Zero, Wolf, Viking) where replacement runs $5,000+.</span>
                </li>
                <li class="flex items-start gap-3 text-sm sm:text-base">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <span>The failure is a <strong class="text-primary">known, single component</strong> (igniter, control board, compressor relay).</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="relative rounded-[1.5rem] p-7 sm:p-9 border border-primary/5 overflow-hidden" style="background: #EDF4F7;" v-reveal="90">
            <span class="ghost-word text-[5rem] -top-4 -right-2" aria-hidden="true">02</span>
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                  </svg>
                </div>
                <h3 class="font-montserrat font-bold tracking-[-0.01em] text-xl sm:text-2xl text-primary">Replacement makes sense when…</h3>
              </div>
              <ul class="space-y-3.5 text-gray-700">
                <li class="flex items-start gap-3 text-sm sm:text-base">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <span>Repair cost is <strong class="text-primary">over 100%</strong> of replacement value.</span>
                </li>
                <li class="flex items-start gap-3 text-sm sm:text-base">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <span>The unit is <strong class="text-primary">past its expected lifespan</strong> and you're seeing multiple symptoms.</span>
                </li>
                <li class="flex items-start gap-3 text-sm sm:text-base">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <span>A new model would deliver <strong class="text-primary">real annual energy savings</strong> that pay back the difference.</span>
                </li>
                <li class="flex items-start gap-3 text-sm sm:text-base">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <span>Parts are <strong class="text-primary">no longer available</strong> from the manufacturer for your model year.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p class="text-center text-sm text-gray-500 mt-10 max-w-2xl mx-auto">
          Not sure what's actually wrong? A diagnostic visit costs less than the cheapest replacement
          and gives you a firm repair quote you can plug back into this calculator.
        </p>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="relative bg-cream py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[6rem] lg:text-[10rem] top-2 -right-6" aria-hidden="true">FAQ</span>

      <div class="container mx-auto px-4 max-w-3xl relative z-10">
        <div class="text-center mb-12" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Trust the Result
          </span>
          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-4">
            Common
            <em class="font-display font-semibold italic text-brass-dark">questions</em>
          </h2>
          <p class="text-gray-600 leading-relaxed">Quick answers to help you trust the result.</p>
        </div>

        <div class="space-y-4">
          <details
            v-for="(faq, idx) in faqs"
            :key="idx"
            class="bg-white rounded-[1.5rem] border border-primary/10 overflow-hidden group transition-colors duration-300 hover:border-brass/40"
            v-reveal="idx * 60"
          >
            <summary class="cursor-pointer p-5 sm:p-6 flex items-center justify-between gap-4 list-none touch-manipulation">
              <span class="flex items-start gap-4">
                <span class="font-display font-semibold text-base text-brass mt-0.5 shrink-0" aria-hidden="true">{{ String(idx + 1).padStart(2, '0') }}</span>
                <span class="font-montserrat font-semibold text-base sm:text-lg text-primary leading-snug">{{ faq.q }}</span>
              </span>
              <svg
                class="w-5 h-5 text-brass flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="px-5 sm:px-6 pb-5 sm:pb-6">
              <div class="border-t border-primary/10 pt-4 sm:pl-9 text-gray-600 leading-relaxed text-sm sm:text-base">
                {{ faq.a }}
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="grain glow-brass relative bg-ink py-20 lg:py-28 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
      <span class="ghost-word ghost-word--light text-[6rem] lg:text-[11rem] top-8 -right-8" aria-hidden="true">Repair</span>

      <div class="container mx-auto px-4 max-w-3xl text-center relative z-10" v-reveal>
        <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-white leading-[1.05] mb-6">
          Got a repair quote —
          <em class="font-display font-semibold italic text-brass-light">or need one?</em>
        </h2>
        <p class="text-white/60 mb-10 text-base sm:text-lg leading-relaxed">
          Our certified technicians service every major luxury brand across the San Francisco Bay Area.
          Same-day diagnostics available.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/booking"
            class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Book Service Online
          </NuxtLink>
          <a
            href="tel:4159414144"
            class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Call (415) 941-4144
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
const faqs = [
  {
    q: "What's the 50% rule?",
    a: "A quick industry heuristic: if a repair costs less than 50% of the price of a comparable new appliance, repair is usually the right call. The calculator's 'rule of thumb' card shows where your inputs land on this scale."
  },
  {
    q: "How accurate is this calculator?",
    a: "It's a directional tool, not a diagnostic. The math is sound, but the result is only as good as the numbers you plug in — especially the repair quote and the expected years of additional life. For an accurate repair quote, book a diagnostic visit."
  },
  {
    q: "Why does brand matter?",
    a: "Luxury brands like Sub-Zero, Wolf, Viking, and Thermador have replacement costs that often exceed $5,000–$15,000 — so the same dollar repair quote tilts heavily toward repair. Entry-level appliances flip the math much sooner."
  },
  {
    q: "Should I count installation in 'replacement cost'?",
    a: "Yes. Include delivery, removal of the old unit, and installation labor. Built-in luxury appliances especially carry significant install costs that swing the decision."
  },
  {
    q: "What if I'm not sure how long a repair will last?",
    a: "Use the 'Reliability after repair' dropdown to model uncertainty. 'Medium' is a safe default for most repairs by a qualified technician using OEM parts."
  }
]

useHead({
  title: 'Repair or Replace Calculator | EasyFix Appliance Repair',
  meta: [
    {
      name: 'description',
      content: 'Free Repair vs Replace calculator for home appliances. Compare cost-per-year, break-even, and 5-year savings to decide whether to fix or replace your refrigerator, oven, washer, or dishwasher. Built by Bay Area appliance repair technicians.'
    },
    {
      name: 'keywords',
      content: 'repair or replace appliance, repair vs replace calculator, 50 percent rule appliance, appliance replacement cost, appliance lifespan, Sub-Zero repair cost, Wolf repair cost, Viking repair cost'
    },
    { property: 'og:title', content: 'Repair or Replace Calculator | EasyFix Appliance Repair' },
    {
      property: 'og:description',
      content: 'Decide whether to repair or replace your appliance in 30 seconds. Free cost-per-year decision tool from Bay Area appliance repair experts.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://easyfixappliance.com/tools/repair-vs-replace' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Repair or Replace Calculator | EasyFix Appliance Repair' },
    { name: 'twitter:description', content: 'Free cost-per-year calculator to decide whether to repair or replace your appliance.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://easyfixappliance.com/tools/repair-vs-replace' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "EasyFix Repair vs. Replace Calculator",
        "url": "https://easyfixappliance.com/tools/repair-vs-replace",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Any (web)",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://easyfixappliance.com#organization",
          "name": "Easy Fix Appliance",
          "url": "https://easyfixappliance.com",
          "telephone": "+14159414144",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "CA",
            "addressLocality": "San Mateo",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://www.instagram.com/easyfixappliance/",
            "https://www.facebook.com/profile.php?id=61570244923151"
          ]
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://easyfixappliance.com/tools/repair-vs-replace#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What's the 50% rule for appliance repair?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A quick industry heuristic: if a repair costs less than 50% of the price of a comparable new appliance, repair is usually the right call. The calculator's 'rule of thumb' card shows where your inputs land on this scale."
            }
          },
          {
            "@type": "Question",
            "name": "How accurate is the Repair vs Replace calculator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It's a directional tool, not a diagnostic. The math is sound, but the result is only as good as the numbers you plug in — especially the repair quote and the expected years of additional life. For an accurate repair quote, book a diagnostic visit."
            }
          },
          {
            "@type": "Question",
            "name": "Why does appliance brand matter when deciding to repair or replace?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Luxury brands like Sub-Zero, Wolf, Viking, and Thermador have replacement costs that often exceed $5,000–$15,000 — so the same dollar repair quote tilts heavily toward repair. Entry-level appliances flip the math much sooner."
            }
          },
          {
            "@type": "Question",
            "name": "Should I include installation in replacement cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Include delivery, removal of the old unit, and installation labor. Built-in luxury appliances especially carry significant install costs that swing the decision."
            }
          },
          {
            "@type": "Question",
            "name": "What if I'm not sure how long a repair will last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the 'Reliability after repair' dropdown to model uncertainty. 'Medium' is a safe default for most repairs by a qualified technician using OEM parts."
            }
          }
        ]
      })
    }
  ]
})
</script>
