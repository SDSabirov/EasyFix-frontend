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
            Certified GAGGENAU Specialists
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
            Professional GAGGENAU
            <em class="block font-display font-semibold italic text-brass-light">Appliance Repair Services</em>
          </h1>

          <p class="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10 [&_strong]:text-white [&_strong]:font-semibold">
            Expert repair services for precision German GAGGENAU appliances.
            <strong>Factory-trained technicians</strong> serving the Bay Area with <strong>same-day service</strong> and genuine GAGGENAU parts.
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
              Genuine GAGGENAU Parts
            </span>
            <span class="inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
              Same-Day Service
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- About GAGGENAU Section -->
    <section class="relative bg-cream py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 -right-4" aria-hidden="true">Heritage</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-4xl mx-auto mb-14 lg:mb-16" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            German Precision Engineering
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
            GAGGENAU:
            <em class="font-display font-semibold italic text-brass-dark">Innovation Since 1683</em>
          </h2>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why GAGGENAU has been the pinnacle of German engineering excellence for over 340 years, combining cutting-edge technology with timeless craftsmanship.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          <div v-reveal>
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary mb-6">German Engineering Heritage</h3>
            <div class="space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed [&_strong]:text-primary [&_strong]:font-semibold">
              <p>
                Since 1683, GAGGENAU has been synonymous with <strong>German precision engineering</strong>, originating as a forge in the Black Forest and evolving into the world's premier luxury appliance manufacturer. Every GAGGENAU appliance represents over three centuries of innovation and uncompromising quality.
              </p>
              <p>
                GAGGENAU pioneered revolutionary technologies including the first <strong>convection oven</strong>, advanced <strong>steam cooking systems</strong>, and precision <strong>induction cooktops</strong>. From their iconic EB 333 oven to cutting-edge Vario cooktops, each appliance exemplifies <strong>functional perfection</strong> with minimalist design.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="rounded-[1.25rem] bg-white border border-primary/5 shadow-sm p-6">
                <div class="font-display font-semibold text-3xl text-brass-dark mb-1">1683</div>
                <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Founded in Germany</div>
              </div>
              <div class="rounded-[1.25rem] bg-white border border-primary/5 shadow-sm p-6">
                <div class="font-display font-semibold text-3xl text-brass-dark mb-1">340+</div>
                <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Years of Innovation</div>
              </div>
            </div>
          </div>

          <div class="relative rounded-[2rem] overflow-hidden border border-primary/5 shadow-sm" v-reveal="150">
            <img loading="lazy" decoding="async" src="/assets/img/gaggenau.webp" alt="GAGGENAU luxury German appliances in modern kitchen" class="w-full aspect-[4/3] object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden="true"></div>
            <div class="absolute bottom-4 right-4 rounded-[1.25rem] bg-white/95 backdrop-blur-sm shadow-lg px-6 py-4">
              <div class="font-display font-semibold text-2xl text-brass-dark">German</div>
              <div class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">Precision</div>
            </div>
          </div>
        </div>

        <!-- Feature Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal>
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Steam Cooking Technology</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Revolutionary Combi-Steam ovens combine steam and convection for healthier cooking while preserving nutrients and flavors.</p>
          </div>

          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal="90">
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Flex Induction Cooktops</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Precision induction technology with flexible cooking zones that adapt to any cookware size and position.</p>
          </div>

          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal="180">
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Wine Climate Cabinets</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Professional-grade wine storage with multiple temperature zones and precise humidity control for optimal preservation.</p>
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
              15+ Years of GAGGENAU
              <em class="block font-display font-semibold italic text-brass-light">Repair Excellence</em>
            </h2>

            <div class="space-y-5 text-base sm:text-lg text-white/70 leading-relaxed [&_strong]:text-white [&_strong]:font-semibold">
              <p>
                At Easy Fix Appliance, we've been the Bay Area's trusted GAGGENAU repair specialists for over <strong>15 years</strong>. Our factory-trained technicians understand the sophisticated engineering behind GAGGENAU's precision appliances, from advanced steam oven systems to complex induction cooktop electronics.
              </p>
              <p>
                We serve <strong>San Mateo, Palo Alto, Foster City, San Francisco</strong>, and the entire Bay Area with comprehensive GAGGENAU repair services. From oven calibration to cooktop diagnostics, we use only <strong>genuine GAGGENAU parts</strong> and specialized diagnostic equipment to restore your appliances to factory specifications.
              </p>
            </div>

            <!-- Key Benefits -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5" v-reveal>
                <div class="flex items-start gap-3">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h3 class="font-montserrat font-bold text-base text-white mb-1.5">Factory Certification</h3>
                    <p class="text-sm text-white/50 leading-relaxed">GAGGENAU-authorized service technicians</p>
                  </div>
                </div>
              </div>

              <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5" v-reveal="90">
                <div class="flex items-start gap-3">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h3 class="font-montserrat font-bold text-base text-white mb-1.5">Genuine GAGGENAU Parts</h3>
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
              GAGGENAU Appliances
              <em class="font-display font-semibold italic text-brass-light">We Service</em>
            </h3>
            <p class="text-white/60 mb-8">Complete repair solutions for all GAGGENAU models</p>

            <div class="space-y-6">
              <div class="border-b border-white/10 pb-6">
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">Ovens & Steam Ovens</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Combi-Steam oven repairs
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Convection oven calibration
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Control panel diagnostics
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Door seal replacements
                  </li>
                </ul>
              </div>

              <div class="border-b border-white/10 pb-6">
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">Cooktops & Ventilation</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Flex induction repairs
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Gas cooktop service
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Downdraft ventilation
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Teppan Yaki maintenance
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">Refrigeration & Wine Storage</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Vario cooling repairs
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Wine climate cabinets
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Freezer diagnostics
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Compressor replacements
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
            Get answers to common questions about GAGGENAU appliance repairs in the Bay Area
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-6xl mx-auto">
          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal>
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              How long do GAGGENAU appliances typically last?
            </h3>
            <p class="text-gray-600 leading-relaxed">GAGGENAU appliances are engineered for longevity and typically last 20-25 years with proper maintenance. Their German engineering and premium components ensure exceptional durability.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal="90">
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              Do you service GAGGENAU steam ovens?
            </h3>
            <p class="text-gray-600 leading-relaxed">Yes, our technicians are specially trained in GAGGENAU steam oven technology, including Combi-Steam systems, descaling, and steam generator repairs.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal>
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              Are genuine GAGGENAU parts available?
            </h3>
            <p class="text-gray-600 leading-relaxed">As authorized GAGGENAU service specialists, we have direct access to genuine factory parts for all models, ensuring your appliances maintain their precision performance.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal="90">
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              What's your warranty on GAGGENAU repairs?
            </h3>
            <p class="text-gray-600 leading-relaxed">We provide a 2-year warranty on all parts and labor for GAGGENAU repairs, ensuring your investment in German precision engineering is fully protected.</p>
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
              <em class="font-display font-semibold italic text-brass-light">GAGGENAU Appliances?</em>
            </h2>

            <p class="text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
              Don't let appliance issues compromise your German precision cooking experience. Our certified technicians are ready to provide expert GAGGENAU repair services with same-day availability throughout the Bay Area.
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
  title: 'GAGGENAU Appliance Repair Services | Bay Area German Precision Specialists',
  meta: [
    {
      name: 'description',
      content: 'Expert GAGGENAU appliance repairs in Bay Area. Factory-certified technicians for steam ovens, induction cooktops, refrigeration, and all German luxury appliances. Same-day service, genuine parts, 2-year warranty. Call (415) 941-4144'
    },
    {
      name: 'keywords',
      content: 'GAGGENAU repair, GAGGENAU oven repair, GAGGENAU steam oven, German appliance repair, luxury appliance repair, Bay Area appliance repair, San Mateo GAGGENAU repair, certified technicians'
    },
    {
      property: 'og:title',
      content: 'GAGGENAU Appliance Repair Services | Bay Area German Precision Specialists'
    },
    {
      property: 'og:description',
      content: 'Factory-certified GAGGENAU appliance repair services in the Bay Area. German precision specialists with same-day service and genuine GAGGENAU parts.'
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
        "name": "Easy Fix Appliance - GAGGENAU Repair Specialists",
        "description": "Factory-certified GAGGENAU appliance repair services in the Bay Area",
        "url": "https://easyfixappliance.com/gaggenau",
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
          "GAGGENAU Appliance Repair",
          "German Appliance Repair",
          "Steam Oven Service",
          "Induction Cooktop Repair",
          "Luxury Refrigeration Repair"
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