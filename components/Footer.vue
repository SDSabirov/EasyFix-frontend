<template>
  <footer class="bg-primary  shadow ">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2024
        <a href="/" class="hover:underline">Easy Fix Appliance™</a>.
        All Rights Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
          <button data-modal-toggle="static-modal" class="hover:underline me-4 md:me-6" type="button">Privacy Policy</button>
        </li>
        
        <NuxtLink>
          <a href="/sitemap.xml" class="hover:underline me-4 md:me-6">Site map</a>
        </NuxtLink>
        
      </ul>
    </div>
  </footer>
</template>
