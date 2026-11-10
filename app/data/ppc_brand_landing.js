// Content of the brand-specific Google Ads landing pages
// (components/Lp/BrandLandingPage.vue). One export per page: /ppc/subzero.
// To add a brand page: add an export here and a page in pages/ppc/ that
// passes it to <LpBrandLandingPage>.
import subzeroHero from '~/assets/img/promotions/subzero-hero.webp'
import subzeroWolfKitchen from '~/assets/img/subzerowolfappliance.webp'
import kitchenBright from '~/assets/img/kitchenBright.webp'
import subzeroLogo from '~/assets/img/lp/subzero.webp'
import wolfLogo from '~/assets/img/lp/wolf.webp'

export const subzero = {
  // Tags leads (source "ppc-subzero") and GTM events (landing_variant).
  key: 'subzero',

  // Shown until /google-reviews returns the live rating and review count.
  rating: { value: '4.9', count: '118' },

  hero: {
    eyebrow: 'Sub-Zero & Wolf Repair',
    title: 'Expert Sub-Zero & Wolf Repair in the Bay Area',
    lead: 'Locally Owned. Certified Experts. Same-Day Service.',
    text: 'Specializing in Sub-Zero refrigerators and Wolf cooking appliances, our experienced Bay Area technicians provide expert repairs using genuine OEM parts.',
    // 1440×825 photo with the refrigerator left of centre. `imageClass` keeps it in view:
    // behind the right half of the text on phones, between the headline and the form on desktop.
    image: subzeroHero,
    imageWidth: 1440,
    imageHeight: 825,
    imageClass: 'object-[12%_center] lg:object-[22%_center]',
  },

  trustPoints: [
    { icon: 'calendar', title: 'Same-Day Appointments', text: 'Fast, flexible scheduling across the Bay Area' },
    { icon: 'technician', title: 'Experienced Technicians', text: 'Skilled in Sub-Zero & Wolf repair and diagnostics' },
    { icon: 'shield', title: '2-Year Warranty', text: 'Genuine parts. Lasting results. Extended warranty on all repairs.' },
    { icon: 'tag', title: 'Transparent Pricing', text: 'Clear, upfront pricing with no surprises.' },
  ],

  // Service cards, which are also the options of the form's "Appliance / Brand" select
  // (brand + type go to the booking request). `art` is a drawing in Lp/ApplianceArt.vue;
  // add `image` (imported photo, 16:10) to show a photo instead.
  services: {
    title: 'Same-Day Sub-Zero and Wolf Repair Services',
    items: [
      { label: 'Sub-Zero Refrigerators', art: 'refrigerator', brand: 'Sub-Zero', type: 'Refrigerator' },
      { label: 'Sub-Zero Freezers', art: 'freezer', brand: 'Sub-Zero', type: 'Freezer' },
      { label: 'Sub-Zero Wine Storage', art: 'wine', brand: 'Sub-Zero', type: 'Wine Storage' },
      { label: 'Sub-Zero Ice Makers', art: 'icemaker', brand: 'Sub-Zero', type: 'Ice Maker' },
      { label: 'Wolf Ranges', art: 'range', brand: 'Wolf', type: 'Range' },
      { label: 'Wolf Ovens', art: 'oven', brand: 'Wolf', type: 'Oven' },
      { label: 'Wolf Cooktops', art: 'cooktop', brand: 'Wolf', type: 'Cooktop' },
      { label: 'Wolf Ventilation', art: 'hood', brand: 'Wolf', type: 'Ventilation' },
    ],
  },

  diagnostic: {
    // Logo plates exported 88px tall; w = width at that height.
    logos: [
      { name: 'Sub-Zero', src: subzeroLogo, w: 405 },
      { name: 'Wolf', src: wolfLogo, w: 348 },
    ],
    image: subzeroWolfKitchen,
    imageWidth: 1000,
    imageHeight: 574,
    title: '$99 Diagnostic Visit',
    highlight: 'Credited toward the repair',
    text: 'Expert diagnostic and troubleshooting for your appliance issues.',
  },

  faq: {
    eyebrow: 'Common Questions',
    // Rendered as "{title} <em>{titleAccent}</em>".
    title: 'Frequently Asked',
    titleAccent: 'Questions',
    intro: 'Get answers to common questions about Sub-Zero and Wolf appliance repairs in the Bay Area:',
    items: [
      {
        icon: 'calendar',
        q: 'How long do Sub-Zero appliances typically last?',
        a: 'Sub-Zero appliances are built to last 20+ years with proper maintenance. Regular service every 12–18 months can extend their lifespan even further.',
      },
      {
        icon: 'bolt',
        q: 'Do you provide same-day Wolf range repairs?',
        a: 'Yes, we offer same-day emergency service for Wolf appliances throughout the Bay Area, including San Mateo, Palo Alto, and San Francisco.',
      },
      {
        icon: 'shield',
        q: 'Are your technicians factory-certified?',
        a: 'All our technicians are factory-trained and certified by Sub-Zero and Wolf, ensuring expert knowledge of these premium appliance brands.',
      },
      {
        icon: 'award',
        q: 'What warranty do you provide on repairs?',
        a: 'We provide a 2-year warranty on all parts and labor for Sub-Zero and Wolf repairs, giving you peace of mind and protection for your investment.',
      },
    ],
  },

  cta: {
    title: 'Ready to Book Your Sub-Zero & Wolf Repair?',
    text: 'Get expert, local service from the Easy Fix Appliance Team. Same-day appointments available.',
    schedule: 'Schedule Your Sub-Zero Service',
    image: kitchenBright,
    imageWidth: 640,
    imageHeight: 504,
  },
}
