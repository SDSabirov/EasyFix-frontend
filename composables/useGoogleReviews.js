export const useGoogleReviews = () => {
  const { $api } = useNuxtApp()

  const fetchGoogleReviews = async () => {
    try {
      const response = await $api.get('/google-reviews')
      return response.data
    } catch (error) {
      console.error('Error fetching Google reviews:', error)
      return null
    }
  }

  return {
    fetchGoogleReviews,
  }
}
