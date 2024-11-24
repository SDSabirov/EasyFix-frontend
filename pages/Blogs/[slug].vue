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
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
        >
          <h1 class="text-4xl font-bold text-white text-center px-4 md:px-12">
            {{ blog?.title || "Loading Blog..." }}
          </h1>
        </div>
      </div>

      <!-- Blog Text Content -->
      <div
        v-if="blog"
        class="bg-white max-w-screen-lg mx-auto p-6 md:p-12 mt-6 rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-bold text-primary mb-6">{{ blog.title }}</h2>
        <!-- Render the content with newlines preserved -->
        <div class="text-gray-700 leading-relaxed whitespace-pre-line">
          {{ blog.content }}
        </div>
      </div>

      <!-- Loading and Error Handling -->
      <div v-else class="text-center py-12">
        <p class="text-xl text-gray-600">
          Loading blog content, please wait...
        </p>
      </div>

      <!-- Footer -->
      <Footer />

      <!-- Book Now Button -->
      <NuxtLink
        to="/booking"
        v-if="showButton"
        class="fixed right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-6 py-3 rounded-l-lg shadow-lg transition-transform duration-800 ease-in"
        :class="{
          'translate-x-0': showButton,
          'translate-x-full': !showButton,
        }"
      >
        Book Now
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import appliance1 from "~/assets/img/blogs/appliance1.webp";
import oemParts from "~/assets/img/blogs/oem-parts.webp";
// Dummy data or fetch the blog from an API
const blogs = [
  {
    slug: "how-to-maximize-appliance-lifespan",
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
    `,
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
    `,
  },

  {
    slug: "seasonal-appliance-,aintenance-tips-for-bay-area-homes",
    title: "Seasonal Appliance Maintenance Tips for Bay Area Homes",
    image: oemParts,
    content: `
      The holiday season is here, and homes across the Bay Area are getting ready to host festive gatherings, family dinners, and cozy celebrations. To ensure your appliances are ready for the demands of the season, it's essential to perform some seasonal maintenance. Whether you’re hosting Christmas dinner in San Francisco or a family brunch in Palo Alto, these tips will keep your appliances running smoothly throughout the holidays.

1. Prepare Your Refrigerator for Holiday Feasts
The refrigerator is the MVP of holiday meals, storing everything from turkey to desserts. Here’s how to keep it in top shape:

Declutter and Deep Clean: Clear out old items to make room for holiday groceries. Wipe down shelves and check for expired condiments.
Check the Temperature: Ensure your fridge is set to 37°F and your freezer to 0°F for optimal food storage.
Inspect Door Seals: A worn or loose gasket can cause your fridge to work harder, leading to higher energy bills. Test the seal by closing the door on a dollar bill; if it slips out easily, it’s time to replace the gasket.
Defrost Your Freezer: If you have an older freezer with manual defrosting, do this before the holiday rush to maximize storage space.
2. Ensure Your Oven and Stove Are Holiday-Ready
Nothing spoils a Christmas dinner faster than an oven that won’t heat or a stove that won’t ignite. Here’s how to avoid holiday disasters:

Inspect the Oven’s Heating Elements: Check for uneven heating or burnt-out elements by preheating the oven and observing if all areas heat evenly.
Clean the Oven Safely: Avoid using the self-cleaning feature right before the holidays, as it can strain your appliance. Instead, use a mild oven cleaner and scrub away grease and food buildup.
Test Stove Burners: Make sure all burners are functioning. If gas burners aren’t lighting properly, clean the burner caps and check for blockages in the ports.
3. Maintain Your Dishwasher for Post-Dinner Cleanup
The dishwasher will be working overtime this season, so give it some TLC:

Run a Cleaning Cycle: Use a dishwasher cleaner or a mix of vinegar and baking soda to eliminate odors and residue.
Check the Spray Arms: Remove and rinse the spray arms to ensure water flows freely.
Inspect the Filter: A clogged filter can reduce cleaning efficiency. Remove food debris and rinse the filter thoroughly.
Load Smartly: Avoid overloading to ensure all dishes are cleaned properly, especially with large holiday loads.
4. Give Your Washer and Dryer a Holiday Check-Up
With holiday guests come extra loads of laundry. Ensure your washer and dryer are ready:

Inspect Hoses and Connections: Check for leaks or cracks in washer hoses and replace if necessary.
Clean the Lint Trap: A clean lint trap ensures your dryer runs efficiently and reduces the risk of fire.
Run an Empty Cleaning Cycle: Use a washer cleaner or a mix of vinegar and baking soda to eliminate buildup and odors in your washing machine.
5. Show Some Love to Smaller Appliances
Smaller appliances like wine coolers, ice makers, and under-counter fridges can be just as important during the holidays:

Wine Coolers: Ensure the temperature is set correctly to keep your holiday wines at the perfect serving temperature.
Ice Makers: Clean the ice bin and run a cleaning solution through the ice maker to ensure fresh ice for drinks.
Microwaves: Wipe down the interior and ensure the turntable is functioning properly for quick reheating.
6. Energy Efficiency Tips for a Festive Bay Area Christmas
With all your appliances working overtime, energy efficiency is key:

Use LED Christmas Lights: They’re not only festive but also energy-efficient.
Run Appliances During Off-Peak Hours: Reduce energy bills by using major appliances in the morning or late evening when demand is lower.
Unplug Small Appliances: When not in use, unplug appliances like toasters and coffee makers to save energy.
7. Have a Backup Plan for Emergencies
Even with the best maintenance, appliances can sometimes fail. Keep your holiday stress-free with these tips:

Identify Local Appliance Repair Services: Easy Fix Appliance is available across the Bay Area, including San Francisco, San Mateo, Palo Alto, and Mountain View, for same-day or emergency repairs.
Plan for Backup Cooking Options: Keep a slow cooker or grill handy in case of oven trouble.
Stock Ice Bags: If your fridge or freezer has issues, store backup ice to keep perishables cold.
8. Add a Festive Touch to Your Appliances
Don’t forget to bring some Christmas vibes into your kitchen:

Decorate Safely: Use magnets or removable adhesive hooks to hang garlands or wreaths on your fridge.
Holiday-Themed Accessories: Add festive oven mitts, dish towels, or even holiday-scented dishwasher pods to enhance the holiday spirit.
Keep It Functional: Ensure decorations don’t block vents or interfere with appliance functionality.
Happy Holidays from Easy Fix Appliance
At Easy Fix Appliance, we’re here to make sure your appliances are in perfect working condition for the holiday season. If you need professional appliance repair or maintenance in the Bay Area, give us a call. From San Francisco to Palo Alto, we’re just a phone call away to keep your holidays running smoothly.

Make this Christmas stress-free and full of cheer with well-maintained appliances. Schedule your service today and enjoy a hassle-free holiday season! `,
  },
];

// Initialize blog as a reactive ref
const blog = ref(null);

// Get the route to access the dynamic `slug` parameter
const route = useRoute();

// Find the blog based on the slug
blog.value = blogs.find((b) => b.slug === route.params.slug);

useHead({
  title: blog.value.title,
  meta: [{ name: "description", content: blog.value.content.slice(0, 170) }],
});

// State for the Book Now button
const showButton = ref(false);

// Function to slide the button after 2 seconds
onMounted(() => {
  setTimeout(() => {
    showButton.value = true;
  }, 2000); // Show the button after 2 seconds
});
</script>
