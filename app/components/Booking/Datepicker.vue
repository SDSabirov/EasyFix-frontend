<template>
  <div class="relative max-w-sm">
    <!-- Calendar Icon -->
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg class="w-4 h-4 text-brass" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
    </div>
    
    <!-- Date Input Field -->
    <input
      id="datepicker-format"
      v-model="localDate"
      type="text"
      class="bg-cream/50 rounded-2xl border border-primary/15 text-primary text-sm focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full ps-10 p-3.5 transition-colors"
      :class="{'border-red-500': dateError}"
      placeholder="Select date"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  modelValue: String,
  dateError: Boolean,
  minDate: {
    type: String,
    default: '06/04/2024'
  },
  maxDate: {
    type: String,
    default: '05/05/2025'
  }
});

const emit = defineEmits(['update:modelValue']);
const localDate = ref(props.modelValue || '');

// Sync localDate with modelValue
watch(() => props.modelValue, (newVal) => {
  localDate.value = newVal;
});

// Emit changes to modelValue
watch(localDate, (newVal) => {
  emit('update:modelValue', newVal);
});

// Initialize the datepicker
onMounted(() => {
  const datepickerElement = document.getElementById('datepicker-format');
  
  // Initialize Flowbite Datepicker if available
  if (window.Datepicker) {
    const datepickerInstance = new window.Datepicker(datepickerElement, {
      minDate: props.minDate,
      maxDate: props.maxDate,
      format: 'mm/dd/yyyy'
    });
    
    // Update localDate when date is picked
    datepickerElement.addEventListener('change', (event) => {
      localDate.value = event.target.value;
    });
  }
});
</script>
