import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  padding-left: 1.5rem;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 600;
  font-family: 'Alumni Sans Pinstripe', sans-serif;

  @media (max-width: 768px) {
    padding-left: 1rem;
    font-size: 1.6rem;
  }
`

const Header: React.FC<{ content: string }> = ({ content }) => {
  return <StyledHeader>{content}</StyledHeader>
}

export default Header
