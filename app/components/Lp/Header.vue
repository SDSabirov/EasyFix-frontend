<template>
  <!-- Sticky header of the Google Ads landing pages; nav items only jump within the page. -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-primary/10">
    <div class="mx-auto max-w-screen-xl flex items-center justify-between gap-1.5 px-2.5 md:px-6 h-16 lg:h-[72px]">
      <div class="shrink-0 select-none leading-none">
        <p class="font-display font-semibold tracking-[-0.01em] text-[1.1rem] min-[404px]:text-[1.3rem] md:text-[1.75rem] lg:text-[2rem]">
          <span class="text-primary">Easy Fix</span> <span class="text-brass">Appliance</span>
        </p>
        <p class="mt-0.5 pl-2 md:pl-3 font-montserrat text-[5.5px] min-[404px]:text-[6.5px] md:text-[8px] font-semibold uppercase tracking-[0.3em] md:tracking-[0.34em] text-primary/80">
          Appliance Repair Experts
        </p>
      </div>

      <nav aria-label="Page sections" class="hidden lg:flex items-center gap-5 xl:gap-8 font-montserrat text-[13px] text-primary/80">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="hover:text-brass-dark transition-colors aria-[current=location]:text-brass-dark"
          :aria-current="activeNav === item.href ? 'location' : undefined"
          @click="$emit('nav', item)"
        >{{ item.label }}</a>
      </nav>

      <div class="flex items-center gap-1.5 md:gap-5">
        <a
          :href="`tel:${phone.tel}`"
          class="flex items-center gap-1 md:gap-2.5 max-[343px]:p-1.5 max-[343px]:-m-1.5"
          data-cta="lp-call"
          @click="$emit('call', 'header')"
        >
          <LpIcon name="phone" class="w-3.5 h-3.5 md:w-5 md:h-5 text-primary shrink-0 fill-primary" />
          <span class="leading-tight max-[343px]:sr-only">
            <span class="block font-montserrat font-semibold text-[10.5px] min-[404px]:text-[11.5px] md:text-[15px] whitespace-nowrap">{{ phone.display }}</span>
            <span class="block text-[8px] md:text-[10px] text-gray-500 whitespace-nowrap">
              <span class="hidden md:inline">Locally Owned • </span>Bay Area Service
            </span>
          </span>
        </a>
        <button
          type="button"
          class="flex items-center gap-1.5 md:gap-2 rounded-md bg-ink text-white px-2 md:px-5 h-10 md:h-11 font-display font-semibold text-[12px] min-[404px]:text-[13px] md:text-[17px] leading-[1.05] transition-colors hover:bg-brass focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
          data-cta="lp-schedule"
          @click="$emit('schedule', 'header')"
        >
          <LpIcon name="calendar" class="hidden min-[404px]:block w-4 h-4 md:w-5 md:h-5 shrink-0" />
          <span class="text-left md:whitespace-nowrap">Schedule<br class="md:hidden" /> Service</span>
        </button>
        <button
          type="button"
          class="lg:hidden p-1 text-primary"
          :aria-expanded="menuOpen"
          aria-controls="lp-menu"
          @click="$emit('update:menuOpen', !menuOpen)"
        >
          <LpIcon :name="menuOpen ? 'close' : 'menu'" class="w-6 h-6" />
          <span class="sr-only">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile menu: in-page jumps + the two CTAs, nothing leaves the page -->
    <nav v-show="menuOpen" id="lp-menu" aria-label="Page sections (mobile)" class="lg:hidden border-t border-primary/10 bg-white px-4 pb-4">
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="block py-3 border-b border-primary/5 font-montserrat text-sm text-primary aria-[current=location]:text-brass-dark"
        :aria-current="activeNav === item.href ? 'location' : undefined"
        @click="$emit('nav', item)"
      >{{ item.label }}</a>
      <div class="grid grid-cols-2 gap-2 pt-4">
        <a :href="`tel:${phone.tel}`" :class="[lpBtnOutline, 'h-12 text-base']" data-cta="lp-call" @click="$emit('update:menuOpen', false); $emit('call', 'menu')">
          <LpIcon name="phone" class="w-4 h-4 fill-primary" /> Call Now
        </a>
        <button type="button" :class="[lpBtnSolid, 'h-12 text-base']" data-cta="lp-schedule" @click="$emit('schedule', 'menu')">
          <LpIcon name="calendar" class="w-4 h-4" /> Schedule
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { lpBtnSolid, lpBtnOutline } from '~/utils/lp'

defineProps({
  phone: { type: Object, required: true },
  // [{ label, href: '#section-id' }]
  navItems: { type: Array, required: true },
  activeNav: { type: String, default: '' },
  menuOpen: { type: Boolean, default: false },
})
defineEmits(['call', 'schedule', 'nav', 'update:menuOpen'])
</script>
