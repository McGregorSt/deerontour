import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledContinent = styled.div`
  width: 15rem;
  padding: 0 15%;

  display: flex;
  font-size: 3rem;
  text-transform: capitalize;
  border: 1px solid #ddd;
  cursor: pointer;

  justify-content: flex-start;
  padding: 0 40px;
  font-weight: 600;
  font-family: 'Alumni Sans Pinstripe', sans-serif;
`

const Continent: React.FC<{ continent: string }> = ({ continent }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(`Clicked on ${continent}`)
    navigate(`/tours/continent/${continent.toLowerCase()}`)
  }

  return <StyledContinent onClick={handleClick}>{continent}</StyledContinent>
}

export default Continent
