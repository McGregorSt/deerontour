import React from 'react'
import styled from 'styled-components'
import MapPoint from './MapPoint'
import MapBackground from '../atoms/MapBackground'

const StyledWorldMap = styled.div`
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: auto;
  left: -3%;
  padding-bottom: 3rem;
  width: 100%;
  overflow-x: auto;
`

const StyledDiv = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 1vh;
    background-color: orangered;
    margin: 10px;
    position: absolute;
    top: 50%;
    left: 80.0187%;
    opacity: 0.9;

 
    
`

export interface PointMap {
  country: string,
  x: string,
  y: string,
  description: string,
}
const mapPoints: PointMap[] = [
  {
    country: 'Vietnam',
    x: '77.9%',
    y: '52.7%',
    description: 'Viet Nam',
  },
  {
    country: 'Iceland',
    x: '43.83%',
    y: '20.6%',
    description: 'lorem llorem',
  },
]


const WorldMap: React.FC<{}> = () => {
  return (
    <StyledWorldMap>
      <MapBackground>
      {mapPoints.map((point: PointMap, index: number) => (
        <MapPoint key={`${point.country}-${index}`} country={point.country} x={point.x} y={point.y} description={point.description} />
      ))}
      </MapBackground>
    </StyledWorldMap>
  )
}

export default WorldMap
