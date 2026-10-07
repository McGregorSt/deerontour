import React from 'react'
import closeIcon from '../../assets/share/close.svg'
import styled from 'styled-components'

const StyledCloseButton = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    scale: 0.6;
    padding: 0.7rem;
    /* border-radius: 999px; */
    background-color: transparent;
    transition: background-color 0.1s ease-in;

    &:hover {
      background-color: rgba(204, 52, 52, 0.719);
      /* transform: scale(1.04); */
    }
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
