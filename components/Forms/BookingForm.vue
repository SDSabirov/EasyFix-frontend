<template>
  <section class="bg-light max-h-[90vh]">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-primary text-center">
        Request a booking
      </h2>

      <form action="#">
        <div class="w-full px-[22%]">
          <BookingSteps />
        </div>

        <div v-if="step == 1">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="w-full">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-primary"
                >First Name</label
              >
              <input
                type="text"
                name="First name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Alex"
                required
              />
            </div>
            <div class="w-full">
              <label
                for="last-name"
                class="block mb-2 text-sm font-medium text-primary"
                >Last Name</label
              >
              <input
                type="text"
                name="last name"
                id="last-name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Smith"
                required
              />
            </div>
            <div class="w-full">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-primary"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Smith"
                required
              />
            </div>
            <div class="w-full">
              <label
                for="phone-input"
                class="block mb-2 text-sm font-medium text-primary"
                >Phone number</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 19 18"
                  >
                    <path
                      d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="phone-input"
                  aria-describedby="helper-text-explanation"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  required
                />
              </div>
            </div>

            <div class="w-full">
              <label
                for="address"
                class="block mb-2 text-sm font-medium text-primary"
                >Address</label
              >
              <input
                type="text"
                name="address"
                id="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="123 Main St"
                required
              />
            </div>
            <div class="w-full">
              <label
                for="zip"
                class="block mb-2 text-sm font-medium text-primary"
                >Zip/Postal code</label
              >
              <input
                type="text"
                name="zip"
                id="zip"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="12345"
                required
              />
            </div>
            <div>
              <label
                for="Country"
                class="block mb-2 text-sm font-medium text-primary"
                >Country</label
              >
              <select
                id="category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">United States</option>
              </select>
            </div>
          </div>
          <div class="flex items-center w-full">
            <button
              @click="addStep"
              type="button"
              class="flex mx-auto items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-secondary"
            >
              Next
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div v-if="step == 2">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label
                for="Appliance Brand"
                class="block mb-2 text-sm font-medium text-primary"
                >Appliance brand</label
              >
              <select
                id="applianceBrand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">Sub-zero</option>
                <option>Wolf</option>
                <option>Viking</option>
                <option>KitchenAid</option>
                <option>GE Monogram</option>
                <option>Thermador</option>
                <option>Dacor</option>
              </select>
            </div>
            <div>
              <label
                for="Appliance Brand"
                class="block mb-2 text-sm font-medium text-primary"
                >Appliance age</label
              >
              <select
                id="applianceBrand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">less than 1 year</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
                <option>10+</option>
                <option>15+</option>
              </select>
            </div>
            <div class="relative max-w-sm">
              <label
                for="Preffered Date"
                class="block mb-2 text-sm font-medium text-primary"
                >Preffered Date</label
              >
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 relative top-1/4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </div>
              <input
                id="datepicker-autohide"
                datepicker
                datepicker-autohide
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-primary"
                >Description</label
              >
              <textarea
                id="description"
                rows="8"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Please provide a brief description of the issue"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center w-full justify-between">
            <button
              @click="subtractStep"
              type="button"
              class="flex mx-auto items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-secondary"
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
              @click="addStep"
              type="button"
              class="flex mx-auto items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-secondary"
            >
              Request Booking
            </button>
          </div>
        </div>
      </form>
      <div v-if="step == 3">
        <div class="flex flex-col justify-center text-primary items-center space-y-4">
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
            Thank you ! We successfully recieved your request
          </h3>

          <p
            class="md:text-[22px] text-primary text-center font-semibold text-[18px] animate-fadeDown"
          >
            Our team will contact you as soon as possible
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useFlowbite } from "~/composables/useFlowbite";

let step = ref(1);

function addStep() {
  step.value = step.value + 1;
}
function subtractStep() {
  step.value = step.value - 1;
}
onMounted(() => {
  
});
</script>
