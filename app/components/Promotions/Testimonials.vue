<template>
  <section
    id="testimonials"
    class="max-w-screen h-full overflow-hidden z-10"
  >
    <div class="container mx-auto px-4 max-w-screen-xl py-10 lg:py-14">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-8" v-reveal>
        <span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          Customer Reviews
        </span>
        <h2 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-4xl text-primary leading-[1.05] mb-4">
          What our customers
          <em class="font-display font-semibold italic text-brass-dark">are saying</em>
        </h2>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          We deeply care about our clients. So every 5 star review means world to us.
        </p>
      </div>

      <!-- Featured rotating review -->
      <figure class="max-w-3xl mx-auto text-center" v-reveal>
        <span class="font-display text-7xl leading-none text-brass/30 block mb-2" aria-hidden="true">&ldquo;</span>
        <div
          :key="currentIndex"
          class="transition-opacity duration-500 ease-in-out"
          :class="animate ? 'opacity-100' : 'opacity-0'"
        >
          <div class="flex justify-center text-brass gap-0.5 mb-6" role="img" aria-label="5 out of 5 stars">
            <svg v-for="i in 5" :key="i" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <blockquote>
            <p class="font-display text-lg sm:text-2xl text-primary/90 leading-normal">
              {{ currentReview.review.slice(0, 360) }}...
            </p>
          </blockquote>
          <figcaption class="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span class="h-px w-8 bg-brass" aria-hidden="true"></span>
            <span class="font-montserrat text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">{{ currentReview.author }}</span>
            <span class="text-gray-400 text-sm">{{ currentReview.date }}</span>
            <img loading="lazy" decoding="async" v-if="currentReview.platform=='Yelp'" src="/assets/img/yelp.svg" class="h-4" alt="Yelp logo">
            <img loading="lazy" decoding="async" v-if="currentReview.platform=='Google'" src="/assets/img/google.svg" class="h-4" alt="Google logo">
          </figcaption>
        </div>
      </figure>
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
    }, 150);
  }, 6000);
};


onMounted(() => {
  cycleReviews();
});
</script>
