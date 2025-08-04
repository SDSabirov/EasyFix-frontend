<template>
  <div class="relative">
    <Navbar />

    <!-- Enhanced Hero Section -->
    <header class="relative h-[70vh] lg:h-[80vh] overflow-hidden bg-gradient-to-br from-primary to-secondary mt-16 lg:mt-20">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
      </div>
      
      <!-- Floating Background Elements -->
      <div class="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-32 right-16 w-48 h-48 bg-tertiary/20 rounded-full blur-2xl animate-pulse delay-700"></div>
      
      <!-- Hero Content -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div class="max-w-5xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
            <svg class="w-6 h-6 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-white font-bold text-lg">Local Service Area</span>
          </div>
          
          <h1 class="text-4xl lg:text-7xl font-bold text-white mb-8 leading-tight capitalize">
            Expert Appliance Repair in 
            <span class="block text-tertiary">{{ pageTitle }}</span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Fast, reliable appliance repair services in {{ pageTitle }}. 
            <strong>Same-day service available</strong> for all major appliance brands.
          </p>
          
          <!-- Enhanced CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="tel:4159414144"
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
              Schedule Service in {{ pageTitle }}
            </NuxtLink>
          </div>
          
          <!-- Service Guarantees -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/20">
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-2">Same-Day</div>
              <div class="text-white/80 font-medium">Service Available</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-2">90-Day</div>
              <div class="text-white/80 font-medium">Warranty Included</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-2">100%</div>
              <div class="text-white/80 font-medium">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Enhanced Content Section -->
    <section class="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      <div class="absolute bottom-20 left-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
      
      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <!-- Enhanced Introduction -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-8">
            <svg class="w-6 h-6 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-primary font-bold text-lg">Professional Service in {{ pageTitle }}</span>
          </div>
          
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight capitalize">
            Why Choose Easy Fix Appliance in {{ pageTitle }}?
          </h2>
        </div>

        <!-- Enhanced Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <!-- Left Column - Content -->
          <div class="space-y-8">
            <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Expert Technicians</h3>
                  <p class="text-gray-600 leading-relaxed">
                    At Easy Fix Appliance, we pride ourselves on delivering top-tier appliance repair services in {{ pageTitle }}. Our team of expert technicians is equipped to handle all major appliance issues with professional expertise.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Local {{ pageTitle }} Service</h3>
                  <p class="text-gray-600 leading-relaxed">
                    With years of experience serving the {{ pageTitle }} area, we've built a reputation for reliability, professionalism, and exceptional customer service. We understand the unique needs of {{ pageTitle }} residents.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Genuine Parts & Tools</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Our team uses genuine manufacturer parts and advanced diagnostic tools to ensure lasting repairs for all major appliance brands. Whether emergency repairs or routine maintenance, we're your trusted partner.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Services -->
          <div class="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
            <h3 class="text-3xl font-bold mb-8 text-center">
              Appliances We Repair in {{ pageTitle }}
            </h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div class="flex items-center space-x-3">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-bold">Refrigerators</h4>
                    <p class="text-sm text-white/80">All brands & models</p>
                  </div>
                </div>
              </div>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div class="flex items-center space-x-3">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 2a1 1 0 000 2h1v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2V4h1a1 1 0 100-2H5zM8 4h4v3H8V4z"/>
                  </svg>
                  <div>
                    <h4 class="font-bold">Stoves & Ovens</h4>
                    <p class="text-sm text-white/80">Gas & electric</p>
                  </div>
                </div>
              </div>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div class="flex items-center space-x-3">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="7" cy="7" r="2" />
                    <circle cx="17" cy="7" r="2" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                  <div>
                    <h4 class="font-bold">Cooktops</h4>
                    <p class="text-sm text-white/80">Induction & ceramic</p>
                  </div>
                </div>
              </div>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div class="flex items-center space-x-3">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.95 22.95 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-bold">Dishwashers</h4>
                    <p class="text-sm text-white/80">Built-in & portable</p>
                  </div>
                </div>
              </div>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div class="flex items-center space-x-3">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7z"/>
                    <path d="M4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"/>
                    <path d="M2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                  </svg>
                  <div>
                    <h4 class="font-bold">Wine Coolers</h4>
                    <p class="text-sm text-white/80">Temperature controlled</p>
                  </div>
                </div>
              </div>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div class="flex items-center space-x-3">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84l7 3 7-3a1 1 0 000-1.84l-7-3z"/>
                  </svg>
                  <div>
                    <h4 class="font-bold">Ice Makers</h4>
                    <p class="text-sm text-white/80">Built-in & standalone</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center mt-8">
              <a href="tel:4159414144"
                 class="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call for {{ pageTitle }} Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Map Section -->
    <div class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="text-center mb-12">
          <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 capitalize">
            Find Us in {{ pageTitle }}
          </h3>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Easy Fix Appliance proudly serves {{ pageTitle }} and surrounding areas with professional appliance repair services
          </p>
        </div>
        
        <div class="bg-gray-100 rounded-3xl overflow-hidden shadow-xl border border-gray-200" style="height: 500px;">
          <LocationsGoogleMap v-model="location" />
        </div>
      </div>
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
