<template>
  <section id="prices" class="relative bg-cream py-20 lg:py-28 overflow-hidden">
    <span class="ghost-word text-[8rem] lg:text-[13rem] top-4 -right-8" aria-hidden="true">Pricing</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Header -->
      <div class="max-w-3xl mb-14 lg:mb-16" v-reveal>
        <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          Transparent Pricing
        </span>
        <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
          Fair prices,
          <em class="font-display font-semibold italic text-brass-dark">exceptional service</em>
        </h2>
        <p class="text-gray-600 leading-relaxed">
          No hidden fees, no surprises &mdash; just honest, upfront pricing for premium appliance repair services.
        </p>
      </div>

      <!-- Price cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-12">
        <div
          v-for="(offer, index) in offers"
          :key="offer.title"
          class="group relative rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-2"
          :class="offer.featured
            ? 'grain glow-brass bg-ink text-white shadow-2xl shadow-ink/25 hover:shadow-ink/40'
            : 'bg-white border border-primary/10 hover:shadow-2xl hover:shadow-ink/10 hover:border-brass/40'"
          v-reveal="index * 100"
        >
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-8">
              <span class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.22em]" :class="offer.featured ? 'text-brass-light' : 'text-gray-500'">{{ offer.label }}</span>
              <span
                v-if="offer.badge"
                class="font-montserrat text-[9px] font-bold uppercase tracking-[0.16em] rounded-full px-3 py-1.5"
                :class="offer.featured ? 'bg-brass text-white' : 'bg-brass/10 text-brass-dark'"
              >{{ offer.badge }}</span>
            </div>
            <div class="font-display font-semibold text-6xl mb-3 transition-transform duration-500 group-hover:scale-105 origin-left" :class="offer.featured ? 'text-brass-light' : 'text-primary'">
              {{ offer.price }}
            </div>
            <h3 class="font-montserrat font-bold text-lg mb-3" :class="offer.featured ? 'text-white' : 'text-primary'">{{ offer.title }}</h3>
            <p class="text-sm leading-relaxed" :class="offer.featured ? 'text-white/60' : 'text-gray-600'">{{ offer.description }}</p>
          </div>
        </div>
      </div>

      <!-- Footnote + CTA -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-primary/10 pt-8" v-reveal>
        <p class="text-sm text-gray-500 max-w-xl leading-relaxed">
          The diagnostic fee is applied toward your repair cost if you choose to proceed.
          Free estimates available by phone.
        </p>
        <a
          href="tel:4159414144"
          class="group inline-flex items-center gap-3 whitespace-nowrap font-montserrat text-[12px] font-semibold uppercase tracking-[0.18em] text-primary hover:text-brass-dark transition-colors"
        >
          Call for a Free Quote
          <span class="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const offers = [
  {
    label: "Diagnostic",
    title: "Standard Service Visit",
    price: "$99",
    badge: "Most Booked",
    featured: true,
    description: "Expert diagnostic and troubleshooting for your appliance issues.",
  },
  {
    label: "Add-On",
    title: "Additional Appliance",
    price: "$49",
    description: "Same-visit diagnostic for each additional appliance.",
  },
  {
    label: "After-Hours",
    title: "Emergency Service",
    price: "$149",
    badge: "Urgent",
    description: "After-hours emergency service visits for urgent repairs.",
  },
  {
    label: "Preventive",
    title: "Maintenance Service",
    price: "$249",
    description: "Comprehensive appliance tune-up, inspection, and preventive cleaning.",
  },
]
</script>
