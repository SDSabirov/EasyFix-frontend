<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Your Trusted Partner for Appliance Repairs
        </h2>
        <p class="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          We specialize in repairing refrigerators, freezers, ice makers,
          under-counter fridges, and wine coolers. Need help with cooking
          appliances? We've got you covered with services for ranges, stoves,
          ovens, double ovens, and cooktops.
        </p>
      </div>

      <div
        class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0"
      >
        <!-- Card 1: Refrigerators Repair -->
        <div class="p-6 bg-white rounded shadow dark:bg-gray-800">
          <div
            class="flex justify-center items-center mb-4 w-12 h-12 rounded bg-primary-100 dark:bg-primary-900"
          >
            <svg
              class="w-6 h-6 text-primary-600 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7zm5 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Refrigerators Repair
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Professional repairs for all types of refrigerators and built-in
            fridges.
          </p>
        </div>

        <!-- Card 2: Freezer Repair -->
        <div class="p-6 bg-white rounded shadow dark:bg-gray-800">
          <div
            class="flex justify-center items-center mb-4 w-12 h-12 rounded bg-primary-100 dark:bg-primary-900"
          >
            <svg
              class="w-6 h-6 text-primary-600 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4V4z" />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Freezer Repair</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Keep your frozen goods fresh with our reliable freezer repair
            services.
          </p>
        </div>

        <!-- Card 3: Ice Maker Repair -->
        <div class="p-6 bg-white rounded shadow dark:bg-gray-800">
          <div
            class="flex justify-center items-center mb-4 w-12 h-12 rounded bg-primary-100 dark:bg-primary-900"
          >
            <svg
              class="w-6 h-6 text-primary-600 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2a10 10 0 0 1 10 10h-2a8 8 0 1 0-16 0H2a10 10 0 0 1 10-10z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Ice Maker Repair
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Get your ice maker back in action with our expert repair services.
          </p>
        </div>

        <!-- Card 4: Range Repair -->
        <div class="p-6 bg-white rounded shadow dark:bg-gray-800">
          <div
            class="flex justify-center items-center mb-4 w-12 h-12 rounded bg-primary-100 dark:bg-primary-900"
          >
            <svg
              class="w-6 h-6 text-primary-600 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v6H3v-6z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Range Repair</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Comprehensive repair solutions for all types of ranges.
          </p>
        </div>

        <!-- Card 5: Stove Repair -->
        <div class="p-6 bg-white rounded shadow dark:bg-gray-800">
          <div
            class="flex justify-center items-center mb-4 w-12 h-12 rounded bg-primary-100 dark:bg-primary-900"
          >
            <svg
              class="w-6 h-6 text-primary-600 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2l4 4-4 4-4-4 4-4zm0 8v12h-2V10h2zm4 0v12h2V10h-2z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Stove Repair</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Professional repairs for stoves to ensure safe and efficient
            cooking.
          </p>
        </div>

        <!-- Card 6: Oven Repair -->
        <div class="p-6 bg-white rounded shadow dark:bg-gray-800">
          <div
            class="flex justify-center items-center mb-4 w-12 h-12 rounded bg-primary-100 dark:bg-primary-900"
          >
            <svg
              class="w-6 h-6 text-primary-600 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 3h14a2 2 0 0 1 2 2v14h-2V5H5v14H3V5a2 2 0 0 1 2-2z" />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Oven Repair</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Expert oven repairs to keep your cooking hassle-free.
          </p>
        </div>
      </div>

      <div class="flex w-full items-center justify-center mt-10">
        <div
          class="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full md:w-auto max-w-2xl items-center justify-center"
        >
          <!-- Find Out More Link -->
          <NuxtLink
            to="/services"
            class="text-primary font-semibold underline text-lg hover:text-secondary transition-colors"
          >
          Find Out More About Our Services →
          </NuxtLink>

          <!-- Request Technician Button -->
          <a href="tel:4159414144">
            <button
              class="bg-primary text-white px-8 py-3 rounded-lg font-semibold border-2 border-primary hover:bg-secondary hover:border-secondary transition-all duration-500 ease-out"
            >
              Request Your Local Appliance Technician
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
