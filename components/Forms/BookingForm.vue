<template>
  <section class="bg-light max-h-fit">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-primary text-center">
        Request a booking
      </h2>

      <form action="#" >
        <div class="w-full items-center justify-center">
          <BookingSteps :currentStep="step" />
        </div>

        <div v-if="step == 1">
          <FormsStep1 />
          <div class="flex items-center w-full">
            <button
              @click="addStep"
              type="button"
              class="flex mx-auto items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-secondary"
            >
              Next
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div v-if="step == 2">
          <FormsStep2 />
          <div class="flex items-center w-full justify-between">
            <button
              @click="subtractStep"
              type="button"
              class="flex mx-auto items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-secondary"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              </span>
              Go back
            </button>
            <button
              @click="addStep"
              type="button"
              class="flex mx-auto items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-secondary"
            >
              Next
            </button>
          </div>
        </div>
        <div v-if="step == 3">
          <FormsStep3 />
          <div class="flex items-center w-full justify-between">
                <button
                  @click="subtractStep"
                  type="button"
                  class="flex mx-auto items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-secondary"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                      />
                    </svg>
                  </span>
                  Go back
                </button>
                <button
                  @click="addStep"
                  type="button"
                  class="flex mx-auto items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-secondary"
                >
                  Next
                </button>
        </div>
        </div>
      </form>
      <div v-if="step == 4">
        <div
          class="flex flex-col justify-center text-primary items-center space-y-4"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              class="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
              />
            </svg>
          </div>
          <h3
            class="md:text-[24px] text-primary text-center font-semibold text-[20px] animate-fadeDown"
          >
            Thank you ! 
          </h3>

          <p
            class="md:text-[22px] text-primary text-center font-semibold text-[18px] animate-fadeDown"
          >
          We’ll be in touch shortly to confirm your appointment and provide any additional details. If you have any questions, feel free to contact us.
          </p>

          <NuxtLink href="/">
            <button class="bg-primary px-8 py-4 text-light hover:bg-secondary">
              Go to Home page
            </button>
          </NuxtLink>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useFlowbite } from "~/composables/useFlowbite";

let step = ref(1);
let userMessage = ref("");
let currentSuggestions = ref([])
const suggestions = {
  cooling:['Is not maintaining the proper temperature',
  'Temperature is too cold',
  'Temperature is too hot',
  'Leaking water underneath',
  'Showing error code',
  'Making beeping noise',
  'Ice Maker Not Working',
  'Ice Build-up'],
  cooking:['Incorrect Temperature',
    'Not Heating Well Enough',
    'Gas Smell',
    'Keeps Sparking',
    'Door Problems',
    'Not Working',
    'Error Codes',
    'Oven Not Turning On'
  ]
}

function addStep() {
  step.value = step.value + 1;
}
function subtractStep() {
  step.value = step.value - 1;
}
const fillSuggestion = (suggestion) => {
  if (userMessage.value.length == 0) {
    userMessage.value = userMessage.value + suggestion;
  } else {
    userMessage.value = userMessage.value + "\n" + suggestion;
  }
};


onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});
</script>
