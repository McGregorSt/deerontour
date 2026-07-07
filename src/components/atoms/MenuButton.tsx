import React from 'react'
import styled from 'styled-components'

const StyledMenuButton = styled.div`
  font-size: 16px;
  
`

const MenuButton: React.FC<{ text: string }> = ({ text }) => {
  return <StyledMenuButton>{text}</StyledMenuButton>
}

export default MenuButton
