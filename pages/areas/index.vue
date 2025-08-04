<template>
  <div>
    <Navbar />
    
    <!-- Enhanced Hero Section -->
    <header class="relative h-[80vh] lg:h-[90vh] overflow-hidden bg-gradient-to-br from-primary to-secondary">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0">
        <img src="/assets/img/baymap.webp" alt="Bay Area Map" class="w-full h-full object-cover opacity-30">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
      </div>
      
      <!-- Floating Background Elements -->
      <div class="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-32 right-16 w-48 h-48 bg-tertiary/20 rounded-full blur-2xl animate-pulse delay-700"></div>
      
      <!-- Hero Content -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div class="max-w-6xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
            <svg class="w-6 h-6 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-white font-bold text-lg">Bay Area Service Coverage</span>
          </div>
          
          <h1 class="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Professional Appliance Repair
            <span class="block text-tertiary">Across the Bay Area</span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Serving <strong>24 cities</strong> with fast, reliable appliance repair services. 
            From <strong>San Francisco to Palo Alto</strong>, we're your trusted local experts.
          </p>
          
          <!-- Enhanced CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="tel:(415) 941-4144"
               class="group inline-flex items-center px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-xl min-h-[70px]">
              <svg class="w-7 h-7 mr-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now: (415) 941-4144
            </a>
            
            <NuxtLink to="/booking"
                      class="inline-flex items-center px-10 py-5 border-3 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-2 text-xl min-h-[70px]">
              <svg class="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
              </svg>
              Schedule Online
            </NuxtLink>
          </div>
          
          <!-- Trust Indicators -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/20">
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-white mb-2">24</div>
              <div class="text-white/80 font-medium">Cities Served</div>
            </div>
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
              <div class="text-white/80 font-medium">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
              <div class="text-white/80 font-medium">Emergency Service</div>
            </div>
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-white mb-2">100%</div>
              <div class="text-white/80 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <!-- Enhanced Service Areas Section -->
    <div class="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      <div class="absolute bottom-20 left-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
      
      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <!-- Enhanced Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-8">
            <svg class="w-6 h-6 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-primary font-bold text-lg">Our Service Locations</span>
          </div>
          
          <h2 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            We Serve Your 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Neighborhood</span>
          </h2>
          
          <p class="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Professional appliance repair services across the San Francisco Bay Area. 
            Click on your city to learn more about our local services and get a free estimate.
          </p>
        </div>

        <!-- Enhanced Cities Grid -->
        <div class="mb-20">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <NuxtLink 
              v-for="(city, cityIndex) in cities" 
              :key="cityIndex"
              :to="`/areas/${replaceSpacesWithUnderscore(city.toLowerCase())}`"
              class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-primary/30"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{{ city }}</h3>
                    <p class="text-sm text-gray-600">Professional Service</p>
                  </div>
                </div>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Enhanced Zip Codes Section -->
        <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div class="text-center mb-12">
            <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Find Your Zip Code
            </h3>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional appliance repair services in these zip code areas across the Bay Area
            </p>
          </div>
          
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            <div 
              v-for="(zipCode, zipIndex) in zipCodes" 
              :key="zipIndex"
              class="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-3 text-center border border-primary/20 hover:border-primary/40 hover:bg-primary/20 transition-all duration-300"
            >
              <span class="text-primary font-semibold text-sm">{{ zipCode }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Enhanced Call to Action -->
    <div class="py-20 bg-gradient-to-r from-primary to-secondary">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="text-center text-white">
          <h3 class="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Your Appliances Fixed?
          </h3>
          <p class="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Don't see your city listed? We serve the entire Bay Area! 
            Call us today to confirm service in your location and get a free estimate.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:(415) 941-4144"
               class="inline-flex items-center px-12 py-6 bg-white text-primary font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-xl min-h-[70px]">
              <svg class="w-7 h-7 mr-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call for Service Area Confirmation
            </a>
            
            <NuxtLink to="/contact-us"
                      class="inline-flex items-center px-12 py-6 border-3 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-2 text-xl min-h-[70px]">
              <svg class="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Get Free Estimate
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
    <ModalsPrivacy />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const replaceSpacesWithUnderscore = (str) => str.replace(/\s+/g, "_");

const zipCodes = [
  "94020",
  "94022",
  "94028",
  "94301",
  "94302",
  "94303",
  "94304",
  "94306",
  "95033", // Palo Alto
  "94010", // Hillsborough
  "94401",
  "94402",
  "94403",
  "94404",
  "94497", // San Mateo
  "94025",
  "94026", // Menlo Park
  "94027",
  "94061",
  "94062", // Woodside
  "94062", // Emerald Hills
  "94027", // Atherton
  "94023",
  "94024", // Los Altos
  "95030",
  "95032", // Los Gatos
  "944011", // Burlingame
  "95030", // Monte Sereno
  "94019", // Half Moon Bay
  "94063",
  "94064",
  "94065", // Redwood City
  "94039",
  "94040",
  "94041",
  "94042",
  "94043",
  "94085", // Mountain View
  "94086",
  "94087",
  "94089", // Sunnyvale
  "95070",
  "95071", // Saratoga
  "94002", // Belmont
  "94070", // San Carlos
  "94121",
  "94122",
  "94123",
  "94118",
  "94115",
  "94158",
  "94114",
  "94117",
  "94110",
  "941131",
  "94127", // San Francisco
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
  "Woodside",
];

const screenWidth = ref(0); // Initialize with 0 to avoid SSR issues

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  // Ensure the code runs only on the client side
  screenWidth.value = window.innerWidth;
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});

const cityColumns = computed(() => {
  const numColumns =
    screenWidth.value < 640
      ? 1
      : screenWidth.value < 768
      ? 2
      : screenWidth.value < 1024
      ? 3
      : 4;
  const numCities = cities.length;
  const citiesPerColumn = Math.ceil(numCities / numColumns);
  const columnsArray = [];

  for (let i = 0; i < numColumns; i++) {
    columnsArray.push(cities.slice(i * citiesPerColumn, (i + 1) * citiesPerColumn));
  }

  return columnsArray;
});

const zipCodeColumns = computed(() => {
  const numColumns =
    screenWidth.value < 640
      ? 3
      : screenWidth.value < 768
      ? 4
      : screenWidth.value < 1024
      ? 5
      : 8;
  const numZipCodes = zipCodes.length;
  const zipCodesPerColumn = Math.ceil(numZipCodes / numColumns);
  const columnsArray = [];

  for (let i = 0; i < numColumns; i++) {
    columnsArray.push(zipCodes.slice(i * zipCodesPerColumn, (i + 1) * zipCodesPerColumn));
  }

  return columnsArray;
});

useHead({
  title: "Appliance Repairs Service | San Francisco | San Mateo | Palo Alto",
  meta: [
    {
      name: "description",
      content:
        "Get top-quality appliance repair services nearby in cities like San Francisco, Burlingame, Palo Alto, Hayward, Millbrae, and South San Francisco.",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Easy Fix Appliance",
        "description":
          "Fast, reliable appliance repairs in San Francisco, Palo Alto, and the Bay Area.",
        "areaServed": [
          { "@type": "Place", "name": "Atherton", "postalCode": "94027" },
          { "@type": "Place", "name": "Belmont", "postalCode": "94002" },
          { "@type": "Place", "name": "Burlingame", "postalCode": "94401" },
          { "@type": "Place", "name": "Emerald Hills", "postalCode": "94062" },
          { "@type": "Place", "name": "Foster City", "postalCode": "94404" },
          { "@type": "Place", "name": "Half Moon Bay", "postalCode": "94019" },
          { "@type": "Place", "name": "Hillsborough", "postalCode": "94010" },
          { "@type": "Place", "name": "Los Altos", "postalCode": "94022" },
          { "@type": "Place", "name": "Los Altos Hills", "postalCode": "94024" },
          { "@type": "Place", "name": "Los Gatos", "postalCode": "95032" },
          { "@type": "Place", "name": "Menlo Park", "postalCode": "94025" },
          { "@type": "Place", "name": "Millbrae", "postalCode": "94030" },
          { "@type": "Place", "name": "Monte Sereno", "postalCode": "95030" },
          { "@type": "Place", "name": "Mountain View", "postalCode": "94040" },
          { "@type": "Place", "name": "Pacifica", "postalCode": "94044" },
          { "@type": "Place", "name": "Palo Alto", "postalCode": "94301" },
          { "@type": "Place", "name": "Portola Valley", "postalCode": "94028" },
          { "@type": "Place", "name": "Redwood City", "postalCode": "94063" },
          { "@type": "Place", "name": "San Carlos", "postalCode": "94070" },
          { "@type": "Place", "name": "San Francisco", "postalCode": "94115" },
          { "@type": "Place", "name": "San Mateo", "postalCode": "94401" },
          { "@type": "Place", "name": "Saratoga", "postalCode": "95070" },
          { "@type": "Place", "name": "Sunnyvale", "postalCode": "94087" },
          { "@type": "Place", "name": "Woodside", "postalCode": "94062" },
        ],
        "provider": {
          "@type": "LocalBusiness",
          "name": "EZ Fix Service",
          "telephone": "+1 (415) 941-4144",
          "url": "https://easyfixappliance.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "303 Twin Dolphin Drive",
            "addressLocality": "Redwood City",
            "addressRegion": "CA",
            "postalCode": "94065",
            "addressCountry": "US",
          },
        },
      }),
    },
  ],
});

</script>
