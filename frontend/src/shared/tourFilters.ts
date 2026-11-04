import { IPost } from '../support/types'
import { normalizeContinent } from './continent'

export interface CountryOption {
  code: string
  label: string
}

export const normalizeCountry = (country: string): string => country
  .trim()
  .toLowerCase()
  .replace(/[\s_]+/g, '-')

export const getCountriesForPosts = (posts: IPost[]): CountryOption[] => {
  const countries = new Map<string, string>()

  posts.forEach((post) => {
    const code = normalizeCountry(post.country)
    if (code && !countries.has(code)) {
      countries.set(code, post.countryLabel || post.country)
    }
  })

  return Array.from(countries, ([code, label]) => ({ code, label }))
}

export const filterPostsByLocation = (
  posts: IPost[],
  continent: string,
  country?: string,
): IPost[] => posts.filter((post) => (
  normalizeContinent(post.continent) === normalizeContinent(continent)
  && (!country || normalizeCountry(post.country) === normalizeCountry(country))
))

export const filterPostsByCountries = (posts: IPost[], countries: string[]): IPost[] => {
  if (countries.length === 0) return posts

  const selectedCountries = new Set(countries.map(normalizeCountry))
  return posts.filter((post) => selectedCountries.has(normalizeCountry(post.country)))
}
