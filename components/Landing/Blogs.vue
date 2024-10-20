<template>
  <section id="blogs">
    <div class="bg-gray-100 py-12 ">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <h2 class="text-4xl font-bold text-center text-primary capitalize">Latest Blogs</h2>
  
        <div class="grid grid-cols-1 mt-4 md:grid-cols-3 gap-8">
          <!-- Loop through the blogs array -->
          <div
            v-for="(blog, index) in blogs"
            :key="index"
            class="bg-white shadow-lg overflow-hidden"
          >
            <img
              :src="blog.image"
              :alt="`Blog ${index + 1} Image`"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2 text-primary">{{ blog.title }}</h3>
              <p class="text-gray-600 mb-4">{{ blog.description }}</p>
              <a :href="blog.link" class="text-primary font-semibold hover:text-blue-600">
                Read More &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-center p-6">
      <NuxtLink to="/blogs" class="p-4 px-6 bg-primary flex items-center text-md text-white rounded-lg hover:bg-secondary">
        Sea All
      </NuxtLink>
    </div>
    </div>
    
  </section>
    
  </template>
  
  <script setup>
import appliance1 from "~/assets/img/blogs/appliance1.webp"
import oemParts from "~/assets/img/blogs/oem-parts.webp"
const blogs = [
  {
    title: "How to Maximize the Lifespan of Your High-End Appliances",
    description: "Luxury appliances like Sub-Zero, Viking, Wolf, and Thermador are designed for performance, longevity, and aesthetics...",
    image: appliance1,
    link: "/blogs/maximize-appliance-lifespan",
  },
  {
    title: "Why You Should Only Use OEM Parts for Your Luxury Appliances",
    description: "When it comes to repairing luxury appliances like Sub-Zero, Viking, or Wolf, homeowners are often...",
    image: oemParts,
    link: "/blogs/why-use-only-oem-parts",
  },
];
</script>