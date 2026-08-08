<template>
  <section id="blogs" class="relative bg-cream py-20 lg:py-28 overflow-hidden">
    <span class="ghost-word text-[7rem] lg:text-[12rem] top-2 -right-6" aria-hidden="true">Journal</span>

    <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
      <!-- Header -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16" v-reveal>
        <div class="max-w-2xl">
          <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
            The Journal
          </span>
          <h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05]">
            Appliance care &amp;
            <em class="font-display font-semibold italic text-brass-dark">repair insights</em>
          </h2>
        </div>
        <NuxtLink
          to="/blogs"
          class="group inline-flex items-center gap-3 whitespace-nowrap font-montserrat text-[12px] font-semibold uppercase tracking-[0.18em] text-primary hover:text-brass-dark transition-colors"
        >
          View All Articles
          <span class="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>

      <div v-if="blogs.length" class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        <article
          v-for="(blog, index) in blogs"
          :key="index"
          class="group bg-white rounded-[1.5rem] overflow-hidden border border-primary/5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
          v-reveal="index * 110"
        >
          <NuxtLink :to="blog.link" class="flex flex-col h-full">
            <div class="relative overflow-hidden aspect-[16/10]">
              <img
                loading="lazy"
                decoding="async"
                :src="blog.image"
                :alt="blog.title"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <span class="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 font-montserrat text-[10px] font-bold uppercase tracking-[0.18em] text-brass-dark">
                {{ blog.category }}
              </span>
            </div>
            <div class="flex flex-col flex-1 p-7">
              <span class="text-xs text-gray-400 mb-3">{{ formatDate(blog.date) }} &middot; {{ blog.readTime }} read</span>
              <h3 class="font-montserrat font-bold text-xl text-primary leading-snug mb-3 group-hover:text-brass-dark transition-colors">
                {{ blog.title }}
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                {{ blog.description }}
              </p>
              <span class="inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.18em] text-primary group-hover:text-brass-dark transition-colors">
                Read Article
                <span class="flex items-center justify-center w-9 h-9 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&#8599;</span>
              </span>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const { getAllBlogs } = useBlogApi()

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// SSR so the article links are in the server HTML for crawlers
const { data: blogs } = await useAsyncData(
  'landing-blogs',
  async () => (await getAllBlogs()).slice(0, 3),
  { default: () => [] }
)
</script>
