import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../molecules/Logo'
import EmailSubscription from '../molecules/EmailSubscription'
import { useI18n } from '../../i18n/I18nContext'
import { TranslationKey } from '../../i18n/translations'

const StyledFooter = styled.footer`
  padding: clamp(3.5rem, 6vw, 5.25rem) clamp(1.25rem, 5.5vw, 5rem) 3.5rem;
  border-top: 1px solid rgba(38, 39, 32, 0.1);
  background: #f1f0eb;
  color: #33342d;

  @media (max-width: 600px) {
    padding: 1.5rem 1.25rem 1.25rem;
  }
`

const StyledFooterContent = styled.div`
  display: grid;
  width: min(100%, 1440px);
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr) minmax(18rem, 1.15fr);
  align-items: start;
  column-gap: clamp(2rem, 5vw, 5rem);
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    row-gap: 1.25rem;

    & > :nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }

    & > :nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    }

    & > :nth-child(3) {
      grid-column: 2;
      grid-row: 1 / span 2;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 0.5rem;

    & > :nth-child(n) {
      grid-column: 1;
      grid-row: auto;
    }

    & > :nth-child(1) {
      grid-row: 1;
    }

    & > :nth-child(2) {
      grid-row: 2;
    }

    & > :nth-child(3) {
      grid-row: 3;
    }
  }
`

const StyledLogo = styled.div`
  min-width: 0;

  & > div > a {
    justify-content: flex-start;
    gap: 0.25rem;
  }

  & > div > a > div:first-child {
    width: 3.2rem;
    height: 4rem;
    flex-shrink: 0;
  }

  & > div > a > div:last-child {
    width: auto;
    min-width: 0;
    align-items: flex-start;
  }

  & > div > a > div:last-child > div:first-child {
    font-size: clamp(1.05rem, 1.5vw, 1.4rem);
    letter-spacing: 0.04rem;
    white-space: nowrap;
  }

  & > div > a > div:last-child > div:last-child {
    font-size: 0.55rem;
    letter-spacing: 0.2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;

    & > div > a {
      justify-content: center;
    }

    & > div > a > div:first-child {
      width: 2.45rem;
      height: 3rem;
    }

    & > div > a > div:last-child > div:first-child {
      font-size: 1rem;
    }

    & > div > a > div:last-child > div:last-child {
      font-size: 0.45rem;
      letter-spacing: 0.17rem;
    }
  }
`

const StyledFooterNav = styled.nav`
  display: grid;
  justify-items: start;
  align-content: start;

  a {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    color: #5b5b54;
    font-size: 0.86rem;
    text-decoration: none;
    transition: color 180ms ease;
  }

  a:hover {
    color: #9c3d32;
  }

  a:focus-visible {
    outline: 2px solid #9c3d32;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    a {
      transition: none;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.15rem 0.7rem;

    a {
      min-height: 32px;
      font-size: 0.76rem;
    }
  }
`

const StyledNewsletter = styled.div`
  width: 100%;
  max-width: 27rem;
  justify-self: end;

  & > div {
    width: 100%;
  }

  & span {
    color: #484941;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.67rem;
    font-weight: 600;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  form {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
  }

  form > input {
    min-width: 0;
    max-width: none;
    width: 100%;
    min-height: 44px;
    flex: 1 1 100%;
    padding: 0.7rem 3.25rem 0.7rem 0.9rem;
    border: 1px solid #d5d3ca;
    border-radius: 999px;
    background: transparent;
    box-shadow: none;
    color: #33342d;
    font-size: 0.8rem;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  form > input:focus {
    border-color: #77776f;
    background: #f7f6f1;
    box-shadow: 0 0 0 2px rgba(119, 119, 111, 0.12);
  }

  form > button {
    position: absolute;
    top: 50%;
    right: 0.35rem;
    display: flex;
    justify-content: center;
    /* scale: 1.2; */
    width: 2rem;
    height: 2rem;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;
    box-shadow: none;
    color: #42433d;
    font-size: 0;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    cursor: pointer;
    transform: translateY(-50%);
  }

  form > button::after {
    content: '→';
    font-size: 1.15rem;
    line-height: 1;
  }

  form > button:hover {
    background: rgba(38, 39, 32, 0.06);
    box-shadow: none;
    color: #9c3d32;
  }

  form > button:focus-visible {
    outline: 2px solid #9c3d32;
    outline-offset: 1px;
  }

  @media (max-width: 1024px) {
    justify-self: stretch;

    form > input {
      max-width: none;
    }

  }

  @media (max-width: 600px) {
    max-width: none;
    text-align: center;

    & > div > span {
      display: block;
      padding: 0.35rem 0 0.5rem;
    }

    form > input {
      min-height: 40px;
      padding: 0.6rem 3rem 0.6rem 0.8rem;
      font-size: 0.78rem;
    }

    form > button {
      right: 0.25rem;
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`

const menuItems: { label: TranslationKey; path: string; end?: boolean }[] = [
  { label: 'nav.home', path: '/', end: true },
  { label: 'nav.tours', path: '/tours' },
  { label: 'nav.cooperation', path: '/cooperation', end: true },
  { label: 'nav.contact', path: '/contact', end: true },
  { label: 'nav.about', path: '/about-us', end: true },
]

const Footer = () => {
  const { t } = useI18n()

  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledLogo>
          <Logo large={false} />
        </StyledLogo>
        <StyledFooterNav aria-label={t('nav.footerLabel')}>
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              {t(item.label)}
            </Link>
          ))}
        </StyledFooterNav>
        <StyledNewsletter>
          <EmailSubscription title='' date='' />
        </StyledNewsletter>
      </StyledFooterContent>
    </StyledFooter>
  )
}

export default Footer
