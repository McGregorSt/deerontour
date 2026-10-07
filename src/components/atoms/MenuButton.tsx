import React from 'react'
import styled from 'styled-components'

const StyledMenuButton = styled.div`
  color: #23251a;
  padding: 0.5rem 0.95rem;
  position: relative;
  letter-spacing: 0.02em;
  border-radius: 999px;
  transition:
    color 0.28s ease,
    transform 0.28s ease,
    opacity 0.28s ease,
    text-shadow 0.28s ease;
  will-change: color, transform, opacity, text-shadow;
  z-index: 999;

  span {
    position: relative;
    display: inline-block;
    isolation: isolate;

    &::after {
      content: attr(data-text);
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      color: rgb(0, 0, 0);
      white-space: nowrap;
      opacity: 0;
      /* transform: translateY(0.2rem) scale(1.06); */
      /* transform-origin: c
      enter; */
      transition: opacity 0.28s ease, transform 0.28s ease;
      pointer-events: none;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 0.95rem;
    right: 0.95rem;
    bottom: 0.2rem;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(61, 60, 47, 0.01), rgba(45, 44, 36, 0.9), rgba(61, 60, 47, 0.1));
    transform: scaleX(0);
    transform-origin: center;
    transition:
      transform 0.28s ease,
      opacity 0.28s ease;
    opacity: 0.9;
    box-shadow: 0 0 12px rgba(45, 44, 36, 0.18);
  }

  &:hover {
    color: #ffb700;
    transform: translateY(-0.05rem);
    opacity: 1;
    text-shadow: 0 0 12px rgba(255, 186, 12, 0.2);
  }

  &:hover span::after {
    opacity: 0.7;
    transform: translateY(0.13rem) scale(1.00);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`

const MenuButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <StyledMenuButton>
      <span data-text={text}>{text}</span>
    </StyledMenuButton>
  )
}

export default MenuButton
