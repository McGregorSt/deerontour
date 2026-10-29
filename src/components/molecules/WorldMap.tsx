import React from 'react'
import styled from 'styled-components'
import MapPoint from './MapPoint'
import MapBackground from '../atoms/MapBackground'
import { useI18n } from '../../i18n/I18nContext'
import { TranslationKey } from '../../i18n/translations'

const StyledWorldMap = styled.section`
  padding: clamp(3.5rem, 8vw, 7rem) 0;
  background: #eeede8;
`

const StyledContent = styled.div`
  width: min(calc(100% - clamp(1.25rem, 5.5vw, 5rem) * 2), 1440px);
  margin: 0 auto;
`

const StyledHeading = styled.div`
  h2 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: clamp(2.2rem, 4vw, 3.25rem);
    font-weight: 400;
    line-height: 1;
  }

  p {
    max-width: 39rem;
    margin: 0.8rem 0 0;
    color: #77776f;
    font-size: 0.95rem;
    line-height: 1.55;
  }
`

const StyledMap = styled.div`
  width: min(100%, 1120px);
  margin: clamp(1rem, 3vw, 2rem) auto 0;
`

export interface PointMap {
  countryCode: string
  countryName: string
  countryKey: TranslationKey
  x: string
  y: string
  descriptionKey: TranslationKey
}

const mapPoints: PointMap[] = [
  {
    countryCode: 'vietnam',
    countryName: 'Vietnam',
    countryKey: 'map.vietnam',
    x: '77.9%',
    y: '52.7%',
    descriptionKey: 'map.vietnamDescription',
  },
  {
    countryCode: 'iceland',
    countryName: 'Iceland',
    countryKey: 'map.iceland',
    x: '43.83%',
    y: '20.6%',
    descriptionKey: 'map.icelandDescription',
  },
]

const WorldMap: React.FC = () => {
  const { t } = useI18n()

  return (
    <StyledWorldMap aria-labelledby='world-map-title'>
      <StyledContent>
        <StyledHeading>
          <h2 id='world-map-title'>{t('home.mapTitle')}</h2>
          <p>{t('home.mapDescription')}</p>
        </StyledHeading>
        <StyledMap>
          <MapBackground>
            {mapPoints.map((point) => (
              <MapPoint
                key={point.countryCode}
                countryCode={point.countryCode}
                countryName={point.countryName}
                country={t(point.countryKey)}
                x={point.x}
                y={point.y}
                description={t(point.descriptionKey)}
              />
            ))}
          </MapBackground>
        </StyledMap>
      </StyledContent>
    </StyledWorldMap>
  )
}

export default WorldMap
