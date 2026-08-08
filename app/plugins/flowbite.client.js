// Initialize Flowbite's data-attribute components after every page render,
// not just once on app mount — fixes drawers/modals/accordions being dead
// after client-side navigation.
export default defineNuxtPlugin((nuxtApp) => {
  let initFlowbite
  const init = async () => {
    if (!initFlowbite) {
      ;({ initFlowbite } = await import('flowbite'))
    }
    initFlowbite()
  }

  nuxtApp.hook('app:mounted', init)
  nuxtApp.hook('page:finish', init)
})
