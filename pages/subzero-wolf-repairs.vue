<template>
  <div class="bg-primary/80">
    <Navbar />
    <div class="pt-[14%] lg:pt-[12%]">
      <div class="w-screen h-full">
        <div class="max-w-7xl mx-auto p-6 bg-gray-100">
          <!-- Page Title -->
          <h1 class="text-4xl font-bold text-center text-primary mb-10">
            Sub-Zero & Wolf: Leading Brands in Luxury Kitchen Appliances
          </h1>

          <!-- Section 1: Intro -->
          <section class="mb-12">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div class="flex flex-col space-y-4">
                <p>
                  Sub-Zero and Wolf are two of the most trusted names in the
                  world of high-end kitchen appliances. Sub-Zero, known for its
                  state-of-the-art refrigeration systems, has set the standard
                  for food preservation with its advanced cooling technologies,
                  offering precision temperature control and dual refrigeration
                  systems that keep your food fresher for longer. Wolf, on the
                  other hand, is synonymous with professional-grade cooking
                  appliances, delivering powerful ranges, ovens, and cooktops
                  designed for home chefs who demand top-tier performance and
                  precision.
                </p>
                <p>
                  Both brands combine sleek design with cutting-edge
                  functionality, making them the go-to choice for homeowners
                  looking to elevate their kitchen experience. Sub-Zero and Wolf
                  appliances aren’t just about luxury—they are built to last,
                  with many units performing flawlessly for decades when
                  properly maintained.
                </p>
              </div>

              <img
                src="/assets/img/subzerowolfappliance.webp"
                alt="Sub-Zero Refrigerator"
                class="w-full h-full object-cover mb-6"
              />
            </div>
          </section>

          <!-- Section 2: Our Expertise-->
          <section class="mb-12">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <img
                src="/assets/img/wolfCooking.jpg"
                alt="Sub-Zero Refrigerator"
                class="w-full h-full object-cover mb-6"
              />
              <div>
                <h2 class="text-3xl font-bold text-gray-800 mb-6">
                  Our Expertise in Sub-Zero & Wolf Appliance Repairs
                </h2>
                <p>
                  At Easy Fix Appliance, we have specialized in repairing
                  Sub-Zero and Wolf appliances for over 10 years, serving the
                  Bay Area, including San Mateo, Palo Alto, Foster City, San
                  Francisco, and surrounding areas. Our team of highly trained
                  technicians understands the intricacies of these luxury
                  appliances, from Sub-Zero’s dual refrigeration systems to
                  Wolf’s precision temperature controls, ensuring that your
                  appliance gets the care it needs to keep running smoothly.
                </p>
                <p>
                  We know that when a high-end appliance like Sub-Zero or Wolf
                  needs repairs, you want expert service with minimal disruption
                  to your home. That’s why we prioritize fast, reliable repairs
                  using genuine manufacturer parts to ensure long-term
                  performance and reliability. Our commitment is to extend the
                  lifespan of your premium appliances and protect your
                  investment.
                </p>
              </div>
            </div>
          </section>

          <!-- Section 3: Why choose us -->
          <section class="mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Us for Sub-Zero & Wolf Repairs?
            </h2>
            <div class="text-gray-700 leading-relaxed">
              <p>
                <strong>Decades of Experience:</strong>
                With over 10 years of experience in servicing Sub-Zero and Wolf
                appliances, we have seen and fixed it all.
              </p>

              <p>
                <strong>Certified Technicians:</strong>
                Our team is fully trained and certified to handle any issue,
                from minor adjustments to major repairs..
              </p>

              <p>
                <strong>Original Parts:</strong>
                We only use authentic Sub-Zero and Wolf parts, ensuring your
                appliance performs just as it did when it was brand new.
              </p>

              <p>
                <strong>Service You Can Trust:</strong>
                We pride ourselves on providing top-notch service, ensuring our
                customers get their luxury appliances back in working order as
                quickly as possible.
              </p>
            </div>
          </section>
          <!-- Section 5: Conclusion -->
          <section>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
              Why It's Worth Repairing Your Sub-Zero & Wolf Appliances
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Sub-Zero and Wolf appliances are significant investments, known
              for their premium build, advanced technology, and long lifespan.
              With proper care and occasional repairs, Sub-Zero refrigerators
              and Wolf cooking appliances can last over 20 years—far exceeding
              the typical lifespan of conventional models. Repairing, rather
              than replacing, is often more cost-effective and environmentally
              friendly, allowing you to protect your investment and enjoy these
              high-performance appliances for decades.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
              Choosing repairs also helps reduce waste, making it an
              eco-friendly option. With genuine parts and expert servicing, most
              issues like temperature control or faulty components can be
              resolved efficiently, giving your appliances a renewed life.
              Whether it's a Sub-Zero refrigerator or a Wolf range, repairing
              your luxury appliances is a smart, sustainable choice that ensures
              longevity and top performance.
            </p>
          </section>
        </div>
      </div>

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
    <FormsContact />
    <Footer />
    <ModalsPrivacy />
  </div>
</template>

<script setup>
import { useFlowbite } from '~/composables/useFlowbite';
// State for the Book Now button
const description = `At Easy Fix Appliance, we have specialized in repairing
                  Sub-Zero and Wolf appliances for over 10 years, serving the
                  Bay Area, including San Mateo, Palo Alto, Foster City, San
                  Francisco, and surrounding areas. Our team of highly trained
                  technicians understands the intricacies of these luxury
                  appliances, from Sub-Zero’s dual refrigeration systems to
                  Wolf’s precision temperature controls, ensuring that your
                  appliance gets the care it needs to keep running smoothly.`;
const showButton = ref(false);
useHead({
  title: "Sub-zero Wolf Appliance Repairs",
  meta: [{ name: "description", content: description.slice(0, 170) }],
});
// Function to slide the button after 2 seconds
onMounted(() => {
  useFlowbite(() => {
        initFlowbite();
    })
  setTimeout(() => {
    showButton.value = true;
  }, 2000); // Show the button after 2 seconds
});
</script>
