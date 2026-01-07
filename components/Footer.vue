<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" id="footer">
    <div class="max-w-screen-xl mx-auto px-4 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="rounded-full"
            >
              <path
                d="M7.80934 8.52637L9.85214 12.745L8 16.5L5.5 20.5L5.52335 25.3528L1 26.8869L2.0214 32.9751H6.83658L8.00389 35.2761L4.64786 39.1592L8.92802 43.953L12.9163 41.8437L15.2996 43.4736L14.3268 47.7881L20.2607 50.185L22.3521 46.2541L25.6109 46.5417L27.1187 51L33.1012 50.185V45.3912L35.9222 44.4803L39.3268 47.4525L44.4825 43.4736L41.9047 39.1592L44.4825 35.8035L46 31.5L46.5253 26.5513L51 24.9214L50.0759 18.9291H45.358L44.142 15.9089L47.2062 12.745L42.9747 7.90316L39.035 10.1083L36.8463 8.52637L37.7218 3.9722L31.7393 1.95877L29.4533 5.50623L26.2918 5.17066L24.6868 1L18.4611 1.95877V6.56088L16.0292 7.90316L12.3327 4.88303L7.80934 8.52637Z"
                fill="#164863"
                stroke="white"
                stroke-width="0.5"
              />
              <path
                d="M24.8655 21.1518L4.72414 20.7782L7.30532 15.8288H24.3259C24.3259 15.0817 26.6803 12 30.4572 12C33.4787 12 35.4113 14.3658 35.9999 15.5486H30.7515L28.9857 18.1634L30.7515 20.7782H35.9999C35.3459 21.8521 33.8417 24 30.4572 24C27.5927 24 25.5358 22.1012 24.8655 21.1518Z"
                fill="#F8EDE3"
              />
              <path
                d="M27.0408 30.9243L46.7851 31.3078L45 36.5L27.5759 36.3893C27.5759 37.1564 25.2412 40.3203 21.4961 40.3203C18.5 40.3203 16.5836 37.8914 16 36.677L21.2043 36.677L22.9552 33.9924L21.2043 31.3078L16 31.3078C16.6485 30.2053 18.1401 28.0001 21.4961 28.0001C24.3366 28.0001 26.3761 29.9496 27.0408 30.9243Z"
                fill="#F8EDE3"
              />
            </svg>
            <div>
              <div class="flex items-baseline">
                <span class="text-2xl font-bold text-white">Easy</span>
                <span class="text-2xl font-bold text-orange-400">Fix</span>
              </div>
              <span class="text-sm text-gray-300">Appliance Repair</span>
            </div>
          </div>
          
          <p class="text-gray-300 mb-6 leading-relaxed">
            Your trusted partner for luxury appliance repair in the San Francisco Bay Area. We specialize in Sub-Zero, Wolf, Viking, Thermador, and other premium brands with certified technicians and genuine OEM parts.
          </p>
          
          <!-- Contact Info -->
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <a href="tel:4159414144" class="text-white hover:text-blue-400 transition-colors py-2 min-h-[44px] touch-manipulation inline-block">(415) 941-4144</a>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <a href="mailto:care@easyfixappliance.com" class="text-white hover:text-blue-400 transition-colors py-2 min-h-[44px] touch-manipulation inline-block break-all">care@easyfixappliance.com</a>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-gray-300">San Francisco Bay Area</span>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block py-2 min-h-[44px] touch-manipulation">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block py-2 min-h-[44px] touch-manipulation">
                Services
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#services" class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block py-2 min-h-[44px] touch-manipulation">
                Appliances
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact-us" class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block py-2 min-h-[44px] touch-manipulation">
                Contact Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/booking" class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block py-2 min-h-[44px] touch-manipulation">
                Online Booking
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/blogs" class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block py-2 min-h-[44px] touch-manipulation">
                Blogs
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block py-2 min-h-[44px] touch-manipulation">
                FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/areas" class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block py-2 min-h-[44px] touch-manipulation">
                Service Areas
              </NuxtLink>
            </li>
            <li>
              <button 
                data-modal-target="privacy-modal" 
                data-modal-toggle="privacy-modal" 
                class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block text-left py-2 min-h-[44px] touch-manipulation"
                type="button"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <a href="/sitemap.xml" class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block py-2 min-h-[44px] touch-manipulation">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Service Hours -->
      <div class="bg-gray-800/50 rounded-2xl p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-lg font-semibold text-white mb-3 flex items-center">
              <svg class="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
              Business Hours
            </h4>
            <div class="space-y-2 text-gray-300">
              <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p class="text-orange-400 font-medium">Same-Day & After-Hours Service</p>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold text-white mb-3 flex items-center">
              <svg class="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Why Choose Us
            </h4>
            <div class="space-y-1 text-gray-300">
              <p>✓ Certified Technicians</p>
              <p>✓ Genuine OEM Parts</p>
              <p>✓ Same-Day Service Available</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-700">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm">
            © 2026 <span class="text-white font-medium">Easy Fix Appliance™</span>. All Rights Reserved.
          </div>
          
          <!-- Social Links or Certifications -->
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2 text-xs text-gray-400">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div class="flex items-center space-x-2 text-xs text-gray-400">
              <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Factory Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
