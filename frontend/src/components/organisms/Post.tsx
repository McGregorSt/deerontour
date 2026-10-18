import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { IPost } from '../../support/types'
import PostParagraph from '../atoms/Post/PostParagraph'
import PostGallery, { IImage } from './PostGallery'
import PostTableOfContents from '../molecules/PostTableOfContents'
import { fetchPostByCountry } from '../../support/api'
import { useI18n } from '../../i18n/I18nContext'
import { continentTranslationKeys } from '../../i18n/translations'

const StyledPostWrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  background: #f8f6f1;
  min-height: 100vh;
  margin-top: 11vh;
`

const HeroSection = styled.header`
  position: relative;
  min-height: 89vh;
  /* width: 100%; */
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  padding: 1.5rem clamp(1rem, 3vw, 3rem) 2.5rem;
  color: #f5f0ea;
`

const HeroBackground = styled.div<{ $backgroundImage: string; $scrollProgress: number }>`
  position: absolute;
  inset: -8% -4% -1% -4%;
  background-image:
    linear-gradient(180deg, rgba(15, 18, 20, 0.15) 0%, rgba(15, 18, 20, 0.7) 100%),
    url(${(props) => props.$backgroundImage});
  background-size: cover;
  /* scale: .58; */
  background-position: center;
  background-repeat: no-repeat;
  transform: translate3d(0, ${(props) => props.$scrollProgress * 56}px, 0)
    scale(${(props) => 1.08 + props.$scrollProgress * 0.04});
  will-change: transform;
`

const HeroInner = styled.div<{ $scrollProgress: number }>`
  position: relative;
  z-index: 1;
  width: min(100%, 1280px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translate3d(0, ${(props) => props.$scrollProgress * 18}px, 0);
  opacity: ${(props) => 1 - props.$scrollProgress * 0.38};
  transition: opacity 0.15s ease-out;
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
  border-radius: 5px;
  box-shadow: 0px 0px 23px 4px rgba(0, 0, 0, 0.01);
  -webkit-box-shadow: 0px 0px 23px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 12px 32px rgba(17, 24, 39, 0.05);
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
  grid-template-columns: 320px minmax(0, 800px);
  gap: 5.5rem;
  align-items: start;
  padding-top: 1rem;

  & > div:first-child {
    align-self: stretch;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ArticleContent = styled.div`
  width: 100%;
`

const ImageTextPair = styled.div<{ $reverse: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: clamp(1rem, 3vw, 3rem);
  margin: 2rem 0 3rem;

  & > :first-child {
    order: ${({ $reverse }) => ($reverse ? 2 : 1)};
  }

  & > :last-child {
    order: ${({ $reverse }) => ($reverse ? 1 : 2)};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;

    & > :first-child,
    & > :last-child {
      order: initial;
    }
  }
`

const PullQuote = styled.blockquote`
  width: min(100%, 920px);
  margin: 4rem auto;
  padding: 0 0 0 1.5rem;
  border-left: 2px solid rgba(25, 27, 29, 0.28);
  color: #262723;
  font-family: 'Darker Grotesque', sans-serif;
  font-size: clamp(2rem, 3.2vw, 3.5rem);
  font-weight: 600;
  line-height: 1.05;

  cite {
    display: block;
    margin-top: 1.2rem;
    font-family: inherit;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 500;
  }
`

const ChapterDivider = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  width: min(100%, 800px);
  margin: 3rem auto 4.5rem;
  color: rgba(25, 27, 29, 0.58);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::after {
    content: '';
    height: 1px;
    background: rgba(25, 27, 29, 0.18);
  }
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
  font-size: 0.86rem;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: rgba(25, 27, 29, 0.55);
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(2.15rem, 3vw, 3.25rem);
  line-height: 0.96;
  letter-spacing: -0.035em;
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

const getPullQuote = (text: string): string | null => {
  const sentence = text.match(/[^.!?]+[.!?]/)?.[0].trim()
  return sentence && sentence.length >= 100 ? sentence : null
}

const getGalleryWidthFactor = (imageCount: number, seed: number): number => {
  const baseWidth = imageCount === 1 ? 1.5 : imageCount === 2 ? 1.3 : imageCount === 3 ? 1.2 : 1.08
  const variation = (((seed * 7) % 5) - 2) * 0.045
  return Math.max(1.05, baseWidth + variation)
}

const Post: React.FC<{ post?: IPost }> = ({ post: initialPost }) => {
  const { country } = useParams<{ country: string }>()
  const { language, t } = useI18n()
  const [post, setPost] = useState<IPost | null>(initialPost || null)
  const [loading, setLoading] = useState(!initialPost)
  const [error, setError] = useState<string | null>(null)
  const [activeSectionId, setActiveSectionId] = useState<string>('')
  const [heroScrollProgress, setHeroScrollProgress] = useState(0)
  const heroRef = useRef<HTMLElement | null>(null)

  const galleryGroups = useMemo(() => {
    return (post?.postGallery ?? [])
      .map((group) =>
        group
          .flat()
          .filter(Boolean)
          .map((image) => (typeof image === 'string' ? { src: image } : image)),
      )
      .filter((group) => group.length > 0)
  }, [post])

  const postGalleryFlat = useMemo(() => galleryGroups.flat(), [galleryGroups])

  const heroImage =
    post?.imageUrl ||
    postGalleryFlat[0]?.src ||
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80'

  useEffect(() => {
    if (initialPost) {
      setPost(initialPost)
      setLoading(false)
      setError(null)
      return
    }

    if (!country) {
      setError(t('post.noCountry'))
      setLoading(false)
      return
    }

    const fetchPost = async () => {
      try {
        setLoading(true)
        setError(null)
        const fetchedPost = await fetchPostByCountry(country || '', language)
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
  }, [country, initialPost, language])

  useEffect(() => {
    const handleHeroScroll = () => {
      if (!heroRef.current) {
        return
      }

      const heroTop = heroRef.current.getBoundingClientRect().top
      const heroHeight = heroRef.current.offsetHeight
      const progress = Math.min(Math.max(-heroTop / Math.max(heroHeight * 0.9, 1), 0), 1)

      setHeroScrollProgress(progress)
    }

    handleHeroScroll()
    window.addEventListener('scroll', handleHeroScroll, { passive: true })
    window.addEventListener('resize', handleHeroScroll)

    return () => {
      window.removeEventListener('scroll', handleHeroScroll)
      window.removeEventListener('resize', handleHeroScroll)
    }
  }, [])

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
        <div style={{ color: 'red', textAlign: 'center' }}>
          {t('post.loadError')} {error}
        </div>
      </StyledPost>
    )
  }

  if (loading) {
    return (
      <StyledPost>
        <div style={{ textAlign: 'center' }}>{t('post.loading')}</div>
      </StyledPost>
    )
  }

  if (!post) {
    return (
      <StyledPost>
        <div style={{ textAlign: 'center' }}>{t('post.notFound')}</div>
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
  const galleryGroupsBySection = Array.from({ length: post.textParagraphs.length }, () => [] as IImage[][])
  galleryGroups.forEach((group, groupIndex) => {
    if (galleryGroupsBySection.length > 0) {
      const sectionIndex = Math.min(
        galleryGroupsBySection.length - 1,
        Math.floor((groupIndex * galleryGroupsBySection.length) / galleryGroups.length),
      )
      galleryGroupsBySection[sectionIndex].push(group)
    }
  })
  const continentKey = continentTranslationKeys[post.continent.toLowerCase()]
  const continentLabel = continentKey ? t(continentKey) : post.continent

  return (
    <StyledPostWrapper>
      <HeroSection ref={heroRef}>
        <HeroBackground
          $backgroundImage={post.hero?.backgroundImage ?? 'asd'}
          $scrollProgress={heroScrollProgress}
        />
        <HeroInner $scrollProgress={heroScrollProgress}>
          <HeroKicker>
            {(post.countryLabel || post.country).toUpperCase()} / {t('post.travelStory')}
          </HeroKicker>
          <HeroTitle>{post.title}</HeroTitle>
          <HeroMeta>
            <span>{post.author}</span>
            <span>
              {new Date(post.createdAt).toLocaleDateString(language === 'PL' ? 'pl-PL' : 'en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </span>
            <span>{post.hero?.readingTime ?? t('post.readingTime')}</span>
          </HeroMeta>
          <HeroReadMore href='#overview'>
            <HeroArrow>↓</HeroArrow>
            <span>{t('post.readMore')}</span>
          </HeroReadMore>
        </HeroInner>
      </HeroSection>

      <StyledPostContainer>
        <IntroSection id='overview'>
          <IntroMeta>{post.hero?.readingTime ?? t('post.readingTime')}</IntroMeta>
          <IntroLead>{post.textLead}</IntroLead>
          <LocationPills>
            <LocationPill>{post.countryLabel || post.country}</LocationPill>
            <LocationPill>{post.subtitle}</LocationPill>
            <LocationPill>{continentLabel}</LocationPill>
          </LocationPills>
          {post.metadata && post.metadata.length > 0 && (
            <SnapshotCard>
              {post.metadata.map((item) => (
                <SnapshotItem key={item.label}>
                  <SnapshotLabel>{item.label}</SnapshotLabel>
                  <SnapshotValue>{item.value}</SnapshotValue>
                </SnapshotItem>
              ))}
            </SnapshotCard>
          )}
        </IntroSection>

        <ArticleLayout>
          <div>
            <PostTableOfContents
              items={tocItems}
              activeId={activeSectionId}
              onSelect={handleSectionClick}
            />
            {/* <RoutePanel>
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
            </RoutePanel> */}
          </div>

          <ArticleContent>
            {post.textParagraphs.map((paragraph, index) => {
              const sectionId = tocItems[index]?.id ?? `paragraph-${index}`
              const sectionGroups = galleryGroupsBySection[index] ?? []
              const textCount = Math.max(paragraph.paragraphText.length, 1)
              const groupsByText = Array.from({ length: textCount }, () => [] as IImage[][])

              sectionGroups.forEach((group, groupIndex) => {
                const textIndex = Math.min(textCount - 1, Math.floor((groupIndex * textCount) / sectionGroups.length))
                groupsByText[textIndex].push(group)
              })

              const pullQuote =
                post.pullQuotes?.[Math.floor(index / 2)] || getPullQuote(paragraph.paragraphText.join(' '))

              return (
                <React.Fragment key={sectionId}>
                  <StyledPostSection id={sectionId}>
                    <ArticleHeader>
                      <SectionNumber>{String(index + 1).padStart(2, '0')}</SectionNumber>
                      <SectionTitle>{paragraph.paragraphLead}</SectionTitle>
                    </ArticleHeader>
                    {paragraph.paragraphText.map((textPart: string, textIndex: number) => {
                      const textImages = groupsByText[textIndex] ?? []
                      const splitImage =
                        textPart.length < 420 ? textImages.find((group) => group.length === 1) : undefined
                      const remainingImages = splitImage
                        ? textImages.filter((group) => group !== splitImage)
                        : textImages

                      return (
                        <React.Fragment key={`${sectionId}-${textIndex}`}>
                          {splitImage ? (
                            <ImageTextPair $reverse={(index + textIndex) % 2 === 1}>
                              <PostGallery
                                imagesToDisplay={splitImage}
                                imagesArr={postGalleryFlat}
                                layout='split'
                              />
                              <PostParagraph
                                text={textPart}
                                hidden={false}
                              />
                            </ImageTextPair>
                          ) : (
                            <PostParagraph
                              text={textPart}
                              hidden={false}
                            />
                          )}
                          {remainingImages.map((imageGroup, groupIndex) => (
                            <PostGallery
                              key={`${sectionId}-${textIndex}-gallery-${groupIndex}`}
                              imagesToDisplay={imageGroup}
                              imagesArr={postGalleryFlat}
                              wide
                              widthFactor={getGalleryWidthFactor(
                                imageGroup.length,
                                index * 11 + textIndex * 5 + groupIndex,
                              )}
                              offsetPercent={
                                ((index * 11 + textIndex * 13 + groupIndex * 17 + post.country.length) % 13) - 6
                              }
                            />
                          ))}
                        </React.Fragment>
                      )
                    })}
                    {paragraph.paragraphText.length === 0 &&
                      sectionGroups.map((imageGroup, groupIndex) => (
                        <PostGallery
                          key={`${sectionId}-gallery-${groupIndex}`}
                          imagesToDisplay={imageGroup}
                          imagesArr={postGalleryFlat}
                          wide
                          widthFactor={getGalleryWidthFactor(imageGroup.length, index * 11 + groupIndex)}
                          offsetPercent={((index * 11 + groupIndex * 17 + post.country.length) % 13) - 6}
                        />
                      ))}
                  </StyledPostSection>
                  {index % 2 === 1 && pullQuote && (
                    <PullQuote>
                      {pullQuote}
                      <cite>{post.author}</cite>
                    </PullQuote>
                  )}
                  {index < post.textParagraphs.length - 1 && (
                    <ChapterDivider>
                      <span>{String(index + 2).padStart(2, '0')}</span>
                      <span>{post.textParagraphs[index + 1].paragraphLead}</span>
                    </ChapterDivider>
                  )}
                </React.Fragment>
              )
            })}
          </ArticleContent>
        </ArticleLayout>
      </StyledPostContainer>
    </StyledPostWrapper>
  )
}

export default Post
