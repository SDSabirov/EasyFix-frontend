<template>
    <div class="max-w-screen h-screen flex flex-col relative overflow-hidden ">
        <img class="w-screen h-screen" src="assets/img/main_background.jpg" alt="kitchen aplliances" >
        <!--Overlay-->
        <div class="absolute top-0 w-full h-full bg-gradient-to-b from-secondary to-black opacity-70">
        </div>
        <div class="absolute top-0 flex flex-col justify-center items-center h-full w-full">
            <div class="flex flex-col justify-center items-center space-y-4">
                <h1 class="md:text-[72px] text-light text-center font-bold sm:text-[40px]">Luxury Appliance Repairs Done Right</h1>
                <p class="md:text-[24px] text-light text-center font-semibold  sm:text-[16px]">
                    We provide exceptional service for all your luxury appliance near Bay Area
                </p>
                <button class="mt-2 bg-light border-2 border-light px-8 py-3 rounded-lg mt-8 font-semibold hover:border-2 hover:border-tertiary">
                    <a href="#services" class="text-primary ">Book now</a>
                </button>
            </div>
            
            
        </div>
        <div class="absolute bottom-8 w-full px-28">
                <LandingStats />
        </div>
        
    </div>

</template>

<script setup>

</script>