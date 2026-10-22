import React from 'react'
import styled from 'styled-components'
import Continent from '../atoms/Continent'
import { useI18n } from '../../i18n/I18nContext'
import { continentTranslationKeys } from '../../i18n/translations'

const StyledContinents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 100%; */
  /* align-self: center; */
  margin-top: 3vh;
  padding: 20px;
  /* width: 80%; */
  width: min(100%, 100vw);
  
  @media (max-width: 1550px) {
    /* display: grid; */
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    /* padding: 1rem; */
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

const Continents: React.FC<{ continents: string[] }> = ({ continents }) => {
  const { t } = useI18n()

  return (
    <>
      <StyledContinents>
        {continents.map((continent, index) => (
          <div key={index}>
            <Continent
              continent={continent}
              label={
                continentTranslationKeys[continent.toLowerCase()]
                  ? t(continentTranslationKeys[continent.toLowerCase()])
                  : continent
              }
              imageSrc={getContinentImageSrc(continent)}
            />
          </div>
        ))}
      </StyledContinents>
    </>
  )
}

export default Continents
