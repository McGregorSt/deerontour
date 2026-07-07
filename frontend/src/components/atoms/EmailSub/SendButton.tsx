import React from 'react'
import styled from 'styled-components'

const StyledSendButton = styled.button`
max-width: 10rem;
  display: inline-block;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  color: #000;
  font-weight: 500;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, Arial, sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`

const SendButton: React.FC = () => {
  return <StyledSendButton>Subskrybuj</StyledSendButton>
}

export default SendButton
