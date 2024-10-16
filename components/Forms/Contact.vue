<template>
  <!-- drawer component -->
  <div
    id="drawer-contact"
    class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-secondary w-80 dark:bg-gray-800"
    tabindex="-1"
    aria-labelledby="drawer-contact-label"
  >
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-6 text-base font-semibold text-light uppercase dark:text-gray-400"
    >
      <svg
        class="w-4 h-4 me-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 16"
      >
        <path
          d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
        />
        <path
          d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
        />
      </svg>
      Contact us
    </h5>
    <button
      type="button"
      data-drawer-hide="drawer-contact"
      aria-controls="drawer-contact"
      class="text-light bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <!-- Form -->
    <form @submit.prevent="submitForm" class="mb-6">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-light dark:text-white"
          >Name</label
        >
        <input
          type="text"
          id="name"
          v-model="formData.name"
          :class="{ 'border-red-500': errors.name }"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John Doe"
          required
        />
        <span v-if="errors.name" class="text-sm text-red-500">{{
          errors.name
        }}</span>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-light dark:text-white"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          v-model="formData.email"
          :class="{ 'border-red-500': errors.email }"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
        <span v-if="errors.email" class="text-sm text-red-500">{{
          errors.email
        }}</span>
      </div>
      <div class="mb-6">
        <label
          for="phone"
          class="block mb-2 text-sm font-medium text-light dark:text-white"
          >Phone number</label
        >
        <input
          type="text"
          id="phone"
          v-model="formData.phone"
          :class="{ 'border-red-500': errors.phone }"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="+123456789"
          required
        />
        <span v-if="errors.phone" class="text-sm text-red-500">{{
          errors.phone
        }}</span>
      </div>
      <div class="mb-6">
        <label
          for="subject"
          class="block mb-2 text-sm font-medium text-light dark:text-white"
          >Subject</label
        >
        <input
          type="text"
          id="subject"
          v-model="formData.subject"
          :class="{ 'border-red-500': errors.subject }"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Let us know how we can help you"
          required
        />
        <span v-if="errors.subject" class="text-sm text-red-500">{{
          errors.subject
        }}</span>
      </div>
      
      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-light dark:text-white"
          >Your message</label
        >
        <textarea
          id="message"
          v-model="formData.message"
          :class="{ 'border-red-500': errors.message }"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
        <span v-if="errors.message" class="text-sm text-red-500">{{
          errors.message
        }}</span>
      </div>
      <div class="mb-6">
        <input
          id="sms-email-consent"
          type="checkbox"
          v-model="formData.agreedToSmsEmail"
          class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary-500 mt-1"
        />
        <label for="sms-email-consent" class="ml-3 text-sm text-white"
          >I agree to receive SMS confirmations and emails related to my service
          request.
        </label>
      </div>
      <button
        type="submit"
        :disabled="!isFormValid || isSubmitting"
        :class="[
          isSubmitted ? 'bg-green-500' : 'bg-primary',
          'text-white w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-blue-800 block',
        ]"
      >
        {{
          isSubmitting
            ? "Sending..."
            : isSubmitted
            ? "Submitted!"
            : "Send message"
        }}
      </button>
    </form>
    <p class="mb-2 text-sm text-light dark:text-gray-400">
      <a href="mailto:care@easyfixappliance.com" class="hover:underline"
        >care@easyfixappliance.com</a
      >
    </p>
    <p class="text-sm text-light dark:text-gray-400">
      <a href="tel:+14159414144" class="hover:underline">+1 (415) 941-4144</a>
    </p>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";

const formData = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  agreedToSmsEmail:false
});

const errors = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

const validateForm = () => {
  let valid = true;

  if (!formData.name) {
    errors.name = "Name is required";
    valid = false;
  } else {
    errors.name = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailPattern.test(formData.email)) {
    errors.email = "Please enter a valid email";
    valid = false;
  } else {
    errors.email = "";
  }

  if (!formData.phone || isNaN(formData.phone)) {
    errors.phone = "Please enter a valid phone number";
    valid = false;
  } else {
    errors.phone = "";
  }

  if (!formData.subject) {
    errors.subject = "Subject is required";
    valid = false;
  } else {
    errors.subject = "";
  }

  if (!formData.message) {
    errors.message = "Message is required";
    valid = false;
  } else {
    errors.message = "";
  }

  return valid;
};

const isFormValid = computed(() => validateForm());

const submitForm = async () => {
  if (!isFormValid.value) {
    return;
  }
  isSubmitting.value = true;
  const dataToSubmit = formData;
  try {
    // Simulating API call or form submission
    const response = await fetch(
      "https://api.easyfixappliance.com/api/contact-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": "csrftoken",
        },
        body: JSON.stringify(dataToSubmit),
      }
    );

    isSubmitted.value = true;
    resetForm();
  } catch (error) {
    console.error("Form submission error:", error);
  } finally {
    isSubmitting.value = false;
  }
};

const resetForm = () => {
  formData.name = "";
  formData.email = "";
  formData.phone = "";
  formData.subject = "";
  formData.message = "";
};
</script>

<style scoped>
.bg-primary {
  background-color: #007bff;
}

.bg-secondary {
  background-color: #343a40;
}

.bg-green-500 {
  background-color: #38a169;
}

.text-light {
  color: #f8f9fa;
}
</style>
