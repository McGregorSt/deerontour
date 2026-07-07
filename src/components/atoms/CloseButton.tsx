import React from 'react'
import closeIcon from '../../assets/share/close.svg'
import styled from 'styled-components'

const StyledCloseButton = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    scale: 0.6;

`

const CloseButton: React.FC<{ setGalleryCarousel: () => void }> = ({ setGalleryCarousel }) => {
  return (
    <StyledCloseButton onClick={() => setGalleryCarousel()}>
      <img
        src={closeIcon}
        alt='closeIcon'
      />
    </StyledCloseButton>
  )
}

export default CloseButton
