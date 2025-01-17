<template>
  <div>
    <Navbar />
    <div class="max-w-screen h-full bg-light">
      <!-- Blog Image with overlay -->
      <div class="relative w-full h-96 overflow-hidden">
        <img
          src="/assets/img/dacor-cover.jpg"
          alt="Hero image"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
        >
        </div>
      </div>

      <iframe
        src="https://online-booking.workiz.com/?ac=df293d7dfac82f3233068ff6ed38d341f0f350efd0c9fbfe9070308fd4e0efa7"
        width="100%"
        height="1000px"
        style="border: none"
      ></iframe>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>
