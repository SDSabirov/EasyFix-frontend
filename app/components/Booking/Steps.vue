<template>
  <ol class="flex items-center w-full">
    <li class="relative w-full mb-6 group">
      <div class="flex items-center">
        <div
          class="z-10 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-500 ring-0 ring-white sm:ring-8 shrink-0"
          :class="currentStep > 1 ? 'bg-brass' : currentStep === 1 ? 'bg-ink' : 'bg-white border border-primary/20'"
        >
          <svg
            v-if="currentStep > 1"
            class="w-2.5 h-2.5 text-white"
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
          <span
            v-else
            class="w-1.5 h-1.5 rotate-45"
            :class="currentStep === 1 ? 'bg-brass-light' : 'bg-primary/30'"
            aria-hidden="true"
          ></span>
        </div>
        <div
          class="flex w-full h-px transition-all duration-500"
          :class="currentStep > 1 ? 'bg-brass' : 'bg-primary/10'"
        ></div>
      </div>
      <div class="mt-3">
        <h3
          class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-nowrap"
          :class="currentStep >= 1 ? 'text-primary' : 'text-gray-400'"
        >Details</h3>
      </div>
    </li>
    <li class="relative w-full mb-6 group">
      <div class="flex items-center">
        <div
          class="z-10 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-500 ring-0 ring-white sm:ring-8 shrink-0"
          :class="currentStep > 2 ? 'bg-brass' : currentStep === 2 ? 'bg-ink' : 'bg-white border border-primary/20'"
        >
          <svg
            v-if="currentStep > 2"
            class="w-2.5 h-2.5 text-white"
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
          <span
            v-else
            class="w-1.5 h-1.5 rotate-45"
            :class="currentStep === 2 ? 'bg-brass-light' : 'bg-primary/30'"
            aria-hidden="true"
          ></span>
        </div>
        <div
          class="flex w-full h-px transition-all duration-500"
          :class="currentStep > 2 ? 'bg-brass' : 'bg-primary/10'"
        ></div>
      </div>
      <div class="mt-3">
        <h3
          class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-nowrap"
          :class="currentStep >= 2 ? 'text-primary' : 'text-gray-400'"
        >Appliance</h3>
      </div>
    </li>
    <li class="relative w-full mb-6 group">
      <div class="flex items-center">
        <div
          class="z-10 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-500 ring-0 ring-white sm:ring-8 shrink-0"
          :class="currentStep > 3 ? 'bg-brass' : currentStep === 3 ? 'bg-ink' : 'bg-white border border-primary/20'"
        >
          <svg
            v-if="currentStep > 3"
            class="w-2.5 h-2.5 text-white"
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
          <span
            v-else
            class="w-1.5 h-1.5 rotate-45"
            :class="currentStep === 3 ? 'bg-brass-light' : 'bg-primary/30'"
            aria-hidden="true"
          ></span>
        </div>
      </div>
      <div class="mt-3">
        <h3
          class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-nowrap"
          :class="currentStep >= 3 ? 'text-primary' : 'text-gray-400'"
        >Issue</h3>
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
