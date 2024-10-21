<template>
  <div class="bg-primary/80">
    <Navbar />
    <div class="pt-[14%] lg:pt-[12%]">
        <div class="w-screen h-full ">
            <div class="max-w-7xl mx-auto p-6 bg-gray-100">
        <!-- Page Title -->
        <h1 class="text-4xl font-bold text-center text-primary mb-10">
          Common Problems and Maintenance for Sub-Zero Refrigeration
        </h1>

        <!-- Section 1: Common Problems -->
        <section class="mb-12 ">
          
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            
          <ul class="list-disc pl-6 text-gray-700 leading-relaxed">
            
            <li>
              <strong>1. Temperature Fluctuations</strong> <br />
              Symptoms: Food spoiling quickly or freezer burn. <br />
              Causes: Faulty thermostat, condenser coil issues, or door gasket
              wear.
            </li>
            <li>
              <strong>2. Water Leakage</strong> <br />
              Symptoms: Puddles forming under the fridge. <br />
              Causes: Clogged defrost drain or malfunctioning water filter.
            </li>
            <li>
              <strong>3. Frost Build-Up in Freezer</strong> <br />
              Symptoms: Ice buildup on shelves or walls. <br />
              Causes: Defrost heater malfunction or improper door sealing.
            </li>
            <li>
              <strong>4. Loud or Unusual Noises</strong> <br />
              Symptoms: Humming, buzzing, or rattling sounds. <br />
              Causes: Noisy compressors, failing evaporator fans, or condenser
              fan motors.
            </li>
            <li>
              <strong>5. Ice Maker Issues</strong> <br />
              Symptoms: Ice maker not producing ice or producing small amounts.
              <br />
              Causes: Water line blockages or faulty water inlet valves.
            </li>
            <li>
              <strong>6. Condenser Coil Failure</strong> <br />
              Symptoms: Overheating, ineffective cooling. <br />
              Causes: Dust accumulation or coil malfunction, requiring cleaning
              or replacement.
            </li>
          </ul>
          <img
            src="/assets/img/subzerowolfappliance.webp"
            alt="Sub-Zero Refrigerator"
            class="w-full h-full object-cover mb-6"
          />
          </div>
          
        </section>

        <!-- Section 2: Why Repair Your Sub-Zero Refrigerator -->
        <section class="mb-12">
          
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <img
            src="/assets/img/wolfCooking.jpg"
            alt="Sub-Zero Refrigerator"
            class="w-full h-full object-cover mb-6"
          />
          <ul class="list-disc pl-6 text-gray-700 leading-relaxed">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
            Why Repair Your Sub-Zero Refrigerator?
          </h2>
            <li>
              <strong>High Initial Investment</strong>: Sub-Zero refrigerators
              often cost more than $10,000. Repairing protects this investment.
            </li>
            <li>
              <strong>Built to Last</strong>: Sub-Zero is designed for
              durability, and repairs can extend the life of the unit at a
              fraction of the cost of replacement.
            </li>
            <li>
              <strong>Environmentally Friendly</strong>: Repairing reduces
              landfill waste. Sub-Zero's design allows for easy part
              replacements.
            </li>
          </ul>
          </div>
          
        </section>

        <!-- Section 3: Common FAQs -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">
            Common FAQs About Sub-Zero Refrigerators
          </h2>
          <div class="text-gray-700 leading-relaxed">
            <p>
              <strong>Q: How long does a Sub-Zero refrigerator last?</strong>
              <br />
              A: With proper care, it can last 20 years or more, far exceeding
              standard refrigerator lifespans.
            </p>

            <p>
              <strong>Q: What is covered under Sub-Zero’s warranty?</strong>
              <br />
              A: Sub-Zero offers two years full warranty on parts and labor, and
              up to 12 years on sealed systems like the compressor.
            </p>

            <p>
              <strong
                >Q: What should I do if my Sub-Zero refrigerator is
                leaking?</strong
              >
              <br />
              A: Check for clogged defrost drains or damaged water filters. If
              unresolved, contact a certified repair technician.
            </p>

            <p>
              <strong
                >Q: Why is my Sub-Zero fridge running all the time?</strong
              >
              <br />
              A: Dirty condenser coils or a malfunctioning thermostat may be
              causing it to overwork. Regular maintenance is crucial.
            </p>
          </div>
        </section>

        <!-- Section 4: Care and Maintenance Tips -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">
            Care and Maintenance Tips for Sub-Zero Refrigerators
          </h2>
          <ul class="list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <strong>Clean the Condenser Coils Every 6 Months</strong>: Dust
              and debris can cause overheating. Clean them regularly.
            </li>
            <li>
              <strong>Replace Water Filters Every 6 Months</strong>: Ensures
              proper ice maker and water dispenser functionality and improves
              water quality.
            </li>
            <li>
              <strong>Check Door Gaskets for Wear</strong>: Damaged gaskets can
              cause air leaks. Replace if necessary.
            </li>
            <li>
              <strong>Avoid Overloading Shelves</strong>: Overloading can block
              airflow and cause uneven cooling.
            </li>
            <li>
              <strong>Keep the Unit Level</strong>: Ensures efficient cooling
              and prevents door seal issues.
            </li>
            <li>
              <strong>Schedule Professional Maintenance Annually</strong>: A
              professional check-up can catch potential problems early and save
              on costly repairs.
            </li>
          </ul>
        </section>

        <!-- Section 5: Conclusion -->
        <section>
          <h2 class="text-3xl font-bold text-gray-800 mb-6">
            Sub-Zero Refrigeration: Why Repairing is Worth It
          </h2>
          <p class="text-gray-700 leading-relaxed">
            Sub-Zero refrigerators are known for their premium build, advanced
            technology, and longevity. With proper care and occasional repairs,
            a Sub-Zero unit can last over 20 years, much longer than
            conventional refrigerators. Repairing, rather than replacing, is
            often more cost-effective and environmentally friendly.
          </p>
        </section>
      </div>
        </div>
      
      <!-- Book Now Button -->
      <NuxtLink
        to="/booking"
        v-if="showButton"
        class="fixed right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-6 py-3 rounded-l-lg shadow-lg transition-transform duration-800 ease-in"
        :class="{ 'translate-x-0': showButton, 'translate-x-full': !showButton }"
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
// State for the Book Now button
const showButton = ref(false);

// Function to slide the button after 2 seconds
onMounted(() => {
  setTimeout(() => {
    showButton.value = true;
  }, 2000); // Show the button after 2 seconds
});
</script>
