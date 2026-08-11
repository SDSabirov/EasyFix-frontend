<template>
  <div>
    <BlogReadingProgress />
    <Navbar />

    <!-- Hero Section -->
    <header v-if="blog" class="relative h-[50vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      <img
        :src="blog.image"
        :alt="`${blog.title} - Expert appliance repair insights`"
        loading="eager"
        fetchpriority="high"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" aria-hidden="true"></div>
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>

      <!-- Hero Content -->
      <div class="absolute inset-0 flex items-end sm:items-center justify-center pb-14 sm:pb-0">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <span class="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-brass-light mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-brass" aria-hidden="true"></span>
            {{ formatDate(blog.date) }} &middot; {{ blog.readTime }}
          </span>

          <h1 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
            {{ blog.title }}
          </h1>

          <p v-if="blog.excerpt" class="hidden sm:block text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {{ blog.excerpt }}
          </p>
        </div>
      </div>
    </header>

    <!-- Article Content -->
    <article v-if="blog" class="relative bg-cream py-14 sm:py-20 overflow-hidden">
      <div class="container mx-auto px-4 max-w-4xl relative z-10">

        <!-- Article Meta Info -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 p-5 sm:p-6 rounded-[1.5rem] bg-white border border-primary/10">
          <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <svg class="w-4 h-4 text-brass" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
              Easy Fix Appliance Team
            </div>

            <div class="flex items-center gap-2 text-sm text-gray-500">
              <svg class="w-4 h-4 text-brass" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
              {{ blog.views || '1.2k views' }}
            </div>

            <span class="rounded-full border border-brass/40 bg-cream px-4 py-1.5 font-montserrat text-[10px] font-bold uppercase tracking-[0.18em] text-brass-dark">
              {{ blog.category || 'Expert Tips' }}
            </span>
          </div>

          <BlogShareButtons
            v-if="blog"
            :title="blog.title"
            :url="`https://easyfixappliance.com/blogs/${blog.slug}`"
          />
        </div>

        <!-- Article Body -->
        <div class="prose prose-lg max-w-none">
          <div v-html="blog.content" class="formatted-content"></div>
        </div>

        <!-- Call to Action Section -->
        <div class="grain glow-brass relative bg-ink rounded-[2rem] mt-16 px-6 py-12 sm:px-12 sm:py-14 text-center overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true"></div>
          <div class="relative z-10">
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-white leading-tight mb-4">
              Need Professional
              <em class="font-display font-semibold italic text-brass-light">Appliance Repair?</em>
            </h3>
            <p class="text-white/60 text-base sm:text-lg mb-9 max-w-2xl mx-auto leading-relaxed">
              Don't let appliance problems disrupt your daily routine. Our certified technicians are ready to help with same-day service throughout the Bay Area.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:4159414144"
                class="w-full sm:w-auto inline-flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-white text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:text-white hover:scale-[1.03] touch-manipulation"
              >
                Call Now: (415) 941-4144
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

        <!-- Related Articles -->
        <div class="mt-16 sm:mt-20">
          <div class="text-center mb-10">
            <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
              Keep Reading
            </span>
            <h3 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-4xl text-primary leading-[1.05]">
              Related
              <em class="font-display font-semibold italic text-brass-dark">Articles</em>
            </h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            <article
              v-for="(relatedBlog, index) in relatedBlogs"
              :key="relatedBlog.slug"
              class="group bg-white rounded-[1.5rem] overflow-hidden border border-primary/5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
              v-reveal="(index % 2) * 90"
            >
              <NuxtLink :to="relatedBlog.link" class="flex flex-col h-full">
                <div class="relative overflow-hidden aspect-[16/10]">
                  <img
                    loading="lazy"
                    decoding="async"
                    :src="relatedBlog.image"
                    :alt="relatedBlog.title"
                    class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span
                    class="absolute bottom-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-ink backdrop-blur-sm translate-y-14 group-hover:translate-y-0 transition-transform duration-500"
                    aria-hidden="true"
                  >&#8599;</span>
                </div>
                <div class="flex flex-col flex-1 p-7">
                  <span class="text-xs text-gray-400 mb-3">{{ formatDate(relatedBlog.date) }}</span>
                  <h4 class="font-montserrat font-bold text-lg text-primary leading-snug mb-3 group-hover:text-brass-dark transition-colors">
                    {{ relatedBlog.title }}
                  </h4>
                  <p class="text-sm text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {{ relatedBlog.excerpt || relatedBlog.content?.slice(0, 120) + '...' }}
                  </p>
                  <span class="inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.18em] text-primary group-hover:text-brass-dark transition-colors">
                    Read More
                    <span class="flex items-center justify-center w-9 h-9 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&#8599;</span>
                  </span>
                </div>
              </NuxtLink>
            </article>
          </div>
        </div>
      </div>
    </article>

    <!-- Loading State -->
    <div v-else class="min-h-screen flex items-center justify-center bg-cream">
      <div class="text-center">
        <div class="animate-spin rounded-full h-14 w-14 border-b-2 border-t-2 border-brass mx-auto mb-4"></div>
        <p class="text-lg text-gray-500">Loading article...</p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const { getBlogBySlug, getRelatedBlogs } = useBlogApi()

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Fetched during SSR so the article content and meta tags are present in the
// server HTML for crawlers and AI bots that don't execute JavaScript.
const { data: blog, pending: loading } = await useAsyncData(
  `blog-${route.params.slug}`,
  () => getBlogBySlug(route.params.slug)
)
const { data: relatedBlogs } = await useAsyncData(
  `blog-related-${route.params.slug}`,
  () => (blog.value ? getRelatedBlogs(route.params.slug) : []),
  { default: () => [] }
)

// Enhanced SEO meta tags
useHead(() => {
  if (!blog.value) return {};

  return {
    title: `${blog.value.title} | Easy Fix Appliance Blog`,
    meta: [
      {
        name: "description",
        content: blog.value.excerpt || blog.value.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...'
      },
      {
        name: "keywords",
        content: `${blog.value.category?.toLowerCase()}, appliance repair, Bay Area, ${blog.value.title.toLowerCase()}, maintenance tips, luxury appliances`
      },
      {
        property: "og:title",
        content: blog.value.title
      },
      {
        property: "og:description",
        content: blog.value.excerpt || blog.value.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...'
      },
      {
        property: "og:image",
        content: blog.value.image
      },
      {
        property: "og:type",
        content: "article"
      },
      {
        property: "article:published_time",
        content: blog.value.date
      },
      {
        property: "article:author",
        content: "Easy Fix Appliance Team"
      },
      {
        property: "article:section",
        content: blog.value.category
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blog.value.title,
          "description": blog.value.excerpt || blog.value.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...',
          "image": blog.value.image,
          "datePublished": blog.value.date,
          "dateModified": blog.value.date,
          "author": {
            "@type": "Organization",
            "name": "Easy Fix Appliance",
            "url": "https://easyfixappliance.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Easy Fix Appliance",
            "url": "https://easyfixappliance.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://easyfixappliance.com/logo.svg"
            },
            "sameAs": [
              "https://www.instagram.com/easyfixappliance/",
              "https://www.facebook.com/profile.php?id=61570244923151"
            ]
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://easyfixappliance.com/blogs/${blog.value.slug}`
          }
        })
      }
    ]
  };
});
</script>

<style scoped>
.formatted-content {
  max-width: none;
  font-size: 16px;
  line-height: 1.75;
  color: #374151;
}

@media (min-width: 640px) {
  .formatted-content {
    font-size: 18px;
    line-height: 1.8;
  }
}

.formatted-content :deep(h2) {
  font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0c2a3b;
  line-height: 1.3;
}

@media (min-width: 640px) {
  .formatted-content :deep(h2) {
    font-size: 1.625rem;
  }
}

.formatted-content :deep(h3) {
  font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #0c2a3b;
  line-height: 1.4;
}

@media (min-width: 640px) {
  .formatted-content :deep(h3) {
    font-size: 1.25rem;
  }
}

.formatted-content :deep(p) {
  line-height: 1.75;
  color: #374151;
}

.formatted-content :deep(strong) {
  font-weight: 600;
  color: #0c2a3b;
}

.formatted-content :deep(ul), .formatted-content :deep(ol) {
  padding-left: 1.5rem;
}

.formatted-content :deep(li) {
  line-height: 1.6;
}

.formatted-content :deep(blockquote) {
  border-left: 2px solid #B08D57;
  padding-left: 1.25rem;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: 1.15em;
  color: #0c2a3b;
}

.formatted-content :deep(a) {
  color: #8F7040;
  text-decoration: underline;
  text-decoration-color: rgba(176, 141, 87, 0.5);
  text-underline-offset: 3px;
  transition: color 0.2s ease;
}

.formatted-content :deep(a:hover) {
  color: #B08D57;
}
</style>
