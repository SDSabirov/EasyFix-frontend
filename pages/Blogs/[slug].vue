<template>
  <div>
    <Navbar />
    <div class="max-w-screen h-full bg-light">
      <!-- Blog Image with overlay -->
      <div class="relative w-full h-96 overflow-hidden">
        <img
          v-if="blog"
          :src="blog.image"
          alt="Blog Image"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-white text-center px-4 md:px-12">
            {{ blog?.title || 'Loading Blog...' }}
          </h1>
        </div>
      </div>

      <!-- Blog Text Content -->
      <div v-if="blog" class="bg-white max-w-screen-lg mx-auto p-6 md:p-12 mt-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-primary mb-6">{{ blog.title }}</h2>
        <!-- Render the content with newlines preserved -->
        <div class="text-gray-700 leading-relaxed whitespace-pre-line">
          {{ blog.content }}
        </div>
      </div>

      <!-- Loading and Error Handling -->
      <div v-else class="text-center py-12">
        <p class="text-xl text-gray-600">Loading blog content, please wait...</p>
      </div>

      <!-- Footer -->
      <Footer />

      <!-- Book Now Button -->
      <NuxtLink
        to="/booking"
        v-if="showButton"
        class="fixed right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-6 py-3 rounded-l-lg shadow-lg transition-transform duration-800 ease-in"
        :class="{ 'translate-x-0': showButton, 'translate-x-full': !showButton }"
      >
        Book Now
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import appliance1 from "~/assets/img/blogs/appliance1.webp"
import oemParts from "~/assets/img/blogs/oem-parts.webp"
// Dummy data or fetch the blog from an API
const blogs = [
  {
    slug: "maximize-appliance-lifespan",
    title: "How to Maximize the Lifespan of Your High-End Appliances",
    image: appliance1,
    content: `
      Luxury appliances like Sub-Zero, Viking, Wolf, and Thermador are designed for performance, longevity, and aesthetics. However, like all appliances, they need proper care and maintenance to ensure they function at their best for many years. The good news is that with a few simple steps, you can significantly extend the lifespan of your high-end appliances and avoid costly repairs.

1. Schedule Regular Professional Maintenance
Just like a luxury car, high-end appliances require regular servicing to stay in peak condition. Professional technicians who specialize in brands like Sub-Zero and Viking have the expertise to identify potential issues before they become major problems. Scheduling a yearly inspection and maintenance service can help prevent breakdowns and extend the life of your appliances.

2. Clean Appliances Correctly
Every appliance has specific cleaning requirements. For instance, Sub-Zero refrigerators have condensers that need to be cleaned every 3-6 months to ensure proper airflow and cooling efficiency. Similarly, Viking ranges require attention to burners and grates to prevent grease buildup. Use manufacturer-recommended cleaning products and techniques to avoid damaging your appliance's delicate components.

3. Use Appliances as Intended
High-end appliances are built for durability, but improper use can shorten their lifespan. Overloading a Sub-Zero refrigerator, slamming oven doors, or using non-compatible cookware on your Viking range can all lead to wear and tear. Always follow the manufacturer’s guidelines for usage to avoid undue strain on your appliances.

4. Replace Worn Parts Promptly
Even the best appliances will have components that wear out over time. Be proactive about replacing parts like water filters, seals, and gaskets. A minor issue, such as a faulty gasket on a Sub-Zero refrigerator, can cause energy inefficiency and more significant repairs down the line. Opt for original manufacturer (OEM) parts to ensure compatibility and longevity.

5. Mind the Power Supply
High-end appliances are sensitive to power fluctuations. Sudden power surges or frequent outages can damage sensitive electronic components. Installing surge protectors or investing in a home voltage stabilizer can help prevent damage from electrical issues.

Conclusion
Maximizing the lifespan of your luxury appliances doesn't have to be complicated. Regular maintenance, proper cleaning, and correct usage will go a long way in keeping your Sub-Zero or Viking appliance in top condition. When in doubt, always consult a professional technician who specializes in high-end appliance repair. By taking a proactive approach, you can enjoy the full performance of your luxury appliances for many years.
    `
  },
  {
    slug: "why-use-only-oem-parts",
    title: "Why You Should Only Use OEM Parts for Your Luxury Appliances",
    image: oemParts,
    content: `
      When it comes to repairing luxury appliances like Sub-Zero, Viking, or Wolf, homeowners are often faced with the choice of using original equipment manufacturer (OEM) parts or opting for cheaper aftermarket alternatives. While aftermarket parts may seem like a more cost-effective solution upfront, they can lead to bigger problems in the long run, particularly with high-end appliances. Here's why sticking with OEM parts is always the best choice.

1. Guaranteed Compatibility
OEM parts are designed specifically for your appliance model, ensuring a perfect fit and seamless functionality. Using generic parts can lead to improper installations, which may cause the appliance to malfunction or require further repairs. For instance, Sub-Zero compressors or Viking burner replacements need to match the exact specifications to ensure proper performance.

2. Maintains Warranty Coverage
Most high-end appliance manufacturers, including Sub-Zero and Viking, offer warranties that protect your investment. However, if you use non-OEM parts for repairs, you risk voiding your warranty. Sticking to OEM parts keeps your warranty intact and ensures that your appliance is covered in case of future issues.

3. Superior Quality and Durability
High-end appliances are built to last, and OEM parts are manufactured to the same high standards. Aftermarket parts, on the other hand, may be made from inferior materials that wear out faster, leading to frequent breakdowns. OEM parts ensure the same durability and quality as the original components, giving you peace of mind that your appliance will continue to perform as expected.

4. Preserves Performance and Efficiency
Your Sub-Zero or Viking appliance is engineered for precision performance, whether it’s maintaining optimal temperature in your refrigerator or providing even heat in your oven. Using OEM parts helps maintain this level of performance. Aftermarket parts may not be able to replicate the exact specifications, leading to decreased efficiency or functionality.

5. Long-Term Cost Savings
While OEM parts may be more expensive initially, they offer greater long-term savings. Non-OEM parts may cause more damage to your appliance over time, leading to costly repairs or even the need for a full replacement. With OEM parts, you ensure that your appliance continues running smoothly and avoid the added expenses of repeated repairs.

Conclusion
When it comes to repairing high-end appliances, it’s essential to invest in OEM parts to preserve the quality, performance, and longevity of your appliances. Whether it’s a Sub-Zero refrigerator or a Viking range, using the right parts can save you time, money, and hassle in the long run. Always trust a professional repair service that uses OEM parts to ensure your luxury appliances receive the care they deserve.
    `
  },

];

// Get the route to access the dynamic `slug` parameter
const route = useRoute();
const blog = blogs.find((b) => b.slug === route.params.slug);

// State for the Book Now button
const showButton = ref(false);

// Function to slide the button after 2 seconds
onMounted(() => {
  setTimeout(() => {
    showButton.value = true;
  }, 2000); // Show the button after 2 seconds
});
</script>

