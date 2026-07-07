import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
  font-size: 2rem;
  text-transform: capitalize;
  align-self: flex-start;
  padding: 5px 20px 0px;
  font-weight: 400;
  font-family: "Alumni Sans Pinstripe", sans-serif;
`

const PostTitle: React.FC<{ title: string }> = ({ title }) => {
  return <StyledTitle>{ title }</StyledTitle>
}

export default PostTitle
