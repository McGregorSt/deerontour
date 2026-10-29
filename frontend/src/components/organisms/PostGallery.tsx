import React from 'react'
import Photo from '../atoms/Photo'
import styled from 'styled-components'

export interface IImage {
  src: string
}

type GalleryLayout = 'wide' | 'split'

const StyledGalleryGrid = styled.div<{ $imagesCount: number; $layout: GalleryLayout }>`
  width: 100%;
  height: ${({ $imagesCount, $layout }) => {
    if ($layout === 'split') return '22rem'
    if ($imagesCount === 1) return 'clamp(13rem, 28vw, 22rem)'
    if ($imagesCount === 2) return 'clamp(12rem, 22vw, 17rem)'
    if ($imagesCount === 3) return 'clamp(11rem, 18vw, 14rem)'
    return 'clamp(16rem, 28vw, 22rem)'
  }};
  display: grid;
  grid-template-columns: ${({ $imagesCount }) => {
    if ($imagesCount === 1) return 'minmax(0, 1fr)'
    if ($imagesCount === 2) return 'repeat(2, minmax(0, 1fr))'
    if ($imagesCount === 3) return '1.15fr 0.85fr 1.1fr'
    if ($imagesCount === 4) return 'repeat(2, minmax(0, 1fr))'
    return 'repeat(3, minmax(0, 1fr))'
  }};
  grid-template-rows: ${({ $imagesCount }) =>
    $imagesCount >= 4 ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)'};
  gap: clamp(0.5rem, 1.2vw, 1rem);
  cursor: pointer;

  & > * {
    min-width: 0;
    min-height: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (max-width: 768px) {
    height: ${({ $imagesCount, $layout }) => {
      if ($layout === 'split') return '18rem'
      if ($imagesCount === 1) return 'clamp(12rem, 56vw, 17rem)'
      if ($imagesCount === 2) return 'clamp(11rem, 48vw, 14rem)'
      return 'clamp(12rem, 58vw, 18rem)'
    }};

    grid-template-columns: ${({ $imagesCount }) =>
      $imagesCount === 1 ? 'minmax(0, 1fr)' : 'repeat(2, minmax(0, 1fr))'};

    ${({ $imagesCount }) => $imagesCount === 3 && '& > :last-child { grid-column: span 2; }'}
  }
`

const StyledWrapper = styled.div<{ $layout: GalleryLayout }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ $layout }) => ($layout === 'split' ? '0' : '0.5rem 0 1.5rem')};
  width: 100%;
  margin-left: 0;
  transform: none;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    transform: none;
  }
`

const PostGallery: React.FC<{
  imagesArr: IImage[]
  imagesToDisplay: IImage[]
  layout?: GalleryLayout
}> = ({ imagesArr, imagesToDisplay, layout }) => {
  if (!imagesToDisplay.length) {
    return null
  }

  const resolvedLayout = layout ?? 'wide'
  return (
    <>
      <StyledWrapper $layout={resolvedLayout}>
        <StyledGalleryGrid $imagesCount={imagesToDisplay.length} $layout={resolvedLayout}>
          {imagesToDisplay.map((image: IImage, index: number) => {
            const startPicIndex = imagesArr.flat().indexOf(imagesToDisplay[index])
            return (
              <Photo
                images={imagesArr}
                startPicIndex={startPicIndex}
                key={`${image.src}-${index}`}
                src={image.src}
              />
            )
          })}
        </StyledGalleryGrid>
      </StyledWrapper>
    </>
  )
}

export default PostGallery
