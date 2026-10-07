import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface LogoProps {
  large: boolean
}

const StyledWrapper = styled.div`
  * {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #23251a;
  }
  text-decoration: none;
`
const StyledLogo = styled.div<{ $large: boolean }>`
  /* border: 2px solid red; */
  /* display: block; */
  width: ${({ $large }) => ($large ? '9rem' : '5rem')};
  height: ${({ $large }) => ($large ? '12rem' : '7rem')};
  background-image: url('/assets/logoDeer.png');
  background-size: contain;
  background-repeat: no-repeat;

  /* @media (max-width: 768px) {
    width: 26vw;
  } */
`
const StyledNameWrapper = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  @media (max-width: 768px) {
    width: 46vw;
    /* border: 2px solid red; */
  }
  @media (max-width: 480px) {
  }
  `

const StyledName = styled.div`
  /* width: 10vw; */
  font-family: 'underground', sans-serif;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
  /* border: 2px solid blue; */
  @media (max-width: 768px) {
    font-size: 1.4rem;
    /* border: 2px solid red; */
  }
  `

const StyledDesc = styled.div`
  font-family:
  apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
  'Helvetica Neue', sans-serif;
  font-size: 1rem;
  color: #23251a;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-weight: 100;
  /* transform: scaleX(1.1);
  transform-origin: left; */
`

const Logo: React.FC<LogoProps> = ({ large }) => {
  return (
    <StyledWrapper>
      <Link
        key='1'
        to='/'
      >
        <StyledLogo $large={large}></StyledLogo>
        <StyledNameWrapper>
          <StyledName>Deer On Tour</StyledName>
          <StyledDesc>travel blog</StyledDesc>
        </StyledNameWrapper>
      </Link>
    </StyledWrapper>
  )
}

export default Logo
