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
  width: 100%;
  flex-direction: column;
  background: #f8f6f1;
  min-height: 100vh;
`

const HeroSection = styled.header`
  position: relative;
  width: min(calc(100% - 3rem), 1440px);
  min-height: clamp(24rem, 42vw, 38rem);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  margin: 0 auto;
  padding: 2rem clamp(1rem, 3vw, 3rem) 3rem;
  color: #f5f0ea;

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    min-height: 0;
    height: auto;
    flex-direction: column;
    align-items: stretch;
    padding: clamp(11rem, 48vw, 14rem) 1.25rem 1rem;
    color: #252a2b;
  }
`

const HeroBackground = styled.div<{ $backgroundImage: string; $scrollProgress: number }>`
  position: absolute;
  inset: -3% -1% -1%;
  background-image:
    linear-gradient(180deg, rgba(15, 18, 20, 0.08) 0%, rgba(15, 18, 20, 0.55) 100%),
    url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: translate3d(0, ${(props) => props.$scrollProgress * 56}px, 0)
    scale(${(props) => 1.08 + props.$scrollProgress * 0.04});
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    will-change: auto;
  }

  @media (max-width: 768px) {
    inset: 0 0 auto;
    height: clamp(11rem, 48vw, 14rem);
    background-image: url(${(props) => props.$backgroundImage});
    transform: none;
  }
`

const HeroInner = styled.div<{ $scrollProgress: number }>`
  position: relative;
  z-index: 1;
  width: min(100%, 1280px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transform: translate3d(0, ${(props) => props.$scrollProgress * 18}px, 0);
  opacity: ${(props) => 1 - props.$scrollProgress * 0.38};
  transition: opacity 0.15s ease-out;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    gap: 0.35rem;
    transform: none;
    opacity: 1;
  }
`

const HeroKicker = styled.p`
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  opacity: 0.9;

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileByline = styled.p`
  display: none;
  margin: 0;
  color: #5b6060;
  font-size: 0.75rem;

  span {
    color: #343a3b;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

const HeroTitle = styled.h1`
  margin: 0;
  max-width: 780px;
  font-size: clamp(3rem, 5.2vw, 5.5rem);
  line-height: 0.94;
  letter-spacing: -0.025em;
  font-family: Georgia, serif;
  font-weight: 400;

  @media (max-width: 768px) {
    color: #252a2b;
    font-size: clamp(1.9rem, 8vw, 2.35rem);
    line-height: 1.1;
  }
`

const HeroMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  color: rgba(245, 240, 234, 0.9);

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileMeta = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    color: #4c504f;
    font-size: 0.63rem;
    letter-spacing: 0.11em;
  }
`

const MobileSubtitle = styled.p`
  display: none;
  margin: 0.35rem 0 0.75rem;
  color: #495052;
  font-size: 1rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    display: block;
  }
`

const StyledPostContainer = styled.div`
  width: min(calc(100% - 3rem), 1220px);
  margin: 0 auto;
  padding: 0 0 4rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`

const IntroSection = styled.section`
  padding: 0 0 1.5rem;
  width: 100%;
`

const IntroLead = styled.p`
  margin: 0;
  color: #4a5051;
  font-size: 1.08rem;
  line-height: 1.65;

  @media (min-width: 769px) {
    max-width: 42rem;
    font-size: 1.18rem;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    padding-bottom: 1.25rem;
    font-size: 0.96rem;
    line-height: 1.6;
  }
`

const ArticleLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 280px) minmax(0, 740px);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
  justify-content: center;
  padding-top: 2rem;

  & > div:first-child {
    align-self: stretch;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(190px, 240px) minmax(0, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-top: 0.75rem;

    & > div:first-child {
      display: none;
    }
  }
`

const ArticleContent = styled.div`
  width: 100%;
  min-width: 0;

  & > p {
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`

const ArticleSidebar = styled.aside`
  display: grid;
  gap: 1.25rem;
  align-content: start;
  position: sticky;
  top: 8rem;
  max-height: calc(100vh - 9rem);
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }
`

const TripDetails = styled.section`
  padding: 1.1rem 1.2rem;
  border: 1px solid rgba(38, 39, 32, 0.1);
  background: rgba(255, 255, 255, 0.48);
`

const TripDetailsTitle = styled.h2`
  margin: 0 0 0.9rem;
  color: #333630;
  font-family: Georgia, serif;
  font-size: 1.05rem;
  font-weight: 400;
`

const TripDetailsList = styled.dl`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  margin: 0;

  div {
    display: grid;
    gap: 0.2rem;
  }

  dt {
    color: #777a72;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    color: #343730;
    font-size: 0.82rem;
    line-height: 1.4;
  }
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
  scroll-margin-top: 8rem;
  margin-bottom: 2.5rem;
`

const ArticleHeader = styled.header`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: baseline;
  gap: 0.55rem;
  margin-bottom: 0.7rem;
`

const SectionNumber = styled.span`
  color: #85877f;
  font-family: Georgia, serif;
  font-size: 1rem;
`

const SectionTitle = styled.h2`
  margin: 0;
  color: #292e30;
  font-family: Georgia, serif;
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  font-weight: 400;
  line-height: 1.25;
`

const StyledPost = styled.div`
  width: 100%;
`

const getPullQuote = (text: string): string | null => {
  const sentence = text.match(/[^.!?]+[.!?]/)?.[0].trim()
  return sentence && sentence.length >= 100 ? sentence : null
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

  const heroImage = post?.hero?.backgroundImage || post?.imageUrl || postGalleryFlat[0]?.src || ''

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
  }, [country, initialPost, language, t])

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
  const dateLabel = new Date(post.createdAt).toLocaleDateString(language === 'PL' ? 'pl-PL' : 'en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
  const durationDays = Math.max(
    1,
    Math.floor((new Date(post.tourEnd).getTime() - new Date(post.tourStart).getTime()) / 86400000) + 1,
  )
  const hasTravelDates = Number.isFinite(new Date(post.tourStart).getTime())
    && Number.isFinite(new Date(post.tourEnd).getTime())
  const metadataHasDuration = Boolean(post.metadata?.some((item) => /duration/i.test(item.label)))
  const metadataHasLocation = Boolean(post.metadata?.some((item) => /location/i.test(item.label)))
  const metadataHasTravelDates = Boolean(post.metadata?.some((item) => /travel dates|date range/i.test(item.label)))

  return (
    <StyledPostWrapper>
      <HeroSection ref={heroRef}>
        <HeroBackground
          $backgroundImage={heroImage}
          $scrollProgress={heroScrollProgress}
        />
        <HeroInner $scrollProgress={heroScrollProgress}>
          <HeroKicker>
            {continentLabel.toUpperCase()} · {(post.countryLabel || post.country).toUpperCase()}
          </HeroKicker>
          <MobileMeta>
            <span>{continentLabel.toUpperCase()}</span>
            <span>·</span>
            <span>{dateLabel}</span>
            <span>·</span>
            <span>{post.hero?.readingTime ?? t('post.readingTime')}</span>
          </MobileMeta>
          <HeroTitle>{post.title}</HeroTitle>
          {post.subtitle && <MobileSubtitle>{post.subtitle}</MobileSubtitle>}
          <HeroMeta>
            <span>{post.hero?.readingTime ?? t('post.readingTime')}</span>
            <span>{dateLabel}</span>
            <span>{t('post.by')} {post.author}</span>
          </HeroMeta>
          <MobileByline>{t('post.by')} <span>{post.author}</span></MobileByline>
        </HeroInner>
      </HeroSection>

      <StyledPostContainer>
        <ArticleLayout>
          <ArticleSidebar>
            <PostTableOfContents
              items={tocItems}
              activeId={activeSectionId}
              onSelect={handleSectionClick}
            />
            {(post.metadata?.length || hasTravelDates) && (
              <TripDetails>
                <TripDetailsTitle>{t('post.tripDetails')}</TripDetailsTitle>
                <TripDetailsList>
                  {hasTravelDates && !metadataHasDuration && (
                    <div>
                      <dt>{t('post.duration')}</dt>
                      <dd>{durationDays} {t('tours.days')}</dd>
                    </div>
                  )}
                  {hasTravelDates && !metadataHasTravelDates && (
                    <div>
                      <dt>{t('post.travelDates')}</dt>
                      <dd>
                        {new Date(post.tourStart).toLocaleDateString(language === 'PL' ? 'pl-PL' : 'en-GB')}
                        {' – '}
                        {new Date(post.tourEnd).toLocaleDateString(language === 'PL' ? 'pl-PL' : 'en-GB')}
                      </dd>
                    </div>
                  )}
                  {!metadataHasLocation && <div>
                    <dt>{t('post.location')}</dt>
                    <dd>{post.countryLabel || post.country}</dd>
                  </div>}
                  {post.metadata?.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </TripDetailsList>
              </TripDetails>
            )}
          </ArticleSidebar>

          <ArticleContent>
            <IntroSection id='overview'>
              <IntroLead>{post.textLead}</IntroLead>
            </IntroSection>
            <PostTableOfContents
              items={tocItems}
              activeId={activeSectionId}
              onSelect={handleSectionClick}
              variant='inline'
            />
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
