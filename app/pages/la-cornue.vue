<template>
  <div class="pb-[72px] lg:pb-0">
    <Navbar />

    <!-- Hero Section -->
    <header class="grain glow-brass relative bg-ink pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      <span class="ghost-word ghost-word--light text-[6rem] lg:text-[11rem] top-24 -right-6" aria-hidden="true">Repairs</span>

      <!-- Hero Content -->
      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Certified La Cornue Specialists
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
            Professional La Cornue
            <em class="block font-display font-semibold italic text-brass-light">Appliance Repair Services</em>
          </h1>

          <p class="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10 [&_strong]:text-white [&_strong]:font-semibold">
            Expert repair services for iconic French La Cornue ranges and cooking equipment.
            <strong>Factory-trained technicians</strong> serving the Bay Area with <strong>same-day service</strong> and genuine La Cornue parts.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:4159414144"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
            >
              Call Now: (415) 941-4144
            </a>

            <NuxtLink
              to="/booking"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation"
            >
              Schedule Service Online
            </NuxtLink>
          </div>

          <!-- Trust line -->
          <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            <span class="inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
              Factory-Trained Technicians
            </span>
            <span class="inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
              Genuine La Cornue Parts
            </span>
            <span class="inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
              Same-Day Service
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- About La Cornue Section -->
    <section class="relative bg-cream py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 -right-4" aria-hidden="true">Heritage</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-4xl mx-auto mb-14 lg:mb-16" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            French Culinary Excellence
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
            La Cornue:
            <em class="font-display font-semibold italic text-brass-dark">Artistry & Tradition</em>
          </h2>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why La Cornue has been the pinnacle of French culinary craftsmanship since 1908, combining handcrafted artistry with uncompromising performance.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          <div v-reveal>
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary mb-6">Handcrafted French Heritage</h3>
            <div class="space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed [&_strong]:text-primary [&_strong]:font-semibold">
              <p>
                Since 1908, La Cornue has been synonymous with <strong>French culinary excellence</strong>, handcrafting each range in their atelier near Paris. Every La Cornue is a masterpiece of engineering and artistry, featuring the iconic vaulted oven design that creates perfect convection for exceptional cooking results.
              </p>
              <p>
                La Cornue ranges feature <strong>patented gas burner technology</strong> with precise flame control and the legendary <strong>Vaulted Oven</strong> design that ensures even heat distribution. From the iconic Chateau series to the contemporary CornuFe line, each appliance represents over a century of <strong>French savoir-faire</strong>.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="rounded-[1.25rem] bg-white border border-primary/5 shadow-sm p-6">
                <div class="font-display font-semibold text-3xl text-brass-dark mb-1">1908</div>
                <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Founded in France</div>
              </div>
              <div class="rounded-[1.25rem] bg-white border border-primary/5 shadow-sm p-6">
                <div class="font-display font-semibold text-3xl text-brass-dark mb-1">100%</div>
                <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Handcrafted</div>
              </div>
            </div>
          </div>

          <div class="relative rounded-[2rem] overflow-hidden border border-primary/5 shadow-sm" v-reveal="150">
            <img loading="lazy" decoding="async" src="/assets/img/la_courne.webp" alt="La Cornue luxury French range in professional kitchen" class="w-full aspect-[4/3] object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden="true"></div>
            <div class="absolute bottom-4 right-4 rounded-[1.25rem] bg-white/95 backdrop-blur-sm shadow-lg px-6 py-4">
              <div class="font-display font-semibold text-2xl text-brass-dark">French</div>
              <div class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">Artistry</div>
            </div>
          </div>
        </div>

        <!-- Feature Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal>
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Vaulted Oven Design</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">La Cornue's signature arched oven ceiling creates natural convection for perfect heat circulation and exceptional baking results.</p>
          </div>

          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal="90">
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Precision Gas Burners</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Patented burner technology delivers precise flame control from intense searing heat to gentle simmering perfection.</p>
          </div>

          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal="180">
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Custom Finishes</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Choose from over 30 signature colors and custom finishes to create a range that perfectly complements your kitchen design.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Expertise Section -->
    <section class="grain relative bg-ink py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word ghost-word--light text-[6rem] lg:text-[11rem] -top-4 -left-8" aria-hidden="true">Expertise</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div v-reveal>
            <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
              Certified Expertise
            </span>

            <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05] mb-8">
              15+ Years of La Cornue
              <em class="block font-display font-semibold italic text-brass-light">Repair Excellence</em>
            </h2>

            <div class="space-y-5 text-base sm:text-lg text-white/70 leading-relaxed [&_strong]:text-white [&_strong]:font-semibold">
              <p>
                At Easy Fix Appliance, we've been the Bay Area's trusted La Cornue repair specialists for over <strong>15 years</strong>. Our factory-trained technicians understand the precision craftsmanship behind La Cornue's legendary ranges, from the intricate gas valve systems to the specialized vaulted oven components.
              </p>
              <p>
                We serve <strong>San Mateo, Palo Alto, Foster City, San Francisco</strong>, and the entire Bay Area with comprehensive La Cornue repair services. From burner calibration to thermostat replacement, we use only <strong>genuine La Cornue parts</strong> and specialized diagnostic tools to restore your range to factory performance standards.
              </p>
            </div>

            <!-- Key Benefits -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5" v-reveal>
                <div class="flex items-start gap-3">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h3 class="font-montserrat font-bold text-base text-white mb-1.5">Factory Certification</h3>
                    <p class="text-sm text-white/50 leading-relaxed">La Cornue-authorized service technicians</p>
                  </div>
                </div>
              </div>

              <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5" v-reveal="90">
                <div class="flex items-start gap-3">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h3 class="font-montserrat font-bold text-base text-white mb-1.5">Genuine La Cornue Parts</h3>
                    <p class="text-sm text-white/50 leading-relaxed">Only authentic replacement components</p>
                  </div>
                </div>
              </div>

              <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5" v-reveal="180">
                <div class="flex items-start gap-3">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h3 class="font-montserrat font-bold text-base text-white mb-1.5">Same-Day Service</h3>
                    <p class="text-sm text-white/50 leading-relaxed">Same-day & after-hours repairs available</p>
                  </div>
                </div>
              </div>

              <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5" v-reveal="270">
                <div class="flex items-start gap-3">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h3 class="font-montserrat font-bold text-base text-white mb-1.5">2-Year Warranty</h3>
                    <p class="text-sm text-white/50 leading-relaxed">Comprehensive coverage on all repairs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Appliances We Service Panel -->
          <div class="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 lg:p-10" v-reveal="150">
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-white mb-2">
              La Cornue Appliances
              <em class="font-display font-semibold italic text-brass-light">We Service</em>
            </h3>
            <p class="text-white/60 mb-8">Complete repair solutions for all La Cornue models</p>

            <div class="space-y-6">
              <div class="border-b border-white/10 pb-6">
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">Chateau Series</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Gas burner repairs & calibration
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Vaulted oven maintenance
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Thermostat replacements
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Ignition system service
                  </li>
                </ul>
              </div>

              <div class="border-b border-white/10 pb-6">
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">CornuFe Series</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Electric oven element repairs
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Control panel diagnostics
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Door seal replacements
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Fan motor service
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">Rangetops & Accessories</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Cooktop burner repairs
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Griddle & plancha service
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Hood ventilation repairs
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Rotisserie maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 -left-8" aria-hidden="true">Answers</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-4xl mx-auto mb-12 lg:mb-16" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Common Questions
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
            Frequently Asked
            <em class="font-display font-semibold italic text-brass-dark">Questions</em>
          </h2>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about La Cornue appliance repairs in the Bay Area
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-6xl mx-auto">
          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal>
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              How long do La Cornue ranges typically last?
            </h3>
            <p class="text-gray-600 leading-relaxed">La Cornue ranges are built to last a lifetime with proper maintenance. Many La Cornue owners pass their ranges down through generations, with some units operating beautifully for 50+ years.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal="90">
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              Do you have access to genuine La Cornue parts?
            </h3>
            <p class="text-gray-600 leading-relaxed">Yes, as authorized La Cornue service specialists, we have direct access to genuine factory parts including specialized components for vintage and current models.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal>
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              Can you repair vintage La Cornue ranges?
            </h3>
            <p class="text-gray-600 leading-relaxed">Absolutely. Our technicians are trained to service both modern and vintage La Cornue ranges, maintaining the legacy and performance of these timeless appliances.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal="90">
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              What's your warranty on La Cornue repairs?
            </h3>
            <p class="text-gray-600 leading-relaxed">We provide a 2-year warranty on all parts and labor for La Cornue repairs, ensuring your investment in French culinary excellence is protected.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="bg-cream py-20 lg:py-28">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="grain glow-brass relative bg-ink rounded-[2rem] px-6 py-14 sm:px-14 sm:py-16 text-center overflow-hidden" v-reveal>
          <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
          <div class="relative z-10 max-w-4xl mx-auto">
            <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
              Ready to Restore Your
              <em class="font-display font-semibold italic text-brass-light">La Cornue Range?</em>
            </h2>

            <p class="text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
              Don't let appliance issues interrupt your culinary artistry. Our certified technicians are ready to provide expert La Cornue repair services with same-day availability throughout the Bay Area.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:4159414144"
                class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
              >
                Call Now: (415) 941-4144
              </a>

              <NuxtLink
                to="/booking"
                class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation"
              >
                Schedule Service Online
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />

    <!-- Sticky Mobile CTA Bar -->
    <div
      class="fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ease-out"
      :class="showStickyCta ? 'translate-y-0' : 'translate-y-full'"
      :style="{ paddingBottom: 'env(safe-area-inset-bottom)' }"
    >
      <div class="flex gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm border-t border-primary/10 shadow-[0_-4px_20px_rgba(10,35,51,0.12)]">
        <a
          href="tel:4159414144"
          class="flex-1 inline-flex items-center justify-center min-h-[48px] px-4 py-3 rounded-full bg-ink text-white font-montserrat text-xs font-semibold uppercase tracking-[0.12em] touch-manipulation active:scale-[0.97] transition-transform"
        >
          Call Now
        </a>
        <NuxtLink
          to="/booking"
          class="flex-1 inline-flex items-center justify-center min-h-[48px] px-4 py-3 rounded-full border border-ink/20 text-ink font-montserrat text-xs font-semibold uppercase tracking-[0.12em] touch-manipulation active:scale-[0.97] transition-transform"
        >
          Book Online
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Sticky CTA visibility
const showStickyCta = ref(false);

const handleScroll = () => {
  const threshold = window.innerHeight * 0.75;
  showStickyCta.value = window.scrollY > threshold;
};

// SEO optimization
useHead({
  title: 'La Cornue Appliance Repair Services | Bay Area French Range Specialists',
  meta: [
    {
      name: 'description',
      content: 'Expert La Cornue range repairs in Bay Area. Factory-certified technicians for Chateau, CornuFe, and all French luxury cooking appliances. Same-day service, genuine parts, 2-year warranty. Call (415) 941-4144'
    },
    {
      name: 'keywords',
      content: 'La Cornue repair, La Cornue range repair, French range repair, Chateau range service, luxury range repair, Bay Area appliance repair, San Mateo La Cornue repair, certified technicians'
    },
    {
      property: 'og:title',
      content: 'La Cornue Appliance Repair Services | Bay Area French Range Specialists'
    },
    {
      property: 'og:description',
      content: 'Factory-certified La Cornue range repair services in the Bay Area. French culinary specialists with same-day service and genuine La Cornue parts.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Easy Fix Appliance - La Cornue Repair Specialists",
        "description": "Factory-certified La Cornue range repair services in the Bay Area",
        "url": "https://easyfixappliance.com/la-cornue",
        "telephone": "+14159414144",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "CA",
          "addressLocality": "San Mateo",
          "addressCountry": "US"
        },
        "areaServed": [
          "San Mateo",
          "Palo Alto",
          "Foster City",
          "San Francisco",
          "Bay Area"
        ],
        "serviceType": [
          "La Cornue Appliance Repair",
          "French Range Repair",
          "Chateau Range Service",
          "Luxury Cooking Appliance Repair",
          "CornuFe Range Repair"
        ],
        "openingHours": "Mo-Su 08:00-20:00",
        "priceRange": "$$$",
        "sameAs": [
          "https://www.instagram.com/easyfixappliance/",
          "https://www.facebook.com/profile.php?id=61570244923151"
        ]
      })
    }
  ]
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Flowbite initialization
onMounted(() => {
  const flowbiteElements = document.querySelectorAll('[data-flowbite]');
  if (flowbiteElements.length > 0) {
    useFlowbite(() => {
      initFlowbite();
    })
  }
});
</script>