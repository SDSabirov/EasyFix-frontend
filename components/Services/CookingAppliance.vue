<template>
  <div class="grid gap-6 grid-cols-1 md:grid-cols-3 py-8 items-center">
    <NuxtLink to="/services/range-repair">
      <!-- Card: Ranges -->
      <div class="p-6 flex flex-col items-center justify-center group">
        <div class="text-primary mb-4">
          <img
            src="/assets/img/services/range.webp"
            alt="Range repair"
            class="w-[100px] h-[100px] group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2 text-center group-hover:text-secondary transtion-color duration-300">
          Range Repair
        </h3>
        <p class="text-primary text-center">
          Comprehensive repair solutions for all types of ranges.
        </p>
      </div>
    </NuxtLink>

    <NuxtLink to="/services/stove-repair">
      <!-- Card: Stoves -->
      <div class="p-6 flex flex-col items-center group">
        <div class="text-primary mb-4">
          <img
            src="/assets/img/services/stove.webp"
            alt="Stove repair"
            class="w-[100px] h-[100px] group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300">Stove Repair</h3>
        <p class="text-primary text-center">
          Professional repairs for stoves to ensure safe and efficient cooking.
        </p>
      </div>
    </NuxtLink>

    <NuxtLink to="/services/oven-repair">
      <!-- Card: Ovens -->

      <div class="p-6 flex flex-col items-center group">
        <div class="text-primary mb-4">
          <img
            src="/assets/img/services/oven.webp"
            alt="oven repair"
            class="w-[100px] h-[100px] group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300">Oven Repair</h3>
        <p class="text-primary text-center">
          Expert oven repairs to keep your cooking hassle-free.
        </p>
      </div>
    </NuxtLink>

    <NuxtLink to="/services/double-oven-repair">
      <!-- Card: Double Ovens -->
      <div class="p-6 flex flex-col items-center group">
        <div class="text-primary mb-4">
          <img
            src="/assets/img/services/doubleoven.webp"
            alt="Double oven repair"
            class="w-[100px] h-[100px] group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300">
          Double Oven Repair
        </h3>
        <p class="text-primary text-center">
          Specialized services for repairing double ovens with precision.
        </p>
      </div>
    </NuxtLink>

    <NuxtLink to="/services/cooktop-repair">
      <!-- Card: Cooktops -->
      <div class="p-6 flex flex-col items-center group">
        <div class="text-primary mb-4">
          <img
            src="/assets/img/services/cooktop.webp"
            alt="cooktop repair"
            class="w-[100px] h-[100px] group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300">Cooktop Repair</h3>
        <p class="text-primary text-center">
          Efficient repair services for all types of cooktops.
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
