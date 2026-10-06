// Load Google Tag Manager only on first user
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

    events.forEach((e) => window.removeEventListener(e, loadScripts))
  }

  const events = ['scroll', 'pointerdown', 'pointermove', 'keydown', 'touchstart']
  events.forEach((e) => window.addEventListener(e, loadScripts, { once: true, passive: true }))

  // Paid landing pages (/ppc/*): also load once the page is idle, so Google's
  // call tracking (forwarding number swap) and ad-click attribution are in
  // place before the visitor reads/taps the number; that matters more there
  // than lab scores.
  if (window.location.pathname.startsWith('/ppc/')) {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1))
    const onLoad = () => idle(loadScripts, { timeout: 2000 })
    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad, { once: true })
  }
})
