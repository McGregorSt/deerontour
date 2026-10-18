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
    if ($imagesCount === 1) return 'clamp(24rem, 45vw, 38rem)'
    if ($imagesCount === 2) return 'clamp(18rem, 30vw, 28rem)'
    if ($imagesCount === 3) return 'clamp(14rem, 22vw, 20rem)'
    return 'clamp(24rem, 38vw, 32rem)'
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
    $imagesCount === 4 ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)'};
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
      if ($imagesCount === 1) return '24rem'
      if ($imagesCount === 2) return '18rem'
      return '23rem'
    }};

    grid-template-columns: ${({ $imagesCount }) =>
      $imagesCount === 1 ? 'minmax(0, 1fr)' : 'repeat(2, minmax(0, 1fr))'};

    ${({ $imagesCount }) => $imagesCount === 3 && '& > :last-child { grid-column: span 2; }'}
  }
`

const StyledWrapper = styled.div<{ $layout: GalleryLayout; $widthFactor: number; $offsetPercent: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ $layout }) => ($layout === 'split' ? '0' : '2rem 0')};
  width: ${({ $layout, $widthFactor }) =>
    $layout === 'split' ? '100%' : `min(calc(100% * ${$widthFactor}), calc(100vw - 2rem))`};
  margin-left: ${({ $layout }) => ($layout === 'split' ? '0' : '50%')};
  transform: ${({ $layout, $offsetPercent }) =>
    $layout === 'split' ? 'none' : `translateX(calc(-50% + ${$offsetPercent}%))`};

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    transform: none;
  }
`

const PostGallery: React.FC<{
  imagesArr: IImage[]
  imagesToDisplay: IImage[]
  wide?: boolean
  layout?: GalleryLayout
  widthFactor?: number
  offsetPercent?: number
}> = ({ imagesArr, imagesToDisplay, wide = false, layout, widthFactor, offsetPercent = 0 }) => {
  if (!imagesToDisplay.length) {
    return null
  }

  const resolvedLayout = layout ?? 'wide'
  const defaultWidthFactor =
    imagesToDisplay.length === 1 ? 1.5 : imagesToDisplay.length === 2 ? 1.3 : imagesToDisplay.length === 3 ? 1.2 : 1.08

  return (
    <>
      <StyledWrapper
        $layout={resolvedLayout}
        $widthFactor={widthFactor ?? defaultWidthFactor}
        $offsetPercent={offsetPercent}
      >
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
