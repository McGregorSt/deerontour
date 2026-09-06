import React, { useEffect, useState } from 'react'
import UserPage from '../../template/UserPage'
import styled from 'styled-components'
import PostCard from './PostCard'
import Post from './Post'
import { IPost } from '../../support/types'
import Header from '../atoms/Header'
import { useLocation } from 'react-router-dom'
import Continents from '../molecules/Continents'
import WorldMap from '../molecules/WorldMap'

const StyledToursHomepage = styled.div`
  padding: 0 15%;
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
  /* padding: 0 1.5rem; */
`
const StyledWrapper = styled.div`
  width: 90vw;
  margin-top: 15vh;
  margin-left: 5vw;
  /* margin-right: 5vw; */

  @media (max-width: 768px) {
    /* padding-top: 2.5rem; */
    margin-top: 13vh;
    margin-left: 1rem;
  }
`

const StyledRecentPosts = styled.div`

  padding: 2rem 0rem 3rem 0rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: flex-start;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    /* width: 95vw; */
    padding: 1rem 1rem 2rem;
    flex-direction: row;
    white-space: nowrap;
    overflow-x: auto;
    gap: 2rem;

    & * {
      font-size: 1.5rem;
    }
  }
`
interface ITours {
  onClick: React.MouseEvent<HTMLElement>
}

const Tours = () => {
  const location = useLocation()
  const [postsData, setPostsData] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/blog/tours`, {
        method: 'get',
      })
      const data = await response.json()
      const { posts } = data
      setPostsData(posts)
    }
    fetchPosts()
  }, [])

  const isHomepage = location.pathname === '/'

  const sortedPostsByTime = [...postsData].sort((a: IPost, b: IPost) => {
    const dateA = new Date(a.tourEnd).getTime()
    const dateB = new Date(b.tourEnd).getTime()

    return dateB - dateA
  })

  return (
    <UserPage>
      <>
        <StyledWrapper>
          <StyledHeader>
            <Header content='Our tours by continents:' />
          </StyledHeader>
          <StyledRecentPosts>
            <Continents
              continents={['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica']}
            />
            {/* <WorldMap  /> */}
          </StyledRecentPosts>
        </StyledWrapper>
      </>
    </UserPage>

    // <UserPage>
    //   <Header content='Recent posts' />
    //   <StyledRecentPosts>
    //     <>
    //       TOURS
    //       {postsData.map(
    //         (post: IPost, index: number) =>
    //           postsData && (
    //             <PostCard
    //               key={index}
    //               post={post}
    //             />
    //           ),
    //       )}
    //     </>
    //   </StyledRecentPosts>
    // </UserPage>
  )
}

export default Tours
