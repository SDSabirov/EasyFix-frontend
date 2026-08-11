<template>
  <div class="flex flex-col min-h-screen bg-white">
    <Navbar />

    <main class="flex-1 flex items-center justify-center px-4 pt-32 pb-16 sm:pt-36 sm:pb-20 bg-cream relative overflow-hidden">
      <span class="ghost-word text-[6rem] lg:text-[11rem] top-20 -right-6" aria-hidden="true">Booked</span>

      <section
        class="relative z-10 w-full max-w-2xl bg-white rounded-[2rem] border border-primary/10 shadow-xl shadow-ink/5 p-6 sm:p-10 lg:p-12"
        aria-labelledby="booking-success-title"
      >
        <!-- Success icon -->
        <div class="flex justify-center">
          <div class="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brass/10">
            <span
              class="absolute inset-0 rounded-full motion-safe:animate-ping bg-brass/15"
              style="animation-duration: 2.4s;"
              aria-hidden="true"
            ></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B08D57"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="relative w-10 h-10 sm:w-12 sm:h-12"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
        </div>

        <!-- Heading -->
        <h1
          id="booking-success-title"
          class="mt-6 sm:mt-8 text-center font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl lg:text-4xl text-primary leading-[1.1]"
        >
          Booking request
          <em class="font-display font-semibold italic text-brass-dark">received</em>
        </h1>

        <p class="mt-4 text-center text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl mx-auto">
          Thank you! Your request has been submitted and is pending review.
          We'll be in touch soon to confirm your reservation.
        </p>

        <!-- Divider -->
        <div class="mt-8 sm:mt-10 flex items-center gap-4">
          <div class="h-px flex-1 bg-gradient-to-r from-transparent to-brass/40" aria-hidden="true"></div>
          <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-brass-dark">
            What happens next
          </span>
          <div class="h-px flex-1 bg-gradient-to-l from-transparent to-brass/40" aria-hidden="true"></div>
        </div>

        <!-- Next steps -->
        <ul class="mt-8 space-y-5 sm:space-y-6">
          <li class="flex gap-4 sm:gap-5">
            <div
              class="flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brass/10"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8F7040"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h2 class="font-montserrat text-base sm:text-lg font-semibold text-primary">
                Confirmation email on its way
              </h2>
              <p class="mt-1 text-sm sm:text-base text-gray-600 leading-relaxed">
                You'll receive an email and/or SMS once your booking request has
                been reviewed and confirmed.
              </p>
            </div>
          </li>

          <li class="flex gap-4 sm:gap-5">
            <div
              class="flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-ink/5"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A2333"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <path d="M21 8v6" />
                <path d="M24 11h-6" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h2 class="font-montserrat text-base sm:text-lg font-semibold text-primary">
                Our team will follow up if needed
              </h2>
              <p class="mt-1 text-sm sm:text-base text-gray-600 leading-relaxed">
                If there are any details that need your attention, we'll reach
                out to you directly.
              </p>
            </div>
          </li>
        </ul>

        <!-- Phone CTA -->
        <div class="grain glow-brass relative bg-ink rounded-[1.5rem] mt-8 sm:mt-10 overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
          <div class="relative z-10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p class="text-sm sm:text-base text-white/60">Have a question?</p>
              <p class="font-display font-semibold italic text-xl sm:text-2xl text-brass-light">
                We're happy to help anytime.
              </p>
            </div>
            <a
              href="tel:4159414144"
              class="inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] whitespace-nowrap transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              aria-label="Call Easy Fix Appliance at (415) 941-4144"
            >
              (415) 941-4144
            </a>
          </div>
        </div>

        <!-- Back link -->
        <div class="mt-8 text-center">
          <NuxtLink
            to="/"
            class="group inline-flex items-center gap-3 font-montserrat text-[12px] font-semibold uppercase tracking-[0.18em] text-primary hover:text-brass-dark transition-colors"
          >
            <span class="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&larr;</span>
            Back to home
          </NuxtLink>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Booking Request Received | Easy Fix Appliance',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    {
      name: 'description',
      content:
        "Your booking request with Easy Fix Appliance has been received and is pending review. We'll be in touch soon to confirm your reservation.",
    },
  ],
});
</script>
