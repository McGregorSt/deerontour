import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledMapBackground = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 570 / 290;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const StyledMapPoints = styled.div`
  position: absolute;
  inset: 0;
`

interface IProps {
  children: ReactNode
}

const MapBackground: React.FC<IProps> = ({ children }) => (
  <StyledMapBackground>
    <img src='/assets/Dotted World Map.svg' alt='' role='presentation' />
    <StyledMapPoints>{children}</StyledMapPoints>
  </StyledMapBackground>
)

export default MapBackground
