<template>
  <div>
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 animate-fadeInLeft">
      <!-- First Name -->
      <div class="w-full">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-primary"
          :class="{ 'text-red-500': Errors.firstName }"
        >
          First Name
        </label>
        <small class="text-red-500" v-if="Errors.firstName"
          >Required field!</small
        >
        <input
          v-model="localData.firstName"
          type="text"
          id="name"
          class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Alex"
          :class="{ 'border-red-500': Errors.firstName }"
        />
      </div>

      <!-- Last Name -->
      <div class="w-full">
        <label
          for="last-name"
          class="block mb-2 text-sm font-medium text-primary"
          :class="{ 'text-red-500': Errors.lastName }"
        >
          Last Name
        </label>
        <small class="text-red-500" v-if="Errors.lastName"
          >Required field!</small
        >
        <input
          v-model="localData.lastName"
          type="text"
          id="last-name"
          class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Smith"
          :class="{ 'border-red-500': Errors.lastName }"
        />
      </div>

      <!-- Email -->
      <div class="w-full">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-primary"
          :class="{ 'text-red-500': Errors.email }"
        >
          Email
        </label>
        <small class="text-red-500" v-if="Errors.email">Required field!</small>
        <input
          v-model="localData.email"
          type="email"
          id="email"
          class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="example@mail.com"
          :class="{ 'border-red-500': Errors.email }"
        />
      </div>

      <!-- Address -->
      <div class="w-full">
        <label
          for="address"
          class="block mb-2 text-sm font-medium text-primary"
          :class="{ 'text-red-500': Errors.address }"
        >
          Address
        </label>
        <small class="text-red-500" v-if="Errors.address"
          >Required field!</small
        >
        <input
          v-model="localData.address"
          type="text"
          id="address"
          class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="123 Main St"
          :class="{ 'border-red-500': Errors.address }"
        />
      </div>

      <!-- Zip/Postal Code -->
      <div class="w-full">
        <label
          for="zip"
          class="block mb-2 text-sm font-medium text-primary"
          :class="{ 'text-red-500': Errors.zip }"
        >
          Zip/Postal Code
        </label>
        <small class="text-red-500" v-if="Errors.zip">Required field!</small>
        <input
          v-model="localData.zip"
          type="text"
          id="zip"
          class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="12345"
          :class="{ 'border-red-500': Errors.zip }"
        />
      </div>
      <!-- Phone -->
      <div class="w-full">
        <label
          for="phone-input"
          class="block mb-2 text-sm font-medium text-primary"
          :class="{ 'text-red-500': Errors.phone }"
        >
          Phone Number
        </label>
        <small class="text-red-500" v-if="Errors.phone">Required field!</small>
        <input
          v-model="localData.phone"
          type="text"
          id="phone-input"
          class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="123-456-7890"
          :class="{ 'border-red-500': Errors.phone }"
        />
        <div class="flex items-center mt-2">
          <!-- Consent section for SMS and Email communication -->
          <input
            type="checkbox"
            name=""
            id=""
            class="rounded"
            v-model="localData.smsConsent"
          />
          <label
            for="privacy-policy-consent"
            class="ml-3 text-sm text-gray-700"
          >
            By clicking this box, you agree to receive SMS communications from
            Easy Fix Appliance you can reply STOP to opt-out at any time.
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: Object, // The data will be passed as modelValue
  Errors: Object, // The error messages for validation
});

// Create reactive local state for the data
const localData = defineModel();

const emit = defineEmits(["update:modelValue"]);

watch(localData.value, (newValue) => {
  emit("update:modelValue", newValue);
});

watch(
  () => props.modelValue,
  (newValue) => {
    localData.value = { ...newValue };
  }
);
</script>
