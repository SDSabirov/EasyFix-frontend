<template>
  <!-- One root element, so the copy stays a single item inside flex parents. -->
  <span><template v-for="(part, i) in parts" :key="i"><span v-if="i % 2" class="whitespace-nowrap">{{ part }}</span><template v-else>{{ part }}</template></template></span>
</template>

<script setup>
// Renders copy so that hyphenated words (Sub-Zero, Same-Day, 2-year) never
// break across lines at the hyphen.
const props = defineProps({ text: { type: String, required: true } })

const parts = computed(() => props.text.split(/(\S*\w-\w\S*)/))
</script>
