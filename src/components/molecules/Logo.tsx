import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useI18n } from '../../i18n/I18nContext'

interface LogoProps {
  large: boolean
  light?: boolean
  lightText?: boolean
}

const StyledWrapper = styled.div`
  * {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  text-decoration: none;
`
const StyledLogo = styled.div<{ $large: boolean; $light: boolean }>`
  /* border: 2px solid red; */
  /* display: block; */
  width: ${({ $large }) => ($large ? '10rem' : '7rem')};
  height: ${({ $large }) => ($large ? '15rem' : '9rem')};
  background-image: url('/assets/logoDeer.png');
  background-size: contain;
  background-repeat: no-repeat;
  filter: ${({ $light }) => ($light ? 'brightness(0) invert(1)' : 'none')};
  transition: filter 300ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  /* @media (max-width: 768px) {
    width: 26vw;
  } */
`
const StyledNameWrapper = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  @media (max-width: 768px) {
    width: 46vw;
    /* border: 2px solid red; */
  }
  @media (max-width: 480px) {
  }
  `

const StyledName = styled.div<{ $light: boolean }>`
  /* width: 10vw; */
  font-family: 'underground', sans-serif;
  color: ${({ $light }) => ($light ? '#fff' : '#23251a')};
  font-size: 1.9rem;
  letter-spacing: 0.1rem;
  transition: color 300ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
  /* border: 2px solid blue; */
  @media (max-width: 768px) {
    font-size: 2.4rem;
    /* border: 2px solid red; */
  }
  `

const StyledDesc = styled.div<{ $light: boolean }>`
  font-family:
  apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
  'Helvetica Neue', sans-serif;
  font-size: 1rem;
  color: ${({ $light }) => ($light ? '#fff' : '#23251a')};
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-weight: 100;
  transition: color 300ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
  /* transform: scaleX(1.1);
  transform-origin: left; */
`

const Logo: React.FC<LogoProps> = ({ large, light = false, lightText = light }) => {
  const { t } = useI18n()
  return (
    <StyledWrapper>
      <Link
        key='1'
        to='/'
      >
        <StyledLogo $large={large} $light={light}></StyledLogo>
        <StyledNameWrapper>
          <StyledName $light={lightText}>Deer On Tour</StyledName>
          <StyledDesc $light={lightText}>{t('brand.tagline')}</StyledDesc>
        </StyledNameWrapper>
      </Link>
    </StyledWrapper>
  )
}

export default Logo
