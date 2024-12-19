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
            <h3
              class="text-xl font-semibold text-primary mb-2 text-center group-hover:text-secondary transtion-color duration-300"
            >
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
            <h3
              class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300"
            >
              Freezer Repair
            </h3>
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
            <h3
              class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300"
            >
              Ice Maker Repair
            </h3>
            <p class="text-primary text-center">
              Get your ice maker back in action with our expert repair services.
            </p>
          </div>
        </NuxtLink>

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
            <h3
              class="text-xl font-semibold text-primary mb-2 text-center group-hover:text-secondary transtion-color duration-300"
            >
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
            <h3
              class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300"
            >
              Stove Repair
            </h3>
            <p class="text-primary text-center">
              Professional repairs for stoves to ensure safe and efficient
              cooking.
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
            <h3
              class="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transtion-color duration-300"
            >
              Oven Repair
            </h3>
            <p class="text-primary text-center">
              Expert oven repairs to keep your cooking hassle-free.
            </p>
          </div>
        </NuxtLink>
      </div>
      <div class="flex w-full items-center justify-center mt-10">
        <NuxtLink
          to="/services"
          class="text-justify underline capitalize text-gray-500 mt-2 px-2 md:mt-6"
          >Find Out More about our services</NuxtLink
        >
      </div>
      <div class="flex w-full items-center justify-center mt-10">
        <a href="tel:4159414144">
          <button
            class="bg-primary px-8 py-4 mt-2 rounded-lg border-2 border-primary font-semibold hover:border-primary hover:text-primary hover:bg-secondary transition-all duration-800 ease-out group"
          >
            <p class="text-white group-hover:text-white">
              Request Your Local Appliance Technician
            </p>
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>
