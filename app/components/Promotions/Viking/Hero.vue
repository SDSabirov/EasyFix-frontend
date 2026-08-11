<template>
  <header class="grain glow-brass relative bg-ink overflow-hidden">
    <img loading="eager" fetchpriority="high" decoding="async"
      src="/assets/img/promotions/viking-hero.webp"
      alt="Viking Appliances"
      class="absolute inset-0 w-full h-full object-cover opacity-40"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" aria-hidden="true"></div>
    <span class="ghost-word ghost-word--light text-[6rem] lg:text-[11rem] bottom-2 -right-6" aria-hidden="true">Viking</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10 pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div class="max-w-2xl text-center md:text-left mx-auto md:mx-0">
        <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          Certified Specialists
        </span>

        <h1 class="font-montserrat font-bold tracking-[-0.02em] text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-8">
          Viking Appliance
          <em class="font-display font-semibold italic text-brass-light">Repair Service</em>
        </h1>

        <ul class="space-y-4 mb-10 inline-block text-left">
          <li class="flex items-start gap-3 text-base sm:text-lg text-white/80">
            <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
            <span>Same or Next Day Service</span>
          </li>
          <li class="flex items-start gap-3 text-base sm:text-lg text-white/80">
            <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
            <span>Same-Day &amp; After-Hours Service</span>
          </li>
          <li class="flex items-start gap-3 text-base sm:text-lg text-white/80">
            <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
            <span>Certified and Professional Technicians</span>
          </li>
          <li class="flex items-start gap-3 text-base sm:text-lg text-white/80">
            <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
            <span>Longest Warranty Coverage in the Bay Area</span>
          </li>
        </ul>

        <div class="flex justify-center md:justify-start">
          <a
            href="tel:4159414144"
            aria-label="Call us for Viking appliance repair services"
            class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
