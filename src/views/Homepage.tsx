import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Continents from '../components/molecules/Continents'
import FeaturedJourneys from '../components/organisms/FeaturedJourneys'
import RecentPosts from '../components/organisms/RecentPosts'
import WorldMap from '../components/molecules/WorldMap'
import { useI18n } from '../i18n/I18nContext'
import UserPage from '../template/UserPage'

const StyledHomepage = styled.main`
  --page-gutter: clamp(1.25rem, 5.5vw, 5rem);
  --content-width: 1440px;
  background: #f5f4f0;
  color: #282923;
`

const StyledHero = styled.section`
  position: relative;
  display: flex;
  min-height: 680px;
  height: 82vh;
  max-height: 980px;
  align-items: flex-end;
  overflow: hidden;
  padding: clamp(7rem, 15vh, 11rem) var(--page-gutter) clamp(4rem, 9vh, 7rem);
  background-image:
    linear-gradient(90deg, rgba(10, 15, 11, 0.62) 0%, rgba(10, 15, 11, 0.26) 52%, rgba(10, 15, 11, 0.02) 100%),
    linear-gradient(0deg, rgba(10, 15, 11, 0.35), transparent 55%),
    url('/assets/homepage/IMG_26062.jpg');
  background-position: center;
  background-size: cover;
  color: #fff;

  @media (max-width: 768px) {
    height: min(78svh, 760px);
    min-height: 540px;
    padding-bottom: 4rem;
    background-position: 57% center;
  }

  @media (max-width: 430px) {
    min-height: 500px;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }
`

const StyledHeroContent = styled.div`
  width: min(100%, 720px);

  @media (min-width: 1441px) {
    margin-left: max(0px, calc((100vw - 1440px) / 2));
  }
`

const StyledEyebrow = styled.p`
  margin: 0 0 1.1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`

const StyledHeroTitle = styled.h1`
  max-width: 12ch;
  margin: 0;
  font-family: 'Alumni Sans Pinstripe', Georgia, serif;
  font-size: clamp(3.75rem, 8vw, 7.5rem);
  font-weight: 400;
  line-height: 0.88;
  text-wrap: balance;

  @media (max-width: 600px) {
    font-size: clamp(3.5rem, 15vw, 5rem);
  }
`

const StyledHeroDescription = styled.p`
  max-width: 34rem;
  margin: 1.5rem 0 1.75rem;
  font-size: clamp(1rem, 1.35vw, 1.2rem);
  line-height: 1.55;
  text-wrap: pretty;
`

const StyledHeroLink = styled(Link)`
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  gap: 1.5rem;
  padding: 0.8rem 1.15rem;
  background: #f7f6f1;
  color: #262720;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 180ms ease, transform 180ms ease;

  &::after {
    content: '→';
    font-size: 1rem;
  }

  &:hover {
    background: #fff;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const StyledSection = styled.section`
  width: min(calc(100% - var(--page-gutter) * 2), var(--content-width));
  margin: 0 auto;
  padding: clamp(3.5rem, 8vw, 7rem) 0;
`

const StyledSectionIntro = styled.div`
  margin-bottom: 2.25rem;
`

const StyledSectionTitle = styled.h2`
  margin: 0;
  font-family: 'Alumni Sans Pinstripe', Georgia, serif;
  font-size: clamp(2.2rem, 4vw, 3.25rem);
  font-weight: 400;
  line-height: 1;
`

const StyledSectionDescription = styled.p`
  max-width: 38rem;
  margin: 0.8rem 0 0;
  color: #77776f;
  font-size: 0.95rem;
  line-height: 1.55;
`

const StyledContinentGrid = styled.div`
  & > div {
    margin: 0;
    padding: 0;
  }
`

const StyledAbout = styled.section`
  display: grid;
  width: min(calc(100% - var(--page-gutter) * 2), var(--content-width));
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
  align-items: center;
  gap: clamp(2rem, 7vw, 7rem);
  margin: 0 auto;
  padding: clamp(3rem, 7vw, 6rem) 0 clamp(5rem, 9vw, 8rem);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    padding-bottom: 4rem;
  }
`

const StyledAboutImage = styled.img`
  width: 100%;
  aspect-ratio: 1.45;
  object-fit: cover;
`

const StyledAboutContent = styled.div`
  max-width: 32rem;

  h2 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: clamp(2.3rem, 4vw, 3.5rem);
    font-weight: 400;
    line-height: 1;
  }

  p {
    margin: 1rem 0 1.5rem;
    color: #686961;
    line-height: 1.7;
  }
`

const StyledAboutLink = styled(Link)`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 0.75rem;
  color: #282923;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-decoration: none;
  text-transform: uppercase;

  &::after {
    content: '→';
    font-size: 1rem;
  }

  &:hover {
    color: #a33b2f;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
`

const Home = () => {
  const { t } = useI18n()

  return (
    <UserPage>
      <StyledHomepage>
        <StyledHero aria-labelledby='homepage-title'>
          <StyledHeroContent>
            <StyledEyebrow>{t('home.heroEyebrow')}</StyledEyebrow>
            <StyledHeroTitle id='homepage-title'>{t('home.heroTitle')}</StyledHeroTitle>
            <StyledHeroDescription>{t('home.heroDescription')}</StyledHeroDescription>
            <StyledHeroLink to='/tours'>{t('home.exploreJourneys')}</StyledHeroLink>
          </StyledHeroContent>
        </StyledHero>

        <StyledSection aria-labelledby='continents-title'>
          <StyledSectionIntro>
            <StyledSectionTitle id='continents-title'>{t('home.continentsTitle')}</StyledSectionTitle>
            <StyledSectionDescription>{t('home.continentsDescription')}</StyledSectionDescription>
          </StyledSectionIntro>
          <StyledContinentGrid>
            <Continents continents={['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia']} />
          </StyledContinentGrid>
        </StyledSection>

        <FeaturedJourneys />
        <WorldMap />
        <RecentPosts />

        <StyledAbout aria-labelledby='about-title'>
          <StyledAboutImage
            src='/assets/homepage/IMG_28302.jpg'
            alt={t('home.aboutImageAlt')}
            loading='lazy'
          />
          <StyledAboutContent>
            <h2 id='about-title'>{t('home.aboutTitle')}</h2>
            <p>{t('home.aboutDescription')}</p>
            <StyledAboutLink to='/about-us'>{t('home.aboutLink')}</StyledAboutLink>
          </StyledAboutContent>
        </StyledAbout>
      </StyledHomepage>
    </UserPage>
  )
}

export default Home
