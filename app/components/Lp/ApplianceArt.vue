<template>
  <svg
    viewBox="0 0 160 100"
    fill="none"
    stroke="currentColor"
    stroke-width="1.25"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="art[name]"
  />
</template>

<script setup>
defineProps({ name: { type: String, required: true } })

// Line drawings of the appliances for the service cards on the brand landing
// pages (160×100). Front elevations in the house style: ink outline, white
// faces, solid ink handles; brass (#B08D57) for small details and the floor
// line; red (#C2342D) for Wolf's signature knobs.
// Markers: class "d" = lighter detail line, "h" = solid handle, "b" = brass.
const floor = '<path class="b" d="M26 90.5h108"/>'
const louvers = (x1, x2) => `<path class="d" d="M${x1} 12.5H${x2}M${x1} 15.5H${x2}M${x1} 18.5H${x2}"/>`
const knobs = (xs, y, r = 2.3) => xs.map((x) => `<circle class="k" cx="${x}" cy="${y}" r="${r}"/>`).join('')
const burner = (x, y, r) =>
  `<circle cx="${x}" cy="${y}" r="${r}"/><circle class="d" cx="${x}" cy="${y}" r="${r * 0.36}"/>` +
  `<path class="d" d="M${x - r - 2.5} ${y}h${r * 0.5 + 2.5}M${x + r * 0.5} ${y}h${r * 0.5 + 2.5}M${x} ${y - r - 2.5}v${r * 0.5 + 2.5}M${x} ${y + r * 0.5}v${r * 0.5 + 2.5}"/>`

const art = {
  // Built-in side-by-side: top grille, freezer + refrigerator doors, tubular handles.
  refrigerator:
    floor +
    '<rect class="f" x="50" y="8" width="60" height="82" rx="1.5"/>' +
    '<path d="M50 21.5h60M76 21.5V85M50 85h60"/>' +
    louvers(54, 106) +
    '<rect class="h" x="70.6" y="35" width="2.2" height="32" rx="1.1"/><rect class="h" x="79.2" y="35" width="2.2" height="32" rx="1.1"/>',

  // Column freezer: door over two drawers.
  freezer:
    floor +
    '<rect class="f" x="59" y="8" width="42" height="82" rx="1.5"/>' +
    '<path d="M59 21.5h42M59 57h42M59 71h42M59 85h42"/>' +
    louvers(63, 97) +
    '<rect class="h" x="93.4" y="28" width="2.2" height="22" rx="1.1"/>' +
    '<rect class="h" x="69" y="61" width="22" height="2.2" rx="1.1"/><rect class="h" x="69" y="75" width="22" height="2.2" rx="1.1"/>' +
    '<path class="b" d="M75 33.5v12M69.8 36.5l10.4 6M69.8 42.5l10.4-6"/>',

  // Wine column: glass door, racks, bottle ends.
  wine:
    floor +
    '<rect class="f" x="59" y="8" width="42" height="82" rx="1.5"/>' +
    '<path d="M59 21.5h42M59 85h42"/>' +
    louvers(63, 97) +
    '<rect x="67.5" y="27" width="28" height="53" rx="1"/>' +
    [35.5, 44, 52.5, 61, 69.5]
      .map((y) => `<path class="d" d="M67.5 ${y + 3.6}h28"/>` + [72.5, 78.5, 84.5, 90.5].map((x) => `<circle class="bf" cx="${x}" cy="${y}" r="2"/>`).join(''))
      .join('') +
    '<rect class="h" x="62" y="40" width="2.2" height="27" rx="1.1"/>',

  // Undercounter ice maker between cabinets.
  icemaker:
    floor +
    '<path class="d" d="M34 43v47M126 43v47M34 52h28M98 52h28"/>' +
    '<rect class="f" x="62" y="43" width="36" height="47"/>' +
    '<rect class="f" x="30" y="38" width="100" height="5" rx="1"/>' +
    '<path d="M62 82h36"/><path class="d" d="M67 85h26M67 87.5h26"/>' +
    '<rect class="h" x="69" y="48.5" width="22" height="2.2" rx="1.1"/>' +
    '<rect class="b" x="72.5" y="59.5" width="6.5" height="6.5" rx="1.2" transform="rotate(-12 75.75 62.75)"/>' +
    '<rect class="b" x="81" y="62" width="6.5" height="6.5" rx="1.2" transform="rotate(9 84.25 65.25)"/>' +
    '<rect class="b" x="76" y="68.5" width="6.5" height="6.5" rx="1.2" transform="rotate(-4 79.25 71.75)"/>',

  // Pro range: grates, red knobs, two ovens.
  range:
    floor +
    '<path d="M44 86v4M116 86v4"/>' +
    '<path class="d" d="M43 36v-4.5h21V36M69.5 36v-4.5h21V36M96 36v-4.5h21V36M48 31.5v-2M59 31.5v-2M74.5 31.5v-2M85.5 31.5v-2M101 31.5v-2M112 31.5v-2"/>' +
    '<rect class="f" x="38" y="36" width="84" height="50" rx="1.5"/>' +
    '<path d="M38 48h84"/>' +
    knobs([47, 57.5, 68, 92, 102.5, 113], 42) +
    '<rect x="42" y="52" width="28" height="30" rx="1"/><rect x="74" y="52" width="44" height="30" rx="1"/>' +
    '<rect class="h" x="45" y="55" width="22" height="2.2" rx="1.1"/><rect class="h" x="78" y="55" width="36" height="2.2" rx="1.1"/>' +
    '<rect class="d" x="47" y="61.5" width="18" height="14" rx="1"/><rect class="d" x="82" y="61.5" width="28" height="14" rx="1"/>',

  // Wall oven set in cabinetry: display, red knobs, window.
  oven:
    floor +
    '<path class="d" d="M42 90V8h76v82M42 15.5h76M42 81h76"/>' +
    '<rect class="f" x="50" y="21" width="60" height="55" rx="1.5"/>' +
    '<path d="M50 33h60"/>' +
    '<rect class="d" x="71" y="24.5" width="18" height="5" rx="1"/>' +
    knobs([59, 101], 27) +
    '<rect class="h" x="56" y="37" width="48" height="2.2" rx="1.1"/>' +
    '<rect class="d" x="58" y="44" width="44" height="25" rx="1.5"/>',

  // Gas cooktop from above: five burners, knobs along the front.
  cooktop:
    '<rect class="f" x="34" y="13" width="92" height="74" rx="4"/>' +
    burner(55, 32, 8.5) + burner(55, 58, 8.5) + burner(80, 43, 10.5) + burner(105, 32, 8.5) + burner(105, 58, 8.5) +
    knobs([64, 72, 80, 88, 96], 78.5, 2.1),

  // Pro wall hood: chimney, canopy, filters.
  hood:
    '<rect class="f" x="66" y="12" width="28" height="35"/>' +
    '<path class="f" d="M38 68l15-21h54l15 21v11H38z"/>' +
    '<path d="M38 68h84"/>' +
    '<path class="d" d="M61 68v11M80 68v11M99 68v11M70 20h20M70 24h20"/>' +
    '<circle class="bf" cx="108" cy="73.5" r="1.6"/><circle class="bf" cx="114" cy="73.5" r="1.6"/>',
}
</script>

<style scoped>
svg :deep(.f) { fill: #fff; }
svg :deep(.d) { stroke-opacity: 0.4; stroke-width: 1; }
svg :deep(.h) { fill: currentColor; stroke: none; }
svg :deep(.b) { stroke: #b08d57; }
svg :deep(.bf) { fill: #b08d57; stroke: none; }
svg :deep(.k) { fill: #c2342d; stroke: none; }
</style>
