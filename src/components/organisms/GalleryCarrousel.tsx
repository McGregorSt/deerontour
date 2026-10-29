import React, { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import MoveBtn from '../atoms/MoveBtn'
import { IImage } from './PostGallery'
import CloseButton from '../atoms/CloseButton'
import LargePic from '../atoms/LargePic'
import { useI18n } from '../../i18n/I18nContext'

const StyledCarouselWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #00000059;
  color: white;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(85px);
  align-items: center;
  touch-action: pan-y;
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
  startPicIndex: number
  images: IImage[]
  setGalleryCarousel: () => void
}> = ({ startPicIndex, images, setGalleryCarousel }) => {
  const { t } = useI18n()
  const [nextPictureIndex, setNextPictureIndex] = useState(startPicIndex)
  const touchStartX = useRef<number | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const [lastPicture, setLastPicture] = useState(false)
  const [firstPicture, setFirstPicture] = useState(false)

  const handleState = (next: boolean) => {
    setNextPictureIndex((currentIndex) =>
      Math.max(0, Math.min(images.length - 1, currentIndex + (next ? 1 : -1))),
    )
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLImageElement>) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLImageElement>) => {
    if (touchStartX.current === null) {
      return
    }

    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(distance) >= 50) {
      handleState(distance < 0)
    }
  }

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setGalleryCarousel()
    }
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && !lastPicture) {
        setNextPictureIndex(nextPictureIndex + 1)
      } else if (e.key === 'ArrowLeft' && !firstPicture) {
        setNextPictureIndex(nextPictureIndex - 1)
      } else if (e.key === 'Escape') {
        setGalleryCarousel()
      } else if (e.key === 'Tab') {
        const controls = Array.from(
          overlayRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])') || [],
        ).filter((control) => control.getClientRects().length > 0)
        const firstControl = controls?.[0]
        const lastControl = controls?.[controls.length - 1]

        if (e.shiftKey && document.activeElement === firstControl) {
          e.preventDefault()
          lastControl?.focus()
        } else if (!e.shiftKey && document.activeElement === lastControl) {
          e.preventDefault()
          firstControl?.focus()
        }
      }
    },
    [nextPictureIndex, firstPicture, lastPicture, setGalleryCarousel],
  )

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null
    document.body.style.overflow = 'hidden'
    overlayRef.current?.querySelector<HTMLButtonElement>('[data-lightbox-close]')?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [])

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
          label={t('post.nextPhoto')}
          stateChange={() => handleState(true)}
        />
      )
    } else if (lastPicture) {
      return (
        <MoveBtn
          next={false}
          label={t('post.previousPhoto')}
          stateChange={() => handleState(false)}
        />
      )
    } else {
      return (
        <>
          <MoveBtn
            next={true}
            label={t('post.nextPhoto')}
            stateChange={() => handleState(true)}
          />
          <MoveBtn
            next={false}
            label={t('post.previousPhoto')}
            stateChange={() => handleState(false)}
          />
        </>
      )
    }
  }

  return createPortal(
    <StyledLargePicBackgorund
      ref={overlayRef}
      src={images[nextPictureIndex].src}
      role='dialog'
      aria-modal='true'
      aria-label={t('post.photoViewer')}
      tabIndex={-1}
      onClick={handleBackdropClick}
    >
      <StyledCarouselWrapper onClick={handleBackdropClick}>
        <>{displayButtons(firstPicture, lastPicture)}</>
        <CloseButton label={t('post.closePhoto')} setGalleryCarousel={setGalleryCarousel} />
        <LargePic
          src={images[nextPictureIndex].src}
          alt={`${t('post.openPhoto')} ${nextPictureIndex + 1} ${t('post.photoOf')} ${images.length}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
      </StyledCarouselWrapper>
    </StyledLargePicBackgorund>,
    document.body,
  )
}

export default GalleryCarousel
