<template>
  <div class="relative w-full h-full">
    <!-- Loading State -->
    <div v-if="!mapLoaded" class="absolute inset-0 flex items-center justify-center bg-cream rounded-[2rem]">
      <div class="text-center">
        <div class="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-white px-5 py-2.5 mb-4">
          <svg class="w-5 h-5 text-brass-dark animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">Loading Map</span>
        </div>
        <p class="text-sm text-gray-500">Finding the best route to your location</p>
      </div>
    </div>

    <!-- Map Container -->
    <ClientOnly>
      <GMapMap 
        :center="currentLocation" 
        :zoom="zoom" 
        :options="mapOptions"
        class="w-full h-full rounded-[2rem] overflow-hidden"
        @idle="onMapLoaded"
      >
        <!-- Main Location Marker -->
        <GMapMarker 
          :position="currentLocation" 
          :options="markerOptions"
          @click="onMarkerClick"
        />
        
        <!-- Service Area Circle -->
        <GMapCircle
          :center="currentLocation"
          :radius="serviceRadius"
          :options="circleOptions"
        />

        <!-- Info Window -->
        <GMapInfoWindow
          :opened="infoWindowOpen"
          :position="currentLocation"
          @closeclick="infoWindowOpen = false"
        >
          <div class="p-5 max-w-sm">
            <div class="flex items-center gap-3 mb-3">
              <span class="flex items-center justify-center w-11 h-11 rounded-full bg-cream border border-primary/10 shrink-0">
                <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </span>
              <div>
                <h3 class="font-montserrat font-bold text-primary text-base">Easy Fix Appliance</h3>
                <p class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-brass-dark">Professional Service Area</p>
              </div>
            </div>

            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              We provide expert appliance repair services in this area with same-day availability.
            </p>

            <div class="flex flex-col sm:flex-row gap-2">
              <a
                href="tel:4159414144"
                class="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-ink text-white font-montserrat text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass"
              >
                Call Now
              </a>

              <NuxtLink
                to="/booking"
                class="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-ink/20 text-ink font-montserrat text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-dark"
              >
                Book Online
              </NuxtLink>
            </div>
          </div>
        </GMapInfoWindow>
      </GMapMap>
    </ClientOnly>

    <!-- Map Controls Overlay -->
    <div class="absolute top-4 left-4 inline-flex items-center gap-2.5 rounded-full border border-primary/10 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-lg shadow-ink/5">
      <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
      <span class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Service Available</span>
    </div>

    <!-- Legend -->
    <div class="absolute bottom-4 left-4 rounded-[1.25rem] border border-primary/10 bg-white/90 backdrop-blur-sm p-5 shadow-lg shadow-ink/5 max-w-xs">
      <h4 class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-500 mb-3">Service Area Legend</h4>
      <div class="space-y-2 text-xs">
        <div class="flex items-center gap-2.5">
          <span class="w-4 h-4 bg-primary rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
            <span class="w-2 h-2 bg-white rounded-full"></span>
          </span>
          <span class="text-gray-600">Service Location</span>
        </div>
        <div class="flex items-center gap-2.5">
          <span class="w-4 h-1 bg-primary/30 rounded-full shrink-0" aria-hidden="true"></span>
          <span class="text-gray-600">Coverage Area</span>
        </div>
        <div class="flex items-center gap-2.5 pt-1">
          <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
          <span class="text-gray-500"><strong class="text-primary font-semibold">Response Time:</strong> 1-2 hours</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
    default: () => ({ lat: 37.4419, lng: -122.143 }) // Default to Palo Alto
  }
})

// Reactive data
const mapLoaded = ref(false)
const infoWindowOpen = ref(false)
const zoom = ref(13)
const serviceRadius = ref(8000) // 8km service radius

// Computed properties
const currentLocation = computed(() => props.modelValue || { lat: 37.4419, lng: -122.143 })

// Map configuration
const mapOptions = {
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: true,
  disableDefaultUi: false,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ]
}

const markerOptions = {
  icon: {
    url: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#164863" stroke="white" stroke-width="4"/>
        <path d="M20 10L25 20H15L20 10Z" fill="white"/>
        <circle cx="20" cy="25" r="3" fill="white"/>
      </svg>
    `),
    scaledSize: { width: 40, height: 40 },
    anchor: { x: 20, y: 40 }
  },
  animation: 'DROP'
}

const circleOptions = {
  strokeColor: '#164863',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#164863',
  fillOpacity: 0.1
}

// Methods
const onMapLoaded = () => {
  mapLoaded.value = true
}

const onMarkerClick = () => {
  infoWindowOpen.value = true
}

// Watch for location changes
watch(() => props.modelValue, (newLocation) => {
  if (newLocation) {
    // You could add smooth animation here if needed
    mapLoaded.value = false
    setTimeout(() => {
      mapLoaded.value = true
    }, 500)
  }
}, { deep: true })
</script>

<style scoped>
/* Ensure the map container has proper styling */
:deep(.gm-style) {
  border-radius: 2rem;
}

:deep(.gm-style-iw) {
  border-radius: 1rem;
  padding: 0;
}

:deep(.gm-style-iw-c) {
  border-radius: 1rem;
  padding: 0;
}

:deep(.gm-style-iw-d) {
  overflow: visible !important;
}

/* Custom scrollbars for the map */
:deep(.gm-style-iw::-webkit-scrollbar) {
  width: 6px;
}

:deep(.gm-style-iw::-webkit-scrollbar-track) {
  background: #f1f1f1;
  border-radius: 3px;
}

:deep(.gm-style-iw::-webkit-scrollbar-thumb) {
  background: #B08D57;
  border-radius: 3px;
}

:deep(.gm-style-iw::-webkit-scrollbar-thumb:hover) {
  background: #8F7040;
}
</style>
