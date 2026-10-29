import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PostCard from './PostCard'
import { IPost } from '../../support/types'
import { fetchPosts } from '../../support/api'
import { useI18n } from '../../i18n/I18nContext'
import ArrowRight from '../atoms/ArrowRight'

const StyledWrapper = styled.section`
  width: min(calc(100% - clamp(1.25rem, 5.5vw, 5rem) * 2), 1440px);
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) 0 clamp(3.5rem, 8vw, 7rem);
`

const StyledHeader = styled.div`
  margin-bottom: 0.5rem;

  h2 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: clamp(2.2rem, 4vw, 3.25rem);
    font-weight: 400;
    line-height: 1;
  }
`

const StyledPostsViewport = styled.div`
  position: relative;
`

const StyledRecentPosts = styled.div`
  display: flex;
  align-items: stretch;
  gap: clamp(1rem, 2vw, 1.75rem);
  overflow-x: auto;
  padding: 1.25rem 0 1.75rem;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: start;
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`

const StyledScrollButton = styled.button<{ $previous: boolean }>`
  position: absolute;
  top: -3.4rem;
  ${({ $previous }) => ($previous ? 'right: 3.25rem;' : 'right: 0;')}
  z-index: 1;
  display: grid;
  width: 2.4rem;
  height: 2.4rem;
  place-items: center;
  padding: 0.55rem;
  border: 1px solid #d5d4ce;
  border-radius: 50%;
  background: transparent;
  color: #33342d;
  cursor: pointer;
  transition: background-color 180ms ease, opacity 180ms ease;

  svg {
    width: 100%;
    height: 100%;
    ${({ $previous }) => $previous && 'transform: rotate(180deg);'}
  }

  &:hover:not(:disabled) {
    background: #e7e5df;
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    top: -3.15rem;
    width: 2.15rem;
    height: 2.15rem;
  }
`

const StyledMessage = styled.p`
  color: #77776f;
`

const RecentPosts = () => {
  const { language, t } = useI18n()
  const [postsData, setPostsData] = useState<IPost[]>([])
  const [hasMorePosts, setHasMorePosts] = useState(false)
  const [hasPreviousPosts, setHasPreviousPosts] = useState(false)
  const [error, setError] = useState(false)
  const postsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let active = true
    fetchPosts(language)
      .then((posts) => {
        if (active) {
          setPostsData(posts)
          setError(false)
        }
      })
      .catch((fetchError: unknown) => {
        console.error('Error fetching recent posts:', fetchError)
        if (active) setError(true)
      })

    return () => {
      active = false
    }
  }, [language])

  const updateScrollState = () => {
    const postsElement = postsRef.current
    if (postsElement) {
      setHasPreviousPosts(postsElement.scrollLeft > 1)
      setHasMorePosts(postsElement.scrollLeft + postsElement.clientWidth < postsElement.scrollWidth - 1)
    }
  }

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
    return () => window.removeEventListener('resize', updateScrollState)
  }, [postsData])

  const scrollPosts = (direction: 'next' | 'previous') => {
    const postsElement = postsRef.current
    if (postsElement) {
      const distance = postsElement.clientWidth * 0.8
      postsElement.scrollBy({ left: direction === 'next' ? distance : -distance, behavior: 'smooth' })
    }
  }

  const sortedPostsByTime = [...postsData].sort(
    (first, second) => new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime(),
  )

  return (
    <StyledWrapper aria-labelledby='recent-posts-title'>
      <StyledHeader>
        <h2 id='recent-posts-title'>{t('home.recentPosts')}</h2>
      </StyledHeader>
      {error ? (
        <StyledMessage role='alert'>{t('home.recentPostsError')}</StyledMessage>
      ) : (
        <StyledPostsViewport>
          <StyledRecentPosts ref={postsRef} onScroll={updateScrollState} aria-label={t('home.recentPosts')}>
            {sortedPostsByTime.map((post) => <PostCard key={post.id} post={post} />)}
          </StyledRecentPosts>
          <StyledScrollButton
            type='button'
            $previous
            aria-label={t('home.scrollRecentPostsBack')}
            disabled={!hasPreviousPosts}
            onClick={() => scrollPosts('previous')}
          >
            <ArrowRight />
          </StyledScrollButton>
          <StyledScrollButton
            type='button'
            $previous={false}
            aria-label={t('home.scrollRecentPosts')}
            disabled={!hasMorePosts}
            onClick={() => scrollPosts('next')}
          >
            <ArrowRight />
          </StyledScrollButton>
        </StyledPostsViewport>
      )}
    </StyledWrapper>
  )
}

export default RecentPosts
