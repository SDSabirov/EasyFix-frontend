<template>
    <div>
        <div
      class="fixed bottom-40 right-0 z-40 transition-all duration-300"
      type="button" data-drawer-target="drawer-contact" data-drawer-show="drawer-contact" aria-controls="drawer-contact"
      data-drawer-placement="right"
      @mouseenter="showFullButton"
      @mouseleave="hideTextPart"
    >
      <button
        
        class="flex items-center bg-primary text-white font-medium py-3 pl-4 pr-6 rounded-l-full shadow-lg hover:bg-secondary transition duration-300"
        :class="{
            'translate-x-0 opacity-100': isTextVisible,
            '-translate-x-full opacity-0': !isTextVisible,
            'translate-x-[70%] ': isHidden,
          }"
      >
        <!-- Envelope SVG -->
        <div class="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26c.57.38 1.3.38 1.87 0L21 8M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
            />
          </svg>
        </div>
  
        <!-- Contact Text -->
        <span
          class="ml-3 overflow-hidden transition-transform duration-300"
          
        >
          Contact Us
        </span>
      </button>
    </div>
    <FormsContact/>
    </div>
    
  </template>
  
  <script setup>
import { ref, onMounted } from "vue";
  
  // State to control the button behavior
  const isTextVisible = ref(false);
  const isHidden = ref(false)
  const showFullButton = () => {
    isHidden.value = false; // Show the text part on hover
  };
  
  const hideTextPart = () => {
    isHidden.value = true; // Hide the text part on mouse leave
  };
  
  onMounted(() => {
    setTimeout(() => {
      isTextVisible.value = true; // Show the text after 2 seconds
      setTimeout(() => {
        isHidden.value = true; // Hide the text after 3 seconds
      }, 2000);
    }, 2000);
  });
  </script>
  
  <style scoped>
  /* Optional: Customize transitions */
  </style>