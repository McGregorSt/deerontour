import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import MoveBtn from '../atoms/MoveBtn'
import { IImage } from './PostGallery'
import CloseButton from '../atoms/CloseButton'
import LargePic from '../atoms/LargePic'

const StyledCarouselWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #00000059;
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(85px);
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(151, 151, 151, 0.205);
    opacity: 90%;
    z-index: -1;
    border-radius: 8px;
  }
`

const StyledLargePicBackgorund = styled.div<{ src: string }>`
  width: 100vw;
  height: 100vh;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 997;
  color: white;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GalleryCarousel: React.FC<{
  src: string
  startPicIndex: number
  images: IImage[]
  setGalleryCarousel: () => void
}> = ({ src, startPicIndex, images, setGalleryCarousel }) => {
  const [nextPictureIndex, setNextPictureIndex] = useState(startPicIndex)

  const [lastPicture, setLastPicture] = useState(false)
  const [firstPicture, setFirstPicture] = useState(false)

  const handleState = (next: boolean) => {
    next ? setNextPictureIndex(nextPictureIndex + 1) : setNextPictureIndex(nextPictureIndex - 1)
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && !lastPicture) {
        setNextPictureIndex(nextPictureIndex + 1)
      } else if (e.key === 'ArrowLeft' && !firstPicture) {
        setNextPictureIndex(nextPictureIndex - 1)
      } else if (e.key === 'Escape') {
        setGalleryCarousel()
      }
    },
    [nextPictureIndex, firstPicture, lastPicture],
  )

  useEffect(() => {
    if (nextPictureIndex === 0) {
      setFirstPicture(true)
    } else if (nextPictureIndex === images.length - 1) {
      setLastPicture(true)
    } else if (nextPictureIndex !== images.length - 1 && nextPictureIndex !== 0) {
      setFirstPicture(false)
      setLastPicture(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [nextPictureIndex, startPicIndex, images.length, handleKeyDown])

  const displayButtons = (firstPicture: boolean, lastPicture: boolean) => {
    if (firstPicture) {
      return (
        <MoveBtn
          next={true}
          stateChange={() => handleState(true)}
          firstPicture={firstPicture}
          lastPicture={lastPicture}
        />
      )
    } else if (lastPicture) {
      return (
        <MoveBtn
          next={false}
          stateChange={() => handleState(false)}
          firstPicture={firstPicture}
          lastPicture={lastPicture}
        />
      )
    } else {
      return (
        <>
          <MoveBtn
            next={true}
            stateChange={() => handleState(true)}
            firstPicture={firstPicture}
            lastPicture={lastPicture}
          />
          <MoveBtn
            next={false}
            stateChange={() => handleState(false)}
            firstPicture={firstPicture}
            lastPicture={lastPicture}
          />
        </>
      )
    }
  }

  return (
    <StyledLargePicBackgorund src={images[nextPictureIndex].src}>
      <StyledCarouselWrapper>
        <>{displayButtons(firstPicture, lastPicture)}</>
        <CloseButton setGalleryCarousel={setGalleryCarousel} />
        <LargePic
          src={images[nextPictureIndex].src}
          largePic={true}
          setGalleryCarousel={setGalleryCarousel}
        />
      </StyledCarouselWrapper>
    </StyledLargePicBackgorund>
  )
}

export default GalleryCarousel
