import React from 'react'
import styled from 'styled-components'
import MapPoint from './MapPoint'
import MapBackground from '../atoms/MapBackground'
import { useI18n } from '../../i18n/I18nContext'
import { TranslationKey } from '../../i18n/translations'

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
  countryCode: string,
  countryKey: TranslationKey,
  x: string,
  y: string,
  descriptionKey: TranslationKey,
}
const mapPoints: PointMap[] = [
  {
    countryCode: 'vietnam',
    countryKey: 'map.vietnam',
    x: '77.9%',
    y: '52.7%',
    descriptionKey: 'map.vietnamDescription',
  },
  {
    countryCode: 'iceland',
    countryKey: 'map.iceland',
    x: '43.83%',
    y: '20.6%',
    descriptionKey: 'map.icelandDescription',
  },
]


const WorldMap: React.FC<{}> = () => {
  const { t } = useI18n()
  return (
    <StyledWorldMap>
      <MapBackground>
      {mapPoints.map((point: PointMap, index: number) => (
        <MapPoint
          key={`${point.countryCode}-${index}`}
          countryCode={point.countryCode}
          country={t(point.countryKey)}
          x={point.x}
          y={point.y}
          description={t(point.descriptionKey)}
        />
      ))}
      </MapBackground>
    </StyledWorldMap>
  )
}

export default WorldMap
