// import { Gallery } from "react-grid-gallery";
import React, { useEffect } from 'react'
// import Photo from '../atoms/Photo'
import styled from 'styled-components'

export interface IImage {
  src: string
  width: number
  height: number
  size: string
}

// import React from 'react';
// import styled from 'styled-components';

const CollageContainer = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  margin: 40px auto;
  background-color: #4d553a;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-radius: 12px;
`;

const Photo = styled.img<{ top: number; left: number; rotate?: number }>`
  position: absolute;
  width: 200px;
  height: 140px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  border: 6px solid white;
  border-radius: 8px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  transform: ${({ rotate }) => `rotate(${rotate || 0}deg)`};
`;

const Title = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  font-family: 'Brush Script MT', cursive;
  font-size: 36px;
  color: #d0e58b;
`;

const Label = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 6px 12px;
  font-size: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`;

const photos = [
  { src: 'https://via.placeholder.com/200x140?text=1', top: 30, left: 40, rotate: -5 },
  { src: 'https://via.placeholder.com/200x140?text=2', top: 80, left: 150, rotate: 8 },
  { src: 'https://via.placeholder.com/200x140?text=3', top: 160, left: 80, rotate: -3 },
  { src: 'https://via.placeholder.com/200x140?text=4', top: 230, left: 200, rotate: 4 },
  { src: 'https://via.placeholder.com/200x140?text=5', top: 310, left: 120, rotate: -6 },
  { src: 'https://via.placeholder.com/200x140?text=6', top: 100, left: 300, rotate: 10 },
];

export const PostGalleryCollage: React.FC = () => {
  return (
    <CollageContainer>
      {photos.map((photo, index) => (
        <Photo
          key={index}
          src={photo.src}
          top={photo.top}
          left={photo.left}
          rotate={photo.rotate}
          alt={`Photo ${index + 1}`}
        />
      ))}
      <Title>Photo Collage</Title>
      <Label>Lorem Ipsum Dolor Sit Amet</Label>
    </CollageContainer>
  );
};


export default PostGalleryCollage
