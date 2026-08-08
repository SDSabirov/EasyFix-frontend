<template>
  <section id="contacts" class="grain glow-brass relative bg-ink py-20 lg:py-28 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
    <span class="ghost-word ghost-word--light text-[7rem] lg:text-[13rem] top-8 -right-8" aria-hidden="true">Contact</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-20">
        <!-- Left: speak with a specialist -->
        <div class="lg:col-span-7" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Contact Us
          </span>
          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-white leading-[1.05] mb-8">
            Get in touch with
            <em class="font-display font-semibold italic text-brass-light">Easy Fix Appliance</em>
          </h2>

          <a href="tel:4159414144" class="group inline-block mb-10">
            <span class="font-display font-medium text-4xl sm:text-6xl text-brass-light group-hover:text-white transition-colors duration-300 [text-decoration:underline] [text-decoration-thickness:1px] [text-underline-offset:12px] decoration-brass/30 group-hover:decoration-white/40">
              (415) 941-4144
            </span>
            <span class="block font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50 mt-3">
              Call or Text &mdash; Same-Day &amp; After-Hours Service
            </span>
          </a>

          <dl class="space-y-5 border-t border-white/10 pt-8 max-w-lg">
            <div class="flex items-baseline justify-between gap-6">
              <dt class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 shrink-0">Regular Service</dt>
              <dd class="text-white/80 text-sm text-right">Monday &ndash; Friday, 8am &ndash; 8pm</dd>
            </div>
            <div class="flex items-baseline justify-between gap-6">
              <dt class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 shrink-0">Emergency Service</dt>
              <dd class="text-white/80 text-sm text-right">Weekends &amp; Holidays</dd>
            </div>
            <div class="flex items-baseline justify-between gap-6">
              <dt class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 shrink-0">Email</dt>
              <dd class="text-right">
                <a href="mailto:care@easyfixappliance.com" class="text-white/80 text-sm hover:text-brass-light transition-colors">care@easyfixappliance.com</a>
              </dd>
            </div>
            <div class="flex items-baseline justify-between gap-6">
              <dt class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 shrink-0">Service Area</dt>
              <dd class="text-white/80 text-sm text-right">San Francisco, Peninsula, South Bay &amp; Silicon Valley</dd>
            </div>
          </dl>
        </div>

        <!-- Right: booking panel -->
        <div class="lg:col-span-5" v-reveal="150">
          <div class="bg-white rounded-[2rem] p-8 sm:p-10 h-full flex flex-col shadow-2xl shadow-black/30">
            <h3 class="font-montserrat font-bold tracking-[-0.01em] text-2xl sm:text-3xl text-primary mb-4">Schedule Service Online</h3>
            <span class="h-px w-10 bg-brass mb-6" aria-hidden="true"></span>
            <p class="text-gray-600 text-sm leading-relaxed mb-8">
              Choose a time that works for you &mdash; our team will confirm your appointment
              and arrive with the parts most repairs need.
            </p>
            <ul class="space-y-4 mb-10">
              <li v-for="point in bookingPoints" :key="point" class="flex items-start gap-3 text-sm text-gray-700">
                <span class="w-1 h-1 rotate-45 bg-brass mt-2 shrink-0" aria-hidden="true"></span>
                {{ point }}
              </li>
            </ul>
            <div class="mt-auto space-y-3">
              <NuxtLink
                to="/booking"
                class="inline-flex items-center justify-center w-full min-h-[52px] px-8 py-4 rounded-full bg-ink text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:scale-[1.02] touch-manipulation"
              >
                Book an Appointment
              </NuxtLink>
              <a
                href="sms:14159414144"
                class="inline-flex items-center justify-center w-full min-h-[52px] px-8 py-4 rounded-full border border-ink/20 text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-dark hover:scale-[1.02] touch-manipulation"
              >
                Text Us Instead
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment methods -->
      <div class="border-t border-white/10 pt-10">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h3 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50 mb-2">Payment Options</h3>
            <p class="text-white/40 text-xs">Secure processing &middot; No hidden fees &middot; Payment after service</p>
          </div>
          <div class="flex flex-wrap items-center gap-x-7 gap-y-4">
            <img
              v-for="method in paymentMethods"
              :key="method.alt"
              loading="lazy"
              decoding="async"
              :src="method.logo"
              :alt="method.alt"
              class="h-5 object-contain opacity-50 hover:opacity-90 transition-opacity"
            />
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

const paymentMethods = [
  { logo: visaLogo, alt: 'Visa' },
  { logo: mastercardLogo, alt: 'Mastercard' },
  { logo: amexLogo, alt: 'American Express' },
  { logo: discoverLogo, alt: 'Discover' },
  { logo: applePayLogo, alt: 'Apple Pay' },
  { logo: googlePayLogo, alt: 'Google Pay' },
  { logo: venmoLogo, alt: 'Venmo' },
  { logo: zelleLogo, alt: 'Zelle' },
]

const bookingPoints = [
  'Same-day appointments available',
  'We confirm within 2 hours',
  'Factory-trained, background-checked technicians',
  'Genuine OEM parts with warranty',
]
</script>
