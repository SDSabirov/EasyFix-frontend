<template>
  <section class="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
          <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
          <span class="text-primary font-semibold text-sm">Service Coverage</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Professional Appliance Repair Services Throughout Bay Area
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Expert Sub-Zero, Wolf, Viking, and luxury appliance repair services in San Mateo, Palo Alto, San Francisco, and surrounding Bay Area communities. Same-day service available.
        </p>
      </div>
      <!-- Service Areas Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Cities Section -->
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Cities We Serve</h3>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(column, index) in cityColumns" :key="'city-' + index">
              <ul class="space-y-3">
                <li v-for="(city, cityIndex) in column" :key="cityIndex" 
                    class="flex items-center text-gray-700 hover:text-primary transition-colors">
                  <svg class="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium">{{ city }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Zip Codes Section -->
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Service Zip Codes</h3>
          </div>
          <div class="grid grid-cols-3 gap-2 max-h-96 overflow-y-auto">
            <div v-for="(column, index) in zipCodeColumns" :key="'zip-' + index">
              <ul class="space-y-2">
                <li v-for="(zipCode, zipIndex) in column" :key="zipIndex" 
                    class="text-sm text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded">
                  {{ zipCode }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
      <!-- Call to Action -->
      <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-center text-white">
        <div class="max-w-3xl mx-auto">
          <h3 class="text-3xl font-bold mb-4">
            Need Appliance Repair in Your Area?
          </h3>
          <p class="text-xl text-white/90 mb-8 leading-relaxed">
            Don't see your city or zip code listed? We serve many additional communities throughout the Bay Area. 
            Call us to confirm service availability in your location.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:4159414144"
              class="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now: (415) 941-4144
            </a>
            
            <NuxtLink 
              to="/booking"
              class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
              </svg>
              Schedule Online Booking
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
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
