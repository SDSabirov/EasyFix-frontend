// Variants of the Google Ads landing page (components/Lp/LandingPage.vue).
// Pages: /ppc/high-end and /ppc/general. Everything not listed here is shared.
import subzero from '~/assets/img/lp/subzero.webp'
import miele from '~/assets/img/lp/miele.webp'
import wolf from '~/assets/img/lp/wolf.webp'
import viking from '~/assets/img/lp/viking.webp'
import thermador from '~/assets/img/lp/thermador.webp'
import lacornue from '~/assets/img/lp/lacornue.webp'
import monogram from '~/assets/img/lp/monogram.webp'
import gaggenau from '~/assets/img/lp/gaggenau.webp'
import dacor from '~/assets/img/lp/dacor.webp'
import ge from '~/assets/img/lp/ge.webp'
import kitchenaid from '~/assets/img/lp/kitchenaid.webp'
import bosch from '~/assets/img/lp/bosch.webp'
import lg from '~/assets/img/lp/lg.webp'
import samsung from '~/assets/img/lp/samsung.webp'

// Brand row entries:
//   { name, src, w }  logo image (all exported 88px tall; w = intrinsic width)
//   size: 'sm' | 'lg' tunes visual weight for very wide / very compact marks
//   { name, text }    typographic wordmark, used until an official logo file is added
//   { rowBreak }      forces the row to wrap here: 'mobile' (below 1024px),
//                     'lg' (1024–1279px; xl and up is always one row),
//                     'phablet' (444–524px) — see rowBreak in LandingPage.vue
export const highEnd = {
  key: 'high-end',
  eyebrow: 'Premium Appliance Care',
  heroBrands: 'Sub-Zero, Miele, Wolf, Viking, Thermador, La Cornue, GE Monogram',
  brandLogos: [
    { name: 'Sub-Zero', src: subzero, w: 405 },
    { name: 'Miele', src: miele, w: 358 },
    { name: 'Wolf', src: wolf, w: 348 },
    { name: 'Viking', src: viking, w: 361 },
    { rowBreak: 'mobile' },
    { name: 'Thermador', src: thermador, w: 437 },
    { rowBreak: 'lg' },
    { name: 'La Cornue', src: lacornue, w: 344 },
    { name: 'GE Monogram', src: monogram, w: 390 },
    { rowBreak: 'phablet' },
    { name: 'Gaggenau', src: gaggenau, w: 608 },
    { name: 'Dacor', src: dacor, w: 315 },
  ],
  faqBrands:
    'We specialize in luxury and built-in brands including Sub-Zero, Wolf, Miele, Viking, Thermador, La Cornue, GE Monogram, Gaggenau and Dacor, and we service most other major brands too.',
  formBrands: [
    'Sub-Zero', 'Wolf', 'Miele', 'Viking', 'Thermador', 'La Cornue', 'GE Monogram',
    'Gaggenau', 'Dacor', 'KitchenAid', 'Bosch', 'Other',
  ],
}

export const general = {
  key: 'general',
  eyebrow: null,
  heroBrands: 'GE, KitchenAid, Bosch, LG, Samsung, Whirlpool, Frigidaire, Electrolux',
  brandLogos: [
    { name: 'GE', src: ge, w: 88, size: 'lg' },
    { name: 'KitchenAid', src: kitchenaid, w: 874, size: 'sm' },
    { name: 'Bosch', src: bosch, w: 412 },
    { name: 'LG', src: lg, w: 199 },
    { rowBreak: 'mobile' },
    { name: 'Samsung', src: samsung, w: 574, size: 'sm' },
    { rowBreak: 'lg' },
    { name: 'Whirlpool', text: 'Whirlpool' },
    { name: 'Frigidaire', text: 'FRIGIDAIRE' },
    { rowBreak: 'mobile' },
    { name: 'Electrolux', text: 'Electrolux' },
    { name: 'Sub-Zero', src: subzero, w: 405 },
    { name: 'Wolf', src: wolf, w: 348 },
  ],
  faqBrands:
    'We repair all major brands, including GE, KitchenAid, Bosch, LG, Samsung, Whirlpool, Frigidaire and Electrolux, as well as luxury brands like Sub-Zero and Wolf.',
  formBrands: [
    'GE', 'KitchenAid', 'Bosch', 'LG', 'Samsung', 'Whirlpool', 'Frigidaire',
    'Electrolux', 'Sub-Zero', 'Wolf', 'Other',
  ],
}
