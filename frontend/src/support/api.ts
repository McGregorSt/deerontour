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

export const fetchPostsByContinent = async (continent: string): Promise<IPost | null> => {
  const data = await getJson<{ post?: IPost | null }>(`/blog/tours/continent/${continent.toLowerCase()}`, { post: null })
  if (data.post) {
    return data.post
  }

  if (shouldUseMockFallback) {
    return mockPosts.find((item) => item.continent.toLowerCase() === continent.toLowerCase()) || mockPosts[0] || null
  }

  return null
}

export const fetchCountriesByContinent = async (continent: string): Promise<string[]> => {
  const data = await getJson<{ continent?: string; countries?: string[] }>(`/blog/tours/countries/${continent.toLowerCase()}`, {
    continent,
    countries: [],
  })

  if (Array.isArray(data.countries) && data.countries.length) {
    return data.countries.reduce<string[]>((result, country) => {
      const value = String(country)
      if (!result.includes(value)) {
        result.push(value)
      }
      return result
    }, [])
  }

  if (shouldUseMockFallback) {
    return mockPosts
      .filter((item) => item.continent.toLowerCase() === continent.toLowerCase())
      .map((item) => item.country)
      .reduce<string[]>((result, country) => {
        if (!result.includes(country)) {
          result.push(country)
        }
        return result
      }, [])
  }

  return []
}

// Direct fetch that does NOT fall back to mock data. Throws on network or non-JSON responses.
export const fetchPostsByContinentNoMock = async (continent: string): Promise<IPost[]> => {
  const url = `${API_BASE_URL}/blog/tours/${continent.toLowerCase()}`
  const response = await fetch(url, {
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

  const data = await response.json()

  // API may return { posts: IPost[] } or an array directly
  if (Array.isArray(data.posts)) {
    return data.posts
  }

  if (Array.isArray(data)) {
    return data as IPost[]
  }

  return []
}
