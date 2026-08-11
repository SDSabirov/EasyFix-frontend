<template>
  <div class="relative">
    <Navbar />
    
    <!-- Hero Section -->
    <header class="grain glow-brass relative bg-ink pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
      <span class="ghost-word ghost-word--light text-[6rem] lg:text-[11rem] top-24 -right-6" aria-hidden="true">Repair</span>

      <!-- Hero Content -->
      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <Breadcrumb
            dark
            :schema="false"
            :custom-breadcrumbs="[
              { name: 'Services', path: '/services' },
              { name: pageTitle, path: `/services/${route.params.slug}` }
            ]"
          />

          <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Certified Technicians
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
            Professional {{ pageTitle }}
            <em class="block font-display font-semibold italic text-brass-light">Bay Area Specialists</em>
          </h1>

          <p class="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
            {{ applianceDetails?.intro || 'Professional appliance repair services you can trust.' }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <a
              href="tel:4159414144"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
            >
              Call Now: (415) 941-4144
            </a>

            <NuxtLink
              to="/booking"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation"
            >
              Schedule Service
            </NuxtLink>
          </div>

          <!-- Service Guarantees -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <div class="font-display font-semibold text-3xl text-white mb-1">Same-Day</div>
              <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-light">Emergency Service</div>
            </div>
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <div class="font-display font-semibold text-3xl text-white mb-1">90-Day</div>
              <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-light">Parts Warranty</div>
            </div>
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <div class="font-display font-semibold text-3xl text-white mb-1">100%</div>
              <div class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-light">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Content Section -->
    <section class="relative bg-cream py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[6rem] lg:text-[11rem] -top-2 -left-8" aria-hidden="true">Experts</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">

        <!-- Introduction Section -->
        <div class="text-center max-w-4xl mx-auto mb-14 lg:mb-16" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Professional {{ pageTitle }}
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-6">
            Why Choose
            <em class="font-display font-semibold italic text-brass-dark">Easy Fix Appliance?</em>
          </h2>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {{ applianceDetails?.serviceDescription || 'We provide expert appliance repair services with professional excellence.' }}
          </p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">

          <!-- Left Column - Our Expertise -->
          <div class="space-y-5">
            <div class="group bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5" v-reveal>
              <div class="flex items-start gap-5">
                <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream shrink-0 transition-colors duration-300 group-hover:bg-brass/15">
                  <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </span>
                <div>
                  <h3 class="font-montserrat font-bold text-lg text-primary mb-2">Expert Technicians</h3>
                  <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {{ applianceDetails?.whyChooseUs?.technicians || 'Our certified technicians are trained to handle all major appliance brands with professional expertise.' }}
                  </p>
                </div>
              </div>
            </div>

            <div class="group bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5" v-reveal="90">
              <div class="flex items-start gap-5">
                <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream shrink-0 transition-colors duration-300 group-hover:bg-brass/15">
                  <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
                <div>
                  <h3 class="font-montserrat font-bold text-lg text-primary mb-2">Genuine Parts</h3>
                  <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {{ applianceDetails?.whyChooseUs?.parts || 'We use only authentic manufacturer parts to ensure lasting repairs and optimal performance.' }}
                  </p>
                </div>
              </div>
            </div>

            <div class="group bg-white rounded-[1.5rem] border border-primary/5 shadow-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5" v-reveal="180">
              <div class="flex items-start gap-5">
                <span class="flex items-center justify-center w-12 h-12 rounded-full bg-cream shrink-0 transition-colors duration-300 group-hover:bg-brass/15">
                  <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </span>
                <div>
                  <h3 class="font-montserrat font-bold text-lg text-primary mb-2">Fast & Reliable Service</h3>
                  <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {{ applianceDetails?.whyChooseUs?.service || 'Same-day service available to minimize your downtime and get your appliances working quickly.' }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Models We Service -->
          <div class="grain glow-brass relative bg-ink rounded-[2rem] p-8 lg:p-10 overflow-hidden" v-reveal="150">
            <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
            <div class="relative z-10">
              <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-white mb-8">
                Models We
                <em class="font-display font-semibold italic text-brass-light">Service</em>
              </h3>

              <ul class="space-y-4 mb-10" v-if="applianceDetails?.models?.length">
                <li
                  v-for="model in applianceDetails.models"
                  :key="model"
                  class="flex items-start gap-3 border-b border-white/10 pb-4"
                >
                  <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                  <div>
                    <h4 class="font-montserrat font-bold text-base text-white">{{ model }}</h4>
                    <p class="text-sm text-white/50">Professional repair service</p>
                  </div>
                </li>
              </ul>

              <a
                href="tel:4159414144"
                class="inline-flex items-center justify-center min-h-[52px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
              >
                Emergency Repair
              </a>
            </div>
          </div>
        </div>

        <!-- Expertise Section -->
        <div class="bg-white rounded-[2rem] border border-primary/5 shadow-sm p-8 lg:p-12 mb-16 lg:mb-20" v-reveal>
          <div class="max-w-4xl mx-auto text-center">
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary mb-8">
              Our Expertise in
              <em class="font-display font-semibold italic text-brass-dark">{{ pageTitle }}</em>
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div class="flex items-start gap-3">
                <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {{ applianceDetails?.expertise || 'Our team brings years of experience in appliance repair services.' }}
                </p>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {{ applianceDetails?.additionalExpertise || 'We ensure every repair meets the highest standards of quality and reliability.' }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action Section -->
        <div class="grain glow-brass relative bg-ink rounded-[2rem] px-6 py-14 sm:px-14 sm:py-16 text-center overflow-hidden mb-16 lg:mb-20" v-reveal>
          <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
          <div class="relative z-10">
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-4xl text-white leading-tight mb-6">
              Schedule Your {{ pageTitle }}
              <em class="font-display font-semibold italic text-brass-light">Today</em>
            </h3>

            <p class="text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
              {{ applianceDetails?.conclusion || 'Don\'t let appliance problems disrupt your day. Contact us for fast, professional repair service.' }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:4159414144"
                class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
              >
                Call Now: (415) 941-4144
              </a>

              <NuxtLink
                to="/booking"
                class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation"
              >
                Schedule Online
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- SEO-Enhanced FAQ Section -->
        <div class="bg-white rounded-[2rem] border border-primary/5 shadow-sm p-8 lg:p-12 mb-16 lg:mb-20" v-reveal>
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
                <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
                Frequently Asked Questions
              </span>

              <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary">
                Common {{ pageTitle }}
                <em class="font-display font-semibold italic text-brass-dark">Questions</em>
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              <div class="space-y-5 lg:space-y-6">
                <div class="rounded-[1.25rem] border border-primary/10 bg-cream p-6">
                  <h4 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    How quickly can you repair my appliance?
                  </h4>
                  <p class="text-gray-600 leading-relaxed">We offer same-day {{ pageTitle.toLowerCase() }} in most Bay Area locations. Our certified technicians carry genuine parts and diagnostic equipment to complete most repairs in a single visit.</p>
                </div>

                <div class="rounded-[1.25rem] border border-primary/10 bg-cream p-6">
                  <h4 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    Do you provide warranty on repairs?
                  </h4>
                  <p class="text-gray-600 leading-relaxed">Yes! All {{ pageTitle.toLowerCase() }} come with a 90-day warranty on parts and labor. We stand behind our work and use only genuine manufacturer parts for lasting repairs.</p>
                </div>
              </div>

              <div class="space-y-5 lg:space-y-6">
                <div class="rounded-[1.25rem] border border-primary/10 bg-cream p-6">
                  <h4 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    What brands do you service?
                  </h4>
                  <p class="text-gray-600 leading-relaxed">We repair all major appliance brands including Sub-Zero, Viking, Wolf, KitchenAid, Whirlpool, GE, Bosch, Miele, and many more. Our technicians are trained on both residential and commercial models.</p>
                </div>

                <div class="rounded-[1.25rem] border border-primary/10 bg-cream p-6">
                  <h4 class="flex items-start gap-3 font-montserrat font-bold text-lg text-primary mb-3">
                    <span class="w-1 h-1 rotate-45 bg-brass mt-2.5 shrink-0" aria-hidden="true"></span>
                    How much does repair service cost?
                  </h4>
                  <p class="text-gray-600 leading-relaxed">We provide free estimates and transparent pricing. Our {{ pageTitle.toLowerCase() }} typically range from $150-$400 depending on the issue and parts needed. No hidden fees or surprise charges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SEO-Enhanced Service Areas Section -->
        <div class="bg-white rounded-[2rem] border border-primary/5 shadow-sm p-8 lg:p-12 mb-16 lg:mb-20" v-reveal>
          <div class="max-w-4xl mx-auto text-center">
            <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
              Service Coverage Area
            </span>

            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary mb-6">
              {{ pageTitle }} Throughout the
              <em class="font-display font-semibold italic text-brass-dark">Bay Area</em>
            </h3>

            <p class="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
              Professional {{ pageTitle.toLowerCase() }} available in San Francisco, San Mateo, Santa Clara, and Alameda counties. We serve residential and commercial customers with same-day emergency service.
            </p>

            <div class="flex flex-wrap justify-center gap-2.5">
              <span class="rounded-full border border-primary/15 bg-cream px-4 py-2.5 text-sm font-medium text-gray-700">San Francisco</span>
              <span class="rounded-full border border-primary/15 bg-cream px-4 py-2.5 text-sm font-medium text-gray-700">Palo Alto</span>
              <span class="rounded-full border border-primary/15 bg-cream px-4 py-2.5 text-sm font-medium text-gray-700">San Mateo</span>
              <span class="rounded-full border border-primary/15 bg-cream px-4 py-2.5 text-sm font-medium text-gray-700">Redwood City</span>
              <span class="rounded-full border border-primary/15 bg-cream px-4 py-2.5 text-sm font-medium text-gray-700">Mountain View</span>
              <span class="rounded-full border border-primary/15 bg-cream px-4 py-2.5 text-sm font-medium text-gray-700">Menlo Park</span>
              <span class="rounded-full border border-primary/15 bg-cream px-4 py-2.5 text-sm font-medium text-gray-700">Burlingame</span>
              <span class="rounded-full border border-primary/15 bg-cream px-4 py-2.5 text-sm font-medium text-gray-700">Los Altos</span>
            </div>
          </div>
        </div>

        <!-- SEO-Enhanced Common Issues Section -->
        <div class="bg-white rounded-[2rem] border border-primary/5 shadow-sm p-8 lg:p-12" v-reveal>
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary mb-6">
                Common {{ pageTitle }} Issues
                <em class="font-display font-semibold italic text-brass-dark">We Fix</em>
              </h3>
              <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our certified technicians diagnose and repair all types of appliance problems with professional expertise and genuine parts.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              <div class="group rounded-[1.25rem] border border-primary/10 bg-cream p-6 transition-all duration-300 hover:border-brass/50 hover:-translate-y-1">
                <span class="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm mb-4 transition-colors duration-300 group-hover:bg-brass/15">
                  <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                </span>
                <h4 class="font-montserrat font-bold text-lg text-primary mb-2">Not Working</h4>
                <p class="text-sm text-gray-600 leading-relaxed">Complete failure, electrical issues, power problems, and component malfunctions.</p>
              </div>

              <div class="group rounded-[1.25rem] border border-primary/10 bg-cream p-6 transition-all duration-300 hover:border-brass/50 hover:-translate-y-1">
                <span class="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm mb-4 transition-colors duration-300 group-hover:bg-brass/15">
                  <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </span>
                <h4 class="font-montserrat font-bold text-lg text-primary mb-2">Performance Issues</h4>
                <p class="text-sm text-gray-600 leading-relaxed">Poor efficiency, inconsistent operation, unusual noises, and reduced functionality.</p>
              </div>

              <div class="group rounded-[1.25rem] border border-primary/10 bg-cream p-6 transition-all duration-300 hover:border-brass/50 hover:-translate-y-1">
                <span class="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm mb-4 transition-colors duration-300 group-hover:bg-brass/15">
                  <svg class="w-5 h-5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
                  </svg>
                </span>
                <h4 class="font-montserrat font-bold text-lg text-primary mb-2">Maintenance</h4>
                <p class="text-sm text-gray-600 leading-relaxed">Regular servicing, preventive care, part replacement, and efficiency optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

// Appliance data with complete content
const applianceData = {
  "refrigerator-repair": {
    title: "Refrigerator Repair Services",
    intro: "Refrigerators are essential for keeping your food fresh and safe. When they malfunction, it can disrupt your daily life.",
    serviceDescription: "At Easy Fix Appliance, we specialize in repairing refrigerators quickly and effectively with same-day service available.",
    expertise: "Our technicians are highly experienced in handling all major refrigerator brands and models, ensuring precise and reliable repairs.",
    additionalExpertise: "We use only genuine parts to restore your refrigerator to peak functionality, extending its lifespan and performance.",
    models: ["French Door Refrigerators", "Side-by-Side Refrigerators", "Bottom Freezer Models", "Compact Refrigerators", "Built-in Refrigerators"],
    conclusion: "Contact us today for fast and efficient refrigerator repairs. Your satisfaction is our priority!",
    whyChooseUs: {
      technicians: "Our team is highly skilled in diagnosing and repairing refrigerators of all brands including Sub-Zero, Viking, and KitchenAid.",
      parts: "We use only authentic manufacturer parts to ensure long-lasting repairs and optimal cooling performance.",
      service: "Fast and reliable repairs with same-day service available to minimize your downtime and food spoilage.",
      localService: "Serving the Bay Area with flexible scheduling options and emergency repair services."
    }
  },
  "freezer-repair": {
    title: "Freezer Repair Services",
    intro: "Freezers play a critical role in preserving your food. When they stop working, it can lead to spoilage and inconvenience.",
    serviceDescription: "Our expert technicians specialize in repairing freezers to ensure they function effectively and efficiently.",
    expertise: "We handle repairs for all freezer types, including upright, chest, and built-in models with precision and care.",
    additionalExpertise: "Using genuine parts, we ensure long-lasting solutions for your freezer issues with comprehensive warranty coverage.",
    models: ["Upright Freezers", "Chest Freezers", "Built-In Freezers", "Drawer Freezers"],
    conclusion: "Trust us to bring your freezer back to life. Schedule your repair today!",
    whyChooseUs: {
      technicians: "Certified and experienced in freezer repairs of all models from major brands like Frigidaire and Whirlpool.",
      parts: "Only authentic parts are used for reliable performance and extended appliance life.",
      service: "Quick and dependable service to reduce downtime and prevent food loss.",
      localService: "Providing comprehensive service across the Bay Area with emergency availability."
    }
  },
  "range-repair": {
    title: "Range Repair Services", 
    intro: "Your range is essential for cooking meals efficiently. Let us help when it's not performing at its best.",
    serviceDescription: "We repair all types of ranges, ensuring seamless performance for your cooking needs with professional expertise.",
    expertise: "Experts in handling gas, electric, and dual-fuel ranges from all major manufacturers.",
    additionalExpertise: "Using genuine parts, we guarantee durable repairs that restore your range to like-new condition.",
    models: ["Gas Ranges", "Electric Ranges", "Dual-Fuel Ranges", "Induction Ranges", "Professional Ranges"],
    conclusion: "Don't let a broken range slow you down. Contact us today for expert repair service!",
    whyChooseUs: {
      technicians: "Trained to repair all range models including Viking, Wolf, and Thermador professional units.",
      parts: "Authentic parts ensure lasting solutions and optimal cooking performance.",
      service: "Fast service with minimal disruption to your kitchen routine.",
      localService: "Available throughout the Bay Area with same-day service options."
    }
  },
  "oven-repair": {
    title: "Oven Repair Services",
    intro: "An oven breakdown can throw off your cooking routine. We're here to help get you back to baking and roasting.",
    serviceDescription: "We provide expert oven repairs to get your appliance back in top shape with professional service.",
    expertise: "Experienced in repairing conventional, convection, and wall ovens from all major brands.",
    additionalExpertise: "Our repairs are backed by genuine parts for durability and a comprehensive warranty.",
    models: ["Conventional Ovens", "Convection Ovens", "Wall Ovens", "Double Ovens", "Steam Ovens"],
    conclusion: "Contact us today to schedule your oven repair and get back to perfect cooking results.",
    whyChooseUs: {
      technicians: "Experts in all oven types including high-end brands like Miele and Bosch.",
      parts: "We use authentic replacement parts for reliable, long-lasting repairs.",
      service: "Reliable service to restore your oven quickly with minimal kitchen downtime.",
      localService: "Serving homes across the Bay Area with flexible scheduling."
    }
  },
  "cooktop-repair": {
    title: "Cooktop Repair Services",
    intro: "A malfunctioning cooktop can halt your cooking. We'll fix it promptly with professional expertise.",
    serviceDescription: "We repair all cooktop types, including gas, electric, and induction models with precision care.",
    expertise: "Specialized in diagnosing and repairing cooktop issues across all major brands and technologies.",
    additionalExpertise: "Using authentic parts, we ensure durable solutions that restore optimal cooking performance.",
    models: ["Gas Cooktops", "Electric Cooktops", "Induction Cooktops", "Ceramic Glass Cooktops", "Professional Cooktops"],
    conclusion: "Book your cooktop repair with us today and get back to efficient cooking.",
    whyChooseUs: {
      technicians: "Certified professionals for all cooktop brands including Wolf, Viking, and KitchenAid.",
      parts: "We use original components for reliability and long-term performance.",
      service: "Efficient repairs to get you cooking again with same-day service available.",
      localService: "Proudly serving the Bay Area with emergency repair services."
    }
  },
  "dishwasher-repair": {
    title: "Dishwasher Repair Services",
    intro: "A broken dishwasher means hours of hand-washing dishes. Let us restore your convenience quickly.",
    serviceDescription: "Professional dishwasher repair services for all major brands with same-day service available.",
    expertise: "Expert diagnosis and repair of all dishwasher issues including drainage, cleaning, and electrical problems.",
    additionalExpertise: "We use genuine manufacturer parts to ensure your dishwasher operates like new with full warranty coverage.",
    models: ["Built-in Dishwashers", "Portable Dishwashers", "Drawer Dishwashers", "Countertop Dishwashers"],
    conclusion: "Get your dishwasher repaired today and return to effortless kitchen cleanup.",
    whyChooseUs: {
      technicians: "Skilled in repairing all dishwasher brands including Bosch, KitchenAid, and Miele.",
      parts: "Only authentic parts used for optimal cleaning performance and longevity.",
      service: "Quick turnaround to restore your kitchen convenience with minimal disruption.",
      localService: "Comprehensive Bay Area coverage with flexible appointment scheduling."
    }
  },
  "under-counter-fridge-repair": {
    title: "Under-Counter Fridge Repair Services",
    intro: "Professional under-counter fridge repair services in the Bay Area.",
    serviceDescription: "Expert under-counter refrigerator repairs by certified technicians using genuine parts.",
    expertise: "Specialized repair of all major under-counter fridge brands including Sub-Zero, Viking, and KitchenAid.",
    additionalExpertise: "Ensuring long-lasting repairs with authentic manufacturer parts and warranty coverage.",
    models: ["Sub-Zero Under-Counter Fridges", "Viking Compact Refrigerators", "KitchenAid Built-in Fridges"],
    conclusion: "Schedule your under-counter fridge repair today and restore convenience to your kitchen.",
    whyChooseUs: {
      technicians: "Highly skilled in under-counter fridge repairs across all major brands.",
      parts: "We only use original manufacturer parts.",
      service: "Fast and dependable service to minimize downtime.",
      localService: "Proudly serving the Bay Area."
    }
  },

  "wine-cooler-repair": {
    title: "Wine Cooler Repair Services",
    intro: "Reliable wine cooler repair to maintain your wine collection perfectly.",
    serviceDescription: "Fast wine cooler repairs by factory-trained technicians with authentic replacement parts.",
    expertise: "Expert repairs for all major wine cooler brands including Sub-Zero, Viking, and Thermador.",
    additionalExpertise: "Durable and efficient solutions backed by genuine parts warranty.",
    models: ["Built-in Wine Coolers", "Freestanding Wine Coolers", "Dual-Zone Wine Coolers"],
    conclusion: "Contact us today for expert wine cooler repairs.",
    whyChooseUs: {
      technicians: "Experienced technicians specialized in wine cooler repairs.",
      parts: "Genuine parts for reliable cooling performance.",
      service: "Same-day service to protect your wine collection.",
      localService: "Serving San Mateo, Palo Alto, Redwood City, and surrounding areas."
    }
  },

  "stove-repair": {
    title: "Stove Repair Services",
    intro: "Get your stove repaired quickly and efficiently by our experts.",
    serviceDescription: "Comprehensive stove repair for gas and electric models with guaranteed results.",
    expertise: "Trained specialists in stove repair for all major appliance brands including Wolf and Viking.",
    additionalExpertise: "Quality repairs with genuine parts ensuring optimal cooking performance.",
    models: ["Gas Stoves", "Electric Stoves", "Dual-Fuel Stoves"],
    conclusion: "Book your stove repair now for swift restoration of your kitchen.",
    whyChooseUs: {
      technicians: "Professional stove repair specialists.",
      parts: "Only original manufacturer parts.",
      service: "Prompt, reliable service.",
      localService: "Available throughout the Bay Area."
    }
  },

  "double-oven-repair": {
    title: "Double Oven Repair Services",
    intro: "Expert double oven repair services to keep your kitchen running smoothly.",
    serviceDescription: "Specialized repair for double ovens ensuring perfect baking and cooking results.",
    expertise: "Experienced with all double oven brands including Thermador, Viking, and Bosch.",
    additionalExpertise: "Genuine parts and professional service ensure long-lasting performance.",
    models: ["Electric Double Ovens", "Gas Double Ovens", "Wall-Mounted Double Ovens"],
    conclusion: "Schedule your double oven repair today.",
    whyChooseUs: {
      technicians: "Double oven repair experts.",
      parts: "Certified parts for lasting reliability.",
      service: "Same-day service available.",
      localService: "Serving the Bay Area communities."
    }
  },

  "ice-maker-repair": {
    title: "Ice Maker Repair Services",
    intro: "Fast and reliable ice maker repairs to keep ice flowing.",
    serviceDescription: "Our professionals diagnose and repair ice maker issues promptly with genuine parts.",
    expertise: "Experienced in all ice maker brands and models including Sub-Zero and Viking.",
    additionalExpertise: "We provide long-lasting solutions with authentic manufacturer parts.",
    models: ["Built-in Ice Makers", "Standalone Ice Makers", "Undercounter Ice Makers"],
    conclusion: "Restore your ice maker’s functionality today.",
    whyChooseUs: {
      technicians: "Ice maker repair specialists.",
      parts: "High-quality original parts.",
      service: "Efficient same-day service.",
      localService: "Proudly serving customers across the Bay Area."
    }
  },

  "built-in-fridge-repair": {
    title: "Built-In Fridge Repair Services",
    intro: "Professional repair for built-in refrigerators by factory-certified experts.",
    serviceDescription: "Fast, precise built-in fridge repairs using authentic parts to ensure lasting performance.",
    expertise: "Expert handling of all built-in refrigerator brands such as Sub-Zero and Viking.",
    additionalExpertise: "Quality repairs that extend appliance life, backed by warranty.",
    models: ["Sub-Zero Built-In Refrigerators", "Viking Built-In Fridges", "Custom Panel Refrigerators"],
    conclusion: "Book your built-in fridge repair today for optimal cooling.",
    whyChooseUs: {
      technicians: "Experts in built-in fridge repairs.",
      parts: "Genuine manufacturer parts for durability.",
      service: "Quick, reliable repairs.",
      localService: "Serving San Francisco, Palo Alto, Redwood City, and the entire Bay Area."
    }
  }
}

// Get current appliance type from route
const applianceType = computed(() => route.params.slug || "refrigerator-repair")

// Get appliance details with fallback
const applianceDetails = computed(() => {
  const details = applianceData[applianceType.value]
  if (details) {
    return details
  }
  
  // Fallback for unknown slug
  return {
    title: "Appliance Repair Services",
    intro: "Expert appliance repair services for all major brands in the Bay Area.",
    serviceDescription: "Professional repair services with same-day availability and genuine parts warranty.",
    expertise: "Our certified technicians handle all major appliance brands with years of experience.",
    additionalExpertise: "We guarantee quality repairs using authentic parts and comprehensive warranty coverage.",
    models: ["All Major Brands", "Professional Models", "Residential Units"],
    conclusion: "Contact us today for reliable appliance repair services you can trust.",
    whyChooseUs: {
      technicians: "Certified technicians trained on all major appliance brands and models.",
      parts: "Genuine manufacturer parts for lasting repairs and optimal performance.",
      service: "Same-day service available to minimize downtime and restore convenience.",
      localService: "Serving the entire Bay Area with flexible scheduling and emergency services."
    }
  }
})

const pageTitle = computed(() => applianceDetails.value.title)

// Enhanced SEO Meta with structured data
useHead(() => ({
  title: `${pageTitle.value} | Easy Fix Appliance | Bay Area Professional Service`,
  meta: [
    { name: "description", content: `Expert ${pageTitle.value.toLowerCase()} throughout the Bay Area. Factory-certified technicians, genuine parts, same-day service available. Serving San Francisco, Palo Alto, San Mateo, Redwood City & surrounding areas. Call (415) 941-4144.` },
    { name: "keywords", content: `${pageTitle.value.toLowerCase()}, appliance repair, Bay Area, San Francisco, same day service, professional technicians, genuine parts, warranty` },
    { property: "og:title", content: `${pageTitle.value} | Easy Fix Appliance` },
    { property: "og:description", content: `Reliable ${pageTitle.value.toLowerCase()} with certified technicians and 90-day warranty. Emergency repairs available throughout the Bay Area.` },
    { property: "og:image", content: "/assets/img/services/detailhero.webp" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${pageTitle.value} | Easy Fix Appliance` },
    { name: "twitter:description", content: `Professional ${pageTitle.value.toLowerCase()} in the Bay Area with same-day service.` },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Easy Fix Appliance" },
    { name: "geo.region", content: "US-CA" },
    { name: "geo.placename", content: "San Francisco Bay Area" },
    { name: "geo.position", content: "37.4419;-122.143" },
    { name: "ICBM", content: "37.4419, -122.143" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": pageTitle.value,
        "description": applianceDetails.value.intro,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Easy Fix Appliance",
          "telephone": "+1-415-941-4144",
          "url": "https://easyfixappliance.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "303 Twin Dolphin Drive",
            "addressLocality": "Redwood City",
            "addressRegion": "CA",
            "postalCode": "94065",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "37.4419",
            "longitude": "-122.143"
          },
          "openingHours": "Mo-Su 07:00-21:00",
          "priceRange": "$150-$400",
          "sameAs": [
            "https://www.instagram.com/easyfixappliance/",
            "https://www.facebook.com/profile.php?id=61570244923151"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Sarah M."
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Excellent service! Fixed our Sub-Zero refrigerator the same day. Technician was professional and knowledgeable."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Michael R."
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Fast and reliable appliance repair. Used genuine parts and provided excellent warranty. Highly recommended!"
            }
          ]
        },
        "areaServed": [
          "San Francisco",
          "Palo Alto", 
          "San Mateo",
          "Redwood City",
          "Mountain View",
          "Menlo Park",
          "Burlingame",
          "Los Altos"
        ],
        "offers": {
          "@type": "Offer",
          "description": "Same-day appliance repair service with 90-day warranty",
          "priceRange": "$150-$400"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Appliance Repair Services",
          "itemListElement": applianceDetails.value.models?.map(model => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `${model} Repair`
            }
          })) || []
        }
      })
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `https://easyfixappliance.com/services/${route.params.slug}#faq`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://easyfixappliance.com/services/${route.params.slug}`
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://easyfixappliance.com#organization",
          "name": "Easy Fix Appliance",
          "url": "https://easyfixappliance.com",
          "telephone": "+14159414144",
          "sameAs": [
            "https://www.instagram.com/easyfixappliance/",
            "https://www.facebook.com/profile.php?id=61570244923151"
          ]
        },
        "mainEntity": [
          {
            "@type": "Question",
            "@id": `https://easyfixappliance.com/services/${route.params.slug}#faq-1`,
            "name": "How quickly can you repair my appliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We offer same-day ${pageTitle.value.toLowerCase()} in most Bay Area locations. Our certified technicians carry genuine parts and diagnostic equipment to complete most repairs in a single visit.`
            }
          },
          {
            "@type": "Question",
            "@id": `https://easyfixappliance.com/services/${route.params.slug}#faq-2`,
            "name": "Do you provide warranty on repairs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes! All ${pageTitle.value.toLowerCase()} come with a 90-day warranty on parts and labor. We stand behind our work and use only genuine manufacturer parts for lasting repairs.`
            }
          },
          {
            "@type": "Question",
            "@id": `https://easyfixappliance.com/services/${route.params.slug}#faq-3`,
            "name": "What brands do you service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We repair all major appliance brands including Sub-Zero, Viking, Wolf, KitchenAid, Whirlpool, GE, Bosch, Miele, and many more. Our technicians are trained on both residential and commercial models."
            }
          },
          {
            "@type": "Question",
            "@id": `https://easyfixappliance.com/services/${route.params.slug}#faq-4`,
            "name": "How much does repair service cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We provide free estimates and transparent pricing. Our ${pageTitle.value.toLowerCase()} typically range from $150-$400 depending on the issue and parts needed. No hidden fees or surprise charges.`
            }
          }
        ]
      })
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://easyfixappliance.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://easyfixappliance.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": pageTitle.value,
            "item": `https://easyfixappliance.com/services/${route.params.slug}`
          }
        ]
      })
    }
  ]
}))
</script>

<style></style>
