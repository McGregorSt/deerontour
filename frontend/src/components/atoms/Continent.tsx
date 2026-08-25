import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledContinent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 3rem;
  text-transform: capitalize;
  border: 1px solid #ddd;
  cursor: pointer;
  background-color: #dddddd86;
  padding: 1rem 2rem;
  font-weight: 600;
  font-family: 'Alumni Sans Pinstripe', sans-serif;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: rgba(57, 56, 56, 0.5) 0px 20px 36px -20px;
    transform: translateY(-2px);
  }
`

const StyledContinentImage = styled.div<{ $imageSrc: string }>`
  width: 7rem;
  height: 7rem;
  background-image: url(${({ $imageSrc }) => $imageSrc});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 1rem;
`

const Continent: React.FC<{ continent: string, imageSrc: string }> = ({ continent, imageSrc }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    // console.log(`Clicked on ${continent}`)
    navigate(`/tours/continent/${continent.toLowerCase()}`)
  }

  return (
    <StyledContinent onClick={handleClick}>
      <StyledContinentImage $imageSrc={imageSrc} />
      {continent}
    </StyledContinent>
  )
}

export default Continent
