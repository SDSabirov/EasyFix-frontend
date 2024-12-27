<template>
  <div class="relative">
    <Navbar />

    <div
      class="flex flex-col items-center justify-center relative top-[72px] md:top-[98px]"
    >
      <header
        class="bg-white py-4 mx-auto flex flex-col space-y-6 items-center justify-center"
      >
        <h1
          class="text-2xl md:text-4xl lg:text-6xl font-bold text-center text-primary mb-10 max-w-screen-xl capitalize"
        >
          Appliance Repair in {{ pageTitle }}
        </h1>
        <a to="tel:4159414144">
          <button
            class="bg-black/20 px-8 py-4 mt-2 rounded-lg border-2 border-primary font-semibold hover:border-primary hover:text-primary hover:bg-secondary transition-all duration-800 ease-out group"
          >
            <p class="text-primary text-xl group-hover:text-white capitalize">
              Book Your Service in {{ pageTitle }}
            </p>
          </button>
        </a>
      </header>
      <section
        class="px-6 lg:px-12 py-10 text-lg text-gray-700 max-w-screen-xl"
      >
        <p class="mb-6">
          At Easy Fix Appliance, we pride ourselves on delivering top-tier
          appliance repair services in
          {{ pageTitle }}. Whether it’s a refrigerator that’s not cooling, a
          stove that’s not heating, or a washer that’s leaking, our team of
          expert technicians is equipped to handle it all. We understand how
          important your appliances are to your daily life, and we’re here to
          restore them to peak performance quickly and efficiently.
        </p>
        <p>
          With years of experience serving the
          {{ pageTitle }} area, we’ve built a reputation for reliability,
          professionalism, and exceptional customer service. Our team uses
          genuine parts and advanced diagnostic tools to ensure lasting repairs
          for all major appliance brands. Whether you’re in need of emergency
          repairs or routine maintenance, Easy Fix Appliance is your trusted
          partner for keeping your home running smoothly.
        </p>
      </section>
    </div>
    <div
      class="w-screen max-h-[600px] overflow-hidden relative mt-16 flex flex-col justify-center"
    >
      <LocationsGoogleMap v-model="location" />
    </div>
    <Footer />
    <ModalsPrivacy />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const capitalize = (str) => {
  if (!str) return ""; // Handle empty strings
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
const replaceUnderscoreWithSpaces = (str) => str.replace(/_/g, " ");
const serviceAreas = {
  atherton: { lat: 37.4613, lng: -122.1977 },
  belmont: { lat: 37.5202, lng: -122.2758 },
  burlingame: { lat: 37.5841, lng: -122.3661 },
  emerald_hills: { lat: 37.4716, lng: -122.262 },
  foster_city: { lat: 37.553, lng: -122.2658 },
  half_moon_bay: { lat: 37.4636, lng: -122.4286 },
  hillsborough: { lat: 37.5523, lng: -122.379 },
  los_altos: { lat: 37.3852, lng: -122.1141 },
  los_altos_hills: { lat: 37.3797, lng: -122.1374 },
  los_gatos: { lat: 37.2266, lng: -121.9747 },
  menlo_park: { lat: 37.4529, lng: -122.1822 },
  millbrae: { lat: 37.5985, lng: -122.3872 },
  monte_sereno: { lat: 37.2364, lng: -121.9916 },
  mountain_view: { lat: 37.3861, lng: -122.0838 },
  pacifica: { lat: 37.6138, lng: -122.4869 },
  palo_alto: { lat: 37.4419, lng: -122.143 },
  portola_valley: { lat: 37.3841, lng: -122.2355 },
  redwood_city: { lat: 37.4852, lng: -122.2364 },
  san_carlos: { lat: 37.5072, lng: -122.2605 },
  san_francisco: { lat: 37.7749, lng: -122.4194 },
  san_mateo: { lat: 37.5629, lng: -122.3255 },
  saratoga: { lat: 37.2638, lng: -122.023 },
  sunnyvale: { lat: 37.3688, lng: -122.0363 },
  woodside: { lat: 37.4299, lng: -122.2539 },
};

const route = useRoute();
const pageTitle = capitalize(replaceUnderscoreWithSpaces(route.params.slug));
const location = ref(serviceAreas[route.params.slug] || serviceAreas.atherton);

useHead(() => ({
  title: `Appliance Repair in ${pageTitle || "Atherton"}`,
  meta: [
    {
      name: "description",
      content: `Your Appliance Repair Services in ${pageTitle || "Atherton"}.`,
    },
  ],
}));
watch(
  () => route.params.slug,
  (newSlug) => {
    location.value = serviceAreas[newSlug] || serviceAreas.atherton;
  }
);
</script>
