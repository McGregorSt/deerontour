import React from 'react'
import styled from 'styled-components'
import Continent from '../atoms/Continent'
import { useI18n } from '../../i18n/I18nContext'
import { continentTranslationKeys } from '../../i18n/translations'

const StyledContinents = styled.div<{ $variant: 'default' | 'tours' }>`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${({ $variant }) => ($variant === 'tours' ? '0.75rem' : '1.5rem')};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: ${({ $variant }) => ($variant === 'tours' ? 'repeat(3, minmax(0, 1fr))' : 'repeat(2, minmax(0, 1fr))')};
    gap: ${({ $variant }) => ($variant === 'tours' ? '0' : '0.75rem')};
  }

  @media (max-width: 370px) {
    ${({ $variant }) => $variant === 'tours' && 'grid-template-columns: repeat(2, minmax(0, 1fr));'}
  }
`

const getContinentImageSrc = (continent: string) => {
  const normalized = continent.toLowerCase()

  if (normalized === 'north america') {
    return '/assets/continents/north_america-nb-Photoroom.png'
  }

  if (normalized === 'south america') {
    return '/assets/continents/south_america-nb-Photoroom.png'
  }

  return `/assets/continents/${normalized}-nb-Photoroom.png`
}

const Continents: React.FC<{
  continents: string[]
  counts?: Record<string, number>
  variant?: 'default' | 'tours'
}> = ({ continents, counts, variant = 'default' }) => {
  const { t } = useI18n()

  return (
    <>
      <StyledContinents $variant={variant}>
        {continents.map((continent) => (
          <div key={continent}>
            <Continent
              continent={continent}
              label={
                continent.toLowerCase() === 'australia' && variant === 'tours'
                  ? t('continent.oceania')
                  : continentTranslationKeys[continent.toLowerCase()]
                  ? t(continentTranslationKeys[continent.toLowerCase()])
                  : continent
              }
              imageSrc={getContinentImageSrc(continent)}
              count={counts ? counts[continent.toLowerCase()] ?? 0 : undefined}
              variant={variant}
            />
          </div>
        ))}
      </StyledContinents>
    </>
  )
}

export default Continents
