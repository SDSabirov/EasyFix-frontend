<template>
  <div class="min-h-screen bg-white text-primary">
    <LpHeader
      v-model:menu-open="menuOpen"
      :phone="phone"
      :nav-items="navItems"
      :active-nav="activeNav"
      @call="onCall"
      @schedule="onSchedule"
      @nav="onNav"
    />

    <main>
      <!-- ============ Hero ============ -->
      <section class="relative overflow-hidden">
        <img
          :src="heroImage"
          alt=""
          width="1280"
          height="853"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          class="absolute inset-0 w-full h-full object-cover object-[70%_center] lg:object-center"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 lg:via-white/85 lg:to-transparent lg:w-[68%]" aria-hidden="true"></div>
        <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/70 to-transparent lg:hidden" aria-hidden="true"></div>

        <div class="relative mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 pt-7 pb-6 lg:py-8 grid lg:grid-cols-12 gap-8 items-center">
          <!-- Below lg the hero is one column: text, buttons and form share the same edges. -->
          <div class="w-full max-lg:max-w-xl lg:col-span-7 xl:pl-6">
            <p v-if="variant.eyebrow" class="mb-2.5 lg:mb-3 font-montserrat text-[9px] lg:text-[10px] font-semibold uppercase tracking-[0.32em] text-primary/80">{{ variant.eyebrow }}</p>
            <h1 class="font-display font-semibold tracking-[-0.015em] text-primary text-[2.15rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02]">
              Trusted Appliance Repair Experts in the Bay Area
            </h1>
            <p class="mt-3 lg:mt-4 lg:max-w-md text-[14px] lg:text-[15px] leading-snug text-primary/85">
              Locally owned. Experienced technicians. Same-day service for {{ variant.heroBrands }} &amp; more.
            </p>

            <div class="mt-3 lg:mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] lg:text-[12px] text-primary/85">
              <span class="flex items-center gap-2">
                <LpStars size="w-3.5 h-3.5 lg:w-4 lg:h-4" :label="`${rating.value} out of 5 stars`" />
                {{ rating.value }} Google Rating
              </span>
              <span class="text-primary/30" aria-hidden="true">|</span>
              <span>Licensed &amp; Insured</span>
              <span class="hidden lg:inline text-primary/30" aria-hidden="true">|</span>
              <span class="hidden lg:inline">OEM Parts &amp; Repair Warranty</span>
            </div>

            <div class="mt-5 lg:mt-6 flex flex-col lg:flex-row gap-2.5 lg:gap-3">
              <!-- Desktop only: on mobile the form sits right below, so this would just scroll a few px. -->
              <button type="button" :class="[btnSolid, 'max-lg:hidden h-[50px] lg:h-[52px] px-6 text-lg lg:text-[19px] gap-3']" data-cta="lp-schedule" @click="onSchedule('hero')">
                <LpIcon name="calendar" class="w-5 h-5" />
                Schedule Service
                <LpIcon name="arrow" class="w-5 h-5" />
              </button>
              <a :href="`tel:${phone.tel}`" :class="[btnOutline, 'h-[46px] lg:h-[52px] px-6 gap-3']" data-cta="lp-call" @click="onCall('hero')">
                <LpIcon name="phone" class="w-5 h-5 fill-primary" />
                <span class="font-display font-semibold text-lg lg:text-[19px]">Call Now</span>
              </a>
            </div>

            <p class="hidden lg:block mt-6 ml-2 font-['Allura'] text-brass-dark text-[2.1rem] leading-[0.9] -rotate-3 select-none" aria-hidden="true">
              Exceptional Appliances.<br /><span class="ml-16">Expert Care.</span>
            </p>
          </div>

          <!-- Lead form: beside the hero text on desktop, right under it on mobile (an on-page
               form, not a pop-up). Every Schedule Service button scrolls here. -->
          <div
            id="lp-form"
            class="w-full max-lg:max-w-xl lg:col-span-5 xl:col-span-4 xl:col-start-9 scroll-mt-20 lg:scroll-mt-24 rounded-2xl transition-shadow duration-500"
            :class="formFlash && 'ring-4 ring-brass/60 ring-offset-4'"
          >
            <LpLeadForm id-prefix="hero" location="hero" :phone="phone" :brands="variant.formBrands" :variant="variant.key" @call="onCall" />
          </div>
        </div>
      </section>

      <!-- ============ Trust bar ============ -->
      <section id="why-us" class="bg-[#F6F2EB] scroll-mt-20" aria-label="Why choose Easy Fix Appliance">
        <ul class="mx-auto max-w-screen-xl grid grid-cols-3 px-2 sm:px-6 py-3 lg:py-5">
          <li
            v-for="(t, i) in trustPoints"
            :key="t.title"
            class="flex items-center justify-center gap-1.5 min-[340px]:gap-2 lg:gap-5 px-1 lg:px-6"
            :class="i > 0 && 'border-l border-brass/30'"
          >
            <span class="flex items-center justify-center shrink-0 w-7 h-7 min-[340px]:w-9 min-[340px]:h-9 lg:w-14 lg:h-14 rounded-full bg-[#ECE4D6] text-brass-dark">
              <LpIcon :name="t.icon" class="w-4 h-4 min-[340px]:w-5 min-[340px]:h-5 lg:w-8 lg:h-8" />
            </span>
            <span>
              <span class="block font-montserrat lg:font-display font-semibold text-[9.5px] min-[360px]:text-[10.5px] leading-tight lg:text-xl lg:whitespace-nowrap text-primary">
                <span class="lg:hidden">{{ t.mobileTitle || t.title }}</span>
                <span class="hidden lg:inline">{{ t.title }}</span>
              </span>
              <span class="hidden lg:block text-sm text-gray-600">{{ t.text }}</span>
            </span>
          </li>
        </ul>
      </section>

      <!-- ============ Appliances + brands ============ -->
      <section id="services" class="mx-auto max-w-screen-xl px-3 sm:px-6 lg:px-8 pt-6 lg:pt-7 scroll-mt-20">
        <p :class="eyebrow">Quality Service for Every Home</p>
        <h2 class="mt-2 text-center font-display font-semibold tracking-[-0.01em] text-[1.85rem] sm:text-4xl lg:text-[2.6rem] leading-tight">
          We Repair All Major Appliances
        </h2>
        <p class="mt-1 mx-auto max-w-md lg:max-w-none text-center text-[13px] lg:text-[15px] text-gray-600">
          From everyday essentials to luxury appliances, our expert technicians keep your home running smoothly.
        </p>

        <ul class="mt-4 lg:mt-5 flex flex-wrap justify-center gap-1.5 lg:gap-2 lg:flex-nowrap">
          <li
            v-for="(a, i) in appliances"
            :key="a.label"
            class="flex flex-col items-center justify-center gap-1.5 h-[68px] lg:h-[82px] rounded-md border border-primary/10 bg-white shadow-[0_1px_2px_rgba(10,35,51,0.04)] lg:flex-1"
            :class="i < 5 ? 'w-[calc((100%-1.5rem)/5)]' : 'w-[calc((100%-1.875rem)/6)]'"
          >
            <LpIcon :name="a.icon" class="w-7 h-7 lg:w-8 lg:h-8 text-brass-dark" />
            <span class="text-[9px] min-[365px]:text-[9.5px] min-[380px]:text-[10px] min-[420px]:text-[11px] tracking-[-0.02em] min-[420px]:tracking-normal lg:text-xs text-gray-700 whitespace-nowrap">{{ a.label }}</span>
          </li>
        </ul>

        <div id="brands" class="scroll-mt-20">
          <p :class="[eyebrow, 'mt-6']">Trusted Brands We Service</p>
          <ul class="mt-3 lg:mt-4 flex flex-wrap xl:flex-nowrap items-center justify-center xl:justify-between gap-x-3 min-[382px]:gap-x-4 md:gap-x-6 xl:gap-x-4 gap-y-3 px-1 xl:px-0">
            <li
              v-for="(b, i) in variant.brandLogos"
              :key="b.name || `break-${i}`"
              :class="b.rowBreak && rowBreak[b.rowBreak]"
              :aria-hidden="b.rowBreak ? 'true' : undefined"
            >
              <img
                v-if="b.src"
                :src="b.src"
                :alt="b.name"
                :width="b.w"
                height="88"
                loading="lazy"
                decoding="async"
                class="w-auto grayscale contrast-125"
                :class="logoSize[b.size || 'md']"
              />
              <span
                v-else-if="b.text"
                class="flex items-center gap-[0.3em] whitespace-nowrap font-montserrat font-bold tracking-[-0.02em] leading-none text-[13px] min-[337px]:text-[15px] md:text-lg lg:text-[1.2rem] text-[#3d3d3d]"
              ><img
                v-if="b.icon"
                :src="b.icon"
                alt=""
                width="79"
                height="79"
                loading="lazy"
                decoding="async"
                class="h-[1.25em] w-auto opacity-80"
              />{{ b.text }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- ============ $99 Diagnostic ============ -->
      <section class="mx-auto max-w-screen-xl px-3 sm:px-6 lg:px-8 mt-5 lg:mt-7" aria-labelledby="lp-pricing">
        <div class="relative overflow-hidden rounded-xl bg-[#F6F2EB] border border-primary/5 shadow-sm flex items-center gap-2.5 lg:gap-6 px-3 py-3 lg:px-7 lg:py-5">
          <span class="flex items-center justify-center shrink-0 w-12 h-12 lg:w-20 lg:h-20 rounded-full bg-[#ECE4D6] text-brass-dark">
            <LpIcon name="tag" class="w-6 h-6 lg:w-10 lg:h-10" />
          </span>
          <div class="min-w-0">
            <p class="font-montserrat text-[7px] lg:text-[10px] font-semibold uppercase tracking-[0.3em] text-brass-dark">Transparent Pricing</p>
            <h2 id="lp-pricing" class="font-display font-semibold text-[1.2rem] min-[400px]:text-[1.35rem] lg:text-[2.1rem] xl:text-[2.5rem] leading-tight text-primary lg:whitespace-nowrap">$99 Diagnostic Visit</h2>
            <p class="text-[10.5px] lg:text-base text-gray-700 leading-snug">Applied toward the repair when you proceed.</p>
          </div>
          <ul class="ml-auto lg:ml-4 pl-2.5 lg:pl-8 border-l border-brass/30 space-y-1.5 lg:space-y-3 shrink-0">
            <li v-for="c in ['Fast scheduling', 'Clear repair recommendations']" :key="c" class="flex items-start gap-1.5 lg:gap-3 text-[10.5px] lg:text-[15px] text-gray-700 leading-tight">
              <span class="flex items-center justify-center shrink-0 w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-brass text-white">
                <svg class="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span class="max-w-[5.5rem] lg:max-w-none">{{ c }}</span>
            </li>
          </ul>
          <div class="hidden xl:flex relative ml-auto self-stretch -my-5 -mr-7 w-[30%] items-center justify-center" aria-hidden="true">
            <img :src="accentImage" alt="" width="640" height="504" loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div class="absolute inset-0 bg-gradient-to-r from-[#F6F2EB] via-[#F6F2EB]/60 to-transparent"></div>
            <p class="relative font-['Allura'] text-primary text-[2.3rem] leading-[0.95] -rotate-6 select-none">
              Knowledge<br /><span class="ml-4">Keeps Life Running</span>
            </p>
          </div>
        </div>
      </section>

      <!-- ============ Reviews ============ -->
      <LpReviews class="mx-auto max-w-screen-xl px-3 sm:px-6 lg:px-8 pt-6 lg:pt-8" :rating="rating" :reviews="displayedReviews" />

      <!-- ============ FAQ ============ -->
      <section id="faq" class="mx-auto max-w-screen-xl px-3 sm:px-6 lg:px-8 pt-6 lg:pt-8 pb-8 scroll-mt-20">
        <h2 class="flex items-center justify-center gap-5 font-display font-semibold text-2xl lg:text-[2rem] text-primary">
          <span class="hidden sm:block w-12 h-px bg-brass" aria-hidden="true"></span>
          Frequently Asked Questions
          <span class="hidden sm:block w-12 h-px bg-brass" aria-hidden="true"></span>
        </h2>
        <div class="mt-4 lg:mt-5 grid lg:grid-cols-2 gap-2.5 lg:gap-x-3 lg:gap-y-2.5 items-start">
          <details v-for="f in faqs" :key="f.q" class="group rounded-md border border-primary/15 bg-white">
            <summary class="flex items-center justify-between gap-4 cursor-pointer list-none px-4 py-2.5 lg:py-3 text-[14px] text-primary [&::-webkit-details-marker]:hidden">
              {{ f.q }}
              <LpIcon name="chevron" class="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <p class="px-4 pb-4 text-sm leading-relaxed text-gray-600">{{ f.a }}</p>
          </details>
        </div>
      </section>

      <!-- ============ Bottom CTA ============ -->
      <section id="contact" class="scroll-mt-20" aria-labelledby="lp-final-cta">
        <!-- Mobile: navy panel -->
        <div class="lg:hidden bg-ink text-white rounded-t-3xl px-5 pt-5 pb-4 text-center">
          <p class="font-montserrat text-[8px] font-semibold uppercase tracking-[0.3em] text-white/80">Ready to get started?</p>
          <h2 id="lp-final-cta" class="mt-1.5 font-display font-semibold text-[1.65rem] leading-tight">Need Appliance Repair Today?</h2>
          <p class="mt-1.5 mx-auto max-w-xs text-[13px] leading-snug text-white/85">
            Call now or schedule service online. Local, reliable, and trusted across the Bay Area.
          </p>
          <div class="mt-4 grid grid-cols-2 gap-2.5">
            <a :href="`tel:${phone.tel}`" class="flex items-center justify-center gap-2.5 h-[52px] rounded-md bg-brass text-white hover:bg-brass-dark transition-colors" data-cta="lp-call" @click="onCall('footer')">
              <LpIcon name="phone" class="w-5 h-5 fill-white" />
              <span class="font-display font-semibold text-[17px]">Call Now</span>
            </a>
            <button type="button" class="flex items-center justify-center gap-2 h-[52px] rounded-md border border-white/70 font-display font-semibold text-[17px] hover:border-brass-light hover:text-brass-light transition-colors" data-cta="lp-schedule" @click="onSchedule('footer')">
              <LpIcon name="calendar" class="w-5 h-5" /> Schedule Service
            </button>
          </div>
          <p class="mt-3.5 font-montserrat text-[7px] font-semibold uppercase tracking-[0.2em] text-white/80 whitespace-nowrap">
            <span class="max-[353px]:block">Locally Owned</span> <span class="mx-2 text-white/40 max-[353px]:hidden">|</span> <span class="max-[353px]:block max-[353px]:mt-1">Proudly Serving the Entire Bay Area</span>
          </p>
        </div>

        <!-- Desktop: cream band -->
        <div class="hidden lg:block relative overflow-hidden bg-[#F6F2EB] border-t border-primary/5">
          <img :src="accentImage" alt="" width="640" height="504" loading="lazy" decoding="async" class="absolute right-0 inset-y-0 h-full w-[34%] object-cover opacity-20" aria-hidden="true" />
          <div class="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-r from-[#F6F2EB] to-transparent" aria-hidden="true"></div>
          <div class="relative mx-auto max-w-screen-xl px-8 py-7 flex items-center gap-10">
            <div class="flex-1">
              <p class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.3em] text-brass-dark">Ready to get started?</p>
              <p class="mt-1 font-display font-semibold text-[2.1rem] leading-tight text-primary">Need Appliance Repair Today?</p>
              <p class="text-[13px] text-gray-600">Call now or schedule service online. Local, reliable, and trusted across the Bay Area.</p>
            </div>
            <a :href="`tel:${phone.tel}`" :class="[btnSolid, 'h-[52px] px-7 gap-3']" data-cta="lp-call" @click="onCall('footer')">
              <LpIcon name="phone" class="w-5 h-5 fill-white" />
              <span class="font-display font-semibold text-[19px]">Call Now</span>
            </a>
            <button type="button" :class="[btnOutline, 'h-[52px] px-7 gap-3 text-[19px] font-display font-semibold']" data-cta="lp-schedule" @click="onSchedule('footer')">
              <LpIcon name="calendar" class="w-5 h-5" /> Schedule Service
            </button>
            <p class="ml-6 font-montserrat text-[9px] font-semibold uppercase tracking-[0.3em] leading-[2] text-primary/80">
              Locally Owned<br />Proudly Serving<br />The Entire Bay Area
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-ink lg:bg-white text-center py-3 text-[10px] text-white/50 lg:text-gray-400 lg:border-t lg:border-primary/5">
      © {{ year }} Easy Fix Appliance · Licensed &amp; Insured · Bay Area, California
    </footer>

    <LpCallToast :phone="phone" :hint="callHint" />
  </div>
</template>

<script setup>
import heroImage from '~/assets/img/kitchenBackground2.webp'
import accentImage from '~/assets/img/kitchenBright.webp'
import { lpBtnSolid as btnSolid, lpBtnOutline as btnOutline, lpEyebrow as eyebrow } from '~/utils/lp'

// Google Ads landing page, shared by /ppc/high-end and /ppc/general
// (variant configs in data/ppc_landing.js). Tracking scripts and the
// Call / Schedule Service / nav handlers come from useLpPage.
const props = defineProps({
  variant: { type: Object, required: true },
})

const { phone, menuOpen, callHint, onCall, activeNav, onNav, formFlash, onSchedule } = useLpPage(props.variant.key)
const { rating, displayedReviews } = useLpReviews()

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Brands', href: '#brands' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const trustPoints = [
  { icon: 'clock', title: 'Same-Day Availability', text: 'Get back to your routine faster.' },
  { icon: 'technician', title: 'Experienced Technicians', text: 'Skilled, professional, and reliable.' },
  { icon: 'shield', title: 'Repair Warranty', mobileTitle: 'OEM Parts & Repair Warranty', text: 'Genuine parts. Lasting results.' },
]

const appliances = [
  { label: 'Refrigerator', icon: 'refrigerator' },
  { label: 'Freezer', icon: 'freezer' },
  { label: 'Wine Cooler', icon: 'wine' },
  { label: 'Range', icon: 'range' },
  { label: 'Oven', icon: 'oven' },
  { label: 'Cooktop', icon: 'cooktop' },
  { label: 'Dishwasher', icon: 'dishwasher' },
  { label: 'Ice Maker', icon: 'icemaker' },
  { label: 'Hood', icon: 'hood' },
  { label: 'Washer', icon: 'washer' },
  { label: 'Dryer', icon: 'dryer' },
]

// Sized so each row fits without flex-shrink squashing the images:
// one row from xl up; below that it wraps at the variant's rowBreak entries.
const logoSize = {
  sm: 'h-[11px] min-[337px]:h-[13px] md:h-4 lg:h-[18px] xl:h-4',
  // extra-wide wordmark (Frigidaire, ~8:1)
  wide: 'h-[11px] min-[337px]:h-[13px] md:h-4 lg:h-[18px] xl:h-[15px]',
  md: 'h-[14px] min-[337px]:h-4 min-[382px]:h-[18px] md:h-6 xl:h-[26px]',
  lg: 'h-6 min-[337px]:h-7 md:h-8 lg:h-10',
  // wordmark with a tall swoosh (Whirlpool): letters are only ~55% of the height
  tall: 'h-6 min-[337px]:h-7 md:h-8 lg:h-9 xl:h-[34px]',
}

// Zero-height, full-width items that force the logo row to wrap at chosen widths.
const rowBreak = {
  mobile: 'basis-full h-0 lg:hidden',
  lg: 'hidden lg:block xl:hidden basis-full h-0',
  phablet: 'hidden min-[444px]:max-[524px]:block basis-full h-0',
}

const faqs = computed(() => [
  {
    q: 'Do you offer same-day service?',
    a: 'Yes. We offer same-day and next-day appointments across the Bay Area, depending on technician availability. Call us for the fastest scheduling.',
  },
  {
    q: 'Which brands do you repair?',
    a: props.variant.faqBrands,
  },
  {
    q: 'Do you use OEM parts?',
    a: 'Yes. We use genuine OEM (original manufacturer) parts, and our repairs are backed by a repair warranty.',
  },
  {
    q: 'Which Bay Area locations do you serve?',
    a: 'We serve San Francisco, the Peninsula and the South Bay, including San Mateo, Palo Alto, Menlo Park, Atherton, Redwood City, Burlingame, Mountain View, Los Altos, Sunnyvale and San Jose.',
  },
])

const year = new Date().getFullYear()
</script>

<style scoped>
/* Nav-jump frame (base styles: [data-lp-flash] in assets/css/global.css).
   #brands has no padding and #services no bottom padding: draw their frame just outside
   (both sit inside #services' side padding, so this can't cause horizontal scroll). */
#brands[data-lp-flash]::after {
  inset: -6px;
}
#services[data-lp-flash]::after {
  bottom: -6px;
}
</style>
