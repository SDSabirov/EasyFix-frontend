<template>
  <div class="font-montserrat">
    <div
      class="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-6 sm:p-8 lg:p-10"
    >
      <!-- Header -->
      <div class="mb-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4"
        >
          <svg
            class="w-4 h-4 text-primary mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-primary font-semibold text-sm">Free Tool · ~30 seconds</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-primary mb-2">
          Should you repair or replace?
        </h2>
        <p class="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Enter a few details about your appliance and we'll do the cost-per-year math for you.
        </p>
      </div>

      <form @submit.prevent="onCalculate" novalidate>
        <!-- Section 1: About the item -->
        <fieldset class="mb-8">
          <legend class="mb-4">
            <span
              class="inline-flex items-center px-3 py-1.5 bg-secondary/10 rounded-full"
            >
              <svg
                class="w-4 h-4 text-secondary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span class="text-secondary font-semibold text-xs uppercase tracking-wider">About the item</span>
            </span>
          </legend>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label for="rrc-age" class="block text-sm font-medium text-gray-700 mb-1.5">
                Current age <span class="text-gray-500 font-normal">(years)</span>
              </label>
              <input
                id="rrc-age"
                v-model.number="itemAge"
                type="number"
                inputmode="numeric"
                min="0"
                step="1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-secondary/30 focus:border-secondary block w-full p-3 transition-colors"
                :class="{ 'border-tertiary focus:border-tertiary focus:ring-tertiary/30': fieldErrors.itemAge }"
              />
              <p v-if="fieldErrors.itemAge" role="alert" class="text-xs text-tertiary mt-1">
                {{ fieldErrors.itemAge }}
              </p>
            </div>

            <div>
              <label for="rrc-lifespan" class="block text-sm font-medium text-gray-700 mb-1.5">
                Expected lifespan <span class="text-gray-500 font-normal">(years)</span>
              </label>
              <input
                id="rrc-lifespan"
                v-model.number="itemLifespan"
                type="number"
                inputmode="decimal"
                min="1"
                step="1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-secondary/30 focus:border-secondary block w-full p-3 transition-colors"
                :class="{ 'border-tertiary focus:border-tertiary focus:ring-tertiary/30': fieldErrors.itemLifespan }"
              />
              <p v-if="fieldErrors.itemLifespan" role="alert" class="text-xs text-tertiary mt-1">
                {{ fieldErrors.itemLifespan }}
              </p>
            </div>

            <div>
              <label for="rrc-replace" class="block text-sm font-medium text-gray-700 mb-1.5">
                Replacement cost <span class="text-gray-500 font-normal">($)</span>
              </label>
              <input
                id="rrc-replace"
                v-model.number="replaceCost"
                type="number"
                inputmode="decimal"
                min="0"
                step="10"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-secondary/30 focus:border-secondary block w-full p-3 transition-colors"
                :class="{ 'border-tertiary focus:border-tertiary focus:ring-tertiary/30': fieldErrors.replaceCost }"
              />
              <p v-if="fieldErrors.replaceCost" role="alert" class="text-xs text-tertiary mt-1">
                {{ fieldErrors.replaceCost }}
              </p>
            </div>

            <div>
              <label for="rrc-value" class="block text-sm font-medium text-gray-700 mb-1.5">
                Current resale value <span class="text-gray-500 font-normal">($)</span>
              </label>
              <input
                id="rrc-value"
                v-model.number="currentValue"
                type="number"
                inputmode="decimal"
                min="0"
                step="10"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-secondary/30 focus:border-secondary block w-full p-3 transition-colors"
              />
            </div>
          </div>
        </fieldset>

        <!-- Section 2: Repair details -->
        <fieldset class="mb-8">
          <legend class="mb-4">
            <span
              class="inline-flex items-center px-3 py-1.5 bg-primary/10 rounded-full"
            >
              <svg
                class="w-4 h-4 text-primary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
              <span class="text-primary font-semibold text-xs uppercase tracking-wider">Repair details</span>
            </span>
          </legend>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label for="rrc-repair" class="block text-sm font-medium text-gray-700 mb-1.5">
                Repair quote <span class="text-gray-500 font-normal">($)</span>
              </label>
              <input
                id="rrc-repair"
                v-model.number="repairCost"
                type="number"
                inputmode="decimal"
                min="0"
                step="10"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-secondary/30 focus:border-secondary block w-full p-3 transition-colors"
                :class="{ 'border-tertiary focus:border-tertiary focus:ring-tertiary/30': fieldErrors.repairCost }"
              />
              <p v-if="fieldErrors.repairCost" role="alert" class="text-xs text-tertiary mt-1">
                {{ fieldErrors.repairCost }}
              </p>
            </div>

            <div>
              <label for="rrc-life" class="block text-sm font-medium text-gray-700 mb-1.5">
                Years added by repair
              </label>
              <input
                id="rrc-life"
                v-model.number="repairLife"
                type="number"
                inputmode="numeric"
                min="0"
                step="1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-secondary/30 focus:border-secondary block w-full p-3 transition-colors"
              />
            </div>

            <div>
              <label for="rrc-reliability" class="block text-sm font-medium text-gray-700 mb-1.5">
                Reliability after repair
              </label>
              <select
                id="rrc-reliability"
                v-model.number="reliability"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-secondary/30 focus:border-secondary block w-full p-3 cursor-pointer transition-colors"
              >
                <option :value="1.0">High — works like new</option>
                <option :value="0.8">Medium — occasional issues</option>
                <option :value="0.6">Low — frequent issues likely</option>
              </select>
            </div>

            <div>
              <label for="rrc-savings" class="block text-sm font-medium text-gray-700 mb-1.5">
                Annual savings if new <span class="text-gray-500 font-normal">($)</span>
              </label>
              <input
                id="rrc-savings"
                v-model.number="annualSavings"
                type="number"
                inputmode="decimal"
                min="0"
                step="10"
                title="e.g. energy efficiency gains"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-secondary/30 focus:border-secondary block w-full p-3 transition-colors"
              />
            </div>
          </div>
        </fieldset>

        <!-- Calculate Button -->
        <button
          type="submit"
          :disabled="isCalculating"
          class="group relative w-full sm:w-auto sm:min-w-[280px] mx-auto flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer overflow-hidden min-h-[52px] focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          <svg
            v-if="!isCalculating"
            class="w-5 h-5 mr-2 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <svg
            v-else
            class="w-5 h-5 mr-2 relative z-10 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="relative z-10">{{ isCalculating ? 'Calculating…' : 'Calculate Recommendation' }}</span>
        </button>
      </form>

      <!-- Results -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div
          v-if="showResult"
          ref="resultRef"
          role="region"
          aria-live="polite"
          aria-atomic="true"
          class="mt-10 space-y-6"
        >
          <!-- Verdict Card -->
          <div
            class="rounded-2xl p-6 sm:p-8 ring-1"
            :class="verdictSurfaceClass"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                :class="verdictIconBgClass"
              >
                <!-- Wrench icon: repair -->
                <svg
                  v-if="verdict.type === 'repair'"
                  class="w-6 h-6 sm:w-7 sm:h-7"
                  :class="verdictTextClass"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766m-2.587 4.254L4.5 19.5l2.5-2.5 2.587-2.587"
                  />
                </svg>
                <!-- Shopping bag: replace -->
                <svg
                  v-else-if="verdict.type === 'replace'"
                  class="w-6 h-6 sm:w-7 sm:h-7"
                  :class="verdictTextClass"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <!-- Scale: close call -->
                <svg
                  v-else
                  class="w-6 h-6 sm:w-7 sm:h-7"
                  :class="verdictTextClass"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v18m-7-7l-3-6h6l-3 6zm14 0l-3-6h6l-3 6zM4 21h16"
                  />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-xl sm:text-2xl font-bold mb-1" :class="verdictTextClass">
                  {{ verdict.headline }}
                </h3>
                <p class="text-sm sm:text-base text-gray-700">
                  {{ verdict.subline }}
                </p>
              </div>
            </div>
          </div>

          <!-- Cost-per-year bars -->
          <div class="bg-gray-50 rounded-2xl p-6 sm:p-8 ring-1 ring-gray-100">
            <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">
              Cost per year of use
            </h4>
            <div class="space-y-5">
              <div>
                <div class="flex items-baseline justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700">Repair</span>
                  <span class="text-base font-bold text-primary">${{ formatNumber(repairCPY) }}/yr</span>
                </div>
                <div class="h-2.5 rounded-full bg-white ring-1 ring-gray-200 overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700 ease-out"
                    :style="{ width: `${barWidth(repairCPY)}%` }"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex items-baseline justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700">Replace</span>
                  <span class="text-base font-bold text-secondary">${{ formatNumber(replaceCPY) }}/yr</span>
                </div>
                <div class="h-2.5 rounded-full bg-white ring-1 ring-gray-200 overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-700 ease-out"
                    :style="{ width: `${barWidth(replaceCPY)}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Metric Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-white ring-1 ring-gray-100 rounded-xl p-5 shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Rule of thumb</span>
                <span
                  class="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
                  :class="ruleOfThumb.badgeClass"
                  :aria-label="ruleOfThumb.ariaLabel"
                >
                  {{ ruleOfThumb.symbol }}
                </span>
              </div>
              <div class="text-lg font-bold text-gray-900">{{ ruleOfThumb.label }}</div>
              <p class="text-xs text-gray-500 mt-1">Repair cost vs. replacement</p>
            </div>

            <div class="bg-white ring-1 ring-gray-100 rounded-xl p-5 shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Break-even</span>
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div class="text-lg font-bold text-gray-900">{{ breakevenLabel }}</div>
              <p class="text-xs text-gray-500 mt-1">Years for new to pay back</p>
            </div>

            <div class="bg-white ring-1 ring-gray-100 rounded-xl p-5 shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">5-year diff</span>
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div class="text-lg font-bold text-gray-900">${{ formatNumber(Math.abs(diff5yr)) }}</div>
              <p class="text-xs text-gray-500 mt-1">{{ diff5yrLabel }}</p>
            </div>
          </div>

          <!-- CTAs -->
          <div class="pt-2">
            <p class="text-center text-sm text-gray-600 mb-4">
              Ready to take the next step? Our Bay Area technicians service Sub-Zero, Wolf, Viking, Thermador, and more.
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <NuxtLink
                to="/booking"
                class="group inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer min-h-[48px] focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Book a Repair
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </NuxtLink>
              <a
                href="tel:4159414144"
                class="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-white border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all duration-300 cursor-pointer min-h-[48px] focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call (415) 941-4144
              </a>
            </div>
          </div>
        </div>
      </Transition>

      <p class="text-xs text-gray-400 text-center mt-8 pt-6 border-t border-gray-100">
        Estimates are based on the values you enter. For an accurate diagnosis, book a service visit.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

const itemAge = ref(5)
const itemLifespan = ref(12)
const replaceCost = ref(1200)
const currentValue = ref(400)
const repairCost = ref(300)
const repairLife = ref(4)
const reliability = ref(0.8)
const annualSavings = ref(80)

const isCalculating = ref(false)
const showResult = ref(false)
const fieldErrors = ref({})
const resultRef = ref(null)

const safeNum = (v, fallback = 0) => {
  const n = Number(v)
  return Number.isFinite(n) ? n : fallback
}

const effectiveRepairLife = computed(() =>
  Math.max(safeNum(repairLife.value) * safeNum(reliability.value, 0.8), 0.1)
)

const repairCPY = computed(() =>
  safeNum(repairCost.value) / effectiveRepairLife.value
)

const netReplaceCost = computed(() =>
  Math.max(safeNum(replaceCost.value) - safeNum(currentValue.value), 0)
)

const replaceCPY = computed(() => {
  const lifespan = safeNum(itemLifespan.value, 1)
  return lifespan > 0 ? netReplaceCost.value / lifespan : 0
})

const ratio = computed(() => {
  if (replaceCPY.value <= 0) return 1
  return repairCPY.value / replaceCPY.value
})

const verdict = computed(() => {
  if (ratio.value < 0.8) {
    return {
      type: 'repair',
      headline: 'Repair is the better value',
      subline: `At $${formatNumber(repairCPY.value)}/yr vs $${formatNumber(replaceCPY.value)}/yr, repairing costs significantly less per year of use.`,
    }
  }
  if (ratio.value > 1.2) {
    return {
      type: 'replace',
      headline: 'Consider replacing',
      subline: `At $${formatNumber(repairCPY.value)}/yr vs $${formatNumber(replaceCPY.value)}/yr, a new appliance may offer better long-term value.`,
    }
  }
  return {
    type: 'close',
    headline: "It's a close call",
    subline: 'Both options cost roughly the same per year. Reliability, features, and your current appliance condition may tip the balance.',
  }
})

const verdictSurfaceClass = computed(() => {
  if (verdict.value.type === 'repair') return 'bg-emerald-50 ring-emerald-200'
  if (verdict.value.type === 'replace') return 'bg-secondary/5 ring-secondary/20'
  return 'bg-amber-50 ring-amber-200'
})

const verdictIconBgClass = computed(() => {
  if (verdict.value.type === 'repair') return 'bg-emerald-100'
  if (verdict.value.type === 'replace') return 'bg-secondary/15'
  return 'bg-amber-100'
})

const verdictTextClass = computed(() => {
  if (verdict.value.type === 'repair') return 'text-emerald-700'
  if (verdict.value.type === 'replace') return 'text-secondary'
  return 'text-amber-700'
})

const ruleOfThumb = computed(() => {
  const ratio = safeNum(replaceCost.value) > 0
    ? safeNum(repairCost.value) / safeNum(replaceCost.value)
    : 0
  if (ratio <= 0.5) {
    return {
      symbol: '✓',
      label: 'Under 50%',
      ariaLabel: 'Repair is under 50% of replacement cost — favors repair',
      badgeClass: 'bg-emerald-100 text-emerald-700',
    }
  }
  if (ratio <= 1.0) {
    return {
      symbol: '!',
      label: '50–100%',
      ariaLabel: 'Repair is between 50% and 100% of replacement — borderline',
      badgeClass: 'bg-amber-100 text-amber-700',
    }
  }
  return {
    symbol: '×',
    label: 'Over 100%',
    ariaLabel: 'Repair costs more than replacement — favors replace',
    badgeClass: 'bg-red-100 text-tertiary',
  }
})

const breakeven = computed(() => {
  const savings = safeNum(annualSavings.value)
  if (savings <= 0) return null
  return (netReplaceCost.value - safeNum(repairCost.value)) / savings
})

const breakevenLabel = computed(() => {
  if (breakeven.value === null) return 'N/A'
  if (breakeven.value < 0) return 'Immediate'
  return `${formatNumber(breakeven.value, 1)} yrs`
})

const diff5yr = computed(() => {
  const lifespan = safeNum(itemLifespan.value, 1)
  const r = safeNum(reliability.value, 0.8)
  const repair5 =
    safeNum(repairCost.value) +
    (5 / lifespan) * safeNum(replaceCost.value) * (1 - r) * 0.5
  const replace5 =
    (netReplaceCost.value / lifespan) * 5 - safeNum(annualSavings.value) * 5
  return replace5 - repair5
})

const diff5yrLabel = computed(() =>
  diff5yr.value >= 0 ? 'Repair saves more over 5 yrs' : 'Replace saves more over 5 yrs'
)

function barWidth(value) {
  const max = Math.max(repairCPY.value, replaceCPY.value, 1)
  return Math.min(100, Math.max(4, (value / max) * 100))
}

function formatNumber(value, decimals = 0) {
  if (!Number.isFinite(value)) return '0'
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

function validate() {
  const errors = {}
  if (!Number.isFinite(itemAge.value) || itemAge.value < 0) {
    errors.itemAge = 'Enter a valid age.'
  }
  if (!Number.isFinite(itemLifespan.value) || itemLifespan.value <= 0) {
    errors.itemLifespan = 'Lifespan must be greater than 0.'
  }
  if (!Number.isFinite(replaceCost.value) || replaceCost.value <= 0) {
    errors.replaceCost = 'Enter a replacement cost.'
  }
  if (!Number.isFinite(repairCost.value) || repairCost.value <= 0) {
    errors.repairCost = 'Enter a repair quote.'
  }
  fieldErrors.value = errors
  return Object.keys(errors).length === 0
}

async function onCalculate() {
  if (!validate()) {
    showResult.value = false
    return
  }
  const prefersReduced = typeof window !== 'undefined'
    && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  isCalculating.value = true
  showResult.value = false
  await new Promise((r) => setTimeout(r, prefersReduced ? 0 : 280))
  showResult.value = true
  isCalculating.value = false
  await nextTick()
  if (resultRef.value && typeof resultRef.value.scrollIntoView === 'function') {
    resultRef.value.scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
      block: 'start',
    })
  }
}
</script>

<style scoped>
/* Hide native number input spinners for a cleaner look */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
