import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledContinent = styled.div`
  min-width: 27vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  text-transform: capitalize;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  /* background-color: #dddddd86; */
  padding: 1rem 3rem;
  font-weight: 600;
  font-family: 'Alumni Sans Pinstripe', sans-serif;
  box-shadow: 0px 0px 23px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 11px -2px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  
  &:hover {
    box-shadow: rgba(57, 56, 56, 0.5) 0px 20px 36px -20px;
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    /* width: 90vw; */
    /* grid-template-columns: repeat(1, minmax(1.5fr, 0.5fr)); */
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

const Continent: React.FC<{ continent: string, label?: string, imageSrc: string }> = ({ continent, label, imageSrc }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    // console.log(`Clicked on ${continent}`)
    navigate(`/tours/continent/${continent.toLowerCase()}`)
  }

  return (
    <StyledContinent onClick={handleClick}>
      <StyledContinentImage $imageSrc={imageSrc} />
      {label || continent}
    </StyledContinent>
  )
}

export default Continent
