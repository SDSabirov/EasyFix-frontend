<template>
    <div>
        <Navbar />
        <LandingHero />
        <LandingServices />
        <LandingTestimonials />
        <LandingFaq />
        <LandingContacts />
        <FormsContact />
        <Footer />
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
    window.addEventListener('scroll', changeBackground);
    
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