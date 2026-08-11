<template>
  <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
    <span class="ghost-word text-[6rem] lg:text-[11rem] -top-6 -left-8" aria-hidden="true">Service</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <!-- Image -->
        <div class="group relative rounded-[2rem] overflow-hidden border border-primary/10 shadow-sm" v-reveal>
          <img loading="lazy" decoding="async"
            src="/assets/img/promotions/viking-hero2.webp"
            alt="Viking Appliances"
            class="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden="true"></div>
        </div>

        <!-- Content -->
        <div v-reveal="120">
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Viking Specialists
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.05] mb-8">
            We
            <em class="font-display font-semibold italic text-brass-dark">Service</em>
          </h2>

          <ul class="space-y-4 mb-10">
            <li class="flex items-start gap-3 text-base sm:text-lg text-gray-700">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              <span>Viking Refrigerators &amp; Freezers</span>
            </li>
            <li class="flex items-start gap-3 text-base sm:text-lg text-gray-700">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              <span>Viking Ranges &amp; Cooktops</span>
            </li>
            <li class="flex items-start gap-3 text-base sm:text-lg text-gray-700">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              <span>Viking Wall Ovens &amp; Microwaves</span>
            </li>
            <li class="flex items-start gap-3 text-base sm:text-lg text-gray-700">
              <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
              <span>Viking Dishwashers</span>
            </li>
          </ul>

          <a
            href="tel:4159414144"
            aria-label="Call us for Viking appliance repair services"
            class="inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-ink text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:scale-[1.03] touch-manipulation"
          >
            Request a Call
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
