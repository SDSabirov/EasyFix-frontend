<template>
  <div class="max-w-screen lg:h-screen flex flex-col relative overflow-hidden">
    <img
      
      class="fixed top-0 w-full h-full -z-50 object-cover"
      src="/assets/img/kitchenBackground1.webp"
      alt="kitchen appliances"
    />
    <!--Overlay-->
    <div
      class="absolute top-0 w-full h-full bg-gradient-to-b from-black to-black opacity-50"
    ></div>
    <div
      class="lg:absolute lg:top-0 flex flex-col justify-center items-center lg:h-full w-full relative h-[100vh]"
    >
      <div
        class="flex max-w-screen-xl flex-col justify-center items-center lg:space-y-2"
      >
        <h1
          class="lg:text-[50px] text-white text-center font-bold text-[32px] animate-fadeInLeft md:px-14 lg:px-28"
        >Professional Appliance Repair, Right Around the Corner</h1>
        <p
          class="lg:text-[24px] text-light text-center font-semibold text-[20px] animate-fadeDown"
        >Get your home appliances running like new with our trusted repair services across the Bay Area—schedule a visit now for expert service near you.</p>
        <div></div>
        <div class="flex space-x-4 items-center">
          <NuxtLink
            href="/booking"
            class="mt-2 z-20 bg-light rounded-lg border-2 border-light px-8 py-3 mt-8 font-semibold hover:border-tertiary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group "
          >
            <p class="text-primary group-hover:text-white w-full text-center">
              Schedule Your Service Today
            </p>
          </NuxtLink>
          
        </div>
      </div>
    </div>
    <div
      class="lg:absolute lg:bottom-0 w-full mx-4 lg:px-28 relative z-10 animate-fadeUp"
    >
      
    </div>
  </div>
</template>

<script setup>


</script>


