import React from 'react'
import styled from 'styled-components'
import { useI18n } from '../../i18n/I18nContext'
import Photo from '../atoms/Photo'
import { IImage } from './PostGallery'

const StyledSection = styled.section`
  width: min(calc(100% - 3rem), 976px);
  margin: 0 auto;
  padding: 0 0 clamp(4rem, 8vw, 7rem);

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1.25rem 3rem;
  }
`

const StyledHeading = styled.h2`
  margin: 0 0 1.5rem;
  color: #292e30;
  font-family: Georgia, serif;
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  font-weight: 400;
  line-height: 1.2;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.65rem, 1.5vw, 1.25rem);

  & > button {
    min-width: 0;
    min-height: 0;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 6px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    gap: 0.65rem;

    & > button {
      aspect-ratio: 1 / 1;
    }
  }
`

interface PostPhotoGalleryProps {
  images: IImage[]
}

const PostPhotoGallery: React.FC<PostPhotoGalleryProps> = ({ images }) => {
  const { t } = useI18n()

  if (images.length === 0) {
    return null
  }

  return (
    <StyledSection aria-labelledby='post-gallery-title'>
      <StyledHeading id='post-gallery-title'>{t('post.gallery')}</StyledHeading>
      <StyledGrid>
        {images.map((image, index) => (
          <Photo
            key={`${image.src}-${index}`}
            src={image.src}
            images={images}
            startPicIndex={index}
          />
        ))}
      </StyledGrid>
    </StyledSection>
  )
}

export default PostPhotoGallery
