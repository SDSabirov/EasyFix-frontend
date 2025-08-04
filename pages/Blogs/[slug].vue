<template>
  <div>
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
          
          <div class="flex items-center space-x-4">
            <button class="p-2 rounded-full hover:bg-orange-100 transition-colors" style="color: #f97316;">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
              </svg>
            </button>
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
import appliance1 from "~/assets/img/blogs/appliance1.webp";
import oemParts from "~/assets/img/blogs/oem-parts.webp";

// Enhanced blog data with more recent content
const blogs = [
  {
    slug: "2025-smart-appliance-technology",
    title: "2025 Smart Appliance Technology: What Bay Area Homeowners Need to Know",
    image: appliance1,
    excerpt: "Discover the latest smart appliance innovations revolutionizing modern kitchens and how they benefit Bay Area homeowners.",
    date: "January 15, 2025",
    readTime: "7 min read",
    category: "Technology",
    views: "2.1k views",
    content: `
      <h2>The Smart Appliance Revolution is Here</h2>
      <p>Smart appliance technology has evolved dramatically in 2025, offering Bay Area homeowners unprecedented convenience, energy efficiency, and connectivity. From WiFi-enabled refrigerators that can order groceries to AI-powered ovens that adjust cooking times automatically, these innovations are transforming how we interact with our kitchen appliances.</p>

      <h3>Key Smart Features to Look For</h3>
      <p><strong>Remote Monitoring and Control:</strong> Modern smart appliances allow you to monitor and control your devices from anywhere using smartphone apps. Check if your oven is still on, adjust refrigerator temperatures, or start your dishwasher while at work.</p>

      <p><strong>Energy Management:</strong> Smart appliances can optimize energy usage by running during off-peak hours, significantly reducing utility bills for Bay Area homeowners facing high energy costs.</p>

      <p><strong>Predictive Maintenance:</strong> Advanced sensors can detect potential issues before they become major problems, alerting you when it's time for maintenance or repairs.</p>

      <h3>Popular Smart Appliance Brands in 2025</h3>
      <p>Leading manufacturers like Sub-Zero, Wolf, Viking, and Thermador have integrated cutting-edge smart features into their latest models. These luxury brands now offer voice control, app connectivity, and automated diagnostics as standard features.</p>

      <h3>Installation and Maintenance Considerations</h3>
      <p>While smart appliances offer incredible benefits, they require professional installation and specialized maintenance. Easy Fix Appliance's certified technicians are trained on the latest smart appliance technologies and can help with setup, troubleshooting, and repairs throughout the Bay Area.</p>

      <h3>The Future is Connected</h3>
      <p>As smart home ecosystems continue to evolve, appliances are becoming integral components of connected homes. By 2025, we expect to see even more integration between appliances, home security systems, and energy management platforms.</p>
    `,
  },
  {
    slug: "why-use-only-oem-parts",
    title: "Why You Should Only Use OEM Parts for Your Luxury Appliances",
    image: oemParts,
    excerpt: "Learn why genuine manufacturer parts are essential for maintaining your Sub-Zero, Viking, and Wolf appliances.",
    date: "January 8, 2025",
    readTime: "5 min read",
    category: "Maintenance",
    views: "1.8k views",
    content: `
      <h2>The Critical Importance of OEM Parts</h2>
      <p>When it comes to repairing luxury appliances like Sub-Zero, Viking, or Wolf, homeowners are often faced with the choice of using original equipment manufacturer (OEM) parts or opting for cheaper aftermarket alternatives. While aftermarket parts may seem like a more cost-effective solution upfront, they can lead to bigger problems in the long run, particularly with high-end appliances.</p>

      <h3>1. Guaranteed Compatibility</h3>
      <p>OEM parts are designed specifically for your appliance model, ensuring a perfect fit and seamless functionality. Using generic parts can lead to improper installations, which may cause the appliance to malfunction or require further repairs. For instance, Sub-Zero compressors or Viking burner replacements need to match the exact specifications to ensure proper performance.</p>

      <h3>2. Maintains Warranty Coverage</h3>
      <p>Most high-end appliance manufacturers, including Sub-Zero and Viking, offer warranties that protect your investment. However, if you use non-OEM parts for repairs, you risk voiding your warranty. Sticking to OEM parts keeps your warranty intact and ensures that your appliance is covered in case of future issues.</p>

      <h3>3. Superior Quality and Durability</h3>
      <p>High-end appliances are built to last, and OEM parts are manufactured to the same high standards. Aftermarket parts, on the other hand, may be made from inferior materials that wear out faster, leading to frequent breakdowns. OEM parts ensure the same durability and quality as the original components.</p>

      <h3>4. Preserves Performance and Efficiency</h3>
      <p>Your Sub-Zero or Viking appliance is engineered for precision performance. Using OEM parts helps maintain this level of performance, while aftermarket parts may not be able to replicate the exact specifications, leading to decreased efficiency or functionality.</p>

      <h3>5. Long-Term Cost Savings</h3>
      <p>While OEM parts may be more expensive initially, they offer greater long-term savings. Non-OEM parts may cause more damage to your appliance over time, leading to costly repairs or even the need for a full replacement.</p>

      <h3>Conclusion</h3>
      <p>When it comes to repairing high-end appliances, it's essential to invest in OEM parts to preserve the quality, performance, and longevity of your appliances. Always trust a professional repair service that uses OEM parts to ensure your luxury appliances receive the care they deserve.</p>
    `,
  },
  {
    slug: "energy-efficiency-tips-2025",
    title: "Energy Efficiency Tips: Reducing Your Appliance Energy Costs in 2025",
    image: appliance1,
    excerpt: "Discover proven strategies to cut your energy bills while maintaining optimal appliance performance.",
    date: "December 28, 2024",
    readTime: "6 min read",
    category: "Energy Savings",
    views: "3.2k views",
    content: `
      <h2>Maximizing Energy Efficiency in Your Bay Area Home</h2>
      <p>With rising energy costs in the Bay Area, homeowners are increasingly looking for ways to reduce their utility bills without sacrificing comfort or convenience. Your appliances represent a significant portion of your home's energy consumption, making them an ideal target for efficiency improvements.</p>

      <h3>Smart Usage Strategies</h3>
      <p><strong>Time-of-Use Optimization:</strong> Run energy-intensive appliances like dishwashers and washing machines during off-peak hours when electricity rates are lower. Most Bay Area utility companies offer time-of-use rates that can save you 20-30% on energy costs.</p>

      <p><strong>Load Management:</strong> Always run full loads in your dishwasher and washing machine. These appliances use roughly the same amount of energy regardless of load size, so maximizing each cycle's efficiency is crucial.</p>

      <h3>Maintenance for Efficiency</h3>
      <p><strong>Regular Cleaning:</strong> Keep refrigerator coils clean, replace HVAC filters monthly, and clean dryer vents regularly. Dirty components force appliances to work harder, increasing energy consumption by up to 25%.</p>

      <p><strong>Temperature Optimization:</strong> Set your refrigerator to 37°F and freezer to 0°F. Water heaters should be set to 120°F for optimal efficiency without sacrificing performance.</p>

      <h3>Upgrade Considerations</h3>
      <p>If your appliances are over 10 years old, upgrading to ENERGY STAR certified models can reduce energy consumption by 10-50%. Modern luxury brands like Sub-Zero and Wolf offer highly efficient models that can significantly impact your energy bills.</p>

      <h3>Professional Energy Audits</h3>
      <p>Consider scheduling a professional energy audit with Easy Fix Appliance. Our technicians can identify inefficiencies in your current appliances and recommend specific improvements or upgrades that will provide the best return on investment.</p>
    `,
  },
  {
    slug: "how-to-maximize-appliance-lifespan",
    title: "How to Maximize the Lifespan of Your High-End Appliances",
    image: oemParts,
    excerpt: "Professional maintenance secrets that can extend your luxury appliances' lifespan by years.",
    date: "December 20, 2024",
    readTime: "8 min read",
    category: "Maintenance",
    views: "4.5k views",
    content: `
      <h2>Protecting Your Appliance Investment</h2>
      <p>Luxury appliances like Sub-Zero, Viking, Wolf, and Thermador are designed for performance, longevity, and aesthetics. However, like all appliances, they need proper care and maintenance to ensure they function at their best for many years. With proper care, these appliances can last 15-20 years or more.</p>

      <h3>1. Schedule Regular Professional Maintenance</h3>
      <p>Just like a luxury car, high-end appliances require regular servicing to stay in peak condition. Professional technicians who specialize in brands like Sub-Zero and Viking have the expertise to identify potential issues before they become major problems. Scheduling a yearly inspection and maintenance service can help prevent breakdowns and extend the life of your appliances.</p>

      <h3>2. Clean Appliances Correctly</h3>
      <p>Every appliance has specific cleaning requirements. For instance, Sub-Zero refrigerators have condensers that need to be cleaned every 3-6 months to ensure proper airflow and cooling efficiency. Similarly, Viking ranges require attention to burners and grates to prevent grease buildup. Use manufacturer-recommended cleaning products and techniques to avoid damaging your appliance's delicate components.</p>

      <h3>3. Use Appliances as Intended</h3>
      <p>High-end appliances are built for durability, but improper use can shorten their lifespan. Overloading a Sub-Zero refrigerator, slamming oven doors, or using non-compatible cookware on your Viking range can all lead to wear and tear. Always follow the manufacturer's guidelines for usage.</p>

      <h3>4. Replace Worn Parts Promptly</h3>
      <p>Even the best appliances will have components that wear out over time. Be proactive about replacing parts like water filters, seals, and gaskets. A minor issue, such as a faulty gasket on a Sub-Zero refrigerator, can cause energy inefficiency and more significant repairs down the line.</p>

      <h3>5. Monitor Environmental Factors</h3>
      <p>High-end appliances are sensitive to power fluctuations and environmental conditions. Installing surge protectors and maintaining proper ventilation can prevent damage from electrical issues and overheating.</p>

      <h3>Conclusion</h3>
      <p>Maximizing the lifespan of your luxury appliances doesn't have to be complicated. Regular maintenance, proper cleaning, and correct usage will go a long way in keeping your Sub-Zero or Viking appliance in top condition. When in doubt, always consult a professional technician who specializes in high-end appliance repair.</p>
    `,
  }
];

// Get the route to access the dynamic `slug` parameter
const route = useRoute();

// Initialize blog as a reactive ref
const blog = ref(null);

// Find the blog based on the slug
blog.value = blogs.find((b) => b.slug === route.params.slug);

// Get related blogs (exclude current blog)
const relatedBlogs = computed(() => {
  return blogs.filter(b => b.slug !== route.params.slug).slice(0, 2);
});

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
