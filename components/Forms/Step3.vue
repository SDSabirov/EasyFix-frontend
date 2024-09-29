<template>
    <div class="flex flex-col space-y-4 sm:gap-6 animate-fadeInLeft">
            <div class="sm:col-span-2">
              <label
                for="description"
                class="block mb-2 text-lg font-medium text-primary"
                >What is the problem with your appliances?</label
              >
              <label for="common issues" class="block mb-2 text-sm text-gray"
                >Here are some common issues
              </label>
              <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-1 space-y-2 py-2 w-full flex-wrap"
              >
                
                <button
                  v-for="suggestion, index in currentSuggestions" :key="index"
                  class="rounded-xl w-fit bg-secondary px-4 py-2 text-light text-sm text-left hover:bg-primary selected animate-fadeDown"
                  @click="fillSuggestion(suggestion)"
                  type="button"
                >
                  <p class="whitespace-nowrap overflow-hidden text-ellipsis">
                    {{suggestion}}
                  </p>
                </button>
              </div>
              <small class="text-gray-600 font-semibold"
              :class="{'text-red-500': localData.error}">Please choose some of the above suggestions or type </small>
              <textarea
                id="description"
                rows="8"
                class="block p-2.5 rounded-xl w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Please provide a brief description of the issue"
                v-model="localData.description"
                :class="{'border-red-500': localData.error}"
              ></textarea>
              
            </div>
          </div>
</template>


<script setup>

const props = defineProps({
  modelValue: Object, // The data will be passed as modelValue
  type:String
})

// Create reactive local state for the data
const localData = defineModel()

let userMessage = ref("");
let currentSuggestions = ref([])
const suggestions = {
  cooling: [
  'Not maintaining the proper temperature',
  'Temperature is too cold',
  'Temperature is too hot',
  'Leaking water underneath',
  'Showing error code',
  'Making a beeping noise',
  'Ice maker not working',
  'Ice build-up'
],
cooking: [
  'Incorrect temperature',
  'Not heating well enough',
  'Smell of gas',
  'Keeps sparking',
  'Door problems',
  'Not working',
  'Showing error codes',
  'Oven not turning on'
]
}
let type = ref(props.type)
const fillSuggestion = (suggestion) => {
  if (userMessage.value.length == 0) {
    userMessage.value = userMessage.value + suggestion;
  } else {
    userMessage.value = userMessage.value + "\n" + suggestion;
  }
};
function updateSuggestions(){
  if (type.value == 'Refrigerator'|| type.value == 'Built-In Refrigerator' ||type.value == 'Freezer'|| type.value == 'Wine Cooler'){
    currentSuggestions = suggestions.cooling
  }
  else{
    currentSuggestions =suggestions.cooking
  }
}

onMounted(()=>{
  updateSuggestions()
  console.log(type)
})
</script>