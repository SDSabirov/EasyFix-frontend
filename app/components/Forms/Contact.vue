<template>
  <!-- drawer component -->
  <div
    id="drawer-contact"
    class="fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform translate-x-full bg-white border-l border-primary/10 shadow-2xl shadow-ink/10 w-80"
    tabindex="-1"
    aria-labelledby="drawer-contact-label"
  >
    <h5
      id="drawer-label"
      class="inline-flex items-center gap-2.5 mb-2 font-montserrat text-lg font-bold tracking-[-0.01em] text-primary"
    >
      <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
      Contact
      <em class="font-display font-semibold italic text-brass-dark">us</em>
    </h5>
    <span class="block h-px w-10 bg-brass mb-6" aria-hidden="true"></span>
    <button
      type="button"
      data-drawer-hide="drawer-contact"
      aria-controls="drawer-contact"
      class="text-gray-500 bg-white border border-primary/15 hover:border-brass hover:text-brass-dark rounded-full text-sm w-9 h-9 absolute top-4 end-4 inline-flex items-center justify-center transition-colors"
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
          class="block mb-2 font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500"
          >Name</label
        >
        <input
          type="text"
          id="name"
          v-model="formData.name"
          :class="{ 'border-red-500': errors.name }"
          class="bg-cream/50 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 transition-colors"
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
          class="block mb-2 font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          v-model="formData.email"
          :class="{ 'border-red-500': errors.email }"
          class="bg-cream/50 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 transition-colors"
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
          class="block mb-2 font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500"
          >Phone number</label
        >
        <input
          type="text"
          id="phone"
          v-model="formData.phone"
          :class="{ 'border-red-500': errors.phone }"
          class="bg-cream/50 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 transition-colors"
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
          class="block mb-2 font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500"
          >Subject</label
        >
        <input
          type="text"
          id="subject"
          v-model="formData.subject"
          :class="{ 'border-red-500': errors.subject }"
          class="bg-cream/50 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 transition-colors"
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
          class="block mb-2 font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500"
          >Your message</label
        >
        <textarea
          id="message"
          v-model="formData.message"
          :class="{ 'border-red-500': errors.message }"
          rows="4"
          class="block p-3.5 w-full text-sm text-primary bg-cream/50 rounded-2xl border border-primary/15 focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none transition-colors"
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
          v-model="formData.agreedToSms"
          class="w-5 h-5 text-brass border-primary/30 rounded focus:ring-brass mt-1"
        />
        <label for="sms-email-consent" class="ml-3 text-xs text-gray-600 leading-relaxed"
          >By clicking this box, you agree to receive SMS communications from Easy Fix Appliance you can reply STOP to opt-out at any time.
        </label>
      </div>
      <!-- Privacy policy acknowledgment -->
    <div class="mb-6">
      <label
        for="privacy-policy-consent"
        class="ml-3 text-xs text-gray-600 leading-relaxed"
      >
        By submitting this form, you agree to our
        <button
          data-modal-target="privacy-modal"
          data-modal-toggle="privacy-modal"
          class="font-semibold text-brass-dark hover:text-brass hover:underline transition-colors"
          type="button"
          aria-label="View Privacy Policy"
        >
          Privacy Policy
        </button>
      </label>
    </div>
      <button
        type="submit"
        id="submit-contact-form"
        :disabled="!isFormValid || isSubmitting"
        :class="[
          isSubmitted ? 'bg-green-500' : 'bg-ink hover:bg-brass',
          'text-white w-full rounded-full font-montserrat text-sm font-semibold uppercase tracking-[0.12em] px-5 py-3.5 mb-2 block transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2',
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
    <div class="border-t border-primary/10 pt-5">
      <p class="mb-2 text-sm text-gray-600">
        <a href="mailto:care@easyfixappliance.com" class="hover:text-brass-dark transition-colors"
          >care@easyfixappliance.com</a
        >
      </p>
      <p class="text-sm text-gray-600">
        <a href="tel:4159414144" class="hover:text-brass-dark transition-colors">(415) 941-4144</a>
      </p>
    </div>
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
  agreedToSms:false
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

