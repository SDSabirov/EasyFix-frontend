<template>
  <section
    id="repairs"
    class="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 lg:py-32 relative overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #164863 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>
    
    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
    <div class="absolute bottom-32 right-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-700"></div>
    
    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Enhanced Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-8 backdrop-blur-sm border border-primary/20">
          <svg class="w-6 h-6 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span class="text-primary font-bold text-lg">Professional Repair Services</span>
        </div>
        
        <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Expert Appliance Repair Services
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">for Your Home</span>
        </h1>
        
        <p class="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
          We repair <strong class="text-primary">refrigerators, ovens, washers, dryers</strong>, and more—serving all
          major brands in <strong class="text-secondary">San Francisco, San Mateo, Palo Alto, Mountain View</strong>, and
          the Bay Area. <span class="text-primary font-semibold">Quality service you can trust!</span>
        </p>
        
        <!-- Enhanced CTA Button -->
        <div class="flex justify-center mb-16">
          <a href="tel:4159414144"
             class="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-xl min-h-[70px]">
            <svg class="w-7 h-7 mr-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span>Book Your Local Appliance Technician</span>
          </a>
        </div>
        
        <!-- Trust Indicators -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
          <div class="text-center">
            <div class="text-3xl font-bold text-primary mb-2">15+</div>
            <div class="text-gray-600 font-medium text-sm">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary mb-2">5000+</div>
            <div class="text-gray-600 font-medium text-sm">Repairs Completed</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary mb-2">24/7</div>
            <div class="text-gray-600 font-medium text-sm">Emergency Service</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary mb-2">100%</div>
            <div class="text-gray-600 font-medium text-sm">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      <!-- Service Categories with Enhanced Styling -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Repair Specialties</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From cooling to cooking appliances, we provide expert repair services for all major household appliances
          </p>
        </div>
        
        <ServicesCoolingAppliance />
        <ServicesCookingAppliance />
      </div>
      
      <!-- Enhanced Final CTA -->
      <div class="text-center">
        <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 20px 20px;"></div>
          </div>
          
          <div class="max-w-4xl mx-auto relative z-10">
            <h3 class="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Your Appliances Fixed?
            </h3>
            <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
              Don't let broken appliances disrupt your daily routine. Our certified technicians are standing by to provide 
              fast, reliable repair services that get your appliances back to peak performance.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="tel:4159414144"
                 class="group inline-flex items-center px-12 py-6 bg-white text-primary font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-xl min-h-[70px]">
                <svg class="w-7 h-7 mr-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>Request Your Local Appliance Technician</span>
              </a>
              
              <NuxtLink to="/booking"
                        class="inline-flex items-center px-12 py-6 border-3 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-2 text-xl min-h-[70px]">
                <svg class="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
                </svg>
                <span>Schedule Service Online</span>
              </NuxtLink>
            </div>
            
            <!-- Service Guarantees -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div class="flex items-center justify-center mb-3">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="text-xl font-bold mb-2">Same-Day Service</div>
                <div class="text-white/80 text-sm">Available for urgent repairs</div>
              </div>
              
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div class="flex items-center justify-center mb-3">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="text-xl font-bold mb-2">90-Day Warranty</div>
                <div class="text-white/80 text-sm">On all parts and labor</div>
              </div>
              
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div class="flex items-center justify-center mb-3">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="text-xl font-bold mb-2">100% Satisfaction</div>
                <div class="text-white/80 text-sm">Guaranteed or money back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
