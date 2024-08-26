<template>
    <div>
        <Navbar />
        <LandingHero />
        <LandingServices />
        <LandingTestimonials />
        <FormsContact />
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
    window.addEventListener('scroll', onScroll);
    
})

function printScroll() {
    console.log(window.scrollY);
}

function changeBackground(){
    document.querySelector('nav').classList.toggle('bg-transparent');
    document.querySelector('nav').classList.toggle('bg-primary');
}

function onScroll() {
    if (window.scrollY == 0) {
        changeBackground();
    } else {
        changeBackground();
    }
}
</script>