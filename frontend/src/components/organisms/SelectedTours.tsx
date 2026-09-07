import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import PostCard from './PostCard'
import { IPost } from '../../support/types'
import { fetchCountriesByContinent, fetchPostsByContinentNoMock } from '../../support/api'
import countryCodeMap from '../../shared/countryCodeMap'
import Header from '../atoms/Header'
import UserPage from '../../template/UserPage'

const StyledSelectedTours = styled.div`
  width: 100%;
  padding: 10rem 0 3rem 5rem;

  @media (max-width: 768px) {
    padding: 7rem 0 2rem 2rem;
  }
`
const StyledWrapper = styled.div`
  width: 100%;
  padding: 2rem 1.5rem 3rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: flex-start;
  overflow-x: auto;
  white-space: nowrap;
  align-items: stretch;
  padding-right: 5rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem 2rem;
    flex-direction: row;
    white-space: nowrap;
    overflow-x: auto;
    gap: 2rem;
  }

  @media (max-width: 768px) {
  }
`

const StyledCountriesSection = styled.div`
  width: 100%;
  padding: 1.5rem 0 0;
`

const StyledCountriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 0 1rem 1.5rem;
  /* margin-top: 0.5rem; */
`

const getCountryFlagUrl = (country: string) => {
  const normalizedCountry = country.toLowerCase().trim()
  const countryCode = countryCodeMap[normalizedCountry] || 'xx'

  return `https://flagcdn.com/w80/${countryCode}.png`
}

const StyledCountryChip = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.897)' : 'rgba(124, 116, 91, 0.0)')};
  border: 1px solid rgba(124, 116, 91, 0);
  /* border-radius: 20px; */
  padding: 1rem 1.8rem;
  color: ${({ $active }) => ($active ? '#37342d' : '#37342d')};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-width: 88px;

  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
  }
`

const StyledCountryFlag = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, 0.45);
`

const StyledCountryLabel = styled.span`
  font-size: 0.8rem;
  line-height: 1.2;
  text-transform: capitalize;
  text-align: center;
`

const SelectedTours = () => {
  const [postsData, setPostsData] = useState<IPost[]>([])
  const [countries, setCountries] = useState<string[]>([])
  const [activeCountries, setActiveCountries] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { continent } = useParams<{ continent: string }>()

  useEffect(() => {
    const fetchToursData = async () => {
      try {
        setLoading(true)
        setError(null)
        if (!continent) {
          setError('No continent provided')
          setPostsData([])
          setCountries([])
          setActiveCountries([])
          return
        }

        const [fetchedPosts, fetchedCountries] = await Promise.all([
          fetchPostsByContinentNoMock(continent),
          fetchCountriesByContinent(continent),
        ])

        setPostsData(fetchedPosts || [])
        setCountries(fetchedCountries || [])
        setActiveCountries([])
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load tours'
        console.error('Error fetching tours:', errorMessage)
        setError(errorMessage)
        setPostsData([])
        setCountries([])
        setActiveCountries([])
      } finally {
        setLoading(false)
      }
    }

    fetchToursData()
  }, [continent])

  const toggleCountry = (country: string) => {
    const normalizedCountry = country.toLowerCase()

    setActiveCountries((current) => {
      if (current.includes(normalizedCountry)) {
        return current.filter((item) => item !== normalizedCountry)
      }

      return [...current, normalizedCountry]
    })
  }

  const filteredPosts = activeCountries.length === 0
    ? postsData
    : postsData.filter((post) => activeCountries.includes(post.country.toLowerCase()))

  if (error) {
    return (
      <StyledWrapper>
        <Header content={`Posts from ${continent}`} />
        <StyledSelectedTours>
          <div style={{ gridColumn: '1 / -1', color: 'red', textAlign: 'center' }}>Error loading tours: {error}</div>
        </StyledSelectedTours>
      </StyledWrapper>
    )
  }

  if (loading) {
    return (
      <StyledWrapper>
        <Header content={`Posts from ${continent}`} />
        <StyledSelectedTours>
          <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Loading tours...</div>
        </StyledSelectedTours>
      </StyledWrapper>
    )
  }

  return (
    <UserPage>
      <StyledSelectedTours>
        <StyledCountriesSection>
          <Header content={`Choose posts by Country `} />
          <StyledCountriesList>
            {countries.length > 0 ? (
              countries.map((country) => {
                const normalizedCountry = country.toLowerCase()
                const isActive = activeCountries.includes(normalizedCountry)

                return (
                  <StyledCountryChip
                    key={country}
                    type='button'
                    $active={isActive}
                    aria-pressed={isActive}
                    onClick={() => toggleCountry(country)}
                  >
                    <StyledCountryFlag
                      src={getCountryFlagUrl(country)}
                      alt={`${country} flag`}
                    />
                    <StyledCountryLabel>{country}</StyledCountryLabel>
                  </StyledCountryChip>
                )
              })
            ) : (
              <div style={{ color: '#5b594d' }}>No countries found for this continent.</div>
            )}
          </StyledCountriesList>
        </StyledCountriesSection>

        <Header content={`Posts from ${continent}`} />
        <StyledWrapper>
          {filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map((post: IPost, index: number) => (
              <PostCard
                key={index}
                post={post}
              />
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              {activeCountries.length > 0 ? 'No tours found for the selected countries.' : 'No tours found for this continent.'}
            </div>
          )}
        </StyledWrapper>
      </StyledSelectedTours>
    </UserPage>
  )
}

export default SelectedTours
