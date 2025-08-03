<template>
  <section
    id="services"
    class="bg-gray-50 py-16 lg:py-24"
  >
    <div class="container mx-auto px-4 max-w-screen-xl">
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
          <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span class="text-primary font-semibold text-sm">Premium Services</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Specialized Appliance Repair Services for Luxury Brands in Bay Area
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-2">
        <strong>At Easy Fix Appliance</strong>, we deliver premium appliance
        repair services for luxury brands like
        <strong>Sub-Zero,</strong>
        <strong> Viking,</strong>
        <strong> Dacor,</strong>
        <strong> Bertazzoni,</strong>
        <strong> Thermador,</strong>
        <strong> KitchenAid,</strong>
        <strong> GE Monogram,</strong>
        and more. Our <strong>highly trained and certified </strong> technicians
        specialize in high-end appliance repair, ensuring your appliances
        perform at their best. We use
        <strong>genuine manufacturer </strong> parts and advanced repair
        techniques to handle even the most challenging issues, guaranteeing
        long-lasting results. With flexible scheduling and a commitment to
        top-tier customer service, we make appliance repair convenient and
        stress-free. Trust Easy Fix Appliance for expert solutions that fit your
        busy lifestyle.
        </p>
      </div>
      
      <!-- Brand Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
        <div v-for="brand in brands" :key="brand.name" 
             class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div class="text-center">
            <img :src="brand.logo" :alt="brand.name + ' appliance repair services'" 
                 class="h-12 mx-auto mb-4 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            <h3 class="font-semibold text-gray-900 text-sm">{{ brand.name }}</h3>
            <p class="text-xs text-gray-600 mt-1">{{ brand.specialty }}</p>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.name"
             class="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div class="relative h-48 overflow-hidden">
            <img
              src="assets/img/subzerowolfappliance.webp"
              alt="Sub-Zero and Wolf luxury appliances - professional repair services in Bay Area"
              class="z-10 w-full h-full object-cover"
            />
          </NuxtLink>

          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-primary/70 w-full"
          >
            <!-- Header is always visible -->
            <NuxtLink to="/subzero-wolf-repairs">
              <div
                class="mb-2 flex flex-col justify-center items-center w-full"
              >
                <div class="flex flex-col space-y-2 mr-4">
                  <img
                    src="/assets/img/subzeroLogosilver.png"
                    class="max-h-[30px] lg:max-h-[40px]"
                    alt="Subzero Logo"
                  />
                  <img
                    src="/assets/img/wolf.png"
                    class="max-h-[30px] lg:max-h-[40px]"
                    alt="Wolf Logo"
                  />
                </div>

                <!-- <div
                  class="max-h-[30px] lg:max-h-[40px] flex space-x-1 align-center grid grid-cols-6 gap-1"
                >
                  <img
                    src="/assets/icons/freezer.svg"
                    alt="freezer icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/fridge.svg"
                    alt="refrigerator icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cooktopv3.svg"
                    alt="cooktop icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/oven.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cookingTopv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                </div> -->
              </div>
            </NuxtLink>

            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-white text-center opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <h3 class="font-bold w-1/2 text-center text-lg w-full capitalize">
                Expert Services & Repairs for All Sub-Zero & Wolf Appliances
              </h3>

              <div class="flex items-center justify-between mt-2">
                <p>
                  Comprehensive repairs for Refrigerators, Freezers, Wine
                  Coolers, Ovens, and more.
                </p>
              </div>
              <div class="w-full flex items-center justify-center">
                <button
                  class="bg-primary px-4 py-2 mt-2 rounded-xl border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                >
                  <NuxtLink
                    to="/subzero-wolf-repairs"
                    class="text-light group-hover:text-white"
                  >
                   Explore Sub-Zero & Wolf Services
                  </NuxtLink>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Viking-->
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary min-h-[340px]"
        >
          <NuxtLink to="/viking">
            <img
              src="assets/img/vikingAppliance.webp"
              alt="Viking professional kitchen appliances - expert repair services in San Mateo"
              class="z-10 w-full h-full object-cover"
            />
          </NuxtLink>
          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-light/70 w-full"
          >
            <!-- Header is always visible -->
            <NuxtLink to="/viking">
              <div class="mb-2 flex flex-col justify-center items-center">
                <img
                  src="/assets/img/viking.png"
                  class="h-[40px]"
                  alt="viking logo"
                />
                <!-- <div
                  class="max-h-[30px] lg:max-h-[40px] flex space-x-1 align-center grid grid-cols-6 gap-1"
                >
                  <img
                    src="/assets/icons/freezer.svg"
                    alt="freezer icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/fridge.svg"
                    alt="refrigirator icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cooktopv3.svg"
                    alt="cooktop icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/oven.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cookingTopv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                </div> -->
              </div>
            </NuxtLink>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-center opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <h3 class="font-bold w-full text-center text-lg mt-2 capitalize">
                Expert Services & Repairs for All Viking Appliances
              </h3>
              <div class="flex items-center justify-between mt-2">
                <p>
                  Trusted repair solutions for luxury refrigeration, cooking,
                  and more.
                </p>
              </div>
              <div class="w-full flex items-center justify-center">
                <NuxtLink to="/viking">
                  <button
                    class="bg-primary px-4 py-2 rounded-xl mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                  >
                    <p class="text-light group-hover:text-white">Explore Viking Appliance Repairs </p>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        
        <!--Kitchenaid-->
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative  overflow-hidden group hover:shadow-4xl hover:shadow-primary min-h-[340px]"
        >
          <NuxtLink to="/kitchenAid">
            <img
              src="assets/img/kitchenBlue.jpg"
              alt="KitchenAid appliances in modern kitchen - certified repair technicians Bay Area"
              class="z-10 w-full h-full object-cover bg-gray-400"
            />
          </NuxtLink>
          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-primary/80 w-full"
          >
            <!-- Header is always visible -->
            <NuxtLink to="/kitchenAid">
              <div
                class="mb-2 flex flex-col justify-center items-center max-h-[40px]"
              >
                <img
                  src="/assets/img/kitchenaid.png"
                  class="max-h-[40px]"
                  alt="kitchenaind logo"
                />
                <!-- <div
                  class="max-h-[30px] lg:max-h-[40px] flex space-x-1 align-center grid grid-cols-6 gap-1"
                >
                  <img
                    src="/assets/icons/freezer.svg"
                    alt="freezer icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/fridge.svg"
                    alt="refrigirator icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cooktopv3.svg"
                    alt="cooktop icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/oven.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cookingTopv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                </div> -->
              </div>
            </NuxtLink>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-white text-center opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <h3 class="font-bold w-full text-center text-lg mt-2 capitalize">
                Premium Services & Repairs for All KitchenAid Appliances
              </h3>
              <div class="flex items-center justify-between mt-2">
                <p>Specialized repairs for KitchenAid Refrigerators, Ovens, Ranges, and more.</p>
              </div>
              <div class="w-full flex items-center justify-center">
                <NuxtLink to="/kitchenAid">
                  <button
                    class="bg-primary px-4 rounded-xl py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                  >
                    <p class="text-light group-hover:text-white">KitchenAid Repairs</p>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <!--Ge monogram-->
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary min-h-[340px]"
        >
          <NuxtLink to="/gemonogram">
            <img
              src="assets/img/redAppliance.jpeg"
              alt="GE Monogram luxury appliances - professional repair services Palo Alto"
              class="z-10 w-full h-full object-cover bg-gray-400"
            />
          </NuxtLink>
          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-light/80 w-full"
          >
            <!-- Header is always visible -->
            <NuxtLink to="/gemonogram">
              <div
                class="mb-2 flex flex-col justify-center items-center max-h-[40px]"
              >
                <img
                  src="/assets/img/GEmonogram.png"
                  class="max-h-[40px]"
                  alt="GE Monogram Logo"
                />
                <!-- <div
                  class="max-h-[30px] lg:max-h-[40px] flex space-x-1 align-center grid grid-cols-6 gap-1"
                >
                  <img
                    src="/assets/icons/freezer.svg"
                    alt="freezer icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/fridge.svg"
                    alt="refrigirator icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cooktopv3.svg"
                    alt="cooktop icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/oven.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cookingTopv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                </div> -->
              </div>
            </NuxtLink>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-center opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <h3 class="font-bold w-full text-center text-lg mt-2 capitalize">
                Trusted Services & Repairs for All GE Monogram Appliances
              </h3>
              <div class="flex items-center justify-between mt-2">
                <p>
                  Precision repairs for GE Monogram Refrigerators, Ovens, Ranges, and more.
                </p>
              </div>
              <div class="w-full flex items-center justify-center">
                <NuxtLink to="/gemonogram">
                  <button
                    class="bg-primary px-4 rounded-xl py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                  >
                    <p class="text-light group-hover:text-white">GE Monogram Expert Repairs</p>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <!--dacor-->
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary min-h-[340px]"
        >
          <NuxtLink to="/dacor-appliance">
            <img
              src="assets/img/dacor-cover.jpg"
              alt="Dacor premium kitchen appliances - expert repair services San Francisco Bay Area"
              class="z-10 w-full h-full object-cover bg-gray-400"
            />
          </NuxtLink>
          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-white/70 w-full"
          >
            <!-- Header is always visible -->
            <NuxtLink to="/dacor-appliance">
              <div
                class="mb-2 flex flex-col justify-center items-center max-h-[40px]"
              >
                <img
                  src="/assets/img/dacor-logo.png"
                  class="max-h-[40px]"
                  alt="Dacor Logo"
                />
                <!-- <div
                  class="max-h-[30px] lg:max-h-[40px] flex space-x-1 align-center grid grid-cols-6 gap-1"
                >
                  <img
                    src="/assets/icons/freezer.svg"
                    alt="freezer icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/fridge.svg"
                    alt="refrigirator icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cooktopv3.svg"
                    alt="cooktop icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/oven.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cookingTopv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                </div> -->
              </div>
            </NuxtLink>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-center opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <h3 class="font-bold w-full text-center text-lg mt-2 capitalize">
                Reliable Services & Repairs for All Dacor Appliances
              </h3>
              <div class="flex items-center justify-between mt-2">
                <p>Expert repairs for Dacor Refrigerators, Ovens, Cooktops, and more.</p>
              </div>
              <div class="w-full flex items-center justify-center">
                <NuxtLink to="/dacor-appliance">
                  <button
                    class="bg-primary px-4 rounded-xl py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                  >
                    <p class="text-light group-hover:text-white">Dacor Repair Services </p>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <!--thermador-->
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary min-h-[340px]"
        >
          <NuxtLink to="/thermador">
            <img
              src="assets/img/thermador-cover.jpg"
              alt="Thermador professional cooking appliances - certified repair technicians Bay Area"
              class="z-10 w-full h-full object-cover bg-gray-400"
            />
          </NuxtLink>
          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-light/80 w-full"
          >
            <!-- Header is always visible -->
            <NuxtLink to="/thermador">
              <div
                class="mb-2 flex flex-col justify-between items-center max-h-[40px] relative -top-14"
              >
                <img
                  src="/assets/img/thermador.png"
                  class="max-h-[160px]"
                  alt=""
                />
                <!-- <div
                  class="max-h-[30px] lg:max-h-[40px] flex space-x-1 align-center grid grid-cols-6 gap-1"
                >
                  <img
                    src="/assets/icons/freezer.svg"
                    alt="freezer icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/fridge.svg"
                    alt="refrigirator icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cooktopv3.svg"
                    alt="cooktop icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/oven.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/cookingTopv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="object-contain"
                  />
                </div> -->
              </div>
            </NuxtLink>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-cemtrer opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <h3 class="font-bold w-full text-center text-lg mt-2 capitalize">
                Trusted Services & Repairs for All Thermador Appliances
              </h3>
              <div class="flex items-center justify-center mt-2">
                <p>High-quality repairs for Thermador Refrigerators, Ovens, Dishwashers, and more.</p>
              </div>
              <div class="w-full flex items-center justify-center">
                <NuxtLink to="/thermador">
                  <button
                    class="bg-primary rounded-xl px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                  >
                    <p class="text-light group-hover:text-white">Thermador Repair Experts</p>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full items-center justify-center mt-10">
        <a href="tel:4159414144">
          <button
            class="bg-primary px-8 py-4 mt-2 rounded-lg border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
          >
            <p class="text-white group-hover:text-white">Request a Repair Appointment</p>
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>
