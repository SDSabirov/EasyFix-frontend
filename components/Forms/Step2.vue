<template>
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label
                for="Appliance type"
                class="block mb-2 text-sm font-medium text-primary"
                >Appliance Type</label
              >
              <select
                id="applianceType"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
              <option selected>Refrigerator</option>
              <option>Wine Cooler</option>
              <option>Stove</option>
              <option>Built-In Refrigerator</option>
              <option>Range</option>
              <option>Cooktop</option>
              <option>Oven</option>
              <option>Freezer</option>
              </select>
            </div>
            <div>
              <label
                for="Appliance Brand"
                class="block mb-2 text-sm font-medium text-primary"
                >Appliance brand</label
              >
              <select
                id="applianceBrand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected>Sub-zero</option>
                <option>Wolf</option>
                <option>Viking</option>
                <option>KitchenAid</option>
                <option>GE Monogram</option>
                <option>Thermador</option>
                <option>Dacor</option>
                <option>DSC</option>
                <option>Miele</option>
                <option>Bertazzoni</option>
                <option>U-Line</option>
                
              </select>
            </div>
            <div>
              <label
                for="Appliance Brand"
                class="block mb-2 text-sm font-medium text-primary"
                >Approximate appliance age</label
              >
              <select
                id="applianceBrand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected>less than 1 year</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
                <option>10+</option>
                <option>15+</option>
              </select>
            </div>
            <div class="relative max-w-sm ">
              <label
                for="Preffered Date"
                class="block mb-2 text-sm font-medium text-primary"
                >Preffered Date & Time</label
              >
              <div class="flex space-x-1">
                <BookingDatepicker />
                <BookingTimepicker />
              </div>
              
            </div>
          </div>
</template>

<script setup>


</script>