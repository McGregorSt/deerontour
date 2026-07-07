import React from 'react'
import styled from 'styled-components'
import Continent from '../atoms/Continent'

const StyledContinents = styled.div`
  display: grid;
  padding-left: 30rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3vw 5vw;
  align-self: center;
  margin-top: 3vh;
  padding: 20px;
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
