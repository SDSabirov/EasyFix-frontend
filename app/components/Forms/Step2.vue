<template>
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 animate-fadeInLeft">
            <div>
              <label
                for="Appliance type"
                class="block mb-2 font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500"
                :class="{'text-red-500': Errors.type}"
                >Appliance Type</label
              >
              <select
                id="applianceType"
                class="bg-cream/50 border rounded-2xl border-primary/15 text-primary text-sm focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 cursor-pointer transition-colors"
                v-model="localData.type"
                :class="{'border-red-500': Errors.type}"
                >
              <option value="Refrigerator">Refrigerator</option>
              <option value="Wine Cooler">Wine Cooler</option>
              <option value="Stove">Stove</option>
              <option value="Built-In Refrigerator">Built-In Refrigerator</option>
              <option value="Range">Range</option>
              <option value="Cooktop">Cooktop</option>
              <option value="Oven">Oven</option>
              <option value="Freezer">Freezer</option>
              </select>
            </div>
            <div>
              <label
                for="Appliance Brand"
                class="block mb-2 font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500"
                :class="{'text-red-500': Errors.brand}"
                >Appliance brand</label
              >
              <select
                id="applianceBrand"
                class="bg-cream/50 border rounded-2xl border-primary/15 text-primary text-sm focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 cursor-pointer transition-colors"
                v-model="localData.brand"
                :class="{'border-red-500': Errors.brand}"
                >
                <option value="Sub-zero">Sub-zero</option>
                <option value="Wolf">Wolf</option>
                <option value="Viking">Viking</option>
                <option value="KitchenAid">KitchenAid</option>
                <option value="GE Monogram">GE Monogram</option>
                <option value="Thermador">Thermador</option>
                <option value="Dacor">Dacor</option>
                <option value="DSC">DSC</option>
                <option value="Miele">Miele</option>
                <option value="Bertazzoni">Bertazzoni</option>
                <option value="U-Line">U-Line</option>
                
              </select>
            </div>
            <div>
              <label
                for="Appliance Brand"
                class="block mb-2 font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500"
                :class="{'text-red-500': Errors.age}"
                >Approximate appliance age</label
              >
              <select
                id="applianceAge"
                class="bg-cream/50 border rounded-2xl border-primary/15 text-primary text-sm focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 cursor-pointer transition-colors"
                v-model="localData.age"
                :class="{'border-red-500': Errors.age}"
                >
                <option value="less than a year">less than 1 year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
                <option value="10+">10+</option>
                <option value="15+">15+</option>
              </select>
            </div>
            <div class="relative max-w-sm ">
              <label
                for="Preffered Date"
                class="block mb-2 font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500"
                >Preffered Date & Time</label
              >
              <div class="flex space-x-1">
                <BookingDatepicker v-model="localData.date" :dateError="Errors.date"/>
                <BookingTimepicker v-model="localData.time" :timeError="Errors.time"/>
              </div>
              
            </div>
          </div>
</template>

<script setup>

const props = defineProps({
  modelValue: Object, // The data will be passed as modelValue
  Errors: Object // The error messages for validation
})

// Create reactive local state for the data
const localData = defineModel()

</script>