import React from 'react'
import styled from 'styled-components'
import nextIcon from '../../assets/share/arrow.svg'

const StyledMoveBtn = styled.button<{ $next: boolean }>`
  width: 3rem;
  height: 3rem;
  padding-left: 0.3rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${({ $next }) => ($next ? '' : '1rem')};
  right: ${({ $next }) => (!$next ? '' : '1rem')};
  transform: ${({ $next }) => ($next ? 'translateX(0)' : 'rotate(180deg) translateX(0)')};
  background-color: rgba(170, 170, 170, 0.2);
  border-radius: 5px;
  transition: transform 0.1s ease;
  z-index: 995;
  cursor: pointer;
  padding: 0;
  border: 0;
  color: #fff;
  font: inherit;

  img {
    scale: 0.6;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    transform: ${({ $next }) => ($next ? 'translateX(0.1rem)' : 'rotate(180deg) translateX(0.1rem)')};
    background-color: rgba(170, 170, 170, 0.25);
  }
`

const MoveBtn: React.FC<{ next: boolean; label: string; stateChange: () => void }> = ({
  next,
  label,
  stateChange,
}) => (
  <StyledMoveBtn
    type='button'
    $next={next}
    aria-label={label}
    onClick={stateChange}
  >
    <img src={nextIcon} alt='' />
  </StyledMoveBtn>
)

export default MoveBtn
