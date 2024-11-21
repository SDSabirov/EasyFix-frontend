<template>
    <div class="bg-primary/80">
      <Navbar />
      <div class="pt-[14%] lg:pt-[12%]">
        <div class="w-screen h-full">
          <div class="max-w-7xl mx-auto p-6 bg-gray-100">
            <!-- Page Title -->
            <h1 class="text-4xl font-bold text-center text-primary mb-10">
              Dacor Appliance Repair Services
            </h1>
  
            <!-- Section 1: Intro -->
            <section class="mb-12">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="flex flex-col space-y-4">
                  <p>
                    Dacor appliances are known for their blend of innovation, style, and performance, making them a premium choice for modern kitchens. From their high-tech refrigeration systems to advanced cooking appliances, Dacor products are designed to meet the needs of the most discerning chefs and homeowners.
                  </p>
                  <p>
                    At Easy Fix Appliance, we specialize in providing expert repair services for Dacor appliances, ensuring they continue to operate flawlessly. Whether it’s a refrigerator, oven, or cooktop, we provide reliable and efficient service across the Bay Area, including San Mateo, Palo Alto, Foster City, and San Francisco.
                  </p>
                </div>
  
                <img
                  src="/assets/img/brandpage.jpg"
                  alt="Dacor Appliance"
                  class="w-full h-full object-cover mb-6"
                />
              </div>
            </section>
  
            <!-- Section 2: Our Expertise-->
            <section class="mb-12">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <img
                  src="/assets/img/dacor-cover.jpg"
                  alt="Dacor Cooking Appliance"
                  class="w-full h-full object-cover mb-6"
                />
                <div>
                  <h2 class="text-3xl font-bold text-gray-800 mb-6">
                    Our Expertise in Dacor Appliance Repairs
                  </h2>
                  <p>
                    With over 10 years of experience, Easy Fix Appliance has been servicing Dacor appliances for customers across the Bay Area. Our certified technicians have extensive knowledge of Dacor’s advanced technology and are equipped to handle complex repairs using genuine Dacor parts to restore performance and reliability.
                  </p>
                  <p>
                    We provide prompt, dependable service to minimize disruptions, ensuring your Dacor appliances are quickly restored to peak functionality. Our team is committed to offering repair services that extend the life of your Dacor appliances and safeguard your investment.
                  </p>
                </div>
              </div>
            </section>
  
            <!-- Section 3: What We Service -->
            <section class="mb-12">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                We Service the Following Dacor Appliances:
              </h2>
              <div class="text-gray-700 leading-relaxed">
                <div class="grid grid-cols-2 p-4 w-1/2">
                  <div>
                    <p><strong>Refrigeration Appliances:</strong></p>
                    <ul class="list-disc list-inside ml-6 mb-4">
                      <li>Refrigerators / Built-In Fridges</li>
                      <li>Freezers</li>
                      <li>Ice Makers</li>
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
                Why Choose Us for Dacor Appliance Repairs?
              </h2>
              <div class="text-gray-700 leading-relaxed">
                <p>
                  <strong>Expert Technicians:</strong>
                  Our team is trained and certified to handle all Dacor appliance repairs, ensuring the highest level of expertise and quality.
                </p>
  
                <p>
                  <strong>Genuine Parts:</strong>
                  We use only original Dacor parts to ensure your appliance maintains its original quality and performance.
                </p>
  
                <p>
                  <strong>Fast and Reliable Service:</strong>
                  We understand the importance of your Dacor appliances in your daily life, so we work to complete repairs quickly and effectively.
                </p>
  
                <p>
                  <strong>Local Service:</strong>
                  We proudly serve the Bay Area, including San Mateo, Palo Alto, Foster City, and San Francisco, with flexible scheduling options to suit your needs.
                </p>
              </div>
            </section>
  
            <!-- Section 5: Conclusion -->
            <section>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                Schedule Your Dacor Appliance Repair Today
              </h2>
              <p class="text-gray-700 leading-relaxed">
                If your Dacor refrigerator, oven, or cooktop is in need of repair, our certified technicians are here to assist. From minor fixes to major repairs, we’ll get your appliance back to optimal performance. Contact us today to schedule your repair!
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
                      Dacor appliances for over 10 years, serving the
                      Bay Area, including San Mateo, Palo Alto, Foster City, San
                      Francisco, and surrounding areas. Our skilled technicians understand the unique technology of Dacor appliances, ensuring your appliance gets the precise care it needs.`;
  const showButton = ref(false);
  useHead({
    title: "Dacor Appliance Repairs",
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
  