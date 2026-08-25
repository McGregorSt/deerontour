import React from 'react'
import styled from 'styled-components'
import Continent from '../atoms/Continent'

const StyledContinents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem 4rem;
  align-self: center;
  margin-top: 3vh;
  padding: 20px;
  /* width: 80%; */
  width: min(100%, 100vw);

  @media (max-width: 1550px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
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
  return (
    <>
      <StyledContinents>
        {continents.map((continent, index) => (
          <div key={index}>
            <Continent continent={continent} imageSrc={getContinentImageSrc(continent)} />
          </div>
        ))}
      </StyledContinents>
    </>
  )
}

export default Continents
