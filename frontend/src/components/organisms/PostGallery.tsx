import React from 'react'
import Photo from '../atoms/Photo'
import styled from 'styled-components'

export interface IImage {
  src: string
}

const StyledGalleryGrid = styled.div<{ imagesCount: number }>`
  width: 40vw;
  height: 35rem;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.imagesCount}, minmax(${props.imagesCount}vw, 1fr))`};
  grid-template-rows: ${(props) => `repeat(${props.imagesCount}, minmax(1fr, 1fr))`};
  gap: 2%;
  cursor: pointer;

  & > * {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  & > img {
  }
`

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`

const PostGallery: React.FC<{ imagesArr: IImage[]; imagesToDisplay: IImage[] }> = ({ imagesArr, imagesToDisplay }) => {
  if (!imagesToDisplay.length) {
    return null
  }

  return (
    <>
      <StyledWrapper>
        <StyledGalleryGrid imagesCount={imagesToDisplay.length}>
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
