<template>
    <div>
        <Navbar />
        <LandingHero />
        <LandingServices />
        <LandingPrices />
        <LandingBlogs />
        <LandingTestimonials />
        <LandingContacts />
        <FormsContact />
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
  description:'Certified Sub-Zero, Wolf & Viking appliance repair in San Mateo, Palo Alto & Bay Area. Fast, reliable service using original parts. Book your repair today!'
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