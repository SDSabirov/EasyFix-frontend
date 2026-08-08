// v-reveal: scroll-triggered entrance animation.
// Usage: v-reveal or v-reveal="150" (stagger delay in ms).
// Registered on both server (no-op, so SSR can resolve the directive and the
// HTML stays fully visible for crawlers/no-JS users) and client (adds classes
// after mount, so hydration never mismatches).
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    nuxtApp.vueApp.directive('reveal', {
      getSSRProps: () => ({}),
    })
    return
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let observer
  const observe = (el) => {
    observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('rv-in')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
      if (reduced) return
      if (binding.value) el.style.setProperty('--rv-delay', `${binding.value}ms`)
      el.classList.add('rv')
      observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})
