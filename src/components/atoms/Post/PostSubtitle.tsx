import React from 'react'
import styled from 'styled-components'

const StyledSubtitle = styled.div`
  margin: 0;
  color: #55564f;
  font-size: 0.9rem;
  text-transform: capitalize;
  align-self: flex-start;
  padding: 0;
  font-weight: 500;
  font-family: "Alumni Sans Pinstripe", sans-serif;
`

const PostSubtitle: React.FC<{ title: string }> = ({ title }) => {
  return <StyledSubtitle as='p'>{title}</StyledSubtitle>
}

export default PostSubtitle
