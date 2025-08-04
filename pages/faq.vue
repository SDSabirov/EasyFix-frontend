<template>
  <div>
    <Navbar />

    <section
      class="bg-gray-50 py-12 px-6 flex w-full flex-col items-center justify-center relative"
      style="padding-top: 5rem"
    >
      <div class="max-w-screen-xl py-[12%] relative mt-8">
        <h1 class="text-4xl font-bold text-center text-primary mb-10">
          Frequently Asked Questions
        </h1>
        <div class="space-y-8">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white p-6 shadow rounded-lg"
          >
            <h2 class="text-xl font-semibold text-gray-800">
              {{ faq.question }}
            </h2>
            <p class="text-gray-700 mt-4">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <ModalsPrivacy />
  </div>
</template>

<script setup>
const activeFaq = ref(null);

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};
const faqs = [
  // General Appliance Repair Questions
  {
    question: "What types of appliances do you repair?",
    answer:
      "We repair a wide range of appliances, including refrigerators, ovens, stoves, dishwashers, washing machines, dryers, and more. We specialize in high-end brands such as Sub-Zero, Wolf, Viking, Thermador, and KitchenAid.",
  },
  {
    question: "Do you use original parts for repairs?",
    answer:
      "Yes, we always use original manufacturer parts to ensure the highest quality and durability for your appliances.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve the Bay Area, including San Mateo, Palo Alto, San Francisco, and surrounding locations.",
  },
  {
    question: "How soon can I schedule a repair?",
    answer:
      "We offer same-day and next-day appointments to minimize your downtime. Contact us to check availability in your area.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "We provide a warranty on all repairs and parts to give you peace of mind and ensure satisfaction with our service.",
  },

  // Additional FAQs
  {
    question: "How do I know if my appliance is worth repairing?",
    answer:
      "Our technicians will evaluate your appliance and provide honest advice. If the repair cost is too high compared to replacement, we’ll let you know.",
  },
  {
    question: "What appliance brands do you specialize in?",
    answer:
      "We specialize in high-end brands like Sub-Zero, Wolf, Viking, Thermador, KitchenAid, and GE Monogram. However, we also repair most major appliance brands.",
  },
  {
    question: "How long does an appliance repair typically take?",
    answer:
      "Most repairs can be completed within an hour. However, if parts need to be ordered, it may take a few additional days.",
  },
  {
    question: "Do you repair older appliances?",
    answer:
      "Yes, we repair older appliances as long as replacement parts are still available.",
  },
  {
    question: "Can I schedule an appointment online?",
    answer:
      "Yes, you can easily schedule a repair through our online booking system or by calling our customer service team.",
  },
  {
    question: "Do you offer emergency repair services?",
    answer:
      "We provide emergency repair services for urgent issues. Contact us directly to check availability.",
  },
  {
    question: "Are your technicians certified?",
    answer:
      "Yes, all our technicians are certified and have extensive experience repairing appliances.",
  },
  {
    question: "What should I do before scheduling a repair?",
    answer:
      "Make a note of your appliance’s model and serial number, and provide a detailed description of the issue when booking.",
  },
  {
    question: "How much do you charge for appliance repairs?",
    answer:
      "Pricing depends on the type of appliance, the complexity of the issue, and whether parts are required. Contact us for a free estimate.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and online payments.",
  },
  {
    question: "Are there any additional service fees?",
    answer:
      "There is a diagnostic fee, but this is typically waived if you proceed with the repair.",
  },
  {
    question: "Why isn’t my refrigerator cooling?",
    answer:
      "Common causes include dirty condenser coils, a faulty compressor, or issues with the thermostat. Our technicians can diagnose and fix the problem.",
  },
  {
    question: "Why is my washing machine leaking?",
    answer:
      "This could be due to a worn-out door seal, a clogged drain, or a faulty pump. We’ll pinpoint the issue and repair it quickly.",
  },
  {
    question: "Why is my oven not heating up properly?",
    answer:
      "A malfunctioning heating element or thermostat is usually to blame. Our technicians will ensure your oven is back to working condition.",
  },
  {
    question: "Why is my dishwasher leaving residue on dishes?",
    answer:
      "This may result from clogged spray arms, a broken water inlet valve, or improper detergent use.",
  },
  {
    question: "How can I maintain my appliances after repair?",
    answer:
      "Regular cleaning, avoiding overloading, and following the manufacturer’s guidelines are key to keeping your appliances in top shape.",
  },
  {
    question: "What happens if the problem comes back after a repair?",
    answer:
      "If the issue recurs within the warranty period, we’ll return to fix it at no additional cost.",
  },
  {
    question: "Do you offer maintenance services?",
    answer:
      "Yes, we offer preventive maintenance to help extend the life of your appliances and avoid costly repairs.",
  },
  {
    question: "Can you provide tips for improving energy efficiency?",
    answer:
      "Absolutely! We can advise on how to optimize your appliances for energy savings during and after the repair.",
  },
];


const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://easyfixappliance.com/faq',
  mainEntity: faqs.map((faq, idx) => ({
    '@type': 'Question',
    '@id': `https://easyfixappliance.com/faq#question${idx}`,
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      '@id': `https://easyfixappliance.com/faq#answer${idx}`,
      text: faq.answer,
    },
  })),
};

useHead({
  title: 'Frequently Asked Questions',
  script: [
    { type: 'application/ld+json', children: JSON.stringify(structuredData) }
  ]
});
</script>

<style>
/* Add any additional styles for the FAQ section here */
</style>
