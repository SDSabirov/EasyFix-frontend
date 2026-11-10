// Behaviour shared by the Google Ads landing pages (/ppc/*): tracking scripts,
// the phone number, and the Call / Schedule Service / in-page nav handlers.
// These pages deliberately have no links off the page: the only actions are
// Call and Schedule Service (the on-page lead form, id="lp-form").
// noindex + sitemap exclusion are set via routeRules in nuxt.config.ts.
export const useLpPage = (variantKey) => {
  // The site-wide "index, follow" meta (nuxt.config.ts app.head) replaces the routeRules
  // noindex once the page hydrates; setting it here keeps the tag noindex in the browser too.
  useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

  // GoHighLevel external tracking (page views, attribution and form submissions
  // into the CRM). Loaded only on these landing pages.
  useHead({
    script: [
      // Google Tag Manager with the page (standard snippet), on these landing pages only:
      // the anti-fraud tag in the container must also see visitors who never move the
      // mouse. The rest of the site loads GTM on first interaction
      // (plugins/deferred-scripts.client.js); both skip if GTM is already on the page.
      {
        key: 'gtm',
        tagPriority: 'high',
        innerHTML: `(function(w,d,s,l,i){var u='https://www.googletagmanager.com/gtm.js?id='+i;if(d.querySelector('script[src^="'+u+'"]'))return;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=u+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5RH2D8CH');`,
      },
      {
        src: 'https://link.msgsndr.com/js/external-tracking.js',
        'data-tracking-id': 'tk_06879e56452d496eb3610c11f1d1c2ca',
        async: true,
        tagPosition: 'bodyClose',
      },
    ],
  })

  // Same number as the rest of the site (useContact.js).
  const { phoneNumber, phoneDisplay } = useContact()
  const phone = { tel: `+1${phoneNumber}`, display: phoneDisplay }

  const menuOpen = ref(false)

  // Desktop (mouse) visitors can't dial: a tel: click opens an OS "pick an app" prompt, or
  // nothing, outside the page, so it looks dead (Clarity logs dead/rage clicks). Keep following
  // tel: for desktop calling apps, but also show the number in a message on every click
  // (LpCallToast). The Call Now labels stay as they are (client asked not to show the number
  // on them).
  const callHint = ref(0)
  let callHintTimer
  const onCall = (location) => {
    trackEvent('lp_call_click', { cta_location: location, landing_variant: variantKey })
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    callHint.value++ // re-keyed, so repeat clicks get feedback too
    clearTimeout(callHintTimer)
    callHintTimer = setTimeout(() => { callHint.value = 0 }, 6000)
  }

  // In-page nav: mark the item and briefly outline the target so every click visibly does
  // something, even when the page can't scroll further (on desktop the last sections sit at
  // max scroll, so a visitor already at the bottom gets no scroll at all). The outline is
  // drawn by the page's [data-lp-flash] styles.
  const activeNav = ref('')
  let navFlashTimer
  const onNav = (item) => {
    menuOpen.value = false
    activeNav.value = item.href
    const target = document.querySelector(item.href)
    if (!target) return
    clearTimeout(navFlashTimer)
    document.querySelectorAll('[data-lp-flash]').forEach((el) => el.removeAttribute('data-lp-flash'))
    void target.offsetWidth // restart the animation on repeat clicks
    target.setAttribute('data-lp-flash', '')
    // Clear the item mark too, so it isn't left highlighted once the visitor scrolls elsewhere.
    navFlashTimer = setTimeout(() => {
      target.removeAttribute('data-lp-flash')
      activeNav.value = ''
    }, 1600)
  }

  // Desktop Schedule Service: when the form is already in view nothing scrolls, so flash it.
  const formFlash = ref(false)
  let formFlashTimer
  const flashForm = () => {
    clearTimeout(formFlashTimer)
    formFlash.value = false
    requestAnimationFrame(() => {
      formFlash.value = true
      formFlashTimer = setTimeout(() => { formFlash.value = false }, 1500)
    })
  }

  const scrollBehavior = () => (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth')

  // Schedule Service (header, hero, menu, bottom band): bring the on-page form into view,
  // focus its first field and flash it, so the click visibly does something even when the
  // form is already on screen.
  const onSchedule = async (location) => {
    trackEvent('lp_schedule_click', { cta_location: location, landing_variant: variantKey })
    // The open mobile menu sits in the sticky header: let it collapse before measuring,
    // or the scroll overshoots by the menu's height.
    if (menuOpen.value) {
      menuOpen.value = false
      await nextTick()
    }
    const form = document.getElementById('lp-form')
    const desktop = window.matchMedia('(min-width: 1024px)').matches
    form.scrollIntoView({ behavior: scrollBehavior(), block: desktop ? 'center' : 'start' })
    // A text field is focused only with a mouse: on touch screens it would pop the
    // keyboard over the form the visitor was just brought to.
    const first = form.querySelector('select, input')
    if (first?.tagName === 'SELECT' || window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      first?.focus({ preventScroll: true })
    }
    flashForm()
  }

  // Lead sent: the form card shrinks to the thank-you message. If its top is behind the
  // sticky header by then (typical with the phone keyboard open), bring it back into view.
  const onSubmitted = async () => {
    await nextTick()
    const form = document.getElementById('lp-form')
    if (form.getBoundingClientRect().top < 80) form.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
  }

  const { capture } = useLeadAttribution()
  onMounted(capture)

  onBeforeUnmount(() => {
    clearTimeout(callHintTimer)
    clearTimeout(navFlashTimer)
    clearTimeout(formFlashTimer)
  })

  return { phone, menuOpen, callHint, onCall, activeNav, onNav, formFlash, onSchedule, onSubmitted }
}
