<template>
  <svg
    viewBox="0 0 160 100"
    fill="none"
    stroke="currentColor"
    stroke-width="1.25"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    :style="accent ? { '--lp-art-accent': accent } : undefined"
    v-html="art[name]"
  />
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  // Colour of the control knobs (class "k"), e.g. Wolf's red; ink when not set.
  accent: { type: String, default: '' },
})

// Line drawings of the appliances for the service cards on the brand landing
// pages (160×100). Front elevations in the house style: ink outline, white
// faces, solid ink handles; brass (#B08D57) for small details and the floor
// line; knobs in the `accent` colour.
// Markers: class "d" = lighter detail line, "h" = solid handle, "b" = brass, "k" = knob.
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

  // Pro range: grates, knobs, two ovens.
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

  // Wall oven set in cabinetry: display, knobs, window.
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
  // Built-in dishwasher under a counter: control strip, bar handle, rack.
  dishwasher:
    floor +
    '<path class="d" d="M34 31v59M126 31v59M34 41h24M102 41h24"/>' +
    '<rect class="f" x="58" y="31" width="44" height="59"/>' +
    '<rect class="f" x="30" y="26" width="100" height="5" rx="1"/>' +
    '<path d="M58 41h44M58 84h44"/>' +
    '<circle class="bf" cx="64" cy="36" r="1.3"/><circle class="bf" cx="69" cy="36" r="1.3"/><path class="d" d="M84 36h12"/>' +
    '<rect class="h" x="66" y="45.5" width="28" height="2.2" rx="1.1"/>' +
    '<path class="b" d="M68 73h24M71 73v-8M76 73v-11M80 73v-12M84 73v-11M89 73v-8"/>',

  // Front-load washer: detergent drawer, dial, door with water line.
  washer:
    floor +
    '<rect class="f" x="54" y="22" width="52" height="68" rx="2"/>' +
    '<path d="M54 35h52"/>' +
    '<rect class="d" x="58.5" y="25.8" width="13" height="5.5" rx="1"/><path class="d" d="M77 28.5h10"/>' +
    '<circle class="bf" cx="97.5" cy="28.5" r="2.7"/>' +
    '<circle cx="80" cy="62" r="18"/><circle class="d" cx="80" cy="62" r="13"/>' +
    '<path class="b" d="M69.5 64c3.5-3.2 7 3.2 10.5 0s7 3.2 10.5 0"/>',

  // Dryer: dial on the left, door with warm-air lines.
  dryer:
    floor +
    '<rect class="f" x="54" y="22" width="52" height="68" rx="2"/>' +
    '<path d="M54 35h52"/>' +
    '<circle class="bf" cx="62.5" cy="28.5" r="2.7"/>' +
    '<path class="d" d="M72 28.5h10"/><rect class="d" x="88.5" y="25.8" width="13" height="5.5" rx="1"/>' +
    '<circle cx="80" cy="62" r="18"/><circle class="d" cx="80" cy="62" r="13"/>' +
    '<path class="b" d="M74.5 70c-2.6-2.7 2.6-5.3 0-8s2.6-5.3 0-8M80 70c-2.6-2.7 2.6-5.3 0-8s2.6-5.3 0-8M85.5 70c-2.6-2.7 2.6-5.3 0-8s2.6-5.3 0-8"/>',

  // Built-in coffee system in a tall cabinet: display, spouts, two cups.
  coffee:
    floor +
    '<path class="d" d="M42 90V8h76v82M42 21h76M42 75h76"/>' +
    '<rect class="f" x="50" y="27" width="60" height="42" rx="1.5"/>' +
    '<path d="M50 37h60"/>' +
    '<rect class="d" x="70" y="29.8" width="20" height="4.5" rx="1"/>' +
    '<circle class="bf" cx="57" cy="32" r="1.4"/><circle class="bf" cx="103" cy="32" r="1.4"/>' +
    '<path class="d" d="M57 42v22M103 42v22"/>' +
    '<rect x="71.5" y="37" width="17" height="8.5" rx="1"/><path d="M76.5 45.5v3M83.5 45.5v3"/>' +
    '<path d="M71.5 53.5h7v5.5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM81.5 53.5h7v5.5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2z"/>' +
    '<path class="b" d="M67 64h26"/>',

  // French range (La Cornue Château): two ovens, brass rail and trim, row of knobs.
  chateau:
    floor +
    '<path d="M42 86v4M118 86v4"/>' +
    '<path class="d" d="M38 34v-3.5h84V34M52 30.5v-2M66 30.5v-2M94 30.5v-2M108 30.5v-2"/>' +
    '<rect class="f" x="34" y="34" width="92" height="52" rx="1.5"/>' +
    '<path d="M34 46h92"/>' +
    knobs([43, 52, 61, 70, 90, 99, 108, 117], 40, 2.1) +
    '<path class="b" d="M38 50.5h84M38 49v3M122 49v3"/>' +
    '<rect x="39" y="55" width="38" height="27" rx="1"/><rect x="83" y="55" width="38" height="27" rx="1"/>' +
    '<path class="b" d="M45 59.5h26M89 59.5h26"/>' +
    '<rect class="d" x="46" y="64.5" width="24" height="13" rx="1"/><rect class="d" x="90" y="64.5" width="24" height="13" rx="1"/>' +
    '<path class="b" d="M34 34h92"/>',

  // Classic bell-shaped hood with brass bands and a nameplate.
  hoodBell:
    '<path class="f" d="M63 13h34l23 55v9H40v-9z"/>' +
    '<path d="M40 68h80"/>' +
    '<path class="b" d="M56.7 28h46.6M48 49h64M40 77h80"/>' +
    '<rect class="b" x="70" y="55.5" width="20" height="6.5" rx="1"/>' +
    '<circle class="bf" cx="60" cy="72.5" r="1.4"/><circle class="bf" cx="100" cy="72.5" r="1.4"/>',

  // Hood insert under a cabinet, seen from the front and below: baffle filters, lights.
  ventInsert:
    '<path class="d" d="M28 22h104M40 22v15M120 22v15"/>' +
    '<path class="f" d="M40 37h80l10 30H30z"/>' +
    '<rect class="f" x="30" y="67" width="100" height="8"/>' +
    '<rect x="42.5" y="43" width="23" height="18" rx="1"/><rect x="68.5" y="43" width="23" height="18" rx="1"/><rect x="94.5" y="43" width="23" height="18" rx="1"/>' +
    '<path class="d" d="M47 46v12M51.5 46v12M56.5 46v12M61 46v12M73 46v12M77.5 46v12M82.5 46v12M87 46v12M99 46v12M103.5 46v12M108.5 46v12M113 46v12"/>' +
    '<circle class="bf" cx="37" cy="71" r="1.5"/><circle class="bf" cx="123" cy="71" r="1.5"/>',
}
</script>

<style scoped>
svg :deep(.f) { fill: #fff; }
svg :deep(.d) { stroke-opacity: 0.4; stroke-width: 1; }
svg :deep(.h) { fill: currentColor; stroke: none; }
svg :deep(.b) { stroke: #b08d57; }
svg :deep(.bf) { fill: #b08d57; stroke: none; }
svg :deep(.k) { fill: var(--lp-art-accent, currentColor); stroke: none; }
</style>
