import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useI18n } from '../../i18n/I18nContext'
import { fetchPosts } from '../../support/api'
import { IPost } from '../../support/types'
import Continents from '../molecules/Continents'
import UserPage from '../../template/UserPage'

const heroImage = '/assets/6761b2f4d2ca643ca99c2d90/header.jpg'
const continents = ['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia']

const StyledPage = styled.main`
  flex: 1;
  background: #f5f3ed;
  color: #33342d;
`

const StyledHero = styled.section`
  position: relative;
  display: flex;
  min-height: 25rem;
  align-items: flex-end;
  padding: 3rem max(7vw, calc((100vw - 1200px) / 2));
  background-image: linear-gradient(90deg, rgba(20, 25, 22, 0.56), rgba(20, 25, 22, 0.05)),
    linear-gradient(0deg, rgba(20, 25, 22, 0.3), transparent 70%), url('${heroImage}');
  background-position: center 54%;
  background-size: cover;
  color: white;

  @media (max-width: 700px) {
    min-height: 14rem;
    padding: 1.5rem 1.25rem 1.8rem;
    background-position: center;
  }
`

const StyledHeroText = styled.div`
  max-width: 41rem;

  & > span {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  & > h1 {
    margin: 0.35rem 0 0;
    font-family: 'Alumni Sans Pinstripe', sans-serif;
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 500;
    line-height: 0.95;
  }

  & > p {
    max-width: 32rem;
    margin: 0.8rem 0 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 700px) {
    & > span {
      font-size: 0.58rem;
    }

    & > h1 {
      font-size: 3rem;
    }

    & > p {
      max-width: 23rem;
      margin-top: 0.45rem;
      font-size: 0.78rem;
      line-height: 1.45;
    }
  }
`

const StyledSection = styled.section`
  width: min(100% - 3rem, 1200px);
  margin: 0 auto;
  padding: 4.25rem 0;

  @media (max-width: 700px) {
    width: calc(100% - 2rem);
    padding: 2.5rem 0;
  }
`

const StyledSectionHeading = styled.div`
  margin-bottom: 1.5rem;

  & > span {
    color: #a33b2f;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  & > h2 {
    margin: 0.3rem 0 0;
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

const StyledPopularSection = styled(StyledSection)`
  padding-top: 0.5rem;
`

const StyledTourGrid = styled.div`
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

const StyledTourCard = styled(Link)`
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  color: inherit;
  text-decoration: none;
  transition: box-shadow 180ms ease, transform 180ms ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(35, 37, 26, 0.12);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const StyledTourImage = styled.img`
  width: 100%;
  height: 13.5rem;
  object-fit: cover;

  @media (max-width: 600px) {
    height: 12.5rem;
  }
`

const StyledTourContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem 1.1rem 1.2rem;

  & > span {
    color: #8c7564;
    font-size: 0.63rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  & > h3 {
    margin: 0.45rem 0 0;
    font-family: 'Alumni Sans Pinstripe', sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.05;
  }

  & > p {
    display: -webkit-box;
    overflow: hidden;
    margin: 0.45rem 0 0;
    color: #6f7069;
    font-size: 0.82rem;
    line-height: 1.5;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`

const StyledTourMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.9rem;
  margin-top: 0.85rem;
  color: #777870;
  font-size: 0.68rem;
`

const StyledLoadingMessage = styled.p`
  grid-column: 1 / -1;
  margin: 1rem 0;
  color: #6f7069;
  text-align: center;
`

const StyledErrorMessage = styled(StyledLoadingMessage)`
  color: #9c342a;
`

const StyledPlanner = styled.section`
  display: grid;
  min-height: 17rem;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  overflow: hidden;
  background: #e8e4d8;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const StyledPlannerContent = styled.div`
  padding: 3rem max(2rem, calc((100vw - 1100px) / 2));

  & > span {
    color: #a33b2f;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  & > h2 {
    max-width: 32rem;
    margin: 0.5rem 0 0;
    font-family: 'Alumni Sans Pinstripe', sans-serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 500;
    line-height: 1.05;
  }

  & > p {
    max-width: 33rem;
    margin: 0.7rem 0 1.2rem;
    color: #65665f;
    font-size: 0.88rem;
    line-height: 1.6;
  }

  @media (max-width: 700px) {
    padding: 2rem 1.25rem;
  }
`

const StyledPlannerLink = styled(Link)`
  display: inline-flex;
  min-height: 2.8rem;
  align-items: center;
  justify-content: center;
  padding: 0 1.3rem;
  background: #a33b2f;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: #853127;
  }

  &:focus-visible {
    outline: 2px solid #33342d;
    outline-offset: 3px;
  }
`

const StyledPlannerImage = styled.div`
  min-height: 17rem;
  align-self: stretch;
  background: url('${heroImage}') center 58% / cover no-repeat;

  @media (max-width: 700px) {
    min-height: 10rem;
    grid-row: 1;
  }
`

const getDuration = (post: IPost) => {
  const start = new Date(post.tourStart).getTime()
  const end = new Date(post.tourEnd).getTime()
  if (!Number.isFinite(start) || !Number.isFinite(end) || end < start) return null

  return Math.floor((end - start) / 86400000) + 1
}

const Tours: React.FC = () => {
  const { language, t } = useI18n()
  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    const loadTours = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = await fetchPosts(language)
        if (active) setPosts(result)
      } catch (loadError) {
        const message = loadError instanceof Error ? loadError.message : 'Failed to load tours'
        console.error('Error fetching tours:', message)
        if (active) {
          setPosts([])
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

  const continentCounts = useMemo(
    () => posts.reduce<Record<string, number>>((counts, post) => {
      const key = post.continent.toLowerCase()
      counts[key] = (counts[key] || 0) + 1
      return counts
    }, {}),
    [posts],
  )

  const visibleContinents = continentCounts.antarctica
    ? [...continents, 'Antarctica']
    : continents

  const popularPosts = useMemo(
    () => [...posts].slice(0, 6),
    [posts],
  )

  return (
    <UserPage>
      <StyledPage>
        <StyledHero>
          <StyledHeroText>
            <span>{t('tours.heroEyebrow')}</span>
            <h1>{t('nav.tours')}</h1>
            <p>{t('tours.heroDescription')}</p>
          </StyledHeroText>
        </StyledHero>

        <StyledSection>
          <StyledSectionHeading>
            <span>{t('tours.discoverEyebrow')}</span>
            <h2>{t('tours.byContinents')}</h2>
            <p>{t('tours.continentsDescription')}</p>
          </StyledSectionHeading>
          <Continents continents={visibleContinents} counts={continentCounts} variant='tours' />
        </StyledSection>

        <StyledPopularSection id='popular-tours'>
          <StyledSectionHeading>
            <span>{t('tours.popularEyebrow')}</span>
            <h2>{t('tours.popularTitle')}</h2>
            <p>{t('tours.popularDescription')}</p>
          </StyledSectionHeading>
          <StyledTourGrid>
            {loading ? (
              <StyledLoadingMessage>{t('tours.loading')}</StyledLoadingMessage>
            ) : error ? (
              <StyledErrorMessage>{t('tours.loadError')} {error}</StyledErrorMessage>
            ) : popularPosts.length ? (
              popularPosts.map((post) => {
                const duration = getDuration(post)
                return (
                  <StyledTourCard
                    key={post.id}
                    to={`/tours/details/${encodeURIComponent(post.country.toLowerCase())}?postId=${encodeURIComponent(post.id)}`}
                  >
                    <StyledTourImage
                      src={post.imageUrl || heroImage}
                      alt={post.title}
                      loading='lazy'
                      onError={(event) => {
                        if (event.currentTarget.getAttribute('src') !== heroImage) {
                          event.currentTarget.src = heroImage
                        }
                      }}
                    />
                    <StyledTourContent>
                      <span>{post.countryLabel || post.country}</span>
                      <h3>{post.title}</h3>
                      {post.subtitle && <p>{post.subtitle}</p>}
                      <StyledTourMeta>
                        {duration && <span>{duration} {t('tours.days')}</span>}
                        <span>{post.continent}</span>
                      </StyledTourMeta>
                    </StyledTourContent>
                  </StyledTourCard>
                )
              })
            ) : (
              <StyledLoadingMessage>{t('tours.noPopularTours')}</StyledLoadingMessage>
            )}
          </StyledTourGrid>
        </StyledPopularSection>

        <StyledPlanner>
          <StyledPlannerContent>
            <span>{t('tours.plannerEyebrow')}</span>
            <h2>{t('tours.plannerTitle')}</h2>
            <p>{t('tours.plannerDescription')}</p>
            <StyledPlannerLink to='/contact'>{t('tours.plannerAction')}</StyledPlannerLink>
          </StyledPlannerContent>
          <StyledPlannerImage role='img' aria-label={t('home.aboutImageAlt')} />
        </StyledPlanner>
      </StyledPage>
    </UserPage>
  )
}

export default Tours
