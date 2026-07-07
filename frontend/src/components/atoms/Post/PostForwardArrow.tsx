import React from 'react'
import styled from 'styled-components'
import ArrowRight from '../ArrowRight'

const StyledArrow = styled.div`
  position: absolute;
  bottom: 0.1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  z-index: 5;

  & > * {
    width: 30px;
    height: 30px;
  }
`

const PostForwardArrow = () => {
  return (
    <StyledArrow>
      <ArrowRight />
    </StyledArrow>
  )
}

export default PostForwardArrow
