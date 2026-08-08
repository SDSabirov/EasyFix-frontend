// Load third-party scripts (GTM, CallTrackingMetrics) off the critical path:
// on first user interaction, or after a 3.5s idle fallback. Keeps mobile
// main-thread free during LCP/TBT measurement window while preserving tracking.
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

  const events = ['scroll', 'pointerdown', 'keydown', 'touchstart']
  events.forEach((e) => window.addEventListener(e, loadScripts, { once: true, passive: true }))
  setTimeout(loadScripts, 3500)
})
