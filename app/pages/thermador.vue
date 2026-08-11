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
            Certified Thermador Specialists
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
            Professional Thermador
            <em class="block font-display font-semibold italic text-brass-light">Appliance Repair Services</em>
          </h1>

          <p class="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10 [&_strong]:text-white [&_strong]:font-semibold">
            Expert repair services for luxury Thermador cooking and refrigeration appliances.
            <strong>Factory-trained technicians</strong> serving the Bay Area with <strong>same-day service</strong> and genuine Thermador parts.
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
              Genuine Thermador Parts
            </span>
            <span class="inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
              Same-Day Service
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- About Thermador Section -->
    <section class="relative bg-cream py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 -right-4" aria-hidden="true">Heritage</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-4xl mx-auto mb-14 lg:mb-16" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Luxury Appliance Innovation
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
            Thermador:
            <em class="font-display font-semibold italic text-brass-dark">Culinary Excellence</em>
          </h2>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why Thermador has been the choice of culinary professionals and luxury homeowners for over 100 years, combining innovation with unmatched performance.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          <div v-reveal>
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary mb-6">Century of Culinary Innovation</h3>
            <div class="space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed [&_strong]:text-primary [&_strong]:font-semibold">
              <p>
                Since 1916, Thermador has been pioneering luxury kitchen appliances with groundbreaking innovations. They introduced the first <strong>built-in wall oven</strong>, the first <strong>commercial-style range for homes</strong>, and revolutionary <strong>Star Burner technology</strong> that delivers even heat distribution across the entire pan bottom.
              </p>
              <p>
                Thermador's commitment to culinary excellence is evident in their <strong>Steam and Convection ovens</strong>, precision temperature control, and the iconic <strong>red control knobs</strong> that have become synonymous with professional cooking. Their appliances feature advanced technologies like <strong>Masterpiece Series</strong> integration and <strong>Home Connect</strong> smart connectivity.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="rounded-[1.25rem] bg-white border border-primary/5 shadow-sm p-6">
                <div class="font-display font-semibold text-3xl text-brass-dark mb-1">1916</div>
                <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Founded Since</div>
              </div>
              <div class="rounded-[1.25rem] bg-white border border-primary/5 shadow-sm p-6">
                <div class="font-display font-semibold text-3xl text-brass-dark mb-1">100+</div>
                <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Years of Innovation</div>
              </div>
            </div>
          </div>

          <div class="relative rounded-[2rem] overflow-hidden border border-primary/5 shadow-sm" v-reveal="150">
            <img loading="lazy" decoding="async" src="/assets/img/thermador-cover.webp" alt="Thermador professional cooking appliance with Star Burner technology" class="w-full aspect-[4/3] object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden="true"></div>
            <div class="absolute bottom-4 right-4 rounded-[1.25rem] bg-white/95 backdrop-blur-sm shadow-lg px-6 py-4">
              <div class="font-display font-semibold text-2xl text-brass-dark">Star</div>
              <div class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">Burner</div>
            </div>
          </div>
        </div>

        <!-- Feature Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal>
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Star Burner Technology</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Exclusive star-shaped burner design provides even heat distribution across the entire cookware bottom for superior cooking results.</p>
          </div>

          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal="90">
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Steam & Convection</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Advanced steam and convection cooking technology for professional-level baking, roasting, and precision cooking.</p>
          </div>

          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal="180">
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Masterpiece Integration</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Seamless design integration with built-in appliances that blend perfectly with luxury kitchen aesthetics.</p>
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
              15+ Years of Thermador
              <em class="block font-display font-semibold italic text-brass-light">Repair Excellence</em>
            </h2>

            <div class="space-y-5 text-base sm:text-lg text-white/70 leading-relaxed [&_strong]:text-white [&_strong]:font-semibold">
              <p>
                At Easy Fix Appliance, we've been the Bay Area's trusted Thermador repair specialists for over <strong>15 years</strong>. Our factory-certified technicians understand the sophisticated engineering behind Thermador's innovative cooking technologies, from Star Burner systems to advanced steam ovens.
              </p>
              <p>
                We serve <strong>San Mateo, Palo Alto, Foster City, San Francisco</strong>, and the entire Bay Area with comprehensive Thermador repair services. From precision oven calibration to complex control system repairs, we use only <strong>genuine Thermador parts</strong> and cutting-edge diagnostic equipment to restore your appliances to factory specifications.
              </p>
            </div>

            <!-- Key Benefits -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5" v-reveal>
                <div class="flex items-start gap-3">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h3 class="font-montserrat font-bold text-base text-white mb-1.5">Factory Certification</h3>
                    <p class="text-sm text-white/50 leading-relaxed">Thermador-authorized service technicians</p>
                  </div>
                </div>
              </div>

              <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5" v-reveal="90">
                <div class="flex items-start gap-3">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h3 class="font-montserrat font-bold text-base text-white mb-1.5">Genuine Thermador Parts</h3>
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
              Thermador Appliances
              <em class="font-display font-semibold italic text-brass-light">We Service</em>
            </h3>
            <p class="text-white/60 mb-8">Complete repair solutions for all Thermador models</p>

            <div class="space-y-6">
              <div class="border-b border-white/10 pb-6">
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">Ranges & Cooktops</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Star Burner system repairs
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Gas range ignition issues
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Induction cooktop service
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Professional range calibration
                  </li>
                </ul>
              </div>

              <div class="border-b border-white/10 pb-6">
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">Wall Ovens & Steam Ovens</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Convection oven repairs
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Steam oven maintenance
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Temperature calibration
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Control panel replacements
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">Refrigeration & Dishwashers</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Built-in refrigerator service
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Wine preservation units
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Dishwasher repairs
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Ice maker troubleshooting
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
            Get answers to common questions about Thermador appliance repairs in the Bay Area
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-6xl mx-auto">
          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal>
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              What makes Thermador appliances unique?
            </h3>
            <p class="text-gray-600 leading-relaxed">Thermador's Star Burner technology, steam ovens, and Masterpiece Series integration make them industry leaders in luxury kitchen appliances with over 100 years of innovation.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal="90">
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              Do you service Thermador steam ovens?
            </h3>
            <p class="text-gray-600 leading-relaxed">Yes, we specialize in Thermador steam oven repairs, including steam generator issues, temperature calibration, and advanced cooking mode troubleshooting.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal>
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              How often should Thermador appliances be serviced?
            </h3>
            <p class="text-gray-600 leading-relaxed">We recommend annual maintenance for optimal performance, with immediate service for any issues to maintain Thermador's precision cooking capabilities.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal="90">
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              Are Thermador repairs cost-effective?
            </h3>
            <p class="text-gray-600 leading-relaxed">Absolutely. Thermador appliances are built to last decades, making professional repairs a smart investment compared to replacement costs.</p>
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
              <em class="font-display font-semibold italic text-brass-light">Thermador Appliances?</em>
            </h2>

            <p class="text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
              Don't let appliance issues compromise your culinary experience. Our certified technicians are ready to provide expert Thermador repair services with same-day availability throughout the Bay Area.
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
  title: 'Thermador Appliance Repair Services | Bay Area Luxury Kitchen Specialists',
  meta: [
    {
      name: 'description',
      content: 'Expert Thermador appliance repairs in Bay Area. Factory-certified technicians for Star Burner ranges, steam ovens, and luxury cooking appliances. Same-day service, genuine parts, 2-year warranty. Call (415) 941-4144'
    },
    {
      name: 'keywords',
      content: 'Thermador appliance repair, Thermador range repair, Star Burner service, steam oven repair, luxury kitchen appliances, Bay Area appliance repair, San Mateo Thermador repair'
    },
    {
      property: 'og:title',
      content: 'Thermador Appliance Repair Services | Bay Area Luxury Kitchen Specialists'
    },
    {
      property: 'og:description',
      content: 'Factory-certified Thermador appliance repair services in the Bay Area. Luxury kitchen specialists with same-day service and genuine Thermador parts.'
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
        "name": "Easy Fix Appliance - Thermador Repair Specialists",
        "description": "Factory-certified Thermador appliance repair services in the Bay Area",
        "url": "https://easyfixappliance.com/thermador",
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
          "Thermador Appliance Repair",
          "Star Burner Range Repair",
          "Steam Oven Service",
          "Luxury Cooking Appliance Repair",
          "Masterpiece Series Service"
        ],
        "openingHours": "Mo-Su 08:00-20:00",
        "priceRange": "$$",
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