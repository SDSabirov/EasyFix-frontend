<script setup>
const { phoneNumber, phoneDisplay, bookingUrl } = useContact()

useHead({
  title: 'All Appliance Brands We Service | Easy Fix Appliance',
  meta: [
    {
      name: 'description',
      content: 'Easy Fix Appliance services ALL major appliance brands including Samsung, LG, Whirlpool, Maytag, Frigidaire, Bosch, GE, Kenmore, and more. Full-service repair for refrigerators, washers, dryers, ovens, and dishwashers in the Bay Area.'
    }
  ]
})

const applianceTypes = [
  'Refrigerators & Freezers',
  'Washers & Dryers',
  'Dishwashers',
  'Ovens & Ranges',
  'Cooktops & Stoves',
  'Ice Makers',
  'Wine Coolers',
  'Built-In Appliances'
]

const brandExamples = 'Samsung, LG, Whirlpool, Maytag, Frigidaire, Bosch, GE, Kenmore, Amana, and many more'
</script>

<template>
  <div>
    <Navbar />
    <main role="main">
      <section class="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 lg:py-24 relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #164863 1px, transparent 0); background-size: 30px 30px;"></div>
        </div>

        <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
          <!-- Hero Section -->
          <div class="text-center mb-16">
            <div class="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-8">
              <svg class="w-6 h-6 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-primary font-bold text-lg">Full Service Repair Shop</span>
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Service <span class="text-primary">ALL Major Brands</span>
            </h1>

            <p class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Beyond our premium brand specializations, we provide expert repair services for
              <strong class="text-gray-900">{{ brandExamples }}</strong>.
            </p>

            <p class="text-lg text-gray-500 max-w-2xl mx-auto">
              If you have an appliance that needs repair, we can help - regardless of the brand.
            </p>
          </div>

          <!-- Appliance Types Grid -->
          <div class="max-w-4xl mx-auto mb-16">
            <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">Appliances We Repair</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                v-for="appliance in applianceTypes"
                :key="appliance"
                class="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700 font-medium">{{ appliance }}</span>
              </div>
            </div>
          </div>

          <!-- Why Choose Us -->
          <div class="max-w-4xl mx-auto mb-16">
            <div class="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Easy Fix Appliance?</h2>
              <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Certified Technicians</h3>
                  <p class="text-gray-600 text-sm">Factory-trained experts with 15+ years of experience</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Same-Day Service</h3>
                  <p class="text-gray-600 text-sm">Fast response times to get your appliances running</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">90-Day Warranty</h3>
                  <p class="text-gray-600 text-sm">All repairs backed by our satisfaction guarantee</p>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="text-center">
            <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 text-white max-w-3xl mx-auto">
              <h3 class="text-2xl lg:text-3xl font-bold mb-4">
                Have an Appliance That Needs Repair?
              </h3>
              <p class="text-lg text-white/90 mb-8">
                Contact us today - we service all major brands!
              </p>

              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  :href="`tel:${phoneNumber}`"
                  class="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  {{ phoneDisplay }}
                </a>

                <NuxtLink
                  :to="bookingUrl"
                  class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
                  </svg>
                  Schedule Service
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Back Link -->
          <div class="text-center mt-8">
            <NuxtLink
              to="/services"
              class="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Services
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
