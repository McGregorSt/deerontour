import React from 'react'
import styled from 'styled-components'
import ArrowRight from '../ArrowRight'

const StyledArrow = styled.div<{ mouseEnter: boolean }>`
  position: absolute;
  bottom: 0.1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  z-index: 5;

  transition: transform 150ms ease;

  &:hover {
    transform: ${(props) => (props.mouseEnter ? 'translateX(5px)' : 'translateX(0)')};
  }

  & > * {
    width: 30px;
    height: 30px;
  }
`

const PostForwardArrow: React.FC<{ mouseEnter: boolean }> = ({ mouseEnter }) => {
  return (
    <StyledArrow mouseEnter={mouseEnter}>
      <ArrowRight />
    </StyledArrow>
  )
}

export default PostForwardArrow
