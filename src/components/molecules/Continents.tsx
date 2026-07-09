import React from 'react'
import styled from 'styled-components'
import Continent from '../atoms/Continent'

const StyledContinents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem 1.5rem;
  align-self: center;
  margin-top: 3vh;
  padding: 20px;
  width: min(100%, 900px);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`

const Continents: React.FC<{ continents: string[] }> = ({ continents }) => {
  return (
    <>
      <StyledContinents>
        {continents.map((continent, index) => (
          <div key={index}>
            <Continent continent={continent} />
          </div>
        ))}
      </StyledContinents>
    </>
  )
}

export default Continents
