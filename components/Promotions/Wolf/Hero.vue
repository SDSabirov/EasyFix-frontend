<template>
  <div class="max-w-screen md:h-screen flex flex-col relative overflow-hidden">
    <img
      src="/assets/img/promotions/wolf-hero.webp"
      alt="Viking Appliances"
      class="relative md:fixed top-0 w-full h-full -z-50 object-cover"
    />
    <div
      class="w-full h-full bg-primary/60 md:w-[55%] hidden md:block"
      style="clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)"
    ></div>
    <div
      class="w-full h-1/2 absolute bottom-0 bg-transparent md:w-[56%] hidden md:block"
      style="clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)"
    >
      <div class="absolute bottom-0 right-0 h-full w-[22%] bg-primary/60"
      style="clip-path: polygon(46% 0%, 100% 0%, 90% 100%, 0% 100%)"></div>
    </div>
    <div
      class="w-full h-1/2 absolute top-0 bg-transparent md:w-[70%] hidden md:block"
      style="clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)"
    >
      <div class="absolute bottom-0 right-0 h-full w-[20%] bg-primary/60"
      style="clip-path: polygon(50% 0%, 100% 0%, 90% 100%, 0% 100%)"></div>
    </div>
    <div
      class="flex relative md:absolute md:inset-0 items-center justify-center md:justify-start w-full h-full hero"
    >
      <div
        class="p-4 md:p-10 rounded-2xl space-y-6 max-w-[529px] mx-2 w-full max-w-screen-xl mx-auto justify-center md:justify-start"
      >
        <div class="max-w-xl space-y-6">
          <h1
            class="text-3xl md:text-5xl font-semibold text-primary md:text-white text-center md:text-left"
          >
           Wolf and Cove Appliance Repair in the Bay Area
          </h1>
          <div class="w-full flex items-center justify-center md:justify-start">
            <a href="tel:4159414144">
              <button
                class="bg-primary px-6 py-2 rounded-md border-2 border-primary font-normal w-[300px] hover:border-primary hover:text-white hover:bg-secondary transition-all duration-800 ease-out group"
                aria-label="Call us for Viking appliance repair services"
              >
                <p class="text-white group-hover:text-white">Request a call</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
