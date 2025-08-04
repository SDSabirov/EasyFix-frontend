<template>
  <section id="testimonials" class="bg-gray-50 py-16 lg:py-24">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
          <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span class="text-primary font-semibold text-sm">Customer Reviews</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          What Our Clients Say About Us
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Read real testimonials from satisfied customers across the Bay Area who trust Easy Fix Appliance for their luxury appliance repair needs.
        </p>
      </div>

      <!-- Featured Review -->
      <div class="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12 border border-gray-100">
        <div class="max-w-4xl mx-auto text-center">
          <div class="relative mb-8">
            <svg class="w-16 h-16 text-primary/20 mx-auto mb-6" viewBox="0 0 24 27" fill="currentColor">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/>
            </svg>
            
            <div :key="currentIndex" class="transition-all duration-500 ease-in-out" :class="{ 'opacity-100': animate, 'opacity-0': !animate }">
              <blockquote class="mb-8">
                <p class="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                  "{{ currentReview.review }}"
                </p>
              </blockquote>
              
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="text-left">
                  <div class="font-bold text-gray-900 text-lg">{{ currentReview.author }}</div>
                  <div class="flex items-center text-gray-600 text-sm">
                    <span>{{ currentReview.date }} on</span>
                    <img v-if="currentReview.platform=='Yelp'" :src="yelpLogo" class="h-5 ml-2" alt="Yelp logo">
                    <img v-if="currentReview.platform=='Google'" :src="googleLogo" class="h-5 ml-2" alt="Google logo">
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Navigation Dots -->
          <div class="flex justify-center space-x-3 mt-8">
            <button 
              v-for="(review, index) in Reviews" 
              :key="index"
              @click="goToReview(index)"
              class="w-4 h-4 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-w-[16px] min-h-[16px] touch-manipulation"
              :class="currentIndex === index ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'"
            ></button>
          </div>
        </div>
      </div>

      <!-- Review Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        <div 
          v-for="(review, index) in Reviews.slice(0, 6)" 
          :key="index"
          class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
        >
          <div class="flex items-center mb-4">
            <!-- Star Rating -->
            <div class="flex text-yellow-400 mr-3">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <span class="mr-2">{{ review.date }}</span>
              <img v-if="review.platform=='Yelp'" :src="yelpLogo" class="h-4" alt="Yelp">
              <img v-if="review.platform=='Google'" :src="googleLogo" class="h-4" alt="Google">
            </div>
          </div>
          
          <p class="text-gray-700 leading-relaxed mb-4 line-clamp-4">
            "{{ review.review.substring(0, 200) }}{{ review.review.length > 200 ? '...' : '' }}"
          </p>
          
          <div class="flex items-center">
            <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
              <span class="text-white font-semibold text-sm">{{ review.author.charAt(0) }}</span>
            </div>
            <div>
              <div class="font-semibold text-gray-900">{{ review.author }}</div>
              <div class="text-sm text-gray-600">Verified Customer</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Review Platform Stats -->
      <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white text-center">
        <div class="max-w-3xl mx-auto">
          <h3 class="text-2xl font-bold mb-4">
            Join Thousands of Satisfied Customers
          </h3>
          <p class="text-white/90 mb-6">
            See why Bay Area homeowners trust Easy Fix Appliance for their luxury appliance repair needs.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">5/5</div>
              <div class="text-white/80">Google Rating</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">50+</div>
              <div class="text-white/80">Reviews</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">100%</div>
              <div class="text-white/80">Satisfaction</div>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:4159414144"
              class="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 min-h-[48px] bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation"
            >
              <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span class="text-sm sm:text-base">Call Now: (415) 941-4144</span>
            </a>
            
            <a 
              href="https://share.google/04bpXVl20Le131xo4"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 min-h-[48px] border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 touch-manipulation"
            >
              <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              <span class="text-sm sm:text-base">View All Reviews</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

// Import platform logos
import googleLogo from '/assets/img/google.svg'
import yelpLogo from '/assets/img/yelp.svg'

const Reviews = ref([
  {
    review:
      "Had Tom come repair our Subzero fridge last week. He was an amazing technician, ontime, and very professional. When the fridge stopped cooling, we were so worried ... with a new baby, it would have been a nightmare. Tom had the parts he needed and proceeded to do the repair. He was thorough and informative the entire time. I've definitely found my goto company and texh. Thanks EasyFix!",
    author: "Den Baron",
    date: "3 years ago",
    platform: "Google"
  },
  {
    review:
      "I had an amazing experience with Easy Fix. My Viking oven wasn't heating properly, and they sent a technician who was not only punctual but also incredibly professional. He diagnosed and fixed the issue in just one trip, which was a huge relief. The technician went above and beyond by checking out my other appliances, offering valuable insights along the way. You can tell he was very knowledgeable and passionate about his work. Overall, the service was perfect, and I learned a lot. I highly recommend them for any appliance repairs—top-notch from start to finish!",
    author: "Uzak Almasbek",
    date: "2 months ago",
    platform: "Google"
  },
  {
    review:
      "I recently had an issue with my Wolf Range where the oven wasn't heating evenly, causing my food to cook inconsistently. I called Easy Fix Appliance, and I'm so impressed with their service! The technician, Tom, arrived right on time, which is always a good start. He was very professional and took the time to explain the problem in a way that was easy to understand — something I really appreciated since I'm not very familiar with appliance repairs. He quickly diagnosed the problem and had the replacement part on hand, completing the repair much faster than I expected. Not only was he efficient, but he was also respectful of my home, leaving everything spotless afterward. I highly recommend Easy Fix for anyone looking for fast, reliable, and knowledgeable service on high-end appliances like Wolf!",
    author: "thai bui",
    date: "2 weeks ago",
    platform: "Google"
  },
  {
    review:
      "I was having a frustrating issue with my GE Monogram fridge – the temperature was all over the place, making it impossible to keep food fresh. I reached out to Easy Fix, and from the first call to the completed repair, it was smooth sailing. The technician arrived exactly on time, which I appreciate in a world where punctuality often seems optional. He also called me 30 minutes before arriving. What really stood out was how knowledgeable and approachable he was — not only did he walk me through the problem, but he did so in a way that was clear and not overly technical. Within no time, he had the part replaced and the fridge back to working perfectly. What could've been a major headache turned into a quick and stress-free fix. Bonus points for leaving my kitchen cleaner than when he started! If you're looking for fast, professional, and personable service definitely give these guys a call!",
    author: "K&J R",
    date: "1 week ago",
    platform: "Google"
  },
  {
    review:
      "Our Sub-Zero fridge completely stopped cooling—like, zero cold air. I'm always a bit skeptical about repair companies, but I gave Easy Fix Appliance a shot based on a friend's recommendation. Mike was the tech who came out, and he was super polite and even wore shoe covers (a small thing, but it mattered to me). He explained the issue was the evaporator fan, showed me the part that was broken, and replaced it quickly. Honestly, I was bracing for the worst, but the fridge has been running perfectly for a month now. I'll admit, I was skeptical at first, but Mike proved me wrong!",
    author: "Alina Yashchenko",
    date: "2 days ago",
    platform: "Google"
  }
])

let currentIndex = ref(0)
let currentReview = ref(Reviews.value[0])
let animate = ref(true)
let intervalId = ref(null)

const goToReview = (index) => {
  if (index !== currentIndex.value) {
    animate.value = false
    setTimeout(() => {
      currentIndex.value = index
      currentReview.value = Reviews.value[index]
      animate.value = true
    }, 150)
  }
}

const cycleReviews = () => {
  intervalId.value = setInterval(() => {
    animate.value = false
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % Reviews.value.length
      currentReview.value = Reviews.value[currentIndex.value]
      animate.value = true
    }, 150)
  }, 5000)
}

onMounted(() => {
  cycleReviews()
})

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
  }
})
</script>
