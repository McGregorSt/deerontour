import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useI18n } from '../../i18n/I18nContext'

interface MapPointProps {
  countryCode: string
  countryName: string
  country: string
  x: string
  y: string
  description: string
}

const StyledPoint = styled.div<{ $x: string; $y: string }>`
  position: absolute;
  top: ${({ $y }) => $y};
  left: ${({ $x }) => $x};
  transform: translate(-50%, -50%);
`

const StyledMarker = styled.button`
  position: relative;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;

  &::before {
    width: 11px;
    height: 11px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #d72f26;
    box-shadow: 0 0 0 4px rgba(215, 47, 38, 0.18);
    content: '';
    transition: box-shadow 180ms ease, transform 180ms ease;
  }

  &:hover::before,
  &[aria-expanded='true']::before {
    box-shadow: 0 0 0 7px rgba(215, 47, 38, 0.2);
    transform: scale(1.12);
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 0;
  }
`

const StyledPopup = styled.div<{ $visible: boolean; $alignRight: boolean }>`
  position: absolute;
  z-index: 3;
  bottom: calc(100% + 0.35rem);
  ${({ $alignRight }) => ($alignRight ? 'right: 0;' : 'left: 50%;')}
  width: min(15rem, 72vw);
  padding: 0.85rem 1rem;
  border: 1px solid rgba(38, 39, 32, 0.08);
  background: rgba(250, 249, 246, 0.98);
  box-shadow: 0 8px 24px rgba(35, 37, 26, 0.14);
  color: #282923;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transform: ${({ $alignRight, $visible }) => (
    `${$alignRight ? 'translateX(0)' : 'translateX(-50%)'} translateY(${$visible ? '0' : '0.35rem'})`
  )};
  transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};

  h3 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
  }

  p {
    margin: 0.45rem 0 0.6rem;
    color: #696a62;
    font-size: 0.78rem;
    line-height: 1.4;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const StyledCountryLink = styled(Link)`
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  gap: 0.55rem;
  color: #8e332b;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #54201b;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
  }
`

const MapPoint: React.FC<MapPointProps> = ({ countryCode, countryName, country, x, y, description }) => {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const countryPostsPath = `/posts?country=${encodeURIComponent(countryName)}`

  const handleMarkerClick = () => {
    const supportsHover = typeof window.matchMedia === 'function'
      && window.matchMedia('(hover: hover) and (pointer: fine)').matches

    if (supportsHover) {
      navigate(countryPostsPath)
      return
    }

    setIsOpen((open) => !open)
  }

  return (
    <StyledPoint
      $x={x}
      $y={y}
      data-country={countryCode}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false)
      }}
    >
      <StyledMarker
        type='button'
        aria-label={country}
        aria-expanded={isOpen}
        aria-controls={`map-country-${countryCode}`}
        title={country}
        onClick={handleMarkerClick}
      />
      <StyledPopup
        id={`map-country-${countryCode}`}
        $visible={isOpen}
        $alignRight={Number.parseFloat(x) > 60}
      >
        <h3>{country}</h3>
        <p>{description}</p>
        <StyledCountryLink to={countryPostsPath}>
          {t('home.viewCountryPosts')} <span aria-hidden='true'>→</span>
        </StyledCountryLink>
      </StyledPopup>
    </StyledPoint>
  )
}

export default MapPoint
