<template>
    <div class="bg-primary/80">
      <Navbar />
      <div class="pt-[14%] lg:pt-[12%]">
        <div class="w-screen h-full">
          <div class="max-w-7xl mx-auto p-6 bg-gray-100">
            <!-- Page Title -->
            <h1 class="text-4xl font-bold text-center text-primary mb-10">
              GE Monogram Appliance Repair Services
            </h1>
  
            <!-- Section 1: Intro -->
            <section class="mb-12">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="flex flex-col space-y-4">
                  <p>
                    GE Monogram appliances are celebrated for their high-end design and advanced functionality, making them an excellent choice for luxury kitchens. From sophisticated refrigeration systems to professional-grade cooking appliances, GE Monogram products are crafted to elevate the home experience.
                  </p>
                  <p>
                    At Easy Fix Appliance, we specialize in providing expert repair services for GE Monogram appliances, ensuring they continue to operate at their best. From refrigerators to ovens, we offer reliable and efficient repair solutions throughout the Bay Area, including San Mateo, Palo Alto, Foster City, and San Francisco.
                  </p>
                </div>
  
                <img
                  src="/assets/img/redAppliance.jpeg"
                  alt="GE Monogram Appliance"
                  class="w-full h-full object-cover mb-6"
                />
              </div>
            </section>
  
            <!-- Section 2: Our Expertise-->
            <section class="mb-12">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <img
                  src="/assets/img/brandpage.jpg"
                  alt="GE Monogram Cooking Appliance"
                  class="w-full h-full object-cover mb-6"
                />
                <div>
                  <h2 class="text-3xl font-bold text-gray-800 mb-6">
                    Our Expertise in GE Monogram Appliance Repairs
                  </h2>
                  <p>
                    With over 10 years of experience, Easy Fix Appliance has been servicing GE Monogram appliances for customers across the Bay Area. Our certified technicians are well-versed in the intricacies of GE Monogram systems and are equipped to handle even the most complex repairs, using genuine GE parts to restore your appliance’s quality and performance.
                  </p>
                  <p>
                    We offer fast, dependable service with minimal disruption, ensuring your GE Monogram appliances are quickly restored to full functionality. Our team is dedicated to providing exceptional repair services to extend the life of your appliances and protect your investment.
                  </p>
                </div>
              </div>
            </section>
  
            <!-- Section 3: What We Service -->
            <section class="mb-12">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                We Service the Following GE Monogram Appliances:
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
                Why Choose Us for GE Monogram Appliance Repairs?
              </h2>
              <div class="text-gray-700 leading-relaxed">
                <p>
                  <strong>Expert Technicians:</strong>
                  Our team is trained and certified to handle all GE Monogram appliance repairs, ensuring top-quality service.
                </p>
  
                <p>
                  <strong>Genuine Parts:</strong>
                  We only use original GE Monogram parts to maintain your appliance’s original quality and performance.
                </p>
  
                <p>
                  <strong>Fast and Reliable Service:</strong>
                  We know how important your GE Monogram appliances are to your routine, so we strive to complete repairs efficiently.
                </p>
  
                <p>
                  <strong>Local Service:</strong>
                  We proudly serve the Bay Area, including San Mateo, Palo Alto, Foster City, and San Francisco, offering convenient scheduling.
                </p>
              </div>
            </section>
  
            <!-- Section 5: Conclusion -->
            <section>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                Book Your GE Monogram Appliance Repair Today
              </h2>
              <p class="text-gray-700 leading-relaxed">
                If your GE Monogram refrigerator, oven, or cooktop needs repair, our certified technicians are ready to help. Whether it’s a minor issue or a major malfunction, we’ll restore your appliance quickly and efficiently. Contact us today to schedule your repair!
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
                      GE Monogram appliances for over 10 years, serving the
                      Bay Area, including San Mateo, Palo Alto, Foster City, San
                      Francisco, and surrounding areas. Our highly trained
                      technicians ensure that your appliance gets the care it needs to keep running smoothly.`;
  const showButton = ref(false);
  useHead({
    title: "GE Monogram Appliance Repairs",
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
  