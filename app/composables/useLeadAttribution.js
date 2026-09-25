// Ad-click attribution for lead forms.
// Captures Google Ads / Meta / Microsoft click IDs and UTM params from the
// landing URL so they survive in-page interaction (and a reload) and can be
// sent with the lead. First touch is kept for 90 days (Google Ads' click
// window); the latest touch always overwrites `last`.
const KEYS = [
  'gclid', 'gbraid', 'wbraid', 'gad_source', 'gad_campaignid',
  'fbclid', 'msclkid',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
]
const STORAGE_KEY = 'ef_attribution'
const TTL_MS = 90 * 24 * 60 * 60 * 1000

const read = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
    if (stored && Date.now() - stored.first.ts < TTL_MS) return stored
  } catch {}
  return null
}

const cookie = (name) => {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : ''
}

export const useLeadAttribution = () => {
  // Call once on page mount.
  const capture = () => {
    if (import.meta.server) return
    const params = new URLSearchParams(window.location.search)
    const touch = { ts: Date.now(), landing_page: window.location.href, referrer: document.referrer }
    let hasParams = false
    for (const key of KEYS) {
      const value = params.get(key)
      if (value) {
        touch[key] = value
        hasParams = true
      }
    }
    const stored = read()
    if (!stored) {
      const fresh = { first: touch, last: touch }
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh)) } catch {}
    } else if (hasParams) {
      stored.last = touch
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(stored)) } catch {}
    }
  }

  // Flat payload for the lead: last-touch values, first-touch as first_*.
  const get = () => {
    if (import.meta.server) return {}
    const stored = read() || { first: {}, last: {} }
    const payload = {}
    for (const key of [...KEYS, 'landing_page', 'referrer']) {
      payload[key] = stored.last[key] || ''
      payload[`first_${key}`] = stored.first[key] || ''
    }
    // Cookies set by GTM's Conversion Linker / Meta pixel, when present.
    payload.gcl_aw = cookie('_gcl_aw')
    payload.fbp = cookie('_fbp')
    payload.fbc = cookie('_fbc')
    payload.page_url = window.location.href
    return payload
  }

  return { capture, get }
}

// GTM hook: queued in dataLayer even before GTM loads.
export const trackEvent = (event, data = {}) => {
  if (import.meta.server) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...data })
}
