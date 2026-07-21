import { mockPosts } from './mockPosts'
import { IPost } from './types'

const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL || '').replace(/\/$/, '')
const shouldUseMockFallback = process.env.REACT_APP_USE_MOCKS === 'true' || process.env.NODE_ENV !== 'production'

const getJson = async <T>(url: string, fallback: T): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'get',
      headers: { Accept: 'application/json' },
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const contentType = response.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      throw new Error('Non-JSON response')
    }

    return await response.json()
  } catch (error) {
    if (shouldUseMockFallback) {
      console.warn('Falling back to mock data:', error)
      return fallback
    }

    throw error
  }
}

export const fetchPosts = async (): Promise<IPost[]> => {
  const data = await getJson<{ posts?: IPost[] }>(`/blog/tours`, { posts: [] })

  if (Array.isArray(data.posts) && data.posts.length) {
    return data.posts
  }

  if (shouldUseMockFallback) {
    return mockPosts
  }

  return []
}

export const fetchPostByCountry = async (country: string): Promise<IPost | null> => {
  const data = await getJson<{ post?: IPost | null }>(`/blog/tours/details/${country.toLowerCase()}`, { post: null })
  if (data.post) {
    return data.post
  }

  if (shouldUseMockFallback) {
    return mockPosts.find((item) => item.country.toLowerCase() === country.toLowerCase()) || mockPosts[0] || null
  }

  return null
}
