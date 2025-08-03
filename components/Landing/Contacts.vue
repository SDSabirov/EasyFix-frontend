<template>
  <section id="contacts" class="bg-white py-16 lg:py-24">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
          <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          <span class="text-primary font-semibold text-sm">Contact Us</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Get in Touch with Easy Fix Appliance
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Ready to schedule a repair or have questions about our services? Our friendly team is here to help you get your luxury appliances back to perfect working condition.
        </p>
      </div>

      <!-- Main Contact Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Phone Contact -->
          <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white">
            <div class="flex items-start space-x-6">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold mb-3">Call or Text Us</h3>
                <p class="text-white/90 mb-4">Available for emergency repairs 24/7</p>
                <p class="text-lg mb-2">📞 Regular Service: Mon-Fri 8am-8pm</p>
                <p class="text-lg mb-4">🚨 Emergency Service: Weekends & Holidays</p>
                
                <div class="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:4159414144"
                    class="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 min-h-[48px] bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation"
                  >
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span class="text-sm sm:text-base">Call (415) 941-4144</span>
                  </a>
                  <a 
                    href="sms:14159414144"
                    class="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 min-h-[48px] border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 touch-manipulation"
                  >
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-sm sm:text-base">Text Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Email Contact -->
          <div class="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <div class="flex items-start space-x-6">
              <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Email Support</h3>
                <p class="text-gray-600 mb-4">Send us your questions or service requests</p>
                <a 
                  href="mailto:care@easyfixappliance.com"
                  class="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  care@easyfixappliance.com
                </a>
              </div>
            </div>
          </div>

          <!-- Service Area -->
          <div class="bg-blue-50 rounded-3xl p-8 border border-blue-200">
            <div class="flex items-start space-x-6">
              <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Service Area</h3>
                <p class="text-gray-600 mb-4">Serving the entire San Francisco Bay Area</p>
                <div class="text-sm text-gray-600 space-y-1">
                  <p>• San Francisco & Peninsula</p>
                  <p>• South Bay & Silicon Valley</p>
                  <p>• East Bay & North Bay</p>
                  <p>• Marin & Sonoma Counties</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Service Form -->
        <div class="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div class="mb-8">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              Schedule Service Online
            </h3>
            <p class="text-gray-600">
              Fill out the form below and we'll contact you within 2 hours to schedule your repair appointment.
            </p>
          </div>

          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                <input 
                  type="text" 
                  class="w-full h-12 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-base"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                <input 
                  type="text" 
                  class="w-full h-12 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-base"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
              <input 
                type="tel" 
                class="w-full h-12 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-base"
                placeholder="(___) ___-____"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
              <input 
                type="email" 
                class="w-full h-12 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-base"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">Appliance Brand</label>
              <select class="w-full h-12 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-base">
                <option>Select your appliance brand</option>
                <option>Sub-Zero</option>
                <option>Wolf</option>
                <option>Viking</option>
                <option>Thermador</option>
                <option>KitchenAid</option>
                <option>GE Monogram</option>
                <option>Dacor</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">Describe the Issue</label>
              <textarea 
                rows="4" 
                class="w-full min-h-[120px] px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-base resize-y"
                placeholder="Please describe what's wrong with your appliance..."
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full min-h-[48px] bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 touch-manipulation text-base"
            >
              Schedule My Repair
            </button>
          </form>
        </div>
      </div>

      <!-- Payment Methods -->
      <div class="bg-gray-50 rounded-3xl p-8 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">
          Convenient Payment Options
        </h3>
        <p class="text-gray-600 mb-8">
          We accept all major payment methods for your convenience
        </p>
        
        <div class="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8">
          <div class="bg-blue-900 rounded-lg p-3 sm:p-4 shadow-sm border border-blue-800 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[48px] min-w-[64px] flex items-center justify-center">
            <img :src="visaLogo" alt="Visa" class="h-5 sm:h-6 max-w-full object-contain" />
          </div>
          <div class="bg-blue-900 rounded-lg p-3 sm:p-4 shadow-sm border border-blue-800 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[48px] min-w-[64px] flex items-center justify-center">
            <img :src="mastercardLogo" alt="Mastercard" class="h-5 sm:h-6 max-w-full object-contain" />
          </div>
          <div class="bg-blue-900 rounded-lg p-3 sm:p-4 shadow-sm border border-blue-800 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[48px] min-w-[64px] flex items-center justify-center">
            <img :src="amexLogo" alt="American Express" class="h-5 sm:h-6 max-w-full object-contain" />
          </div>
          <div class="bg-blue-900 rounded-lg p-3 sm:p-4 shadow-sm border border-blue-800 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[48px] min-w-[64px] flex items-center justify-center">
            <img :src="discoverLogo" alt="Discover" class="h-5 sm:h-6 max-w-full object-contain" />
          </div>
          <div class="bg-blue-900 rounded-lg p-3 sm:p-4 shadow-sm border border-blue-800 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[48px] min-w-[64px] flex items-center justify-center">
            <img :src="applePayLogo" alt="Apple Pay" class="h-5 sm:h-6 max-w-full object-contain" />
          </div>
          <div class="bg-blue-900 rounded-lg p-3 sm:p-4 shadow-sm border border-blue-800 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[48px] min-w-[64px] flex items-center justify-center">
            <img :src="googlePayLogo" alt="Google Pay" class="h-5 sm:h-6 max-w-full object-contain" />
          </div>
          <div class="bg-blue-900 rounded-lg p-3 sm:p-4 shadow-sm border border-blue-800 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[48px] min-w-[64px] flex items-center justify-center">
            <img :src="venmoLogo" alt="Venmo" class="h-5 sm:h-6 max-w-full object-contain" />
          </div>
          <div class="bg-blue-900 rounded-lg p-3 sm:p-4 shadow-sm border border-blue-800 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[48px] min-w-[64px] flex items-center justify-center">
            <img :src="zelleLogo" alt="Zelle" class="h-5 sm:h-6 max-w-full object-contain" />
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div class="flex items-center justify-center">
            <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Secure Processing
          </div>
          <div class="flex items-center justify-center">
            <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            No Hidden Fees
          </div>
          <div class="flex items-center justify-center">
            <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Payment After Service
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// Import payment method logos
import visaLogo from '/assets/icons/visa.svg'
import mastercardLogo from '/assets/icons/mastercard.svg'
import amexLogo from '/assets/icons/amex.svg'
import discoverLogo from '/assets/icons/discover.svg'
import applePayLogo from '/assets/icons/applepay.svg'
import googlePayLogo from '/assets/icons/googlepay.svg'
import venmoLogo from '/assets/icons/venmo.svg'
import zelleLogo from '/assets/icons/zelle.svg'
</script>
