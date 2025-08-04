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
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold text-lg" style="color: #ffffff;">Certified Sub-Zero & Wolf Specialists</span>
          </div>
          
          <h1 class="text-4xl lg:text-7xl font-bold mb-8 leading-tight" style="color: #ffffff;">
            Professional Sub-Zero & Wolf
            <span class="block" style="color: #f97316;">Appliance Repair Services</span>
          </h1>
          
          <p class="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
            Expert repair services for luxury Sub-Zero refrigeration and Wolf cooking appliances. 
            <strong>Certified technicians</strong> serving the Bay Area with <strong>same-day service</strong> and genuine OEM parts.
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

    <!-- About Sub-Zero & Wolf Section -->
    <section class="py-20 lg:py-32" style="background: linear-gradient(to bottom right, #f8fafc, #ffffff);">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-6 py-3 rounded-full mb-8" style="background: rgba(12, 42, 59, 0.1);">
            <svg class="w-6 h-6 mr-3" style="color: #0c2a3b;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
            </svg>
            <span class="font-bold text-lg" style="color: #0c2a3b;">Premium Appliance Brands</span>
          </div>
          
          <h2 class="text-4xl lg:text-6xl font-bold mb-8 leading-tight" style="color: #1f2937;">
            Sub-Zero & Wolf: 
            <span class="text-transparent bg-clip-text" style="background-image: linear-gradient(to right, #0c2a3b, #1C6E8C);">Industry Leaders</span>
          </h2>
          
          <p class="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style="color: #6b7280;">
            Discover why Sub-Zero and Wolf appliances represent the pinnacle of luxury kitchen technology and why professional repair services are essential for maintaining their performance.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 class="text-3xl lg:text-4xl font-bold mb-8" style="color: #1f2937;">Sub-Zero: Revolutionary Refrigeration</h3>
            <div class="space-y-6 text-lg leading-relaxed" style="color: #4b5563;">
              <p>
                Sub-Zero pioneered <strong>dual refrigeration technology</strong>, featuring separate cooling systems for fresh food and freezer compartments. This innovative approach prevents odor transfer and maintains optimal humidity levels, keeping your food fresher up to <strong>3x longer</strong> than conventional refrigerators.
              </p>
              <p>
                With <strong>NASA-inspired air purification</strong> systems and precision temperature control within ±1°F, Sub-Zero refrigerators create the perfect environment for food preservation. Their built-in and integrated designs seamlessly blend with luxury kitchen aesthetics while delivering unmatched performance.
              </p>
              <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="p-4 rounded-xl" style="background: rgba(249, 115, 22, 0.1);">
                  <div class="text-2xl font-bold mb-2" style="color: #f97316;">20+</div>
                  <div class="text-sm font-medium" style="color: #1f2937;">Years Average Lifespan</div>
                </div>
                <div class="p-4 rounded-xl" style="background: rgba(249, 115, 22, 0.1);">
                  <div class="text-2xl font-bold mb-2" style="color: #f97316;">±1°F</div>
                  <div class="text-sm font-medium" style="color: #1f2937;">Temperature Precision</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img src="/assets/img/subzerowolfappliance.webp" alt="Sub-Zero built-in refrigerator with dual refrigeration technology" class="w-full h-auto rounded-2xl shadow-2xl">
            <div class="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl" style="background: #ffffff;">
              <div class="text-2xl font-bold mb-1" style="color: #0c2a3b;">Dual</div>
              <div class="text-sm font-medium" style="color: #6b7280;">Refrigeration</div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="lg:order-2">
            <h3 class="text-3xl lg:text-4xl font-bold mb-8" style="color: #1f2937;">Wolf: Professional-Grade Cooking</h3>
            <div class="space-y-6 text-lg leading-relaxed" style="color: #4b5563;">
              <p>
                Wolf cooking appliances bring <strong>restaurant-quality performance</strong> to residential kitchens. With <strong>dual-stacked burners</strong> delivering up to 20,000 BTUs and precise <strong>red knobs</strong> that have become synonymous with culinary excellence, Wolf ranges are the choice of professional chefs worldwide.
              </p>
              <p>
                From <strong>convection ovens</strong> with multiple cooking modes to <strong>induction cooktops</strong> with instant heat response, Wolf appliances feature advanced technology that ensures consistent, professional results. Their distinctive design and robust construction make them a centerpiece of luxury kitchens.
              </p>
              <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="p-4 rounded-xl" style="background: rgba(249, 115, 22, 0.1);">
                  <div class="text-2xl font-bold mb-2" style="color: #f97316;">20,000</div>
                  <div class="text-sm font-medium" style="color: #1f2937;">BTU Power Output</div>
                </div>
                <div class="p-4 rounded-xl" style="background: rgba(249, 115, 22, 0.1);">
                  <div class="text-2xl font-bold mb-2" style="color: #f97316;">8</div>
                  <div class="text-sm font-medium" style="color: #1f2937;">Cooking Modes</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="lg:order-1 relative">
            <img src="/assets/img/wolfCooking.jpg" alt="Wolf professional range with red knobs and dual-stacked burners" class="w-full h-auto rounded-2xl shadow-2xl">
            <div class="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl" style="background: #ffffff;">
              <div class="text-2xl font-bold mb-1" style="color: #dc2626;">Red</div>
              <div class="text-sm font-medium" style="color: #6b7280;">Knobs</div>
            </div>
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
              <span style="color: #f97316;">Sub-Zero & Wolf</span> 
              Repair Excellence
            </h2>
            
            <div class="space-y-6 text-lg leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
              <p>
                At Easy Fix Appliance, we've been the Bay Area's trusted Sub-Zero and Wolf repair specialists for over <strong>15 years</strong>. Our factory-trained technicians understand the intricate engineering behind these premium appliances, from Sub-Zero's dual refrigeration systems to Wolf's precise temperature controls.
              </p>
              <p>
                We serve <strong>San Mateo, Palo Alto, Foster City, San Francisco</strong>, and the entire Bay Area with same-day emergency service and comprehensive maintenance programs. Using only <strong>genuine OEM parts</strong> and advanced diagnostic equipment, we ensure your luxury appliances perform at their peak for decades.
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
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Authorized service technicians with manufacturer training</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style="background: rgba(249, 115, 22, 0.2);">
                  <svg class="w-6 h-6" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2" style="color: #ffffff;">Genuine OEM Parts</h3>
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Only authentic Sub-Zero & Wolf replacement parts</p>
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
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Emergency repairs within 24 hours</p>
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
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Extended warranty on all repairs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="p-8 rounded-3xl" style="background: linear-gradient(to bottom right, #1C6E8C, #f97316);">
              <div class="text-center mb-8">
                <h3 class="text-3xl font-bold mb-4" style="color: #ffffff;">Common Issues We Fix</h3>
                <p class="text-lg" style="color: rgba(255, 255, 255, 0.9);">Expert solutions for all Sub-Zero & Wolf problems</p>
              </div>
              
              <div class="space-y-4">
                <div class="p-4 rounded-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
                  <h4 class="font-bold mb-2" style="color: #ffffff;">Sub-Zero Refrigeration Issues</h4>
                  <ul class="text-sm space-y-1" style="color: rgba(255, 255, 255, 0.8);">
                    <li>• Temperature control problems</li>
                    <li>• Ice maker malfunctions</li>
                    <li>• Condenser fan repairs</li>
                    <li>• Door seal replacements</li>
                  </ul>
                </div>
                
                <div class="p-4 rounded-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
                  <h4 class="font-bold mb-2" style="color: #ffffff;">Wolf Cooking Appliance Repairs</h4>
                  <ul class="text-sm space-y-1" style="color: rgba(255, 255, 255, 0.8);">
                    <li>• Burner ignition issues</li>
                    <li>• Oven calibration problems</li>
                    <li>• Control panel malfunctions</li>
                    <li>• Convection fan repairs</li>
                  </ul>
                </div>
                
                <div class="p-4 rounded-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
                  <h4 class="font-bold mb-2" style="color: #ffffff;">Preventive Maintenance</h4>
                  <ul class="text-sm space-y-1" style="color: rgba(255, 255, 255, 0.8);">
                    <li>• Annual service inspections</li>
                    <li>• Filter replacements</li>
                    <li>• Performance optimization</li>
                    <li>• Extended warranty plans</li>
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
            Get answers to common questions about Sub-Zero and Wolf appliance repairs in the Bay Area
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">How long do Sub-Zero appliances typically last?</h3>
            <p style="color: #6b7280;">Sub-Zero appliances are built to last 20+ years with proper maintenance. Regular service every 12-18 months can extend their lifespan even further.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">Do you provide same-day Wolf range repairs?</h3>
            <p style="color: #6b7280;">Yes, we offer same-day emergency service for Wolf appliances throughout the Bay Area, including San Mateo, Palo Alto, and San Francisco.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">Are your technicians factory-certified?</h3>
            <p style="color: #6b7280;">All our technicians are factory-trained and certified by Sub-Zero and Wolf, ensuring expert knowledge of these premium appliance brands.</p>
          </div>
          
          <div class="p-8 rounded-2xl shadow-lg" style="background: #ffffff;">
            <h3 class="text-xl font-bold mb-4" style="color: #1f2937;">What warranty do you provide on repairs?</h3>
            <p style="color: #6b7280;">We provide a 2-year warranty on all parts and labor for Sub-Zero and Wolf repairs, giving you peace of mind and protection for your investment.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20" style="background: linear-gradient(to right, #0c2a3b, #1C6E8C, #f97316);">
      <div class="container mx-auto px-4 max-w-screen-xl text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-8" style="color: #ffffff;">
            Ready to Restore Your Sub-Zero & Wolf Appliances?
          </h2>
          <p class="text-xl lg:text-2xl mb-12" style="color: rgba(255, 255, 255, 0.9);">
            Don't let appliance issues disrupt your luxury kitchen experience. Our certified technicians are ready to provide expert Sub-Zero and Wolf repair services with same-day availability.
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
  title: 'Sub-Zero & Wolf Appliance Repair Services | Bay Area Certified Technicians',
  meta: [
    {
      name: 'description',
      content: 'Expert Sub-Zero refrigeration and Wolf cooking appliance repairs in Bay Area. Factory-certified technicians, same-day service, genuine OEM parts, 2-year warranty. Call (415) 941-4144'
    },
    {
      name: 'keywords',
      content: 'Sub-Zero repair, Wolf appliance repair, luxury appliance service, Bay Area appliance repair, San Mateo appliance repair, certified technicians, same-day service'
    },
    {
      property: 'og:title',
      content: 'Sub-Zero & Wolf Appliance Repair Services | Bay Area Certified Technicians'
    },
    {
      property: 'og:description', 
      content: 'Factory-certified Sub-Zero and Wolf appliance repair services in the Bay Area. Same-day service, genuine OEM parts, 2-year warranty.'
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
        "name": "Easy Fix Appliance - Sub-Zero & Wolf Repair",
        "description": "Factory-certified Sub-Zero and Wolf appliance repair services in the Bay Area",
        "url": "https://easyfixappliance.com/subzero-wolf-repairs",
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
          "Sub-Zero Repair",
          "Wolf Appliance Repair",
          "Luxury Appliance Service",
          "Refrigeration Repair",
          "Professional Range Repair"
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