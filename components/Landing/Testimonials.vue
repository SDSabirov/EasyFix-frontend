<template>
  <section
    id="testimonials"
    class="max-w-screen h-full overflow-hidden z-10 bg-blackOpacity"
  >
    <div class="container mx-auto px-2 py-16 lg:px-28">
      <h2 class="text-4xl font-bold text-center text-light capitalize">
        What Our Clients Say
      </h2>
      <div
        class="max-w-screen-xl px-4 py-8 mx-auto text-center bg-light lg:py-16 lg:px-6 mt-2 md:mt-6"
      >
        <figure
          class="max-w-screen-md mx-auto animate-fadeInLeft"
          :key="currentIndex"
          v-bind:class="{ 'animate-fadeInRight': animate }"
        >
          <svg
            class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p class="text-2xl font-medium text-gray-900 dark:text-white">
              {{ currentReview.review }}
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <img
              class="w-6 h-6 rounded-full"
              src="/assets/icons/userReview.svg"
              alt="profile picture"
            />
            <div
              class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
            >
              <div class="pr-3 font-medium text-gray-900 dark:text-white">
                {{ currentReview.author }}
              </div>
              <div
                class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400 flex items-center space-x-2"
              ><p>
                {{ currentReview.date }} <span> on </span> 
              </p>
                
                <img v-if="currentReview.platform=='Yelp'" src="/assets/img/yelp.svg" class="max-h-[30px]" alt="yelp logo">
                <img v-if="currentReview.platform=='Google'" src="/assets/img/google.svg" class="max-h-[30px]" alt="yelp logo">
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const Reviews = ref([
  {
    review:
      "Had Tom come repair our Subzero fridge last week. He was an amazing technician, ontime, and very professional. When the fridge stopped cooling, we were so worried ... with a new baby, it would have been a nightmare. Tom had the parts he needed and proceeded to do the repair. He was thorough and informative the entire time. I've definitely found my goto company and texh. Thanks EasyFix!",
    author: "Den Baron",
    date: "3 years ago",
    platform:"Google"
  },
  {
    review:
      "I had an amazing experience with Easy Fix. My Viking oven wasn’t heating properly, and they sent a technician who was not only punctual but also incredibly professional. He diagnosed and fixed the issue in just one trip, which was a huge relief. The technician went above and beyond by checking out my other appliances, offering valuable insights along the way. You can tell he was very knowledgeable and passionate about his work. Overall, the service was perfect, and I learned a lot. I highly recommend them for any appliance repairs—top-notch from start to finish!",
    author: "Uzak Almasbek",
    date: "1 week ago",
    platform:"Google"
  },
  
]);

let currentIndex = ref(0);
let currentReview = ref(Reviews.value[0]);
let animate = ref(true);


const cycleReviews = () => {
  setInterval(() => {
    animate.value = false; 
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % Reviews.value.length;
      currentReview.value = Reviews.value[currentIndex.value];
      animate.value = true; 
    }, 50); 
  }, 3000); 
};


onMounted(() => {
  cycleReviews();
});
</script>
