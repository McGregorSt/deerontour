import { mockPosts } from './mockPosts'
import { IPost, IPostApiPayload } from './types'
import { Language } from '../i18n/translations'

const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL || '').replace(/\/$/, '')
const shouldUseMockFallback = process.env.REACT_APP_USE_MOCKS === 'true' || process.env.NODE_ENV !== 'production'
const withLanguage = (url: string, language: Language) => `${url}${url.includes('?') ? '&' : '?'}lang=${language}`

const localizePost = (post: IPostApiPayload, language: Language): IPost => {
  const translations = post.translations
  const fallbackTranslation = Array.isArray(translations)
    ? translations[0]
    : translations?.EN ?? translations?.PL
  const requestedTranslation = Array.isArray(translations)
    ? translations.find((translation) => translation.language === language)
    : translations?.[language]
  const translation = requestedTranslation ?? fallbackTranslation

  return {
    ...post,
    ...fallbackTranslation,
    ...translation,
    title: translation?.title ?? fallbackTranslation?.title ?? post.title ?? '',
    subtitle: translation?.subtitle ?? fallbackTranslation?.subtitle ?? post.subtitle ?? '',
    textLead: translation?.textLead ?? fallbackTranslation?.textLead ?? post.textLead ?? '',
    textParagraphs: translation?.textParagraphs ?? fallbackTranslation?.textParagraphs ?? post.textParagraphs ?? [],
    countryLabel:
      translation?.countryLabel ?? fallbackTranslation?.countryLabel ?? post.countryLabel ?? post.country,
    language,
  } as IPost
}

export interface ICountryOption {
  code: string
  label: string
}

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

export const fetchPosts = async (language: Language = 'EN'): Promise<IPost[]> => {
  const data = await getJson<{ posts?: IPost[] }>(withLanguage('/blog/tours', language), { posts: [] })

  if (Array.isArray(data.posts) && data.posts.length) {
    return data.posts.map((post) => localizePost(post, language))
  }

  if (shouldUseMockFallback) {
    return mockPosts.map((post) => localizePost(post, language))
  }

  return []
}

export const fetchPostsByCountry = async (country: string, language: Language = 'EN'): Promise<IPost[]> => {
  const query = new URLSearchParams({ country })
  const response = await fetch(`${API_BASE_URL}/api/v1/posts?${query.toString()}`, {
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

  const data = await response.json() as IPostApiPayload[] | { posts?: IPostApiPayload[] }
  const posts = Array.isArray(data) ? data : data.posts ?? []

  return posts.map((post) => localizePost(post, language))
}

export const fetchPostByCountry = async (country: string, language: Language = 'EN'): Promise<IPost | null> => {
  const url = withLanguage(`/blog/tours/details/${country.toLowerCase()}`, language)
  const data = await getJson<{ post?: IPostApiPayload | null } | IPostApiPayload>(url, { post: null })
  const post = Object.prototype.hasOwnProperty.call(data, 'post')
    ? (data as { post?: IPostApiPayload | null }).post ?? null
    : (data as IPostApiPayload)
  if (post?.country) {
    return localizePost(post, language)
  }

  if (shouldUseMockFallback) {
    const post = mockPosts.find((item) => item.country.toLowerCase() === country.toLowerCase()) || mockPosts[0]
    return post ? localizePost(post, language) : null
  }

  return null
}

export const fetchPostsByContinent = async (continent: string, language: Language = 'EN'): Promise<IPost | null> => {
  const url = withLanguage(`/blog/tours/continent/${continent.toLowerCase()}`, language)
  const data = await getJson<{ post?: IPost | null }>(url, { post: null })
  if (data.post) {
    return localizePost(data.post, language)
  }

  if (shouldUseMockFallback) {
    const post = mockPosts.find((item) => item.continent.toLowerCase() === continent.toLowerCase()) || mockPosts[0]
    return post ? localizePost(post, language) : null
  }

  return null
}

export const fetchCountriesByContinent = async (
  continent: string,
  language: Language = 'EN',
): Promise<ICountryOption[]> => {
  const url = withLanguage(`/blog/tours/countries/${continent.toLowerCase()}`, language)
  const data = await getJson<{ continent?: string; countries?: (string | ICountryOption)[] }>(url, {
    continent,
    countries: [],
  })

  if (Array.isArray(data.countries) && data.countries.length) {
    return data.countries.reduce<ICountryOption[]>((result, country) => {
      const option = typeof country === 'string' ? { code: country, label: country } : country
      if (!result.some((item) => item.code === option.code)) {
        result.push(option)
      }
      return result
    }, [])
  }

  if (shouldUseMockFallback) {
    return mockPosts
      .filter((item) => item.continent.toLowerCase() === continent.toLowerCase())
      .map((item) => ({
        code: item.country,
        label: item.translations?.[language]?.countryLabel || item.country,
      }))
      .reduce<ICountryOption[]>((result, country) => {
        if (!result.some((item) => item.code === country.code)) {
          result.push(country)
        }
        return result
      }, [])
  }

  return []
}

// Direct fetch that does NOT fall back to mock data. Throws on network or non-JSON responses.
export const fetchPostsByContinentNoMock = async (continent: string, language: Language = 'EN'): Promise<IPost[]> => {
  const url = `${API_BASE_URL}${withLanguage(`/blog/tours/${continent.toLowerCase()}`, language)}`
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
    return data.posts.map((post: IPost) => localizePost(post, language))
  }

  if (Array.isArray(data)) {
    return (data as IPost[]).map((post) => localizePost(post, language))
  }

  return []
}
