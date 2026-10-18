import React, { useState } from 'react'
import styled from 'styled-components'
import { IImage } from '../organisms/PostGallery'
import nextIcon from '../../assets/share/arrow.svg'

interface IProps {
  next: boolean
}

const StyledMoveBtn = styled.div<{ next: boolean }>`
  width: 3rem;
  height: 3rem;
  padding-left: 0.3rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${({ next }) => (next ? '' : '1rem')};
  right: ${({ next }) => (!next ? '' : '1rem')};
  transform: ${({ next }) => (next ? 'translateX(0)' : 'rotate(180deg) translateX(0)')};
  background-color: rgba(170, 170, 170, 0.2);
  border-radius: 5px;
  transition: transform 0.1s ease;
  z-index: 995;
  cursor: pointer;

  img {
    scale: 0.6;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    transform: ${({ next }) => (next ? 'translateX(0.1rem)' : 'rotate(180deg) translateX(0.1rem)')};
    background-color: rgba(170, 170, 170, 0.25);
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
