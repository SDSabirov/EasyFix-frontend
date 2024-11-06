<template>
  <div class="w-full h-full">
    <Navbar class="bg-primary" />
    <div class="relative w-full h-fit">
      <div class="relative top-0 h-screen">
        <div
          class="max-w-screen h-full flex flex-col relative overflow-x-hidden"
        >
          <img
            class="fixed top-0 w-full h-[100%] -z-50 object-cover"
            src="assets/img/main_background.webp"
            alt="kitchen aplliances"
          />
          <!--Overlay-->
          <div
            class="absolute top-0 w-full h-full bg-gradient-to-b from-black to-black opacity-70"
          ></div>
          <div class="z-10 relative top-[28vh] mx-2 md:mx-14 lg:mx-32">
            <div
              class="flex flex-col justify-center text-primary items-center space-y-3 bg-light p-6 px-8"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  class="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                  />
                </svg>
              </div>
              <h3
                class="md:text-[24px] text-primary text-center font-semibold text-[20px] animate-fadeDown"
              >
                Thank you!
              </h3>

              <p
                class="md:text-[22px] text-primary text-center text-[18px] animate-fadeDown"
              >
                We’ll be in touch shortly to confirm your appointment and
                provide any additional details. If you have any questions, feel
                free to contact us.
              </p>
              <p
                class="md:text-[22px] text-primary text-center text-[18px] animate-fadeDown"
              >
                <strong>Please note</strong>, This form does not confirm your
                appointment
              </p>

              <NuxtLink href="/">
                <button
                  class="bg-primary rounded-xl px-8 py-4 text-light hover:bg-secondary mt-4"
                >
                  Go to Home page
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative b-0">
      <Footer />
    </div>
    <ModalsPrivacy />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useFlowbite } from "~/composables/useFlowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});

function changeBackground() {
  if (window.scrollY > 1) {
    document.querySelector("nav").classList.remove("bg-transparent");
    document.querySelector("nav").classList.add("bg-primary");
  } else {
    document.querySelector("nav").classList.remove("bg-primary");
    document.querySelector("nav").classList.add("bg-transparent");
  }
}

function onScroll() {
  if (window.scrollY == 0) {
    changeBackground();
  } else {
    changeBackground();
  }
}
</script>
