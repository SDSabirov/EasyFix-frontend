<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <header class="relative bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <span class="ghost-word text-[6rem] lg:text-[11rem] top-20 -right-6" aria-hidden="true">Journal</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            Expert Insights &amp; Tips
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl lg:text-6xl text-primary leading-[1.05] mb-6">
            Appliance Care
            <em class="block font-display font-semibold italic text-brass-dark">Blog &amp; Resources</em>
          </h1>

          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert tips, maintenance guides, and industry insights to help you get the most out of your
            <strong class="text-primary font-semibold">luxury appliances</strong>. Learn from Bay Area's trusted repair specialists.
          </p>
        </div>
      </div>
    </header>

    <!-- Blog Articles Section -->
    <section class="relative bg-white py-20 lg:py-28 overflow-hidden">
      <span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 -left-8" aria-hidden="true">Articles</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center mb-12 lg:mb-16">
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6" v-reveal>
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            The Journal
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05] mb-5">
            Latest
            <em class="font-display font-semibold italic text-brass-dark">Articles</em>
          </h2>
          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stay informed with expert advice from professional appliance technicians serving the Bay Area
          </p>

          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto mb-8">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search articles..."
                class="w-full px-6 py-4 rounded-full border border-primary/15 bg-white text-primary placeholder-gray-400 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/30 transition-colors"
              />
              <svg class="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          <!-- Category Filter -->
          <div class="flex flex-wrap gap-3 justify-center">
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              @click="selectedCategory = cat"
              :aria-pressed="cat === selectedCategory"
              class="rounded-full border px-5 py-2.5 font-montserrat text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:scale-[1.05] touch-manipulation"
              :class="cat === selectedCategory
                ? 'bg-ink text-white border-ink'
                : 'bg-white text-primary border-primary/15 hover:bg-ink hover:text-white hover:border-ink'"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="text-center py-20">
          <div class="animate-spin rounded-full h-14 w-14 border-b-2 border-t-2 border-brass mx-auto mb-4"></div>
          <p class="text-lg text-gray-500">Loading articles...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-20">
          <p class="text-xl text-red-600">{{ error }}</p>
        </div>

        <!-- Blog Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <!-- Loop through the paginated blogs array -->
          <article
            v-for="(blog, index) in paginatedBlogs"
            :key="index"
            class="group bg-white rounded-[1.5rem] overflow-hidden border border-primary/5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
            v-reveal="(index % 3) * 90"
          >
            <NuxtLink :to="blog.link" class="flex flex-col h-full">
              <div class="relative overflow-hidden aspect-[16/10]">
                <img
                  loading="lazy"
                  decoding="async"
                  :src="blog.image"
                  :alt="`${blog.title} - Appliance maintenance and repair tips`"
                  class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span class="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 font-montserrat text-[10px] font-bold uppercase tracking-[0.18em] text-brass-dark">
                  {{ blog.category }}
                </span>
                <span
                  class="absolute bottom-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-ink backdrop-blur-sm translate-y-14 group-hover:translate-y-0 transition-transform duration-500"
                  aria-hidden="true"
                >&#8599;</span>
              </div>

              <div class="flex flex-col flex-1 p-7">
                <span class="text-xs text-gray-400 mb-3">{{ formatDate(blog.date) }} &middot; {{ blog.readTime }} read</span>

                <h3 class="font-montserrat font-bold text-xl text-primary leading-snug mb-3 group-hover:text-brass-dark transition-colors">
                  {{ blog.title }}
                </h3>

                <p class="text-sm text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">{{ blog.description }}</p>

                <div class="flex items-center justify-between">
                  <span class="inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.18em] text-primary group-hover:text-brass-dark transition-colors">
                    Read Article
                    <span class="flex items-center justify-center w-9 h-9 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&#8599;</span>
                  </span>

                  <span class="inline-flex items-center gap-1.5 text-xs text-gray-400">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                    </svg>
                    {{ blog.views }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>

        <!-- Pagination -->
        <nav v-if="totalPages > 1 && !loading" aria-label="Blog pages" class="flex flex-wrap justify-center gap-2 mt-14">
          <button
            @click="currentPage = Math.max(1, currentPage - 1)"
            :disabled="currentPage === 1"
            class="min-h-[44px] px-5 py-2 rounded-full border font-montserrat text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed touch-manipulation"
            :class="currentPage === 1 ? 'bg-white text-gray-400 border-primary/10' : 'bg-white text-primary border-primary/15 hover:bg-ink hover:text-white hover:border-ink'"
          >
            Previous
          </button>

          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            class="min-h-[44px] min-w-[44px] px-4 py-2 rounded-full border font-montserrat text-xs font-semibold transition-all duration-300 touch-manipulation"
            :class="page === currentPage ? 'bg-ink text-white border-ink' : 'bg-white text-primary border-primary/15 hover:bg-ink hover:text-white hover:border-ink'"
          >
            {{ page }}
          </button>

          <button
            @click="currentPage = Math.min(totalPages, currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="min-h-[44px] px-5 py-2 rounded-full border font-montserrat text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed touch-manipulation"
            :class="currentPage === totalPages ? 'bg-white text-gray-400 border-primary/10' : 'bg-white text-primary border-primary/15 hover:bg-ink hover:text-white hover:border-ink'"
          >
            Next
          </button>
        </nav>
      </div>
    </section>

    <!-- Stay Updated CTA Section -->
    <section class="grain glow-brass relative bg-ink py-20 lg:py-28 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
      <span class="ghost-word ghost-word--light text-[7rem] lg:text-[12rem] top-8 -right-8" aria-hidden="true">Insights</span>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div class="text-center max-w-2xl mx-auto" v-reveal>
          <span class="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            From Our Technicians
          </span>

          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-white leading-[1.05] mb-6">
            Stay Updated with
            <em class="font-display font-semibold italic text-brass-light">Expert Tips</em>
          </h2>
          <p class="text-white/60 text-base sm:text-lg leading-relaxed mb-10">
            Get the latest appliance maintenance tips and industry insights — or talk to a certified Bay Area technician today
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:4159414144"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
            >
              Call (415) 941-4144
            </a>
            <NuxtLink
              to="/booking"
              class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full border border-white/30 text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-light hover:scale-[1.03] touch-manipulation"
            >
              Schedule Online
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <FormsContact />
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const { getAllBlogs } = useBlogApi()

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Fetched during SSR so crawlers and AI bots get the full list without executing JS
const { data: blogs, pending: loading } = await useAsyncData('blogs-list', () => getAllBlogs(), {
  default: () => [],
})
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
