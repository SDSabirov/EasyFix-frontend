<template>
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol
      class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em]"
    >
      <li>
        <NuxtLink to="/" :class="linkClass">Home</NuxtLink>
      </li>

      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="crumb.path"
        class="flex items-center gap-x-3"
      >
        <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>

        <NuxtLink
          v-if="index < breadcrumbs.length - 1"
          :to="crumb.path"
          :class="linkClass"
        >
          {{ crumb.name }}
        </NuxtLink>

        <span v-else :class="currentClass" aria-current="page">
          {{ crumb.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  customBreadcrumbs: {
    type: Array,
    default: () => []
  },
  // Switches text colors for placement on dark (ink) heroes.
  dark: {
    type: Boolean,
    default: false
  },
  // Set to false when the page already emits BreadcrumbList schema itself.
  schema: {
    type: Boolean,
    default: true
  }
})

const route = useRoute()

const breadcrumbs = computed(() => {
  if (props.customBreadcrumbs.length > 0) {
    return props.customBreadcrumbs
  }

  // Auto-generate breadcrumbs from route
  const pathArray = route.path.split('/').filter(path => path)
  const breadcrumbArray = []

  pathArray.forEach((path, index) => {
    const routePath = '/' + pathArray.slice(0, index + 1).join('/')
    const name = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')

    breadcrumbArray.push({
      name,
      path: routePath
    })
  })

  return breadcrumbArray
})

const linkClass = computed(() =>
  props.dark
    ? 'text-white/50 hover:text-brass-light transition-colors'
    : 'text-gray-500 hover:text-brass-dark transition-colors'
)

const currentClass = computed(() =>
  props.dark ? 'text-brass-light' : 'text-brass-dark'
)

if (props.schema) {
  useSchemaOrg([
    defineBreadcrumb({
      itemListElement: () => [
        { name: 'Home', item: '/' },
        ...breadcrumbs.value.map((crumb) => ({ name: crumb.name, item: crumb.path })),
      ],
    }),
  ])
}
</script>
