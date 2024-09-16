<template>
  <section class="bg-light dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-4 lg:mb-6">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-primary dark:text-white"
        >
          Our Services
        </h2>
        <p
          class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"
        ></p>
      </div>
      <div
        class="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0"
      >
        <!-- Pricing Card -->
        <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-primary rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
        >
          <h3 class="mb-4 text-light font-semibold">
            Second Appliance Service
          </h3>
          <p class="font-light text-light0 sm:text-lg dark:text-gray-400"></p>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold text-light">$49</span>
            <span class="text-gray-500 dark:text-gray-400"></span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left text-white">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Additional Appliance Repair </span>
            </li>
          </ul>
          <NuxtLink
            href="/booking"
            class="text-primary bg-light hover:bg-secondary hover:text-light focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >Book now</NuxtLink
          >
        </div>
        <!-- Pricing Card -->
        <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-primary rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
        >
          <h3 class="mb-4 text-light font-semibold">Standard Service</h3>
          <p class="font-light text-light0 sm:text-lg dark:text-gray-400"></p>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold text-light">$99</span>
            <span class="text-gray-500 dark:text-gray-400"></span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left text-white">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Expert diagnosis and repair  </span>
            </li>
            
            
          </ul>
          <NuxtLink
            href="/booking"
            class="text-primary bg-light hover:bg-secondary hover:text-light focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >Book now</NuxtLink
          >
        </div>
        <!-- Pricing Card -->
        <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-primary rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
        >
          <h3 class="mb-4 text-light font-semibold">Emergency Service</h3>
          <p class="font-light text-light0 sm:text-lg dark:text-gray-400"></p>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold text-light">$149</span>
            <span class="text-gray-500 dark:text-gray-400"></span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left text-white">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Urgent repair and service, Including Weekends </span>
            </li>
            
          </ul>
          <NuxtLink
            href="/booking"
            class="text-primary bg-light hover:bg-secondary hover:text-light focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >Book now</NuxtLink
          >
        </div>
        
        <!-- Pricing Card -->
        <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-primary rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
        >
          <h3 class="mb-4 text-light font-semibold">Maintenance Service</h3>
          <p class="font-light text-light0 sm:text-lg dark:text-gray-400"></p>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold text-light">$249</span>
            <span class="text-gray-500 dark:text-gray-400"></span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left text-white">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Comprehensive appliance tune-up and inspection</span>
            </li>
            
            
          </ul>
          <NuxtLink
            href="/booking"
            class="text-primary bg-light hover:bg-secondary hover:text-light focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >Book now</NuxtLink
          >
        </div>
      </div>
    </div>
    <LandingLocations />
  </section>
</template>
