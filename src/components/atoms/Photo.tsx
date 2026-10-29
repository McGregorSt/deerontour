import React, { useState } from 'react'
import styled from 'styled-components'
import GalleryCarousel from '../organisms/GalleryCarrousel'
import { IImage } from '../organisms/PostGallery'
import { useI18n } from '../../i18n/I18nContext'

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

const StyledPhoto = styled.button<{ src: string }>`
  display: block;
  padding: 0;
  border: 0;
  background-image: url(${({ src }) => getImageUrl(src)});
  background-size: cover;
  background-position: center;
  min-height: 180px;
  width: 100%;
  border-radius: 4px;
  cursor: zoom-in;

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
  }

  &:hover {
    filter: brightness(0.96);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const Photo: React.FC<Props> = ({ src, images, startPicIndex }) => {
  const [galleryCarousel, setGalleryCarousel] = useState(false)
  const { t } = useI18n()

  const handleClick = () => {
    setGalleryCarousel(true)
  }

  const handleGalleryCarousel = () => {
    setGalleryCarousel(false)
  }

  return (
    <>
      <StyledPhoto
        type='button'
        src={src}
        aria-label={`${t('post.openPhoto')} ${startPicIndex + 1} ${t('post.photoOf')} ${images.length}`}
        onClick={handleClick}
      />
      {galleryCarousel && (
        <GalleryCarousel
          startPicIndex={startPicIndex}
          images={images}
          setGalleryCarousel={handleGalleryCarousel}
        />
      )}
    </>
  )
}

export default Photo
