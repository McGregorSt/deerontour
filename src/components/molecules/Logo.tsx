import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface LogoProps {
  large: boolean
}

const StyledLogo = styled.div<{ $large: boolean }>`
  /* display: block; */
  width: ${({ $large }) => ($large ? '36rem' : '18rem')};
  height: ${({ $large }) => ($large ? '12rem' : '7rem')};
  margin: 0;
  padding: 0;
  background-image: url('/assets/logo4.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  /* scale: ${({ $large }) => ($large ? '0.9' : '0.9')}; */

  @media (max-width: 768px) {
    width: 8rem;
    height: 2.5rem;
    scale: 0.4;
  }

  @media (max-width: 480px) {
    width: 7rem;
    height: 2.2rem;
    scale: 0.6;
  }
`

const Logo: React.FC<LogoProps> = ({ large }) => {
  return (
    <StyledLogo $large={large}>
      <Link
        key='1'
        to='/'
      >
        {/* <img
          src='/assets/logo4.png'
          alt='logo'
        /> */}
      </Link>
    </StyledLogo>
  )
}

export default Logo
