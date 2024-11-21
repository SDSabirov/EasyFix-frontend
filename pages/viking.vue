<template>
  <div class="bg-primary/80">
    <Navbar />
    <div class="pt-[14%] lg:pt-[12%]">
      <div class="w-screen h-full">
        <div class="max-w-7xl mx-auto p-6 bg-gray-100">
          <!-- Page Title -->
          <h1 class="text-4xl font-bold text-center text-primary mb-10">
            Viking Appliance Repair Services
          </h1>

          <!-- Section 1: Intro -->
          <section class="mb-12">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div class="flex flex-col space-y-4">
                <p>
                  Viking appliances are renowned for their professional-grade
                  quality and performance, making them a top choice for luxury
                  kitchens. Whether it’s keeping your food perfectly chilled
                  with Viking's premium refrigeration systems or preparing
                  gourmet meals with precision cooking appliances, Viking
                  products are designed to deliver superior functionality.
                </p>
                <p>
                  At Easy Fix Appliance, we specialize in providing expert
                  repair services for Viking appliances, ensuring they continue
                  to operate at peak performance. From refrigerators to cooking
                  ranges, our team is here to help with any repair needs,
                  offering reliable and efficient service across the Bay Area,
                  including San Mateo, Palo Alto, Foster City, and San
                  Francisco.
                </p>
              </div>

              <img
                src="/assets/img/brandpage.jpg"
                alt="Viking Appliance"
                class="w-full h-full object-cover mb-6"
              />
            </div>
          </section>

          <!-- Section 2: Our Expertise-->
          <section class="mb-12">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <img
                src="/assets/img/vikingAppliance.jpeg"
                alt="Viking Cooking Appliance"
                class="w-full h-full object-cover mb-6"
              />
              <div>
                <h2 class="text-3xl font-bold text-gray-800 mb-6">
                  Our Expertise in Viking Appliance Repairs
                </h2>
                <p>
                  With over 10 years of experience, Easy Fix Appliance has been
                  repairing Viking appliances for customers throughout the Bay
                  Area. Our technicians are certified and equipped with the
                  knowledge to handle even the most complex repairs. Whether
                  it’s a faulty refrigerator compressor or a stove burner that
                  won’t ignite, we use genuine Viking parts to ensure your
                  appliance is restored to its original quality.
                </p>
                <p>
                  We provide fast, reliable service with minimal disruption to
                  your daily routine, ensuring your Viking appliances are back
                  up and running as quickly as possible. Our team is committed
                  to providing exceptional repair services that extend the life
                  of your Viking appliances and protect your investment.
                </p>
              </div>
            </div>
          </section>

          <!-- Section 3: What We Service -->
          <section class="mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
              We Service the Following Viking Appliances:
            </h2>
            <div class="text-gray-700 leading-relaxed">
              <div class="grid grid-cols-2 p-4 w-1/2">
                <div>
                  <p><strong>Refrigeration Appliances:</strong></p>
                  <ul class="list-disc list-inside ml-6 mb-4">
                    <li>Refrigerators / Built-In Fridges</li>
                    <li>Freezers</li>
                    <li>Ice Makers</li>
                    <li>Under Counter Fridges</li>
                    <li>Wine Coolers</li>
                  </ul>
                </div>

                <div>
                  <p><strong>Cooking Appliances:</strong></p>
                  <ul class="list-disc list-inside ml-6">
                    <li>Ranges</li>
                    <li>Stoves</li>
                    <li>Ovens</li>
                    <li>Double Ovens</li>
                    <li>Cooktops</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 4: Why Choose Us -->
          <section class="mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Us for Viking Appliance Repairs?
            </h2>
            <div class="text-gray-700 leading-relaxed">
              <p>
                <strong>Expert Technicians:</strong>
                Our team is trained and certified to handle all Viking appliance
                repairs, ensuring the highest level of expertise.
              </p>

              <p>
                <strong>Genuine Parts:</strong>
                We only use original Viking parts, ensuring that your appliance
                performs just as it did when it was new.
              </p>

              <p>
                <strong>Fast and Reliable Service:</strong>
                We understand how important your Viking appliances are to your
                daily routine, which is why we strive to complete repairs
                quickly and effectively.
              </p>

              <p>
                <strong>Local Service:</strong>
                We proudly serve the Bay Area, including San Mateo, Palo Alto,
                Foster City, and San Francisco, offering convenient scheduling
                options to fit your busy life.
              </p>
            </div>
          </section>

          <!-- Section 5: Conclusion -->
          <section>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
              Book Your Viking Appliance Repair Today
            </h2>
            <p class="text-gray-700 leading-relaxed">
              If your Viking refrigerator, oven, or cooktop is in need of
              repair, don't wait—our certified technicians are here to help.
              Whether it's a minor issue or a major malfunction, we’ll get your
              appliance back to working order quickly and efficiently. Contact
              us today to schedule your repair!
            </p>
          </section>
        </div>
      </div>

      <!-- Book Now Button -->
      <!-- <NuxtLink
        to="/booking"
        v-if="showButton"
        class="fixed right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-6 py-3 rounded-l-lg shadow-lg transition-transform duration-800 ease-in"
        :class="{
          'translate-x-0': showButton,
          'translate-x-full': !showButton,
        }"
      >
        Book Now
      </NuxtLink> -->
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
  title: "Viking Appliance Repairs",
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
