<template>
  <nav
    :class="[
      'transition-all duration-500 fixed w-full z-40 top-0 start-0 font-montserrat',
      isScrolled ? 'bg-black/50 backdrop-blur-md shadow-md' : 'bg-transparent',
    ]"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1"
    >
        <a
        href="/"
        class="flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse"
      >
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="rounded-full max-h-[38px] md:max-h-[52px]"
        >
          <path
            d="M7.80934 8.52637L9.85214 12.745L8 16.5L5.5 20.5L5.52335 25.3528L1 26.8869L2.0214 32.9751H6.83658L8.00389 35.2761L4.64786 39.1592L8.92802 43.953L12.9163 41.8437L15.2996 43.4736L14.3268 47.7881L20.2607 50.185L22.3521 46.2541L25.6109 46.5417L27.1187 51L33.1012 50.185V45.3912L35.9222 44.4803L39.3268 47.4525L44.4825 43.4736L41.9047 39.1592L44.4825 35.8035L46 31.5L46.5253 26.5513L51 24.9214L50.0759 18.9291H45.358L44.142 15.9089L47.2062 12.745L42.9747 7.90316L39.035 10.1083L36.8463 8.52637L37.7218 3.9722L31.7393 1.95877L29.4533 5.50623L26.2918 5.17066L24.6868 1L18.4611 1.95877V6.56088L16.0292 7.90316L12.3327 4.88303L7.80934 8.52637Z"
            fill="#164863"
            stroke="white"
            stroke-width="0.5"
          />
          <path
            d="M24.8655 21.1518L4.72414 20.7782L7.30532 15.8288H24.3259C24.3259 15.0817 26.6803 12 30.4572 12C33.4787 12 35.4113 14.3658 35.9999 15.5486H30.7515L28.9857 18.1634L30.7515 20.7782H35.9999C35.3459 21.8521 33.8417 24 30.4572 24C27.5927 24 25.5358 22.1012 24.8655 21.1518Z"
            fill="#F8EDE3"
          />
          <path
            d="M27.0408 30.9243L46.7851 31.3078L45 36.5L27.5759 36.3893C27.5759 37.1564 25.2412 40.3203 21.4961 40.3203C18.5 40.3203 16.5836 37.8914 16 36.677L21.2043 36.677L22.9552 33.9924L21.2043 31.3078L16 31.3078C16.6485 30.2053 18.1401 28.0001 21.4961 28.0001C24.3366 28.0001 26.3761 29.9496 27.0408 30.9243Z"
            fill="#F8EDE3"
          />
        </svg>

        <div class="flex flex-col">
          <p>
            <span
              class="self-center text-sm md:text-2xl font-semibold whitespace-nowrap text-white dark:text-white"
              >Easy</span
            >
            <span
              class="self-center text-sm md:text-2xl font-semibold whitespace-nowrap text-tertiary dark:text-white"
              >Fix</span
            >
          </p>

          <p
            class="self-center text-white text-sm md:text-2xl font-semibold whitespace-nowrap dark:text-white"
          >
            Appliance
          </p>
        </div>
      </a>
      <div class="flex md:order-2 space-x-1 md:space-x-3 md:space-x-0">
        <div class="space-x-1 md:space-x-4">
          <a
            href="/booking"
            class="flex space-x-2 items-center text-white bg-primary rounded-lg hover:text-white hover:bg-secondary transition-all duration-800 ease-out focus:ring-4 focus:outline-none font-medium text-sm px-2 md:px-6 py-2"
            >
            <span>Online Booking</span></a
          >
        </div>
        <div class="space-x-1 md:space-x-4">
          <a
            href="tel:4159414144"
            class="flex space-x-2 items-center text-white bg-primary rounded-lg hover:text-white hover:bg-secondary transition-all duration-800 ease-out focus:ring-4 focus:outline-none font-medium text-sm px-2 md:px-4 py-2"
            >
            <span>Request a Call</span></a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Reactive state to track scroll position
const isScrolled = ref(false);

// Function to handle scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // Change background when scrolled 50px
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>