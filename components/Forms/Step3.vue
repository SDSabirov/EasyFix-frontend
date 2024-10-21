<template>
  <div class="flex flex-col space-y-4 sm:gap-6 animate-fadeInLeft">
    <!-- Appliance issue description section -->
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
          v-for="(suggestion, index) in currentSuggestions"
          :key="index"
          class="rounded-xl w-fit bg-secondary px-4 py-2 text-light text-sm text-left hover:bg-primary selected animate-fadeDown"
          @click="fillSuggestion(suggestion)"
          type="button"
          aria-label="Common appliance issue"
        >
          <p class="whitespace-nowrap overflow-hidden text-ellipsis">
            {{ suggestion }}
          </p>
        </button>
      </div>
      <small
        class="text-gray-600 font-semibold"
        :class="{'text-red-500': localData.error}"
        >Please choose one of the suggestions or provide a brief description below</small
      >
      <textarea
        id="description"
        rows="8"
        class="block p-2.5 rounded-xl w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Please provide a brief description of the issue"
        v-model="userMessage"
        :class="{'border-red-500': localData.error}"
        @input="updateLocalDescription"
        aria-label="Appliance problem description"
      ></textarea>
    </div>
    <!-- Privacy policy acknowledgment -->
    <div class="flex items-start mt-2">
      <label
        for="privacy-policy-consent"
        class="ml-3 text-sm text-gray-700"
      >
        By submitting this form, you agree:
        <button
          data-modal-target="privacy-modal"
          data-modal-toggle="privacy-modal"
          class="hover:underline"
          type="button"
          aria-label="View Privacy Policy"
        >
          Privacy Policy
        </button>
        :
      </label>
    </div>
    <div class="flex items-start mt-2">
      <label
        for="privacy-policy-consent"
        class="ml-3 text-sm text-gray-700"
      > To Our
        <button
          data-modal-target="privacy-modal"
          data-modal-toggle="privacy-modal"
          class="hover:underline"
          type="button"
          aria-label="View Privacy Policy"
        >
          Privacy Policy
        </button>
        :
      </label>
    </div>
    <!-- Consent section for SMS and Email communication -->
    <div class="flex items-start">
      <label
        for="sms-email-consent"
        class="ml-3 text-sm text-gray-700"
      >
        Agree to receive communication from Easy Fix Appliance regarding your service request at phone number you provided. You may receive calls or text messages, and you can opt-out at any time, by replying STOP (
        <button
          data-modal-target="privacy-modal"
          data-modal-toggle="privacy-modal"
          class="hover:underline"
          type="button"
          aria-label="Open Privacy Policy"
        >
          Privacy Policy
        </button>
        )
      </label>
    </div>

    
  </div>
</template>


<script setup>
import { ref, watch, onMounted } from 'vue';

// Define emits function to emit data to the parent
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: Object, // Two-way binding via v-model
  type: String,       // Appliance type passed as a prop
});

// Create reactive local state for the data
const localData = ref({ ...props.modelValue });

let userMessage = ref(localData.value.description || "");
let currentSuggestions = ref([]);

// Suggestions based on the appliance type
const suggestions = {
  cooling: [
    'Not maintaining the proper temperature',
    'Temperature is too cold',
    'Temperature is too hot',
    'Leaking water underneath',
    'Showing error code',
    'Making a beeping noise',
    'Ice maker not working',
    'Ice build-up',
  ],
  cooking: [
    'Incorrect temperature',
    'Not heating well enough',
    'Smell of gas',
    'Keeps sparking',
    'Door problems',
    'Not working',
    'Showing error codes',
    'Oven not turning on',
  ],
};

// Determine which suggestions to show based on the type
const updateSuggestions = () => {
  if (
    props.type === 'Refrigerator' ||
    props.type === 'Built-In Refrigerator' ||
    props.type === 'Freezer' ||
    props.type === 'Wine Cooler'
  ) {
    currentSuggestions.value = suggestions.cooling;
  } else {
    currentSuggestions.value = suggestions.cooking;
  }
};

// Update the user message based on suggestion click
const fillSuggestion = (suggestion) => {
  if (userMessage.value.length === 0) {
    userMessage.value = suggestion;
  } else {
    userMessage.value += "\n" + suggestion;
  }
  updateLocalDescription(); // Update localData when a suggestion is added
};

// Sync local description with the parent component
const updateLocalDescription = () => {
  localData.value.description = userMessage.value;
  emitUpdate();
};

// Emit the updated data back to the parent component
const emitUpdate = () => {
  emit('update:modelValue', localData.value); // Sync changes with parent using v-model
};

// Watch the type prop and update suggestions when it changes
watch(() => props.type, updateSuggestions);

// On component mount, set initial suggestions
onMounted(() => {
  updateSuggestions();
  useFlowbite(() => {
    initModals();
    })
});
</script>