<template>
    <div class="max-w-screen md:h-screen flex flex-col relative overflow-hidden ">
        <img class="fixed top-0 w-full h-full -z-50 object-cover md:object-none" src="assets/img/main_background.jpg" alt="kitchen aplliances">
        <!--Overlay-->
        <div class="absolute top-0 w-full h-full bg-gradient-to-b from-black to-black opacity-70"></div>
        <div class="md:absolute md:top-0 flex flex-col justify-center items-center md:h-[80vh] w-full relative h-[100vh]">
            <div class="flex flex-col justify-center items-center md:space-y-4 ">
                <h1 class="md:text-[72px] text-light text-center font-bold text-[52px] animate-fadeDown">Luxury Appliance Repairs Done Right</h1>
                <p class="md:text-[24px] text-light text-center font-semibold  text-[20px] animate-fadeDown">
                    We provide exceptional service for all your luxury appliance near Bay Area
                </p>
                <button class="mt-2 bg-light border-2 border-light px-8 py-3 mt-8 font-semibold hover:border-tertiary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group animate-flashShadow">
                    <NuxtLink href="/booking" class="text-primary group-hover:text-white">Book now</NuxtLink>
                </button>
            </div>
        </div>
        <div class="md:absolute md:bottom-0 w-full md:px-28 relative z-10 animate-fadeUp">
            <LandingStats />
        </div>
    </div>

</template>

<script setup>

</script>