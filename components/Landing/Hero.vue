<template>
  <div class="max-w-screen lg:h-screen flex flex-col relative overflow-hidden">
    <img
      
      class="fixed top-0 w-full h-full -z-50 object-cover"
      src="/assets/img/kitchenBackground1.webp"
      alt="kitchen appliances"
      loading="lazy"
    />
    <!--Overlay-->
    <div
      class="absolute top-0 w-full h-full bg-gradient-to-b from-black to-black opacity-70"
    ></div>
    <div
      class="lg:absolute lg:top-0 flex flex-col justify-center items-center lg:h-full w-full relative h-[100vh]"
    >
      <div
        class="flex max-w-screen-xl flex-col justify-center items-center lg:space-y-10 font-roboto"
      >
        <h1
          class="lg:text-7xl text-white text-center font-semibold text-2xl  md:px-14 leading-loose font-roboto p-2 md:p-0"
        >Fast and Professional Appliance Service in Your Area</h1>
        <p
          class="lg:text-2xl text-white text-center font-normal text-lg leading-loose p-2 md:p-0"
        >Get your home appliances running like new with our trusted repair services across the Bay Area—schedule a visit now for expert service near you.</p>
        <div></div>
        <div class="flex space-x-4 items-center">
          <a
            href="tel:4159414144"
            class="mt-2 z-20 bg-white rounded-lg border-2 border-white px-8 py-3 mt-8 font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group "
          >
            <p class="text-primary group-hover:text-white w-full text-center">
              Get Expert Appliance Repairs – Call Us Now!
            </p>
          </a>
          
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


