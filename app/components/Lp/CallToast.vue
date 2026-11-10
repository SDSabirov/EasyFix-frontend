<template>
  <!-- Desktop call feedback: a tel: click there opens an OS prompt (or nothing) outside the page.
       The live region stays mounted (empty) so screen readers announce each new message. -->
  <div role="status" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100vw-2rem)] pointer-events-none">
    <p
      v-if="hint"
      :key="hint"
      class="rounded-2xl sm:rounded-full bg-ink text-white px-5 py-3 font-montserrat text-sm text-center shadow-xl"
    >
      Call us at <span class="font-semibold">{{ phone.display }}</span> — dial from your phone or calling app
    </p>
  </div>
</template>

<script setup>
defineProps({
  phone: { type: Object, required: true },
  // Click counter from useLpPage (0 = hidden); re-keys the message on every click.
  hint: { type: Number, default: 0 },
})
</script>
