import React, { useState } from 'react'
import styled from 'styled-components'
import MoveBtn from './MoveBtn'
import CloseButton from './CloseButton'

const StyledLargePicBackgorund = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);

  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 997;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledLargePic = styled.div<{ src: string }>`
  width: 90vw;
  height: 90vh;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  z-index: 999;
`

const LargePic: React.FC<{ src: string; largePic: boolean; setGalleryCarousel: () => void }> = ({
  src,
  largePic,
  setGalleryCarousel,
}) => {
  const [closePic, setClosePic] = useState(false)
  const handleClick = (e: React.MouseEvent) => {
  }
  return !largePic && closePic ? (
    <></>
  ) : (
    <>
      <StyledLargePic src={src} />
    </>
  )
}

export default LargePic
