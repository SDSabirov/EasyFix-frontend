<template>
    <div>
        <Navbar />
        <LandingHero />
        <LandingServices />
        <LandingApplianceTypes/>
        <LandingStats />
        <LandingPrices />
        <LandingBlogs />
        <LandingTestimonials />
        <LandingContacts />
        <Footer />
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
    window.addEventListener('scroll', changeBackground);
    
})

definePageMeta({
  title: 'Trusted Sub-Zero, Wolf & Viking Appliance Repair - San Mateo',
  
})
function changeBackground(){
    if (window.scrollY > 1) {
        document.querySelector('nav').classList.remove('bg-black/30');
        document.querySelector('nav').classList.add('bg-primary');
        
    } else {
        document.querySelector('nav').classList.remove('bg-primary');
        document.querySelector('nav').classList.add('bg-black/30');
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