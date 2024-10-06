<template>
  <section class="bg-light max-h-fit md:px-32">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-primary text-center">
        Request a Booking
      </h2>

      <form @submit.prevent="submitForm">
        <div class="w-full items-center justify-center">
          <BookingSteps :currentStep="step" />
        </div>

        <div v-if="step == 1">
          <FormsStep1 v-model="PersonalData" :Errors="PersonalErrors" />
        </div>

        <div v-if="step == 2">
          <FormsStep2 v-model="ApplianceData" :Errors="ApplianceErrors" />
        </div>
        <div v-if="step == 3">
          <FormsStep3 v-model="IssueData" :type="ApplianceData.type" />
        </div>
        <div class="flex items-center w-full justify-between">
          <button
            v-if="step > 1 && step < 4"
            @click="subtractStep"
            type="button"
            class="flex mx-auto rounded-xl items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-secondary"
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
            v-if="step < 3"
            @click="addStep"
            type="button"
            class="flex mx-auto rounded-xl items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-secondary"
          >
            Next
          </button>
          <button
            v-if="step == 3"
            @click="submitBooking"
            type="button"
            :disabled="loading"
            class="flex mx-auto rounded-xl items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-secondary"
          >
            <span v-if="loading">Loading...</span>
            <!-- Show loading text -->
            <span v-else>Submit</span>
            <!-- Show normal text -->
          </button>
        </div>
      </form>
      <div v-if="step == 4">
        <div
          class="flex flex-col justify-center text-primary items-center space-y-3"
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
            Thank you!
          </h3>

          <p
            class="md:text-[22px] text-primary text-center text-[18px] animate-fadeDown"
          >
            We’ll be in touch shortly to confirm your appointment and provide
            any additional details. If you have any questions, feel free to
            contact us.
          </p>
          <p
            class="md:text-[22px] text-primary text-center text-[18px] animate-fadeDown"
          >
            <strong>Please note</strong>, This form does not confirm your
            appointment
          </p>

          <NuxtLink href="/">
            <button
              class="bg-primary rounded-xl px-8 py-4 text-light hover:bg-secondary mt-4"
            >
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
const loading = ref(false);
const PersonalData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
});
const PersonalErrors = ref({
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  address: null,
  zip: null,
});

const ApplianceData = ref({
  type: "",
  brand: "",
  age: "",
  date: "",
  time: "",
});

const ApplianceErrors = ref({
  type: null,
  brand: null,
  age: null,
  date: null,
  time: null,
});

const IssueData = ref({
  description: "",
  error: null,
});

let data = ref({});
function subtractStep() {
  step.value = step.value - 1;
}
function validateStep() {
  if (step.value === 1) {
    PersonalErrors.value.firstName = PersonalData.value.firstName
      ? null
      : "First Name is required";
    PersonalErrors.value.lastName = PersonalData.value.email
      ? null
      : "Last Name is required";
    PersonalErrors.value.email = PersonalData.value.email
      ? null
      : "Email is required";
    PersonalErrors.value.phone = PersonalData.value.email
      ? null
      : "Phone number is required";
    PersonalErrors.value.address = PersonalData.value.email
      ? null
      : "Address is required";
    PersonalErrors.value.zip = PersonalData.value.email
      ? null
      : "Zip code is required";
    // Add more validation checks as needed
  }

  if (step.value === 2) {
    ApplianceErrors.value.type = ApplianceData.value.type
      ? null
      : "Appliance type is required";
    ApplianceErrors.value.brand = ApplianceData.value.brand
      ? null
      : "Appliance brand is required";
    ApplianceErrors.value.age = ApplianceData.value.age
      ? null
      : "Appliance age is required";
    ApplianceErrors.value.date = ApplianceData.value.date
      ? null
      : "Date field is required";
    ApplianceErrors.value.time = ApplianceData.value.time
      ? null
      : "Time field is required";
    // Add more validation checks as needed
  }

  if (step.value === 3) {
    IssueData.value.error = IssueData.value.description
      ? null
      : "Please describe the issue";
  }

  // Return true if no errors, otherwise false
  return (
    !Object.values(PersonalErrors.value).some((error) => error) &&
    !Object.values(ApplianceErrors.value).some((error) => error) &&
    !IssueData.value.error
  );
}

function addStep() {
  if (validateStep()) {
    step.value = step.value + 1;
  }
}
async function submitBooking() {
  const dataToSubmit = {
    personal: PersonalData.value,
    appliance: ApplianceData.value,
    issue: IssueData.value.description,
  };

  loading.value = true;  // Start loading

  try {
    const response = await fetch('https:/api.easyfixappliance.com/api/booking-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': 'csrftoken'
      },
      body: JSON.stringify(dataToSubmit),
    });

    if (response.status == 200) {
      step.value = step.value + 1; // Go to Thank You step
    } else {
      // Handle errors
      alert('Failed to submit booking. Please try again.');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while submitting the booking.');
  } finally {
    loading.value = false;  
  }
}

onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});
</script>
