import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  padding-left: 20rem;
  font-size: 32px;
  text-transform: capitalize;

  font-weight: 600;
  font-family: 'Alumni Sans Pinstripe', sans-serif;
`

const Header: React.FC<{ content: string }> = ({ content }) => {
  return <StyledHeader>{content}</StyledHeader>
}

export default Header
