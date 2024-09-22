<template>
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="w-full">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-primary"
                >First Name</label
              >
              <input
                v-model="firstName"
                type="text"
                name="First name"
                id="name"
                class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                v-model="lastName"
                type="text"
                name="last name"
                id="last-name"
                class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                  v-model="phone"
                  type="text"
                  id="phone-input"
                  aria-describedby="helper-text-explanation"
                  class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                v-model="address"
                type="text"
                name="address"
                id="address"
                class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                v-model="zip"
                type="text"
                name="zip"
                id="zip"
                class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                class="bg-gray-50 rounded-xl border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected>United States</option>
              </select>
            </div>
          </div>
</template>


<script setup>

let firstName = ''
let lastName = ''
let email = ''
let phone = ''
let address = ''
let zip = ''


</script>