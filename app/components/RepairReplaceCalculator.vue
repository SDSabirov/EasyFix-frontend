<template>
  <div class="font-montserrat">
    <div
      class="bg-white rounded-[2rem] border border-primary/10 shadow-xl shadow-ink/5 p-6 sm:p-8 lg:p-10"
    >
      <!-- Header -->
      <div class="mb-8 text-center">
        <span
          class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-cream px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
          Free Tool &middot; ~30 Seconds
        </span>
        <h2 class="font-montserrat font-bold tracking-[-0.02em] text-2xl sm:text-3xl text-primary leading-[1.1] mb-3">
          Should you repair or
          <em class="font-display font-semibold italic text-brass-dark">replace?</em>
        </h2>
        <p class="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Enter a few details about your appliance and we'll do the cost-per-year math for you.
        </p>
      </div>

      <form @submit.prevent="onCalculate" novalidate>
        <!-- Section 1: About the item -->
        <fieldset class="mb-8">
          <legend class="mb-5">
            <span class="inline-flex items-center gap-3">
              <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
              <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">About the item</span>
            </span>
          </legend>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label for="rrc-age" class="block text-sm font-medium text-primary mb-1.5">
                Current age <span class="text-gray-400 font-normal">(years)</span>
              </label>
              <input
                id="rrc-age"
                v-model.number="itemAge"
                type="number"
                inputmode="numeric"
                min="0"
                step="1"
                class="bg-cream/60 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 transition-colors"
                :class="{ 'border-tertiary focus:border-tertiary focus:ring-tertiary/30': fieldErrors.itemAge }"
              />
              <p v-if="fieldErrors.itemAge" role="alert" class="text-xs text-tertiary mt-1">
                {{ fieldErrors.itemAge }}
              </p>
            </div>

            <div>
              <label for="rrc-lifespan" class="block text-sm font-medium text-primary mb-1.5">
                Expected lifespan <span class="text-gray-400 font-normal">(years)</span>
              </label>
              <input
                id="rrc-lifespan"
                v-model.number="itemLifespan"
                type="number"
                inputmode="decimal"
                min="1"
                step="1"
                class="bg-cream/60 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 transition-colors"
                :class="{ 'border-tertiary focus:border-tertiary focus:ring-tertiary/30': fieldErrors.itemLifespan }"
              />
              <p v-if="fieldErrors.itemLifespan" role="alert" class="text-xs text-tertiary mt-1">
                {{ fieldErrors.itemLifespan }}
              </p>
            </div>

            <div>
              <label for="rrc-replace" class="block text-sm font-medium text-primary mb-1.5">
                Replacement cost <span class="text-gray-400 font-normal">($)</span>
              </label>
              <input
                id="rrc-replace"
                v-model.number="replaceCost"
                type="number"
                inputmode="decimal"
                min="0"
                step="10"
                class="bg-cream/60 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 transition-colors"
                :class="{ 'border-tertiary focus:border-tertiary focus:ring-tertiary/30': fieldErrors.replaceCost }"
              />
              <p v-if="fieldErrors.replaceCost" role="alert" class="text-xs text-tertiary mt-1">
                {{ fieldErrors.replaceCost }}
              </p>
            </div>

            <div>
              <label for="rrc-value" class="block text-sm font-medium text-primary mb-1.5">
                Current resale value <span class="text-gray-400 font-normal">($)</span>
              </label>
              <input
                id="rrc-value"
                v-model.number="currentValue"
                type="number"
                inputmode="decimal"
                min="0"
                step="10"
                class="bg-cream/60 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 transition-colors"
              />
            </div>
          </div>
        </fieldset>

        <!-- Section 2: Repair details -->
        <fieldset class="mb-8">
          <legend class="mb-5">
            <span class="inline-flex items-center gap-3">
              <span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>
              <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">Repair details</span>
            </span>
          </legend>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label for="rrc-repair" class="block text-sm font-medium text-primary mb-1.5">
                Repair quote <span class="text-gray-400 font-normal">($)</span>
              </label>
              <input
                id="rrc-repair"
                v-model.number="repairCost"
                type="number"
                inputmode="decimal"
                min="0"
                step="10"
                class="bg-cream/60 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 transition-colors"
                :class="{ 'border-tertiary focus:border-tertiary focus:ring-tertiary/30': fieldErrors.repairCost }"
              />
              <p v-if="fieldErrors.repairCost" role="alert" class="text-xs text-tertiary mt-1">
                {{ fieldErrors.repairCost }}
              </p>
            </div>

            <div>
              <label for="rrc-life" class="block text-sm font-medium text-primary mb-1.5">
                Years added by repair
              </label>
              <input
                id="rrc-life"
                v-model.number="repairLife"
                type="number"
                inputmode="numeric"
                min="0"
                step="1"
                class="bg-cream/60 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 transition-colors"
              />
            </div>

            <div>
              <label for="rrc-reliability" class="block text-sm font-medium text-primary mb-1.5">
                Reliability after repair
              </label>
              <select
                id="rrc-reliability"
                v-model.number="reliability"
                class="bg-cream/60 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 cursor-pointer transition-colors"
              >
                <option :value="1.0">High — works like new</option>
                <option :value="0.8">Medium — occasional issues</option>
                <option :value="0.6">Low — frequent issues likely</option>
              </select>
            </div>

            <div>
              <label for="rrc-savings" class="block text-sm font-medium text-primary mb-1.5">
                Annual savings if new <span class="text-gray-400 font-normal">($)</span>
              </label>
              <input
                id="rrc-savings"
                v-model.number="annualSavings"
                type="number"
                inputmode="decimal"
                min="0"
                step="10"
                title="e.g. energy efficiency gains"
                class="bg-cream/60 border border-primary/15 text-primary text-sm rounded-2xl focus:ring-2 focus:ring-brass/30 focus:border-brass focus:outline-none block w-full p-3.5 transition-colors"
              />
            </div>
          </div>
        </fieldset>

        <!-- Calculate Button -->
        <button
          type="submit"
          :disabled="isCalculating"
          class="w-full sm:w-auto sm:min-w-[280px] mx-auto flex items-center justify-center min-h-[54px] px-9 py-4 rounded-full bg-ink text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:scale-[1.03] active:scale-100 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
        >
          <svg
            v-if="isCalculating"
            class="w-5 h-5 mr-3 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{{ isCalculating ? 'Calculating…' : 'Calculate Recommendation' }}</span>
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
          class="mt-10 space-y-5"
        >
          <!-- Verdict Card -->
          <div
            class="rounded-[1.5rem] p-6 sm:p-8 border bg-cream"
            :class="verdictSurfaceClass"
          >
            <div class="flex items-start gap-4 sm:gap-5">
              <div
                class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
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
                    stroke-width="1.5"
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
                    stroke-width="1.5"
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
                    stroke-width="1.5"
                    d="M12 3v18m-7-7l-3-6h6l-3 6zm14 0l-3-6h6l-3 6zM4 21h16"
                  />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-display font-semibold text-2xl sm:text-3xl mb-1" :class="verdictTextClass">
                  {{ verdict.headline }}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {{ verdict.subline }}
                </p>
              </div>
            </div>
          </div>

          <!-- Cost-per-year bars -->
          <div class="bg-cream border border-primary/10 rounded-[1.5rem] p-6 sm:p-8">
            <h4 class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500 mb-6">
              Cost per year of use
            </h4>
            <div class="space-y-5">
              <div>
                <div class="flex items-baseline justify-between mb-2">
                  <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Repair</span>
                  <span class="font-display font-semibold text-lg text-primary">${{ formatNumber(repairCPY) }}/yr</span>
                </div>
                <div class="h-1 bg-primary/10 overflow-hidden">
                  <div
                    class="h-full bg-primary transition-all duration-700 ease-out"
                    :style="{ width: `${barWidth(repairCPY)}%` }"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex items-baseline justify-between mb-2">
                  <span class="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Replace</span>
                  <span class="font-display font-semibold text-lg text-brass-dark">${{ formatNumber(replaceCPY) }}/yr</span>
                </div>
                <div class="h-1 bg-primary/10 overflow-hidden">
                  <div
                    class="h-full bg-brass transition-all duration-700 ease-out"
                    :style="{ width: `${barWidth(replaceCPY)}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Metric Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-white border border-primary/10 rounded-[1.5rem] p-5">
              <div class="flex items-center justify-between mb-2">
                <span class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">Rule of thumb</span>
                <span
                  class="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
                  :class="ruleOfThumb.badgeClass"
                  :aria-label="ruleOfThumb.ariaLabel"
                >
                  {{ ruleOfThumb.symbol }}
                </span>
              </div>
              <div class="font-display font-semibold text-2xl text-primary">{{ ruleOfThumb.label }}</div>
              <p class="text-xs text-gray-500 mt-1">Repair cost vs. replacement</p>
            </div>

            <div class="bg-white border border-primary/10 rounded-[1.5rem] p-5">
              <div class="flex items-center justify-between mb-2">
                <span class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">Break-even</span>
                <svg class="w-5 h-5 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div class="font-display font-semibold text-2xl text-primary">{{ breakevenLabel }}</div>
              <p class="text-xs text-gray-500 mt-1">Years for new to pay back</p>
            </div>

            <div class="bg-white border border-primary/10 rounded-[1.5rem] p-5">
              <div class="flex items-center justify-between mb-2">
                <span class="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">5-year diff</span>
                <svg class="w-5 h-5 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div class="font-display font-semibold text-2xl text-primary">${{ formatNumber(Math.abs(diff5yr)) }}</div>
              <p class="text-xs text-gray-500 mt-1">{{ diff5yrLabel }}</p>
            </div>
          </div>

          <!-- CTAs -->
          <div class="pt-2">
            <p class="text-center text-sm text-gray-600 mb-5">
              Ready to take the next step? Our Bay Area technicians service Sub-Zero, Wolf, Viking, Thermador, and more.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink
                to="/booking"
                class="group inline-flex items-center justify-center gap-3 min-h-[52px] px-9 py-4 rounded-full bg-ink text-white font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-brass hover:scale-[1.03] cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
              >
                Book a Repair
                <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </NuxtLink>
              <a
                href="tel:4159414144"
                class="inline-flex items-center justify-center min-h-[52px] px-9 py-4 rounded-full border border-ink/20 text-ink font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-brass hover:text-brass-dark hover:scale-[1.03] cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
              >
                Call (415) 941-4144
              </a>
            </div>
          </div>
        </div>
      </Transition>

      <p class="text-xs text-gray-400 text-center mt-8 pt-6 border-t border-primary/10">
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
  if (verdict.value.type === 'repair') return 'border-brass/40'
  if (verdict.value.type === 'replace') return 'border-ink/30'
  return 'border-primary/15'
})

const verdictIconBgClass = computed(() => {
  if (verdict.value.type === 'repair') return 'bg-brass/15'
  if (verdict.value.type === 'replace') return 'bg-ink/10'
  return 'bg-primary/10'
})

const verdictTextClass = computed(() => {
  if (verdict.value.type === 'repair') return 'text-brass-dark'
  if (verdict.value.type === 'replace') return 'text-ink'
  return 'text-primary'
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
      badgeClass: 'bg-brass/15 text-brass-dark',
    }
  }
  if (ratio <= 1.0) {
    return {
      symbol: '!',
      label: '50–100%',
      ariaLabel: 'Repair is between 50% and 100% of replacement — borderline',
      badgeClass: 'bg-primary/10 text-primary',
    }
  }
  return {
    symbol: '×',
    label: 'Over 100%',
    ariaLabel: 'Repair costs more than replacement — favors replace',
    badgeClass: 'bg-tertiary/10 text-tertiary',
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
