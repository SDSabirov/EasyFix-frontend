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
      <section class="relative overflow-hidden bg-white">
        <!-- Photo: the right side from lg up; below that a soft backdrop behind the text,
             fading out before the form. -->
        <div class="absolute top-0 right-0 w-full h-[27rem] lg:h-full lg:w-[64%]" aria-hidden="true">
          <img
            :src="page.hero.image"
            alt=""
            :width="page.hero.imageWidth"
            :height="page.hero.imageHeight"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            class="w-full h-full object-cover"
            :class="page.hero.imageClass"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/50 lg:hidden"></div>
          <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent lg:hidden"></div>
          <div class="hidden lg:block absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        </div>

        <div class="relative mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 pt-8 pb-9 lg:py-14 xl:py-[4.5rem] grid lg:grid-cols-12 gap-7 lg:gap-8 items-center">
          <!-- Below lg the hero is one column: text, button and form share the same edges. -->
          <div class="w-full max-lg:max-w-xl lg:col-span-7 xl:col-span-6">
            <p class="flex items-center gap-4 font-montserrat text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.3em] text-brass-dark">
              {{ page.hero.eyebrow }}
              <span class="h-px w-12 lg:w-16 bg-brass/70" aria-hidden="true"></span>
            </p>
            <h1 class="mt-3 lg:mt-4 lg:max-w-[8.6em] font-display font-semibold tracking-[-0.015em] text-primary text-[2.3rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] leading-[1.03]">
              <LpText :text="page.hero.title" />
            </h1>
            <p class="mt-4 lg:mt-5 max-w-[30rem] text-[15px] lg:text-base leading-relaxed text-primary/85">
              <span class="font-semibold text-primary"><LpText :text="page.hero.lead" /></span>
              <LpText :text="page.hero.text" />
            </p>

            <ul class="mt-4 lg:mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11.5px] lg:text-[13px] text-primary/85">
              <li class="flex items-center gap-2">
                <LpStars size="w-3.5 h-3.5 lg:w-4 lg:h-4" :label="`${rating.value} out of 5 stars`" />
                {{ rating.value }} Google Rating
              </li>
              <!-- A divider is dropped at the widths where the item after it wraps to a new line. -->
              <li class="h-3 w-px bg-primary/25 max-[359px]:hidden" aria-hidden="true"></li>
              <li class="max-[359px]:basis-full">Licensed &amp; Insured</li>
              <li class="h-3 w-px bg-primary/25 max-[519px]:hidden" aria-hidden="true"></li>
              <li class="max-[519px]:basis-full">OEM Parts &amp; Repair Warranty</li>
            </ul>

            <div class="mt-6 lg:mt-8 flex flex-col lg:flex-row gap-3">
              <!-- Desktop only: on mobile the form sits right below, so this would just scroll a few px. -->
              <button type="button" :class="[lpBtnSolid, 'max-lg:hidden h-[54px] px-7 text-[19px] gap-3']" data-cta="lp-schedule" @click="onSchedule('hero')">
                <LpIcon name="calendar" class="w-5 h-5" />
                Schedule Service
              </button>
              <a :href="`tel:${phone.tel}`" :class="[lpBtnOutline, 'h-[50px] lg:h-[54px] px-7 gap-3 font-display font-semibold text-lg lg:text-[19px]']" data-cta="lp-call" @click="onCall('hero')">
                <LpIcon name="phone" class="w-5 h-5 fill-primary" />
                Call Now
              </a>
            </div>
          </div>

          <!-- Lead form: beside the hero text on desktop, right under it on mobile (an on-page
               form, not a pop-up). Every Schedule button scrolls here. -->
          <div
            id="lp-form"
            class="w-full max-lg:max-w-xl lg:col-span-5 xl:col-span-4 xl:col-start-9 scroll-mt-20 lg:scroll-mt-24 rounded-2xl transition-shadow duration-500"
            :class="formFlash && 'ring-4 ring-brass/60 ring-offset-4'"
          >
            <LpLeadForm id-prefix="hero" location="hero" compact :phone="phone" :services="page.services.items" :variant="page.key" @call="onCall" />
          </div>
        </div>
      </section>

      <!-- ============ Trust bar ============ -->
      <section id="why-us" class="scroll-mt-20 bg-[#F6F2EB]" aria-label="Why choose Easy Fix Appliance">
        <ul class="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-8 lg:py-10 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-7 lg:gap-0">
          <li
            v-for="(t, i) in page.trustPoints"
            :key="t.title"
            class="flex flex-col lg:flex-row items-start gap-3 lg:gap-4 lg:px-7 lg:first:pl-0 lg:last:pr-0"
            :class="i > 0 && 'lg:border-l lg:border-brass/30'"
          >
            <span class="flex items-center justify-center shrink-0 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#ECE4D6] text-brass-dark">
              <LpIcon :name="t.icon" class="w-6 h-6" />
            </span>
            <span>
              <span class="block font-display font-semibold text-[1.2rem] lg:text-[1.35rem] leading-[1.15] text-primary"><LpText :text="t.title" /></span>
              <span class="mt-1 block text-[13px] lg:text-sm leading-snug text-gray-600"><LpText :text="t.text" /></span>
            </span>
          </li>
        </ul>
      </section>

      <!-- ============ Services ============ -->
      <section id="services" class="scroll-mt-20 mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h2 :class="[sectionTitle, 'mx-auto max-w-3xl']"><LpText :text="page.services.title" /></h2>

        <ul class="mt-7 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <li v-for="s in page.services.items" :key="s.label" class="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-[0_1px_2px_rgba(10,35,51,0.05)]">
            <div class="flex items-center justify-center aspect-[16/10] bg-[#F6F2EB]">
              <img v-if="s.image" :src="s.image" alt="" width="640" height="400" loading="lazy" decoding="async" class="w-full h-full object-cover" />
              <LpApplianceArt v-else :name="s.art" class="h-[86%] w-auto text-primary" />
            </div>
            <p class="flex items-center justify-center min-h-[3.25rem] lg:min-h-[3.75rem] px-2 py-2 text-center font-display font-semibold text-[1.05rem] min-[400px]:text-[1.15rem] lg:text-[1.35rem] leading-[1.15] text-primary">
              <LpText :text="s.label" />
            </p>
          </li>
        </ul>
      </section>

      <!-- ============ Brands + $99 diagnostic ============ -->
      <section id="brands" class="scroll-mt-20 bg-[#F6F2EB] grid lg:grid-cols-2" aria-labelledby="lp-pricing">
        <div class="relative overflow-hidden bg-ink flex items-center justify-center gap-5 sm:gap-7 lg:gap-9 min-h-[150px] sm:min-h-[190px] lg:min-h-[270px] px-5">
          <img
            :src="page.diagnostic.image"
            alt=""
            :width="page.diagnostic.imageWidth"
            :height="page.diagnostic.imageHeight"
            loading="lazy"
            decoding="async"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-ink/65" aria-hidden="true"></div>
          <template v-for="(l, i) in page.diagnostic.logos" :key="l.name">
            <span v-if="i > 0" class="relative h-10 lg:h-14 w-px bg-white/40" aria-hidden="true"></span>
            <img :src="l.src" :alt="l.name" :width="l.w" height="88" loading="lazy" decoding="async" class="relative h-8 min-[400px]:h-9 sm:h-11 lg:h-[52px] w-auto rounded-[3px] shadow-lg shadow-black/40" />
          </template>
        </div>

        <div class="flex items-center px-5 sm:px-6 lg:px-14 xl:px-20 py-9 lg:py-12">
          <div class="max-w-lg">
            <h2 id="lp-pricing" class="font-display font-semibold tracking-[-0.01em] text-[2.2rem] sm:text-[2.6rem] lg:text-[3.1rem] leading-none text-primary">
              {{ page.diagnostic.title }}
            </h2>
            <p class="mt-3.5 lg:mt-5 flex items-center gap-2.5 font-montserrat font-semibold text-[15px] lg:text-[17px] text-primary">
              <span class="flex items-center justify-center shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-brass text-white">
                <LpIcon name="check" class="w-3 h-3 lg:w-3.5 lg:h-3.5 [stroke-width:3]" />
              </span>
              {{ page.diagnostic.highlight }}
            </p>
            <p class="mt-2 lg:mt-2.5 text-[15px] lg:text-[17px] leading-relaxed text-gray-700">{{ page.diagnostic.text }}</p>
          </div>
        </div>
      </section>

      <!-- ============ Reviews ============ -->
      <LpReviews roomy class="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-12 lg:py-20" :rating="rating" :reviews="displayedReviews" />

      <!-- ============ FAQ ============ -->
      <section id="faq" class="scroll-mt-20 bg-cream border-t border-primary/5">
        <div class="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-12 lg:py-20">
          <p class="flex justify-center">
            <span class="inline-flex items-center gap-3 rounded-full border border-brass/30 bg-white px-4 py-1.5 font-montserrat text-[9px] lg:text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
              <span class="w-1 h-1 rounded-full bg-brass" aria-hidden="true"></span>
              {{ page.faq.eyebrow }}
              <span class="w-1 h-1 rounded-full bg-brass" aria-hidden="true"></span>
            </span>
          </p>
          <h2 :class="[sectionTitle, 'mt-4 flex items-center justify-center gap-5']">
            <span class="hidden sm:block w-12 lg:w-16 h-px bg-brass/70" aria-hidden="true"></span>
            <span>{{ page.faq.title }} <em class="italic text-brass-dark">{{ page.faq.titleAccent }}</em></span>
            <span class="hidden sm:block w-12 lg:w-16 h-px bg-brass/70" aria-hidden="true"></span>
          </h2>
          <p class="mt-2 lg:mt-3 mx-auto max-w-md lg:max-w-none text-center text-[13px] lg:text-[15px] text-gray-600"><LpText :text="page.faq.intro" /></p>

          <div class="mt-7 lg:mt-10 grid lg:grid-cols-2 gap-3 lg:gap-5">
            <div v-for="f in page.faq.items" :key="f.q" class="flex items-start gap-3.5 lg:gap-5 rounded-xl border border-primary/10 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_1px_2px_rgba(10,35,51,0.05)]">
              <span class="flex items-center justify-center shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#F6F2EB] text-brass-dark">
                <LpIcon :name="f.icon" class="w-5 h-5 lg:w-6 lg:h-6" />
              </span>
              <div>
                <h3 class="font-montserrat font-semibold text-[15px] lg:text-[17px] leading-snug text-primary"><LpText :text="f.q" /></h3>
                <p class="mt-1.5 text-[13.5px] lg:text-[15px] leading-relaxed text-gray-600"><LpText :text="f.a" /></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============ Bottom CTA ============ -->
      <section id="contact" class="scroll-mt-20 relative overflow-hidden bg-ink text-white" aria-labelledby="lp-final-cta">
        <img
          :src="page.cta.image"
          alt=""
          :width="page.cta.imageWidth"
          :height="page.cta.imageHeight"
          loading="lazy"
          decoding="async"
          class="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <!-- Ink in the middle (behind the text), the photo showing towards the edges. -->
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0A2333_35%,rgba(10,35,51,0.55)_100%)]" aria-hidden="true"></div>
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>

        <div class="relative mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-12 lg:py-[4.5rem] text-center">
          <h2 id="lp-final-cta" class="mx-auto max-w-2xl lg:max-w-none font-display font-semibold tracking-[-0.01em] text-[1.9rem] sm:text-4xl lg:text-[2.6rem] leading-tight">
            <LpText :text="page.cta.title" />
          </h2>
          <p class="mt-2.5 lg:mt-3 mx-auto max-w-md lg:max-w-none text-[14px] lg:text-[17px] leading-relaxed text-white/80"><LpText :text="page.cta.text" /></p>
          <div class="mt-6 lg:mt-8 flex flex-col sm:flex-row sm:justify-center gap-3">
            <button
              type="button"
              class="inline-flex items-center justify-center gap-3 h-[54px] px-6 lg:px-8 rounded-md bg-white text-ink font-display font-semibold text-lg lg:text-[19px] transition-colors duration-300 hover:bg-brass hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              data-cta="lp-schedule"
              @click="onSchedule('footer')"
            >
              <LpIcon name="calendar" class="w-5 h-5 shrink-0" />
              <LpText :text="page.cta.schedule" />
            </button>
            <a
              :href="`tel:${phone.tel}`"
              class="inline-flex items-center justify-center gap-3 h-[54px] px-6 lg:px-8 rounded-md border border-white/50 text-white font-display font-semibold text-lg lg:text-[19px] transition-colors duration-300 hover:border-brass-light hover:text-brass-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              data-cta="lp-call"
              @click="onCall('footer')"
            >
              <LpIcon name="phone" class="w-5 h-5 shrink-0 fill-[currentColor]" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>

    <LpCallToast :phone="phone" :hint="callHint" />
  </div>
</template>

<script setup>
import { lpBtnSolid, lpBtnOutline } from '~/utils/lp'

// Brand-specific Google Ads landing page (first one: /ppc/subzero). All copy and
// images come from the `page` config in data/ppc_brand_landing.js; the header,
// reviews, lead form and the Call / Schedule handlers are shared with the
// general landing pages (Lp/LandingPage.vue).
const props = defineProps({
  page: { type: Object, required: true },
})

const { phone, menuOpen, callHint, onCall, activeNav, onNav, formFlash, onSchedule } = useLpPage(props.page.key)
const { rating, displayedReviews } = useLpReviews(props.page.rating)

// "Brands" jumps to the band with the brand logos.
const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Brands', href: '#brands' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const sectionTitle =
  'text-center font-display font-semibold tracking-[-0.01em] text-[1.85rem] sm:text-4xl lg:text-[2.6rem] leading-tight text-primary'
</script>
