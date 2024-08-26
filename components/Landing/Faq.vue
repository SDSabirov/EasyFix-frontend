<template>
  <section id="faq" class="max-w-screen h-full overflow-hidden z-10 bg-light">
    <div class="container mx-auto px-2 py-16 md:px-28">
      <h2 class="text-4xl font-bold text-center text-primary mb-8">
        Frequently Asked Questions
      </h2>

      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-primary border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-primary hover:text-light dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div
            class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
          >
            <p class="mb-2 text-primary dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-primary border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800  hover:bg-primary hover:text-light gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div
            class="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
          >
            <p class="mb-2 text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde saepe quisquam officiis a, architecto odit beatae at, assumenda tenetur, earum iusto quasi. Tempore, quas. Delectus corporis vero odio magni aspernatur dolor sapiente perferendis porro deleniti magnam, illum, unde fugiat labore necessitatibus qui corrupti ea nulla accusamus quaerat assumenda error.
            </p>
            
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-primary border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800  hover:bg-primary hover:text-light gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div
            class="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
          >
            <p class="mb-2 text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde saepe quisquam officiis a, architecto odit beatae at, assumenda tenetur, earum iusto quasi. Tempore, quas. Delectus corporis vero odio magni aspernatur dolor sapiente perferendis porro deleniti magnam, illum, unde fugiat labore necessitatibus qui corrupti ea nulla accusamus quaerat assumenda error.
            </p>
            
          </div>
        </div>
        
        
      </div>
    </div>
  </section>
</template>

<script setup></script>
