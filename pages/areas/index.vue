<template>
  <div>
    <Navbar />
    <header class="w-screen h-[70vh] relative overflow-hidden justify-end flex">
        <img src="/assets/img/baymap.webp" alt="background" class="object-cover md:object-scale-down w-2/3 ">
        <div class="h-full w-full bg-black/40 absolute top-0 flex flex-col space-y-4 items-center justify-center">
            <h1 class="text-4xl lg:text-6xl font-bold text-center text-white mb-10 max-w-screen-xl">
                Covering the Bay Area: Fast, Reliable Appliance Repairs Near You
          </h1>
          <a href="tel:(415) 941-4144">
          <button
            class="bg-black/40 px-8 py-4 mt-2 rounded-lg border-2 border-white font-semibold hover:border-primary hover:text-primary hover:bg-secondary transition-all duration-800 ease-out group"
          >
            <p class="text-white text-xl group-hover:text-white">
              Call Us Now (415) 941-4144
            </p>
          </button>
        </a>
        </div>

    </header>
      
    <div class="container mx-auto px-2 py-16 lg:px-28 overflow-x-hidden relative">
        <h2 class="text-3xl lg:text-6xl font-bold text-center text-primary mb-10">Discover Our Coverage Across the Bay Area</h2>
      <p
        class="mb-5 font-light text-center text-gray-500 sm:text-xl dark:text-gray-400 mb-10"
      >
        Get top-quality appliance repair services nearby in cities like San
        Francisco, Burlingame, Palo Alto, Hayward, Millbrae, and South San
        Francisco.
      </p>
      <div
        class="flex flex-col space-y-6 mt-8 items-center justify-center"
      >
        <div class="flex w-full space-x-6 justify-center ">
          <!-- Cities Column -->
          <div
            v-for="(column, index) in cityColumns"
            :key="'city-' + index"
            class="w-full"
          >
            <ul class=" md:text-xl text-lg group">
              <li class="px-4 py-2 bg-primary rounded-xl font-normal mt-2 text-white hover:text-gray-200 hover:bg-secondary hover:text-underline" v-for="(city, cityIndex) in column" :key="cityIndex">
                <NuxtLink  :to="`/areas/${replaceSpacesWithUnderscore(city.toLowerCase())}`" >{{ city }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <h3 class="text-3xl lg:text-6xl font-bold text-center text-primary mt-10 mb-10">Find your zip code</h3>
        <div class="flex w-full space-x-6 justify-center items-center">
          <!-- Zip Codes Column -->
          <div
            v-for="(column, index) in zipCodeColumns"
            :key="'zip-' + index"
            class="w-1/6"
          >
            <ul class="text-[12px] text-white">
              <li class="px-4 py-2 bg-primary rounded-xl mt-2" v-for="(zipCode, zipIndex) in column" :key="zipIndex">
                {{ zipCode }}
              </li>
            </ul>
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
