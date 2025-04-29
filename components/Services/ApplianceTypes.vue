<template>
  <section
    id="repairs"
    class="max-w-screen h-full bg-gray-50 flex flex-col items-center justify-center mt-14 bg-[url(/assets/img/promotions/pattern.png)]"
  >
    <div class="container mx-auto px-2 py-16 lg:px-28">
      <h1 class="text-4xl font-bold text-center text-primary">
        Expert Appliance Repair Services for Your Home
      </h1>
      <p class="text-center text-gray-500 mt-2 px-2 md:mt-6">
        We repair refrigerators, ovens, washers, dryers, and more—serving all
        major brands in San Francisco, San Mateo, Palo Alto, Mountain View, and
        the Bay Area. Quality service you can trust!
      </p>
      
      <div class="flex w-full items-center justify-center mt-10">
        <NuxtLink href="tel:4159414144">
          <button
            class="bg-primary px-8 py-4 mt-2 rounded-lg border-2 border-primary font-semibold hover:border-primary hover:text-primary hover:bg-secondary transition-all duration-800 ease-out group"
          >
            <p class="text-white group-hover:text-white">
              Book Your Local Appliance Technician
            </p>
          </button>
        </NuxtLink>
      </div>

    
      <ServicesCoolingAppliance />
     
      <ServicesCookingAppliance />
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
