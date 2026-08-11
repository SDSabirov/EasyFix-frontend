<template>
  <footer class="grain relative bg-ink text-white overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>

    <div class="relative z-10 container mx-auto px-4 max-w-screen-xl pt-16 pb-14 lg:pt-24 lg:pb-20 text-center">
      <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6" v-reveal>
        <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
        Get In Touch
      </span>

      <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-4xl text-white leading-tight mb-6" v-reveal>
        Contact
        <em class="font-display font-semibold italic text-brass-light">Us</em>
      </h2>

      <div class="max-w-2xl mx-auto space-y-4 text-base sm:text-lg text-white/70 leading-relaxed [&_strong]:text-white [&_strong]:font-semibold" v-reveal="90">
        <p>
          Luxury homes require <strong>expert service</strong>&mdash; trust the team
          that specializes in <strong>high-end {{ brand }} appliance repair.</strong>
        </p>
        <p>
          Experience the <strong>Easy Fix difference</strong>&mdash;where precision
          meets luxury in appliance care.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mt-12">
        <a
          href="tel:4159414144"
          class="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7 flex flex-col items-center gap-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-brass/40 touch-manipulation"
          v-reveal
        >
          <span class="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.06]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" class="text-brass-light" aria-hidden="true">
              <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path>
              <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
            </svg>
          </span>
          <h3 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Make a call</h3>
          <span class="font-display font-semibold text-xl text-white transition-colors group-hover:text-brass-light">(415) 941 - 4144</span>
        </a>

        <a
          href="mailto:care@easyfixappliance.com"
          class="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7 flex flex-col items-center gap-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-brass/40 touch-manipulation"
          v-reveal="110"
        >
          <span class="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.06]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" class="text-brass-light" aria-hidden="true">
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
            </svg>
          </span>
          <h3 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Send us email</h3>
          <span class="font-display font-semibold text-xl text-white break-all transition-colors group-hover:text-brass-light">care@easyfixappliance.com</span>
        </a>
      </div>
    </div>

    <div class="relative z-10 border-t border-white/10 py-5 text-center">
      <span class="text-sm text-white/50">
        &copy; 2025
        <a href="/" class="text-white/70 hover:text-brass-light transition-colors">Easy Fix Appliance&trade;</a>.
        All Rights Reserved.
      </span>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  brand: {
    type: String,
    required: true
  }

})
</script>
