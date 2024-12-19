<template>
  <div class="bg-white h-full w-full">
    <Navbar />
    <header class="w-screen max-h-[70vh] relative overflow-hidden">
        <img src="/assets/img/services/detailhero.webp" alt="background" class="object-cover object-bottom w-full h-full">
        <div class="h-full w-full bg-black/40 absolute top-0 flex flex-col space-y-4 items-center justify-center">
            <h1 class="text-4xl lg:text-7xl font-bold text-center text-white mb-10">
            {{ pageTitle }}
          </h1>
          <a href="tel:4159414144">
          <button
            class="bg-white/20 px-8 py-4 mt-2 rounded-lg border-2 border-white font-semibold hover:border-primary hover:text-primary hover:bg-secondary transition-all duration-800 ease-out group"
          >
            <p class="text-white text-xl group-hover:text-white">
              Book Your {{ pageTitle }}
            </p>
          </button>
        </a>
        </div>

    </header>
    
    <div class="w-screen h-full">
      <div class="w-full h-full relative flex items-center justify-center">
        <div class="max-w-screen-xl mx-auto p-6 bg-light relative rounded-xl -top-28">
         
          <!-- Section 1: Intro -->
          <section class="mb-12">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
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
                <li
                  v-for="model in applianceDetails?.models || []"
                  :key="model"
                >
                  {{ model }}
                </li>
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
              {{
                applianceDetails?.conclusion ||
                "Contact us today for reliable appliance repair services!"
              }}
            </p>
          </section>
        </div>
      </div>
    </div>
    <FormsContact />
      <Footer />
      <ModalsPrivacy />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import { applianceData } from "~/data/appliance_data";

const route = useRoute();
const applianceType = route.params.slug || "refrigerator";
const applianceDetails = applianceData[applianceType] || {
  title: "Appliance Repair Services",
  intro: "Expert appliance repair services for all major brands.",
  serviceDescription:
    "Contact us today for reliable appliance repair services.",
  image: "/assets/img/default.jpg",
};
const pageTitle = applianceDetails.title;

useHead({
  title: pageTitle,
  meta: [
    { name: "description", content: applianceDetails.intro.slice(0, 170) },
    { property: "og:title", content: pageTitle },
    {
      property: "og:description",
      content: applianceDetails.intro.slice(0, 170),
    },
    { property: "og:image", content: applianceDetails.image },
  ],
});

</script>

<style></style>
