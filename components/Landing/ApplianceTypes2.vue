<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
          <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
          </svg>
          <span class="text-primary font-semibold text-sm">Expert Repairs</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Professional Appliance Repair Services
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          From refrigeration to cooking appliances, our certified technicians provide comprehensive repair services for all major appliance types in your Bay Area home.
        </p>
      </div>

      <!-- Appliance Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <!-- Refrigeration -->
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v8h10V6H5z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Refrigeration Services</h3>
              <p class="text-blue-700 font-medium">Keep your food fresh & safe</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="service in refrigerationServices" :key="service.name" 
                 class="bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/80 transition-all duration-300">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path :d="service.icon"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 text-sm">{{ service.name }}</h4>
                  <p class="text-xs text-gray-600">{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cooking -->
        <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 border border-orange-200">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mr-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 2a1 1 0 000 2h1v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2V4h1a1 1 0 100-2H5zM8 4h4v3H8V4z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Cooking Appliances</h3>
              <p class="text-orange-700 font-medium">Professional cooking solutions</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="service in cookingServices" :key="service.name" 
                 class="bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/80 transition-all duration-300">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path :d="service.icon"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 text-sm">{{ service.name }}</h4>
                  <p class="text-xs text-gray-600">{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Service Features -->
      <div class="bg-gray-50 rounded-3xl p-8 mb-12">
        <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">
          Why Choose Our Appliance Repair Services?
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div v-for="feature in features" :key="feature.title" 
               class="text-center group">
            <div class="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path :d="feature.icon"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">{{ feature.title }}</h4>
            <p class="text-sm text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white">
          <div class="max-w-3xl mx-auto">
            <h3 class="text-3xl font-bold mb-4">
              Ready to Fix Your Appliance?
            </h3>
            <p class="text-xl text-white/90 mb-8 leading-relaxed">
              Don't let a broken appliance disrupt your daily routine. Our expert technicians are ready to diagnose and repair your appliances quickly and efficiently.
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
                to="/services"
                class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                View All Services
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const refrigerationServices = [
  {
    name: "Refrigerators",
    description: "Built-in & freestanding",
    icon: "M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
  },
  {
    name: "Freezers",
    description: "All types & sizes",
    icon: "M3 3a1 1 0 000 2v3a1 1 0 001 1h1v2H4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2h-1V9h1a1 1 0 001-1V5a1 1 0 100-2H3z"
  },
  {
    name: "Ice Makers",
    description: "Built-in & standalone", 
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"
  },
  {
    name: "Wine Coolers",
    description: "Temperature controlled",
    icon: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z"
  }
]

const cookingServices = [
  {
    name: "Ranges",
    description: "Gas & electric models",
    icon: "M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v6H3v-6z"
  },
  {
    name: "Ovens",
    description: "Single & double ovens",
    icon: "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
  },
  {
    name: "Cooktops",
    description: "Gas, electric & induction",
    icon: "M12 2l4 4-4 4-4-4 4-4zm0 8v12h-2V10h2zm4 0v12h2V10h-2z"
  },
  {
    name: "Stoves",
    description: "Professional grade",
    icon: "M5 2a1 1 0 000 2h1v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2V4h1a1 1 0 100-2H5z"
  }
]

const features = [
  {
    title: "Same-Day Service",
    description: "Fast response for urgent repairs",
    icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
  },
  {
    title: "Certified Technicians", 
    description: "Trained on all major brands",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
  },
  {
    title: "Genuine Parts",
    description: "OEM parts for lasting repairs",
    icon: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"
  },
  {
    title: "Warranty Included",
    description: "Peace of mind guarantee",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }
]
</script>