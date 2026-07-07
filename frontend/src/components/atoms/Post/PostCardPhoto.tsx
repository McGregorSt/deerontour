import React from 'react'
import styled from 'styled-components'

const StyledPostCardPhoto = styled.div`
  & > img {
    object-fit: cover;
    width: 100%;
    height: 20rem;
  }
`

const PostCardPhoto: React.FC<{ imgSrc: {src: string}[][] }> = ({ imgSrc }) => {
  // console.log('cardphoto', imgSrc[0][0].src)
  // const imageUrl = typeof imgSrc === 'string' ? imgSrc : imgSrc[0]?.[0] ?? ''

  const imageSrc = imgSrc && imgSrc.length > 0 && imgSrc[0].length > 0 ? imgSrc[0][0] : {src: ''}

  return (
    <StyledPostCardPhoto>
      <img
        src={imageSrc.src}
        // src={`${process.env.PUBLIC_URL}${imgSrc}`}
        alt='alt'
        // width={200}
        // height={200}
      />
    </StyledPostCardPhoto>
  )
}

export default PostCardPhoto
