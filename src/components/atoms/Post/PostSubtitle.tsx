import React from 'react'
import styled from 'styled-components'

const StyledSubtitle = styled.div`
  font-size: 1.2rem;
  text-transform: capitalize;
  align-self: flex-start;
  padding: 0px 20px ;
  font-weight: 500;
  font-family: "Alumni Sans Pinstripe", sans-serif;
`

const PostSubtitle: React.FC<{ title: string }> = ({ title }) => {
  return <StyledSubtitle>{ title }</StyledSubtitle>
}

export default PostSubtitle
