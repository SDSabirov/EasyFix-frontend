<template>
  <div class="bg-white rounded-2xl shadow-2xl shadow-ink/15 border border-primary/5 p-5 sm:p-7">
    <template v-if="!submitted">
      <h2 :id="`${idPrefix}-title`" class="font-display font-semibold text-[1.9rem] leading-tight text-primary">
        Schedule Your Repair
      </h2>
      <p class="mt-1 text-sm text-gray-600">Tell us what needs fixing and we'll call to confirm a time.</p>

      <form
        ref="formEl"
        :name="`lp-lead-${variant}`"
        class="mt-5 space-y-3"
        novalidate
        :aria-labelledby="`${idPrefix}-title`"
        @submit.prevent="submit"
        @keydown.enter="onEnter"
      >
        <div v-if="!compact" class="grid grid-cols-1 min-[360px]:grid-cols-2 gap-3">
          <div>
            <label :for="`${idPrefix}-brand`" class="sr-only">Appliance brand</label>
            <select
              :id="`${idPrefix}-brand`"
              name="brand"
              v-model="form.brand"
              :class="[fieldClass, 'pl-3 !pr-7', !form.brand && 'text-gray-500', errors.brand && errorClass]"
              required
            >
              <option value="" disabled>Brand</option>
              <option v-for="b in brands" :key="b" :value="b">{{ b }}</option>
            </select>
          </div>
          <div>
            <label :for="`${idPrefix}-type`" class="sr-only">Appliance type</label>
            <select
              :id="`${idPrefix}-type`"
              name="appliance_type"
              v-model="form.type"
              :class="[fieldClass, 'pl-3 !pr-7', !form.type && 'text-gray-500', errors.type && errorClass]"
              required
            >
              <option value="" disabled>Appliance</option>
              <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
            </select>
          </div>
        </div>
        <div v-if="!compact" class="grid grid-cols-2 gap-3">
          <div>
            <label :for="`${idPrefix}-first`" class="sr-only">First name</label>
            <input
              :id="`${idPrefix}-first`"
              name="first_name"
              v-model.trim="form.firstName"
              type="text"
              autocomplete="given-name"
              placeholder="First name"
              :class="[fieldClass, errors.firstName && errorClass]"
              required
            />
          </div>
          <div>
            <label :for="`${idPrefix}-last`" class="sr-only">Last name</label>
            <input
              :id="`${idPrefix}-last`"
              name="last_name"
              v-model.trim="form.lastName"
              type="text"
              autocomplete="family-name"
              placeholder="Last name"
              :class="[fieldClass, errors.lastName && errorClass]"
              required
            />
          </div>
        </div>
        <!-- Compact form. GoHighLevel maps external-form fields by name attribute and label:
             full_name / "Full Name" and phone / "Phone" are its own standard keys. -->
        <div v-else>
          <label :for="`${idPrefix}-name`" class="sr-only">Full Name</label>
          <input
            :id="`${idPrefix}-name`"
            name="full_name"
            v-model.trim="form.name"
            type="text"
            autocomplete="name"
            placeholder="Name"
            :class="[fieldClass, errors.name && errorClass]"
            required
          />
        </div>
        <div>
          <label :for="`${idPrefix}-phone`" class="sr-only">{{ compact ? 'Phone' : 'Phone number' }}</label>
          <input
            :id="`${idPrefix}-phone`"
            name="phone"
            v-model.trim="form.phone"
            type="tel"
            inputmode="tel"
            autocomplete="tel-national"
            :placeholder="compact ? 'Phone' : 'Phone number'"
            :class="[fieldClass, errors.phone && errorClass]"
            required
          />
        </div>
        <div v-if="!compact">
          <label :for="`${idPrefix}-email`" class="sr-only">Email</label>
          <input
            :id="`${idPrefix}-email`"
            name="email"
            v-model.trim="form.email"
            type="email"
            inputmode="email"
            autocomplete="email"
            placeholder="Email"
            :class="[fieldClass, errors.email && errorClass]"
            required
          />
        </div>
        <div v-if="!compact">
          <label :for="`${idPrefix}-zip`" class="sr-only">ZIP code</label>
          <input
            :id="`${idPrefix}-zip`"
            name="postal_code"
            v-model.trim="form.zip"
            type="text"
            inputmode="numeric"
            autocomplete="postal-code"
            maxlength="5"
            placeholder="ZIP code"
            :class="[fieldClass, errors.zip && errorClass]"
            required
          />
        </div>
        <div v-else>
          <label :for="`${idPrefix}-service`" class="sr-only">Appliance / Brand</label>
          <select
            :id="`${idPrefix}-service`"
            name="appliance"
            v-model="form.service"
            :class="[fieldClass, '!pr-9', !form.service && 'text-gray-500', errors.service && errorClass]"
            required
          >
            <option value="" disabled>Appliance / Brand</option>
            <option v-for="s in services" :key="s.label" :value="s.label">{{ s.label }}</option>
          </select>
        </div>

        <p v-if="errorMessage" class="text-sm text-red-600" role="alert">{{ errorMessage }}</p>

        <!-- type="button" on purpose: the form's submit event fires only once validation passes (see trySubmit). -->
        <button
          type="button"
          :disabled="loading"
          class="w-full min-h-[50px] rounded-lg bg-ink text-white font-display font-semibold text-xl transition-colors duration-300 hover:bg-brass disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
          data-cta="lp-form-submit"
          @click="trySubmit"
        >
          {{ loading ? 'Sending…' : 'Request Appointment' }}
        </button>
        <p class="text-center text-xs text-gray-600">We'll call you shortly to confirm.</p>
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
      <h2 class="mt-5 font-display font-semibold text-3xl text-primary">Thank you{{ sent.firstName ? `, ${sent.firstName}` : '' }}!</h2>
      <p class="mt-2 text-sm text-gray-600">
        We've received your request and will call you shortly to confirm your appointment.
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
  // Brand options of the full form.
  brands: { type: Array, default: () => [] },
  // Landing page variant ('high-end' | 'general' | 'subzero'); tags the lead and GTM events.
  variant: { type: String, required: true },
  // Short form for the brand landing pages: Name, Phone and one "Appliance / Brand"
  // select, instead of brand, appliance, first/last name, phone, email and ZIP.
  compact: { type: Boolean, default: false },
  // Options of the compact select: [{ label: 'Wolf Ranges', brand: 'Wolf', type: 'Range' }].
  services: { type: Array, default: () => [] },
})
const emit = defineEmits(['call', 'submitted'])

const types = [
  'Refrigerator', 'Freezer', 'Wine Cooler', 'Range', 'Oven', 'Cooktop',
  'Dishwasher', 'Ice Maker', 'Hood', 'Washer', 'Dryer', 'Other',
]

const fieldClass =
  'block w-full h-11 rounded-lg border border-primary/15 bg-white px-3.5 text-sm text-primary placeholder:text-gray-500 focus:border-brass focus:ring-2 focus:ring-brass/30 focus:outline-none transition-colors'
const errorClass = '!border-red-500'

// name + service belong to the compact form; the rest (except phone) to the full one.
const form = reactive({ brand: '', type: '', zip: '', firstName: '', lastName: '', email: '', phone: '', name: '', service: '' })
const errors = reactive({ brand: false, type: false, zip: false, firstName: false, lastName: false, email: false, phone: false, name: false, service: false })
const errorMessage = ref('')
const loading = ref(false)
const submitted = ref(false)

const digits = (v) => v.replace(/\D/g, '')

const validate = () => {
  const phoneDigits = digits(form.phone).replace(/^1(?=\d{10}$)/, '')
  errors.phone = phoneDigits.length !== 10
  if (props.compact) {
    errors.name = !form.name
    errors.service = !form.service
  } else {
    errors.brand = !form.brand
    errors.firstName = !form.firstName
    errors.lastName = !form.lastName
    errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)
    errors.type = !form.type
    errors.zip = !/^\d{5}$/.test(form.zip)
  }
  if (Object.values(errors).some(Boolean)) {
    const missing = props.compact
      ? !form.name || !form.phone || !form.service
      : !form.brand || !form.type || !form.zip || !form.firstName || !form.lastName || !form.email || !form.phone
    errorMessage.value = missing
      ? 'Please complete all fields.'
      : errors.email
        ? 'Please enter a valid email address.'
        : errors.phone
          ? 'Please enter a valid 10-digit phone number.'
          : 'Please enter a valid 5-digit ZIP code.'
    return null
  }
  errorMessage.value = ''
  return phoneDigits
}

// Who the lead is and which appliance it is about, from either form layout.
// The compact form has one name field (first word = first name) and one select.
const leadDetails = () => {
  if (!props.compact) {
    return { firstName: form.firstName, lastName: form.lastName, brand: form.brand, type: form.type, appliance: `${form.brand} ${form.type}` }
  }
  const [firstName, ...rest] = form.name.split(/\s+/)
  const service = props.services.find((s) => s.label === form.service)
  return { firstName, lastName: rest.join(' '), brand: service.brand, type: service.type, appliance: service.label }
}
// Kept for the thank-you message.
const sent = reactive({ firstName: '' })

const { get: getAttribution } = useLeadAttribution()

// GoHighLevel's external tracking turns every DOM 'submit' event on a form into
// a CRM contact, even when our validation then rejects it (empty/false leads).
// So the button isn't a submit button: validate first, and only a valid form
// gets its submit event (GHL captures it; the handler below sends the POST).
const formEl = ref(null)
const trySubmit = () => {
  if (loading.value || !validate()) return
  const el = formEl.value
  if (el.requestSubmit) el.requestSubmit()
  else el.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
}

// Without a submit button the browser doesn't submit on Enter; keep that working.
const onEnter = (e) => {
  if (e.target.tagName !== 'INPUT' || e.isComposing || e.keyCode === 229) return
  e.preventDefault()
  trySubmit()
}

const submit = async () => {
  const phoneDigits = validate()
  if (!phoneDigits || loading.value) return
  loading.value = true

  // Same endpoint + shape as Forms/BookingForm.vue (the existing CRM pipeline);
  // fields this form doesn't collect (address, age, date, time; on the compact
  // form also email and ZIP) are sent empty.
  const lead = leadDetails()
  const payload = {
    personal: { firstName: lead.firstName, lastName: lead.lastName, email: form.email, phone: phoneDigits, address: '', zip: form.zip, smsConsent: true },
    appliance: { type: lead.type, brand: lead.brand, age: '', date: '', time: '' },
    issue: `PPC landing page request (${lead.appliance}).`,
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
    sent.firstName = lead.firstName
    submitted.value = true
    trackEvent('lp_form_submit', {
      form_location: props.location,
      landing_variant: props.variant,
      appliance_brand: lead.brand,
      appliance_type: lead.type,
      // For Google Ads enhanced conversions (configure the user-provided-data variable in GTM).
      enhanced_conversion_data: { ...(form.email && { email: form.email.toLowerCase() }), phone_number: `+1${phoneDigits}` },
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
