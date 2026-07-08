import React, { useEffect, useState } from 'react'
import UserPage from '../../template/UserPage'
import styled from 'styled-components'
import PostCard from './PostCard'
import Post from './Post'
import { IPost } from '../../support/types'
import Header from '../atoms/Header'
import { useLocation } from 'react-router-dom'
import { BASE_URL } from '../../globals/host'

const StyledToursHomepage = styled.div`
  /* padding: 0 15%; */
  grid-gap: 3vw;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  overflow: no;
  padding-bottom: 3vw;
  padding-top: 3vw;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`
const StyledHeader = styled.div`
  /* padding-left: 30rem; */
`
// const StyledPosts = styled.div`
//   width: 100%;
//   padding-left: 30rem;
// `
const StyledWrapper = styled.div`
  padding-top: 5rem;
`

const StyledRecentPosts = styled.div`
  /* width: 70%; */
  padding: 5rem 20rem 0 20rem;
  /* padding-right: 5rem; */
  display: flex;
  flex-direction: row;
  grid-gap: 3vw;
  justify-content: flex-start;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 3vw;
  padding-top: 3vw;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`
interface ITours {
  onClick: React.MouseEvent<HTMLElement>
}

const RecentPosts = () => {
  // const location = useLocation()
  const [postsData, setPostsData] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`http://${BASE_URL}/blog/tours`, {
        method: 'get',
      })
      const data = await response.json()
      const { posts } = data
      setPostsData(posts)
    }
    fetchPosts()
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
