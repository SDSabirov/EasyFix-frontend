// Lightweight axios-compatible shim over Nuxt's built-in $fetch (ofetch).
// Keeps the `$api.get(url, { params }) -> { data }` interface the composables use.
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const request = (method) => async (url, cfg = {}) => {
    const data = await $fetch(url, {
      baseURL: config.public.apiBaseUrl,
      method,
      params: cfg.params,
      body: cfg.body,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        ...cfg.headers,
      },
    })
    return { data }
  }

  return {
    provide: {
      api: {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE'),
      },
    },
  }
})
