<template>
  <nav aria-label="Breadcrumb" class="bg-gray-50 py-3 px-4">
    <div class="container mx-auto max-w-screen-xl">
      <ol class="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <NuxtLink 
            to="/" 
            class="hover:text-primary transition-colors"
            aria-label="Go to homepage"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span class="sr-only">Home</span>
          </NuxtLink>
        </li>
        
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
          <svg class="w-4 h-4 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
          
          <NuxtLink 
            v-if="index < breadcrumbs.length - 1"
            :to="crumb.path" 
            class="hover:text-primary transition-colors"
          >
            {{ crumb.name }}
          </NuxtLink>
          
          <span 
            v-else 
            class="text-gray-900 font-medium"
            aria-current="page"
          >
            {{ crumb.name }}
          </span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  customBreadcrumbs: {
    type: Array,
    default: () => []
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
</script>