<template>
    <div class="flex flex-col space-y-4 sm:gap-6">
            <div class="sm:col-span-2">
              <label
                for="description"
                class="block mb-2 text-lg font-medium text-primary"
                >What is the problem with your appliances?</label
              >
              <label for="common issues" class="block mb-2 text-sm text-gray"
                >Here are some common issues
              </label>
              <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-1 space-y-2 py-2 w-full flex-wrap"
              >
                
                <button
                  v-for="suggestion, index in suggestions.cooling" :key="index"
                  class="rounded-sm w-fit bg-secondary px-4 py-2 text-light text-sm text-left hover:bg-primary selected"
                  @click="fillSuggestion(suggestion)"
                  type="button"
                >
                  <p class="whitespace-nowrap overflow-hidden text-ellipsis">
                    {{suggestion}}
                  </p>
                </button>
              </div>
              <small class="text-gray-600 font-semibold">Please choose some of the above suggestions or type </small>
              <textarea
                id="description"
                rows="8"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Please provide a brief description of the issue"
                v-model="userMessage"
              ></textarea>
              
            </div>
          </div>
</template>


<script setup>
const props = defineProps({
  step: {
    type: Number,
    required: true
  }
});
function addStep() {
  step.value = step.value + 1;
}
function subtractStep() {
  step.value = step.value - 1;
}

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

const fillSuggestion = (suggestion) => {
  if (userMessage.value.length == 0) {
    userMessage.value = userMessage.value + suggestion;
  } else {
    userMessage.value = userMessage.value + "\n" + suggestion;
  }
};

</script>