import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface LogoProps {
  large: boolean
}

const StyledLogo = styled.div<{ $large: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  scale: ${({ $large }) => ($large ? '0.7' : '0.3')};

  @media (max-width: 768px) {
    scale: 0.4;
  }

  @media (max-width: 480px) {
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
        <img
          src='/assets/logo4.png'
          alt='logo'
        />
      </Link>
    </StyledLogo>
  )
}

export default Logo
