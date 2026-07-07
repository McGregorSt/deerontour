import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { PointMap } from './WorldMap'

interface MapPointProps {
  country: string
  x: string
  y: string
  description: string
  animationDelay?: string
}

const StyledMapPoint = styled('button')<MapPointProps>`
  width: 0.9rem;
  height: 0.9rem;
  padding: 0;
  position: absolute;
  border: 0;
  border-radius: 50%;
  background-color: transparent;
  left: ${({ x }) => x};
  top: ${({ y }) => y};
  cursor: pointer;

  & > span {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    background-color: red;
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
    animation: pulse-animation 2.6s ease-in-out infinite;
    animation-delay: ${({ animationDelay }) => animationDelay || '0s'};
    transform-origin: center center;
    will-change: transform, box-shadow, opacity;
    backface-visibility: hidden;
    transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 260ms ease, opacity 260ms ease;
  }

  @keyframes pulse-animation {
    0% {
      transform: translate(-50%, -50%) scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.65);
      opacity: 1;
    }
    30% {
      transform: translate(-50%, -50%) scale(1.03);
      box-shadow: 0 0 0 6px rgba(255, 0, 0, 0.28);
      opacity: 0.95;
    }
    60% {
      transform: translate(-50%, -50%) scale(1.02);
      box-shadow: 0 0 0 10px rgba(255, 0, 0, 0.12);
      opacity: 0.85;
    }
    100% {
      transform: translate(-50%, -50%) scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
      opacity: 1;
    }
  }
`

const StyledPopup = styled('div')<MapPointProps>`
  width: 250px;
  height: auto;
  max-width: 80vw;
  background-color: #b1b1ea;
  color: #333;
  z-index: 99;
  position: absolute;
  top: -10px;
  left: 110%;
  transform: translateY(-50%) scale(0.92);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  padding: 12px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, Arial, sans-serif;
  transition: transform 180ms ease, opacity 180ms ease;
  opacity: 0.98;

  &:hover {
    transform: translateY(-50%) scale(1);
  }
`

const MapPoint: React.FC<PointMap> = ({ country, x, y, description }) => {
  const navigate = useNavigate()
  const [displayPopup, setDisplayPopup] = useState<Boolean>(false)

  // small random delay so multiple points pulse out-of-sync
  const animationDelay = `${(Math.random() * 2.4).toFixed(2)}s`

  const handleCountryClick = () => {
    navigate(`/tours/details/${country.toLowerCase()}`)
  }

  return (
    <StyledMapPoint country={country} x={x} y={y} description={description} animationDelay={animationDelay}>
      <span onClick={handleCountryClick} onMouseOver={() => setDisplayPopup(true)} onMouseLeave={() => setDisplayPopup(false)} />
      {displayPopup && (
        <StyledPopup country={country} x={x} y={y} description={description}>
          <h3 style={{ margin: '8px 0' }}>{country}</h3>
          <p style={{ margin: 0 }}>{description}</p>
        </StyledPopup>
      )}
    </StyledMapPoint>
  )
}

export default MapPoint
