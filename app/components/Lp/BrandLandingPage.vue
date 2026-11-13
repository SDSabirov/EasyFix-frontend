<template>
  <div class="min-h-screen bg-white text-primary">
    <LpHeader
      v-model:menu-open="menuOpen"
      :phone="phone"
      :nav-items="navItems"
      :active-nav="activeNav"
      brand
      @call="onCall"
      @schedule="onSchedule"
      @nav="onNav"
    />

    <main>
      <!-- ============ Hero ============ -->
      <section class="relative overflow-hidden bg-white">
        <!-- Photo (an upright picture of one appliance): a full-height column on the right from
             md up; on phones a soft, slightly blurred backdrop behind the text (a sharp badge
             next to the headline would read as stray text), fading out before the form. -->
        <div class="absolute top-0 right-0 w-full h-[27rem] md:h-full md:w-[45%] lg:w-[64%] overflow-hidden" aria-hidden="true">
          <!-- From xl up the appliance is shown whole, between the headline and the form, over a
               blurred copy of itself that fills the rest of the panel (behind the form); below
               xl the picture fills the panel. -->
          <img
            :src="page.hero.image"
            alt=""
            :width="page.hero.imageWidth"
            :height="page.hero.imageHeight"
            loading="lazy"
            decoding="async"
            class="hidden xl:block absolute inset-0 w-full h-full object-cover blur-2xl scale-125"
          />
          <img
            :src="page.hero.image"
            alt=""
            :width="page.hero.imageWidth"
            :height="page.hero.imageHeight"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            class="relative w-full h-full object-cover max-md:blur-[5px] max-md:scale-110 xl:w-auto xl:max-w-none xl:[mask-image:linear-gradient(to_right,transparent,black_12%,black_80%,transparent)]"
            :class="page.hero.imageClass"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/50 md:hidden"></div>
          <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent md:hidden"></div>
          <div class="hidden md:block absolute inset-y-0 left-0 w-1/2 lg:w-[38%] xl:w-[26%] bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        </div>

        <div class="relative mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 pt-6 pb-9 md:pt-10 md:pb-12 lg:py-14 xl:py-[4.5rem] grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <!-- Below lg the hero is one column: text, button and form share the same edges
               (on tablets that column sits left of the photo). -->
          <div class="w-full md:max-lg:max-w-[52%] lg:col-span-7 xl:col-span-6">
            <p class="flex items-center gap-4 font-montserrat text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.3em] text-brass-dark max-lg:text-[#7A5E33]">
              {{ page.hero.eyebrow }}
              <span class="h-px w-12 lg:w-16 bg-brass/70 max-[359px]:hidden" aria-hidden="true"></span>
            </p>
            <h1 :class="[lpHeadline, 'mt-3 lg:mt-4 max-w-[10.5em] lg:max-w-[9.6em] text-primary text-[2rem] max-[359px]:text-[1.85rem] min-[390px]:text-[2.15rem] sm:text-[2.75rem] md:max-lg:text-[2.25rem] lg:text-[2.9rem] xl:text-[3.25rem] leading-[1.07]']">
              <LpText :text="page.hero.title" />
            </h1>
            <!-- The space is written out: the compiler drops a line break between two tags. -->
            <p class="mt-4 lg:mt-5 max-w-[30rem] lg:max-xl:max-w-[25rem] text-[15px] lg:text-base leading-relaxed text-primary/85">
              <template v-if="page.hero.lead"><span class="font-semibold text-primary"><LpText :text="page.hero.lead" /></span>{{ ' ' }}</template><LpText :text="page.hero.text" />
            </p>

            <ul class="mt-4 lg:mt-5 lg:max-xl:max-w-[25rem] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11.5px] lg:text-[13px] text-primary/85">
              <li class="flex items-center gap-2">
                <LpStars size="w-3.5 h-3.5 lg:w-4 lg:h-4" :label="`${rating.value} out of 5 stars`" />
                {{ rating.value }} Google Rating
              </li>
              <!-- A divider is dropped at the widths where the item after it wraps to a new line. -->
              <li class="h-3 w-px bg-primary/25 max-[359px]:hidden" aria-hidden="true"></li>
              <li class="max-[359px]:basis-full">Licensed &amp; Insured</li>
              <li class="h-3 w-px bg-primary/25 max-[519px]:hidden md:max-xl:hidden" aria-hidden="true"></li>
              <li class="max-[519px]:basis-full md:max-xl:basis-full">OEM Parts &amp; Repair Warranty</li>
            </ul>

            <div class="mt-5 lg:mt-8 flex flex-col lg:flex-row gap-3">
              <!-- Desktop only: on mobile the form sits right below, so this would just scroll a few px. -->
              <button type="button" :class="[lpBrandBtnSolid, 'max-lg:hidden h-[52px] px-6 text-[15px]']" data-cta="lp-schedule" @click="onSchedule('hero')">
                <LpIcon name="calendar" class="w-[18px] h-[18px]" />
                Schedule Service
              </button>
              <a :href="`tel:${phone.tel}`" :class="[lpBrandBtnOutline, 'h-[50px] lg:h-[52px] px-6 text-[15px]']" data-cta="lp-call" @click="onCall('hero')">
                <LpIcon name="phone" class="w-[17px] h-[17px] fill-primary" />
                Call Now
              </a>
            </div>
          </div>

          <!-- Lead form: beside the hero text on desktop, right under it on mobile (an on-page
               form, not a pop-up). Every Schedule button scrolls here. -->
          <div
            id="lp-form"
            class="w-full md:max-lg:max-w-[52%] lg:col-span-5 xl:col-span-4 xl:col-start-9 scroll-mt-20 lg:scroll-mt-24 rounded-2xl transition-shadow duration-500"
            :class="formFlash && 'ring-4 ring-brass/60 ring-offset-4'"
          >
            <LpLeadForm id-prefix="hero" location="hero" compact :phone="phone" :services="page.services.items" :variant="page.key" @call="onCall" @submitted="onSubmitted" />
          </div>
        </div>
      </section>

      <!-- ============ Trust bar ============ -->
      <section id="why-us" class="scroll-mt-20 bg-[#F6F2EB]" aria-label="Why choose Easy Fix Appliance">
        <ul class="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-8 lg:py-10 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-7 lg:gap-0">
          <li
            v-for="(t, i) in page.trustPoints"
            :key="t.title"
            class="flex flex-col items-start gap-3 lg:px-4 xl:px-7 lg:first:pl-0 lg:last:pr-0"
            :class="i > 0 && 'lg:border-l lg:border-brass/30'"
          >
            <span class="flex items-center justify-center shrink-0 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#ECE4D6] text-brass-dark">
              <LpIcon :name="t.icon" class="w-6 h-6" />
            </span>
            <span>
              <span class="block font-montserrat font-semibold text-[14.5px] lg:text-[14px] xl:text-[1rem] leading-snug text-primary"><LpText :text="t.title" /></span>
              <span class="mt-1.5 block text-[13px] lg:text-sm leading-snug text-gray-600 text-balance"><LpText :text="t.text" /></span>
            </span>
          </li>
        </ul>
      </section>

      <!-- ============ Services ============ -->
      <section id="services" class="scroll-mt-20 mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h2 :class="[lpBrandTitle, 'mx-auto max-w-3xl']"><LpText :text="page.services.title" /></h2>

        <ul class="mt-7 lg:mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6" :class="page.services.columns === 3 ? 'md:grid-cols-3 mx-auto max-w-5xl' : 'md:grid-cols-4'">
          <li v-for="s in page.services.items" :key="s.label" class="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-[0_1px_2px_rgba(10,35,51,0.05)]">
            <!-- Photos are wide (2:1); the drawings get a taller panel. -->
            <div class="flex items-center justify-center bg-[#F6F2EB]" :class="photoCards ? 'aspect-[2/1]' : 'aspect-[16/10]'">
              <img v-if="photoCards" :src="s.image" alt="" width="640" height="320" loading="lazy" decoding="async" class="w-full h-full object-cover" />
              <LpApplianceArt v-else :name="s.art" :accent="s.accent" class="h-[86%] w-auto text-primary" />
            </div>
            <p class="flex items-center justify-center min-h-[3.5rem] lg:min-h-[3.75rem] px-2 md:max-lg:px-1 py-2 text-center font-headline font-semibold text-[0.94rem] max-[343px]:text-[0.84rem] min-[430px]:text-[1rem] xl:text-[1.1rem] leading-[1.2] text-primary text-balance" :class="page.services.columns !== 3 && 'md:max-lg:text-[0.875rem]'">
              <LpText :text="s.label" />
            </p>
          </li>
        </ul>
      </section>

      <!-- ============ Brands + $99 diagnostic ============ -->
      <section id="brands" class="scroll-mt-20 bg-[#F6F2EB] grid lg:grid-cols-2" aria-labelledby="lp-pricing">
        <!-- Close-up of the brand's badge on an appliance. -->
        <div class="relative overflow-hidden bg-ink min-h-[150px] sm:min-h-[190px] lg:min-h-[270px]">
          <img
            :src="page.diagnostic.image"
            :alt="page.diagnostic.imageAlt"
            :width="page.diagnostic.imageWidth"
            :height="page.diagnostic.imageHeight"
            loading="lazy"
            decoding="async"
            class="absolute inset-0 w-full h-full object-cover"
            :class="page.diagnostic.imageClass"
          />
        </div>

        <div class="flex items-center px-5 sm:px-6 lg:px-14 xl:px-16 py-9 lg:py-12">
          <div class="max-w-lg">
            <h2 id="lp-pricing" :class="[lpHeadline, 'text-[1.9rem] sm:text-[2.2rem] lg:text-[2.6rem] leading-[1.05] text-primary']">
              {{ page.diagnostic.title }}
            </h2>
            <p class="mt-3.5 lg:mt-5 flex items-center gap-2.5 font-montserrat font-semibold text-[15px] lg:text-[17px] text-primary">
              <span class="flex items-center justify-center shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-brass text-white">
                <LpIcon name="check" class="w-3 h-3 lg:w-3.5 lg:h-3.5 [stroke-width:3]" />
              </span>
              {{ page.diagnostic.highlight }}
            </p>
            <p class="mt-2 lg:mt-2.5 text-[15px] lg:text-[17px] leading-relaxed text-gray-700 text-balance">{{ page.diagnostic.text }}</p>
          </div>
        </div>
      </section>

      <!-- ============ Reviews ============ -->
      <LpReviews roomy class="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-12 lg:py-20" :rating="rating" :reviews="displayedReviews" :intro="page.reviewsIntro" />

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
          <h2 :class="[lpBrandTitle, 'mt-4 flex items-center justify-center gap-5']">
            <span class="hidden sm:block w-12 lg:w-16 h-px bg-brass/70" aria-hidden="true"></span>
            <span>{{ page.faq.title }} <em class="italic text-brass-dark">{{ page.faq.titleAccent }}</em></span>
            <span class="hidden sm:block w-12 lg:w-16 h-px bg-brass/70" aria-hidden="true"></span>
          </h2>
          <p class="mt-2 lg:mt-3 mx-auto max-w-md lg:max-w-none text-center text-[13px] lg:text-[15px] text-gray-600 text-balance"><LpText :text="page.faq.intro" /></p>

          <div class="mt-7 lg:mt-10 grid lg:grid-cols-2 gap-3 lg:gap-5">
            <div v-for="f in page.faq.items" :key="f.q" class="flex items-start gap-3.5 lg:gap-5 rounded-xl border border-primary/10 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_1px_2px_rgba(10,35,51,0.05)]">
              <span class="flex items-center justify-center shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#F6F2EB] text-brass-dark">
                <LpIcon :name="f.icon" class="w-5 h-5 lg:w-6 lg:h-6" />
              </span>
              <div>
                <h3 class="font-montserrat font-semibold text-[15px] lg:text-[17px] leading-snug text-primary text-balance"><LpText :text="f.q" /></h3>
                <p class="mt-1.5 text-[13.5px] lg:text-[15px] leading-relaxed text-gray-600"><LpText :text="f.a" /></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============ Bottom CTA ============ -->
      <section id="contact" class="scroll-mt-20 relative overflow-hidden bg-ink text-white" aria-labelledby="lp-final-cta">
        <!-- From lg up, a photo at each end that fades into the ink. -->
        <template v-for="side in ['left', 'right']" :key="side">
          <div class="hidden lg:block absolute inset-y-0 w-[24%] xl:w-[27%]" :class="side === 'left' ? 'left-0' : 'right-0'" aria-hidden="true">
            <img :src="page.cta[side].src" alt="" :width="page.cta[side].w" :height="page.cta[side].h" loading="lazy" decoding="async" class="w-full h-full object-cover" :class="side === 'left' ? 'object-left' : page.cta.right.class" />
            <div class="absolute inset-0" :class="side === 'left' ? 'bg-gradient-to-r from-ink/10 via-ink/55 to-ink' : 'bg-gradient-to-l from-ink/10 via-ink/55 to-ink'"></div>
          </div>
        </template>
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>

        <div class="relative mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-12 lg:py-[4.5rem] text-center">
          <h2 id="lp-final-cta" :class="[lpHeadline, 'mx-auto max-w-2xl lg:max-w-none text-[1.6rem] sm:text-[1.9rem] lg:text-[2.25rem] leading-[1.15] text-balance']">
            <LpText :text="page.cta.title" />
          </h2>
          <p class="mt-2.5 lg:mt-3 mx-auto max-w-md lg:max-w-none text-[14px] lg:text-[17px] leading-relaxed text-white/80 text-balance"><LpText :text="page.cta.text" /></p>
          <div class="mt-6 lg:mt-8 flex flex-col sm:flex-row sm:justify-center gap-3">
            <button
              type="button"
              class="inline-flex items-center justify-center gap-2.5 min-h-[52px] py-2 px-3 min-[400px]:px-6 lg:px-7 rounded-md bg-white text-ink font-montserrat font-semibold text-[13px] min-[400px]:text-[15px] leading-tight transition-colors duration-300 hover:bg-brass hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              data-cta="lp-schedule"
              @click="onSchedule('footer')"
            >
              <LpIcon name="calendar" class="w-[18px] h-[18px] shrink-0 max-[359px]:hidden" />
              <LpText :text="page.cta.schedule" />
            </button>
            <a
              :href="`tel:${phone.tel}`"
              class="inline-flex items-center justify-center gap-2.5 min-h-[52px] py-2 px-6 lg:px-7 rounded-md border border-white/50 text-white font-montserrat font-semibold text-[15px] transition-colors duration-300 hover:border-brass-light hover:text-brass-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              data-cta="lp-call"
              @click="onCall('footer')"
            >
              <LpIcon name="phone" class="w-[17px] h-[17px] shrink-0 fill-[currentColor]" />
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
import { lpBrandBtnSolid, lpBrandBtnOutline, lpHeadline, lpBrandTitle } from '~/utils/lp'

// Brand-specific Google Ads landing page (/ppc/miele-repair, /ppc/viking-repair, ...).
// All copy and images come from the `page` config in data/ppc_brand_landing.js; the
// header, reviews, lead form and the Call / Schedule handlers are shared with the
// general landing pages (Lp/LandingPage.vue).
// Type: Source Serif 4 (font-headline) for headlines and card labels, Montserrat for
// buttons and small titles, Roboto for body copy. Cormorant stays in the logo only.
const props = defineProps({
  page: { type: Object, required: true },
})

const { phone, menuOpen, callHint, onCall, activeNav, onNav, formFlash, onSchedule, onSubmitted } = useLpPage(props.page.key)
const { rating, displayedReviews } = useLpReviews(props.page.rating)

// Service cards show photos when every card has one, otherwise the line drawings.
const photoCards = computed(() => props.page.services.items.every((s) => s.image))

// "Brands" jumps to the band with the brand badge.
const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Brands', href: '#brands' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

</script>
