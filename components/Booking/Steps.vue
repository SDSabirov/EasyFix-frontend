<template>
  <ol class="flex items-center w-full">
    <li class="relative w-full mb-6 group">
      <div class="flex items-center">
        <div
          class="z-10 flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full transition-all duration-1000 ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
          :class="{'bg-primary':currentStep >1}"
          >
          <svg
            class="w-2.5 h-2.5 text-blue-100 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </div>
        <div :class="{'bg-primary':currentStep >1}" class="flex w-full bg-gray-200 transition-all duration-1000 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-sm text-nowrap text-gray-900 dark:text-white">Details</h3>
      </div>
    </li>
    <li class="relative w-full mb-6 group">
      <div class="flex items-center">
        <div
          class="z-10 flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full transition-all duration-1000 ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
          :class="{'bg-primary':currentStep >2}"
          >
          <svg
            class="w-2.5 h-2.5 text-blue-100 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </div>
        <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 transition-all duration-1000" :class="{'bg-primary':currentStep >2}"></div>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 text-sm text-nowrap dark:text-white">Appliance</h3>
      </div>
    </li>
    <li class="relative w-full mb-6 group">
      <div class="flex items-center">
        <div
          class="z-10 flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full transition-all duration-1000 ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
          :class="{'bg-primary':currentStep >3}"
        >
          <svg
            class="w-2.5 h-2.5 text-blue-100 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </div>
        <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 transition-all duration-1000" :class="{'bg-primary':currentStep >3}" ></div>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 text-sm text-nowrap dark:text-white">Issue</h3>
      </div>
    </li>

    <li class="relative w-full mb-6 group ">
      <div class="flex items-center">
        
        <div
          class="z-10 flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full transition-all duration-1000 ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0"
          :class="{'bg-primary':currentStep >=4}"
        >
          <svg
            class="w-2.5 h-2.5 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </div>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 text-sm text-nowrap dark:text-white">Completed</h3>
      </div>
    </li>
  </ol>
</template>

<script setup>

const props = defineProps({
  currentStep: {
    type: Number,
    required: true
  }
});
</script>