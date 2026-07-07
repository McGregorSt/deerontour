import React from 'react'
import styled from 'styled-components'

const StyledEmailInput = styled.input`
  padding: 12px 20px;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, Arial, sans-serif;

  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #000;

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);

  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.6);
  }
`

const EmailInput: React.FC = () => {
  return <StyledEmailInput />
}

export default EmailInput
