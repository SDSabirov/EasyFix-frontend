<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <header
      class="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden"
      style="background: #0c2a3b; background-image: linear-gradient(to bottom right, #0c2a3b, #1C6E8C);"
    >
      <div class="absolute top-20 left-12 w-24 h-24 rounded-full blur-2xl animate-pulse" style="background: rgba(249, 115, 22, 0.2);"></div>
      <div class="absolute bottom-10 right-16 w-40 h-40 rounded-full blur-3xl animate-pulse delay-700" style="background: rgba(248, 237, 227, 0.15);"></div>

      <div class="relative z-10 container mx-auto px-4 max-w-screen-xl text-center">
        <div
          class="inline-flex items-center px-5 py-2 rounded-full mb-6 border"
          style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(8px); border-color: rgba(255, 255, 255, 0.25);"
        >
          <svg class="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <span class="font-semibold text-white text-sm">Free Decision Tool</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
          Repair or Replace?
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Find out in 30 seconds.</span>
        </h1>

        <p class="text-base sm:text-xl text-white/85 max-w-2xl mx-auto mb-2">
          A simple cost-per-year calculator that helps you decide whether to fix your existing appliance
          or invest in a new one.
        </p>
        <p class="text-sm text-white/70">
          Built by our Bay Area technicians who've seen every common failure mode on Sub-Zero, Wolf, Viking & more.
        </p>
      </div>
    </header>

    <!-- Calculator Section -->
    <section class="py-12 sm:py-16 lg:py-20" style="background: linear-gradient(to bottom, #f8fafc, #ffffff);">
      <div class="container mx-auto px-4 max-w-3xl">
        <RepairReplaceCalculator />
      </div>
    </section>

    <!-- When repair vs replace makes sense -->
    <section class="py-12 sm:py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <div class="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <svg class="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.5M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
            </svg>
            <span class="text-primary font-semibold text-sm">How to think about it</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-bold text-primary mb-3">When repair beats replace — and when it doesn't</h2>
          <p class="text-gray-600">Decades of service calls boiled down to a short list. Use it as a sanity check against your calculator result.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div class="bg-emerald-50 rounded-2xl p-6 sm:p-8 ring-1 ring-emerald-100">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766m-2.587 4.254L4.5 19.5l2.5-2.5 2.587-2.587"/>
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-emerald-800">Repair usually wins when…</h3>
            </div>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Repair is under <strong>50%</strong> of replacement cost.</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                <span>The appliance is under <strong>two-thirds of its expected lifespan</strong>.</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                <span>It's a <strong>luxury or built-in unit</strong> (Sub-Zero, Wolf, Viking) where replacement runs $5,000+.</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                <span>The failure is a <strong>known, single component</strong> (igniter, control board, compressor relay).</span>
              </li>
            </ul>
          </div>

          <div class="bg-secondary/5 rounded-2xl p-6 sm:p-8 ring-1 ring-secondary/15">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-secondary">Replacement makes sense when…</h3>
            </div>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Repair cost is <strong>over 100%</strong> of replacement value.</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                <span>The unit is <strong>past its expected lifespan</strong> and you're seeing multiple symptoms.</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                <span>A new model would deliver <strong>real annual energy savings</strong> that pay back the difference.</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Parts are <strong>no longer available</strong> from the manufacturer for your model year.</span>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-center text-sm text-gray-500 mt-10 max-w-2xl mx-auto">
          Not sure what's actually wrong? A diagnostic visit costs less than the cheapest replacement
          and gives you a firm repair quote you can plug back into this calculator.
        </p>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-10">
          <h2 class="text-2xl sm:text-4xl font-bold text-primary mb-3">Common questions</h2>
          <p class="text-gray-600">Quick answers to help you trust the result.</p>
        </div>

        <div class="space-y-4">
          <details
            v-for="(faq, idx) in faqs"
            :key="idx"
            class="bg-white rounded-2xl ring-1 ring-gray-100 shadow-sm overflow-hidden group"
          >
            <summary class="cursor-pointer p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-gray-900 list-none">
              <span class="text-base sm:text-lg">{{ faq.q }}</span>
              <svg
                class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed">
              {{ faq.a }}
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section
      class="py-12 sm:py-16 lg:py-20"
      style="background-image: linear-gradient(to bottom right, #0c2a3b, #1C6E8C);"
    >
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="text-2xl sm:text-4xl font-bold text-white mb-4">
          Got a repair quote — or need one?
        </h2>
        <p class="text-white/85 mb-8 text-base sm:text-lg">
          Our certified technicians service every major luxury brand across the San Francisco Bay Area.
          Same-day diagnostics available.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-2xl hover:shadow-2xl hover:-translate-y-0.5 transition-all cursor-pointer min-h-[52px] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Book Service Online
          </NuxtLink>
          <a
            href="tel:4159414144"
            class="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/20 transition-all cursor-pointer min-h-[52px] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
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
