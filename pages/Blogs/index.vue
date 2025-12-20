<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <header class="relative h-[60vh] lg:h-[70vh] overflow-hidden mt-16 lg:mt-20" style="background: #0c2a3b; background-image: linear-gradient(to bottom right, #0c2a3b, #1C6E8C, #f97316);">
      <!-- Professional Background Elements -->
      <div class="absolute top-16 left-12 w-20 h-20 rounded-full blur-lg animate-bounce" style="background: rgba(249, 115, 22, 0.25); animation-delay: 0.5s;"></div>
      <div class="absolute bottom-32 right-20 w-36 h-36 rounded-full blur-xl animate-pulse delay-1000" style="background: rgba(28, 110, 140, 0.2);"></div>
      <div class="absolute top-1/3 right-1/4 w-16 h-16 rounded-full blur-md animate-pulse delay-500" style="background: rgba(251, 191, 36, 0.3);"></div>
      
      <!-- Hero Content -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 rounded-full mb-8 border" style="background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(8px); border-color: rgba(255, 255, 255, 0.3);">
            <svg class="w-6 h-6 mr-3" style="color: #ffffff;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12 6.253v13c0 1.079.952 1.845 2.009 1.674 1.337-.218 2.995-.672 4.49-1.54A2 2 0 0020 17.901V4.508c0-1.079-.952-1.845-2.009-1.674-1.337.218-2.995.672-4.49 1.54A2 2 0 0012 6.253zM8 8v10c0 .552-.895 1-2 1s-2-.448-2-1V8c0-.552.895-1 2-1s2 .448 2 1z" clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold text-lg" style="color: #ffffff;">Expert Insights & Tips</span>
          </div>
          
          <h1 class="text-4xl lg:text-6xl font-bold mb-8 leading-tight" style="color: #ffffff;">
            Appliance Care
            <span class="block" style="color: #f97316;">Blog & Resources</span>
          </h1>
          
          <p class="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
            Expert tips, maintenance guides, and industry insights to help you get the most out of your <strong>luxury appliances</strong>. Learn from Bay Area's trusted repair specialists.
          </p>
        </div>
      </div>
    </header>

    <!-- Blog Articles Section -->
    <section class="py-20 lg:py-32" style="background: linear-gradient(to bottom right, #f8fafc, #ffffff);">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8" style="color: #1f2937;">Latest Articles</h2>
          <p class="text-xl max-w-3xl mx-auto mb-8" style="color: #6b7280;">
            Stay informed with expert advice from professional appliance technicians serving the Bay Area
          </p>

          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto mb-8">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search articles..."
                class="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                style="color: #1f2937;"
              />
              <svg class="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          <!-- Category Filter -->
          <div class="flex flex-wrap gap-3 justify-center">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="selectedCategory = cat"
              :class="{
                'bg-primary text-white': cat === selectedCategory,
                'bg-white text-primary border-2 border-primary hover:bg-primary/10': cat !== selectedCategory
              }"
              class="px-5 py-2 rounded-full transition-all font-semibold text-sm"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="text-center py-20">
          <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-t-2 mx-auto mb-4" style="border-color: #f97316;"></div>
          <p class="text-xl" style="color: #6b7280;">Loading articles...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-20">
          <p class="text-xl text-red-600">{{ error }}</p>
        </div>

        <!-- Blog Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Loop through the paginated blogs array -->
          <article
            v-for="(blog, index) in paginatedBlogs"
            :key="index"
            class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="relative overflow-hidden">
              <img
                :src="blog.image"
                :alt="`${blog.title} - Appliance maintenance and repair tips`"
                class="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div class="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold" style="background: rgba(249, 115, 22, 0.9); color: #ffffff;">
                {{ blog.category }}
              </div>
              <div class="absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full" style="background: rgba(255, 255, 255, 0.9); color: #1f2937;">
                {{ blog.readTime }}
              </div>
            </div>
            
            <div class="p-8">
              <div class="flex items-center mb-4 text-sm" style="color: #6b7280;">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
                {{ blog.date }}
              </div>
              
              <h3 class="text-xl font-bold mb-4 leading-tight hover:text-orange-600 transition-colors" style="color: #1f2937;">
                <NuxtLink :to="blog.link" class="block">
                  {{ blog.title }}
                </NuxtLink>
              </h3>
              
              <p class="text-gray-600 mb-6 leading-relaxed">{{ blog.description }}</p>
              
              <div class="flex items-center justify-between">
                <NuxtLink
                  :to="blog.link"
                  class="inline-flex items-center font-bold text-lg transition-all duration-300 hover:gap-3" 
                  style="color: #f97316;"
                >
                  Read Article
                  <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
                
                <div class="flex items-center space-x-3 text-sm" style="color: #6b7280;">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                    </svg>
                    {{ blog.views }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <nav v-if="totalPages > 1 && !loading" class="flex justify-center gap-2 mt-12">
          <button
            @click="currentPage = Math.max(1, currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-4 py-2 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            :class="currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'"
          >
            Previous
          </button>

          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            :class="{ 'bg-primary text-white': page === currentPage, 'bg-white border-2 border-primary text-primary hover:bg-primary/10': page !== currentPage }"
            class="px-4 py-2 rounded-lg font-semibold transition-all"
          >
            {{ page }}
          </button>

          <button
            @click="currentPage = Math.min(totalPages, currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="px-4 py-2 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            :class="currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'"
          >
            Next
          </button>
        </nav>
      </div>
    </section>

    <!-- Newsletter Signup Section -->
    <section class="py-20" style="background: #0c2a3b;">
      <div class="container mx-auto px-4 max-w-screen-xl text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6" style="color: #ffffff;">
            Stay Updated with Expert Tips
          </h2>
          <p class="text-xl mb-8" style="color: rgba(255, 255, 255, 0.9);">
            Get the latest appliance maintenance tips and industry insights delivered to your inbox
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              class="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button class="px-8 py-3 font-bold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1" style="background: linear-gradient(to right, #facc15, #f97316); color: #ffffff;">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>

    <FormsContact />
    <Footer />
    <ModalsPrivacy />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const { getAllBlogs } = useBlogApi()

const blogs = ref([])
const loading = ref(true)
const error = ref(null)

// Search and filter
const searchQuery = ref('')
const selectedCategory = ref('All')
const categories = ref(['All', 'Technology', 'Maintenance', 'Energy Savings', 'Troubleshooting', 'Seasonal Care', 'Repair Tips'])

// Pagination
const currentPage = ref(1)
const perPage = 9

// Filtered blogs
const filteredBlogs = computed(() => {
  let filtered = blogs.value

  // Filter by category
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(b => b.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(b =>
      b.title.toLowerCase().includes(query) ||
      b.description.toLowerCase().includes(query)
    )
  }

  return filtered
})

// Paginated blogs
const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return filteredBlogs.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(filteredBlogs.value.length / perPage))

onMounted(async () => {
  try {
    blogs.value = await getAllBlogs()
  } catch (e) {
    error.value = 'Failed to load blog posts'
    console.error(e)
  } finally {
    loading.value = false
  }
})

// SEO optimization
useHead({
  title: 'Appliance Repair Blog | Expert Tips & Guides | Easy Fix Appliance',
  meta: [
    {
      name: 'description',
      content: 'Expert appliance repair tips, maintenance guides, and industry insights from Easy Fix Appliance. Learn how to maximize your luxury appliances lifespan and save on repairs.'
    },
    {
      name: 'keywords',
      content: 'appliance repair blog, appliance maintenance tips, luxury appliance care, Sub-Zero maintenance, Viking appliance tips, appliance troubleshooting'
    },
    {
      property: 'og:title',
      content: 'Appliance Repair Blog | Easy Fix Appliance'
    },
    {
      property: 'og:description',
      content: 'Discover professional appliance repair insights, maintenance tips, and expert advice from Bay Area\'s trusted repair specialists.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
});
</script>
