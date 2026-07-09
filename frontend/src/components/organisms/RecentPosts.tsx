import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostCard from './PostCard'
import { IPost } from '../../support/types'
import Header from '../atoms/Header'
import { fetchPosts } from '../../support/api'

const StyledHeader = styled.div`
  padding: 0 1.5rem;
`

const StyledWrapper = styled.div`
  padding-top: 5rem;
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 2.5rem;
  }
`

const StyledRecentPosts = styled.div`
  padding: 2rem 1.5rem 3rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: flex-start;
  overflow-x: auto;
  white-space: nowrap;
  align-items: stretch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem 2rem;
    flex-direction: column;
    white-space: normal;
    overflow-x: visible;
  }
`
const RecentPosts = () => {
  // const location = useLocation()
  const [postsData, setPostsData] = useState<IPost[]>([])
  useEffect(() => {
    const loadPosts = async () => {
      const posts = await fetchPosts()
      setPostsData(posts)
    }

    loadPosts()
  }, [])
  // const isHomepage = location.pathname === '/'

  const sortedPostsByTime = [...postsData].sort((a: IPost, b: IPost) => {
    const dateA = new Date(a.tourEnd).getTime()
    const dateB = new Date(b.tourEnd).getTime()

    return dateB - dateA
  })

  return (
    <>
      {/* {isHomepage ? ( */}
      <StyledWrapper>
        <StyledHeader>
          <Header content='Recent posts' />
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
