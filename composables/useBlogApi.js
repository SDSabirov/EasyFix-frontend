import api from '~/api/drf'

export const useBlogApi = () => {
  const getAllBlogs = async () => {
    try {
      const response = await api.get('/blog/posts/')
      return response.data
    } catch (error) {
      console.error('Error fetching blogs:', error)
      return []
    }
  }

  const getBlogBySlug = async (slug) => {
    try {
      const response = await api.get(`/blog/posts/${slug}/`)
      return response.data
    } catch (error) {
      console.error('Error fetching blog:', error)
      return null
    }
  }

  const getRelatedBlogs = async (slug) => {
    try {
      const response = await api.get(`/blog/posts/${slug}/related/`)
      return response.data
    } catch (error) {
      console.error('Error fetching related blogs:', error)
      return []
    }
  }

  const getBlogsByCategory = async (category) => {
    try {
      const response = await api.get('/blog/posts/', {
        params: { category }
      })
      return response.data
    } catch (error) {
      console.error('Error fetching blogs by category:', error)
      return []
    }
  }

  return {
    getAllBlogs,
    getBlogBySlug,
    getRelatedBlogs,
    getBlogsByCategory
  }
}
