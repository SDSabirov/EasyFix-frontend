<template>
  <section id="prices" class="bg-light dark:bg-gray-900">
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
        class="space-y-8 md:grid md:grid-cols-4 md:space-y-0 sm:gap-6 xl:gap-10 lg:space-y-0 px-2"
      >
        <!-- Pricing Card  Additional Service-->
        <div
          class="flex flex-col p-4 lg:p-6 mx-auto max-w-lg text-center md:w-full md:h-full bg-primary min-h-[170px] border border-gray-100 shadow-2xl"
        >
          <h4 class="mb-4 text-light text-sm font-semibold lg:text-lg">
            Additional Appliance Service
          </h4>
          <div class="flex justify-center items-baseline my-3">
            <span class="mr-2 text-2xl lg:text-4xl font-extrabold text-light">$49</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-6  text-left text-light">
            <li class="flex items-center">
              
            
              <p class="text-sm text-center">Diagnostic and Troubleshooting for each Additional Appliance</p>
            </li>
          </ul>
          <div class="flex h-full w-full items-end justify-center">
            <NuxtLink
            href="/booking"
            class="text-primary rounded-xl bg-light hover:bg-secondary hover:text-light focus:ring-4 focus:ring-primary-200 font-medium text-sm px-6 py-2.5 text-center "
            >Book now</NuxtLink
          >
          </div>
        </div>

        <!-- Pricing Card Standard-->
        <div
          class="flex flex-col p-4 lg:p-6 mx-auto max-w-lg text-center md:w-full md:h-full bg-primary min-h-[170px] border border-gray-100 shadow-2xl"
        >
          <h4 class="mb-4 text-light text-sm font-semibold lg:text-lg">
            Standard Service Visit
          </h4>
          <div class="flex justify-center items-baseline my-3">
            <span class="mr-2 text-2xl lg:text-4xl font-extrabold text-light">$99</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-6  text-left text-light">
            <li class="flex items-center">
              
            
              <p class="text-sm text-center">Expert Diagnostic and Troubleshooting</p>
            </li>
          </ul>
          <div class="flex h-full w-full items-end justify-center">
            <NuxtLink
            href="/booking"
            class="text-primary rounded-xl bg-light hover:bg-secondary hover:text-light focus:ring-4 focus:ring-primary-200 font-medium text-sm px-6 py-2.5 text-center "
            >Book now</NuxtLink
          >
          </div>
          
        </div>

        <!-- Pricing Card Emergency-->
        <div
          class="flex flex-col p-4 lg:p-6 mx-auto max-w-lg text-center md:w-full md:h-full bg-primary min-h-[170px] border border-gray-100 shadow-2xl"
        >
          <h4 class="mb-4 text-light text-sm font-semibold mt-2 lg:text-lg">
            Emergency Service
          </h4>
          <div class="flex justify-center items-baseline my-3">
            <span class="mr-2 text-2xl lg:text-4xl font-extrabold text-light">$149</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-6  text-left text-light w-full">
            <li class="flex items-center w-full">
              <p class="text-sm text-center w-full">After Hours service visit</p>
            </li>
          </ul>
          <div class="flex h-full w-full items-end justify-center">
            <NuxtLink
            href="/booking"
            class="text-primary rounded-xl bg-light hover:bg-secondary hover:text-light focus:ring-4 focus:ring-primary-200 font-medium text-sm px-6 py-2.5 text-center "
            >Book now</NuxtLink
          >
          </div>
          
        </div>

        <!-- Pricing Card Maintenance-->
        <div
          class="flex flex-col p-4 lg:p-6 mx-auto max-w-lg text-center md:w-full md:h-full bg-primary min-h-[170px] border border-gray-100 shadow-2xl"
        >
          <h4 class="mb-4 mt-2 text-light text-sm font-semibold lg:text-lg">
            Maintenace Service
          </h4>
          <div class="flex justify-center items-baseline my-3">
            <span class="mr-2 text-2xl lg:text-4xl font-extrabold text-light">$249</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-6  text-left text-light">
            <li class="flex items-center">
              
            
              <p class="text-sm text-center">Comprehensive appliance tune-up, inspection, and cleaning</p>
            </li>
          </ul>
          <div class="flex h-full w-full items-end justify-center">
            <NuxtLink
            href="/booking"
            class="text-primary rounded-xl bg-light hover:bg-secondary hover:text-light focus:ring-4 focus:ring-primary-200 font-medium text-sm px-6 py-2.5 text-center "
            >Book now</NuxtLink
          >
          </div>
          
        </div>

      </div>
    </div>
    <LandingLocations />
  </section>
</template>
