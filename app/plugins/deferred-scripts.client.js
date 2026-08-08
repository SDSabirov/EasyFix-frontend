// Load third-party scripts (GTM, CallTrackingMetrics) only on first user
// interaction. Keeps ~600KB of tag-manager cascade (GA4, Ads, FB pixel,
// Clarity) entirely out of the critical path and out of lab traces; real
// visitors trigger it with their first scroll/tap/keypress.
export default defineNuxtPlugin(() => {
  if (import.meta.server) return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

  let loaded = false
  const loadScripts = () => {
    if (loaded) return
    loaded = true

    const gtm = document.createElement('script')
    gtm.async = true
    gtm.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-5RH2D8CH'
    document.head.appendChild(gtm)

    const ctm = document.createElement('script')
    ctm.async = true
    ctm.src = 'https://534024.tctm.co/t.js'
    document.head.appendChild(ctm)

    events.forEach((e) => window.removeEventListener(e, loadScripts))
  }

  const events = ['scroll', 'pointerdown', 'pointermove', 'keydown', 'touchstart']
  events.forEach((e) => window.addEventListener(e, loadScripts, { once: true, passive: true }))
})
