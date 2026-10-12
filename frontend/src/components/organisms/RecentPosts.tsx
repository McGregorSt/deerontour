import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostCard from './PostCard'
import { IPost } from '../../support/types'
import Header from '../atoms/Header'
import { fetchPosts } from '../../support/api'
import { useI18n } from '../../i18n/I18nContext'

const StyledHeader = styled.div`
  /* padding: 0 1.5rem; */
`

const StyledWrapper = styled.div`
  padding-top: 5rem;
  width:100%;
  margin-left: 5rem;
  
  @media (max-width: 768px) {
    padding-top: 2.5rem;
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
const RecentPosts = () => {
  const { language, t } = useI18n()
  // const location = useLocation()
  const [postsData, setPostsData] = useState<IPost[]>([])
  useEffect(() => {
    const loadPosts = async () => {
      const posts = await fetchPosts(language)
      setPostsData(posts)
    }

    loadPosts()
  }, [language])
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
        <StyledRecentPosts>
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
