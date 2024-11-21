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
    date: "2 months ago",
    platform:"Google"
  },
  {
    review:
      "I recently had an issue with my Wolf Range where the oven wasn’t heating evenly, causing my food to cook inconsistently. I called Easy Fix Appliance, and I’m so impressed with their service! The technician, Tom, arrived right on time, which is always a good start. He was very professional and took the time to explain the problem in a way that was easy to understand — something I really appreciated since I’m not very familiar with appliance repairs. He quickly diagnosed the problem and had the replacement part on hand, completing the repair much faster than I expected. Not only was he efficient, but he was also respectful of my home, leaving everything spotless afterward. I highly recommend Easy Fix for anyone looking for fast, reliable, and knowledgeable service on high-end appliances like Wolf!",
    author: "thai bui",
    date: "2 week ago",
    platform:"Google"
  },
  {
    review:
      "I was having a frustrating issue with my GE Monogram fridge – the temperature was all over the place, making it impossible to keep food fresh. I reached out to Easy Fix, and from the first call to the completed repair, it was smooth sailing. The technician arrived exactly on time, which I appreciate in a world where punctuality often seems optional. He also called me 30 minutes before arriving. What really stood out was how knowledgeable and approachable he was — not only did he walk me through the problem, but he did so in a way that was clear and not overly technical. Within no time, he had the part replaced and the fridge back to working perfectly. What could’ve been a major headache turned into a quick and stress-free fix. Bonus points for leaving my kitchen cleaner than when he started! If you’re looking for fast, professional, and personable service definitely give these guys a call!",
    author: "K&J R",
    date: "1 week ago",
    platform:"Google"
  },
  {
    review:
      "Our Sub-Zero fridge completely stopped cooling—like, zero cold air. I’m always a bit skeptical about repair companies, but I gave Easy Fix Appliance a shot based on a friend’s recommendation. Mike was the tech who came out, and he was super polite and even wore shoe covers (a small thing, but it mattered to me). He explained the issue was the evaporator fan, showed me the part that was broken, and replaced it quickly. Honestly, I was bracing for the worst, but the fridge has been running perfectly for a month now. I’ll admit, I was skeptical at first, but Mike proved me wrong!",
    author: "Alina Yashchenko",
    date: "2 days ago",
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
