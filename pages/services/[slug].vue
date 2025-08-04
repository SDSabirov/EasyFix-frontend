<template>
  <div class="relative">
    <Navbar />
    
    <!-- Enhanced Hero Section without Background Image -->
    <header class="relative h-[75vh] lg:h-[85vh] overflow-hidden mt-16 lg:mt-20" style="background: #0c2a3b; background-image: linear-gradient(to bottom right, #0c2a3b, #1C6E8C, #f97316);">
      <!-- Professional Service-Themed Floating Background Elements -->
      <div class="absolute top-16 left-12 w-20 h-20 rounded-full blur-lg animate-bounce" style="background-color: rgba(96, 165, 250, 0.25); animation-delay: 0.5s;"></div>
      <div class="absolute bottom-40 right-20 w-36 h-36 rounded-full blur-xl animate-pulse delay-1000" style="background-color: rgba(129, 140, 248, 0.2);"></div>
      <div class="absolute top-1/3 right-1/4 w-16 h-16 rounded-full blur-md animate-pulse delay-500" style="background-color: rgba(34, 211, 238, 0.3);"></div>
      
      <!-- Hero Content -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div class="max-w-5xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 backdrop-blur-sm rounded-full mb-8" style="background-color: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255, 255, 255, 0.3);">
            <svg class="w-6 h-6 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            <span class="font-bold text-lg" style="color: #ffffff;">Certified Technicians</span>
          </div>
          
          <h1 class="text-4xl lg:text-7xl font-bold mb-8 leading-tight" style="color: #ffffff;">
            Professional {{ pageTitle }}
            <span class="block" style="color: #f97316;">Bay Area Specialists</span>
          </h1>
          
          <p class="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style="color: #ffffff;">
            {{ applianceDetails?.intro || 'Professional appliance repair services you can trust.' }}
          </p>
          
          <!-- Enhanced CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="tel:4159414144"
               class="group inline-flex items-center px-10 py-5 font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-xl min-h-[70px]" style="background: linear-gradient(to right, #facc15, #f97316); color: #ffffff;" onmouseover="this.style.background='linear-gradient(to right, #eab308, #ea580c)'" onmouseout="this.style.background='linear-gradient(to right, #facc15, #f97316)'">
              <svg class="w-7 h-7 mr-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now: (415) 941-4144
            </a>
            
            <NuxtLink to="/booking"
                      class="inline-flex items-center px-10 py-5 font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-2 text-xl min-h-[70px]" style="border: 3px solid #f97316; color: #f97316;" onmouseover="this.style.background='linear-gradient(to right, #facc15, #f97316)'; this.style.color='#ffffff'" onmouseout="this.style.background='transparent'; this.style.color='#f97316'">
              <svg class="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
              </svg>
              Schedule Service
            </NuxtLink>
          </div>
          
          <!-- Service Guarantees with Professional Theme -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-3xl p-6 lg:p-8" style="background-color: #0c2a3b; border: 1px solid rgba(249, 115, 22, 0.3);">
            <div class="text-center">
              <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style="background: linear-gradient(to right, #facc15, #f97316);">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" style="color: #ffffff;">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="text-3xl font-bold mb-2" style="color: #ffffff;">Same-Day</div>
              <div class="font-medium" style="color: #ffffff;">Emergency Service</div>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style="background: linear-gradient(to right, #facc15, #f97316);">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" style="color: #ffffff;">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.062 3.062 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="text-3xl font-bold mb-2" style="color: #ffffff;">90-Day</div>
              <div class="font-medium" style="color: #ffffff;">Parts Warranty</div>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style="background: linear-gradient(to right, #facc15, #f97316);">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" style="color: #ffffff;">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="text-3xl font-bold mb-2" style="color: #ffffff;">100%</div>
              <div class="font-medium" style="color: #ffffff;">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Enhanced Content Section with Professional Theme -->
    <section class="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-white relative overflow-hidden">
      <!-- Professional Background Elements -->
      <div class="absolute top-10 right-10 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
      <div class="absolute bottom-20 left-16 w-32 h-32 bg-indigo-200/25 rounded-full blur-2xl"></div>
      <div class="absolute top-1/2 left-10 w-16 h-16 bg-cyan-200/20 rounded-full blur-lg"></div>
      
      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        
        <!-- Introduction Section with Professional Theme -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-6 py-3 rounded-full mb-8" style="background-color: rgba(219, 234, 254, 0.8); border: 1px solid #bfdbfe;">
            <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" style="color: #2563eb;">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            <span class="font-bold text-lg" style="color: #1d4ed8;">Professional {{ pageTitle }}</span>
          </div>
          
          <h2 class="text-4xl lg:text-5xl font-bold mb-8 leading-tight" style="color: #111827;">
            Why Choose Easy Fix Appliance?
          </h2>
          
          <p class="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style="color: #4b5563;">
            {{ applianceDetails?.serviceDescription || 'We provide expert appliance repair services with professional excellence.' }}
          </p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          <!-- Left Column - Our Expertise -->
          <div class="space-y-8">
            <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: linear-gradient(to bottom right, #164863, #427D9D);">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" style="color: #ffffff;">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2" style="color: #111827;">Expert Technicians</h3>
                  <p class="leading-relaxed" style="color: #4b5563;">
                    {{ applianceDetails?.whyChooseUs?.technicians || 'Our certified technicians are trained to handle all major appliance brands with professional expertise.' }}
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: linear-gradient(to bottom right, #10b981, #059669);">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" style="color: #ffffff;">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2" style="color: #111827;">Genuine Parts</h3>
                  <p class="leading-relaxed" style="color: #4b5563;">
                    {{ applianceDetails?.whyChooseUs?.parts || 'We use only authentic manufacturer parts to ensure lasting repairs and optimal performance.' }}
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: linear-gradient(to bottom right, #3b82f6, #06b6d4);">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" style="color: #ffffff;">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2" style="color: #111827;">Fast & Reliable Service</h3>
                  <p class="leading-relaxed" style="color: #4b5563;">
                    {{ applianceDetails?.whyChooseUs?.service || 'Same-day service available to minimize your downtime and get your appliances working quickly.' }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Service Models with Enhanced Visibility -->
          <div class="rounded-3xl p-8 shadow-2xl" style="background: #0c2a3b; background-image: linear-gradient(to bottom right, #0c2a3b, #1C6E8C, #f97316); color: #ffffff; border: 2px solid rgba(249, 115, 22, 0.3);">
            <h3 class="text-3xl font-bold mb-8 text-center" style="color: #ffffff;">
              Models We Service
            </h3>
            
            <div class="grid grid-cols-1 gap-4 mb-8" v-if="applianceDetails?.models?.length">
              <div 
                v-for="model in applianceDetails.models"
                :key="model"
                class="backdrop-blur-sm rounded-2xl p-4 transition-all duration-300" style="background-color: rgba(255, 255, 255, 0.2); border: 1px solid rgba(249, 115, 22, 0.3);" onmouseover="this.style.borderColor='rgba(249, 115, 22, 0.5)'" onmouseout="this.style.borderColor='rgba(249, 115, 22, 0.3)'"
              >
                <div class="flex items-center space-x-3">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" style="color: #f97316;">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-bold text-lg" style="color: #ffffff;">{{ model }}</h4>
                    <p class="text-sm" style="color: #f3f4f6;">Professional repair service</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <a href="tel:4159414144"
                 class="inline-flex items-center px-8 py-4 font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" style="background: linear-gradient(to right, #facc15, #f97316); color: #ffffff;" onmouseover="this.style.background='linear-gradient(to right, #eab308, #ea580c)'" onmouseout="this.style.background='linear-gradient(to right, #facc15, #f97316)'">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Emergency Repair
              </a>
            </div>
          </div>
        </div>

        <!-- Expertise Section -->
        <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-20">
          <div class="max-w-4xl mx-auto text-center">
            <h3 class="text-3xl lg:text-4xl font-bold mb-8" style="color: #111827;">
              Our Expertise in {{ pageTitle }}
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div class="space-y-4">
                <p class="text-lg leading-relaxed" style="color: #374151;">
                  {{ applianceDetails?.expertise || 'Our team brings years of experience in appliance repair services.' }}
                </p>
              </div>
              <div class="space-y-4">
                <p class="text-lg leading-relaxed" style="color: #374151;">
                  {{ applianceDetails?.additionalExpertise || 'We ensure every repair meets the highest standards of quality and reliability.' }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action Section with Professional Theme -->
        <div class="rounded-3xl p-8 lg:p-12 text-center shadow-2xl" style="background: #0c2a3b; background-image: linear-gradient(to right, #0c2a3b, #1C6E8C, #f97316); color: #ffffff; border: 1px solid rgba(249, 115, 22, 0.3);">
          <h3 class="text-3xl lg:text-4xl font-bold mb-6" style="color: #ffffff;">
            Schedule Your {{ pageTitle }} Today
          </h3>
          
          <p class="text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style="color: #f3f4f6;">
            {{ applianceDetails?.conclusion || 'Don\'t let appliance problems disrupt your day. Contact us for fast, professional repair service.' }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:4159414144"
               class="inline-flex items-center px-10 py-5 font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-xl min-h-[70px]" style="background: linear-gradient(to right, #facc15, #f97316); color: #ffffff;" onmouseover="this.style.background='linear-gradient(to right, #eab308, #ea580c)'" onmouseout="this.style.background='linear-gradient(to right, #facc15, #f97316)'">
              <svg class="w-7 h-7 mr-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now: (415) 941-4144
            </a>
            
            <NuxtLink to="/booking"
                      class="inline-flex items-center px-10 py-5 font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-2 text-xl min-h-[70px]" style="border: 3px solid #f97316; color: #f97316;" onmouseover="this.style.background='linear-gradient(to right, #facc15, #f97316)'; this.style.color='#ffffff'" onmouseout="this.style.background='transparent'; this.style.color='#f97316'">
              <svg class="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
              </svg>
              Schedule Online
            </NuxtLink>
          </div>
        </div>

        <!-- SEO-Enhanced FAQ Section -->
        <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-20">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <div class="inline-flex items-center px-6 py-3 bg-slate-100/80 rounded-full mb-8 border border-slate-200">
                <svg class="w-6 h-6 text-slate-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                </svg>
                <span class="text-slate-700 font-bold text-lg">Frequently Asked Questions</span>
              </div>
              
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Common {{ pageTitle }} Questions
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-6">
                <div class="bg-slate-50 rounded-2xl p-6">
                  <h4 class="text-lg font-bold text-gray-900 mb-3">How quickly can you repair my appliance?</h4>
                  <p class="text-gray-700 leading-relaxed">We offer same-day {{ pageTitle.toLowerCase() }} in most Bay Area locations. Our certified technicians carry genuine parts and diagnostic equipment to complete most repairs in a single visit.</p>
                </div>
                
                <div class="bg-blue-50 rounded-2xl p-6">
                  <h4 class="text-lg font-bold text-gray-900 mb-3">Do you provide warranty on repairs?</h4>
                  <p class="text-gray-700 leading-relaxed">Yes! All {{ pageTitle.toLowerCase() }} come with a 90-day warranty on parts and labor. We stand behind our work and use only genuine manufacturer parts for lasting repairs.</p>
                </div>
              </div>

              <div class="space-y-6">
                <div class="bg-indigo-50 rounded-2xl p-6">
                  <h4 class="text-lg font-bold text-gray-900 mb-3">What brands do you service?</h4>
                  <p class="text-gray-700 leading-relaxed">We repair all major appliance brands including Sub-Zero, Viking, Wolf, KitchenAid, Whirlpool, GE, Bosch, Miele, and many more. Our technicians are trained on both residential and commercial models.</p>
                </div>
                
                <div class="bg-cyan-50 rounded-2xl p-6">
                  <h4 class="text-lg font-bold text-gray-900 mb-3">How much does repair service cost?</h4>
                  <p class="text-gray-700 leading-relaxed">We provide free estimates and transparent pricing. Our {{ pageTitle.toLowerCase() }} typically range from $150-$400 depending on the issue and parts needed. No hidden fees or surprise charges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SEO-Enhanced Service Areas Section -->
        <div class="bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-20">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center px-6 py-3 bg-white/80 rounded-full mb-8 border border-gray-200">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" style="color: #2563eb;">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-blue-700 font-bold text-lg">Service Coverage Area</span>
            </div>

            <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {{ pageTitle }} Throughout the Bay Area
            </h3>
            
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional {{ pageTitle.toLowerCase() }} available in San Francisco, San Mateo, Santa Clara, and Alameda counties. We serve residential and commercial customers with same-day emergency service.
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div class="bg-white/60 rounded-lg p-3 text-gray-700 font-medium">San Francisco</div>
              <div class="bg-white/60 rounded-lg p-3 text-gray-700 font-medium">Palo Alto</div>
              <div class="bg-white/60 rounded-lg p-3 text-gray-700 font-medium">San Mateo</div>
              <div class="bg-white/60 rounded-lg p-3 text-gray-700 font-medium">Redwood City</div>
              <div class="bg-white/60 rounded-lg p-3 text-gray-700 font-medium">Mountain View</div>
              <div class="bg-white/60 rounded-lg p-3 text-gray-700 font-medium">Menlo Park</div>
              <div class="bg-white/60 rounded-lg p-3 text-gray-700 font-medium">Burlingame</div>
              <div class="bg-white/60 rounded-lg p-3 text-gray-700 font-medium">Los Altos</div>
            </div>
          </div>
        </div>

        <!-- SEO-Enhanced Common Issues Section -->
        <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-20">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Common {{ pageTitle }} Issues We Fix
              </h3>
              <p class="text-xl text-gray-600 leading-relaxed">
                Our certified technicians diagnose and repair all types of appliance problems with professional expertise and genuine parts.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100">
                <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-3">Not Working</h4>
                <p class="text-gray-700">Complete failure, electrical issues, power problems, and component malfunctions.</p>
              </div>

              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-3">Performance Issues</h4>
                <p class="text-gray-700">Poor efficiency, inconsistent operation, unusual noises, and reduced functionality.</p>
              </div>

              <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-3">Maintenance</h4>
                <p class="text-gray-700">Regular servicing, preventive care, part replacement, and efficiency optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FormsContact />
    <Footer />
    <ModalsPrivacy />
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

// Appliance data with complete content
const applianceData = {
  "refrigerator-repair": {
    title: "Refrigerator Repair Services",
    intro: "Refrigerators are essential for keeping your food fresh and safe. When they malfunction, it can disrupt your daily life.",
    serviceDescription: "At Easy Fix Appliance, we specialize in repairing refrigerators quickly and effectively with same-day service available.",
    expertise: "Our technicians are highly experienced in handling all major refrigerator brands and models, ensuring precise and reliable repairs.",
    additionalExpertise: "We use only genuine parts to restore your refrigerator to peak functionality, extending its lifespan and performance.",
    models: ["French Door Refrigerators", "Side-by-Side Refrigerators", "Bottom Freezer Models", "Compact Refrigerators", "Built-in Refrigerators"],
    conclusion: "Contact us today for fast and efficient refrigerator repairs. Your satisfaction is our priority!",
    whyChooseUs: {
      technicians: "Our team is highly skilled in diagnosing and repairing refrigerators of all brands including Sub-Zero, Viking, and KitchenAid.",
      parts: "We use only authentic manufacturer parts to ensure long-lasting repairs and optimal cooling performance.",
      service: "Fast and reliable repairs with same-day service available to minimize your downtime and food spoilage.",
      localService: "Serving the Bay Area with flexible scheduling options and emergency repair services."
    }
  },
  "freezer-repair": {
    title: "Freezer Repair Services",
    intro: "Freezers play a critical role in preserving your food. When they stop working, it can lead to spoilage and inconvenience.",
    serviceDescription: "Our expert technicians specialize in repairing freezers to ensure they function effectively and efficiently.",
    expertise: "We handle repairs for all freezer types, including upright, chest, and built-in models with precision and care.",
    additionalExpertise: "Using genuine parts, we ensure long-lasting solutions for your freezer issues with comprehensive warranty coverage.",
    models: ["Upright Freezers", "Chest Freezers", "Built-In Freezers", "Drawer Freezers"],
    conclusion: "Trust us to bring your freezer back to life. Schedule your repair today!",
    whyChooseUs: {
      technicians: "Certified and experienced in freezer repairs of all models from major brands like Frigidaire and Whirlpool.",
      parts: "Only authentic parts are used for reliable performance and extended appliance life.",
      service: "Quick and dependable service to reduce downtime and prevent food loss.",
      localService: "Providing comprehensive service across the Bay Area with emergency availability."
    }
  },
  "range-repair": {
    title: "Range Repair Services", 
    intro: "Your range is essential for cooking meals efficiently. Let us help when it's not performing at its best.",
    serviceDescription: "We repair all types of ranges, ensuring seamless performance for your cooking needs with professional expertise.",
    expertise: "Experts in handling gas, electric, and dual-fuel ranges from all major manufacturers.",
    additionalExpertise: "Using genuine parts, we guarantee durable repairs that restore your range to like-new condition.",
    models: ["Gas Ranges", "Electric Ranges", "Dual-Fuel Ranges", "Induction Ranges", "Professional Ranges"],
    conclusion: "Don't let a broken range slow you down. Contact us today for expert repair service!",
    whyChooseUs: {
      technicians: "Trained to repair all range models including Viking, Wolf, and Thermador professional units.",
      parts: "Authentic parts ensure lasting solutions and optimal cooking performance.",
      service: "Fast service with minimal disruption to your kitchen routine.",
      localService: "Available throughout the Bay Area with same-day service options."
    }
  },
  "oven-repair": {
    title: "Oven Repair Services",
    intro: "An oven breakdown can throw off your cooking routine. We're here to help get you back to baking and roasting.",
    serviceDescription: "We provide expert oven repairs to get your appliance back in top shape with professional service.",
    expertise: "Experienced in repairing conventional, convection, and wall ovens from all major brands.",
    additionalExpertise: "Our repairs are backed by genuine parts for durability and a comprehensive warranty.",
    models: ["Conventional Ovens", "Convection Ovens", "Wall Ovens", "Double Ovens", "Steam Ovens"],
    conclusion: "Contact us today to schedule your oven repair and get back to perfect cooking results.",
    whyChooseUs: {
      technicians: "Experts in all oven types including high-end brands like Miele and Bosch.",
      parts: "We use authentic replacement parts for reliable, long-lasting repairs.",
      service: "Reliable service to restore your oven quickly with minimal kitchen downtime.",
      localService: "Serving homes across the Bay Area with flexible scheduling."
    }
  },
  "cooktop-repair": {
    title: "Cooktop Repair Services",
    intro: "A malfunctioning cooktop can halt your cooking. We'll fix it promptly with professional expertise.",
    serviceDescription: "We repair all cooktop types, including gas, electric, and induction models with precision care.",
    expertise: "Specialized in diagnosing and repairing cooktop issues across all major brands and technologies.",
    additionalExpertise: "Using authentic parts, we ensure durable solutions that restore optimal cooking performance.",
    models: ["Gas Cooktops", "Electric Cooktops", "Induction Cooktops", "Ceramic Glass Cooktops", "Professional Cooktops"],
    conclusion: "Book your cooktop repair with us today and get back to efficient cooking.",
    whyChooseUs: {
      technicians: "Certified professionals for all cooktop brands including Wolf, Viking, and KitchenAid.",
      parts: "We use original components for reliability and long-term performance.",
      service: "Efficient repairs to get you cooking again with same-day service available.",
      localService: "Proudly serving the Bay Area with emergency repair services."
    }
  },
  "dishwasher-repair": {
    title: "Dishwasher Repair Services",
    intro: "A broken dishwasher means hours of hand-washing dishes. Let us restore your convenience quickly.",
    serviceDescription: "Professional dishwasher repair services for all major brands with same-day service available.",
    expertise: "Expert diagnosis and repair of all dishwasher issues including drainage, cleaning, and electrical problems.",
    additionalExpertise: "We use genuine manufacturer parts to ensure your dishwasher operates like new with full warranty coverage.",
    models: ["Built-in Dishwashers", "Portable Dishwashers", "Drawer Dishwashers", "Countertop Dishwashers"],
    conclusion: "Get your dishwasher repaired today and return to effortless kitchen cleanup.",
    whyChooseUs: {
      technicians: "Skilled in repairing all dishwasher brands including Bosch, KitchenAid, and Miele.",
      parts: "Only authentic parts used for optimal cleaning performance and longevity.",
      service: "Quick turnaround to restore your kitchen convenience with minimal disruption.",
      localService: "Comprehensive Bay Area coverage with flexible appointment scheduling."
    }
  },
  "under-counter-fridge-repair": {
    title: "Under-Counter Fridge Repair Services",
    intro: "Professional under-counter fridge repair services in the Bay Area.",
    serviceDescription: "Expert under-counter refrigerator repairs by certified technicians using genuine parts.",
    expertise: "Specialized repair of all major under-counter fridge brands including Sub-Zero, Viking, and KitchenAid.",
    additionalExpertise: "Ensuring long-lasting repairs with authentic manufacturer parts and warranty coverage.",
    models: ["Sub-Zero Under-Counter Fridges", "Viking Compact Refrigerators", "KitchenAid Built-in Fridges"],
    conclusion: "Schedule your under-counter fridge repair today and restore convenience to your kitchen.",
    whyChooseUs: {
      technicians: "Highly skilled in under-counter fridge repairs across all major brands.",
      parts: "We only use original manufacturer parts.",
      service: "Fast and dependable service to minimize downtime.",
      localService: "Proudly serving the Bay Area."
    }
  },

  "wine-cooler-repair": {
    title: "Wine Cooler Repair Services",
    intro: "Reliable wine cooler repair to maintain your wine collection perfectly.",
    serviceDescription: "Fast wine cooler repairs by factory-trained technicians with authentic replacement parts.",
    expertise: "Expert repairs for all major wine cooler brands including Sub-Zero, Viking, and Thermador.",
    additionalExpertise: "Durable and efficient solutions backed by genuine parts warranty.",
    models: ["Built-in Wine Coolers", "Freestanding Wine Coolers", "Dual-Zone Wine Coolers"],
    conclusion: "Contact us today for expert wine cooler repairs.",
    whyChooseUs: {
      technicians: "Experienced technicians specialized in wine cooler repairs.",
      parts: "Genuine parts for reliable cooling performance.",
      service: "Same-day service to protect your wine collection.",
      localService: "Serving San Mateo, Palo Alto, Redwood City, and surrounding areas."
    }
  },

  "stove-repair": {
    title: "Stove Repair Services",
    intro: "Get your stove repaired quickly and efficiently by our experts.",
    serviceDescription: "Comprehensive stove repair for gas and electric models with guaranteed results.",
    expertise: "Trained specialists in stove repair for all major appliance brands including Wolf and Viking.",
    additionalExpertise: "Quality repairs with genuine parts ensuring optimal cooking performance.",
    models: ["Gas Stoves", "Electric Stoves", "Dual-Fuel Stoves"],
    conclusion: "Book your stove repair now for swift restoration of your kitchen.",
    whyChooseUs: {
      technicians: "Professional stove repair specialists.",
      parts: "Only original manufacturer parts.",
      service: "Prompt, reliable service.",
      localService: "Available throughout the Bay Area."
    }
  },

  "double-oven-repair": {
    title: "Double Oven Repair Services",
    intro: "Expert double oven repair services to keep your kitchen running smoothly.",
    serviceDescription: "Specialized repair for double ovens ensuring perfect baking and cooking results.",
    expertise: "Experienced with all double oven brands including Thermador, Viking, and Bosch.",
    additionalExpertise: "Genuine parts and professional service ensure long-lasting performance.",
    models: ["Electric Double Ovens", "Gas Double Ovens", "Wall-Mounted Double Ovens"],
    conclusion: "Schedule your double oven repair today.",
    whyChooseUs: {
      technicians: "Double oven repair experts.",
      parts: "Certified parts for lasting reliability.",
      service: "Same-day service available.",
      localService: "Serving the Bay Area communities."
    }
  },

  "ice-maker-repair": {
    title: "Ice Maker Repair Services",
    intro: "Fast and reliable ice maker repairs to keep ice flowing.",
    serviceDescription: "Our professionals diagnose and repair ice maker issues promptly with genuine parts.",
    expertise: "Experienced in all ice maker brands and models including Sub-Zero and Viking.",
    additionalExpertise: "We provide long-lasting solutions with authentic manufacturer parts.",
    models: ["Built-in Ice Makers", "Standalone Ice Makers", "Undercounter Ice Makers"],
    conclusion: "Restore your ice maker’s functionality today.",
    whyChooseUs: {
      technicians: "Ice maker repair specialists.",
      parts: "High-quality original parts.",
      service: "Efficient same-day service.",
      localService: "Proudly serving customers across the Bay Area."
    }
  },

  "built-in-fridge-repair": {
    title: "Built-In Fridge Repair Services",
    intro: "Professional repair for built-in refrigerators by factory-certified experts.",
    serviceDescription: "Fast, precise built-in fridge repairs using authentic parts to ensure lasting performance.",
    expertise: "Expert handling of all built-in refrigerator brands such as Sub-Zero and Viking.",
    additionalExpertise: "Quality repairs that extend appliance life, backed by warranty.",
    models: ["Sub-Zero Built-In Refrigerators", "Viking Built-In Fridges", "Custom Panel Refrigerators"],
    conclusion: "Book your built-in fridge repair today for optimal cooling.",
    whyChooseUs: {
      technicians: "Experts in built-in fridge repairs.",
      parts: "Genuine manufacturer parts for durability.",
      service: "Quick, reliable repairs.",
      localService: "Serving San Francisco, Palo Alto, Redwood City, and the entire Bay Area."
    }
  }
}

// Get current appliance type from route
const applianceType = computed(() => route.params.slug || "refrigerator-repair")

// Get appliance details with fallback
const applianceDetails = computed(() => {
  const details = applianceData[applianceType.value]
  if (details) {
    return details
  }
  
  // Fallback for unknown slug
  return {
    title: "Appliance Repair Services",
    intro: "Expert appliance repair services for all major brands in the Bay Area.",
    serviceDescription: "Professional repair services with same-day availability and genuine parts warranty.",
    expertise: "Our certified technicians handle all major appliance brands with years of experience.",
    additionalExpertise: "We guarantee quality repairs using authentic parts and comprehensive warranty coverage.",
    models: ["All Major Brands", "Professional Models", "Residential Units"],
    conclusion: "Contact us today for reliable appliance repair services you can trust.",
    whyChooseUs: {
      technicians: "Certified technicians trained on all major appliance brands and models.",
      parts: "Genuine manufacturer parts for lasting repairs and optimal performance.",
      service: "Same-day service available to minimize downtime and restore convenience.",
      localService: "Serving the entire Bay Area with flexible scheduling and emergency services."
    }
  }
})

const pageTitle = computed(() => applianceDetails.value.title)

// Enhanced SEO Meta with structured data
useHead(() => ({
  title: `${pageTitle.value} | Easy Fix Appliance | Bay Area Professional Service`,
  meta: [
    { name: "description", content: `Expert ${pageTitle.value.toLowerCase()} throughout the Bay Area. Factory-certified technicians, genuine parts, same-day service available. Serving San Francisco, Palo Alto, San Mateo, Redwood City & surrounding areas. Call (415) 941-4144.` },
    { name: "keywords", content: `${pageTitle.value.toLowerCase()}, appliance repair, Bay Area, San Francisco, same day service, professional technicians, genuine parts, warranty` },
    { property: "og:title", content: `${pageTitle.value} | Easy Fix Appliance` },
    { property: "og:description", content: `Reliable ${pageTitle.value.toLowerCase()} with certified technicians and 90-day warranty. Emergency repairs available throughout the Bay Area.` },
    { property: "og:image", content: "/assets/img/services/detailhero.webp" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${pageTitle.value} | Easy Fix Appliance` },
    { name: "twitter:description", content: `Professional ${pageTitle.value.toLowerCase()} in the Bay Area with same-day service.` },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Easy Fix Appliance" },
    { name: "geo.region", content: "US-CA" },
    { name: "geo.placename", content: "San Francisco Bay Area" },
    { name: "geo.position", content: "37.4419;-122.143" },
    { name: "ICBM", content: "37.4419, -122.143" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": pageTitle.value,
        "description": applianceDetails.value.intro,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Easy Fix Appliance",
          "telephone": "+1-415-941-4144",
          "url": "https://easyfixappliance.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "303 Twin Dolphin Drive",
            "addressLocality": "Redwood City",
            "addressRegion": "CA",
            "postalCode": "94065",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "37.4419",
            "longitude": "-122.143"
          },
          "openingHours": "Mo-Su 07:00-21:00",
          "priceRange": "$150-$400",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Sarah M."
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Excellent service! Fixed our Sub-Zero refrigerator the same day. Technician was professional and knowledgeable."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Michael R."
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Fast and reliable appliance repair. Used genuine parts and provided excellent warranty. Highly recommended!"
            }
          ]
        },
        "areaServed": [
          "San Francisco",
          "Palo Alto", 
          "San Mateo",
          "Redwood City",
          "Mountain View",
          "Menlo Park",
          "Burlingame",
          "Los Altos"
        ],
        "offers": {
          "@type": "Offer",
          "description": "Same-day appliance repair service with 90-day warranty",
          "priceRange": "$150-$400"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Appliance Repair Services",
          "itemListElement": applianceDetails.value.models?.map(model => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `${model} Repair`
            }
          })) || []
        }
      })
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `https://easyfixappliance.com/services/${route.params.slug}#faq`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://easyfixappliance.com/services/${route.params.slug}`
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://easyfixappliance.com#organization",
          "name": "Easy Fix Appliance",
          "url": "https://easyfixappliance.com",
          "telephone": "+14159414144"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "@id": `https://easyfixappliance.com/services/${route.params.slug}#faq-1`,
            "name": "How quickly can you repair my appliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We offer same-day ${pageTitle.value.toLowerCase()} in most Bay Area locations. Our certified technicians carry genuine parts and diagnostic equipment to complete most repairs in a single visit.`
            }
          },
          {
            "@type": "Question",
            "@id": `https://easyfixappliance.com/services/${route.params.slug}#faq-2`,
            "name": "Do you provide warranty on repairs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes! All ${pageTitle.value.toLowerCase()} come with a 90-day warranty on parts and labor. We stand behind our work and use only genuine manufacturer parts for lasting repairs.`
            }
          },
          {
            "@type": "Question",
            "@id": `https://easyfixappliance.com/services/${route.params.slug}#faq-3`,
            "name": "What brands do you service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We repair all major appliance brands including Sub-Zero, Viking, Wolf, KitchenAid, Whirlpool, GE, Bosch, Miele, and many more. Our technicians are trained on both residential and commercial models."
            }
          },
          {
            "@type": "Question",
            "@id": `https://easyfixappliance.com/services/${route.params.slug}#faq-4`,
            "name": "How much does repair service cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We provide free estimates and transparent pricing. Our ${pageTitle.value.toLowerCase()} typically range from $150-$400 depending on the issue and parts needed. No hidden fees or surprise charges.`
            }
          }
        ]
      })
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://easyfixappliance.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://easyfixappliance.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": pageTitle.value,
            "item": `https://easyfixappliance.com/services/${route.params.slug}`
          }
        ]
      })
    }
  ]
}))
</script>

<style></style>
