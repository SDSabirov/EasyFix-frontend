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
            Certified KitchenAid Specialists
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
            Professional KitchenAid
            <em class="block font-display font-semibold italic text-brass-light">Appliance Repair Services</em>
          </h1>

          <p class="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10 [&_strong]:text-white [&_strong]:font-semibold">
            Expert repair services for iconic KitchenAid appliances.
            <strong>Factory-trained technicians</strong> serving the Bay Area with <strong>same-day service</strong> and genuine KitchenAid parts.
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
              Genuine KitchenAid Parts
            </span>
            <span class="inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
              Same-Day Service
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- About KitchenAid Section -->
    <section class="relative bg-cream py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 -right-4" aria-hidden="true">Heritage</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-4xl mx-auto mb-14 lg:mb-16" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Home Chef's Choice
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
            KitchenAid:
            <em class="font-display font-semibold italic text-brass-dark">Performance & Heritage</em>
          </h2>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why KitchenAid has been the trusted partner of home chefs for over 100 years, combining iconic design with unmatched performance and reliability.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          <div v-reveal>
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary mb-6">A Heritage of Kitchen Innovation</h3>
            <div class="space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed [&_strong]:text-primary [&_strong]:font-semibold">
              <p>
                Since 1919, KitchenAid has been synonymous with <strong>kitchen excellence</strong>, building a reputation for craftsmanship that transformed the way home chefs cook. Today, KitchenAid's lineup includes professional-grade ranges, precision refrigeration, and innovative cooking appliances that embody an enduring commitment to quality and performance.
              </p>
              <p>
                KitchenAid appliances feature <strong>commercial-inspired design</strong> with robust construction built to withstand daily use. From their <strong>even-heat technology</strong> in ovens to precise temperature control in refrigeration systems, every KitchenAid appliance is engineered to help home chefs achieve <strong>professional results</strong> with confidence and style.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="rounded-[1.25rem] bg-white border border-primary/5 shadow-sm p-6">
                <div class="font-display font-semibold text-3xl text-brass-dark mb-1">1919</div>
                <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Heritage Since</div>
              </div>
              <div class="rounded-[1.25rem] bg-white border border-primary/5 shadow-sm p-6">
                <div class="font-display font-semibold text-3xl text-brass-dark mb-1">100+</div>
                <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Years of Innovation</div>
              </div>
            </div>
          </div>

          <div class="relative rounded-[2rem] overflow-hidden border border-primary/5 shadow-sm" v-reveal="150">
            <img loading="lazy" decoding="async" src="/assets/img/kitchenaidCover.webp" alt="KitchenAid professional kitchen appliances with iconic heritage design" class="w-full aspect-[4/3] object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden="true"></div>
            <div class="absolute bottom-4 right-4 rounded-[1.25rem] bg-white/95 backdrop-blur-sm shadow-lg px-6 py-4">
              <div class="font-display font-semibold text-2xl text-brass-dark">Iconic</div>
              <div class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">Design</div>
            </div>
          </div>
        </div>

        <!-- Feature Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal>
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Even-Heat Technology</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Advanced oven technology ensures consistent heat distribution for perfect baking and roasting results every time.</p>
          </div>

          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal="90">
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Precision Refrigeration</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Advanced cooling systems with precise temperature control to keep ingredients fresh and flavorful longer.</p>
          </div>

          <div class="bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 lg:p-8" v-reveal="180">
            <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-5">
              <span class="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true"></span>
            </span>
            <h3 class="font-montserrat font-bold text-lg sm:text-xl text-primary mb-3">Commercial-Inspired Build</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Robust construction and professional-grade components designed for intensive daily use and long-lasting performance.</p>
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
              15+ Years of KitchenAid
              <em class="block font-display font-semibold italic text-brass-light">Repair Excellence</em>
            </h2>

            <div class="space-y-5 text-base sm:text-lg text-white/70 leading-relaxed [&_strong]:text-white [&_strong]:font-semibold">
              <p>
                At Easy Fix Appliance, we've been the Bay Area's trusted KitchenAid repair specialists for over <strong>15 years</strong>. Our factory-certified technicians understand the precision engineering behind KitchenAid's iconic appliances, from professional range systems to advanced refrigeration technology and precision dishwashers.
              </p>
              <p>
                We serve <strong>San Mateo, Palo Alto, Foster City, San Francisco</strong>, and the entire Bay Area with comprehensive KitchenAid repair services. From oven calibration to refrigerator compressor replacement, we use only <strong>genuine KitchenAid parts</strong> and specialized diagnostic tools to restore your appliances to factory performance standards.
              </p>
            </div>

            <!-- Key Benefits -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5" v-reveal>
                <div class="flex items-start gap-3">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h3 class="font-montserrat font-bold text-base text-white mb-1.5">Factory Certification</h3>
                    <p class="text-sm text-white/50 leading-relaxed">KitchenAid-authorized service technicians</p>
                  </div>
                </div>
              </div>

              <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5" v-reveal="90">
                <div class="flex items-start gap-3">
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h3 class="font-montserrat font-bold text-base text-white mb-1.5">Genuine KitchenAid Parts</h3>
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
              KitchenAid Appliances
              <em class="font-display font-semibold italic text-brass-light">We Service</em>
            </h3>
            <p class="text-white/60 mb-8">Complete repair solutions for all KitchenAid models</p>

            <div class="space-y-6">
              <div class="border-b border-white/10 pb-6">
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">Wall Ovens & Microwaves</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Wall oven repairs
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Built-in microwave service
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Convection system repairs
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Door & seal replacements
                  </li>
                </ul>
              </div>

              <div class="border-b border-white/10 pb-6">
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">Ranges & Cooking Appliances</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Range oven calibration
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Cooktop ignition issues
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Control panel replacements
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Even-heat system repairs
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-3">Refrigeration & Dishwashers</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Refrigerator temperature control
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Ice maker maintenance
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-white/70">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Dishwasher pump repairs
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
            Get answers to common questions about KitchenAid appliance repairs in the Bay Area
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-6xl mx-auto">
          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal>
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              How long do KitchenAid appliances typically last?
            </h3>
            <p class="text-gray-600 leading-relaxed">KitchenAid appliances are built for durability and typically last 15-20 years with proper maintenance. Ranges and refrigerators can last even longer with regular service.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal="90">
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              Which KitchenAid appliances do you repair?
            </h3>
            <p class="text-gray-600 leading-relaxed">We service major KitchenAid kitchen appliances, including ranges, wall ovens, cooktops, refrigerators, and dishwashers. Please note we do not repair stand mixers or other small countertop appliances.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal>
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              Are KitchenAid parts readily available?
            </h3>
            <p class="text-gray-600 leading-relaxed">We maintain a comprehensive inventory of genuine KitchenAid parts and can quickly source specialized components for all appliance models.</p>
          </div>

          <div class="rounded-[1.5rem] border border-primary/10 bg-cream p-7 lg:p-8" v-reveal="90">
            <h3 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              What's your warranty on KitchenAid repairs?
            </h3>
            <p class="text-gray-600 leading-relaxed">We provide a 2-year warranty on all parts and labor for KitchenAid repairs, ensuring your investment is protected with comprehensive coverage.</p>
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
              <em class="font-display font-semibold italic text-brass-light">KitchenAid Appliances?</em>
            </h2>

            <p class="text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
              Don't let appliance issues disrupt your culinary passion. Our certified technicians are ready to provide expert KitchenAid repair services with same-day availability throughout the Bay Area.
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
  title: 'KitchenAid Appliance Repair Services | Bay Area Home Chef Specialists',
  meta: [
    {
      name: 'description',
      content: 'Expert KitchenAid appliance repairs in Bay Area. Factory-certified technicians for ranges, wall ovens, cooktops, refrigerators, and dishwashers. Same-day service, genuine parts, 2-year warranty. Call (415) 941-4144'
    },
    {
      name: 'keywords',
      content: 'KitchenAid appliance repair, KitchenAid range repair, KitchenAid refrigerator repair, KitchenAid dishwasher repair, home chef appliances, Bay Area appliance repair, San Mateo KitchenAid repair, certified technicians'
    },
    {
      property: 'og:title',
      content: 'KitchenAid Appliance Repair Services | Bay Area Home Chef Specialists'
    },
    {
      property: 'og:description',
      content: 'Factory-certified KitchenAid appliance repair services in the Bay Area. Home chef specialists with same-day service and genuine KitchenAid parts.'
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
        "name": "Easy Fix Appliance - KitchenAid Repair Specialists",
        "description": "Factory-certified KitchenAid appliance repair services in the Bay Area",
        "url": "https://easyfixappliance.com/kitchenAid",
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
          "KitchenAid Appliance Repair",
          "KitchenAid Range Repair",
          "KitchenAid Dishwasher Repair",
          "Home Chef Appliance Service",
          "KitchenAid Refrigeration Repair"
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