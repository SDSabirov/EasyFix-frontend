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
              <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold text-lg" style="color: #ffffff;">Certified Viking Specialists</span>
          </div>
          
          <h1 class="text-4xl lg:text-7xl font-bold mb-8 leading-tight" style="color: #ffffff;">
            Professional Viking
            <span class="block" style="color: #f97316;">Appliance Repair Services</span>
          </h1>
          
          <p class="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
            Expert repair services for professional-grade Viking appliances. 
            <strong>Factory-trained technicians</strong> serving the Bay Area with <strong>same-day service</strong> and genuine Viking parts.
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

    <!-- About Viking Section -->
    <section class="py-20 lg:py-32" style="background: linear-gradient(to bottom right, #f8fafc, #ffffff);">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-6 py-3 rounded-full mb-8" style="background: rgba(12, 42, 59, 0.1);">
            <svg class="w-6 h-6 mr-3" style="color: #0c2a3b;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/>
            </svg>
            <span class="font-bold text-lg" style="color: #0c2a3b;">Professional-Grade Appliances</span>
          </div>
          
          <h2 class="text-4xl lg:text-6xl font-bold mb-8 leading-tight" style="color: #1f2937;">
            Viking: 
            <span class="text-transparent bg-clip-text" style="background-image: linear-gradient(to right, #0c2a3b, #1C6E8C);">Professional Excellence</span>
          </h2>
          
          <p class="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style="color: #6b7280;">
            Discover why Viking appliances are the choice of professional chefs and culinary enthusiasts who demand restaurant-quality performance in their home kitchens.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 class="text-3xl lg:text-4xl font-bold mb-8" style="color: #1f2937;">Professional Kitchen Performance</h3>
            <div class="space-y-6 text-lg leading-relaxed" style="color: #4b5563;">
              <p>
                Viking revolutionized home cooking by bringing <strong>commercial-grade performance</strong> to residential kitchens. Since 1987, Viking has been the pioneer in professional-style home appliances, featuring powerful <strong>dual-fuel ranges</strong>, precision refrigeration systems, and robust construction built to withstand intensive daily use.
              </p>
              <p>
                With <strong>sealed burner systems</strong> delivering up to 23,000 BTUs and precision convection ovens with multiple cooking modes, Viking appliances provide the power and control that serious home chefs demand. Their signature <strong>stainless steel construction</strong> and professional aesthetics make them the centerpiece of luxury kitchens worldwide.
              </p>
              <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="p-4 rounded-xl" style="background: rgba(249, 115, 22, 0.1);">
                  <div class="text-2xl font-bold mb-2" style="color: #f97316;">23,000</div>
                  <div class="text-sm font-medium" style="color: #1f2937;">BTU Maximum Output</div>
                </div>
                <div class="p-4 rounded-xl" style="background: rgba(249, 115, 22, 0.1);">
                  <div class="text-2xl font-bold mb-2" style="color: #f97316;">1987</div>
                  <div class="text-sm font-medium" style="color: #1f2937;">Pioneer Since</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img src="/assets/img/vikingAppliance.webp" alt="Viking professional range with stainless steel construction and dual-fuel capability" class="w-full h-auto rounded-2xl shadow-2xl">
            <div class="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl" style="background: #ffffff;">
              <div class="text-2xl font-bold mb-1" style="color: #0c2a3b;">Pro</div>
              <div class="text-sm font-medium" style="color: #6b7280;">Grade</div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <div class="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style="background: rgba(249, 115, 22, 0.1);">
              <svg class="w-8 h-8" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4" style="color: #1f2937;">Dual-Fuel Technology</h3>
            <p style="color: #6b7280;">Combines gas cooking precision with electric oven consistency for optimal culinary performance in every dish.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <div class="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style="background: rgba(249, 115, 22, 0.1);">
              <svg class="w-8 h-8" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6.14-11.76a1 1 0 011.5.98L10 8v1a1 1 0 01-1 1H8a1 1 0 110-2h1V8l.64-3.24z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4" style="color: #1f2937;">Precision Control</h3>
            <p style="color: #6b7280;">Advanced temperature management and precise flame control for consistent, restaurant-quality results.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <div class="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style="background: rgba(249, 115, 22, 0.1);">
              <svg class="w-8 h-8" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM6 9a1 1 0 112 0 1 1 0 01-2 0zm6 0a1 1 0 112 0 1 1 0 01-2 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4" style="color: #1f2937;">Commercial Construction</h3>
            <p style="color: #6b7280;">Heavy-duty stainless steel construction built to withstand the demands of professional kitchen use.</p>
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
              <span style="color: #f97316;">Viking Appliance</span> 
              Repair Excellence
            </h2>
            
            <div class="space-y-6 text-lg leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
              <p>
                At Easy Fix Appliance, we've specialized in Viking appliance repairs for over <strong>15 years</strong>, making us the Bay Area's most trusted Viking service provider. Our factory-certified technicians understand the precision engineering and robust construction that make Viking appliances the choice of professional chefs.
              </p>
              <p>
                We serve <strong>San Mateo, Palo Alto, Foster City, San Francisco</strong>, and the entire Bay Area with comprehensive Viking repair services. From dual-fuel range repairs to professional refrigeration service, we use only <strong>genuine Viking parts</strong> and advanced diagnostic tools to restore your appliances to peak performance.
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
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Viking-authorized service technicians</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style="background: rgba(249, 115, 22, 0.2);">
                  <svg class="w-6 h-6" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2" style="color: #ffffff;">Genuine Viking Parts</h3>
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
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Emergency repairs available 24/7</p>
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
                <h3 class="text-3xl font-bold mb-4" style="color: #ffffff;">Viking Appliances We Service</h3>
                <p class="text-lg" style="color: rgba(255, 255, 255, 0.9);">Complete repair solutions for all Viking models</p>
              </div>
              
              <div class="space-y-4">
                <div class="p-4 rounded-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
                  <h4 class="font-bold mb-2" style="color: #ffffff;">Professional Ranges & Cooktops</h4>
                  <ul class="text-sm space-y-1" style="color: rgba(255, 255, 255, 0.8);">
                    <li>• Dual-fuel range repairs</li>
                    <li>• Gas burner ignition issues</li>
                    <li>• Oven temperature calibration</li>
                    <li>• Control panel replacements</li>
                  </ul>
                </div>
                
                <div class="p-4 rounded-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
                  <h4 class="font-bold mb-2" style="color: #ffffff;">Refrigeration Systems</h4>
                  <ul class="text-sm space-y-1" style="color: rgba(255, 255, 255, 0.8);">
                    <li>• Built-in refrigerator service</li>
                    <li>• Ice maker troubleshooting</li>
                    <li>• Temperature control repairs</li>
                    <li>• Compressor replacements</li>
                  </ul>
                </div>
                
                <div class="p-4 rounded-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
                  <h4 class="font-bold mb-2" style="color: #ffffff;">Dishwashers & Ventilation</h4>
                  <ul class="text-sm space-y-1" style="color: rgba(255, 255, 255, 0.8);">
                    <li>• Professional dishwasher repairs</li>
                    <li>• Range hood maintenance</li>
                    <li>• Ventilation system service</li>
                    <li>• Filter cleaning & replacement</li>
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
            Get answers to common questions about Viking appliance repairs in the Bay Area
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">How durable are Viking appliances?</h3>
            <p style="color: #6b7280;">Viking appliances are built with commercial-grade construction and typically last 15-20 years with proper maintenance, often outlasting conventional appliances.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">Do you service Viking dual-fuel ranges?</h3>
            <p style="color: #6b7280;">Yes, we specialize in Viking dual-fuel range repairs, including gas burner issues, electric oven problems, and control system malfunctions.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">Are Viking parts readily available?</h3>
            <p style="color: #6b7280;">We maintain an extensive inventory of genuine Viking parts and can quickly source specialized components to minimize repair downtime.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">What's covered under your warranty?</h3>
            <p style="color: #6b7280;">Our 2-year warranty covers all parts and labor for Viking repairs, ensuring your investment is protected with comprehensive coverage.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20" style="background: linear-gradient(to right, #0c2a3b, #1C6E8C, #f97316);">
      <div class="container mx-auto px-4 max-w-screen-xl text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-8" style="color: #ffffff;">
            Ready to Restore Your Viking Appliances?
          </h2>
          <p class="text-xl lg:text-2xl mb-12" style="color: rgba(255, 255, 255, 0.9);">
            Don't let appliance issues compromise your professional kitchen experience. Our certified technicians are ready to provide expert Viking repair services with same-day availability throughout the Bay Area.
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
  title: 'Viking Appliance Repair Services | Bay Area Professional Kitchen Specialists',
  meta: [
    {
      name: 'description',
      content: 'Expert Viking appliance repairs in Bay Area. Factory-certified technicians for professional ranges, refrigeration, and dual-fuel systems. Same-day service, genuine parts, 2-year warranty. Call (415) 941-4144'
    },
    {
      name: 'keywords',
      content: 'Viking appliance repair, Viking range repair, professional kitchen appliances, dual-fuel range service, Bay Area appliance repair, San Mateo Viking repair, certified technicians'
    },
    {
      property: 'og:title',
      content: 'Viking Appliance Repair Services | Bay Area Professional Kitchen Specialists'
    },
    {
      property: 'og:description', 
      content: 'Factory-certified Viking appliance repair services in the Bay Area. Professional kitchen specialists with same-day service and genuine Viking parts.'
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
        "name": "Easy Fix Appliance - Viking Repair Specialists",
        "description": "Factory-certified Viking appliance repair services in the Bay Area",
        "url": "https://easyfixappliance.com/viking",
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
          "Viking Appliance Repair",
          "Professional Range Repair",
          "Dual-Fuel System Service",
          "Viking Refrigeration Repair",
          "Commercial Kitchen Appliance Service"
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