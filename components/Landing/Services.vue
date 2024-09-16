<template>
  <section
    id="services"
    class="max-w-screen h-full bg-light overflow-hidden z-10"
  >
    <div class="container mx-auto px-2 py-16 md:px-28">
      <h2 class="text-4xl font-bold text-center text-primary">Appliances</h2>
      <p class="text-justify text-gray-500 mt-2 px-2 md:mt-6">
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
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-2 mt-4 justify-center"
      >
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary min-h-[220px]"
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
            <div class="mb-2 flex justify-between items-center w-full">
              <div class="flex flex-col space-y-2 ">
                <img
                  src="/assets/img/subzeroLogosilver.png"
                  class="h-[40px]"
                  alt="Subzero Logo"
                />
                <img src="/assets/img/wolf.png" class="h-[40px]" alt="Wolf Logo" />
              </div>

              <div class="max-h-[40px] flex space-x-1">
                <img
                  src="/assets/icons/freezer.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/fridge.svg"
                  alt="refrigirator icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cooktopv3.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/oven.svg"
                  alt="oven icon"
                  class="max-h-[40px]"
                />
                
                <div class="max-h-[40px]">
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px]"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px] relative -top-[6px]"
                  />
                </div>
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
            <p class="font-bold w-1/2 text-center text-lg w-full" >We service & repair following </p> 
             
              <div class="flex items-center justify-between px-8 mt-2">
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Sub-zero products</li>
                  <li>Refridgerators / Built-In Fridges</li>
                  <li>Freezers</li>
                  <li>Ice Makers</li>
                  <li>Under Counter Fridges </li>
                  <li>Wine Coolers </li>
                </ul>
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Wolf products</li>
                  <li>Ranges</li>
                  <li>Stoves</li>
                  <li>Ovens</li>
                  <li>Double Ovens</li>
                  <li>Cooktops</li>
                </ul>
              </div>
              <div class="w-full flex items-center justify-center">
                <NuxtLink href="/booking">
                  <button
                    class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                  >
                    <p class="text-light group-hover:text-white">Book now</p>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary min-h-[220px]"
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
              <img src="/assets/img/viking.png" class="h-[40px]" alt="viking logo" />
              <div class="max-h-[40px] flex space-x-1">
                <img
                  src="/assets/icons/freezer.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/fridge.svg"
                  alt="refrigirator icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cooktopv3.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/oven.svg"
                  alt="oven icon"
                  class="max-h-[40px]"
                />
                
                <div class="max-h-[40px]">
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px]"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px] relative -top-[6px]"
                  />
                </div>
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <p class="font-bold w-full text-center text-lg mt-2">
                We service & repair following Viking products:
              </p>
              <div class="flex items-center justify-between px-8 mt-2">
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Cooling</li>
                  <li>Refridgerators / Built-In Fridges</li>
                  <li>Freezers</li>
                  <li>Ice Makers</li>
                  <li>Under Counter Fridges </li>
                  <li>Wine Coolers </li>
                </ul>
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Cooking</li>
                  <li>Ranges</li>
                  <li>Stoves</li>
                  <li>Ovens</li>
                  <li>Double Ovens</li>
                  <li>Cooktops</li>
                </ul>
              </div>
              <div class="w-full flex items-center justify-center">
                <NuxtLink href="/booking">
                  <button
                    class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                  >
                    <p class="text-light group-hover:text-white">Book now</p>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary min-h-[220px]"
        >
          <img
            src="assets/img/kitchenBlue.jpg"
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
                alt="kitchenaind logo"
              />
              <div class="max-h-[40px] flex space-x-1">
                <img
                  src="/assets/icons/freezer.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/fridge.svg"
                  alt="refrigirator icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cooktopv3.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/oven.svg"
                  alt="oven icon"
                  class="max-h-[40px]"
                />
                
                <div class="max-h-[40px]">
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px]"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px] relative -top-[6px]"
                  />
                </div>
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <p class="font-bold w-full text-center text-lg mt-2">
                We service & repair following KitchenAid products:
              </p>
              <div class="flex items-center justify-between px-8 mt-2">
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Cooling</li>
                  <li>Refridgerators / Built-In Fridges</li>
                  <li>Freezers</li>
                  <li>Ice Makers</li>
                  <li>Under Counter Fridges </li>
                  <li>Wine Coolers </li>
                </ul>
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Cooking</li>
                  <li>Ranges</li>
                  <li>Stoves</li>
                  <li>Ovens</li>
                  <li>Double Ovens</li>
                  <li>Cooktops</li>
                </ul>
              </div>
              <div class="w-full flex items-center justify-center">
                <NuxtLink href="/booking">
                  <button
                    class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                  >
                    <p class="text-light group-hover:text-white">Book now</p>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-primary dark:bg-gray-800 shadow-lg relative overflow-hidden group hover:shadow-4xl hover:shadow-primary min-h-[220px]"
        >
          <img
            src="assets/img/redAppliance.jpeg"
            alt="oven"
            class="z-10 w-full h-full object-cover bg-gray-400"
          />
          <div
            class="flex flex-col p-2 z-20 absolute bottom-0 p-4 bg-light/80 w-full"
          >
            <!-- Header is always visible -->
            <div class="mb-2 flex justify-between items-center max-h-[40px]">
              <img
                src="/assets/img/GEmonogram.png"
                class="max-h-[40px] w-[40%]"
                alt="GE Monogram Logo"
              />
              <div class="max-h-[40px] flex space-x-1">
                <img
                  src="/assets/icons/freezer.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/fridge.svg"
                  alt="refrigirator icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cooktopv3.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/oven.svg"
                  alt="oven icon"
                  class="max-h-[40px]"
                />
                
                <div class="max-h-[40px]">
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px]"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px] relative -top-[6px]"
                  />
                </div>
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <p class="font-bold w-full text-center text-lg mt-2">
                We service & repair following Viking products:
              </p>
              <div class="flex items-center justify-between px-8 mt-2">
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Cooling</li>
                  <li>Refridgerators / Built-In Fridges</li>
                  <li>Freezers</li>
                  <li>Ice Makers</li>
                  <li>Under Counter Fridges </li>
                  <li>Wine Coolers </li>
                </ul>
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Cooking</li>
                  <li>Ranges</li>
                  <li>Stoves</li>
                  <li>Ovens</li>
                  <li>Double Ovens</li>
                  <li>Cooktops</li>
                </ul>
              </div>
              <div class="w-full flex items-center justify-center">
                <NuxtLink href="/booking">
                  <button
                    class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                  >
                    <p class="text-light group-hover:text-white">Book now</p>
                  </button>
                </NuxtLink>
              </div>
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
              <div class="max-h-[40px] flex space-x-1">
                <img
                  src="/assets/icons/freezer.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/fridge.svg"
                  alt="refrigirator icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cooktopv3.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/oven.svg"
                  alt="oven icon"
                  class="max-h-[40px]"
                />
                
                <div class="max-h-[40px]">
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px]"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px] relative -top-[6px]"
                  />
                </div>
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <p class="font-bold w-full text-center text-lg mt-2">
                We service & repair following Viking products:
              </p>
              <div class="flex items-center justify-between px-8 mt-2">
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Cooling</li>
                  <li>Refridgerators / Built-In Fridges</li>
                  <li>Freezers</li>
                  <li>Ice Makers</li>
                  <li>Under Counter Fridges </li>
                  <li>Wine Coolers </li>
                </ul>
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Cooking</li>
                  <li>Ranges</li>
                  <li>Stoves</li>
                  <li>Ovens</li>
                  <li>Double Ovens</li>
                  <li>Cooktops</li>
                </ul>
              </div>
              <div class="w-full flex items-center justify-center">
                <NuxtLink href="/booking">
                  <button
                    class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                  >
                    <p class="text-light group-hover:text-white">Book now</p>
                  </button>
                </NuxtLink>
              </div>
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
                class="max-h-[250px] overflow-x-visible"
                alt=""
              />
              <div class="max-h-[40px] flex space-x-1">
                <img
                  src="/assets/icons/freezer.svg"
                  alt="freezer icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/fridge.svg"
                  alt="refrigirator icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/cooktopv3.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
                <img
                  src="/assets/icons/oven.svg"
                  alt="oven icon"
                  class="max-h-[40px]"
                />
                
                <div class="max-h-[40px]">
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px]"
                  />
                  <img
                    src="/assets/icons/ovenv2.svg"
                    alt="oven icon"
                    class="max-h-[22px] relative -top-[6px]"
                  />
                </div>
                <img
                  src="/assets/icons/cookingTopv2.svg"
                  alt="cooktop icon"
                  class="max-h-[40px]"
                />
              </div>
            </div>
            <!-- Paragraph is hidden initially and expands on hover -->
            <div
              class="text-primary text-justify opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:max-h-80 group-hover:opacity-100"
            >
              <p class="font-bold w-full text-center text-lg mt-2">
                We service & repair following Viking products:
              </p>
              <div class="flex items-center justify-between px-8 mt-2">
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Cooling</li>
                  <li>Refridgerators / Built-In Fridges</li>
                  <li>Freezers</li>
                  <li>Ice Makers</li>
                  <li>Under Counter Fridges </li>
                  <li>Wine Coolers </li>
                </ul>
                <ul class="list-disc text-sm">
                  <li class="font-bold text-lg">Cooking</li>
                  <li>Ranges</li>
                  <li>Stoves</li>
                  <li>Ovens</li>
                  <li>Double Ovens</li>
                  <li>Cooktops</li>
                </ul>
              </div>
              <div class="w-full flex items-center justify-center">
                <NuxtLink href="/booking">
                  <button
                    class="bg-primary px-4 py-2 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                  >
                    <p class="text-light group-hover:text-white">Book now</p>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full items-center justify-center mt-6">
        <NuxtLink href="/booking">
          <button
            class="bg-primary px-8 py-4 mt-2 border-2 border-primary font-semibold hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
          >
            <p class="text-light group-hover:text-white">Book now</p>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup></script>
