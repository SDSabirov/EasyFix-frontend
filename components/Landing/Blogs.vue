<template>
  <section id="blogs" class="bg-gray-50 py-16 lg:py-24">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
          <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span class="text-primary font-semibold text-sm">Expert Tips</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Latest Appliance Care & Repair Insights
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Stay informed with expert advice, maintenance tips, and industry insights from our certified appliance repair specialists.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        <article
          v-for="(blog, index) in blogs"
          :key="index"
          class="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="blog.image"
              :alt="blog.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div class="absolute top-4 left-4">
              <span class="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-semibold">
                {{ blog.category }}
              </span>
            </div>
          </div>
          
          <div class="p-6 flex flex-col flex-grow">
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
              </svg>
              {{ blog.date }}
              <span class="mx-2">•</span>
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
              {{ blog.readTime }} read
            </div>
            
            <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors flex-grow-0">
              {{ blog.title }}
            </h3>
            
            <p class="text-gray-600 mb-4 leading-relaxed flex-grow text-sm lg:text-base">
              {{ blog.description }}
            </p>
            
            <div class="mt-auto">
              <NuxtLink 
                :to="blog.link"
                class="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group"
              >
                <span>Read Full Article</span>
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <!-- Newsletter Signup -->
      <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white text-center mb-12">
        <div class="max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold mb-4">
            Stay Updated with Expert Tips
          </h3>
          <p class="text-white/90 mb-6">
            Subscribe to our newsletter for the latest appliance maintenance tips, repair insights, and exclusive offers.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              class="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button class="px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <!-- View All Blogs -->
      <div class="text-center">
        <NuxtLink 
          to="/blogs" 
          class="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
          </svg>
          View All Articles
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'

const { getAllBlogs } = useBlogApi()

const blogs = ref([])

onMounted(async () => {
  const allBlogs = await getAllBlogs()
  blogs.value = allBlogs.slice(0, 3) // Get first 3 for landing page
})
</script>