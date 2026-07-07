import React from 'react'
import styled from 'styled-components'

const StyledLead = styled.div`
  font-size: 20px;
  align-self: flex-start;
  padding: 10px 20px;
  font-weight: 600;
`

const PostLead: React.FC<{ leadText: string }> = ({ leadText }) => {
  return <StyledLead>{ leadText }</StyledLead>
}

export default PostLead
