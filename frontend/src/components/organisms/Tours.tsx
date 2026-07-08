import React, { useEffect, useState } from 'react'
import UserPage from '../../template/UserPage'
import styled from 'styled-components'
import PostCard from './PostCard'
import Post from './Post'
import { IPost } from '../../support/types'
import Header from '../atoms/Header'
import { useLocation } from 'react-router-dom'
import Continents from '../molecules/Continents'
import { BASE_URL } from '../../globals/host'

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
const StyledRecentPosts = styled.div`
  padding: 0 15%;
  grid-gap: 3vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  justify-content: center;
  overflow-x: auto;
  white-space: nowrap;
  /* overflow: no; */
  padding-bottom: 3vw;
  padding-top: 3vw;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
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
      const response = await fetch(`http://${BASE_URL}/blog/tours`, {
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
      <Header content='By Continents:' />
      <StyledRecentPosts>
        <>
          <Continents continents={['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica']} />
        </>
      </StyledRecentPosts>
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
