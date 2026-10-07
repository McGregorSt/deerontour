import React, { useState } from 'react'
import styled from 'styled-components'
import { IImage } from '../organisms/PostGallery'
import nextIcon from '../../assets/share/arrow.svg'

interface IProps {
  next: boolean
}

const StyledMoveBtn = styled.div<{ next: boolean }>`
  width: 5rem;
  height: 5rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  left: ${({ next }) => (next ? '' : '0')};
  right: ${({ next }) => (!next ? '' : '0')};
  transform: ${({ next }) => (next ? 'translateX(0)' : 'rotate(180deg) translateX(0)')};
  transition: transform 0.2s ease;
  z-index: 995;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    transform: ${({ next }) => (next ? 'translateX(0.5rem)' : 'rotate(180deg) translateX(0.5rem)')};
  }
`

const MoveBtn: React.FC<{
  next: boolean
  firstPicture: boolean
  lastPicture: boolean
  stateChange: () => void
}> = ({ next, firstPicture, lastPicture, stateChange }) => {
  return (
    <>
      {next ? (
        <StyledMoveBtn
          next={next}
          onClick={() => stateChange()}
        >
          <img
            src={nextIcon}
            alt='nextIcon'
          />
        </StyledMoveBtn>
      ) : (
        <StyledMoveBtn
          next={next}
          onClick={() => stateChange()}
        >
          <img
            src={nextIcon}
            alt='nextIcon'
          />
        </StyledMoveBtn>
      )}
    </>
  )
}

export default MoveBtn
