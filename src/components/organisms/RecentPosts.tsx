import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostCard from './PostCard'
import { IPost } from '../../support/types'
import Header from '../atoms/Header'
import { fetchPosts } from '../../support/api'
import { useI18n } from '../../i18n/I18nContext'
import ArrowRight from '../atoms/ArrowRight'

const StyledHeader = styled.div`
  /* padding: 0 1.5rem; */
`

const StyledPostsViewport = styled.div`
  position: relative;
`

const StyledWrapper = styled.div`
  padding-top: 5rem;
  width: calc(100% - 5rem);
  margin-left: 5rem;
  
  @media (max-width: 768px) {
    padding-top: 2.5rem;
    width: calc(100% - 1rem);
    margin-left: 1rem;
  }
`

const StyledRecentPosts = styled.div`
    padding: 2rem 1.5rem 3rem;
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: flex-start;
    overflow-x: auto;
    white-space: nowrap;
    align-items: stretch;
    /* width: 80%; */
    margin-right: 1rem;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    @media (max-width: 768px) {
      padding: 1rem 1rem 2rem;
      flex-direction: row;
      white-space: nowrap;
      overflow-x: auto;
      gap: 1rem;
    }
`

const StyledScrollButton = styled.button<{ $previous: boolean }>`
  position: absolute;
  top: 100%;
  ${({ $previous }) => ($previous ? 'left: 1.5rem;' : 'right: 1.5rem;')}
  z-index: 991;
  display: flex;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border: 0;
  border-radius: 50%;
  background: rgba(253, 183, 30, 0.99);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transform: translateY(-50%);

  svg {
    width: 100%;
    height: 100%;
    ${({ $previous }) => $previous && 'transform: rotate(180deg);'}
  }

  &:hover {
    background: rgba(253, 183, 30, 0.7);
  }

  &:focus-visible {
    outline: 2px solid #555;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    ${({ $previous }) => ($previous ? 'left: 0.75rem;' : 'right: 0.75rem;')}
  }
`

const RecentPosts = () => {
  const { language, t } = useI18n()
  // const location = useLocation()
  const [postsData, setPostsData] = useState<IPost[]>([])
  const [hasMorePosts, setHasMorePosts] = useState(false)
  const [hasPreviousPosts, setHasPreviousPosts] = useState(false)
  const postsRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await fetchPosts(language)
      setPostsData(posts)
    }

    loadPosts()
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

  // const isHomepage = location.pathname === '/'

  const sortedPostsByTime = [...postsData].sort((a: IPost, b: IPost) => {
    const dateA = new Date(a.createdAt).getTime()
    const dateB = new Date(b.createdAt).getTime()

    return dateB - dateA
  })

  return (
    <>
      {/* {isHomepage ? ( */}
      <StyledWrapper>
        <StyledHeader>
          <Header content={t('home.recentPosts')} />
        </StyledHeader>
        {/* <StyledPosts> */}
        <StyledPostsViewport>
          <StyledRecentPosts ref={postsRef} onScroll={updateScrollState}>
            <>
              {sortedPostsByTime.map(
                (post: IPost, index: number) =>
                  postsData && (
                    <PostCard
                      key={index}
                      post={post}
                    />
                  ),
              )}
            </>
          </StyledRecentPosts>
          {hasPreviousPosts && (
            <StyledScrollButton
              type='button'
              $previous
              aria-label={t('home.scrollRecentPostsBack')}
              onClick={() => scrollPosts('previous')}
            >
              <ArrowRight />
            </StyledScrollButton>
          )}
          {hasMorePosts && (
            <StyledScrollButton
              type='button'
              $previous={false}
              aria-label={t('home.scrollRecentPosts')}
              onClick={() => scrollPosts('next')}
            >
              <ArrowRight />
            </StyledScrollButton>
          )}
        </StyledPostsViewport>
        {/* </StyledPosts> */}
      </StyledWrapper>
      {/* ) : (
        <UserPage>
          <Header content='Recent posts' />
          <StyledRecentPosts>
            <>
              {postsData.map(
                (post: IPost, index: number) =>
                  postsData && (
                    <PostCard
                      key={index}
                      post={post}
                    />
                  ),
              )}
            </>
          </StyledRecentPosts>
        </UserPage>
      )} */}
    </>
  )
}

export default RecentPosts
