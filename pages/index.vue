<template>
    <div>
        <Navbar />
        <LandingHero />
        <LandingServices />
        <LandingApplianceTypes2/>
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
   
    
})

definePageMeta({
  title: 'Trusted Sub-Zero, Wolf & Viking Appliance Repair - San Mateo',
  
})


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