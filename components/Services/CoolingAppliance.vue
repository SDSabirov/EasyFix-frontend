<script setup lang="ts"></script>

<template>
  <div class="grid gap-6 grid-cols-1 md:grid-cols-3 py-8">
    <!-- Card: Refrigerators / Built-In Fridges -->
    <NuxtLink to="/services/refrigerator">
      <div class="p-6 flex flex-col items-center justify-center group">
        <div class="text-primary mb-4">
          <img
            src="/assets/img/services/fridge.webp"
            alt="refrigerator repair"
            class="w-[100px] h-[100px] group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2 text-center group-hover:text-secondary transtion-color duration-300">
          Refrigerators Repair
        </h3>
        <p class="text-primary text-center">
          Professional repairs for all types of refrigerators and built-in
          fridges.
        </p>
      </div>
    </NuxtLink>
    <NuxtLink to="/services/freezer">
      <!-- Card: Freezers -->
      <div class="p-6 flex flex-col items-center group">
        <div class="text-primary mb-4">
          <img
            src="/assets/img/services/freezer.webp"
            alt="rfreezer repair"
            class="w-[100px] h-[100px] group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300">Freezer Repair</h3>
        <p class="text-primary text-center">
          Keep your frozen goods fresh with our reliable freezer repair
          services.
        </p>
      </div>
    </NuxtLink>
    <NuxtLink to="/services/ice-maker-repair">
      <!-- Card: Ice Makers -->
      <div class="p-6 flex flex-col items-center group">
        <div class="text-primary mb-4">
          <img
            src="/assets/img/services/icemaker.webp"
            alt="icemaker repair"
            class="w-[100px] h-[100px] group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300">
          Ice Maker Repair
        </h3>
        <p class="text-primary text-center">
          Get your ice maker back in action with our expert repair services.
        </p>
      </div>
    </NuxtLink>
    <NuxtLink to="/services/under-counter-fridge-repair">
      <!-- Card: Under Counter Fridges -->
      <div class="p-6 flex flex-col items-center group">
        <div class="text-primary mb-4">
          <img
            src="/assets/img/services/undercounter.webp"
            alt="undercounter fridge repair"
            class="w-[100px] h-[100px] group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300">
          Under-Counter Fridge Repair
        </h3>
        <p class="text-primary text-center">
          Convenient solutions for your compact fridge needs.
        </p>
      </div>
    </NuxtLink>

    <NuxtLink to="/services/wine-cooler-repair">
      <!-- Card: Wine Coolers -->
      <div class="p-6 flex flex-col items-center group">
        <div class="text-primary mb-4">
          <img
            src="/assets/img/services/winecooler.webp"
            alt="undercounter fridge repair"
            class="w-[100px] h-[100px] group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300">
          Wine Cooler Repair
        </h3>
        <p class="text-primary text-center">
          Keep your wine at the perfect temperature with our expert repair
          services.
        </p>
      </div>
    </NuxtLink>

    <NuxtLink to="/services/built-in-fridges">
      <div class="p-6 flex flex-col items-center group">
        <div class="text-primary mb-4">
          <img
            src="/assets/img/services/builtin.webp"
            alt="undercounter fridge repair"
            class="w-[100px] h-[100px] group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300">
          Built-In Fridges
        </h3>
        <p class="text-primary text-center">
          Professional repair services for built-in fridges from top brands.
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
