import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import PostCard from './PostCard'
import { IPost } from '../../support/types'
import { fetchPosts } from '../../support/api'
import UserPage from '../../template/UserPage'
import { useI18n } from '../../i18n/I18nContext'
import { continentTranslationKeys } from '../../i18n/translations'
import Continents from '../molecules/Continents'

const continents = ['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia']

const StyledPage = styled.main`
  flex: 1;
  background: #f5f3ed;
  color: #33342d;
`

const StyledSection = styled.section`
  width: min(100% - 3rem, 1200px);
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 700px) {
    width: calc(100% - 2rem);
    padding: 2rem 0;
  }
`

const StyledHeading = styled.div`
  margin-bottom: 1.5rem;

  & > span {
    color: #a33b2f;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  & > h1,
  & > h2 {
    margin: 0.35rem 0 0;
    font-family: 'Alumni Sans Pinstripe', sans-serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 500;
    line-height: 1;
  }

  & > p {
    max-width: 36rem;
    margin: 0.55rem 0 0;
    color: #6f7069;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`

const StyledCountryFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1rem 0 0;
`

const StyledCountryChip = styled.button<{ $active: boolean }>`
  min-height: 2.5rem;
  padding: 0.55rem 1rem;
  border: 1px solid ${({ $active }) => ($active ? '#a33b2f' : '#d8d5ca')};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? '#a33b2f' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : '#45463f')};
  cursor: pointer;
  font: inherit;
  font-size: 0.78rem;
  transition: background-color 160ms ease, color 160ms ease, border-color 160ms ease;

  &:hover {
    border-color: #a33b2f;
  }

  &:focus-visible {
    outline: 2px solid #33342d;
    outline-offset: 3px;
  }
`

const StyledPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }
`

const StyledMessage = styled.p`
  grid-column: 1 / -1;
  margin: 1rem 0;
  color: #6f7069;
  text-align: center;
`

const StyledError = styled(StyledMessage)`
  color: #9c342a;
`

const SelectedTours: React.FC = () => {
  const [allPosts, setAllPosts] = useState<IPost[]>([])
  const [activeCountries, setActiveCountries] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { continent } = useParams<{ continent: string }>()
  const { language, t } = useI18n()
  const normalizedContinent = continent ? continent.toLowerCase() : ''
  const continentLabel = continent
    ? t(continentTranslationKeys[normalizedContinent] || 'tours.postsFrom')
    : ''

  useEffect(() => {
    let active = true

    const loadTours = async () => {
      setLoading(true)
      setError(null)
      setAllPosts([])
      setActiveCountries([])
      try {
        const posts = await fetchPosts(language)
        if (active) setAllPosts(posts)
      } catch (loadError) {
        const message = loadError instanceof Error ? loadError.message : 'Failed to load tours'
        console.error('Error fetching tours:', message)
        if (active) {
          setAllPosts([])
          setError(message)
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    loadTours()
    return () => {
      active = false
    }
  }, [language])

  useEffect(() => {
    setActiveCountries([])
  }, [normalizedContinent])

  const continentPosts = useMemo(
    () => allPosts.filter((post) => post.continent.toLowerCase() === normalizedContinent),
    [allPosts, normalizedContinent],
  )

  const countries = useMemo(() => {
    const distinctCountries = new Map<string, string>()
    continentPosts.forEach((post) => {
      const key = post.country.toLowerCase()
      if (!distinctCountries.has(key)) {
        distinctCountries.set(key, post.countryLabel || post.country)
      }
    })
    return Array.from(distinctCountries.entries())
  }, [continentPosts])

  const toggleCountry = (country: string) => {
    setActiveCountries((current) => (
      current.includes(country)
        ? current.filter((item) => item !== country)
        : [...current, country]
    ))
  }

  const filteredPosts = activeCountries.length === 0
    ? continentPosts
    : continentPosts.filter((post) => activeCountries.includes(post.country.toLowerCase()))

  const sortedPosts = useMemo(
    () => [...filteredPosts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [filteredPosts],
  )
  const continentCounts = useMemo(
    () => allPosts.reduce<Record<string, number>>((counts, post) => {
      const key = post.continent.toLowerCase()
      counts[key] = (counts[key] || 0) + 1
      return counts
    }, {}),
    [allPosts],
  )
  const visibleContinents = continentCounts.antarctica
    ? [...continents, 'Antarctica']
    : continents

  return (
    <UserPage>
      <StyledPage>
        <StyledSection>
          <StyledHeading>
            <span>{t('tours.discoverEyebrow')}</span>
            <h1>{t('tours.postsFrom')} {continentLabel}</h1>
            <p>{t('tours.continentsDescription')}</p>
          </StyledHeading>
          <Continents continents={visibleContinents} counts={continentCounts} variant='tours' />
        </StyledSection>

        <StyledSection>
          <StyledHeading>
            <span>{t('tours.discoverEyebrow')}</span>
            <h2>{t('tours.chooseCountry')}</h2>
          </StyledHeading>
          {!loading && !error && (
            <StyledCountryFilters>
              {countries.length ? countries.map(([code, label]) => {
                const isActive = activeCountries.includes(code)
                return (
                  <StyledCountryChip
                    key={code}
                    type='button'
                    $active={isActive}
                    aria-pressed={isActive}
                    onClick={() => toggleCountry(code)}
                  >
                    {label}
                  </StyledCountryChip>
                )
              }) : <StyledMessage>{t('tours.noCountries')}</StyledMessage>}
            </StyledCountryFilters>
          )}
        </StyledSection>

        <StyledSection>
          <StyledHeading>
            <span>{t('tours.popularEyebrow')}</span>
            <h2>{t('tours.postsFrom')} {continentLabel}</h2>
          </StyledHeading>
          <StyledPostsGrid>
            {loading ? (
              <StyledMessage>{t('tours.loading')}</StyledMessage>
            ) : error ? (
              <StyledError>{t('tours.loadError')} {error}</StyledError>
            ) : sortedPosts.length ? (
              sortedPosts.map((post) => <PostCard key={post.id} post={post} variant='grid' />)
            ) : (
              <StyledMessage>
                {activeCountries.length ? t('tours.noSelectedTours') : t('tours.noTours')}
              </StyledMessage>
            )}
          </StyledPostsGrid>
        </StyledSection>
      </StyledPage>
    </UserPage>
  )
}

export default SelectedTours
