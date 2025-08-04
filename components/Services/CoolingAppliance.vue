<script setup lang="ts"></script>

<template>
  <section class="py-16 lg:py-20 relative">
    <!-- Background Elements -->
    <div class="absolute top-12 left-10 w-28 h-28 bg-blue-100 rounded-full blur-xl opacity-50"></div>
    <div class="absolute bottom-20 right-16 w-36 h-36 bg-cyan-100 rounded-full blur-2xl opacity-40"></div>
    
    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Enhanced Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-8 border border-blue-200">
          <svg class="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3z" clip-rule="evenodd"/>
          </svg>
          <span class="text-blue-700 font-bold text-lg">Professional Cooling Solutions</span>
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Reliable Cooling Appliance 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Repair Services</span>
        </h2>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Keep your food fresh and beverages cold with our expert cooling appliance repair services for all major brands
        </p>
      </div>

      <!-- Enhanced Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <NuxtLink to="/services/refrigerator-repair" 
                  class="group bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 hover:border-blue-200 flex flex-col items-center text-center h-full">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Refrigerator Repair</h3>
          <p class="text-gray-600 leading-relaxed flex-grow mb-6">Expert repairs for built-in and freestanding refrigerators to keep your food fresh and safe.</p>
          
          <div class="mt-auto">
            <div class="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
              <span>Learn More</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/freezer-repair" 
                  class="group bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-cyan-100 hover:border-cyan-200 flex flex-col items-center text-center h-full">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84l7 3 7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.97 8.97 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z"/>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">Freezer Repair</h3>
          <p class="text-gray-600 leading-relaxed flex-grow mb-6">Fast and effective freezer repairs to protect your frozen food and prevent spoilage.</p>
          
          <div class="mt-auto">
            <div class="inline-flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors">
              <span>Learn More</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/ice-maker-repair" 
                  class="group bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-indigo-100 hover:border-indigo-200 flex flex-col items-center text-center h-full">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.95 22.95 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">Ice Maker Repair</h3>
          <p class="text-gray-600 leading-relaxed flex-grow mb-6">Dependable repairs to ensure your ice maker produces fresh ice without interruptions.</p>
          
          <div class="mt-auto">
            <div class="inline-flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
              <span>Learn More</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/under-counter-fridge-repair" 
                  class="group bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-green-100 hover:border-green-200 flex flex-col items-center text-center h-full">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM11 5a1 1 0 10-2 0v.092A4.535 4.535 0 007.324 6.754C6.602 7.234 6 8.009 6 9c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662V15a1 1 0 002 0v-2.092a4.535 4.535 0 001.676-.662C13.398 11.766 14 10.991 14 10c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 7.092V5z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Under-Counter Fridge Repair</h3>
          <p class="text-gray-600 leading-relaxed flex-grow mb-6">Specialized repairs for compact and built-in under-counter refrigerators.</p>
          
          <div class="mt-auto">
            <div class="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
              <span>Learn More</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/wine-cooler-repair" 
                  class="group bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100 hover:border-purple-200 flex flex-col items-center text-center h-full">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7z"/>
                <path d="M4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"/>
                <path d="M2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Wine Cooler Repair</h3>
          <p class="text-gray-600 leading-relaxed flex-grow mb-6">Preserve your wine collection perfectly with our specialized wine cooler repair service.</p>
          
          <div class="mt-auto">
            <div class="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
              <span>Learn More</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/services/built-in-fridge-repair" 
                  class="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-gray-200 flex flex-col items-center text-center h-full">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.533 1.533 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.533 1.533 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.533 1.533 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">Built-In Fridges Repair</h3>
          <p class="text-gray-600 leading-relaxed flex-grow mb-6">High-end built-in fridge repair service with precision and original parts.</p>
          
          <div class="mt-auto">
            <div class="inline-flex items-center text-gray-600 font-semibold group-hover:text-gray-700 transition-colors">
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
        <div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white">
          <div class="max-w-3xl mx-auto">
            <h3 class="text-3xl font-bold mb-4">
              Keep Your Food Fresh with Expert Cooling Repairs
            </h3>
            <p class="text-xl text-white/90 mb-8 leading-relaxed">
              Don't let a malfunctioning cooling appliance spoil your food. Our certified technicians provide fast, reliable repairs for all cooling systems.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:4159414144"
                 class="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call for Cooling Repair
              </a>
              
              <NuxtLink to="/booking"
                        class="inline-flex items-center px-10 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 text-lg">
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
