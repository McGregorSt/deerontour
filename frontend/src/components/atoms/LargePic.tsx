import React from 'react'
import styled from 'styled-components'
 
const StyledLargePic = styled.img`
  display: block;
  width: auto;
  height: auto;
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  z-index: 999;
  touch-action: pan-y;
`

const LargePic: React.FC<{
  src: string
  onTouchStart: React.TouchEventHandler<HTMLImageElement>
  onTouchEnd: React.TouchEventHandler<HTMLImageElement>
}> = ({ src, onTouchStart, onTouchEnd }) => (
  <StyledLargePic src={src} alt='' onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} />
)

export default LargePic
