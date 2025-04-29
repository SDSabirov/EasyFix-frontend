<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Cooking Appliance Repair Experts</h2>
      </div>

      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 xl:gap-8 md:space-y-0">

        <NuxtLink to="/services/range-repair" class="p-6 bg-white rounded shadow dark:bg-gray-800 flex flex-col items-center group">
          <div class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900">
            <svg class="w-8 h-8 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 6h18v2H3V6zm0 4h18v10H3V10zm2 2v6h14v-6H5z" />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold text-center text-gray-900 dark:text-white group-hover:text-secondary">Range Repair</h3>
          <p class="font-light text-primary text-center">Comprehensive repair solutions for all types of kitchen ranges.</p>
        </NuxtLink>

        <NuxtLink to="/services/stove-repair" class="p-6 bg-white rounded shadow dark:bg-gray-800 flex flex-col items-center group">
          <div class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900">
            <svg class="w-8 h-8 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 3h12v2H6V3zm0 4h12v2H6V7zm0 4h12v10H6V11z" />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold text-center text-gray-900 dark:text-white group-hover:text-secondary">Stove Repair</h3>
          <p class="font-light text-primary text-center">Safe and efficient stove repairs for all models and types.</p>
        </NuxtLink>

        <NuxtLink to="/services/oven-repair" class="p-6 bg-white rounded shadow dark:bg-gray-800 flex flex-col items-center group">
          <div class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900">
            <svg class="w-8 h-8 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 5h16v14H4V5zm2 2v10h12V7H6z" />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold text-center text-gray-900 dark:text-white group-hover:text-secondary">Oven Repair</h3>
          <p class="font-light text-primary text-center">Expert oven repairs for reliable and consistent cooking results.</p>
        </NuxtLink>

        <NuxtLink to="/services/double-oven-repair" class="p-6 bg-white rounded shadow dark:bg-gray-800 flex flex-col items-center group">
          <div class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900">
            <svg class="w-8 h-8 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h12v6H6V4zm0 10h12v6H6v-6z" />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold text-center text-gray-900 dark:text-white group-hover:text-secondary">Double Oven Repair</h3>
          <p class="font-light text-primary text-center">Specialized repairs for double ovens, ensuring even performance.</p>
        </NuxtLink>

        <NuxtLink to="/services/cooktop-repair" class="p-6 bg-white rounded shadow dark:bg-gray-800 flex flex-col items-center group">
          <div class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900">
            <svg class="w-8 h-8 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="7" cy="7" r="2" />
              <circle cx="17" cy="7" r="2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold text-center text-gray-900 dark:text-white group-hover:text-secondary">Cooktop Repair</h3>
          <p class="font-light text-primary text-center">Efficient repair solutions for gas, electric, and induction cooktops.</p>
        </NuxtLink>

      </div>
    </div>
  </section>
</template>