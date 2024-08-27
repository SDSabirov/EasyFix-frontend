<template>
    <div class="max-w-screen md:h-[140vh] flex flex-col relative overflow-hidden ">
        <img class="fixed top-0 w-full h-full -z-50 object-cover md:object-none" src="assets/img/main_background.jpg" alt="kitchen aplliances">
        <!--Overlay-->
        <div class="absolute top-0 w-full h-full bg-gradient-to-b from-black to-black opacity-70"></div>
        <div class="md:absolute md:top-0 flex flex-col justify-center items-center md:h-[90vh] w-full relative h-[100vh]">
            <div class="flex flex-col justify-center items-center md:space-y-4 md:px-28">
                <h1 class="md:text-[72px] text-light text-center font-bold text-[52px]">Luxury Appliance Repairs Done Right</h1>
                <p class="md:text-[24px] text-light text-center font-semibold  text-[20px]">
                    We provide exceptional service for all your luxury appliance near Bay Area.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi soluta corrupti esse, magni officia labore similique obcaecati molestias ducimus quae.
                </p>
                <button class="mt-2 bg-light border-2 border-light px-8 py-3 rounded-lg mt-8 font-semibold hover:border-2 hover:border-tertiary">
                    <a href="#services" class="text-primary ">Book now</a>
                </button>
            </div>
        </div>
        <div class="md:absolute md:bottom-8 w-full md:px-28 relative z-10 ">
            <LandingStats />
        </div>
    </div>

</template>

<script setup>

</script>