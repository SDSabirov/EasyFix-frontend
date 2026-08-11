<template>
  <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
    <span class="ghost-word text-[7rem] lg:text-[12rem] top-4 -left-8" aria-hidden="true">Reviews</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 lg:mb-16" v-reveal>
        <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          Customer Reviews
        </span>
        <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
          <em class="font-display font-semibold italic text-brass-dark">Testimonials</em>
        </h2>
        <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
          Read reviews about our repair, installation and maintenance services.
          Our trained experts are always ready to help.
        </p>
      </div>

      <!-- Review cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
        <figure
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.author"
          class="group bg-cream rounded-[1.5rem] border border-primary/5 p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10 hover:bg-white hover:border-brass/30"
          v-reveal="index * 110"
        >
          <div class="flex items-center justify-between mb-5">
            <div class="flex text-brass gap-0.5" role="img" aria-label="5 out of 5 stars">
              <svg v-for="i in 5" :key="i" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="text-primary/60"
              aria-hidden="true"
            >
              <path
                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
              ></path>
            </svg>
          </div>
          <blockquote class="flex-1 mb-6">
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed text-left">
              {{ testimonial.quote }}
            </p>
          </blockquote>
          <figcaption class="flex items-center gap-3 border-t border-primary/10 pt-5">
            <span class="flex items-center justify-center w-9 h-9 rounded-full bg-ink text-white font-montserrat text-xs font-bold shrink-0">{{ testimonial.author.charAt(0) }}</span>
            <div class="text-left">
              <span class="block font-montserrat text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">{{ testimonial.author }}</span>
              <span class="text-xs text-gray-400">{{ testimonial.location }}</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote:
      "“We only trust Easy Fix Appliance for our Viking range. Their technician was prompt, professional, and truly an expert. The experience was seamless from start to finish.”",
    author: "Sophia R",
    location: "Hillsborough, CA",
  },
  {
    quote:
      "“Our Viking fridge wasn’t cooling properly, and Easy Fix diagnosed the issue immediately. They handled everything with care, and now it works perfectly.”",
    author: "James L",
    location: "Palo Alto, CA",
  },
]
</script>
