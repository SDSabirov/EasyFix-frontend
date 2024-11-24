<template>
  <section
    id="repairs"
    class="max-w-screen h-full bg-light flex flex-col items-center justify-center"
  >
    <div class="container mx-auto px-2 py-16 lg:px-28">
      <h2 class="text-4xl font-bold text-center text-primary">
        Your Trusted Partner for Appliance Repairs
      </h2>
      <p class="text-justify text-gray-500 mt-2 px-2 md:mt-6">
        We specialize in repairing refrigerators, freezers, ice makers,
        under-counter fridges, and wine coolers. Need help with cooking
        appliances? We've got you covered with services for ranges, stoves,
        ovens, double ovens, and cooktops.
      </p>
      <!-- Appliance Types Grid -->
      <div class="grid gap-6 grid-cols-1 md:grid-cols-3 py-8">
        <!-- Card: Refrigerators / Built-In Fridges -->
        <div class="bg-secondary shadow-md p-6 flex flex-col items-center">
          <div
            class="text-white mb-4 shadow-xl hover:shadow-4xl hover:shadow-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 10h18M9 21h6M9 3h6a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">
            Refrigerators / Built-In Fridges Repair
          </h3>
          <p class="text-white text-center">
            Professional repairs for all types of refrigerators and built-in
            fridges.
          </p>
        </div>

        <!-- Card: Freezers -->
        <div class="bg-secondary shadow-md p-6 flex flex-col items-center">
          <div
            class="text-white mb-4 shadow-xl hover:shadow-4xl hover:shadow-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10h14M5 14h14M5 6h14m-6 4v8m-4-8v8m4-8h-4"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Freezer Repair</h3>
          <p class="text-white text-center">
            Keep your frozen goods fresh with our reliable freezer repair
            services.
          </p>
        </div>

        <!-- Card: Ice Makers -->
        <div class="bg-secondary shadow-md p-6 flex flex-col items-center">
          <div
            class="text-white mb-4 shadow-xl hover:shadow-4xl hover:shadow-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16M4 12h16M9.9 16.9l-2.1 2.1a3 3 0 104.2 0l-2.1-2.1zM14.1 7.1l2.1-2.1a3 3 0 10-4.2 0l2.1 2.1z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">
            Ice Maker Repair
          </h3>
          <p class="text-white text-center">
            Get your ice maker back in action with our expert repair services.
          </p>
        </div>

        <!-- Card: Under Counter Fridges -->
        <div class="bg-secondary shadow-md p-6 flex flex-col items-center">
          <div
            class="text-white mb-4 shadow-xl hover:shadow-4xl hover:shadow-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 2a9 9 0 100 18 9 9 0 000-18zm3 10H9m3 3H9m3-6H9"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">
            Under-Counter Fridge Repair
          </h3>
          <p class="text-white text-center">
            Convenient solutions for your compact fridge needs.
          </p>
        </div>

        <!-- Card: Wine Coolers -->
        <div class="bg-secondary shadow-md p-6 flex flex-col items-center">
          <div
            class="text-white mb-4 shadow-xl hover:shadow-4xl hover:shadow-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v18M3 12h18M9 9l6 6m0-6l-6 6"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">
            Wine Cooler Repair
          </h3>
          <p class="text-white text-center">
            Keep your wine at the perfect temperature with our expert repair
            services.
          </p>
        </div>

        <!-- Card: Ranges -->
        <div class="bg-secondary shadow-md p-6 flex flex-col items-center">
          <div
            class="text-white mb-4 shadow-xl hover:shadow-4xl hover:shadow-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 12h10M12 7v10"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Range Repair</h3>
          <p class="text-white text-center">
            Ensuring perfect functionality for all your cooking needs.
          </p>
        </div>
      </div>
      <div class="flex w-full items-center justify-center mt-10">
        <NuxtLink to="/booking">
          <button
            class="bg-primary px-8 py-4 mt-2 rounded-lg border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
          >
            <p class="text-white group-hover:text-white">
              Request Your Local Appliance Technician
            </p>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup></script>
