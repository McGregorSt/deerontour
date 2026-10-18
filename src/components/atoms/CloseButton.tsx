import React from 'react'
import closeIcon from '../../assets/share/close.svg'
import styled from 'styled-components'

const StyledCloseButton = styled.div`
  width: 3rem;
  height: 3rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  scale: 0.9;
  padding: 0.7rem;
  /* border-radius: 999px; */
  background-color: transparent;
  transition: background-color 0.1s ease-in;
  background-color: rgba(204, 52, 52, 0.6);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(204, 52, 52, 0.9);
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
