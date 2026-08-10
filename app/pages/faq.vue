<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <header class="relative bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <span class="ghost-word text-[6rem] lg:text-[11rem] top-20 -right-6" aria-hidden="true">Answers</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Get Your Questions Answered
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-primary leading-[1.05] mb-6">
            Frequently Asked
            <em class="block font-display font-semibold italic text-brass-dark">Questions</em>
          </h1>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Find answers to common questions about our <strong class="text-primary font-semibold">appliance repair services</strong> in the Bay Area.
            Can't find what you're looking for? <strong class="text-primary font-semibold">Call us directly</strong> for personalized assistance.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:4159414144"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-ink text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:scale-[1.03] touch-manipulation"
            >
              Call Now: (415) 941-4144
            </a>
            <NuxtLink
              to="/booking"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-ink/20 text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-dark hover:scale-[1.03] touch-manipulation"
            >
              Schedule Service Online
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- FAQ Categories Section -->
    <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 -left-8" aria-hidden="true">Repairs</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <!-- Category Navigation -->
        <div class="text-center mb-12 lg:mb-16" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Knowledge Base
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-10">
            Browse by
            <em class="font-display font-semibold italic text-brass-dark">Category</em>
          </h2>

          <div class="flex flex-wrap justify-center gap-3">
            <button
              v-for="category in categories"
              :key="category.id"
              type="button"
              @click="activeCategory = category.id"
              :aria-pressed="activeCategory === category.id"
              class="inline-flex items-center gap-2.5 rounded-full border px-5 py-3 font-montserrat text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:scale-[1.05] touch-manipulation"
              :class="activeCategory === category.id
                ? 'bg-ink text-white border-ink'
                : 'bg-white text-primary border-primary/15 hover:bg-ink hover:text-white hover:border-ink'"
            >
              <svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="category.icon" />
              </svg>
              {{ category.name }}
            </button>
          </div>
        </div>

        <!-- FAQ Items -->
        <div class="max-w-4xl mx-auto space-y-4">
          <div
            v-for="(faq, index) in filteredFaqs"
            :key="faq.question"
            class="bg-white border border-primary/10 rounded-[1.5rem] overflow-hidden transition-colors duration-300 hover:border-brass/40"
          >
            <h3>
              <button
                type="button"
                @click="toggleFaq(index)"
                :aria-expanded="activeFaq === index"
                :aria-controls="`faq-panel-${index}`"
                class="w-full flex items-center justify-between gap-6 text-left p-5 sm:p-7 touch-manipulation"
              >
                <span class="flex items-start gap-4">
                  <span class="font-display font-semibold text-base text-brass mt-0.5 shrink-0" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
                  <span class="font-montserrat font-semibold text-base sm:text-lg text-primary leading-snug">{{ faq.question }}</span>
                </span>
                <svg
                  class="w-5 h-5 text-brass shrink-0 transition-transform duration-300"
                  :class="{ 'rotate-180': activeFaq === index }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </h3>

            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[40rem]"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-[40rem]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-show="activeFaq === index" :id="`faq-panel-${index}`" class="overflow-hidden">
                <div class="px-5 sm:px-7 pb-6 sm:pb-7">
                  <div class="border-t border-primary/10 pt-5 sm:pl-9">
                    <p class="text-gray-600 leading-relaxed text-sm sm:text-base" v-html="faq.answer"></p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Still Have Questions Section -->
    <section class="grain glow-brass relative bg-ink py-20 lg:py-28 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
      <span class="ghost-word ghost-word--light text-[7rem] lg:text-[12rem] top-8 -right-8" aria-hidden="true">Support</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-14" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            We're Here to Help
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-white leading-[1.05] mb-6">
            Still Have
            <em class="font-display font-semibold italic text-brass-light">Questions?</em>
          </h2>
          <p class="text-white/60 text-base sm:text-lg leading-relaxed">
            Our friendly customer service team is standing by to help you with any questions about appliance repairs, scheduling, or our services.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-4xl mx-auto mb-14">
          <div class="border border-white/10 bg-white/5 rounded-[1.5rem] p-7 text-center" v-reveal>
            <h3 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50 mb-3">Call Us</h3>
            <p class="font-display font-semibold text-2xl text-brass-light mb-2">(415) 941-4144</p>
            <p class="text-white/60 text-sm">Speak directly with our experts</p>
          </div>

          <div class="border border-white/10 bg-white/5 rounded-[1.5rem] p-7 text-center" v-reveal="90">
            <h3 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50 mb-3">Book Online</h3>
            <p class="font-display font-semibold text-2xl text-brass-light mb-2">Same-Day Service</p>
            <p class="text-white/60 text-sm">Schedule convenient service</p>
          </div>

          <div class="border border-white/10 bg-white/5 rounded-[1.5rem] p-7 text-center" v-reveal="180">
            <h3 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50 mb-3">Same-Day Service</h3>
            <p class="font-display font-semibold text-2xl text-brass-light mb-2">Fast Response</p>
            <p class="text-white/60 text-sm">Emergency repairs available</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" v-reveal>
          <a
            href="tel:4159414144"
            class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
          >
            Call for Immediate Help
          </a>
          <NuxtLink
            to="/contact-us"
            class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation"
          >
            Send Us a Message
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
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
    answer: "We offer <strong>same-day and next-day appointments</strong> to minimize your downtime. For urgent issues, we provide <strong>emergency repair services</strong> with technicians available for same-day and after-hours service. Most appointments can be scheduled within 24-48 hours, depending on your location and the complexity of the repair."
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
    answer: "Yes, we offer <strong>same-day and after-hours emergency repair services</strong> for critical appliances like refrigerators, freezers, and other essential units. Emergency service may include additional fees for after-hours calls, but we'll always provide upfront pricing. Call our emergency line for immediate assistance with urgent appliance failures."
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
  description: 'Get answers to common questions about appliance repair services in Bay Area. Sub-Zero, Wolf, Viking repair FAQs, pricing, warranties, and service areas. Expert technicians available for same-day service.',
  keywords: 'appliance repair FAQ, Bay Area appliance service questions, Sub-Zero repair cost, luxury appliance maintenance, same-day appliance repair, certified technicians',
  ogTitle: 'Appliance Repair FAQ | Bay Area Expert Answers',
  ogDescription: 'Find answers to common appliance repair questions. Expert technicians, luxury brand specialists, same-day service in Bay Area.',
  ogType: 'website',
  ogUrl: 'https://easyfixappliance.com/faq'
});

// Use proper Nuxt SEO schema.org composables
useSchemaOrg([
  defineWebPage({
    '@type': 'FAQPage',
  }),
  ...faqs.map(faq =>
    defineQuestion({
      name: faq.question,
      acceptedAnswer: faq.answer.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '').trim(),
    })
  )
]);
</script>
