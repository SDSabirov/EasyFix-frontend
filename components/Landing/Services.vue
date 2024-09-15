<template>
  <section
    id="services"
    class="max-w-screen h-full bg-light overflow-hidden z-10"
  >
    <div class="container mx-auto px-2 py-16 md:px-28">
      <h2 class="text-4xl font-bold text-center text-primary">Appliances</h2>
      <p class="text-justify text-gray-500 mt-2 px-2 md:mt-6">
        <strong>At Easy Fix Appliance</strong>, we deliver premium appliance repair services for
        luxury brands like 
        <strong>Sub-Zero,</strong> 
        <strong> Viking,</strong>
        <strong> Dacor,</strong>
        <strong> Bertazzoni,</strong>
        <strong> Thermador,</strong>
        <strong> KitchenAid,</strong>
        <strong> GE Monogram,</strong>
          and more.
        Our <strong>highly trained and certified </strong>
        technicians specialize in high-end appliance repair, ensuring your
        appliances perform at their best. We use <strong>genuine manufacturer </strong> parts and
        advanced repair techniques to handle even the most challenging issues,
        guaranteeing long-lasting results. With flexible scheduling and a
        commitment to top-tier customer service, we make appliance repair
        convenient and stress-free. Trust Easy Fix Appliance for expert
        solutions that fit your busy lifestyle.
      </p>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-2 mt-4 justify-center"
      >
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary"
        >
          <img
            src="assets/img/wolfCooking.jpg"
            alt="oven"
            class="z-10 w-full h-full object-cover"
          />

          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-light/80 w-full"
          >
            <!-- Header is always visible -->
            <div class="mb-2 flex justify-between items-center">
              <div class="flex flex-col space-y-2">
                <img
                  src="/assets/img/subzeroLogosilver.png"
                  class="h-[40px]"
                  alt=""
                />
                <img src="/assets/img/wolf.png" class="h-[40px]" alt="" />
              </div>

              <div class="max-h-[40px] flex">
                <img
                  src="/assets/icons/cookingTop.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/freezer.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/fridge.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <p class="font-bold">
                We service & repair following Wolf products:
              </p>
              <ul class="list-disc text-sm">
                <li>Cooktop and Rangetop</li>
                <li>Outdoor Grills</li>
                <li>Built-In Ovens</li>
                <li>Range Hoods & Ventilation</li>
                <li>Microwaves</li>
                <li>Speciality Modules</li>
                <li>Warming Drawers</li>
              </ul>
              <button
                class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
              >
                <a href="#services" class="text-light group-hover:text-white"
                  >Book now</a
                >
              </button>
            </div>
          </div>
        </div>
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary"
        >
          <img
            src="assets/img/vikingAppliance.jpeg"
            alt="oven"
            class="z-10 w-full h-full object-cover"
          />
          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-light/80 w-full"
          >
            <!-- Header is always visible -->
            <div class="mb-2 flex justify-between items-center">
              <img src="/assets/img/viking.png" class="h-[40px]" alt="" />
              <div class="max-h-[40px] flex">
                <img
                  src="/assets/icons/cookingTop.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/freezer.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/fridge.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/ventilation.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <p class="font-bold">
                We service & repair following Viking products:
              </p>
              <ul class="list-disc text-sm">
                <li>Cooktop and Rangetop</li>
                <li>Ovens</li>
                <li>Microwaves</li>

                <li>Warming Drawers</li>
                <li>Ventilation Systems</li>
                <li>Built in Refrigeration</li>
                <li>Integrated Refrigeration</li>

                <li>Freezer Drawers</li>
                <li>Ice Machines</li>
              </ul>
              <button
                class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
              >
                <a href="#services" class="text-light group-hover:text-white"
                  >Book now</a
                >
              </button>
            </div>
          </div>
        </div>
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary"
        >
          <img
            src="assets/img/kitchenaidCover.png"
            alt="oven"
            class="z-10 w-full h-full object-cover bg-gray-400"
          />
          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-light/80 w-full"
          >
            <!-- Header is always visible -->
            <div class="mb-2 flex justify-between items-center max-h-[40px]">
              <img
                src="/assets/img/kitchenaid.png"
                class="max-h-[40px] w-1/2"
                alt=""
              />
              <div class="max-h-[40px] flex">
                <img
                  src="/assets/icons/cookingTop.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <p class="font-bold">
                We service & repair following Wolf products:
              </p>
              <ul class="list-disc text-sm">
                <li>Cooktop and Rangetop</li>
                <li>Outdoor Grills</li>
                <li>Built-In Ovens</li>
                <li>Range Hoods & Ventilation</li>
                <li>Microwaves</li>
                <li>Speciality Modules</li>
                <li>Warming Drawers</li>
              </ul>
              <button
                class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
              >
                <a href="#services" class="text-light group-hover:text-white"
                  >Book now</a
                >
              </button>
            </div>
          </div>
        </div>
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary"
        >
          <img
            src="assets/img/GEmonogramcover.jpg"
            alt="oven"
            class="z-10 w-full h-full object-contain bg-gray-400"
          />
          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-light/80 w-full"
          >
            <!-- Header is always visible -->
            <div class="mb-2 flex justify-between items-center max-h-[40px]">
              <img
                src="/assets/img/GEmonogram.png"
                class="max-h-[40px] w-[40%]"
                alt=""
              />
              <div class="max-h-[40px] flex">
                <img
                  src="/assets/icons/cookingTop.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <p class="font-bold">
                We service & repair following Wolf products:
              </p>
              <ul class="list-disc text-sm">
                <li>Cooktop and Rangetop</li>
                <li>Outdoor Grills</li>
                <li>Built-In Ovens</li>
                <li>Range Hoods & Ventilation</li>
                <li>Microwaves</li>
                <li>Speciality Modules</li>
                <li>Warming Drawers</li>
              </ul>
              <button
                class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
              >
                <a href="#services" class="text-light group-hover:text-white"
                  >Book now</a
                >
              </button>
            </div>
          </div>
        </div>
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary"
        >
          <img
            src="assets/img/dacor-cover.jpg"
            alt="oven"
            class="z-10 w-full h-full object-cover bg-gray-400"
          />
          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-light/80 w-full"
          >
            <!-- Header is always visible -->
            <div class="mb-2 flex justify-between items-center max-h-[40px]">
              <img
                src="/assets/img/dacor-logo.png"
                class="max-h-[40px] w-1/2"
                alt=""
              />
              <div class="max-h-[40px] flex">
                <img
                  src="/assets/icons/cookingTop.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <p class="font-bold">
                We service & repair following Wolf products:
              </p>
              <ul class="list-disc text-sm">
                <li>Cooktop and Rangetop</li>
                <li>Outdoor Grills</li>
                <li>Built-In Ovens</li>
                <li>Range Hoods & Ventilation</li>
                <li>Microwaves</li>
                <li>Speciality Modules</li>
                <li>Warming Drawers</li>
              </ul>
              <NuxtLink
                class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
              >
                <a href="/booking" class="text-light group-hover:text-white"
                  >Book now</a
                >
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary"
        >
          <img
            src="assets/img/thermador-cover.jpg"
            alt="oven"
            class="z-10 w-full h-full object-cover bg-gray-400"
          />
          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-light/80 w-full"
          >
            <!-- Header is always visible -->
            <div class="mb-2 flex justify-between items-center max-h-[40px]">
              <img
                src="/assets/img/thermador-vector-logo.svg"
                class="max-h-[250px]"
                alt=""
              />
              <div class="max-h-[40px] flex">
                <img
                  src="/assets/icons/cookingTop.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <p class="font-bold">
                We service & repair following Wolf products:
              </p>
              <ul class="list-disc text-sm">
                <li>Cooktop and Rangetop</li>
                <li>Outdoor Grills</li>
                <li>Built-In Ovens</li>
                <li>Range Hoods & Ventilation</li>
                <li>Microwaves</li>
                <li>Speciality Modules</li>
                <li>Warming Drawers</li>
              </ul>
              <NuxtLink
                class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
              >
                <a href="/booking" class="text-light group-hover:text-white"
                  >Book now</a
                >
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full items-center justify-center">
        <NuxtLink
        href="/booking"
          class="bg-primary px-8 py-4 mt-8 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
        >
          <p  class="text-light group-hover:text-white"
            >Book now</p
          >
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup></script>
