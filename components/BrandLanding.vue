<template>
  <div class="pb-[72px] lg:pb-0">
    <Navbar />

    <!-- Hero Section -->
    <header class="relative h-[75vh] lg:h-[85vh] overflow-hidden mt-16 lg:mt-20" :style="{ background: brand.darkBg, backgroundImage: brand.heroGradient }">
      <!-- Background Elements -->
      <div class="absolute top-16 left-12 w-20 h-20 rounded-full blur-lg animate-bounce" :style="{ background: `${brand.accentColor}40`, animationDelay: '0.5s' }"></div>
      <div class="absolute bottom-40 right-20 w-36 h-36 rounded-full blur-xl animate-pulse delay-1000" :style="{ background: `${brand.primaryColor}33` }"></div>
      <div class="absolute top-1/3 right-1/4 w-16 h-16 rounded-full blur-md animate-pulse delay-500" :style="{ background: `${brand.accentColor}4D` }"></div>

      <!-- Hero Content -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div class="max-w-5xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 rounded-full mb-8 border" style="background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(8px); border-color: rgba(255, 255, 255, 0.3);">
            <svg class="w-6 h-6 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold text-lg text-white">{{ brand.badgeText }}</span>
          </div>

          <h1 class="text-2xl sm:text-4xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-tight text-white">
            Professional {{ brand.name }}
            <span class="block" :style="{ color: brand.accentColor }">Appliance Repair Services</span>
          </h1>

          <p class="text-base sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed" style="color: rgba(255, 255, 255, 0.9);" v-html="brand.heroDescription"></p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-16">
            <a href="tel:4159414144" class="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5 font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-base sm:text-xl min-h-[48px] sm:min-h-[70px] touch-manipulation" :style="{ background: `linear-gradient(to right, ${brand.primaryColor}, ${brand.accentColor})`, color: '#ffffff' }">
              <svg class="w-5 h-5 mr-3 sm:w-7 sm:h-7 sm:mr-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now: (415) 941-4144
            </a>

            <NuxtLink to="/booking" class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5 border-3 font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-2 text-base sm:text-xl min-h-[48px] sm:min-h-[70px] hover:bg-white hover:text-primary touch-manipulation" style="border-color: #ffffff; color: #ffffff; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
              <svg class="w-5 h-5 mr-3 sm:w-7 sm:h-7 sm:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
              </svg>
              Schedule Service Online
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- About Section -->
    <section class="py-10 sm:py-16 lg:py-32" style="background: linear-gradient(to bottom right, #f8fafc, #ffffff);">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="text-center mb-8 sm:mb-16">
          <div class="inline-flex items-center px-6 py-3 rounded-full mb-4 sm:mb-8" :style="{ background: `${brand.accentColor}1A` }">
            <svg class="w-6 h-6 mr-3" :style="{ color: brand.accentColor }" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            <span class="font-bold text-lg" style="color: #2d3436;">{{ brand.aboutSubtitle }}</span>
          </div>

          <h2 class="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-8 leading-tight" style="color: #1f2937;">
            {{ brand.aboutTitle.split(':')[0] }}:
            <span class="text-transparent bg-clip-text" :style="{ backgroundImage: `linear-gradient(to right, ${brand.primaryColor}, ${brand.accentColor})` }">{{ brand.aboutTitle.split(':')[1] }}</span>
          </h2>

          <p class="text-base sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style="color: #6b7280;">
            {{ brand.tagline }}. Discover why {{ brand.name }} has been trusted for {{ brand.yearsLabel.toLowerCase() }}.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-10 sm:mb-20">
          <div>
            <h3 class="text-xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-8" style="color: #1f2937;">{{ brand.aboutSubtitle }}</h3>
            <div class="space-y-6 text-lg leading-relaxed" style="color: #4b5563;">
              <p v-for="(paragraph, index) in brand.aboutText" :key="index" v-html="paragraph"></p>
              <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="p-4 rounded-xl" :style="{ background: `${brand.accentColor}1A` }">
                  <div class="text-2xl font-bold mb-2" :style="{ color: brand.accentColor }">{{ brand.founded }}</div>
                  <div class="text-sm font-medium" style="color: #1f2937;">{{ brand.foundedText }}</div>
                </div>
                <div class="p-4 rounded-xl" :style="{ background: `${brand.accentColor}1A` }">
                  <div class="text-2xl font-bold mb-2" :style="{ color: brand.accentColor }">{{ brand.yearsLabel.split(' ')[0] }}</div>
                  <div class="text-sm font-medium" style="color: #1f2937;">{{ brand.yearsLabel.split(' ').slice(1).join(' ') }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats/Features Box (replaces image) -->
          <div class="relative">
            <div class="p-5 sm:p-8 rounded-3xl shadow-2xl" :style="{ background: `linear-gradient(to bottom right, ${brand.primaryColor}, ${brand.accentColor})` }">
              <div class="text-center mb-4 sm:mb-8">
                <h3 class="text-xl sm:text-3xl font-bold mb-2 text-white">Why Choose Us for {{ brand.name }}?</h3>
                <p class="text-lg" style="color: rgba(255, 255, 255, 0.9);">Bay Area's Trusted {{ brand.name }} Repair Experts</p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4 rounded-xl text-center" style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(8px);">
                  <div class="text-3xl font-bold text-white mb-1">15+</div>
                  <div class="text-sm" style="color: rgba(255, 255, 255, 0.9);">Years Experience</div>
                </div>
                <div class="p-4 rounded-xl text-center" style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(8px);">
                  <div class="text-3xl font-bold text-white mb-1">Same Day</div>
                  <div class="text-sm" style="color: rgba(255, 255, 255, 0.9);">Service Available</div>
                </div>
                <div class="p-4 rounded-xl text-center" style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(8px);">
                  <div class="text-3xl font-bold text-white mb-1">2 Year</div>
                  <div class="text-sm" style="color: rgba(255, 255, 255, 0.9);">Repair Warranty</div>
                </div>
                <div class="p-4 rounded-xl text-center" style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(8px);">
                  <div class="text-3xl font-bold text-white mb-1">100%</div>
                  <div class="text-sm" style="color: rgba(255, 255, 255, 0.9);">Genuine Parts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Features Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in brand.features" :key="index" class="p-5 sm:p-8 rounded-2xl shadow-lg bg-white">
            <div class="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" :style="{ background: `${brand.accentColor}1A` }">
              <svg class="w-8 h-8" :style="{ color: brand.accentColor }" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg sm:text-2xl font-bold mb-4" style="color: #1f2937;">{{ feature.title }}</h3>
            <p style="color: #6b7280;">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section class="py-10 sm:py-16 lg:py-32" :style="{ background: brand.darkBg }">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <div class="inline-flex items-center px-6 py-3 rounded-full mb-4 sm:mb-8" :style="{ background: `${brand.accentColor}33` }">
              <svg class="w-6 h-6 mr-3" :style="{ color: brand.accentColor }" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-bold text-lg text-white">Certified Expertise</span>
            </div>

            <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 leading-tight text-white">
              15+ Years of
              <span :style="{ color: brand.accentColor }"> {{ brand.name }} </span>
              Repair Excellence
            </h2>

            <div class="space-y-6 text-lg leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
              <p>
                At Easy Fix Appliance, we've been the Bay Area's trusted {{ brand.name }} repair specialists for over <strong>15 years</strong>. Our factory-trained technicians understand the sophisticated engineering behind {{ brand.name }}'s precision appliances and use only <strong>genuine {{ brand.name }} parts</strong>.
              </p>
              <p>
                We serve <strong>San Mateo, Palo Alto, Foster City, San Francisco</strong>, and the entire Bay Area with comprehensive {{ brand.name }} repair services. From diagnostics to complete repairs, we use specialized equipment to restore your appliances to factory specifications.
              </p>
            </div>

            <!-- Key Benefits -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 sm:mt-12">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" :style="{ background: `${brand.accentColor}33` }">
                  <svg class="w-6 h-6" :style="{ color: brand.accentColor }" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2 text-white">Factory Certification</h3>
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">{{ brand.name }}-authorized service technicians</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" :style="{ background: `${brand.accentColor}33` }">
                  <svg class="w-6 h-6" :style="{ color: brand.accentColor }" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2 text-white">Genuine {{ brand.name }} Parts</h3>
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Only authentic replacement components</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" :style="{ background: `${brand.accentColor}33` }">
                  <svg class="w-6 h-6" :style="{ color: brand.accentColor }" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2 text-white">Same-Day Service</h3>
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Same-day & after-hours repairs available</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" :style="{ background: `${brand.accentColor}33` }">
                  <svg class="w-6 h-6" :style="{ color: brand.accentColor }" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2 text-white">2-Year Warranty</h3>
                  <p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Comprehensive coverage on all repairs</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Service Categories -->
          <div class="relative">
            <div class="p-5 sm:p-8 rounded-3xl" :style="{ background: `linear-gradient(to bottom right, #1a1a1a, ${brand.accentColor})` }">
              <div class="text-center mb-4 sm:mb-8">
                <h3 class="text-xl sm:text-3xl font-bold mb-4 text-white">{{ brand.name }} Appliances We Service</h3>
                <p class="text-lg" style="color: rgba(255, 255, 255, 0.9);">Complete repair solutions for all {{ brand.name }} models</p>
              </div>

              <div class="space-y-4">
                <div v-for="(category, index) in brand.serviceCategories" :key="index" class="p-4 rounded-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
                  <h4 class="font-bold mb-2 text-white">{{ category.title }}</h4>
                  <ul class="text-sm space-y-1" style="color: rgba(255, 255, 255, 0.8);">
                    <li v-for="(item, idx) in category.items" :key="idx">- {{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-10 sm:py-16 lg:py-32" style="background: linear-gradient(to bottom right, #f8fafc, #ffffff);">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="text-center mb-8 sm:mb-16">
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8" style="color: #1f2937;">
            Frequently Asked Questions
          </h2>
          <p class="text-base sm:text-xl max-w-3xl mx-auto" style="color: #6b7280;">
            Get answers to common questions about {{ brand.name }} appliance repairs in the Bay Area
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div v-for="(faq, index) in brand.faqs" :key="index" class="p-5 sm:p-8 rounded-2xl shadow-lg bg-white">
            <h3 class="text-lg sm:text-xl font-bold mb-4" style="color: #1f2937;">{{ faq.question }}</h3>
            <p style="color: #6b7280;">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-10 sm:py-16 lg:py-20" :style="{ background: `linear-gradient(to right, ${brand.darkBg}, #1a1a1a, ${brand.accentColor})` }">
      <div class="container mx-auto px-4 max-w-screen-xl text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 text-white">
            Ready to Restore Your {{ brand.name }} Appliances?
          </h2>
          <p class="text-base sm:text-xl lg:text-2xl mb-8 sm:mb-12" style="color: rgba(255, 255, 255, 0.9);">
            Don't let appliance issues compromise your experience. Our certified technicians are ready to provide expert {{ brand.name }} repair services with same-day availability throughout the Bay Area.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a href="tel:4159414144" class="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 sm:px-12 sm:py-6 font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-base sm:text-xl min-h-[48px] sm:min-h-[70px] touch-manipulation" :style="{ background: '#ffffff', color: brand.darkBg }">
              <svg class="w-5 h-5 mr-3 sm:w-7 sm:h-7 sm:mr-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now: (415) 941-4144
            </a>

            <NuxtLink to="/booking" class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 sm:px-12 sm:py-6 border-3 font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-2 text-base sm:text-xl min-h-[48px] sm:min-h-[70px] hover:bg-white hover:text-primary touch-manipulation" style="border-color: #ffffff; color: #ffffff; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
              <svg class="w-5 h-5 mr-3 sm:w-7 sm:h-7 sm:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

    <!-- Sticky Mobile CTA Bar -->
    <div
      class="fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ease-out"
      :class="showStickyCta ? 'translate-y-0' : 'translate-y-full'"
      :style="{ paddingBottom: 'env(safe-area-inset-bottom)' }"
    >
      <div class="flex gap-2 px-3 py-2 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <a
          href="tel:4159414144"
          class="flex-1 inline-flex items-center justify-center px-4 py-3 font-bold rounded-xl text-sm min-h-[48px] touch-manipulation active:scale-[0.97] transition-transform text-white"
          :style="{ background: `linear-gradient(to right, ${brand.primaryColor}, ${brand.accentColor})` }"
        >
          <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          Call Now
        </a>
        <NuxtLink
          to="/booking"
          class="flex-1 inline-flex items-center justify-center px-4 py-3 font-bold rounded-xl text-sm min-h-[48px] touch-manipulation active:scale-[0.97] transition-transform border-2"
          style="background: #ffffff; color: #1f2937; border-color: #e5e7eb;"
        >
          <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
          </svg>
          Book Online
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  brand: {
    type: Object,
    required: true
  }
});

// Sticky CTA visibility
const showStickyCta = ref(false);

const handleScroll = () => {
  const threshold = window.innerHeight * 0.75;
  showStickyCta.value = window.scrollY > threshold;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// SEO optimization
useHead({
  title: props.brand.seo.title,
  meta: [
    { name: 'description', content: props.brand.seo.description },
    { name: 'keywords', content: props.brand.seo.keywords },
    { property: 'og:title', content: props.brand.seo.title },
    { property: 'og:description', content: props.brand.seo.description },
    { property: 'og:type', content: 'website' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Easy Fix Appliance - ${props.brand.name} Repair Specialists`,
        "description": props.brand.seo.description,
        "url": `https://easyfixappliance.com/${props.brand.slug}`,
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
        "serviceType": props.brand.serviceTypes,
        "openingHours": "Mo-Su 08:00-20:00",
        "priceRange": "$$$"
      })
    }
  ]
});
</script>
