import React from 'react'
import styled from 'styled-components'

const StyledMenuButton = styled.div`
  /* background: rgba(	35, 37, 26, 0.386); */
  /* background-color: transparent; */
  color: #23251A;
  border-radius: 20px;
  /* backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px); */
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 0.95rem;
  
  &:hover {
    opacity: 50%;
  }
  
`

const MenuButton: React.FC<{ text: string }> = ({ text }) => {
  return <StyledMenuButton>{text}</StyledMenuButton>
}

export default MenuButton
