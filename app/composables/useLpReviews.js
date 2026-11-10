// Google rating + the three newest 5-star reviews for the Google Ads landing
// pages. Starts with built-in values and swaps in live ones from /google-reviews.

// Real Google reviews (shortened) — replaced by live GMB reviews when the API responds.
const fallbackReviews = [
  { author: 'Den Baron', date: 'Google review', review: 'Had Tom come repair our Subzero fridge last week. He was an amazing technician, ontime, and very professional.' },
  { author: 'thai bui', date: 'Google review', review: "The technician, Tom, arrived right on time… He quickly diagnosed the problem and had the replacement part on hand, completing the repair much faster than I expected." },
  { author: 'Uzak Almasbek', date: 'Google review', review: "My Viking oven wasn't heating properly… He diagnosed and fixed the issue in just one trip, which was a huge relief." },
]

// Accepts both the site's review shape and Google Places field names, and
// works out an age for newest-first sorting (timestamp, date, or "2 weeks ago").
const UNIT_DAYS = { day: 1, week: 7, month: 30, year: 365 }
const normalizeReview = (r) => {
  const date = r.date || r.relative_time_description || ''
  let ts = Number(r.time || r.timestamp || 0)
  if (ts && ts < 1e12) ts *= 1000
  if (!ts && r.publishTime) ts = Date.parse(r.publishTime) || 0
  if (!ts) {
    const m = String(date).match(/(a|an|\d+)\s+(day|week|month|year)s?\s+ago/i)
    if (m) ts = Date.now() - (/^an?$/i.test(m[1]) ? 1 : Number(m[1])) * UNIT_DAYS[m[2].toLowerCase()] * 864e5
    else if (/today|hour|minute|just now/i.test(date)) ts = Date.now()
  }
  return {
    author: r.author || r.author_name || r.authorAttribution?.displayName || 'Google user',
    date: date || 'Google review',
    review: r.review || r.text?.text || r.text || '',
    rating: r.rating ? Number(r.rating) : 0,
    ts,
  }
}

const excerpt = (text, max = 150) => {
  if (!text || text.length <= max) return text
  // Cut at a word boundary; hard-cut text without spaces (e.g. CJK, long links).
  const space = text.lastIndexOf(' ', max)
  const cut = space > max * 0.6 ? text.slice(0, space) : Array.from(text).slice(0, max).join('')
  return cut.replace(/[,;:.\s]+$/, '') + '…'
}

// `initial`: what to show until /google-reviews returns live values.
export const useLpReviews = (initial = { value: '5.0', count: '200+' }) => {
  const rating = reactive({ ...initial })
  const reviews = ref(fallbackReviews)
  const displayedReviews = computed(() =>
    reviews.value.slice(0, 3).map((r) => ({ ...r, excerpt: excerpt(r.review) })),
  )

  const { fetchGoogleReviews } = useGoogleReviews()

  onMounted(async () => {
    const data = await fetchGoogleReviews()
    if (data?.reviews?.length) {
      const latest = data.reviews
        .map(normalizeReview)
        .filter((r) => r.review && (!r.rating || r.rating >= 5))
        .sort((a, b) => b.ts - a.ts)
      // Google returns at most the 5 newest; if fewer than 3 of them are 5-star,
      // keep the live ones first and top up with the built-in reviews.
      if (latest.length) {
        const topUp = fallbackReviews.filter((f) => !latest.some((l) => l.author === f.author))
        reviews.value = [...latest, ...topUp].slice(0, 3)
      }
    }
    if (data?.rating) rating.value = Number(data.rating).toFixed(1)
    // Backend (easyfix-backend reviews/views.py) sends the count as `total`.
    const total = Number(data?.total ?? data?.user_ratings_total ?? data?.total_reviews)
    if (total > 0) rating.count = total.toLocaleString('en-US')
  })

  return { rating, displayedReviews }
}
