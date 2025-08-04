<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <header class="relative h-[60vh] lg:h-[70vh] overflow-hidden mt-16 lg:mt-20" style="background: #0c2a3b; background-image: linear-gradient(to bottom right, #0c2a3b, #1C6E8C, #f97316);">
      <!-- Professional Background Elements -->
      <div class="absolute top-16 left-12 w-20 h-20 rounded-full blur-lg animate-bounce" style="background: rgba(249, 115, 22, 0.25); animation-delay: 0.5s;"></div>
      <div class="absolute bottom-32 right-20 w-36 h-36 rounded-full blur-xl animate-pulse delay-1000" style="background: rgba(28, 110, 140, 0.2);"></div>
      <div class="absolute top-1/3 right-1/4 w-16 h-16 rounded-full blur-md animate-pulse delay-500" style="background: rgba(251, 191, 36, 0.3);"></div>
      
      <!-- Hero Content -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 rounded-full mb-8 border" style="background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(8px); border-color: rgba(255, 255, 255, 0.3);">
            <svg class="w-6 h-6 mr-3" style="color: #ffffff;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold text-lg" style="color: #ffffff;">Get Your Questions Answered</span>
          </div>
          
          <h1 class="text-4xl lg:text-6xl font-bold mb-8 leading-tight" style="color: #ffffff;">
            Frequently Asked
            <span class="block" style="color: #f97316;">Questions</span>
          </h1>
          
          <p class="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
            Find answers to common questions about our <strong>appliance repair services</strong> in the Bay Area. 
            Can't find what you're looking for? <strong>Call us directly</strong> for personalized assistance.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:4159414144" class="group inline-flex items-center px-10 py-4 font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-lg min-h-[60px]" style="background: linear-gradient(to right, #facc15, #f97316); color: #ffffff;">
              <svg class="w-6 h-6 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now: (415) 941-4144
            </a>
            
            <NuxtLink to="/booking" class="inline-flex items-center px-10 py-4 border-3 font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-2 text-lg min-h-[60px] hover:bg-white hover:text-primary" style="border-color: #ffffff; color: #ffffff; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
              </svg>
              Schedule Service Online
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- FAQ Categories Section -->
    <section class="py-20 lg:py-32" style="background: linear-gradient(to bottom right, #f8fafc, #ffffff);">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <!-- Category Navigation -->
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8" style="color: #1f2937;">Browse by Category</h2>
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="activeCategory = category.id"
              :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1',
                activeCategory === category.id 
                  ? 'text-white shadow-lg' 
                  : 'border-2'
              ]"
              :style="activeCategory === category.id 
                ? 'background: linear-gradient(to right, #0c2a3b, #1C6E8C);' 
                : 'border-color: #0c2a3b; color: #0c2a3b; background: #ffffff;'"
            >
              <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                <path :d="category.icon"/>
              </svg>
              {{ category.name }}
            </button>
          </div>
        </div>

        <!-- FAQ Items -->
        <div class="max-w-4xl mx-auto">
          <div 
            v-for="(faq, index) in filteredFaqs" 
            :key="index"
            class="mb-6 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            style="background: #ffffff;"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
            >
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(249, 115, 22, 0.1);">
                  <svg class="w-5 h-5" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-left" style="color: #1f2937;">{{ faq.question }}</h3>
              </div>
              <svg 
                class="w-6 h-6 transition-transform duration-300"
                :class="{ 'rotate-180': activeFaq === index }"
                style="color: #6b7280;"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            
            <div 
              v-show="activeFaq === index"
              class="px-8 pb-8 animate-fadeIn"
            >
              <div class="pl-14">
                <p class="text-lg leading-relaxed" style="color: #4b5563;" v-html="faq.answer"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Still Have Questions Section -->
    <section class="py-20" style="background: #0c2a3b;">
      <div class="container mx-auto px-4 max-w-screen-xl text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-8" style="color: #ffffff;">
            Still Have Questions?
          </h2>
          <p class="text-xl lg:text-2xl mb-12" style="color: rgba(255, 255, 255, 0.9);">
            Our friendly customer service team is standing by to help you with any questions about appliance repairs, scheduling, or our services.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div class="p-6 rounded-2xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
              <div class="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center" style="background: rgba(249, 115, 22, 0.2);">
                <svg class="w-8 h-8" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3" style="color: #ffffff;">Call Us</h3>
              <p style="color: rgba(255, 255, 255, 0.8);">Speak directly with our experts</p>
              <p class="font-bold text-lg mt-2" style="color: #f97316;">(415) 941-4144</p>
            </div>
            
            <div class="p-6 rounded-2xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
              <div class="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center" style="background: rgba(249, 115, 22, 0.2);">
                <svg class="w-8 h-8" style="color: #f97316;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3" style="color: #ffffff;">Book Online</h3>
              <p style="color: rgba(255, 255, 255, 0.8);">Schedule convenient service</p>
              <p class="font-bold text-lg mt-2" style="color: #f97316;">24/7 Available</p>
            </div>
            
            <div class="p-6 rounded-2xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
              <div class="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center" style="background: rgba(249, 115, 22, 0.2);">
                <svg class="w-8 h-8" style="color: #f97316;" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3" style="color: #ffffff;">Same-Day Service</h3>
              <p style="color: rgba(255, 255, 255, 0.8);">Emergency repairs available</p>
              <p class="font-bold text-lg mt-2" style="color: #f97316;">Fast Response</p>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:4159414144" class="group inline-flex items-center px-12 py-6 font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-xl min-h-[70px]" style="background: #ffffff; color: #0c2a3b;">
              <svg class="w-7 h-7 mr-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call for Immediate Help
            </a>
            
            <NuxtLink to="/contact-us" class="inline-flex items-center px-12 py-6 border-3 font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-2 text-xl min-h-[70px] hover:bg-white hover:text-primary" style="border-color: #ffffff; color: #ffffff; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
              <svg class="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Send Us a Message
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
import { ref, computed } from 'vue';

const activeFaq = ref(null);
const activeCategory = ref('general');

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const categories = [
  {
    id: 'general',
    name: 'General Questions',
    icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 'service',
    name: 'Service & Repairs',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
  },
  {
    id: 'brands',
    name: 'Brand Specific',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
  }
];

const faqs = [
  // General Questions
  {
    category: 'general',
    question: "What types of appliances do you repair?",
    answer: "We repair a comprehensive range of appliances including <strong>refrigerators, freezers, wine coolers, ovens, ranges, cooktops, dishwashers, washing machines, dryers, ice makers, and garbage disposals</strong>. We specialize in luxury brands such as <strong>Sub-Zero, Wolf, Viking, Thermador, KitchenAid, and GE Monogram</strong>, but also service most major appliance brands throughout the Bay Area."
  },
  {
    category: 'general',
    question: "What areas do you serve in the Bay Area?",
    answer: "We proudly serve the entire Bay Area including <strong>San Mateo, Palo Alto, Foster City, San Francisco, Burlingame, Millbrae, San Carlos, Redwood City, Menlo Park, Mountain View, Sunnyvale, Los Altos, Saratoga</strong>, and surrounding communities. Our service area extends throughout San Mateo County and parts of Santa Clara County."
  },
  {
    category: 'general',
    question: "How quickly can you schedule a repair appointment?",
    answer: "We offer <strong>same-day and next-day appointments</strong> to minimize your downtime. For urgent issues, we provide <strong>emergency repair services</strong> with technicians available 24/7. Most appointments can be scheduled within 24-48 hours, depending on your location and the complexity of the repair."
  },
  {
    category: 'general',
    question: "What is your warranty policy on repairs?",
    answer: "We provide a comprehensive <strong>2-year warranty</strong> on all repairs and genuine manufacturer parts. This warranty covers both labor and parts, giving you complete peace of mind. If the same issue recurs within the warranty period, we'll return to fix it at no additional cost to you."
  },
  {
    category: 'general',
    question: "Are your technicians certified and insured?",
    answer: "Yes, all our technicians are <strong>factory-certified</strong> and have extensive training with luxury appliance brands. They undergo continuous education to stay current with the latest technologies. We are fully licensed, bonded, and insured, and all our technicians pass background checks for your safety and security."
  },

  // Service & Repairs
  {
    category: 'service',
    question: "Do you use genuine manufacturer parts?",
    answer: "Absolutely! We exclusively use <strong>genuine OEM (Original Equipment Manufacturer) parts</strong> sourced directly from the manufacturers. This ensures optimal performance, maintains your warranty, and guarantees the longevity of your repair. We maintain an extensive inventory of parts for luxury appliance brands."
  },
  {
    category: 'service',
    question: "How much do appliance repairs typically cost?",
    answer: "Repair costs vary depending on the appliance type, brand, age, and required parts. We provide <strong>free estimates</strong> and transparent pricing before any work begins. Our diagnostic fee is typically <strong>waived when you proceed with the repair</strong>. Most repairs range from $150-$800, which is often much more cost-effective than replacement."
  },
  {
    category: 'service',
    question: "How long does a typical repair take?",
    answer: "Most appliance repairs can be completed within <strong>1-2 hours during the same visit</strong>. However, if specialized parts need to be ordered, it may take 2-7 additional days. We'll always provide you with a clear timeline and keep you informed throughout the process. Complex repairs on luxury appliances may require additional time for precision work."
  },
  {
    category: 'service',
    question: "What should I do to prepare for a service appointment?",
    answer: "Please have your appliance's <strong>model and serial number</strong> ready (usually found on a sticker inside or on the back), provide a detailed description of the problem, ensure clear access to the appliance, and have any relevant warranty information available. This helps our technicians come prepared with the right tools and parts."
  },
  {
    category: 'service',
    question: "Do you offer preventive maintenance services?",
    answer: "Yes! We offer comprehensive <strong>preventive maintenance programs</strong> to extend your appliances' lifespan and prevent costly breakdowns. Our maintenance services include cleaning, calibration, part inspection, and performance optimization. Regular maintenance can increase efficiency by up to 25% and significantly extend appliance life."
  },

  // Brand Specific
  {
    category: 'brands',
    question: "Do you specialize in luxury appliance brands?",
    answer: "Yes, we are <strong>factory-authorized service providers</strong> for luxury brands including <strong>Sub-Zero, Wolf, Viking, Thermador, KitchenAid, and GE Monogram</strong>. Our technicians receive specialized training directly from these manufacturers and have access to proprietary diagnostic tools and genuine parts. We understand the unique engineering and precision required for luxury appliances."
  },
  {
    category: 'brands',
    question: "Can you repair older or discontinued appliance models?",
    answer: "Yes, we have extensive experience with older and discontinued models. We maintain relationships with specialty parts suppliers and can often source hard-to-find components. Our technicians are skilled at working with vintage appliances and can often rebuild or refurbish components when parts are unavailable. We'll always provide honest advice about repair feasibility."
  },
  {
    category: 'brands',
    question: "Do you work on commercial-grade home appliances?",
    answer: "Absolutely! We specialize in <strong>commercial-grade appliances</strong> designed for home use, including professional ranges, commercial refrigerators, and high-performance cooking equipment. Our technicians understand the unique requirements of these powerful appliances and have the expertise to maintain their professional-level performance."
  },
  {
    category: 'brands',
    question: "What makes luxury appliance repair different from standard appliances?",
    answer: "Luxury appliances require <strong>specialized knowledge, proprietary diagnostic tools, and genuine manufacturer parts</strong>. They often feature advanced technologies like dual refrigeration systems, precision temperature controls, and sophisticated electronics. Our factory-trained technicians understand these complex systems and can maintain the precision performance that luxury appliance owners expect."
  },

  // Troubleshooting
  {
    category: 'troubleshooting',
    question: "Why isn't my refrigerator cooling properly?",
    answer: "Common causes include <strong>dirty condenser coils, faulty compressor, thermostat issues, blocked air vents, or refrigerant leaks</strong>. For Sub-Zero units, it could be issues with the dual refrigeration system. Our technicians use advanced diagnostic tools to pinpoint the exact cause and provide efficient repairs to restore optimal cooling performance."
  },
  {
    category: 'troubleshooting',
    question: "Why is my dishwasher not cleaning dishes properly?",
    answer: "This typically results from <strong>clogged spray arms, dirty filters, incorrect water temperature, poor water pressure, or using the wrong detergent</strong>. Hard water deposits can also affect performance. We thoroughly clean all components, check water temperature and pressure, and ensure optimal operation for sparkling clean dishes."
  },
  {
    category: 'troubleshooting',
    question: "What causes my oven to heat unevenly or not reach temperature?",
    answer: "Uneven heating usually indicates <strong>faulty heating elements, damaged door seals, calibration issues, or problems with convection fans</strong>. For professional ranges, it could be burner alignment or gas pressure issues. We perform precision calibration and replace components as needed to ensure accurate, even cooking temperatures."
  },
  {
    category: 'troubleshooting',
    question: "Why is my washing machine making loud noises or vibrating excessively?",
    answer: "Excessive noise or vibration typically stems from <strong>unbalanced loads, worn drum bearings, loose components, or improper leveling</strong>. It could also indicate issues with the suspension system or drive belt. Our technicians perform comprehensive inspections to identify and resolve noise issues, ensuring smooth, quiet operation."
  },
  {
    category: 'troubleshooting',
    question: "What should I do if my appliance stops working completely?",
    answer: "First, check that it's properly plugged in and that circuit breakers haven't tripped. For gas appliances, ensure the gas supply is on. If these basics are fine, <strong>avoid attempting DIY repairs on complex appliances</strong> as this can void warranties and create safety hazards. Contact us immediately for professional diagnosis and repair."
  },

  // Additional General Questions
  {
    category: 'general',
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, cash, and checks. We also offer financing options for larger repairs through approved credit partners. Payment is due upon completion of service, and we provide detailed invoices for your records."
  },
  {
    category: 'service',
    question: "Do you provide emergency repair services?",
    answer: "Yes, we offer <strong>24/7 emergency repair services</strong> for critical appliances like refrigerators, freezers, and other essential units. Emergency service may include additional fees for after-hours calls, but we'll always provide upfront pricing. Call our emergency line for immediate assistance with urgent appliance failures."
  },
  {
    category: 'general',
    question: "How do I know if my appliance is worth repairing vs. replacing?",
    answer: "Our technicians provide honest assessments based on the <strong>appliance's age, condition, repair cost, and expected lifespan</strong>. Generally, if repair costs exceed 50% of replacement value and the appliance is over 10 years old, replacement might be more economical. However, luxury appliances often justify repair due to their superior build quality and longevity."
  }
];

const filteredFaqs = computed(() => {
  return faqs.filter(faq => faq.category === activeCategory.value);
});


// Use proper Nuxt SEO meta
useSeoMeta({
  title: 'Frequently Asked Questions | Appliance Repair Bay Area | Easy Fix Appliance',
  description: 'Get answers to common questions about appliance repair services in Bay Area. Sub-Zero, Wolf, Viking repair FAQs, pricing, warranties, and service areas. Expert technicians available 24/7.',
  keywords: 'appliance repair FAQ, Bay Area appliance service questions, Sub-Zero repair cost, luxury appliance maintenance, same-day appliance repair, certified technicians',
  ogTitle: 'Appliance Repair FAQ | Bay Area Expert Answers',
  ogDescription: 'Find answers to common appliance repair questions. Expert technicians, luxury brand specialists, same-day service in Bay Area.',
  ogType: 'website',
  ogUrl: 'https://easyfixappliance.com/faq'
});

// Use Nuxt SEO schema.org composable to properly define FAQ schema
useSchemaOrg([
  defineFAQPage({
    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '').trim()
      }
    }))
  })
]);
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
</style>