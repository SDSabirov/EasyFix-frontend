<template>
  <section class="grain relative bg-ink py-20 lg:py-28 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
    <span class="ghost-word ghost-word--light text-[6rem] lg:text-[11rem] -top-4 -right-6" aria-hidden="true">Services</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16" v-reveal>
        <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          What We Repair
        </span>
        <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-white leading-[1.05] mb-6">
          Our
          <em class="font-display font-semibold italic text-brass-light">Services</em>
        </h2>
        <p class="text-base sm:text-lg text-white/60 leading-relaxed">
          We understand the frustration of a malfunctioning appliance &mdash; especially
          when it disrupts your daily routine. That&rsquo;s why Easy Fix Appliance is
          here to provide swift, expert service tailored to local homes, like
          yours.
        </p>
      </div>

      <!-- Service tiles -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-5">
        <div
          v-for="(service, index) in services"
          :key="service.name"
          class="group rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-5 lg:p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-brass/40 hover:bg-white/[0.1]"
          v-reveal="(index % 5) * 90"
        >
          <img
            loading="lazy"
            decoding="async"
            :src="service.icon"
            class="h-10 w-10 object-contain"
            alt=""
            aria-hidden="true"
          />
          <h3 class="font-montserrat text-[13px] font-semibold text-white leading-snug">
            {{ service.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import refrigeratorIcon from '/assets/icons/promotions/refrigerator-appliance.svg'
import dishwasherIcon from '/assets/icons/promotions/dishwasher.svg'
import wineCoolerIcon from '/assets/icons/promotions/icon_8.png'
import underCounterIcon from '/assets/icons/promotions/icon_7.png'
import ovenIcon from '/assets/icons/promotions/oven.svg'
import freezerIcon from '/assets/icons/promotions/icon_5.svg'
import rangeHoodIcon from '/assets/icons/promotions/rangehood.svg'
import microwaveIcon from '/assets/icons/promotions/microvawe.svg'
import rangeIcon from '/assets/icons/promotions/gas.svg'
import stoveIcon from '/assets/icons/promotions/stove.svg'

const services = [
  { name: 'Refrigerator Repair', icon: refrigeratorIcon },
  { name: 'Washing Machine Repair', icon: dishwasherIcon },
  { name: 'Wine Cooler Repair', icon: wineCoolerIcon },
  { name: 'Under Counter Refrigerator Repair', icon: underCounterIcon },
  { name: 'Oven Repair', icon: ovenIcon },
  { name: 'Freezer Repair', icon: freezerIcon },
  { name: 'Range Hood Repair', icon: rangeHoodIcon },
  { name: 'Microwave Repair', icon: microwaveIcon },
  { name: 'Range Repair', icon: rangeIcon },
  { name: 'Stove Repair', icon: stoveIcon },
]
</script>

<style lang="css" scoped></style>
