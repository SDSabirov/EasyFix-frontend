<template>
  <section class="py-16 lg:py-20 relative">
    <!-- Background Elements -->
    <div class="absolute top-10 right-10 w-24 h-24 bg-orange-100 rounded-full blur-xl opacity-60"></div>
    <div class="absolute bottom-16 left-12 w-32 h-32 bg-red-100 rounded-full blur-2xl opacity-40"></div>
    
    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Enhanced Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-8 border border-orange-200">
          <svg class="w-6 h-6 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 2a1 1 0 000 2h1v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2V4h1a1 1 0 100-2H5zM8 4h4v3H8V4z"/>
          </svg>
          <span class="text-orange-700 font-bold text-lg">Professional Cooking Solutions</span>
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Cooking Appliance 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Repair Experts</span>
        </h2>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          From ranges to cooktops, our certified technicians provide expert repair services for all your cooking appliances
        </p>
      </div>

      <!-- Enhanced Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <NuxtLink to="/services/range-repair" 
                  class="group bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-orange-100 hover:border-orange-200 flex flex-col items-center text-center h-full">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 6h18v2H3V6zm0 4h18v10H3V10zm2 2v6h14v-6H5z" />
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Range Repair</h3>
          <p class="text-gray-600 leading-relaxed flex-grow mb-6">Comprehensive repair solutions for all types of kitchen ranges, from gas to electric models.</p>
          
          <div class="mt-auto">
            <div class="inline-flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
              <span>Learn More</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/stove-repair" 
                  class="group bg-gradient-to-br from-white to-red-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-red-100 hover:border-red-200 flex flex-col items-center text-center h-full">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 3h12v2H6V3zm0 4h12v2H6V7zm0 4h12v10H6V11z" />
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">Stove Repair</h3>
          <p class="text-gray-600 leading-relaxed flex-grow mb-6">Safe and efficient stove repairs for all models and types with certified technician expertise.</p>
          
          <div class="mt-auto">
            <div class="inline-flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
              <span>Learn More</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/oven-repair" 
                  class="group bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-yellow-100 hover:border-yellow-200 flex flex-col items-center text-center h-full">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 5h16v14H4V5zm2 2v10h12V7H6z" />
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">Oven Repair</h3>
          <p class="text-gray-600 leading-relaxed flex-grow mb-6">Expert oven repairs for reliable and consistent cooking results with genuine OEM parts.</p>
          
          <div class="mt-auto">
            <div class="inline-flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700 transition-colors">
              <span>Learn More</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/double-oven-repair" 
                  class="group bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100 hover:border-purple-200 flex flex-col items-center text-center h-full">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h12v6H6V4zm0 10h12v6H6v-6z" />
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Double Oven Repair</h3>
          <p class="text-gray-600 leading-relaxed flex-grow mb-6">Specialized repairs for double ovens, ensuring even performance and optimal functionality.</p>
          
          <div class="mt-auto">
            <div class="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
              <span>Learn More</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/cooktop-repair" 
                  class="group bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 hover:border-blue-200 flex flex-col items-center text-center h-full">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="7" cy="7" r="2" />
                <circle cx="17" cy="7" r="2" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Cooktop Repair</h3>
          <p class="text-gray-600 leading-relaxed flex-grow mb-6">Efficient repair solutions for gas, electric, and induction cooktops with professional service.</p>
          
          <div class="mt-auto">
            <div class="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
              <span>Learn More</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>
      
      <!-- Enhanced Call to Action -->
      <div class="text-center">
        <div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white">
          <div class="max-w-3xl mx-auto">
            <h3 class="text-3xl font-bold mb-4">
              Need Your Cooking Appliances Fixed?
            </h3>
            <p class="text-xl text-white/90 mb-8 leading-relaxed">
              Our certified technicians specialize in all types of cooking appliance repairs. Get your kitchen back to full functionality today.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:4159414144"
                 class="inline-flex items-center px-10 py-4 bg-white text-orange-600 font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call for Cooking Repair
              </a>
              
              <NuxtLink to="/booking"
                        class="inline-flex items-center px-10 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-1 text-lg">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
                </svg>
                Schedule Service
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>