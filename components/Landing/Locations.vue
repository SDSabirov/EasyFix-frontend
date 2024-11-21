<template>
  <div class="container mx-auto px-2 py-16 lg:px-28 overflow-x-hidden">
    <h2 class="text-2xl font-bold text-center text-primary mb-6">
      Trusted Appliance Repairs in Your Area
    </h2>
    <p class="mb-5 font-light text-center text-gray-500 sm:text-xl dark:text-gray-400 mb-10">Get top-quality appliance repair services nearby in cities like San Francisco, Burlingame, Palo Alto, Hayward, Millbrae, and South San Francisco.</p>
    <div class="grid grid-cols-1 gap-2 lg:grid-cols-2 mt-8 items-center justify-center">
      <div class="flex w-full  space-x-6 justify-center">
        <!-- Cities Column -->
        <div
          v-for="(column, index) in cityColumns"
          :key="'city-' + index"
          class="w-1/5 "
        >
          <ul class="list-disc text-primary text-[14px] font-semibold">
            <li v-for="(city, cityIndex) in column" :key="cityIndex">
              {{ city }}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex w-full mt-8 md:mt-0 space-x-3 justify-center px-2">
        <!-- Zip Codes Column -->
        <div
          v-for="(column, index) in zipCodeColumns"
          :key="'zip-' + index"
          class="w-1/6"
        >
          <ul class="text-[12px] text-primary">
            <li v-for="(zipCode, zipIndex) in column" :key="zipIndex">
              {{ zipCode }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const zipCodes = [
  "94020", "94022", "94028", "94301", "94302", "94303", "94304", "94306", "95033", // Palo Alto
  "94010", // Hillsborough
  "94401", "94402", "94403", "94404", "94497", // San Mateo
  "94025", "94026", // Menlo Park
  "94027", "94061", "94062", // Woodside
  "94062", // Emerald Hills
  "94027", // Atherton
  "94023", "94024", // Los Altos
  "95030", "95032", // Los Gatos
  "944011", // Burlingame
  "95030", // Monte Sereno
  "94019", // Half Moon Bay
  "94063", "94064", "94065", // Redwood City
  "94039", "94040", "94041", "94042", "94043", "94085", // Mountain View
  "94086", "94087", "94089", // Sunnyvale
  "95070", "95071", // Saratoga
  "94002", // Belmont
  "94070", // San Carlos
  "94121", "94122", "94123", "94118", "94115", "94158", "94114", "94117", "94110", "941131", "94127" // San Francisco
];

const cities = [
  "Atherton",
  "Belmont",
  "Burlingame",
  "Emerald Hills",
  "Foster City",
  "Half Moon Bay",
  "Hillsborough",
  "Los Altos",
  "Los Altos Hills",
  "Los Gatos",
  "Menlo Park",
  "Millbrae",
  "Monte Sereno",
  "Mountain View",
  "Pacifica",
  "Palo Alto",
  "Portola Valley",
  "Redwood City",
  "San Carlos",
  "San Francisco",
  "San Mateo",
  "Saratoga",
  "Sunnyvale",
  "Woodside"
];

// Compute columns for cities
const cityColumns = computed(() => {
  const numColumns = 4;
  const numCities = cities.length;
  const citiesPerColumn = Math.ceil(numCities / numColumns);
  const columnsArray = [];

  for (let i = 0; i < numColumns; i++) {
    columnsArray.push(
      cities.slice(i * citiesPerColumn, (i + 1) * citiesPerColumn)
    );
  }

  return columnsArray;
});

// Compute columns for zip codes
const zipCodeColumns = computed(() => {
  const numColumns = 9;
  const numZipCodes = zipCodes.length;
  const zipCodesPerColumn = Math.ceil(numZipCodes / numColumns);
  const columnsArray = [];

  for (let i = 0; i < numColumns; i++) {
    columnsArray.push(
      zipCodes.slice(i * zipCodesPerColumn, (i + 1) * zipCodesPerColumn)
    );
  }

  return columnsArray;
});
</script>
