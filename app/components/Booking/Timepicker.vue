<template>
  <div class="relative flex">
    <!-- Custom Time Picker Dropdown -->
    <input
      v-model="localTime"
      type="text"
      id="time"
      placeholder="Select time"
      @focus="showDropdown = true"
      @blur="hideDropdown"
      :class="{
        'border-red-500': timeError
      }"
      class="rounded-2xl bg-cream/50 border text-primary leading-none focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block flex-1 w-full text-sm border-primary/15 p-3.5 transition-colors"
      required
      readonly
    />

    <!-- Icon -->
    <span
      class="inline-flex items-center rounded-2xl px-3 text-sm text-primary bg-cream border rounded-s-0 border-s-0 border-primary/15"
    >
      <svg
        class="w-4 h-4 text-brass"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
          clip-rule="evenodd"
        />
      </svg>
    </span>

    <!-- Dropdown List -->
    <ul
      v-show="showDropdown"
      class="absolute z-10 w-full bg-white border border-primary/15 rounded-2xl mt-1 shadow-lg shadow-ink/10 max-h-48 overflow-y-auto"
    >
      <li
        v-for="time in timeOptions"
        :key="time"
        @mousedown.prevent="selectTime(time)"
        class="px-4 py-2 text-sm text-primary cursor-pointer transition-colors hover:bg-ink hover:text-white"
      >
        {{ time }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: String,
  timeError: Boolean,
});

const emit = defineEmits(['update:modelValue']);
const localTime = ref(props.modelValue || '');
const showDropdown = ref(false);

// Time Options for the Dropdown
const timeOptions = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00'
];

// Sync localTime with modelValue
watch(() => props.modelValue, (newVal) => {
  localTime.value = newVal;
});

// Emit changes to modelValue when localTime changes
watch(localTime, (newVal) => {
  emit('update:modelValue', newVal);
});

// Select time from the dropdown
function selectTime(time) {
  localTime.value = time;
  showDropdown.value = false;
}

// Hide dropdown when input loses focus
function hideDropdown() {
  setTimeout(() => {
    showDropdown.value = false;
  }, 100);
}
</script>
