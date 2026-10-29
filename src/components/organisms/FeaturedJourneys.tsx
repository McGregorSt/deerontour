import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fetchPosts } from '../../support/api'
import { IPost } from '../../support/types'
import { useI18n } from '../../i18n/I18nContext'

const StyledSection = styled.section`
  width: min(calc(100% - clamp(1.25rem, 5.5vw, 5rem) * 2), 1440px);
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) 0 clamp(3.5rem, 8vw, 7rem);
`

const StyledHeading = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: clamp(2.2rem, 4vw, 3.25rem);
    font-weight: 400;
    line-height: 1;
  }

  p {
    margin: 0.8rem 0 0;
    color: #77776f;
    font-size: 0.95rem;
  }
`

const StyledJourneyList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
  gap: clamp(1rem, 2.3vw, 2rem);
`

const StyledJourney = styled(Link)`
  position: relative;
  display: block;
  min-height: clamp(18rem, 32vw, 29rem);
  overflow: hidden;
  background: #d3d1c8;
  color: #fff;
  text-decoration: none;

  &::after {
    position: absolute;
    inset: 30% 0 0;
    background: linear-gradient(0deg, rgba(12, 16, 13, 0.78), transparent);
    content: '';
    transition: opacity 200ms ease;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
    transition: transform 450ms ease;
  }

  &:hover img {
    transform: scale(1.035);
  }

  &:focus-visible {
    outline: 3px solid #a33b2f;
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }
  }
`

const StyledJourneyCopy = styled.div`
  position: absolute;
  z-index: 1;
  right: 1.5rem;
  bottom: 1.4rem;
  left: 1.5rem;

  span {
    display: block;
    margin-bottom: 0.45rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: clamp(1.9rem, 3.1vw, 2.7rem);
    font-weight: 400;
    line-height: 0.95;
  }

  p {
    margin: 0.5rem 2rem 0 0;
    font-size: 0.85rem;
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: 0.1rem;
    content: '→';
    font-size: 1.25rem;
  }
`

const StyledMessage = styled.p`
  margin: 0;
  color: #77776f;
`

const FeaturedJourneys: React.FC = () => {
  const { language, t } = useI18n()
  const [posts, setPosts] = useState<IPost[]>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setError(false)
    setLoading(true)

    fetchPosts(language)
      .then((fetchedPosts) => {
        if (active) {
          setPosts(fetchedPosts)
          setLoading(false)
        }
      })
      .catch((fetchError: unknown) => {
        console.error('Error fetching featured journeys:', fetchError)
        if (active) {
          setError(true)
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [language])

  const featuredPosts = [...posts]
    .sort((first, second) => new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime())
    .slice(0, 3)

  return (
    <StyledSection aria-labelledby='featured-journeys-title'>
      <StyledHeading>
        <h2 id='featured-journeys-title'>{t('home.featuredTitle')}</h2>
        <p>{t('home.featuredDescription')}</p>
      </StyledHeading>
      {error ? (
        <StyledMessage role='alert'>{t('home.featuredError')}</StyledMessage>
      ) : loading ? (
        <StyledMessage>{t('home.featuredLoading')}</StyledMessage>
      ) : featuredPosts.length > 0 ? (
        <StyledJourneyList>
          {featuredPosts.map((post) => {
            const image = post.postGallery?.[0]?.[0]?.src || post.imageUrl
            return (
              <StyledJourney
                key={post.id}
                to={`/tours/details/${encodeURIComponent(post.country.toLowerCase())}?postId=${encodeURIComponent(post.id)}`}
              >
                <img src={image} alt='' loading='lazy' />
                <StyledJourneyCopy>
                  <span>{post.countryLabel || post.country}</span>
                  <h3>{post.title}</h3>
                  {post.subtitle && <p>{post.subtitle}</p>}
                </StyledJourneyCopy>
              </StyledJourney>
            )
          })}
        </StyledJourneyList>
      ) : (
        <StyledMessage>{t('home.featuredEmpty')}</StyledMessage>
      )}
    </StyledSection>
  )
}

export default FeaturedJourneys
