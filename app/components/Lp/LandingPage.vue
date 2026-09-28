<template>
  <div class="min-h-screen bg-white text-primary">
    <!-- ============ Header (sticky; nav items only jump within this page) ============ -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-primary/10">
      <div class="mx-auto max-w-screen-xl flex items-center justify-between gap-1.5 px-2.5 sm:px-6 h-16 lg:h-[72px]">
        <div class="shrink-0 select-none leading-none">
          <p class="font-display font-semibold tracking-[-0.01em] text-[1.1rem] min-[400px]:text-[1.3rem] sm:text-[1.75rem] lg:text-[2rem]">
            <span class="text-primary">Easy Fix</span> <span class="text-brass">Appliance</span>
          </p>
          <p class="mt-0.5 pl-2 sm:pl-3 font-montserrat text-[5.5px] min-[400px]:text-[6.5px] sm:text-[8px] font-semibold uppercase tracking-[0.3em] sm:tracking-[0.34em] text-primary/80">
            Appliance Repair Experts
          </p>
        </div>

        <nav aria-label="Page sections" class="hidden lg:flex items-center gap-8 font-montserrat text-[13px] text-primary/80">
          <a v-for="item in navItems" :key="item.href" :href="item.href" class="hover:text-brass-dark transition-colors">{{ item.label }}</a>
        </nav>

        <div class="flex items-center gap-1.5 sm:gap-5">
          <a
            :href="`tel:${phone.tel}`"
            class="flex items-center gap-1 sm:gap-2.5"
            data-cta="lp-call"
            @click="onCall('header')"
          >
            <LpIcon name="phone" class="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary shrink-0 fill-primary" />
            <span class="leading-tight">
              <span class="block font-montserrat font-semibold text-[10.5px] min-[400px]:text-[11.5px] sm:text-[15px] whitespace-nowrap">{{ phone.display }}</span>
              <span class="block text-[8px] sm:text-[10px] text-gray-500 whitespace-nowrap">
                <span class="hidden sm:inline">Locally Owned • </span>Bay Area Service
              </span>
            </span>
          </a>
          <button
            type="button"
            class="flex items-center gap-1.5 sm:gap-2 rounded-md bg-ink text-white px-2 sm:px-5 h-10 sm:h-11 font-display font-semibold text-[12px] min-[400px]:text-[13px] sm:text-[17px] leading-[1.05] transition-colors hover:bg-brass focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
            data-cta="lp-schedule"
            @click="onSchedule('header')"
          >
            <LpIcon name="calendar" class="hidden min-[400px]:block w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span class="text-left sm:whitespace-nowrap">Schedule<br class="sm:hidden" /> Service</span>
          </button>
          <button
            type="button"
            class="lg:hidden p-1 text-primary"
            :aria-expanded="menuOpen"
            aria-controls="lp-menu"
            @click="menuOpen = !menuOpen"
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
          class="block py-3 border-b border-primary/5 font-montserrat text-sm text-primary"
          @click="menuOpen = false"
        >{{ item.label }}</a>
        <div class="grid grid-cols-2 gap-2 pt-4">
          <a :href="`tel:${phone.tel}`" :class="[btnOutline, 'h-12 text-base']" data-cta="lp-call" @click="onCall('menu')">
            <LpIcon name="phone" class="w-4 h-4 fill-primary" /> Call Now
          </a>
          <button type="button" :class="[btnSolid, 'h-12 text-base']" data-cta="lp-schedule" @click="onSchedule('menu')">
            <LpIcon name="calendar" class="w-4 h-4" /> Schedule
          </button>
        </div>
      </nav>
    </header>

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
          <div class="lg:col-span-7 xl:pl-6">
            <p v-if="variant.eyebrow" class="mb-2.5 lg:mb-3 font-montserrat text-[9px] lg:text-[10px] font-semibold uppercase tracking-[0.32em] text-primary/80">{{ variant.eyebrow }}</p>
            <h1 class="font-display font-semibold tracking-[-0.015em] text-primary text-[2.15rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] max-w-[19rem] sm:max-w-none">
              Trusted Appliance Repair Experts in the Bay Area
            </h1>
            <p class="mt-3 lg:mt-4 max-w-[18.5rem] sm:max-w-md text-[14px] lg:text-[15px] leading-snug text-primary/85">
              Locally owned. Experienced technicians. Same-day service for {{ variant.heroBrands }} &amp; more.
            </p>

            <div class="mt-3 lg:mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] lg:text-[12px] text-primary/85">
              <span class="flex items-center gap-2">
                <span class="flex text-[#F5B301]" role="img" :aria-label="`${rating.value} out of 5 stars`">
                  <svg v-for="i in 5" :key="i" class="w-3.5 h-3.5 lg:w-4 lg:h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path :d="starPath" /></svg>
                </span>
                {{ rating.value }} Google Rating
              </span>
              <span class="text-primary/30" aria-hidden="true">|</span>
              <span>Licensed &amp; Insured</span>
              <span class="hidden lg:inline text-primary/30" aria-hidden="true">|</span>
              <span class="hidden lg:inline">OEM Parts &amp; Repair Warranty</span>
            </div>

            <div class="mt-5 lg:mt-6 flex flex-col lg:flex-row gap-2.5 lg:gap-3 max-w-[20rem] lg:max-w-none">
              <button type="button" :class="[btnSolid, 'h-[50px] lg:h-[52px] px-6 text-lg lg:text-[19px] gap-3']" data-cta="lp-schedule" @click="onSchedule('hero')">
                <LpIcon name="calendar" class="w-5 h-5" />
                Schedule Service
                <LpIcon name="arrow" class="w-5 h-5" />
              </button>
              <a :href="`tel:${phone.tel}`" :class="[btnOutline, 'h-[46px] lg:h-[52px] px-6 gap-3']" data-cta="lp-call" @click="onCall('hero')">
                <LpIcon name="phone" class="w-5 h-5 fill-primary" />
                <span class="lg:hidden font-display font-semibold text-lg">Call Now <span class="font-normal">{{ phone.display }}</span></span>
                <span class="hidden lg:block leading-tight text-left">
                  <span class="block font-display font-semibold text-[19px]">Call Now</span>
                  <span class="block text-[13px]">{{ phone.display }}</span>
                </span>
              </a>
            </div>

            <p class="hidden lg:block mt-6 ml-2 font-['Allura'] text-brass-dark text-[2.1rem] leading-[0.9] -rotate-3 select-none" aria-hidden="true">
              Exceptional Appliances.<br /><span class="ml-16">Expert Care.</span>
            </p>
          </div>

          <!-- Desktop: lead form in the hero. Mobile gets the same form in a bottom sheet. -->
          <div id="lp-form" class="hidden lg:block lg:col-span-5 xl:col-span-4 xl:col-start-9 scroll-mt-24">
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
            class="flex items-center justify-center gap-2 lg:gap-5 px-1 lg:px-6"
            :class="i > 0 && 'border-l border-brass/30'"
          >
            <span class="flex items-center justify-center shrink-0 w-9 h-9 lg:w-14 lg:h-14 rounded-full bg-[#ECE4D6] text-brass-dark">
              <LpIcon :name="t.icon" class="w-5 h-5 lg:w-8 lg:h-8" />
            </span>
            <span>
              <span class="block font-montserrat lg:font-display font-semibold text-[10.5px] leading-tight lg:text-xl lg:whitespace-nowrap text-primary">
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
            <span class="text-[11px] lg:text-xs text-gray-700 whitespace-nowrap">{{ a.label }}</span>
          </li>
        </ul>

        <div id="brands" class="scroll-mt-20">
          <p :class="[eyebrow, 'mt-6']">Trusted Brands We Service</p>
          <ul class="mt-3 lg:mt-4 flex flex-wrap xl:flex-nowrap items-center justify-center xl:justify-between gap-x-3 min-[380px]:gap-x-4 sm:gap-x-6 xl:gap-x-4 gap-y-3 px-1 xl:px-0">
            <li
              v-for="(b, i) in variant.brandLogos"
              :key="b.name || `break-${i}`"
              :class="b.mobileBreak && 'basis-full h-0 lg:hidden'"
              :aria-hidden="b.mobileBreak || undefined"
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
                class="block whitespace-nowrap font-montserrat font-bold tracking-[-0.02em] leading-none text-[15px] sm:text-lg lg:text-[1.2rem] text-[#3d3d3d]"
              >{{ b.text }}</span>
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
            <h2 id="lp-pricing" class="font-display font-semibold text-[1.2rem] min-[400px]:text-[1.35rem] lg:text-[2.5rem] leading-tight text-primary lg:whitespace-nowrap">$99 Diagnostic Visit</h2>
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
          <div class="hidden lg:flex relative ml-auto self-stretch -my-5 -mr-7 w-[30%] items-center justify-center" aria-hidden="true">
            <img :src="accentImage" alt="" width="640" height="504" loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div class="absolute inset-0 bg-gradient-to-r from-[#F6F2EB] via-[#F6F2EB]/60 to-transparent"></div>
            <p class="relative font-['Allura'] text-primary text-[2.3rem] leading-[0.95] -rotate-6 select-none">
              Knowledge<br /><span class="ml-4">Keeps Life Running</span>
            </p>
          </div>
        </div>
      </section>

      <!-- ============ Reviews ============ -->
      <section id="reviews" class="mx-auto max-w-screen-xl px-3 sm:px-6 lg:px-8 pt-6 lg:pt-8 scroll-mt-20">
        <p :class="eyebrow">Real People. Real Results.</p>
        <h2 class="mt-1.5 text-center font-display font-semibold tracking-[-0.01em] text-[1.75rem] sm:text-4xl lg:text-[2.6rem] leading-tight">
          What Bay Area Customers Say
        </h2>
        <p class="mt-1 text-center text-[11.5px] lg:text-[15px] text-gray-600">
          Trusted by homeowners across the Bay Area for expert service and lasting results.
        </p>

        <div class="mt-4 lg:mt-5 lg:grid lg:grid-cols-[0.8fr_1fr_1fr_1fr] lg:gap-4">
          <!-- Rating summary (desktop) -->
          <div class="hidden lg:flex flex-col items-center justify-center rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
            <img :src="googleLogo" alt="Google" width="44" height="44" class="w-11 h-11" loading="lazy" />
            <p class="mt-2 flex items-center gap-2">
              <span class="font-display font-semibold text-4xl">{{ rating.value }}</span>
              <span class="flex text-[#F5B301]" role="img" :aria-label="`${rating.value} out of 5 stars`">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path :d="starPath" /></svg>
              </span>
            </p>
            <p class="mt-1 text-sm text-gray-600">Based on {{ rating.count }} reviews</p>
          </div>

          <!-- Review cards: scroll-snap carousel on mobile, grid on desktop -->
          <div
            ref="reviewTrack"
            class="flex lg:contents overflow-x-auto snap-x snap-mandatory gap-3 items-start [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            @scroll.passive="onReviewScroll"
          >
            <figure
              v-for="r in displayedReviews"
              :key="r.author"
              class="snap-center shrink-0 w-full lg:w-auto rounded-lg border border-primary/10 bg-white shadow-sm px-4 py-3.5 lg:p-5 flex lg:flex-col gap-3.5 lg:gap-0"
            >
              <!-- mobile: G + stars + name column -->
              <div class="lg:hidden shrink-0 w-[34%] flex items-start gap-2.5">
                <img :src="googleLogo" alt="" width="28" height="28" class="w-7 h-7 mt-0.5" loading="lazy" />
                <div>
                  <span class="flex text-[#F5B301]" role="img" aria-label="5 out of 5 stars">
                    <svg v-for="i in 5" :key="i" class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path :d="starPath" /></svg>
                  </span>
                  <p class="mt-1.5 font-montserrat font-semibold text-[12px] leading-tight">{{ r.author }}</p>
                  <p class="text-[11px] text-gray-500">{{ r.date }}</p>
                </div>
              </div>
              <!-- desktop: stars + G row -->
              <div class="hidden lg:flex items-center justify-between">
                <span class="flex text-[#F5B301]" role="img" aria-label="5 out of 5 stars">
                  <svg v-for="i in 5" :key="i" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path :d="starPath" /></svg>
                </span>
                <img :src="googleLogo" alt="Google review" width="20" height="20" class="w-5 h-5" loading="lazy" />
              </div>
              <blockquote class="lg:mt-3 font-display italic text-[15px] lg:text-[17px] leading-snug text-primary/90 lg:flex-1">
                “{{ r.excerpt }}”
              </blockquote>
              <figcaption class="hidden lg:block mt-4">
                <span class="block font-montserrat font-semibold text-sm">{{ r.author }}</span>
                <span class="block text-sm text-gray-500">{{ r.date }}</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- Mobile carousel dots -->
        <div class="lg:hidden mt-3 flex justify-center gap-2">
          <button
            v-for="(r, i) in displayedReviews"
            :key="r.author"
            type="button"
            class="w-2 h-2 rounded-full transition-colors"
            :class="i === activeReview ? 'bg-brass' : 'bg-primary/20'"
            :aria-label="`Show review ${i + 1}`"
            :aria-current="i === activeReview"
            @click="goToReview(i)"
          ></button>
        </div>
      </section>

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
              <span class="leading-tight text-left">
                <span class="block font-display font-semibold text-[17px]">Call Now</span>
                <span class="block text-[12px]">{{ phone.display }}</span>
              </span>
            </a>
            <button type="button" class="flex items-center justify-center gap-2 h-[52px] rounded-md border border-white/70 font-display font-semibold text-[17px] hover:border-brass-light hover:text-brass-light transition-colors" data-cta="lp-schedule" @click="onSchedule('footer')">
              <LpIcon name="calendar" class="w-5 h-5" /> Schedule Service
            </button>
          </div>
          <p class="mt-3.5 font-montserrat text-[7px] font-semibold uppercase tracking-[0.2em] text-white/80 whitespace-nowrap">
            Locally Owned <span class="mx-2 text-white/40">|</span> Proudly Serving the Entire Bay Area
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
              <span class="leading-tight text-left">
                <span class="block font-display font-semibold text-[19px]">Call Now</span>
                <span class="block text-[13px] font-normal">{{ phone.display }}</span>
              </span>
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

    <!-- ============ Mobile form sheet ============ -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-200"
        leave-to-class="opacity-0"
      >
        <div
          v-if="sheetOpen"
          class="fixed inset-0 z-[60] flex items-end bg-ink/50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sheet-title"
          @click.self="closeSheet"
          @keydown.esc="closeSheet"
        >
          <div ref="sheetPanel" class="relative w-full max-h-[92dvh] overflow-y-auto rounded-t-3xl bg-cream px-3 pt-10 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <button type="button" class="absolute right-3 top-3 p-2 text-primary" @click="closeSheet">
              <LpIcon name="close" class="w-5 h-5" /><span class="sr-only">Close</span>
            </button>
            <LpLeadForm id-prefix="sheet" location="mobile-sheet" :phone="phone" :brands="variant.formBrands" :variant="variant.key" @call="onCall" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import heroImage from '~/assets/img/kitchenBackground2.webp'
import accentImage from '~/assets/img/kitchenBright.webp'
import googleLogo from '~/assets/img/google.svg'

// Google Ads landing page, shared by /ppc/high-end and /ppc/general
// (variant configs in data/ppc_landing.js). Deliberately has no links off
// the page: the only actions are Call and Schedule Service (lead form).
// noindex + sitemap exclusion are set via routeRules in nuxt.config.ts.
const props = defineProps({
  variant: { type: Object, required: true },
})

// Same number as the rest of the site (useContact.js).
const { phoneNumber, phoneDisplay } = useContact()
const phone = { tel: `+1${phoneNumber}`, display: phoneDisplay }

// Shown until /google-reviews returns live values.
const rating = reactive({ value: '5.0', count: '200+' })

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
// one row from xl up, wrapped + centered below that.
const logoSize = {
  sm: 'h-[13px] sm:h-4 lg:h-[18px]',
  md: 'h-4 min-[380px]:h-[18px] sm:h-6 xl:h-[26px]',
  lg: 'h-7 sm:h-8 lg:h-10',
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

// Real Google reviews (shortened) — replaced by live GMB reviews when the API responds.
const fallbackReviews = [
  { author: 'Den Baron', date: 'Google review', review: 'Had Tom come repair our Subzero fridge last week. He was an amazing technician, ontime, and very professional.' },
  { author: 'thai bui', date: 'Google review', review: "The technician, Tom, arrived right on time… He quickly diagnosed the problem and had the replacement part on hand, completing the repair much faster than I expected." },
  { author: 'Uzak Almasbek', date: 'Google review', review: "My Viking oven wasn't heating properly… He diagnosed and fixed the issue in just one trip, which was a huge relief." },
]
const reviews = ref(fallbackReviews)

const excerpt = (text, max = 150) => {
  if (!text || text.length <= max) return text
  return text.slice(0, text.lastIndexOf(' ', max)).replace(/[,;:.\s]+$/, '') + '…'
}
const displayedReviews = computed(() =>
  reviews.value.slice(0, 3).map((r) => ({ ...r, excerpt: excerpt(r.review) })),
)

const starPath = 'M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.3 4.02a1 1 0 0 0 .95.69h4.22c.97 0 1.37 1.24.59 1.81l-3.42 2.48a1 1 0 0 0-.36 1.12l1.3 4.02c.3.92-.75 1.69-1.54 1.12l-3.42-2.48a1 1 0 0 0-1.18 0l-3.42 2.48c-.78.57-1.84-.2-1.54-1.12l1.3-4.02a1 1 0 0 0-.36-1.12L1.95 9.45c-.78-.57-.38-1.81.59-1.81h4.22a1 1 0 0 0 .95-.69z'

const eyebrow =
  "flex items-center justify-center gap-4 font-montserrat whitespace-nowrap text-[8.5px] lg:text-[10px] font-semibold uppercase tracking-[0.24em] lg:tracking-[0.32em] text-brass-dark before:content-[''] before:w-6 sm:before:w-10 lg:before:w-16 before:h-px before:bg-brass/70 after:content-[''] after:w-6 sm:after:w-10 lg:after:w-16 after:h-px after:bg-brass/70"
const btnSolid =
  'inline-flex items-center justify-center gap-2 rounded-md bg-ink text-white font-display font-semibold transition-colors duration-300 hover:bg-brass focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2'
const btnOutline =
  'inline-flex items-center justify-center gap-2 rounded-md border border-brass/60 bg-white text-primary transition-colors duration-300 hover:border-brass hover:bg-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2'

const year = new Date().getFullYear()

// ---------- CTA handling ----------
const menuOpen = ref(false)
const sheetOpen = ref(false)
const sheetPanel = ref(null)
let lastFocus = null

const onCall = (location) => trackEvent('lp_call_click', { cta_location: location, landing_variant: props.variant.key })

const onSchedule = async (location) => {
  trackEvent('lp_schedule_click', { cta_location: location, landing_variant: props.variant.key })
  menuOpen.value = false
  if (window.matchMedia('(min-width: 1024px)').matches) {
    const form = document.getElementById('lp-form')
    form.scrollIntoView({ behavior: 'smooth', block: 'center' })
    form.querySelector('select')?.focus({ preventScroll: true })
    return
  }
  lastFocus = document.activeElement
  sheetOpen.value = true
  document.documentElement.style.overflow = 'hidden'
  await nextTick()
  sheetPanel.value?.querySelector('select')?.focus()
}

const closeSheet = () => {
  sheetOpen.value = false
  document.documentElement.style.overflow = ''
  lastFocus?.focus?.()
}

// ---------- Reviews carousel (mobile) ----------
const reviewTrack = ref(null)
const activeReview = ref(0)
const onReviewScroll = () => {
  const el = reviewTrack.value
  if (el && el.clientWidth) activeReview.value = Math.round(el.scrollLeft / el.clientWidth)
}
const goToReview = (i) => {
  const el = reviewTrack.value
  el?.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
}

const { fetchGoogleReviews } = useGoogleReviews()
const { capture } = useLeadAttribution()

onMounted(async () => {
  capture()
  const data = await fetchGoogleReviews()
  if (data?.reviews?.length) {
    const five = data.reviews.filter((r) => !r.rating || Number(r.rating) >= 5)
    if (five.length >= 3) reviews.value = five
  }
  if (data?.rating) rating.value = Number(data.rating).toFixed(1)
  if (data?.total_reviews || data?.user_ratings_total) rating.count = String(data.total_reviews || data.user_ratings_total)
})

onBeforeUnmount(() => {
  document.documentElement.style.overflow = ''
})
</script>
