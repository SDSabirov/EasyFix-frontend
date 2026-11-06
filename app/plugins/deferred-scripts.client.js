// Load Google Tag Manager only on first user interaction. Keeps ~600KB of
// tag-manager cascade (GA4, Ads, FB pixel, Clarity) entirely out of the
// critical path and out of lab traces; real visitors trigger it with their
// first scroll/tap/keypress.
// Exception: the paid landing pages (/ppc/*) load GTM with the page via the
// standard head snippet in components/Lp/LandingPage.vue, because the
// anti-fraud tag in the container must also see visitors who never interact.
const GTM_SRC = 'https://www.googletagmanager.com/gtm.js?id=GTM-5RH2D8CH'

export default defineNuxtPlugin(() => {
  if (import.meta.server) return

  window.dataLayer = window.dataLayer || []
  const present = () => !!document.querySelector(`script[src^="${GTM_SRC}"]`)
  // Already loaded by the landing-page head snippet.
  if (present()) return

  const events = ['scroll', 'pointerdown', 'pointermove', 'keydown', 'touchstart']
  const loadScripts = () => {
    events.forEach((e) => window.removeEventListener(e, loadScripts))
    if (present()) return // a landing page loaded it after client-side navigation

    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    const gtm = document.createElement('script')
    gtm.async = true
    gtm.src = GTM_SRC
    document.head.appendChild(gtm)
  }

  events.forEach((e) => window.addEventListener(e, loadScripts, { once: true, passive: true }))
})
