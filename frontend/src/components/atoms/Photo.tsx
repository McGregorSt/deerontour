import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GalleryCarousel from '../organisms/GalleryCarrousel'
import { IImage } from '../organisms/PostGallery'

interface Props {
  src: string
  key: string
  images: IImage[]
  startPicIndex: number
}

const getImageUrl = (src: string): string => {
  if (!src || !src.trim()) {
    return ''
  }

  const normalized = src.trim()
  const publicUrl = process.env.PUBLIC_URL || ''

  // Jeśli już ma PUBLIC_URL, zwróć bez zmian
  if (publicUrl && normalized.startsWith(publicUrl)) {
    return normalized
  }

  // Jeśli to URL bezwzględny (http, https, data, //), zwróć bez zmian
  if (
    normalized.startsWith('http://') ||
    normalized.startsWith('https://') ||
    normalized.startsWith('data:') ||
    normalized.startsWith('//')
  ) {
    return normalized
  }

  // Dodaj PUBLIC_URL do ścieżek lokalnych
  const path = normalized.startsWith('/') ? normalized : `/${normalized}`
  return `${publicUrl}${path}`
}

const StyledPhoto = styled.div<{ src: string }>`
  border: 1px solid #aaa;
  background-image: url(${({ src }) => getImageUrl(src)});
  background-size: cover;
  background-position: center;
  min-height: 180px;
  width: 100%;

  &:hover {
    transform: scale(1.005);
    cursor: pointer;
    border: 1px solid #999;
    transition-duration: 200ms;
  }
  &:not(:hover) {
    transition-duration: 100ms;
  }
`

const Photo: React.FC<Props> = ({ src, images, startPicIndex }) => {
  const [galleryCarousel, setGalleryCarousel] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    setGalleryCarousel(true)
  }

  const handleGalleryCarousel = () => {
    setGalleryCarousel(false)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setGalleryCarousel(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  return galleryCarousel ? (
    (console.log('startPicIndex:', startPicIndex),
    (
      <>
        <GalleryCarousel
          src={src}
          startPicIndex={startPicIndex}
          images={images}
          setGalleryCarousel={handleGalleryCarousel}
        />
        <StyledPhoto
          src={src}
        />
      </>
    ))
  ) : (
    <StyledPhoto
      // imagesize={imagesize}
      src={src}
      onClick={handleClick}
    />
  )
}

export default Photo
