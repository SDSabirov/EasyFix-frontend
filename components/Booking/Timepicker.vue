<template>
    <div class="flex">
        <input v-model="localTime" type="time" id="time" :class="{'border-red-500': props.timeError}"
        class="rounded-xl  bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="08:00" max="20:00"  required>
        <span class="inline-flex items-center rounded-xl px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 border-s-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg class="w-4 h-4 text-gray-500  dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
            </svg>
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: String ,
    timeError : String
})

const emit = defineEmits(['update:modelValue'])
const localTime = ref(props.modelValue || '')

// Watch for changes in modelValue to sync with localTime
watch(() => props.modelValue, (newVal) => {
  localTime.value = newVal
})

function updateTime() {
  emit('update:modelValue', localTime.value)
}

onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});
// Update when localTime changes
watch(localTime, updateTime);
</script>