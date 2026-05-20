<template>
  <div class="flex flex-col min-h-screen bg-white">
    <Navbar />

    <main
      class="flex-1 flex items-center justify-center px-4 pt-24 pb-16 sm:pt-28 sm:pb-20"
      style="background: linear-gradient(160deg, #fff7ed 0%, #ffffff 45%, #f8fafc 100%);"
    >
      <section
        class="w-full max-w-2xl bg-white rounded-3xl shadow-[0_20px_60px_-20px_rgba(12,42,59,0.18)] ring-1 ring-gray-100 p-6 sm:p-10 lg:p-12"
        aria-labelledby="booking-success-title"
      >
        <!-- Success icon -->
        <div class="flex justify-center">
          <div
            class="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full"
            style="background: rgba(249, 115, 22, 0.12);"
          >
            <span
              class="absolute inset-0 rounded-full motion-safe:animate-ping"
              style="background: rgba(249, 115, 22, 0.18); animation-duration: 2.4s;"
              aria-hidden="true"
            ></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f97316"
              stroke-width="2.5"
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
          class="mt-6 sm:mt-8 text-center font-montserrat text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
          style="color: #0c2a3b;"
        >
          Booking request received
        </h1>

        <p class="mt-4 text-center text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl mx-auto">
          Thank you! Your request has been submitted and is pending review.
          We'll be in touch soon to confirm your reservation.
        </p>

        <!-- Divider -->
        <div class="mt-8 sm:mt-10 flex items-center gap-4">
          <div class="h-px flex-1 bg-gray-200"></div>
          <span
            class="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]"
            style="color: #f97316;"
          >
            What happens next
          </span>
          <div class="h-px flex-1 bg-gray-200"></div>
        </div>

        <!-- Next steps -->
        <ul class="mt-8 space-y-5 sm:space-y-6">
          <li class="flex gap-4 sm:gap-5">
            <div
              class="flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl"
              style="background: rgba(249, 115, 22, 0.1);"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f97316"
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
              <h2 class="font-montserrat text-base sm:text-lg font-semibold" style="color: #0c2a3b;">
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
              class="flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl"
              style="background: rgba(12, 42, 59, 0.08);"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0c2a3b"
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
              <h2 class="font-montserrat text-base sm:text-lg font-semibold" style="color: #0c2a3b;">
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
        <div
          class="mt-8 sm:mt-10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style="background: linear-gradient(135deg, #0c2a3b 0%, #1c6e8c 100%);"
        >
          <div class="flex items-start sm:items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6 flex-shrink-0 mt-0.5 sm:mt-0"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div>
              <p class="text-sm sm:text-base text-white/80">Have a question?</p>
              <p class="font-montserrat text-lg sm:text-xl font-semibold text-white">
                We're happy to help anytime.
              </p>
            </div>
          </div>
          <a
            href="tel:4159414144"
            class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base whitespace-nowrap cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c2a3b]"
            style="background: #f97316; color: #ffffff;"
            @mouseenter="(e) => e.currentTarget.style.background = '#ea670c'"
            @mouseleave="(e) => e.currentTarget.style.background = '#f97316'"
            aria-label="Call Easy Fix Appliance at (415) 941-4144"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.05z" />
            </svg>
            (415) 941-4144
          </a>
        </div>

        <!-- Back link -->
        <div class="mt-6 sm:mt-8 text-center">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-[#0c2a3b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2 rounded transition-colors duration-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
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
