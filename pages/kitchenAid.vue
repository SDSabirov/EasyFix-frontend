<template>
    <div class="bg-primary/80">
      <Navbar />
      <div class="pt-[14%] lg:pt-[12%]">
        <div class="w-screen h-full">
          <div class="max-w-7xl mx-auto p-6 bg-gray-100">
            <!-- Page Title -->
            <h1 class="text-4xl font-bold text-center text-primary mb-10">
              KitchenAid Appliance Repair Services
            </h1>
  
            <!-- Section 1: Intro -->
            <section class="mb-12">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="flex flex-col space-y-4">
                  <p>
                    KitchenAid appliances are known for their exceptional quality
                    and functionality, making them a popular choice in both home and professional kitchens. Whether you rely on KitchenAid’s advanced refrigeration systems or their high-performance cooking appliances, each product is designed to meet demanding kitchen needs.
                  </p>
                  <p>
                    At Easy Fix Appliance, we specialize in repairing KitchenAid appliances to ensure they operate at peak performance. From refrigerators to cooking ranges, we provide reliable and efficient repair services throughout the Bay Area, including San Mateo, Palo Alto, Foster City, and San Francisco.
                  </p>
                </div>
  
                <img
                  src="/assets/img/kitchenBlue.jpg"
                  alt="KitchenAid Appliance"
                  class="w-full h-full object-cover mb-6"
                />
              </div>
            </section>
  
            <!-- Section 2: Our Expertise-->
            <section class="mb-12">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <img
                  src="/assets/img/brandpage.jpg"
                  alt="KitchenAid Cooking Appliance"
                  class="w-full h-full object-cover mb-6"
                />
                <div>
                  <h2 class="text-3xl font-bold text-gray-800 mb-6">
                    Our Expertise in KitchenAid Appliance Repairs
                  </h2>
                  <p>
                    With over 10 years of experience, Easy Fix Appliance has been
                    servicing KitchenAid appliances for clients across the Bay
                    Area. Our technicians are certified and skilled in handling complex repairs, from refrigeration systems to cooking appliances, using genuine KitchenAid parts to restore your appliance to optimal performance.
                  </p>
                  <p>
                    We deliver fast, reliable service with minimal disruption to
                    your daily routine, ensuring your KitchenAid appliances are back up and running as quickly as possible. Our commitment is to extend the life of your KitchenAid appliances and protect your investment.
                  </p>
                </div>
              </div>
            </section>
  
            <!-- Section 3: What We Service -->
            <section class="mb-12">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                We Service the Following KitchenAid Appliances:
              </h2>
              <div class="text-gray-700 leading-relaxed">
                <div class="grid grid-cols-1 md:grid-cols-2 p-4 w-full md:w-1/2 ">
                  <div>
                    <p><strong class="whitespace-nowrap">Refrigeration Appliances:</strong></p>
                    <ul class="list-disc  ml-6 mb-4">
                      <li>Refrigerators / Built-In Fridges</li>
                      <li>Freezers</li>
                      <li>Ice Makers</li>
                      <li>Under Counter Fridges</li>
                      <li>Wine Coolers</li>
                    </ul>
                  </div>
  
                  <div>
                    <p><strong>Cooking Appliances:</strong></p>
                    <ul class="list-disc ml-6">
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
                Why Choose Us for KitchenAid Appliance Repairs?
              </h2>
              <div class="text-gray-700 leading-relaxed">
                <p>
                  <strong>Expert Technicians:</strong>
                  Our team is trained and certified to handle all KitchenAid appliance repairs, ensuring the highest level of expertise.
                </p>
  
                <p>
                  <strong>Genuine Parts:</strong>
                  We only use original KitchenAid parts, ensuring that your appliance performs just as it did when it was new.
                </p>
  
                <p>
                  <strong>Fast and Reliable Service:</strong>
                  We understand how important your KitchenAid appliances are to your daily routine, which is why we strive to complete repairs quickly and effectively.
                </p>
  
                <p>
                  <strong>Local Service:</strong>
                  We proudly serve the Bay Area, including San Mateo, Palo Alto, Foster City, and San Francisco, offering convenient scheduling options to fit your busy life.
                </p>
              </div>
            </section>
  
            <!-- Section 5: Conclusion -->
            <section>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                Book Your KitchenAid Appliance Repair Today
              </h2>
              <p class="text-gray-700 leading-relaxed">
                If your KitchenAid refrigerator, oven, or cooktop needs repair, our certified technicians are here to help. Whether it's a minor issue or a major malfunction, we’ll restore your appliance’s functionality efficiently. Contact us today to schedule your repair!
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
                      KitchenAid appliances for over 10 years, serving the
                      Bay Area, including San Mateo, Palo Alto, Foster City, San
                      Francisco, and surrounding areas. Our team of highly trained
                      technicians understands the intricacies of these appliances,
                      ensuring that your appliance gets the care it needs to keep running smoothly.`;
  const showButton = ref(false);
  useHead({
    title: "KitchenAid Appliance Repairs",
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
  