<template>
  <div class="container mx-auto px-2 py-16 md:px-28 overflow-x-hidden">
    <h2 class="text-xl font-bold text-center text-primary">
      Cities and Zip Codes
    </h2>
    <div class="md:flex mt-8 px-2">
      <div class="flex w-full  md:flex-row md:w-1/2 space-x-6 justify-center">
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
      <div class="flex w-full md:flex-row md:w-1/2 mt-8 md:mt-0 space-x-3 justify-center px-2">
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
  94002, 94010, 94011, 94018, 94019, 94022, 94023, 94024, 94025, 94026, 94027,
  94028, 94030, 94035, 94039, 94040, 94041, 94042, 94043, 94061, 94062, 94063,
  94064, 94065, 94066, 94070, 94085, 94086, 94087, 94088, 94089, 94128, 94301,
  94302, 94303, 94304, 94305, 94306, 94309, 94401, 94402, 94403, 94404, 94497,
  94536, 94537, 94538, 94540, 94541, 94542, 94543, 94544, 94545, 94555, 94557,
  94560, 94577, 94578, 94579, 94580, 94587, 95002,
];

const cities = [
  "Alviso",
  "Atherton",
  "Belmont",
  "Burlingame",
  "El Granada",
  "Fremont",
  "Half Moon Bay",
  "Hayward",
  "Los Altos",
  "Menlo Park",
  "Millbrae",
  "Mountain View",
  "Newark",
  "Palo Alto",
  "Portola Valley",
  "Redwood City",
  "San Bruno",
  "San Carlos",
  "San Francisco",
  "San Leandro",
  "San Lorenzo",
  "San Mateo",
  "Stanford",
  "Sunnyvale",
  "Union City",
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
