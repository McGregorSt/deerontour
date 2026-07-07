import React from 'react'
import styled from 'styled-components'

const StyledPostHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-self: flex-start;
  font-size: 0.65rem;
  font-family: 'Darker Grotesque', sans-serif;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 600;
  
  span {
    padding: 10px 10px;
  }
`

const PostHeader: React.FC<{ author: string; date: string }> = ({ author, date }) => {
  return (
    <StyledPostHeader>
      <span>{author}</span>
      <span>{date}</span>
    </StyledPostHeader>
  )
}

export default PostHeader
