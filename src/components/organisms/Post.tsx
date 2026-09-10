import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { IPost } from '../../support/types'
import PostParagraph from '../atoms/Post/PostParagraph'
import PostGallery from './PostGallery'
import PostTableOfContents from '../molecules/PostTableOfContents'
import { fetchPostByCountry } from '../../support/api'

const StyledPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f6f1;
  min-height: 100vh;
`

const HeroSection = styled.header<{ $backgroundImage: string }>`
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(180deg, rgba(15, 18, 20, 0.15) 0%, rgba(15, 18, 20, 0.7) 100%),
    url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1.5rem clamp(1rem, 3vw, 3rem) 2.5rem;
  color: #f5f0ea;
`

const HeroInner = styled.div`
  width: min(100%, 1280px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const HeroKicker = styled.p`
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  opacity: 0.9;
`

const HeroTitle = styled.h1`
  margin: 0;
  max-width: 780px;
  font-size: clamp(3.25rem, 6vw, 6.25rem);
  line-height: 0.94;
  letter-spacing: -0.06em;
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
`

const HeroMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  font-size: 0.88rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(245, 240, 234, 0.9);
`

const HeroReadMore = styled.a`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #f5f0ea;
  text-decoration: none;
  opacity: 0.9;
`

const HeroArrow = styled.span`
  font-size: 1.45rem;
  line-height: 1;
`

const StyledPostContainer = styled.div`
  width: min(100%, 1220px);
  margin: 0 auto;
  padding: 0 1rem 4rem;
`

const IntroSection = styled.section`
  padding-top: 3.5rem;
  padding-bottom: 2rem;
  width: min(100%, 800px);
  margin: 0 auto;
`

const IntroMeta = styled.div`
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(33, 33, 33, 0.68);
  font-weight: 700;
  margin-bottom: 1rem;
`

const IntroLead = styled.p`
  margin: 0 0 1.5rem;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  line-height: 1.3;
  letter-spacing: -0.04em;
  color: #191b1d;
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
`

const LocationPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 1.8rem;
`

const LocationPill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.9rem;
  border: 1px solid rgba(28, 28, 28, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.5);
  font-size: 0.74rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(25, 27, 29, 0.8);
`

const SnapshotCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  width: min(100%, 520px);
  padding: 1.2rem 1.3rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
  background: rgba(255, 255, 255, 0.42);
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(17, 24, 39, 0.03);
`

const SnapshotItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
`

const SnapshotLabel = styled.span`
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(25, 27, 29, 0.62);
  font-weight: 700;
`

const SnapshotValue = styled.span`
  font-size: 1.05rem;
  color: #191b1d;
  font-weight: 600;
`

const ArticleLayout = styled.div`
  display: grid;
  grid-template-columns: 260px minmax(0, 800px);
  gap: 5.5rem;
  align-items: start;
  padding-top: 1rem;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ArticleContent = styled.div`
  width: 100%;
`

const StyledPostSection = styled.section`
  width: 100%;
  scroll-margin-top: 6.5rem;
  margin-bottom: 3.5rem;
`

const ArticleHeader = styled.header`
  display: grid;
  grid-template-columns: 3.5rem minmax(0, 1fr);
  align-items: end;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const SectionNumber = styled.span`
  font-size: 0.76rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(25, 27, 29, 0.55);
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(2.15rem, 3vw, 3.25rem);
  line-height: 0.96;
  letter-spacing: -0.055em;
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 700;
  color: #1a1b1d;
`

const RoutePanel = styled.aside`
  margin-top: 1.5rem;
  padding: 1rem 0 0;
  border-top: 1px solid rgba(25, 27, 29, 0.18);
`

const RouteTitle = styled.h3`
  margin: 0 0 1rem;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(25, 27, 29, 0.7);
  font-weight: 700;
`

const RouteMap = styled.div`
  position: relative;
  padding: 1.5rem 1rem 0.75rem;
  border: 1px solid rgba(25, 27, 29, 0.12);
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(240, 235, 228, 0.9));
  min-height: 180px;
`

const RouteLine = styled.div`
  position: absolute;
  inset: 1.5rem 2.5rem 2rem 2.5rem;
  border-radius: 999px;
  border-left: 2px solid rgba(25, 27, 29, 0.18);
  border-top: 2px solid rgba(25, 27, 29, 0.18);
  transform: rotate(12deg);
  opacity: 0.8;
`

const RoutePointList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  z-index: 1;
`

const RoutePointButton = styled.button<{ $active?: boolean }>`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: ${(props) => (props.$active ? '#171819' : 'rgba(23, 24, 25, 0.7)')};
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;

  &::before {
    content: '';
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: ${(props) => (props.$active ? '#1a1b1d' : 'rgba(25, 27, 29, 0.36)')};
    box-shadow: 0 0 0 4px rgba(26, 27, 29, 0.08);
  }
`

const StyledPost = styled.div`
  width: 100%;
`

const Post: React.FC<{ post?: IPost }> = ({ post: initialPost }) => {
  const { country } = useParams<{ country: string }>()
  const [post, setPost] = useState<IPost | null>(initialPost || null)
  const [loading, setLoading] = useState(!initialPost)
  const [error, setError] = useState<string | null>(null)
  const [activeSectionId, setActiveSectionId] = useState<string>('')

  const postGalleryFlat = useMemo(() => {
    if (!post?.postGallery) {
      return [] as { src: string }[]
    }

    const flattened = post.postGallery.flat().filter(Boolean)
    return flattened.map((image) => (typeof image === 'string' ? { src: image } : image))
  }, [post])

  const heroImage = post?.imageUrl || postGalleryFlat[0]?.src || 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80'

  useEffect(() => {
    if (initialPost) {
      return
    }

    if (!country) {
      setError('No country provided')
      setLoading(false)
      return
    }

    const fetchPost = async () => {
      try {
        setLoading(true)
        setError(null)
        const fetchedPost = await fetchPostByCountry(country || '')
        setPost(fetchedPost)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load post'
        console.error('Error fetching post:', errorMessage)
        setError(errorMessage)
        setPost(null)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [country, initialPost])

  useEffect(() => {
    if (!post || post.textParagraphs.length === 0) {
      return
    }

    const sections = post.textParagraphs
      .map((_, index) => document.getElementById(`paragraph-${index}`))
      .filter((element): element is HTMLElement => Boolean(element))

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSectionId(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [post])

  if (error) {
    return (
      <StyledPost>
        <div style={{ color: 'red', textAlign: 'center' }}>Error loading post: {error}</div>
      </StyledPost>
    )
  }

  if (loading) {
    return (
      <StyledPost>
        <div style={{ textAlign: 'center' }}>Loading post...</div>
      </StyledPost>
    )
  }

  if (!post) {
    return (
      <StyledPost>
        <div style={{ textAlign: 'center' }}>Post not found</div>
      </StyledPost>
    )
  }

  const tocItems = post.textParagraphs.map((paragraph, index) => ({
    id: `paragraph-${index}`,
    title: paragraph.paragraphLead,
  }))

  const handleSectionClick = (id: string) => {
    setActiveSectionId(id)
    const element = document.getElementById(id)
    if (!element) {
      return
    }

    const top = element.getBoundingClientRect().top + window.scrollY - 110
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const routeLocations = tocItems.map((item, index) => ({
    ...item,
    label: item.title,
    index,
  }))

  return (
    <StyledPostWrapper>
      <HeroSection $backgroundImage={heroImage}>
        <HeroInner>
          <HeroKicker>{post.country.toUpperCase()} / Travel story</HeroKicker>
          <HeroTitle>{post.title}</HeroTitle>
          <HeroMeta>
            <span>{post.author}</span>
            <span>{new Date(post.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
            <span>8 min read</span>
          </HeroMeta>
          <HeroReadMore href="#overview">
            <HeroArrow>↓</HeroArrow>
            <span>Read more</span>
          </HeroReadMore>
        </HeroInner>
      </HeroSection>

      <StyledPostContainer>
        <IntroSection id="overview">
          <IntroMeta>08 min read</IntroMeta>
          <IntroLead>{post.textLead}</IntroLead>
          <LocationPills>
            <LocationPill>{post.country}</LocationPill>
            <LocationPill>{post.subtitle}</LocationPill>
            <LocationPill>{post.continent}</LocationPill>
          </LocationPills>
          <SnapshotCard>
            <SnapshotItem>
              <SnapshotLabel>Duration</SnapshotLabel>
              <SnapshotValue>7 days</SnapshotValue>
            </SnapshotItem>
            <SnapshotItem>
              <SnapshotLabel>Distance</SnapshotLabel>
              <SnapshotValue>1 240 km</SnapshotValue>
            </SnapshotItem>
            <SnapshotItem>
              <SnapshotLabel>Mode</SnapshotLabel>
              <SnapshotValue>Road trip</SnapshotValue>
            </SnapshotItem>
            <SnapshotItem>
              <SnapshotLabel>Season</SnapshotLabel>
              <SnapshotValue>September</SnapshotValue>
            </SnapshotItem>
          </SnapshotCard>
        </IntroSection>

        <ArticleLayout>
          <div>
            <PostTableOfContents items={tocItems} activeId={activeSectionId} onSelect={handleSectionClick} />
            <RoutePanel>
              <RouteTitle>Your route</RouteTitle>
              <RouteMap>
                <RouteLine />
                <RoutePointList>
                  {routeLocations.map((routePoint) => (
                    <RoutePointButton
                      key={routePoint.id}
                      type="button"
                      $active={activeSectionId === routePoint.id}
                      onClick={() => handleSectionClick(routePoint.id)}
                    >
                      {routePoint.label}
                    </RoutePointButton>
                  ))}
                </RoutePointList>
              </RouteMap>
            </RoutePanel>
          </div>

          <ArticleContent>
            {post.textParagraphs.map((paragraph, index) => {
              const sectionId = tocItems[index]?.id ?? `paragraph-${index}`
              const sectionImages = postGalleryFlat.length > 0 && post.postGallery && Array.isArray(post.postGallery[index])
                ? post.postGallery[index].filter(Boolean)
                : postGalleryFlat

              return (
                <StyledPostSection id={sectionId} key={sectionId}>
                  <ArticleHeader>
                    <SectionNumber>{String(index + 1).padStart(2, '0')}</SectionNumber>
                    <SectionTitle>{paragraph.paragraphLead}</SectionTitle>
                  </ArticleHeader>
                  {paragraph.paragraphText.map((textPart: string, textIndex: number) => (
                    <PostParagraph key={`${sectionId}-${textIndex}`} text={textPart} hidden={false} />
                  ))}
                  <PostGallery imagesToDisplay={sectionImages as { src: string }[]} imagesArr={postGalleryFlat} />
                </StyledPostSection>
              )
            })}
          </ArticleContent>
        </ArticleLayout>
      </StyledPostContainer>
    </StyledPostWrapper>
  )
}

export default Post
