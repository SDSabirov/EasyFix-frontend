<template>
    <div class=" w-full h-full">
        
        <Navbar class="bg-primary"/>
        <div class="relative w-full h-fit">
            
            <div class="relative top-0 h-screen ">
                <div class="max-w-screen h-full flex flex-col relative overflow-x-hidden">
                    <img
                    class="fixed top-0 w-full h-[100%] -z-50 object-cover "
                    src="assets/img/main_background.jpg"
                    alt="kitchen aplliances"
                    />
                    <!--Overlay-->
                    <div
                    class="absolute top-0 w-full h-full bg-gradient-to-b from-black to-black opacity-70"
                    ></div>
                    <FormsBookingForm class="z-10 relative top-[16vh] mx-2 md:mx-14 lg:mx-32 "/>
                </div>
                
            </div>
            
            
            
            
        </div>
        <div class="relative b-0">
            <Footer />
        </div>
        <ModalsPrivacy />
    </div>
    
</template>

<script setup>

import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';

// initialize components based on data attribute selectors
onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
    
})


function changeBackground(){
    if (window.scrollY > 1) {
        document.querySelector('nav').classList.remove('bg-transparent');
        document.querySelector('nav').classList.add('bg-primary');
        
    } else {
        document.querySelector('nav').classList.remove('bg-primary');
        document.querySelector('nav').classList.add('bg-transparent');
    }
    
}

function onScroll() {
    if (window.scrollY == 0) {
        changeBackground();
    } else {
        changeBackground();
    }
}


</script>