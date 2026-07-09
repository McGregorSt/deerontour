import React from 'react'
import Photo from '../atoms/Photo'
import styled from 'styled-components'

export interface IImage {
  src: string
}

const StyledGalleryGrid = styled.div<{ imagesCount: number }>`
  width: min(100%, 40vw);
  height: 35rem;
  display: grid;
  grid-template-columns: repeat(${(props) => props.imagesCount}, minmax(0, 1fr));
  gap: 2%;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 100%;
    height: 24rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 18rem;
  }

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
