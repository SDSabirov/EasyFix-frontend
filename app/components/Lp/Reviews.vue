<template>
  <!-- Google rating + newest reviews. Spacing and width come from the parent (class falls through). -->
  <section id="reviews" class="scroll-mt-20">
    <p :class="lpEyebrow">Real People. Real Results.</p>
    <h2 :class="roomy ? [lpBrandTitle, 'mt-2'] : 'mt-1.5 text-center font-display font-semibold tracking-[-0.01em] text-[1.75rem] sm:text-4xl lg:text-[2.6rem] leading-tight'">
      What Bay Area Customers Say
    </h2>
    <p class="mt-1 text-center text-[11.5px] lg:text-[15px] text-gray-600" :class="roomy && 'max-lg:text-[13px] lg:mt-2'">
      {{ intro }}
    </p>
    <!-- Rating summary below lg, where the summary card is hidden (brand landing pages). -->
    <p v-if="roomy" class="lg:hidden mt-4 flex items-center justify-center gap-2 text-[13px] text-gray-600">
      <img :src="googleLogo" alt="Google" width="18" height="18" class="w-[18px] h-[18px]" loading="lazy" />
      <span class="font-headline font-bold text-[1.15rem] leading-none text-primary">{{ rating.value }}</span>
      <LpStars size="w-4 h-4" :label="`${rating.value} out of 5 stars`" />
      <span>Based on {{ rating.count }} reviews</span>
    </p>

    <div class="lg:grid lg:grid-cols-[0.8fr_1fr_1fr_1fr]" :class="roomy ? 'mt-6 lg:mt-10 lg:gap-5' : 'mt-4 lg:mt-5 lg:gap-4'">
      <!-- Rating summary (desktop) -->
      <div class="hidden lg:flex flex-col items-center justify-center rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
        <img :src="googleLogo" alt="Google" width="44" height="44" class="w-11 h-11" loading="lazy" />
        <p class="mt-2 flex items-center gap-2">
          <span :class="roomy ? 'font-headline font-bold text-[2rem] leading-none' : 'font-display font-semibold text-4xl'">{{ rating.value }}</span>
          <LpStars size="w-5 h-5" :label="`${rating.value} out of 5 stars`" />
        </p>
        <p class="mt-1 text-sm text-gray-600">Based on {{ rating.count }} reviews</p>
      </div>

      <!-- Review cards: scroll-snap carousel on mobile, grid on desktop -->
      <div
        ref="reviewTrack"
        class="flex lg:contents overflow-x-auto snap-x snap-mandatory gap-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        :class="roomy ? 'items-stretch' : 'items-start'"
        @scroll.passive="onReviewScroll"
      >
        <figure
          v-for="(r, i) in reviews"
          :key="`${i}-${r.author}`"
          class="snap-center shrink-0 w-full lg:w-auto rounded-lg border border-primary/10 bg-white shadow-sm px-4 py-3.5 lg:p-5 flex lg:flex-col lg:gap-0"
          :class="roomy ? 'flex-col min-[480px]:flex-row gap-3 min-[480px]:gap-3.5' : 'gap-3.5'"
        >
          <!-- mobile: G + stars + name, beside the quote (roomy: above it on narrow phones,
               where the column is too narrow for the stars and longer names) -->
          <div class="lg:hidden shrink-0 flex items-start gap-2.5" :class="roomy ? 'min-[480px]:w-[34%]' : 'w-[34%]'">
            <img :src="googleLogo" alt="" width="28" height="28" class="w-7 h-7 mt-0.5" loading="lazy" />
            <div :class="roomy && 'min-w-0 [overflow-wrap:anywhere]'">
              <LpStars size="w-3.5 h-3.5" />
              <p class="mt-1.5 font-montserrat font-semibold text-[12px] leading-tight">{{ r.author }}</p>
              <p class="text-[11px] text-gray-500">{{ r.date }}</p>
            </div>
          </div>
          <!-- desktop: stars + G row -->
          <div class="hidden lg:flex items-center justify-between">
            <LpStars size="w-4 h-4" />
            <img :src="googleLogo" alt="Google review" width="20" height="20" class="w-5 h-5" loading="lazy" />
          </div>
          <blockquote class="lg:mt-3 italic text-primary/90 lg:flex-1 [overflow-wrap:anywhere]" :class="roomy ? 'font-headline text-[14px] lg:text-[15px] leading-relaxed' : 'font-display text-[15px] lg:text-[17px] leading-snug'">
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
    <div class="lg:hidden mt-1 flex justify-center">
      <!-- 8px dot, 32px tap target -->
      <button
        v-for="(r, i) in reviews"
        :key="`${i}-${r.author}`"
        type="button"
        class="flex items-center justify-center w-8 h-8"
        :aria-label="`Show review ${i + 1}`"
        :aria-current="i === activeReview"
        @click="goToReview(i)"
      ><span class="w-2 h-2 rounded-full transition-colors" :class="i === activeReview ? 'bg-brass' : 'bg-primary/20'" aria-hidden="true"></span></button>
    </div>
  </section>
</template>

<script setup>
import googleLogo from '~/assets/img/google.svg'
import { lpEyebrow, lpBrandTitle } from '~/utils/lp'

defineProps({
  // { value: '4.9', count: '118' } and the excerpted reviews, both from useLpReviews().
  rating: { type: Object, required: true },
  reviews: { type: Array, required: true },
  // Brand landing pages: more air between the heading block and the cards, their
  // headline type, and the rating summary shown on phones too.
  roomy: { type: Boolean, default: false },
  // Line under the heading.
  intro: { type: String, default: 'Trusted by homeowners across the Bay Area for expert service and lasting results.' },
})

// ---------- Carousel (mobile) ----------
const reviewTrack = ref(null)
const activeReview = ref(0)
const onReviewScroll = () => {
  const el = reviewTrack.value
  if (el && el.clientWidth) activeReview.value = Math.round(el.scrollLeft / el.clientWidth)
}
const goToReview = (i) => {
  const el = reviewTrack.value
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  el?.scrollTo({ left: i * el.clientWidth, behavior })
}
</script>
