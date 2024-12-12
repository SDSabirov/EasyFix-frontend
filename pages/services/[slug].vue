<template>
    <div class="bg-primary/80">
      <Navbar />
      <div class="pt-[14%] lg:pt-[12%]">
        <div class="w-screen h-full">
          <div class="max-w-7xl mx-auto p-6 bg-gray-100">
            <!-- Page Title -->
            <h1 class="text-4xl font-bold text-center text-primary mb-10">
              {{ pageTitle }}
            </h1>
  
            <!-- Section 1: Intro -->
            <section class="mb-12">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="flex flex-col space-y-4">
                  <p v-if="applianceDetails?.intro">
                    {{ applianceDetails.intro }}
                  </p>
                  <p v-if="applianceDetails?.serviceDescription">
                    {{ applianceDetails.serviceDescription }}
                  </p>
                </div>
              </div>
            </section>
  
            <!-- Section 2: Our Expertise -->
            <section class="mb-12">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h2 class="text-3xl font-bold text-gray-800 mb-6">
                    Our Expertise in {{ pageTitle }}
                  </h2>
                  <p v-if="applianceDetails?.expertise">
                    {{ applianceDetails.expertise }}
                  </p>
                  <p v-if="applianceDetails?.additionalExpertise">
                    {{ applianceDetails.additionalExpertise }}
                  </p>
                </div>
              </div>
            </section>
  
            <!-- Section 3: What We Service -->
            <section class="mb-12">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                We Service the Following {{ pageTitle }} Models:
              </h2>
              <div class="text-gray-700 leading-relaxed">
                <ul class="list-disc list-inside ml-6">
                  <li v-for="model in applianceDetails?.models || []" :key="model">{{ model }}</li>
                </ul>
              </div>
            </section>
  
            <!-- Section 4: Why Choose Us -->
            <section class="mb-12">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Us for {{ pageTitle }}?
              </h2>
              <div class="text-gray-700 leading-relaxed">
                <p v-if="applianceDetails?.whyChooseUs?.technicians">
                  <strong>Expert Technicians:</strong>
                  {{ applianceDetails.whyChooseUs.technicians }}
                </p>
  
                <p v-if="applianceDetails?.whyChooseUs?.parts">
                  <strong>Genuine Parts:</strong>
                  {{ applianceDetails.whyChooseUs.parts }}
                </p>
  
                <p v-if="applianceDetails?.whyChooseUs?.service">
                  <strong>Fast and Reliable Service:</strong>
                  {{ applianceDetails.whyChooseUs.service }}
                </p>
  
                <p v-if="applianceDetails?.whyChooseUs?.localService">
                  <strong>Local Service:</strong>
                  {{ applianceDetails.whyChooseUs.localService }}
                </p>
              </div>
            </section>
  
            <!-- Section 5: Conclusion -->
            <section>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                Schedule Your {{ pageTitle }} Today
              </h2>
              <p class="text-gray-700 leading-relaxed">
                {{ applianceDetails?.conclusion || 'Contact us today for reliable appliance repair services!' }}
              </p>
            </section>
          </div>
        </div>
  
        <FormsContact />
        <Footer />
        <ModalsPrivacy />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  import { useHead } from "@vueuse/head";
  import { applianceData } from '~/data/appliance_data';

  const route = useRoute();
  
 
  // Get the dynamic appliance type from the route params
  const applianceType = route.params.applianceType || "refrigerator";
  const applianceDetails = applianceData[applianceType] || null;
  const pageTitle = applianceDetails?.title || "Appliance Repair Services";
  
  useHead({
    title: pageTitle,
    meta: [{ name: "description", content: applianceDetails?.intro?.slice(0, 170) || "Professional appliance repair services for all major brands." }]
  });
  </script>
  
  <style>
  /* Add relevant styles */
  </style>