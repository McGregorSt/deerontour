import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
  margin: 0;
  font-size: 1.65rem;
  text-transform: capitalize;
  align-self: flex-start;
  padding: 0.1rem 0;
  font-weight: 500;
  font-family: "Alumni Sans Pinstripe", sans-serif;
`

const PostTitle: React.FC<{ title: string }> = ({ title }) => {
  return <StyledTitle as='h3'>{title}</StyledTitle>
}

export default PostTitle
