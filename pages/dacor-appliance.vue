<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <header class="relative h-[75vh] lg:h-[85vh] overflow-hidden mt-16 lg:mt-20" style="background: #0c2a3b; background-image: linear-gradient(to bottom right, #0c2a3b, #1C6E8C, #f97316);">
      <!-- Professional Background Elements -->
      <div class="absolute top-16 left-12 w-20 h-20 rounded-full blur-lg animate-bounce" style="background: rgba(249, 115, 22, 0.25); animation-delay: 0.5s;"></div>
      <div class="absolute bottom-40 right-20 w-36 h-36 rounded-full blur-xl animate-pulse delay-1000" style="background: rgba(28, 110, 140, 0.2);"></div>
      <div class="absolute top-1/3 right-1/4 w-16 h-16 rounded-full blur-md animate-pulse delay-500" style="background: rgba(251, 191, 36, 0.3);"></div>
      
      <!-- Hero Content -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div class="max-w-5xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 rounded-full mb-8 border" style="background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(8px); border-color: rgba(255, 255, 255, 0.3);">
            <svg class="w-6 h-6 mr-3" style="color: #ffffff;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold text-lg" style="color: #ffffff;">Certified Dacor Specialists</span>
          </div>
          
          <h1 class="text-4xl lg:text-7xl font-bold mb-8 leading-tight" style="color: #ffffff;">
            Professional Dacor
            <span class="block" style="color: #f97316;">Appliance Repair Services</span>
          </h1>
          
          <p class="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
            Expert repair services for innovative Dacor appliances. 
            <strong>Factory-trained technicians</strong> serving the Bay Area with <strong>same-day service</strong> and genuine Dacor parts.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="tel:4159414144" class="group inline-flex items-center px-10 py-5 font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-xl min-h-[70px]" style="background: linear-gradient(to right, #facc15, #f97316); color: #ffffff;">
              <svg class="w-7 h-7 mr-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now: (415) 941-4144
            </a>
            
            <NuxtLink to="/booking" class="inline-flex items-center px-10 py-5 border-3 font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-2 text-xl min-h-[70px] hover:bg-white hover:text-primary" style="border-color: #ffffff; color: #ffffff; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
              <svg class="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
              </svg>
              Schedule Service Online
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- About Dacor Section -->
    <section class="py-20 lg:py-32" style="background: linear-gradient(to bottom right, #f8fafc, #ffffff);">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-6 py-3 rounded-full mb-8" style="background: rgba(12, 42, 59, 0.1);">
            <svg class="w-6 h-6 mr-3" style="color: #0c2a3b;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-bold text-lg" style="color: #0c2a3b;">Innovation & Design</span>
          </div>
          
          <h2 class="text-4xl lg:text-6xl font-bold mb-8 leading-tight" style="color: #1f2937;">
            Dacor: 
            <span class="text-transparent bg-clip-text" style="background-image: linear-gradient(to right, #0c2a3b, #1C6E8C);">Modern Craftsmanship</span>
          </h2>
          
          <p class="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style="color: #6b7280;">
            Discover why Dacor stands at the forefront of appliance innovation, combining cutting-edge technology with modern design and premium craftsmanship for the contemporary kitchen.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 class="text-3xl lg:text-4xl font-bold mb-8" style="color: #1f2937;">Innovation Meets Premium Craftsmanship</h3>
            <div class="space-y-6 text-lg leading-relaxed" style="color: #4b5563;">
              <p>
                Dacor has been pioneering kitchen innovation since 1965, consistently introducing <strong>groundbreaking technologies</strong> that redefine modern cooking. From the first electric cooktop with infinite controls to today's <strong>smart connectivity features</strong>, Dacor appliances represent the perfect fusion of innovation, performance, and sophisticated design.
              </p>
              <p>
                Each Dacor appliance features <strong>premium materials</strong> and precision engineering, with stainless steel construction, advanced cooking technologies, and intuitive controls. Their <strong>Modernist Collection</strong> and professional-grade ranges deliver exceptional performance while maintaining the sleek, contemporary aesthetics that define modern luxury kitchens.
              </p>
              <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="p-4 rounded-xl" style="background: rgba(249, 115, 22, 0.1);">
                  <div class="text-2xl font-bold mb-2" style="color: #f97316;">1965</div>
                  <div class="text-sm font-medium" style="color: #1f2937;">Innovation Since</div>
                </div>
                <div class="p-4 rounded-xl" style="background: rgba(249, 115, 22, 0.1);">
                  <div class="text-2xl font-bold mb-2" style="color: #f97316;">Smart</div>
                  <div class="text-sm font-medium" style="color: #1f2937;">Connectivity</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img src="/assets/img/dacor-cover.jpg" alt="Dacor modern kitchen appliances with innovative design and premium craftsmanship" class="w-full h-auto rounded-2xl shadow-2xl">
            <div class="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl" style="background: #ffffff;">
              <div class="text-2xl font-bold mb-1" style="color: #0c2a3b;">Modern</div>
              <div class="text-sm font-medium" style="color: #6b7280;">Innovation</div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <div class="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style="background: rgba(249, 115, 22, 0.1);">
              <svg class="w-8 h-8" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4" style="color: #1f2937;">Smart Technology</h3>
            <p style="color: #6b7280;">Advanced connectivity features and intuitive controls that integrate seamlessly with modern smart home systems.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <div class="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style="background: rgba(249, 115, 22, 0.1);">
              <svg class="w-8 h-8" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6.14-11.76a1 1 0 011.5.98L10 8v1a1 1 0 01-1 1H8a1 1 0 110-2h1V8l.64-3.24z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4" style="color: #1f2937;">Precision Performance</h3>
            <p style="color: #6b7280;">Exact temperature control and advanced cooking modes for consistent, professional-quality results every time.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <div class="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style="background: rgba(249, 115, 22, 0.1);">
              <svg class="w-8 h-8" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM6 9a1 1 0 112 0 1 1 0 01-2 0zm6 0a1 1 0 112 0 1 1 0 01-2 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4" style="color: #1f2937;">Contemporary Design</h3>
            <p style="color: #6b7280;">Sleek, modern aesthetics with premium materials that complement today's sophisticated kitchen designs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Expertise Section -->
    <section class="py-20 lg:py-32" style="background: #0c2a3b;">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center px-6 py-3 rounded-full mb-8" style="background: rgba(249, 115, 22, 0.2);">
              <svg class="w-6 h-6 mr-3" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-bold text-lg" style="color: #ffffff;">Certified Expertise</span>
            </div>
            
            <h2 class="text-4xl lg:text-5xl font-bold mb-8 leading-tight" style="color: #ffffff;">
              15+ Years of 
              <span style="color: #f97316;">Dacor</span> 
              Repair Excellence
            </h2>
            
            <div class="space-y-6 text-lg leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
              <p>
                At Easy Fix Appliance, we've been the Bay Area's trusted Dacor repair specialists for over <strong>15 years</strong>. Our factory-certified technicians understand the innovative technologies behind Dacor's modern appliances, from smart connectivity systems to precision cooking controls and advanced refrigeration features.
              </p>
              <p>
                We serve <strong>San Mateo, Palo Alto, Foster City, San Francisco</strong>, and the entire Bay Area with comprehensive Dacor repair services. From smart system diagnostics to complex component replacements, we use only <strong>genuine Dacor parts</strong> and cutting-edge diagnostic tools to maintain your appliances' innovative performance and modern functionality.
              </p>
            </div>
            
            <!-- Key Benefits -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style="background: rgba(249, 115, 22, 0.2);">
                  <svg class="w-6 h-6" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2" style="color: #ffffff;">Factory Certification</h3>
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Dacor-authorized service technicians</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style="background: rgba(249, 115, 22, 0.2);">
                  <svg class="w-6 h-6" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2" style="color: #ffffff;">Genuine Dacor Parts</h3>
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Only authentic replacement components</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style="background: rgba(249, 115, 22, 0.2);">
                  <svg class="w-6 h-6" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2" style="color: #ffffff;">Same-Day Service</h3>
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Same-day & after-hours repairs available</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style="background: rgba(249, 115, 22, 0.2);">
                  <svg class="w-6 h-6" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2" style="color: #ffffff;">2-Year Warranty</h3>
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Comprehensive coverage on all repairs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="p-8 rounded-3xl" style="background: linear-gradient(to bottom right, #1C6E8C, #f97316);">
              <div class="text-center mb-8">
                <h3 class="text-3xl font-bold mb-4" style="color: #ffffff;">Dacor Appliances We Service</h3>
                <p class="text-lg" style="color: rgba(255, 255, 255, 0.9);">Complete repair solutions for all Dacor models</p>
              </div>
              
              <div class="space-y-4">
                <div class="p-4 rounded-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
                  <h4 class="font-bold mb-2" style="color: #ffffff;">Modernist Collection Ranges</h4>
                  <ul class="text-sm space-y-1" style="color: rgba(255, 255, 255, 0.8);">
                    <li>• Smart range connectivity issues</li>
                    <li>• Precision cooking controls</li>
                    <li>• Gas burner calibration</li>
                    <li>• Oven temperature diagnostics</li>
                  </ul>
                </div>
                
                <div class="p-4 rounded-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
                  <h4 class="font-bold mb-2" style="color: #ffffff;">Contemporary Refrigeration</h4>
                  <ul class="text-sm space-y-1" style="color: rgba(255, 255, 255, 0.8);">
                    <li>• Built-in refrigerator service</li>
                    <li>• Wine cooler maintenance</li>
                    <li>• Ice maker troubleshooting</li>
                    <li>• Temperature control repairs</li>
                  </ul>
                </div>
                
                <div class="p-4 rounded-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
                  <h4 class="font-bold mb-2" style="color: #ffffff;">Wall Ovens & Cooktops</h4>
                  <ul class="text-sm space-y-1" style="color: rgba(255, 255, 255, 0.8);">
                    <li>• Convection oven repairs</li>
                    <li>• Induction cooktop service</li>
                    <li>• Smart control diagnostics</li>
                    <li>• Ventilation system maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 lg:py-32" style="background: linear-gradient(to bottom right, #f8fafc, #ffffff);">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-8" style="color: #1f2937;">
            Frequently Asked Questions
          </h2>
          <p class="text-xl max-w-3xl mx-auto" style="color: #6b7280;">
            Get answers to common questions about Dacor appliance repairs in the Bay Area
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">What makes Dacor appliances innovative?</h3>
            <p style="color: #6b7280;">Dacor appliances feature cutting-edge smart technology, precision controls, and contemporary design, representing the latest in kitchen innovation and modern craftsmanship.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">Do you service Dacor smart appliances?</h3>
            <p style="color: #6b7280;">Yes, we specialize in Dacor smart appliance repairs, including connectivity troubleshooting, app integration issues, and advanced control system diagnostics.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">How reliable are Dacor appliances?</h3>
            <p style="color: #6b7280;">Dacor appliances are built with premium materials and advanced engineering for excellent reliability. Regular maintenance ensures optimal performance and longevity.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">What's your warranty on Dacor repairs?</h3>
            <p style="color: #6b7280;">We provide a comprehensive 2-year warranty on all parts and labor for Dacor repairs, ensuring your investment in modern kitchen technology is fully protected.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20" style="background: linear-gradient(to right, #0c2a3b, #1C6E8C, #f97316);">
      <div class="container mx-auto px-4 max-w-screen-xl text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-8" style="color: #ffffff;">
            Ready to Restore Your Dacor Appliances?
          </h2>
          <p class="text-xl lg:text-2xl mb-12" style="color: rgba(255, 255, 255, 0.9);">
            Don't let appliance issues disrupt your modern kitchen experience. Our certified technicians are ready to provide expert Dacor repair services with same-day availability throughout the Bay Area.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:4159414144" class="group inline-flex items-center px-12 py-6 font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-xl min-h-[70px]" style="background: #ffffff; color: #0c2a3b;">
              <svg class="w-7 h-7 mr-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now: (415) 941-4144
            </a>
            
            <NuxtLink to="/booking" class="inline-flex items-center px-12 py-6 border-3 font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-2 text-xl min-h-[70px] hover:bg-white hover:text-primary" style="border-color: #ffffff; color: #ffffff; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
              <svg class="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
              </svg>
              Schedule Service Online
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <ModalsPrivacy />
  </div>
</template>

<script setup>
import { useFlowbite } from '~/composables/useFlowbite';

// SEO optimization
useHead({
  title: 'Dacor Appliance Repair Services | Bay Area Modern Kitchen Specialists',
  meta: [
    {
      name: 'description',
      content: 'Expert Dacor appliance repairs in Bay Area. Factory-certified technicians for innovative ranges, smart appliances, and modern kitchen technology. Same-day service, genuine parts, 2-year warranty. Call (415) 941-4144'
    },
    {
      name: 'keywords',
      content: 'Dacor appliance repair, Dacor range repair, smart appliance service, modern kitchen appliances, Bay Area appliance repair, San Mateo Dacor repair, contemporary appliance service'
    },
    {
      property: 'og:title',
      content: 'Dacor Appliance Repair Services | Bay Area Modern Kitchen Specialists'
    },
    {
      property: 'og:description', 
      content: 'Factory-certified Dacor appliance repair services in the Bay Area. Modern kitchen specialists with same-day service and genuine Dacor parts.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Easy Fix Appliance - Dacor Repair Specialists",
        "description": "Factory-certified Dacor appliance repair services in the Bay Area",
        "url": "https://easyfixappliance.com/dacor-appliance",
        "telephone": "+14159414144",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "CA",
          "addressLocality": "San Mateo",
          "addressCountry": "US"
        },
        "areaServed": [
          "San Mateo",
          "Palo Alto",
          "Foster City", 
          "San Francisco",
          "Bay Area"
        ],
        "serviceType": [
          "Dacor Appliance Repair",
          "Smart Appliance Service",
          "Modernist Collection Repair",
          "Contemporary Kitchen Appliance Repair",
          "Dacor Range Repair"
        ],
        "openingHours": "Mo-Su 08:00-20:00",
        "priceRange": "$$"
      })
    }
  ]
});

// Flowbite initialization
onMounted(() => {
  const flowbiteElements = document.querySelectorAll('[data-flowbite]');
  if (flowbiteElements.length > 0) {
    useFlowbite(() => {
      initFlowbite();
    })
  }
});
</script>