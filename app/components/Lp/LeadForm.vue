<template>
  <div class="bg-white rounded-2xl shadow-2xl shadow-ink/15 border border-primary/5 p-6 sm:p-7">
    <template v-if="!submitted">
      <h2 :id="`${idPrefix}-title`" class="font-display font-semibold text-[1.9rem] leading-tight text-primary">
        Check Service Availability
      </h2>
      <p class="mt-1 text-sm text-gray-600">Get fast, reliable service in the Bay Area.</p>

      <form :name="`lp-lead-${variant}`" class="mt-5 space-y-3" novalidate :aria-labelledby="`${idPrefix}-title`" @submit.prevent="submit">
        <div>
          <label :for="`${idPrefix}-brand`" class="sr-only">Brand</label>
          <select
            :id="`${idPrefix}-brand`"
            name="brand"
            v-model="form.brand"
            :class="[fieldClass, !form.brand && 'text-gray-500', errors.brand && errorClass]"
            required
          >
            <option value="" disabled>Brand</option>
            <option v-for="b in brands" :key="b" :value="b">{{ b }}</option>
          </select>
        </div>
        <div>
          <label :for="`${idPrefix}-type`" class="sr-only">Appliance Type</label>
          <select
            :id="`${idPrefix}-type`"
            name="appliance_type"
            v-model="form.type"
            :class="[fieldClass, !form.type && 'text-gray-500', errors.type && errorClass]"
            required
          >
            <option value="" disabled>Appliance Type</option>
            <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
          </select>
        </div>
        <div>
          <label :for="`${idPrefix}-zip`" class="sr-only">ZIP Code</label>
          <input
            :id="`${idPrefix}-zip`"
            name="postal_code"
            v-model.trim="form.zip"
            type="text"
            inputmode="numeric"
            autocomplete="postal-code"
            maxlength="5"
            placeholder="ZIP Code"
            :class="[fieldClass, errors.zip && errorClass]"
            required
          />
        </div>
        <div>
          <label :for="`${idPrefix}-phone`" class="sr-only">Phone Number</label>
          <input
            :id="`${idPrefix}-phone`"
            name="phone"
            v-model.trim="form.phone"
            type="tel"
            inputmode="tel"
            autocomplete="tel-national"
            placeholder="Phone Number"
            :class="[fieldClass, errors.phone && errorClass]"
            required
          />
        </div>
        <div class="relative">
          <label :for="`${idPrefix}-date`" class="sr-only">Preferred Date</label>
          <input
            :id="`${idPrefix}-date`"
            name="preferred_date"
            v-model="form.date"
            type="date"
            :min="today"
            :class="[
              fieldClass,
              'pr-10 appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-date-and-time-value]:text-left',
              !form.date && !dateFocused && 'text-transparent',
              errors.date && errorClass,
            ]"
            required
            @focus="dateFocused = true"
            @blur="dateFocused = false"
            @click="openPicker"
          />
          <!-- Native date inputs can't show a placeholder, so overlay one while empty. -->
          <span v-if="!form.date && !dateFocused" class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-500" aria-hidden="true">Preferred Date</span>
          <svg class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
          </svg>
        </div>

        <p v-if="errorMessage" class="text-sm text-red-600" role="alert">{{ errorMessage }}</p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full min-h-[50px] rounded-lg bg-ink text-white font-display font-semibold text-xl transition-colors duration-300 hover:bg-brass disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
          data-cta="lp-form-submit"
        >
          {{ loading ? 'Sending…' : 'Book My Appointment' }}
        </button>
        <p class="text-center text-xs text-gray-600">We'll confirm availability as soon as possible.</p>
        <p class="text-center text-[10px] leading-snug text-gray-400">
          By submitting, you agree to be contacted by Easy Fix Appliance by phone or text about your request.
          Msg &amp; data rates may apply. Reply STOP to opt out.
        </p>
      </form>
    </template>

    <div v-else class="py-6 text-center" role="status">
      <div class="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-brass/10">
        <svg class="w-8 h-8 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
      </div>
      <h2 class="mt-5 font-display font-semibold text-3xl text-primary">Request received</h2>
      <p class="mt-2 text-sm text-gray-600">
        Thank you! We'll call you shortly to confirm your appointment.
        Need help right now? Call
        <a :href="`tel:${phone.tel}`" class="font-semibold text-primary underline" data-cta="lp-call" @click="$emit('call', 'form-success')">{{ phone.display }}</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  idPrefix: { type: String, required: true },
  phone: { type: Object, required: true },
  location: { type: String, default: 'hero' },
  brands: { type: Array, required: true },
  // Landing page variant ('high-end' | 'general'); tags the lead and GTM events.
  variant: { type: String, required: true },
})
const emit = defineEmits(['call', 'submitted'])

const types = [
  'Refrigerator', 'Freezer', 'Wine Cooler', 'Range', 'Oven', 'Cooktop',
  'Dishwasher', 'Ice Maker', 'Hood', 'Washer', 'Dryer', 'Other',
]

const fieldClass =
  'block w-full h-11 rounded-lg border border-primary/15 bg-white px-3.5 text-sm text-primary placeholder:text-gray-500 focus:border-brass focus:ring-2 focus:ring-brass/30 focus:outline-none transition-colors'
const errorClass = '!border-red-500'

const form = reactive({ brand: '', type: '', zip: '', phone: '', date: '' })
const errors = reactive({ brand: false, type: false, zip: false, phone: false, date: false })
const errorMessage = ref('')
const loading = ref(false)
const submitted = ref(false)

// Local date, not UTC, so late-evening visitors aren't blocked from "today".
const localIso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10)
const today = ref('')
onMounted(() => { today.value = localIso(new Date()) })

const dateFocused = ref(false)
// Desktop Chrome only opens the picker from its (hidden) icon; open it on any click.
const openPicker = (e) => {
  try { e.target.showPicker?.() } catch {}
}

const digits = (v) => v.replace(/\D/g, '')

const validate = () => {
  const phoneDigits = digits(form.phone).replace(/^1(?=\d{10}$)/, '')
  errors.brand = !form.brand
  errors.type = !form.type
  errors.zip = !/^\d{5}$/.test(form.zip)
  errors.phone = phoneDigits.length !== 10
  errors.date = !form.date || (today.value && form.date < today.value)
  if (Object.values(errors).some(Boolean)) {
    const missing = !form.brand || !form.type || !form.zip || !form.phone || !form.date
    errorMessage.value = missing
      ? 'Please complete all fields.'
      : errors.phone
        ? 'Please enter a valid 10-digit phone number.'
        : errors.zip
          ? 'Please enter a valid 5-digit ZIP code.'
          : 'Please choose a date from today onward.'
    return null
  }
  errorMessage.value = ''
  return phoneDigits
}

const { get: getAttribution } = useLeadAttribution()

const submit = async () => {
  const phoneDigits = validate()
  if (!phoneDigits || loading.value) return
  loading.value = true

  // Same endpoint + shape as Forms/BookingForm.vue (the existing CRM pipeline);
  // fields this short form doesn't collect are sent empty.
  const payload = {
    personal: { firstName: '', lastName: '', email: '', phone: phoneDigits, address: '', zip: form.zip, smsConsent: true },
    appliance: { type: form.type, brand: form.brand, age: '', date: form.date, time: '' },
    issue: `PPC landing page request (${form.brand} ${form.type}).`,
    source: `ppc-${props.variant}`,
    attribution: getAttribution(),
  }

  try {
    const response = await fetch('https://api.easyfixappliance.com/api/booking-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-CSRFToken': 'csrftoken' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    submitted.value = true
    trackEvent('lp_form_submit', {
      form_location: props.location,
      landing_variant: props.variant,
      appliance_brand: form.brand,
      appliance_type: form.type,
      // For Google Ads enhanced conversions (configure the user-provided-data variable in GTM).
      enhanced_conversion_data: { phone_number: `+1${phoneDigits}` },
    })
    emit('submitted')
  } catch (error) {
    console.error(error)
    errorMessage.value = `Something went wrong. Please call us at ${props.phone.display}.`
    trackEvent('lp_form_error', { form_location: props.location, landing_variant: props.variant })
  } finally {
    loading.value = false
  }
}
</script>
