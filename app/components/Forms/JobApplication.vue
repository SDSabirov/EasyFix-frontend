<template>
  <form @submit.prevent="submitForm" class="space-y-6" novalidate>
    <!-- Personal Info -->
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <div>
        <label for="fullName" class="block mb-2 text-sm font-medium text-gray-900">
          Full Name <span class="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          v-model="formData.fullName"
          :class="{ 'border-red-500': errors.fullName }"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="John Doe"
        />
        <span v-if="errors.fullName" class="text-sm text-red-500">{{ errors.fullName }}</span>
      </div>

      <div>
        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">
          Phone <span class="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          v-model="formData.phone"
          :class="{ 'border-red-500': errors.phone }"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="(415) 555-0123"
        />
        <span v-if="errors.phone" class="text-sm text-red-500">{{ errors.phone }}</span>
      </div>
    </div>

    <div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
        Email <span class="text-red-500">*</span>
      </label>
      <input
        id="email"
        type="email"
        v-model="formData.email"
        :class="{ 'border-red-500': errors.email }"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="name@example.com"
      />
      <span v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</span>
    </div>

    <!-- Years of Experience -->
    <div>
      <label for="yearsExperience" class="block mb-2 text-sm font-medium text-gray-900">
        Years of Experience <span class="text-red-500">*</span>
      </label>
      <select
        id="yearsExperience"
        v-model="formData.yearsExperience"
        :class="{ 'border-red-500': errors.yearsExperience }"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
      >
        <option value="">Select experience level</option>
        <option value="None">None</option>
        <option value="1-2 years">1–2 years</option>
        <option value="3-5 years">3–5 years</option>
        <option value="6-10 years">6–10 years</option>
        <option value="10+ years">10+ years</option>
      </select>
      <span v-if="errors.yearsExperience" class="text-sm text-red-500">{{ errors.yearsExperience }}</span>
    </div>

    <!-- Schedule Availability -->
    <div>
      <span class="block mb-2 text-sm font-medium text-gray-900">
        Schedule Availability <span class="text-red-500">*</span>
      </span>
      <div class="space-y-2">
        <label v-for="option in scheduleOptions" :key="option" class="flex items-center cursor-pointer">
          <input
            type="radio"
            :value="option"
            v-model="formData.scheduleAvailability"
            class="w-5 h-5 text-primary border-gray-300 focus:ring-primary-500"
          />
          <span class="ml-3 text-sm text-gray-700">{{ option }}</span>
        </label>
      </div>
      <input
        v-if="formData.scheduleAvailability === 'Other'"
        v-model="formData.scheduleAvailabilityOther"
        type="text"
        :class="{ 'border-red-500': errors.scheduleAvailabilityOther }"
        class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Please specify"
      />
      <span v-if="errors.scheduleAvailability" class="text-sm text-red-500 block mt-1">{{ errors.scheduleAvailability }}</span>
      <span v-if="errors.scheduleAvailabilityOther" class="text-sm text-red-500 block mt-1">{{ errors.scheduleAvailabilityOther }}</span>
    </div>

    <!-- Appliance Types Serviced -->
    <div>
      <span class="block mb-2 text-sm font-medium text-gray-900">
        Appliance Types Serviced <span class="text-red-500">*</span>
      </span>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <label v-for="type in applianceTypeOptions" :key="type" class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            :value="type"
            v-model="formData.applianceTypes"
            class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary-500"
          />
          <span class="ml-3 text-sm text-gray-700">{{ type }}</span>
        </label>
      </div>
      <input
        v-if="formData.applianceTypes.includes('Other')"
        v-model="formData.applianceTypesOther"
        type="text"
        :class="{ 'border-red-500': errors.applianceTypesOther }"
        class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Please specify other appliance types"
      />
      <span v-if="errors.applianceTypes" class="text-sm text-red-500 block mt-1">{{ errors.applianceTypes }}</span>
      <span v-if="errors.applianceTypesOther" class="text-sm text-red-500 block mt-1">{{ errors.applianceTypesOther }}</span>
    </div>

    <!-- Preferred Work Areas -->
    <div>
      <span class="block mb-2 text-sm font-medium text-gray-900">
        Preferred Work Areas <span class="text-red-500">*</span>
      </span>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <label v-for="area in workAreaOptions" :key="area" class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            :value="area"
            v-model="formData.preferredWorkAreas"
            class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary-500"
          />
          <span class="ml-3 text-sm text-gray-700">{{ area }}</span>
        </label>
      </div>
      <input
        v-if="formData.preferredWorkAreas.includes('Other')"
        v-model="formData.preferredWorkAreasOther"
        type="text"
        :class="{ 'border-red-500': errors.preferredWorkAreasOther }"
        class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Please specify other work area(s)"
      />
      <span v-if="errors.preferredWorkAreas" class="text-sm text-red-500 block mt-1">{{ errors.preferredWorkAreas }}</span>
      <span v-if="errors.preferredWorkAreasOther" class="text-sm text-red-500 block mt-1">{{ errors.preferredWorkAreasOther }}</span>
    </div>

    <!-- Has LLC or Corp -->
    <div>
      <span class="block mb-2 text-sm font-medium text-gray-900">
        Has LLC or Corp? <span class="text-red-500">*</span>
      </span>
      <div class="space-y-2">
        <label v-for="option in llcOptions" :key="option" class="flex items-center cursor-pointer">
          <input
            type="radio"
            :value="option"
            v-model="formData.hasLLC"
            class="w-5 h-5 text-primary border-gray-300 focus:ring-primary-500"
          />
          <span class="ml-3 text-sm text-gray-700">{{ option }}</span>
        </label>
      </div>
      <span v-if="errors.hasLLC" class="text-sm text-red-500 block mt-1">{{ errors.hasLLC }}</span>
    </div>

    <!-- Has License & Insurance -->
    <div>
      <span class="block mb-2 text-sm font-medium text-gray-900">
        Has appliance repair license &amp; insurance? <span class="text-red-500">*</span>
      </span>
      <div class="space-y-2">
        <label v-for="option in llcOptions" :key="option" class="flex items-center cursor-pointer">
          <input
            type="radio"
            :value="option"
            v-model="formData.hasLicenseInsurance"
            class="w-5 h-5 text-primary border-gray-300 focus:ring-primary-500"
          />
          <span class="ml-3 text-sm text-gray-700">{{ option }}</span>
        </label>
      </div>
      <span v-if="errors.hasLicenseInsurance" class="text-sm text-red-500 block mt-1">{{ errors.hasLicenseInsurance }}</span>
    </div>

    <!-- Reliable Vehicle -->
    <div>
      <span class="block mb-2 text-sm font-medium text-gray-900">
        Has reliable, insured vehicle? <span class="text-red-500">*</span>
      </span>
      <div class="flex gap-6">
        <label v-for="option in ['Yes', 'No']" :key="option" class="flex items-center cursor-pointer">
          <input
            type="radio"
            :value="option"
            v-model="formData.hasReliableVehicle"
            class="w-5 h-5 text-primary border-gray-300 focus:ring-primary-500"
          />
          <span class="ml-3 text-sm text-gray-700">{{ option }}</span>
        </label>
      </div>
      <span v-if="errors.hasReliableVehicle" class="text-sm text-red-500 block mt-1">{{ errors.hasReliableVehicle }}</span>
    </div>

    <!-- Subcontractor or Sales Experience -->
    <div>
      <span class="block mb-2 text-sm font-medium text-gray-900">
        Subcontractor or sales experience? <span class="text-red-500">*</span>
      </span>
      <div class="space-y-2">
        <label v-for="option in subcontractorSalesOptions" :key="option" class="flex items-center cursor-pointer">
          <input
            type="radio"
            :value="option"
            v-model="formData.subcontractorSalesExperience"
            class="w-5 h-5 text-primary border-gray-300 focus:ring-primary-500"
          />
          <span class="ml-3 text-sm text-gray-700">{{ option }}</span>
        </label>
      </div>
      <input
        v-if="formData.subcontractorSalesExperience === 'Other'"
        v-model="formData.subcontractorSalesExperienceOther"
        type="text"
        :class="{ 'border-red-500': errors.subcontractorSalesExperienceOther }"
        class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Please specify"
      />
      <span v-if="errors.subcontractorSalesExperience" class="text-sm text-red-500 block mt-1">{{ errors.subcontractorSalesExperience }}</span>
      <span v-if="errors.subcontractorSalesExperienceOther" class="text-sm text-red-500 block mt-1">{{ errors.subcontractorSalesExperienceOther }}</span>
    </div>

    <!-- Desired Start Date -->
    <div>
      <label for="desiredStartDate" class="block mb-2 text-sm font-medium text-gray-900">
        Desired Start Date <span class="text-red-500">*</span>
      </label>
      <input
        id="desiredStartDate"
        type="date"
        v-model="formData.desiredStartDate"
        :class="{ 'border-red-500': errors.desiredStartDate }"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <span v-if="errors.desiredStartDate" class="text-sm text-red-500">{{ errors.desiredStartDate }}</span>
    </div>

    <!-- Referral Source -->
    <div>
      <label for="referralSource" class="block mb-2 text-sm font-medium text-gray-900">
        How did you hear about us?
      </label>
      <input
        id="referralSource"
        type="text"
        v-model="formData.referralSource"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Google, friend, social media, etc."
      />
    </div>

    <!-- Additional Notes -->
    <div>
      <label for="additionalNotes" class="block mb-2 text-sm font-medium text-gray-900">
        Anything else we should know about you?
      </label>
      <textarea
        id="additionalNotes"
        v-model="formData.additionalNotes"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Certifications, specialties, brands you specialize in, etc."
      ></textarea>
    </div>

    <!-- SMS Consent -->
    <div class="flex items-start">
      <input
        id="sms-consent"
        type="checkbox"
        v-model="formData.agreedToSms"
        class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary-500 mt-1 flex-shrink-0"
      />
      <label for="sms-consent" class="ml-3 text-sm text-gray-700">
        By clicking this box, you agree to receive SMS communications from Easy Fix Appliance — you can reply STOP to opt-out at any time.
      </label>
    </div>

    <!-- Privacy Policy Acknowledgment -->
    <div>
      <p class="text-sm text-gray-600">
        By submitting this form, you agree to our
        <button
          data-modal-target="privacy-modal"
          data-modal-toggle="privacy-modal"
          class="text-primary hover:underline"
          type="button"
          aria-label="View Privacy Policy"
        >
          Privacy Policy
        </button>.
      </p>
    </div>

    <!-- Submission Error -->
    <div v-if="submissionError" class="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
      {{ submissionError }}
    </div>

    <!-- Submit -->
    <button
      type="submit"
      :disabled="isSubmitting"
      :class="[
        isSubmitted ? 'bg-green-500' : 'bg-primary hover:bg-primary/90',
        'text-white w-full focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-base px-5 py-3 transition-colors disabled:opacity-60 disabled:cursor-not-allowed'
      ]"
    >
      {{ isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted!' : 'Submit Application' }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';

const scheduleOptions = ['Part-time', 'Full-time', 'Other'];

const applianceTypeOptions = [
  'Refrigerator',
  'Built-In Refrigerator',
  'Wine Cooler',
  'Freezer',
  'Stove',
  'Range',
  'Cooktop',
  'Oven',
  'Washer',
  'Dryer',
  'Dishwasher',
  'Microwave',
  'Other',
];

const workAreaOptions = [
  'San Francisco',
  'Peninsula (San Mateo)',
  'San Jose',
  'Other',
];

const llcOptions = ['Yes', 'No', 'No — would like setup help'];

const subcontractorSalesOptions = [
  'Yes — Subcontractor (NOT W2)',
  'Yes — Sales',
  'Both',
  'None',
  'Other',
];

const formData = reactive({
  fullName: '',
  phone: '',
  email: '',
  yearsExperience: '',
  scheduleAvailability: '',
  scheduleAvailabilityOther: '',
  applianceTypes: [],
  applianceTypesOther: '',
  preferredWorkAreas: [],
  preferredWorkAreasOther: '',
  hasLLC: '',
  hasLicenseInsurance: '',
  hasReliableVehicle: '',
  subcontractorSalesExperience: '',
  subcontractorSalesExperienceOther: '',
  desiredStartDate: '',
  referralSource: '',
  additionalNotes: '',
  agreedToSms: false,
});

const errors = reactive({
  fullName: '',
  phone: '',
  email: '',
  yearsExperience: '',
  scheduleAvailability: '',
  scheduleAvailabilityOther: '',
  applianceTypes: '',
  applianceTypesOther: '',
  preferredWorkAreas: '',
  preferredWorkAreasOther: '',
  hasLLC: '',
  hasLicenseInsurance: '',
  hasReliableVehicle: '',
  subcontractorSalesExperience: '',
  subcontractorSalesExperienceOther: '',
  desiredStartDate: '',
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const submissionError = ref('');

const validateForm = () => {
  let valid = true;

  if (!formData.fullName.trim()) {
    errors.fullName = 'Full name is required';
    valid = false;
  } else {
    errors.fullName = '';
  }

  const phoneDigits = formData.phone.replace(/\D/g, '');
  if (!formData.phone.trim() || phoneDigits.length < 10) {
    errors.phone = 'Please enter a valid phone number';
    valid = false;
  } else {
    errors.phone = '';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailPattern.test(formData.email)) {
    errors.email = 'Please enter a valid email';
    valid = false;
  } else {
    errors.email = '';
  }

  if (!formData.yearsExperience) {
    errors.yearsExperience = 'Please select your experience level';
    valid = false;
  } else {
    errors.yearsExperience = '';
  }

  if (!formData.scheduleAvailability) {
    errors.scheduleAvailability = 'Please select your availability';
    valid = false;
  } else {
    errors.scheduleAvailability = '';
  }

  if (formData.scheduleAvailability === 'Other' && !formData.scheduleAvailabilityOther.trim()) {
    errors.scheduleAvailabilityOther = 'Please specify your availability';
    valid = false;
  } else {
    errors.scheduleAvailabilityOther = '';
  }

  if (formData.applianceTypes.length === 0) {
    errors.applianceTypes = 'Please select at least one appliance type';
    valid = false;
  } else {
    errors.applianceTypes = '';
  }

  if (formData.applianceTypes.includes('Other') && !formData.applianceTypesOther.trim()) {
    errors.applianceTypesOther = 'Please specify other appliance types';
    valid = false;
  } else {
    errors.applianceTypesOther = '';
  }

  if (formData.preferredWorkAreas.length === 0) {
    errors.preferredWorkAreas = 'Please select at least one work area';
    valid = false;
  } else {
    errors.preferredWorkAreas = '';
  }

  if (formData.preferredWorkAreas.includes('Other') && !formData.preferredWorkAreasOther.trim()) {
    errors.preferredWorkAreasOther = 'Please specify other work area(s)';
    valid = false;
  } else {
    errors.preferredWorkAreasOther = '';
  }

  if (!formData.hasLLC) {
    errors.hasLLC = 'Please select an option';
    valid = false;
  } else {
    errors.hasLLC = '';
  }

  if (!formData.hasLicenseInsurance) {
    errors.hasLicenseInsurance = 'Please select an option';
    valid = false;
  } else {
    errors.hasLicenseInsurance = '';
  }

  if (!formData.hasReliableVehicle) {
    errors.hasReliableVehicle = 'Please select Yes or No';
    valid = false;
  } else {
    errors.hasReliableVehicle = '';
  }

  if (!formData.subcontractorSalesExperience) {
    errors.subcontractorSalesExperience = 'Please select an option';
    valid = false;
  } else {
    errors.subcontractorSalesExperience = '';
  }

  if (
    formData.subcontractorSalesExperience === 'Other' &&
    !formData.subcontractorSalesExperienceOther.trim()
  ) {
    errors.subcontractorSalesExperienceOther = 'Please specify';
    valid = false;
  } else {
    errors.subcontractorSalesExperienceOther = '';
  }

  if (!formData.desiredStartDate) {
    errors.desiredStartDate = 'Please select a desired start date';
    valid = false;
  } else {
    errors.desiredStartDate = '';
  }

  return valid;
};

const submitForm = async () => {
  submissionError.value = '';
  if (!validateForm()) return;

  isSubmitting.value = true;
  try {
    const response = await fetch(
      'https://api.easyfixappliance.com/api/career-application',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': 'csrftoken',
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) throw new Error('Submission failed');

    isSubmitted.value = true;
    await navigateTo('/careers-applied');
  } catch (error) {
    console.error('Career application submission error:', error);
    submissionError.value =
      'We could not submit your application. Please try again or call us at (415) 941-4144.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
