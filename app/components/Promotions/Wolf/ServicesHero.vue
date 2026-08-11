<template>
  <section class="bg-white py-20 lg:py-28">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <div class="relative rounded-[2rem] overflow-hidden border border-primary/10 shadow-sm" v-reveal>
        <img loading="lazy" decoding="async"
          src="/assets/img/promotions/wolf-hero2.webp"
          alt="Wolf and Cove Appliances"
          class="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" aria-hidden="true"></div>
        <div class="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-4 rounded-full bg-white/85 backdrop-blur-sm px-5 py-3 border border-primary/10">
          <img loading="lazy" decoding="async" src="/assets/img/wolf.webp" alt="wolf logo" class="h-6 sm:h-8 object-contain">
          <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
          <img loading="lazy" decoding="async" src="/assets/img/covelogo.png" alt="cove logo" class="h-6 sm:h-8 object-contain">
        </div>
      </div>
    </div>
  </section>
</template>
