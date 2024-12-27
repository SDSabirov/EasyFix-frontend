<template>
    <div class="bg-primary/80">
      <Navbar />
      <div class="pt-[14%] lg:pt-[12%]">
        <div class="w-screen h-full">
          <div class="max-w-7xl mx-auto p-6 bg-gray-100">
            <!-- Page Title -->
            <h1 class="text-4xl font-bold text-center text-primary mb-10">
              Thermador Appliance Repair Services
            </h1>
  
            <!-- Section 1: Intro -->
            <section class="mb-12">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="flex flex-col space-y-4">
                  <p>
                    Thermador appliances are known for their luxury, precision, and advanced technology, making them a trusted brand in premium kitchens. From innovative cooking ranges to efficient refrigeration systems, Thermador products offer professional-grade quality tailored for the home chef.
                  </p>
                  <p>
                    At Easy Fix Appliance, we specialize in Thermador appliance repair, ensuring your high-performance appliances operate seamlessly. From refrigerators to cooktops, we provide reliable and efficient repair services across the Bay Area, including San Mateo, Palo Alto, Foster City, and San Francisco.
                  </p>
                </div>
  
                <img
                  src="/assets/img/brandpage.jpg"
                  alt="Thermador Appliance"
                  class="w-full h-full object-cover mb-6"
                />
              </div>
            </section>
  
            <!-- Section 2: Our Expertise-->
            <section class="mb-12">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <img
                  src="/assets/img/thermador-cover.jpg"
                  alt="Thermador Cooking Appliance"
                  class="w-full h-full object-cover mb-6"
                />
                <div>
                  <h2 class="text-3xl font-bold text-gray-800 mb-6">
                    Our Expertise in Thermador Appliance Repairs
                  </h2>
                  <p>
                    With over 10 years of experience, Easy Fix Appliance has been providing Thermador appliance repair to customers throughout the Bay Area. Our certified technicians are skilled in the nuances of Thermador technology and are fully equipped to handle intricate repairs, using genuine Thermador parts to restore the performance and longevity of your appliances.
                  </p>
                  <p>
                    We offer fast, reliable service with minimal disruption, ensuring your Thermador appliances are quickly restored to top condition. Our commitment is to provide outstanding repair services that help protect your Thermador investment.
                  </p>
                </div>
              </div>
            </section>
  
            <!-- Section 3: What We Service -->
            <section class="mb-12">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                We Service the Following Thermador Appliances:
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
                Why Choose Us for Thermador Appliance Repairs?
              </h2>
              <div class="text-gray-700 leading-relaxed">
                <p>
                  <strong>Expert Technicians:</strong>
                  Our team is trained and certified to handle all Thermador appliance repairs, ensuring the highest quality service.
                </p>
  
                <p>
                  <strong>Genuine Parts:</strong>
                  We use only authentic Thermador parts, guaranteeing that your appliance performs at its original quality.
                </p>
  
                <p>
                  <strong>Fast and Reliable Service:</strong>
                  We understand the value of your Thermador appliances, so we work to complete repairs quickly and efficiently.
                </p>
  
                <p>
                  <strong>Local Service:</strong>
                  We proudly serve the Bay Area, including San Mateo, Palo Alto, Foster City, and San Francisco, with flexible scheduling options.
                </p>
              </div>
            </section>
  
            <!-- Section 5: Conclusion -->
            <section>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                Schedule Your Thermador Appliance Repair Today
              </h2>
              <p class="text-gray-700 leading-relaxed">
                If your Thermador refrigerator, oven, or cooktop needs repair, our certified technicians are here to help. From small fixes to major repairs, we’ll restore your appliance quickly and efficiently. Contact us today to schedule your repair!
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
                      Thermador appliances for over 10 years, serving the
                      Bay Area, including San Mateo, Palo Alto, Foster City, San
                      Francisco, and surrounding areas. Our skilled technicians understand Thermador’s advanced technology, ensuring your appliance gets the expert care it needs.`;
  const showButton = ref(false);
  useHead({
    title: "Thermador Appliance Repairs",
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
  