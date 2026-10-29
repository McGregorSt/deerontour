import React from 'react'
import styled from 'styled-components'

const StyledPostCardPhoto = styled.div`
  & > img {
    object-fit: cover;
    width: 100%;
    height: 20rem;
  }
`

const PostCardPhoto: React.FC<{
  imgSrc: { src: string }[][]
  alt?: string
  fallbackSrc?: string
}> = ({ imgSrc, alt = '', fallbackSrc }) => {
  const imageSrc = imgSrc && imgSrc.length > 0 && imgSrc[0].length > 0 ? imgSrc[0][0] : { src: '' }

  return (
    <StyledPostCardPhoto>
      <img
        src={imageSrc.src}
        alt={alt}
        onError={(event) => {
          if (fallbackSrc && event.currentTarget.getAttribute('src') !== fallbackSrc) {
            event.currentTarget.src = fallbackSrc
          }
        }}
      />
    </StyledPostCardPhoto>
  )
}

export default PostCardPhoto
