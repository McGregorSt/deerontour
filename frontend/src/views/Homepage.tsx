import React from 'react'
import UserPage from '../template/UserPage'
import styled from 'styled-components'
import RecentPosts from '../components/organisms/RecentPosts'
import WorldMap from '../components/molecules/WorldMap'

const StyledHomepage = styled.div``
const StyledLandingPage = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 560px;
  background-image: url('/assets/homepage/IMG_2606.JPG');
  background-size: cover;
  background-repeat: no-repeat;
  scale: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 70vh;
    min-height: 420px;
  }
`

const Home = () => {
  return (
    <UserPage>
      <StyledHomepage>
        <StyledLandingPage />
        <RecentPosts />
        <WorldMap />
      </StyledHomepage>
    </UserPage>
  )
}

export default Home
