// Content of the brand-specific Google Ads landing pages
// (components/Lp/BrandLandingPage.vue). One export per page:
//   subzero   /ppc/sub-zero-wolf-repair      thermador  /ppc/thermador-repair
//   miele     /ppc/miele-repair              viking     /ppc/viking-repair
//   monogram  /ppc/monogram-repair           laCornue   /ppc/la-cornue-repair
// To add a brand page: add an export here and a page in pages/ppc/ that passes it
// to <LpBrandLandingPage> (see pages/ppc/miele-repair.vue).

// Brand pictures live in assets/img/lp/brands/<brand>/: hero.webp (upright appliance),
// badge.webp, cta-left.webp, cta-right.webp and one picture per service card (640×320).
// photo('miele/oven') returns the built URL, or undefined when the file does not exist
// (a service card then shows its drawing instead).
const photos = import.meta.glob('~/assets/img/lp/brands/**/*.webp', { eager: true, import: 'default' })
const photo = (name) => photos[Object.keys(photos).find((path) => path.endsWith(`/brands/${name}.webp`))]

// ---------- Shared by every brand page ----------

// Shown until /google-reviews returns the live rating and review count.
const rating = { value: '4.9', count: '118' }

// Knob colours of the appliance drawings (Lp/ApplianceArt.vue).
const WOLF_RED = '#C2342D'
const BRASS = '#B08D57'

// The four trust points; only the technicians line differs per brand.
const trustPoints = (technicians) => [
  { icon: 'calendar', title: 'Same-Day Appointments', text: 'Fast, flexible scheduling across the Bay Area' },
  { icon: 'technician', title: 'Experienced Technicians', text: technicians },
  { icon: 'shield', title: '2-Year Warranty', text: 'Genuine parts. Lasting results. Extended warranty on all repairs.' },
  { icon: 'tag', title: 'Transparent Pricing', text: 'Clear, upfront pricing with no surprises.' },
]

// FAQ block: four [question, answer] pairs, shown with these icons in this order.
// The heading is rendered as "Frequently Asked <em>Questions</em>".
const FAQ_ICONS = ['calendar', 'bolt', 'shield', 'award']
const faq = (intro, pairs) => ({
  eyebrow: 'Common Questions',
  title: 'Frequently Asked',
  titleAccent: 'Questions',
  intro,
  items: pairs.map(([q, a], i) => ({ icon: FAQ_ICONS[i], q, a })),
})

// Closing band: on desktop the brand's cta-left / cta-right photos sit at its two ends
// and fade into the ink. `dir` is the brand's folder in assets/img/lp/brands.
const cta = (brand, dir, schedule = brand) => ({
  title: `Ready to Book Your ${brand} Repair?`,
  text: 'Get expert, local service from the Easy Fix Appliance Team. Same-day appointments available.',
  schedule: `Schedule Your ${schedule} Service`,
  left: { src: photo(`${dir}/cta-left`), w: 900, h: 320 },
  right: { src: photo(`${dir}/cta-right`), w: 880, h: 370 },
})

// "$99 Diagnostic Visit" band. Its left half is a close-up of the brand's badge on an
// appliance (assets/img/lp/brands/<dir>/badge.webp, 1440×500); `focus` is the
// object-position class that keeps the badge in view, `alt` describes the picture.
const diagnostic = (text, dir, alt, focus) => ({
  image: photo(`${dir}/badge`),
  imageWidth: 1440,
  imageHeight: 500,
  imageAlt: alt,
  imageClass: focus,
  title: '$99 Diagnostic Visit',
  highlight: 'Credited toward the repair',
  text,
})

// Fields of every page:
//   key           tags leads (source "ppc-<key>") and GTM events (landing_variant)
//   seo           browser-tab title and description (the pages are noindex)
//   hero          \u00A0 in `title` is a non-breaking space: it keeps "Bay Area" (and a
//                 two-word brand name) on one line of the headline.
//                 `lead` (optional) is set in bold before `text`.
//                 `image` is an upright picture of one appliance. `imageClass` positions it:
//                 behind the text on phones, a column right of it on tablets, the backdrop
//                 of the form on small laptops; from xl up it is shown whole between the
//                 headline and the form, xl:ml-[..] being its distance from the left edge of
//                 the photo panel
//   services      cards, which are also the options of the form's "Appliance / Brand" select.
//                 `brand` + `type` go to the booking request and GTM and use the same words
//                 as the general landing pages' form ("Wine Cooler", "Hood", "GE Monogram").
//                 `art` is a drawing in Lp/ApplianceArt.vue, `accent` the colour of its knobs;
//                 add `image` (imported photo, 16:10) to show a photo instead.
//                 `columns: 3` lays six cards out three across
//   reviewsIntro  line under "What Bay Area Customers Say" (the reviews themselves are the
//                 live Google reviews)

// ============ Sub-Zero & Wolf ============
export const subzero = {
  key: 'subzero',
  seo: {
    title: 'Sub-Zero & Wolf Repair in the Bay Area | Same-Day Service',
    description:
      'Locally owned Sub-Zero and Wolf repair in the Bay Area. Experienced technicians, same-day service and genuine OEM parts. $99 diagnostic visit credited toward the repair.',
  },
  rating,

  hero: {
    eyebrow: 'Sub-Zero & Wolf Repair',
    title: 'Expert Sub-Zero & Wolf Repair in the Bay\u00A0Area',
    lead: 'Locally Owned. Certified Experts. Same-Day Service.',
    text: 'Specializing in Sub-Zero refrigerators and Wolf cooking appliances, our experienced Bay Area technicians provide expert repairs using genuine OEM parts.',
    // Upright picture of a built-in refrigerator.
    image: photo('sub-zero-wolf/hero'),
    imageWidth: 966,
    imageHeight: 1274,
    imageClass: 'object-[center_22%] md:object-[center_35%] lg:max-xl:object-top xl:ml-[9%]',
  },

  trustPoints: trustPoints('Skilled in Sub-Zero & Wolf repair and diagnostics'),

  services: {
    title: 'Same-Day Sub-Zero and Wolf Repair Services',
    items: [
      { label: 'Sub-Zero Refrigerators', art: 'refrigerator', brand: 'Sub-Zero', type: 'Refrigerator' },
      { label: 'Sub-Zero Freezers', art: 'freezer', brand: 'Sub-Zero', type: 'Freezer' },
      { label: 'Sub-Zero Wine Storage', art: 'wine', brand: 'Sub-Zero', type: 'Wine Cooler' },
      { label: 'Sub-Zero Ice Makers', art: 'icemaker', brand: 'Sub-Zero', type: 'Ice Maker' },
      { label: 'Wolf Ranges', art: 'range', accent: WOLF_RED, brand: 'Wolf', type: 'Range' },
      { label: 'Wolf Ovens', art: 'oven', accent: WOLF_RED, brand: 'Wolf', type: 'Oven' },
      { label: 'Wolf Cooktops', art: 'cooktop', accent: WOLF_RED, brand: 'Wolf', type: 'Cooktop' },
      { label: 'Wolf Ventilation', art: 'hood', brand: 'Wolf', type: 'Hood' },
    ],
  },

  diagnostic: diagnostic(
    'Expert diagnostic and troubleshooting for your appliance issues.',
    'sub-zero-wolf', 'Sub-Zero and Wolf badge on an appliance', 'object-[60%_center]',
  ),

  reviewsIntro: 'Trusted by homeowners across the Bay Area for expert service and lasting results.',

  faq: faq('Get answers to common questions about Sub-Zero and Wolf appliance repairs in the Bay Area:', [
    [
      'How long do Sub-Zero appliances typically last?',
      'Sub-Zero appliances are built to last 20+ years with proper maintenance. Regular service every 12–18 months can extend their lifespan even further.',
    ],
    [
      'Do you provide same-day Wolf range repairs?',
      'Yes, we offer same-day emergency service for Wolf appliances throughout the Bay Area, including San Mateo, Palo Alto, and San Francisco.',
    ],
    [
      'Are your technicians factory-certified?',
      'All our technicians are factory-trained and certified by Sub-Zero and Wolf, ensuring expert knowledge of these premium appliance brands.',
    ],
    [
      'What warranty do you provide on repairs?',
      'We provide a 2-year warranty on all parts and labor for Sub-Zero and Wolf repairs, giving you peace of mind and protection for your investment.',
    ],
  ]),

  cta: cta('Sub-Zero & Wolf', 'sub-zero-wolf', 'Sub-Zero'),
}

// ============ Miele ============
export const miele = {
  key: 'miele',
  seo: {
    title: 'Miele Appliance Repair in the Bay Area | Same-Day Service',
    description:
      'Locally owned Miele appliance repair in the Bay Area. Experienced technicians, same-day service and genuine OEM parts. $99 diagnostic visit credited toward the repair.',
  },
  rating,

  hero: {
    eyebrow: 'Miele Appliance Repair',
    title: 'Expert Miele Repair in the Bay\u00A0Area',
    text: 'Locally owned, with experienced technicians, providing same-day service and genuine OEM parts for Miele appliances. Trusted, professional Miele repair throughout the Bay Area.',
    // Upright picture of a built-in oven.
    image: photo('miele/hero'),
    imageWidth: 1044,
    imageHeight: 1254,
    imageClass: 'object-[center_28%] md:object-[center_40%] lg:max-xl:object-top xl:ml-[9%]',
  },

  trustPoints: trustPoints('Skilled in Miele appliance repair and diagnostics'),

  services: {
    title: 'Miele Appliance Repair Services',
    items: [
      { label: 'Miele Dishwashers', image: photo('miele/dishwasher'), art: 'dishwasher', brand: 'Miele', type: 'Dishwasher' },
      { label: 'Miele Washers', image: photo('miele/washer'), art: 'washer', brand: 'Miele', type: 'Washer' },
      { label: 'Miele Dryers', image: photo('miele/dryer'), art: 'dryer', brand: 'Miele', type: 'Dryer' },
      { label: 'Miele Ovens', image: photo('miele/oven'), art: 'oven', brand: 'Miele', type: 'Oven' },
      { label: 'Miele Cooktops', image: photo('miele/cooktop'), art: 'cooktop', brand: 'Miele', type: 'Cooktop' },
      { label: 'Miele Range Hoods', image: photo('miele/range-hood'), art: 'hood', brand: 'Miele', type: 'Hood' },
      { label: 'Miele Coffee Systems', image: photo('miele/coffee-system'), art: 'coffee', brand: 'Miele', type: 'Coffee System' },
      { label: 'Miele Refrigerators', image: photo('miele/refrigerator'), art: 'refrigerator', brand: 'Miele', type: 'Refrigerator' },
    ],
  },

  diagnostic: diagnostic(
    'Expert diagnostic and troubleshooting for your Miele appliance issues.',
    'miele', 'Miele logo on a stainless steel appliance', 'object-[62%_center]',
  ),

  reviewsIntro: 'Trusted by homeowners across the Bay Area for expert Miele appliance repairs.',

  faq: faq('Get answers to common questions about Miele appliance repairs in the Bay Area:', [
    [
      'Do you offer same-day Miele repair service?',
      'Yes. We offer same-day Miele repair service across the Bay Area, including San Francisco, San Mateo, Palo Alto, and surrounding cities, based on availability.',
    ],
    [
      'Do you use genuine Miele parts?',
      'Yes. We use genuine Miele OEM parts to ensure the best performance, reliability, and longevity for your appliance.',
    ],
    [
      'Are your technicians experienced with Miele appliances?',
      'Absolutely. Our technicians are experienced and factory-trained on Miele appliances, with in-depth knowledge of Miele’s premium engineering and diagnostic systems.',
    ],
    [
      'What warranty do you provide on Miele repairs?',
      'We provide a 2-year warranty on all Miele repairs, including parts and labor, giving you peace of mind and long-term protection for your investment.',
    ],
  ]),

  cta: cta('Miele', 'miele'),
}

// ============ Thermador ============
export const thermador = {
  key: 'thermador',
  seo: {
    title: 'Thermador Appliance Repair in the Bay Area | Same-Day Service',
    description:
      'Locally owned Thermador appliance repair in the Bay Area. Experienced technicians, same-day service and genuine OEM parts. $99 diagnostic visit credited toward the repair.',
  },
  rating,

  hero: {
    eyebrow: 'Thermador Appliance Repair',
    title: 'Expert Thermador Repair in the Bay\u00A0Area',
    text: 'Locally owned and trusted in the Bay Area, our experienced technicians specialize in Thermador appliance repair. We offer same-day service and use genuine OEM parts for Thermador appliances.',
    // Upright picture of a built-in refrigerator.
    image: photo('thermador/hero'),
    imageWidth: 1044,
    imageHeight: 1254,
    imageClass: 'object-[center_22%] md:object-[center_35%] lg:max-xl:object-top xl:ml-[13%]',
  },

  trustPoints: trustPoints('Skilled in Thermador repair with years of hands-on experience'),

  services: {
    title: 'Thermador Appliance Repair Services',
    items: [
      { label: 'Thermador Refrigerators', image: photo('thermador/refrigerator'), art: 'refrigerator', brand: 'Thermador', type: 'Refrigerator' },
      { label: 'Thermador Ranges', image: photo('thermador/range'), art: 'range', brand: 'Thermador', type: 'Range' },
      { label: 'Thermador Ovens', image: photo('thermador/oven'), art: 'oven', brand: 'Thermador', type: 'Oven' },
      { label: 'Thermador Cooktops', image: photo('thermador/cooktop'), art: 'cooktop', brand: 'Thermador', type: 'Cooktop' },
      { label: 'Thermador Dishwashers', image: photo('thermador/dishwasher'), art: 'dishwasher', brand: 'Thermador', type: 'Dishwasher' },
      { label: 'Thermador Range Hoods', image: photo('thermador/range-hood'), art: 'hood', brand: 'Thermador', type: 'Hood' },
      { label: 'Thermador Freezers', image: photo('thermador/freezer'), art: 'freezer', brand: 'Thermador', type: 'Freezer' },
      { label: 'Thermador Wine Columns', image: photo('thermador/wine-column'), art: 'wine', brand: 'Thermador', type: 'Wine Cooler' },
    ],
  },

  diagnostic: diagnostic(
    'Expert diagnostics and troubleshooting for your Thermador appliance issues.',
    'thermador', 'Thermador logo on a stainless steel appliance', 'object-[58%_center]',
  ),

  reviewsIntro: 'Trusted by homeowners across the Bay Area for expert Thermador appliance repair.',

  faq: faq('Get answers to common questions about Thermador appliance repairs in the Bay Area:', [
    [
      'Do you offer same-day Thermador repair service?',
      'Yes. We offer same-day service for most Thermador appliance repairs across the Bay Area, with flexible scheduling to fit your needs.',
    ],
    [
      'Do you use genuine Thermador parts?',
      'Yes. We use genuine OEM Thermador parts to ensure the best performance, reliability, and long-term results for your appliance.',
    ],
    [
      'Which Thermador appliances do you repair?',
      'We repair all major Thermador appliances, including refrigerators, ranges, ovens, cooktops, dishwashers, range hoods, freezers, and wine columns.',
    ],
    [
      'What warranty do you provide on Thermador repairs?',
      'We provide a 2-year warranty on all Thermador repairs, including parts and labor, giving you peace of mind and long-lasting value.',
    ],
  ]),

  cta: cta('Thermador', 'thermador'),
}

// ============ Viking ============
export const viking = {
  key: 'viking',
  seo: {
    title: 'Viking Appliance Repair in the Bay Area | Same-Day Service',
    description:
      'Locally owned Viking appliance repair in the Bay Area. Experienced technicians, same-day service and genuine OEM parts. $99 diagnostic visit credited toward the repair.',
  },
  rating,

  hero: {
    eyebrow: 'Viking Appliance Repair',
    title: 'Expert Viking Repair in the Bay\u00A0Area',
    text: 'Locally owned and operated, with experienced technicians and same-day service. We specialize in Viking appliance repair and use only genuine OEM parts for lasting, factory-quality results.',
    // Upright picture of a built-in refrigerator.
    image: photo('viking/hero'),
    imageWidth: 1044,
    imageHeight: 1254,
    imageClass: 'object-[center_22%] md:object-[center_35%] lg:max-xl:object-top xl:ml-[9%]',
  },

  trustPoints: trustPoints('Skilled in Viking appliance repair and diagnostics'),

  services: {
    title: 'Viking Appliance Repair Services',
    items: [
      { label: 'Viking Ranges', image: photo('viking/range'), art: 'range', brand: 'Viking', type: 'Range' },
      { label: 'Viking Ovens', image: photo('viking/oven'), art: 'oven', brand: 'Viking', type: 'Oven' },
      { label: 'Viking Cooktops', image: photo('viking/cooktop'), art: 'cooktop', brand: 'Viking', type: 'Cooktop' },
      { label: 'Viking Refrigerators', image: photo('viking/refrigerator'), art: 'refrigerator', brand: 'Viking', type: 'Refrigerator' },
      { label: 'Viking Ice Makers', image: photo('viking/ice-maker'), art: 'icemaker', brand: 'Viking', type: 'Ice Maker' },
      { label: 'Viking Ventilation', image: photo('viking/ventilation'), art: 'hood', brand: 'Viking', type: 'Hood' },
      { label: 'Viking Dishwashers', image: photo('viking/dishwasher'), art: 'dishwasher', brand: 'Viking', type: 'Dishwasher' },
      { label: 'Viking Wine Cellars', image: photo('viking/wine-cellar'), art: 'wine', brand: 'Viking', type: 'Wine Cooler' },
    ],
  },

  diagnostic: diagnostic(
    'Expert diagnostic and troubleshooting for your Viking appliances.',
    'viking', 'Viking badge on a stainless steel appliance', 'object-[55%_center]',
  ),

  reviewsIntro: 'Trusted by homeowners across the Bay Area for expert Viking repair and lasting results.',

  faq: faq('Get answers to common questions about Viking appliance repairs in the Bay Area.', [
    [
      'Do you offer same-day Viking repair service?',
      'Yes. We offer same-day service for most Viking appliance repairs across the Bay Area, depending on availability.',
    ],
    [
      'Do you use genuine Viking parts?',
      'Yes. We use only genuine Viking OEM parts to ensure proper performance, reliability, and long-term durability.',
    ],
    [
      'Which Viking appliances do you repair?',
      'We repair and service all major Viking appliances, including ranges, ovens, cooktops, refrigerators, ice makers, ventilation hoods, dishwashers, and wine cellars.',
    ],
    [
      'What warranty do you provide on Viking repairs?',
      'We provide a 2-year warranty on all parts and labor for Viking repairs, giving you peace of mind and long-lasting results.',
    ],
  ]),

  cta: cta('Viking', 'viking'),
}

// ============ GE Monogram ============
export const monogram = {
  key: 'monogram',
  seo: {
    title: 'Monogram Appliance Repair in the Bay Area | Same-Day Service',
    description:
      'Locally owned GE Monogram appliance repair in the Bay Area. Experienced technicians, same-day service and genuine OEM parts. $99 diagnostic visit credited toward the repair.',
  },
  rating,

  hero: {
    eyebrow: 'Monogram Appliance Repair',
    title: 'Expert Monogram Repair in the Bay\u00A0Area',
    text: 'Locally owned, with experienced technicians who specialize in Monogram appliances. Enjoy same-day service and repairs done right with genuine OEM parts for Monogram appliances.',
    // Upright picture of a built-in refrigerator.
    image: photo('monogram/hero'),
    imageWidth: 1044,
    imageHeight: 1254,
    imageClass: 'object-[center_22%] md:object-[center_35%] lg:max-xl:object-top xl:ml-[9%]',
  },

  trustPoints: trustPoints('Skilled in Monogram repair and diagnostics'),

  services: {
    title: 'Monogram Appliance Repair Services',
    items: [
      { label: 'Monogram Refrigerators', image: photo('monogram/refrigerator'), art: 'refrigerator', brand: 'GE Monogram', type: 'Refrigerator' },
      { label: 'Monogram Ranges', image: photo('monogram/range'), art: 'range', brand: 'GE Monogram', type: 'Range' },
      { label: 'Monogram Ovens', image: photo('monogram/oven'), art: 'oven', brand: 'GE Monogram', type: 'Oven' },
      { label: 'Monogram Cooktops', image: photo('monogram/cooktop'), art: 'cooktop', brand: 'GE Monogram', type: 'Cooktop' },
      { label: 'Monogram Dishwashers', image: photo('monogram/dishwasher'), art: 'dishwasher', brand: 'GE Monogram', type: 'Dishwasher' },
      { label: 'Monogram Ventilation', image: photo('monogram/ventilation'), art: 'hood', brand: 'GE Monogram', type: 'Hood' },
      { label: 'Monogram Wine Reserve', image: photo('monogram/wine-reserve'), art: 'wine', brand: 'GE Monogram', type: 'Wine Cooler' },
      { label: 'Monogram Ice Makers', image: photo('monogram/ice-maker'), art: 'icemaker', brand: 'GE Monogram', type: 'Ice Maker' },
    ],
  },

  diagnostic: diagnostic(
    'Expert diagnostic and troubleshooting for your Monogram appliance issues.',
    'monogram', 'Monogram wordmark on a stainless steel appliance', 'object-[55%_center]',
  ),

  reviewsIntro: 'Trusted by homeowners across the Bay Area for expert Monogram appliance repairs.',

  faq: faq('Get answers to common questions about Monogram appliance repairs in the Bay Area:', [
    [
      'Do you offer same-day Monogram repair service?',
      'Yes. We offer same-day Monogram repair service throughout the Bay Area, subject to availability, to get your appliance back up and running quickly.',
    ],
    [
      'Do you use genuine Monogram parts?',
      'Yes. We use genuine Monogram OEM parts to ensure proper performance, reliability, and longevity for your repair.',
    ],
    [
      'Which Monogram appliances do you repair?',
      'We repair all Monogram appliances, including refrigerators, ranges, ovens, cooktops, dishwashers, ventilation systems, wine reserves, and ice makers.',
    ],
    [
      'What warranty do you provide on Monogram repairs?',
      'We provide a 2-year warranty on all Monogram repairs, including parts and labor, for your peace of mind and long-term confidence in the repair.',
    ],
  ]),

  cta: cta('Monogram', 'monogram'),
}

// ============ La Cornue ============
export const laCornue = {
  key: 'la-cornue',
  seo: {
    title: 'La Cornue Appliance Repair in the Bay Area | Same-Day Service',
    description:
      'Locally owned La Cornue repair in the Bay Area: Château and CornuFé ranges, ovens, cooktops and hoods. Same-day service and genuine OEM parts. $99 diagnostic visit credited toward the repair.',
  },
  rating,

  hero: {
    eyebrow: 'La Cornue Appliance Repair',
    title: 'Expert La\u00A0Cornue Repair in the Bay\u00A0Area',
    text: 'Locally owned, with experienced technicians who specialize in La Cornue appliances. We provide same-day service and use genuine OEM parts for La Cornue ranges, ovens, cooktops, range hoods, and ventilation systems.',
    // Upright picture of a range and hood.
    image: photo('la-cornue/hero'),
    imageWidth: 1044,
    imageHeight: 1254,
    imageClass: 'object-[center_70%] md:object-[center_75%] lg:max-xl:object-top xl:ml-[9%]',
  },

  trustPoints: trustPoints('Skilled, factory-level expertise with La Cornue appliances'),

  services: {
    title: 'La Cornue Appliance Repair Services',
    columns: 3,
    items: [
      { label: 'La Cornue Château Ranges', image: photo('la-cornue/chateau-range'), art: 'chateau', accent: BRASS, brand: 'La Cornue', type: 'Range' },
      { label: 'La Cornue CornuFé Ranges', image: photo('la-cornue/cornufe-range'), art: 'range', accent: BRASS, brand: 'La Cornue', type: 'Range' },
      { label: 'La Cornue Ovens', image: photo('la-cornue/oven'), art: 'oven', accent: BRASS, brand: 'La Cornue', type: 'Oven' },
      { label: 'La Cornue Cooktops', image: photo('la-cornue/cooktop'), art: 'cooktop', accent: BRASS, brand: 'La Cornue', type: 'Cooktop' },
      { label: 'La Cornue Range Hoods', image: photo('la-cornue/range-hood'), art: 'hoodBell', brand: 'La Cornue', type: 'Hood' },
      { label: 'La Cornue Ventilation', image: photo('la-cornue/ventilation'), art: 'ventInsert', brand: 'La Cornue', type: 'Hood' },
    ],
  },

  diagnostic: diagnostic(
    'Expert diagnostic and troubleshooting for your La Cornue appliance issues.',
    'la-cornue', 'La Cornue nameplate on a range', 'object-[62%_center]',
  ),

  reviewsIntro: 'Trusted by homeowners across the Bay Area for expert La Cornue appliance repairs.',

  faq: faq('Get answers to common questions about La Cornue appliance repairs in the Bay Area:', [
    [
      'Do you repair La Cornue ranges in the Bay Area?',
      'Yes. We specialize in the repair and service of all La Cornue ranges, including the Château and CornuFé collections, throughout the Bay Area.',
    ],
    [
      'Do you use genuine La Cornue parts?',
      'Yes. We use genuine OEM La Cornue parts to ensure performance, reliability, and long-term durability.',
    ],
    [
      'Are your technicians experienced with La Cornue appliances?',
      'Yes. Our technicians have extensive, hands-on experience servicing and repairing La Cornue appliances, including ranges, ovens, cooktops, range hoods, and ventilation systems.',
    ],
    [
      'What warranty do you provide on La Cornue repairs?',
      'We provide a 2-year warranty on all parts and labor for La Cornue repairs, giving you lasting peace of mind and protection for your investment.',
    ],
  ]),

  cta: cta('La Cornue', 'la-cornue'),
}
