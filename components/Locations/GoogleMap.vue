<template>
  <div class="relative w-full h-full">
    <!-- Loading State -->
    <div v-if="!mapLoaded" class="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-3xl">
      <div class="text-center">
        <div class="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-4">
          <svg class="w-6 h-6 text-primary mr-3 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-primary font-semibold">Loading Map...</span>
        </div>
        <p class="text-gray-600">Finding the best route to your location</p>
      </div>
    </div>

    <!-- Map Container -->
    <ClientOnly>
      <GMapMap 
        :center="currentLocation" 
        :zoom="zoom" 
        :options="mapOptions"
        class="w-full h-full rounded-3xl overflow-hidden"
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
          <div class="p-4 max-w-sm">
            <div class="flex items-center space-x-3 mb-3">
              <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-lg">Easy Fix Appliance</h3>
                <p class="text-primary font-medium">Professional Service Area</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-4 leading-relaxed">
              We provide expert appliance repair services in this area with same-day availability.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-2">
              <a 
                href="tel:4159414144"
                class="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors text-sm"
              >
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Now
              </a>
              
              <NuxtLink 
                to="/booking"
                class="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors text-sm"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
                </svg>
                Book Online
              </NuxtLink>
            </div>
          </div>
        </GMapInfoWindow>
      </GMapMap>
    </ClientOnly>

    <!-- Map Controls Overlay -->
    <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-gray-200">
      <div class="flex items-center space-x-2">
        <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span class="text-sm font-medium text-gray-700">Service Available</span>
      </div>
    </div>

    <!-- Legend -->
    <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 max-w-xs">
      <h4 class="font-bold text-gray-900 mb-3 text-sm">Service Area Legend</h4>
      <div class="space-y-2 text-xs">
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span class="text-gray-600">Service Location</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-1 bg-primary/30 rounded"></div>
          <span class="text-gray-600">Coverage Area</span>
        </div>
        <div class="text-gray-500 mt-2">
          <strong>Response Time:</strong> 1-2 hours
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
  border-radius: 1.5rem;
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
  background: #164863;
  border-radius: 3px;
}

:deep(.gm-style-iw::-webkit-scrollbar-thumb:hover) {
  background: #0f3a4a;
}
</style>
