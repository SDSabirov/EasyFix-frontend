<template>
  <div>
    <BlogReadingProgress />
    <Navbar />

    <!-- Hero Section -->
    <header v-if="blog" class="relative h-[70vh] lg:h-[80vh] overflow-hidden mt-16 lg:mt-20">
      <img
        :src="blog.image"
        :alt="`${blog.title} - Expert appliance repair insights`"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0" style="background: linear-gradient(to bottom right, rgba(12, 42, 59, 0.8), rgba(28, 110, 140, 0.6), rgba(249, 115, 22, 0.4));"></div>
      
      <!-- Hero Content -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <div class="inline-flex items-center px-4 py-2 rounded-full mb-6" style="background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(8px);">
            <svg class="w-5 h-5 mr-2" style="color: #ffffff;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-semibold" style="color: #ffffff;">{{ blog.date }} • {{ blog.readTime }}</span>
          </div>
          
          <h1 class="text-3xl lg:text-5xl font-bold mb-6 leading-tight" style="color: #ffffff;">
            {{ blog.title }}
          </h1>
          
          <p v-if="blog.excerpt" class="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
            {{ blog.excerpt }}
          </p>
        </div>
      </div>
    </header>

    <!-- Article Content -->
    <article v-if="blog" class="py-20" style="background: linear-gradient(to bottom right, #f8fafc, #ffffff);">
      <div class="container mx-auto px-4 max-w-4xl">
        
        <!-- Article Meta Info -->
        <div class="flex flex-wrap items-center justify-between mb-12 p-6 rounded-2xl" style="background: rgba(249, 115, 22, 0.05); border-left: 4px solid #f97316;">
          <div class="flex items-center space-x-6 mb-4 sm:mb-0">
            <div class="flex items-center text-sm" style="color: #6b7280;">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
              Easy Fix Appliance Team
            </div>
            
            <div class="flex items-center text-sm" style="color: #6b7280;">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
              {{ blog.views || '1.2k views' }}
            </div>
            
            <div class="px-3 py-1 rounded-full text-sm font-semibold" style="background: rgba(249, 115, 22, 0.1); color: #f97316;">
              {{ blog.category || 'Expert Tips' }}
            </div>
          </div>

          <div class="mt-4 sm:mt-0">
            <BlogShareButtons
              v-if="blog"
              :title="blog.title"
              :url="`https://easyfixappliance.com/blogs/${blog.slug}`"
            />
          </div>
        </div>

        <!-- Article Body -->
        <div class="prose prose-lg max-w-none">
          <div class="text-gray-800 leading-relaxed space-y-6" style="font-size: 18px; line-height: 1.8;">
            <div v-html="formatContent(blog.content)" class="formatted-content"></div>
          </div>
        </div>

        <!-- Call to Action Section -->
        <div class="mt-16 p-8 rounded-3xl text-center" style="background: linear-gradient(to right, #0c2a3b, #1C6E8C, #f97316);">
          <h3 class="text-2xl lg:text-3xl font-bold mb-4" style="color: #ffffff;">
            Need Professional Appliance Repair?
          </h3>
          <p class="text-lg mb-8 max-w-2xl mx-auto" style="color: rgba(255, 255, 255, 0.9);">
            Don't let appliance problems disrupt your daily routine. Our certified technicians are ready to help with same-day service throughout the Bay Area.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:4159414144" class="inline-flex items-center px-8 py-4 font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1" style="background: #ffffff; color: #0c2a3b;">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now: (415) 941-4144
            </a>
            
            <NuxtLink to="/booking" class="inline-flex items-center px-8 py-4 border-2 font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-1" style="border-color: #ffffff; color: #ffffff; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1m0 8h6v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm6 0V5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z"/>
              </svg>
              Schedule Online
            </NuxtLink>
          </div>
        </div>

        <!-- Related Articles -->
        <div class="mt-20">
          <h3 class="text-2xl lg:text-3xl font-bold mb-8 text-center" style="color: #1f2937;">
            Related Articles
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="relatedBlog in relatedBlogs" :key="relatedBlog.slug" class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img :src="relatedBlog.image" :alt="relatedBlog.title" class="w-full h-48 object-cover"/>
              <div class="p-6">
                <div class="text-sm mb-2" style="color: #6b7280;">{{ relatedBlog.date }}</div>
                <h4 class="text-lg font-bold mb-3 hover:text-orange-600 transition-colors" style="color: #1f2937;">
                  <NuxtLink :to="relatedBlog.link">{{ relatedBlog.title }}</NuxtLink>
                </h4>
                <p class="text-gray-600 mb-4">{{ relatedBlog.excerpt || relatedBlog.content?.slice(0, 120) + '...' }}</p>
                <NuxtLink :to="relatedBlog.link" class="font-semibold hover:underline" style="color: #f97316;">
                  Read More →
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Loading State -->
    <div v-else class="min-h-screen flex items-center justify-center" style="background: linear-gradient(to bottom right, #f8fafc, #ffffff);">
      <div class="text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 mx-auto mb-4" style="border-color: #f97316;"></div>
        <p class="text-xl" style="color: #6b7280;">Loading article...</p>
      </div>
    </div>

    <Footer />
    <ModalsPrivacy />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const { getBlogBySlug, getRelatedBlogs } = useBlogApi()

const blog = ref(null)
const relatedBlogs = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    blog.value = await getBlogBySlug(route.params.slug)
    if (blog.value) {
      relatedBlogs.value = await getRelatedBlogs(route.params.slug)
    }
  } catch (e) {
    console.error('Error loading blog:', e)
  } finally {
    loading.value = false
  }
})

// Content formatting function
const formatContent = (content) => {
  if (!content) return '';
  
  // Convert line breaks to proper HTML
  return content
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p><br>/g, '<p>')
    .replace(/<br><\/p>/g, '</p>');
};

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
            "logo": {
              "@type": "ImageObject",
              "url": "https://easyfixappliance.com/logo.png"
            }
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
  font-size: 18px;
  line-height: 1.8;
  color: #374151;
}

.formatted-content h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #111827;
  line-height: 1.3;
}

.formatted-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
  line-height: 1.4;
}

.formatted-content p {
  margin-bottom: 1rem;
  line-height: 1.75;
  color: #374151;
}

.formatted-content strong {
  font-weight: 600;
  color: #111827;
}

.formatted-content ul, .formatted-content ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.formatted-content li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.formatted-content a {
  color: #f97316;
  text-decoration: underline;
}

.formatted-content a:hover {
  color: #ea580c;
}
</style>
