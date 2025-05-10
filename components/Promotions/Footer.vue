<template>
  <section class="w-full bg-primary py-12 pb-0">
    <div
      class="flex flex-col space-y-6 w-full max-w-screen-xl mx-auto py-12 px-4 md:px-0 text-center text-white"
    >
      <h2
        class="text-2xl md:text-4xl text-white font-semibold w-full text=center"
      >
        Contact Us
      </h2>
      <p class="text-xl leading-8 md:w-[50%] mx-auto">
        Luxury homes require <strong>expert service</strong>— trust the team
        that specializes in <strong>high-end {{ brand }} appliance repair.</strong>
      </p>
      <p class="text-xl leading-8 md:w-[50%] mx-auto">
        Experience the <strong>Easy Fix difference</strong>—where precision
        meets luxury in appliance care.
      </p>
      <div class="grid grid-cols-2 gap-6 md:w-[50%] mx-auto">
        <div
          class="flex flex-col h-full text-center items-center justify-between p-6 relative space-y-4"
        >
          <a href="tel:4159414144">
            <div
              class="p-3 bg-[#A7002B] rounded-lg flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
              >
                <path
                  d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"
                ></path>
                <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
              </svg>
            </div>
          </a>

          <h3 class="text-lg font-semibold">Make a call</h3>
          <a href="tel:4159414144" class="text-md">(415) 941 - 4144</a>
        </div>

        <div
          class="flex flex-col h-full text-center items-center justify-between p-6 relative space-y-4"
        >
        <a href="mailto:care@easyfixappliance.com">
            <div
            class="p-3 bg-[#A7002B] rounded-lg flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
            >
              <path
                d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
              ></path>
            </svg>
          </div>
        </a>
          
          <h3 class="text-lg font-semibold">Send us email</h3>
          <a href="mailto:care@easyfixappliance.com" class="text-md"
            >care@easyfixappliance.com</a
          >
        </div>
      </div>
    </div>
    <div class="w-full bg-[#A7002B] p-4 text-center">
        <span class="text-sm text-white "
        >© 2025
        <a href="/" class="hover:underline">Easy Fix Appliance™</a>.
        All Rights Reserved.
      </span>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  brand: {
    type: String,
    required: true
  }
  
})
</script>
