<template>
  <section class="bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>
    
    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
          <svg class="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span class="text-white font-semibold text-sm">Trusted Excellence</span>
        </div>
        <h2 class="text-4xl font-bold text-white mb-6">
          Why Choose Easy Fix Appliance?
        </h2>
        <p class="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Our commitment to excellence and customer satisfaction sets us apart as the Bay Area's premier appliance repair service.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div v-for="stat in stats" :key="stat.title" 
             class="group text-center">
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path :d="stat.icon"/>
              </svg>
            </div>
            <div class="text-4xl font-bold text-white mb-2">{{ stat.number }}</div>
            <div class="text-xl font-semibold text-white/90 mb-2">{{ stat.title }}</div>
            <p class="text-white/80 text-sm leading-relaxed">{{ stat.description }}</p>
          </div>
        </div>
      </div>

      <!-- Trust Features -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div v-for="feature in features" :key="feature.title"
             class="group">
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-all duration-300">
                <img :src="feature.icon" :alt="feature.title" class="w-6 h-6 filter brightness-0 invert" />
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-white mb-2">{{ feature.title }}</h4>
                <p class="text-white/80 text-sm leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <h3 class="text-2xl font-bold text-white mb-4">
            Ready to Experience Premium Service?
          </h3>
          <p class="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Easy Fix Appliance for their luxury appliance repair needs.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:4159414144"
              class="group inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg class="w-6 h-6 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Speak to a Technician: (415) 941-4144
            </a>
            
            <NuxtLink 
              to="/booking"
              class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
              </svg>
              Schedule Online
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  {
    number: "15+",
    title: "Years Experience",
    description: "Serving Bay Area with excellence",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    number: "5000+",
    title: "Repairs Completed",
    description: "Satisfied customers across Bay Area",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    number: "24/7",
    title: "Emergency Service",
    description: "Available when you need us most",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    number: "100%",
    title: "Satisfaction Rate",
    description: "Guaranteed quality workmanship",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  }
]

const features = [
  {
    title: "Emergency Service",
    description: "Emergency and same-day service available. Quick response times for urgent repairs.",
    icon: "assets/icons/24hr.svg"
  },
  {
    title: "Flexible Scheduling", 
    description: "Convenient scheduling options that work around your busy lifestyle and availability.",
    icon: "assets/icons/calendar-event.svg"
  },
  {
    title: "Genuine OEM Parts",
    description: "Original manufacturer parts with full warranties for lasting repairs and optimal performance.",
    icon: "assets/icons/patch-check.svg"
  },
  {
    title: "Certified Technicians",
    description: "Factory-trained and authorized technicians with expertise across all major appliance brands.",
    icon: "assets/icons/certificate.svg"
  }
]
</script>