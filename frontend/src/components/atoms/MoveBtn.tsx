import React, { useState } from 'react'
import styled from 'styled-components'
import { IImage } from '../organisms/PostGallery'
import nextIcon from '../../assets/share/arrow.svg'

interface IProps {
  next: boolean
}

const StyledMoveBtn = styled.div<{ next: boolean }>`
  width: 90px;
  height: 90px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  left: ${({ next }) => (next ? '' : '0')};
  right: ${({ next }) => (!next ? '' : '0')};
  transform: ${({ next }) => (next ? '' : 'rotate(180deg)')};
  z-index: 995;
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
