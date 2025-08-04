<template>
  <section class="relative min-h-screen flex flex-col overflow-hidden" role="banner">
    <!-- Background Image with Parallax Effect -->
    <div class="absolute inset-0 z-0">
      <img
        class="w-full h-full object-cover scale-105"
        src="/assets/img/kitchenBackground1.webp"
        alt="Professional kitchen with luxury Sub-Zero, Wolf, and Viking appliances in Bay Area home"
        loading="eager"
      />
      <!-- Modern Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/30"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
    </div>
    <!-- Hero Content -->
    <div class="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto text-center w-full">
        <!-- Badge - Hidden on mobile -->
        <div class="hidden sm:inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
          <svg class="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span class="text-white font-semibold text-sm">Certified Luxury Appliance Specialists</span>
        </div>
        
        <!-- Main Heading - Optimized for mobile -->
        <h1 class="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Expert <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Sub-Zero, Wolf & Viking</span> Appliance Repair <span class="hidden sm:inline">Services</span> <span class="hidden md:inline">in San Mateo &</span> Bay Area
        </h1>
        
        <!-- Subheading - Simplified for mobile -->
        <h2 class="text-base sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
          <span class="hidden sm:inline">Certified technicians serving Palo Alto, San Francisco, San Jose, and surrounding Bay Area communities with</span> Same-day appliance repairs <span class="hidden sm:inline">throughout the Bay Area</span>
        </h2>
        
        <!-- Trust Indicators - Reduced on mobile -->
        <div class="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-12 text-white/80">
          <div class="flex items-center">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-xs sm:text-sm font-medium">Same-Day</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-xs sm:text-sm font-medium">Certified</span>
          </div>
          <div class="hidden sm:flex items-center">
            <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-medium">Genuine OEM Parts</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-xs sm:text-sm font-medium">Warranty</span>
          </div>
        </div>
        
        <!-- CTA Buttons - Optimized for mobile -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
          <a
            href="tel:4159414144"
            class="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-h-[50px] sm:min-h-[56px]"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span class="text-base sm:text-lg">Call Now: (415) 941-4144</span>
            <div class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
          </a>
          
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 min-h-[50px] sm:min-h-[56px]"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
            </svg>
            <span class="text-base sm:text-lg"><span class="hidden sm:inline">Schedule Service</span><span class="sm:hidden">Book</span> Online</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup>


</script>


