<template>
  <div>
    <Navbar />
    <div class="bg-secondary py-12 ">
      <div class="max-w-full md:relative md:top-12 mx-auto px-4 min-h-[100vh] bg-gray-100 sm:px-6 lg:px-40 md:px-20">
        <h2 class="text-4xl font-bold text-center text-primary  capitalize">
          Our Blogs
        </h2>

        <div class="grid grid-cols-1 mt-4 md:grid-cols-3 gap-8">
          <!-- Loop through the blogs array -->
          <div
            v-for="(blog, index) in blogs"
            :key="index"
            class="bg-white shadow-lg overflow-hidden"
          >
            <img
              :src="blog.image"
              :alt="`${blog.title} Image`"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2 text-primary">
                {{ blog.title }}
              </h3>
              <p class="text-gray-600 mb-4">{{ blog.description }}</p>
              <NuxtLink
                :to="blog.link"
                class="text-primary font-semibold hover:text-blue-600"
              >
                Read More &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FormsContact />
    <Footer />
    <ModalsPrivacy />
  </div>
</template>

<script setup>
import appliance1 from "~/assets/img/blogs/appliance1.webp"
import oemParts from "~/assets/img/blogs/oem-parts.webp"
const blogs = [
  {
    title: "How to Maximize the Lifespan of Your High-End Appliances",
    description: "Luxury appliances like Sub-Zero, Viking, Wolf, and Thermador are designed for performance, longevity, and aesthetics...",
    image: appliance1,
    link: "/blogs/how-to-maximize-appliance-lifespan",
  },
  {
    title: "Why You Should Only Use OEM Parts for Your Luxury Appliances",
    description: "When it comes to repairing luxury appliances like Sub-Zero, Viking, or Wolf, homeowners are often...",
    image: oemParts,
    link: "/blogs/why-use-only-oem-parts",
  },
  {
    title: "Seasonal Appliance Maintenance Tips for Bay Area Homes",
    description: "The holiday season is here, and homes across the Bay Area are getting ready to host festive gatherings, family...",
    image: oemParts,
    link: "/blogs/seasonal-appliance-maintenance-tips-for-bay-area-homes",
  },
];
</script>
