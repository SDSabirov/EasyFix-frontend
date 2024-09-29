<template>
    <div class=" w-full h-full">
        
        <Navbar class="bg-primary"/>
        <div class="relative w-full h-fit">
            
            <div class="relative top-0 h-[160vh] md:h-[105vh]  lg:h-[160vh] bg-black/40">
                <BookingBackground />
                <div class="absolute container top-[16vh] mx-auto w-full items-center md:px-32 h-fit">
                    <FormsBookingForm />
                </div>
            </div>
            
            
            
            
        </div>
        <div class="relative b-0">
            <Footer />
        </div>
        
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

function printScroll() {
    console.log(window.scrollY);
}
</script>