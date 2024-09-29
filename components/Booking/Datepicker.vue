<template>
 <div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
  </div>
  <input id="datepicker-format" v-model="localDate" 
  datepicker datepicker-min-date="06/04/2024" 
  datepicker-max-date="05/05/2025" 
  type="text" 
  class="bg-gray-50  rounded-xl border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
  :class="{'border-red-500': props.dateError}"
  placeholder="Select date">
</div>

</template>

<script setup>
const props = defineProps({
  modelValue: String ,
  dateError : String
})

const emit = defineEmits(['update:modelValue'])
const localDate = ref(props.modelValue || '')

// Watch for changes in modelValue to sync with localDate
watch(() => props.modelValue, (newVal) => {
  localDate.value = newVal
})

function updateDate() {
  emit('update:modelValue', localDate.value)
}

onMounted(() => {
  useFlowbite(() => {
    const datepickerElement = document.getElementById('datepicker-format');
    const datepickerInstance = new Datepicker(datepickerElement, {
      minDate: props.minDate || '06/04/2024', // Default min date if not provided
      maxDate: props.maxDate || '05/05/2025', // Default max date if not provided
      format: 'mm/dd/yyyy',
    });

    // Listen to the change event from the datepicker to update localDate
    datepickerElement.addEventListener('changeDate', (event) => {
      localDate.value = event.target.value;
    });
  });
});

watch(localDate, updateDate);
</script>