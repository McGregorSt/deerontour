import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import MapPoint from './MapPoint'
import MapBackground from '../atoms/MapBackground'
import { useI18n } from '../../i18n/I18nContext'
import { fetchPosts } from '../../support/api'
import { IMapData, IPost } from '../../support/types'
import { TranslationKey } from '../../i18n/translations'
import { normalizeContinent } from '../../shared/continent'
import { normalizeCountry } from '../../shared/tourFilters'

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
  width: min(100%, 1440px);
  margin: clamp(1rem, 3vw, 2rem) auto 0;
`

export interface PointMap {
  countryCode: string
  countryName: string
  continent: string
  countrySlug: string
  x: string
  y: string
  descriptionKey?: TranslationKey
}

const mapDescriptionKeys: Record<string, TranslationKey> = {
  vietnam: 'map.vietnamDescription',
  iceland: 'map.icelandDescription',
}

const getPercentage = (value: IMapData['x']): number | null => {
  const normalizedValue = typeof value === 'string' ? value.trim().replace(/%$/, '') : value
  if (normalizedValue === '') return null
  const numericValue = Number(normalizedValue)

  return Number.isFinite(numericValue) && numericValue >= 0 && numericValue <= 100
    ? numericValue
    : null
}

const getDistinctMapPoints = (posts: IPost[]): PointMap[] => {
  const pointsByCoordinates = new Map<string, PointMap>()

  posts.forEach((post) => {
    if (!post.mapData) return

    const x = getPercentage(post.mapData.x)
    const y = getPercentage(post.mapData.y)
    if (x === null || y === null) return

    const coordinateKey = `${x},${y}`
    if (pointsByCoordinates.has(coordinateKey)) return

    pointsByCoordinates.set(coordinateKey, {
      countryCode: `${post.country}-${coordinateKey.replace(',', '-')}`,
      countryName: post.countryLabel || post.country,
      continent: normalizeContinent(post.continent),
      countrySlug: normalizeCountry(post.country),
      x: `${x}%`,
      y: `${y}%`,
      descriptionKey: mapDescriptionKeys[post.country.toLowerCase()],
    })
  })

  return Array.from(pointsByCoordinates.values())
}

const WorldMap: React.FC = () => {
  const { language, t } = useI18n()
  const [posts, setPosts] = useState<IPost[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    const loadPosts = async () => {
      setError(null)
      try {
        const result = await fetchPosts(language)
        if (active) setPosts(result)
      } catch (loadError) {
        const message = loadError instanceof Error ? loadError.message : 'Failed to load map points'
        console.error('Error fetching map points:', message)
        if (active) setError(message)
      }
    }

    loadPosts()
    return () => {
      active = false
    }
  }, [language])

  const mapPoints = useMemo(() => getDistinctMapPoints(posts), [posts])

  return (
    <StyledWorldMap aria-labelledby='world-map-title'>
      <StyledContent>
        <StyledHeading>
          <h2 id='world-map-title'>{t('home.mapTitle')}</h2>
          <p>{t('home.mapDescription')}</p>
        </StyledHeading>
        <StyledMap>
          <MapBackground>
            {!error && mapPoints.map((point) => (
              <MapPoint
                key={point.countryCode}
                countryCode={point.countryCode}
                countryName={point.countryName}
                continent={point.continent}
                countrySlug={point.countrySlug}
                country={point.countryName}
                x={point.x}
                y={point.y}
                description={point.descriptionKey ? t(point.descriptionKey) : undefined}
              />
            ))}
          </MapBackground>
        </StyledMap>
      </StyledContent>
    </StyledWorldMap>
  )
}

export default WorldMap
