import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useI18n } from '../../i18n/I18nContext'

const StyledContinent = styled(Link)<{ $active: boolean; $variant: 'default' | 'tours' }>`
  display: flex;
  min-height: ${({ $variant }) => ($variant === 'tours' ? '10.5rem' : '11rem')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ $variant }) => ($variant === 'tours' ? '0.45rem' : '0.65rem')};
  padding: ${({ $variant }) => ($variant === 'tours' ? '0.8rem 0.35rem' : '1rem 0.5rem')};
  border: 1px solid ${({ $active, $variant }) => ($active && $variant === 'tours' ? 'rgba(77, 77, 68, 0.12)' : 'transparent')};
  background: ${({ $active, $variant }) => ($active && $variant === 'tours' ? 'rgba(255, 255, 255, 0.38)' : 'transparent')};
  color: ${({ $active }) => ($active ? '#272821' : '#30312b')};
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ $variant }) => ($variant === 'tours' ? '0.66rem' : '0.72rem')};
  font-weight: 500;
  letter-spacing: ${({ $variant }) => ($variant === 'tours' ? '0.1em' : '0.12em')};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 180ms ease, transform 180ms ease, background-color 180ms ease, border-color 180ms ease;

  &:hover {
    color: #a33b2f;
    transform: ${({ $variant }) => ($variant === 'tours' ? 'none' : 'translateY(-2px)')};
    background: ${({ $variant }) => ($variant === 'tours' ? 'rgba(255, 255, 255, 0.38)' : 'transparent')};
    border-color: ${({ $variant }) => ($variant === 'tours' ? 'rgba(77, 77, 68, 0.12)' : 'transparent')};
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    min-height: ${({ $variant }) => ($variant === 'tours' ? '6.25rem' : '9.5rem')};
    gap: ${({ $variant }) => ($variant === 'tours' ? '0.25rem' : '0.65rem')};
    padding: ${({ $variant }) => ($variant === 'tours' ? '0.55rem 0.25rem' : '1rem 0.5rem')};
    border-color: ${({ $variant }) => ($variant === 'tours' ? 'rgba(77, 77, 68, 0.08)' : 'transparent')};
    font-size: ${({ $variant }) => ($variant === 'tours' ? '0.52rem' : '0.63rem')};
    letter-spacing: ${({ $variant }) => ($variant === 'tours' ? '0.08em' : '0.12em')};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const StyledContinentImage = styled.img<{ $variant: 'default' | 'tours' }>`
  width: ${({ $variant }) => ($variant === 'tours' ? 'min(100%, 7.5rem)' : 'min(100%, 8rem)')};
  height: ${({ $variant }) => ($variant === 'tours' ? '6.25rem' : '7rem')};
  object-fit: contain;

  @media (max-width: 600px) {
    width: ${({ $variant }) => ($variant === 'tours' ? 'min(100%, 5rem)' : 'min(100%, 8rem)')};
    height: ${({ $variant }) => ($variant === 'tours' ? '3.5rem' : '6rem')};
  }
`

const StyledContinentCount = styled.span`
  color: #82827b;
  font-size: 0.58rem;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
`

const Continent: React.FC<{
  continent: string
  label?: string
  imageSrc: string
  count?: number
  variant?: 'default' | 'tours'
}> = ({
  continent,
  label,
  imageSrc,
  count,
  variant = 'default',
}) => {
  const { pathname } = useLocation()
  const { t, language } = useI18n()
  const routeContinent = pathname.startsWith('/tours/continent/')
    ? decodeURIComponent(pathname.split('/').pop() || '').toLowerCase()
    : ''
  const normalizedContinent = continent.toLowerCase()
  const isActive = routeContinent === normalizedContinent

  return (
    <StyledContinent
      to={`/tours/continent/${encodeURIComponent(normalizedContinent)}`}
      $active={isActive}
      $variant={variant}
      aria-current={isActive ? 'page' : undefined}
    >
      <StyledContinentImage src={imageSrc} alt='' loading='lazy' $variant={variant} />
      <span>{label || continent}</span>
      {count !== undefined && (
        <StyledContinentCount>
          {count}{' '}
          {count === 1
            ? t('tours.storyCountOne')
            : language === 'PL' && count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 12 || count % 100 > 14)
              ? t('tours.storyCountFew')
              : t('tours.storyCount')}
        </StyledContinentCount>
      )}
    </StyledContinent>
  )
}

export default Continent
