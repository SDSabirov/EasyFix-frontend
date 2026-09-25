<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <g v-html="paths[name]" />
  </svg>
</template>

<script setup>
defineProps({ name: { type: String, required: true } })

// Line icons for the PPC landing page (24×24, stroke-based).
const paths = {
  refrigerator: '<rect x="5.5" y="2" width="13" height="20" rx="1.5"/><path d="M5.5 9.5h13M8.5 5v2.5M8.5 12v4"/>',
  freezer: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7"/><path d="m9.5 3.5 2.5 2 2.5-2M9.5 20.5l2.5-2 2.5 2M3.6 10.2l3-.9-.6-3.1M20.4 13.8l-3 .9.6 3.1M3.6 13.8l3 .9-.6 3.1M20.4 10.2l-3-.9.6-3.1"/>',
  wine: '<path d="M7.5 2h9l-.4 5.5a4.1 4.1 0 0 1-8.2 0z"/><path d="M7.7 5.5h8.6M12 11.6V21M8.5 21.5h7"/>',
  range: '<rect x="3.5" y="3" width="17" height="18" rx="1.5"/><path d="M3.5 7.5h17"/><rect x="6.5" y="10.5" width="11" height="7.5" rx="1"/><path d="M7 5.25h.01M10 5.25h.01M14 5.25h.01M17 5.25h.01M9 13h6"/>',
  oven: '<rect x="4" y="2.5" width="16" height="19" rx="1.5"/><path d="M4 7h16"/><rect x="7" y="10" width="10" height="8" rx="1"/><path d="M7.5 4.75h.01M16.5 4.75h.01M9.5 4.75h5"/>',
  cooktop: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.25" cy="8.25" r="2.5"/><circle cx="15.75" cy="8.25" r="2.5"/><circle cx="8.25" cy="15.75" r="2.5"/><circle cx="15.75" cy="15.75" r="2.5"/>',
  dishwasher: '<rect x="4" y="2.5" width="16" height="19" rx="1.5"/><path d="M4 6.5h16M7 4.5h.01M9.5 4.5h.01"/><rect x="7" y="9" width="10" height="9.5" rx="1"/><path d="M9.5 15.5h5"/>',
  icemaker: '<path d="M12 2.5 20 7v9.5L12 21l-8-4.5V7z"/><path d="m4 7 8 4.5L20 7M12 11.5V21"/>',
  hood: '<path d="M9.5 3h5v6.5l6.5 6H3l6.5-6z"/><path d="M3 15.5V18h18v-2.5M7.5 18v1.5M16.5 18v1.5"/>',
  washer: '<rect x="4" y="2.5" width="16" height="19" rx="1.5"/><path d="M4 6.5h16M7 4.5h.01M9.5 4.5h.01"/><circle cx="12" cy="13.75" r="4.75"/><circle cx="12" cy="13.75" r="2.25"/>',
  dryer: '<rect x="4" y="2.5" width="16" height="19" rx="1.5"/><path d="M4 6.5h16M7 4.5h.01M9.5 4.5h.01"/><circle cx="12" cy="13.75" r="4.75"/><path d="M10 13.25a2 2 0 0 1 3.9-.5 1.5 1.5 0 0 1-.9 2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  technician: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20.5c.6-4 3.4-6 7-6s6.4 2 7 6"/><circle cx="18.5" cy="6" r="1.5"/><path d="M18.5 7.5v2"/>',
  shield: '<path d="M12 2.5 19.5 5v6.5c0 4.5-3.2 8-7.5 10-4.3-2-7.5-5.5-7.5-10V5z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  tag: '<path d="M3 12.2V4.5A1.5 1.5 0 0 1 4.5 3h7.7l8.3 8.3a1.5 1.5 0 0 1 0 2.1l-7.1 7.1a1.5 1.5 0 0 1-2.1 0z"/><circle cx="8" cy="8" r="1.5"/>',
  phone: '<path d="M21 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.5 5.2 2 2 0 0 1 4.5 3h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.4 10.8a16 16 0 0 0 4.8 4.8l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  calendar: '<rect x="3.5" y="4.5" width="17" height="16.5" rx="2"/><path d="M3.5 9.5h17M8 2.5v4M16 2.5v4"/>',
  arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  menu: '<path d="M4 6.5h16M4 12h16M4 17.5h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
}
</script>
