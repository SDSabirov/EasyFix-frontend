<template>
    <div class="max-w-screen lg:h-screen flex flex-col relative overflow-hidden ">
      <transition name="slide-fade">
      <img
        v-if="currentSlogan.background"
        :key="currentSlogan.background"
        class="fixed top-0 w-full h-full -z-50 object-cover "
        :src="currentSlogan.background"
        :class="{'animate-fadeInLeft':animate}"
        alt="kitchen appliances"
      />
    </transition>
        <!--Overlay-->
        <div class="absolute top-0 w-full h-full bg-gradient-to-b from-black to-black opacity-70"></div>
        <div class="lg:absolute lg:top-0 flex flex-col justify-center items-center lg:h-[80vh] w-full relative h-[100vh]">
            <div class="flex flex-col justify-center items-center lg:space-y-2 ">
                <h1 class="lg:text-[50px] text-light text-center  font-bold text-[32px] animate-fadeInLeft md:px-14 lg:px-28"
                :key="currentSlogan.header"
                :class="{'animate-fadeInLeft': animate }">{{currentSlogan.header}}</h1>
                <p class="lg:text-[24px] text-light text-center font-semibold  text-[20px] animate-fadeDown"
                :key="currentSlogan.paragraph"
                  :class="{'animate-fadeDown':animate}">
                    {{currentSlogan.paragraph}}
                </p>
                <div class="flex flex-col lg:flex-row space-x-2">
                  <NuxtLink 
                  href="/booking"
                  class="mt-2 z-20 bg-light border-2 border-light px-8 py-3 mt-8 font-semibold hover:border-tertiary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group animate-flashShadow">
                    <p  class="text-primary group-hover:text-white w-full text-center">Book now</p>
                </NuxtLink>
                <a 
                  href="tel:+16505139163"
                  class="mt-2 z-20 bg-light border-2 border-light px-8 py-3 mt-8 font-semibold hover:border-tertiary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group animate-flashShadow">
                    <p  class="text-primary group-hover:text-white">or Call us +16505139163 </p>
                </a>
                </div>
                
            </div>
        </div>
        <div class="lg:absolute lg:bottom-0 w-full mx-4 lg:px-28 relative z-10 animate-fadeUp">
            <LandingStats />
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import mainBackground from "@/assets/img/main_backgroundv2.jpeg";
import secondBackground from "@/assets/img/main_backgroundv3.jpeg";
import thirdBackground from "@/assets/img/kitchenBackground1.jpeg";
import forthBackground from "@/assets/img/kitchenBright.jpg";
import fifthBackground from "@/assets/img/main_background.jpg"

let currentIndex = ref(0);
let currentSlogan = ref({});
let animate = ref(true);  // Animation state

const sloganData = ref([
{
    header: 'Sub-Zero Refrigerator not cooling?',
    paragraph: 'Call now for a Certified Technician Near You',
    background: mainBackground,
  },
  {
    header: 'Wolf Oven Temperature Issue or Wolf Stove Not Working Well?',
    paragraph:
      'Call Now for your Local Appliance Technician',
    background: thirdBackground,
  },
  {
    header: 'Viking Range Not Heating or Viking Fridge Leaking?',
    paragraph: 'Book same day service today',
    background: secondBackground,
  },
  
  
  {
    header: "Problem with your Thermador Appliances? You're in Good Hand's!",
    paragraph: 'We fix your Range, Refrigerator, Cook-top, and Dishwasher in one visit!',
    background: forthBackground,
  },
  {
    header: "Quick and Reliable Repairs on",
    paragraph: 'GE Monogram, Kitchen-Aid, DCS, U-Line, Miele and more!',
    background: fifthBackground,
  },
]);

// Initialize with the first slogan
currentSlogan.value = sloganData.value[currentIndex.value];

const slideShow = () => {
  setInterval(() => {
    // Reset animation class
    animate.value = false;
    
    // Use a small delay to reapply animations for smooth transition
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % sloganData.value.length;
      currentSlogan.value = sloganData.value[currentIndex.value];
      animate.value = true;  // Trigger animation again
    }, 50);
    
  }, 5000); // Slide duration
};

onMounted(() => {
  slideShow();
});
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-enter-to, .slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>