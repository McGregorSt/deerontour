import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledMapBackground = styled.div`
  display: flex;
  justify-content: center;
`
interface IProps {
  children: ReactNode
}

const MapBackground: React.FC<IProps> = ({ children }) => {
  return (
    <StyledMapBackground>
      <img src='/assets/Dotted World Map.svg' alt='mapp' />
      <div>{children}</div>
    </StyledMapBackground>
  )
}

export default MapBackground
