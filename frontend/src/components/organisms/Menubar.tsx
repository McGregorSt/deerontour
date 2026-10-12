import React, { useState } from 'react'
import styled from 'styled-components'
import MenuButton from '../atoms/MenuButton'
import { Link } from 'react-router-dom'
import Logo from '../molecules/Logo'
import { useI18n } from '../../i18n/I18nContext'
import { TranslationKey } from '../../i18n/translations'

const StyledMenubar = styled.div`
  width: 100vw;
  height: 11vh;
  /* margin-top: -10vh; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 997;
  background: rgba(255, 255, 255, 0.386);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  /* text-align: center; */
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, Arial, sans-serif;
  font-family: 'aaaiight', sans-serif;
  /* font-family: 'Darker Grotesque', sans-serif; */
  /* font-family:
  apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
  'Helvetica Neue', sans-serif; */
  font-weight: 200;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  /* padding: 0 1.5rem; */

  @media (max-width: 768px) {
    /* height: auto; */
    height: 10vh;
    /* margin-top: -10vh; */

    padding: 0.75rem 1rem;
    /* margin-top: 0; */
  }
`

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
  margin-left: 5vw;
  @media (max-width: 768px) {
    margin-left: -10vw;
    scale: 0.6;
  }
  `

const StyledMenuButtons = styled.div`
  display: flex;
  align-items: center;
  overflow: visible;
  gap: 0.5rem;
  margin-right: 5vw;

  & > * {
    text-decoration: none;
    color: #a5a183;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    border-radius: 999px;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

const StyledMobileMenuToggle = styled.button`
  display: none;
  border: none;
  background: transparent;
  color: #3a3a37;
  font-size: 1rem;
  font-weight: 600;
  min-width: 44px;
  min-height: 44px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`

const StyledLanguageSelect = styled.select`
  min-width: 3.5rem;
  min-height: 44px;
  padding: 0.35rem 0.5rem;
  border: 1px solid rgba(58, 58, 55, 0.28);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.35);
  color: #3a3a37;
  font: inherit;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  cursor: pointer;
`

const StyledMobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 10vh;
  left: 0;
  right: 0;
  width: 100vw;
  box-sizing: border-box;
  padding: 1.5rem 4rem;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-8px)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: all 0.2s ease;
  z-index: 996;
  background: rgba(255, 255, 255, 0.386);
  backdrop-filter: blur(20px);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, Arial, sans-serif;
  font-family: 'aaaiight', sans-serif;
  font-size: 0.7rem;


  & > * {
    text-decoration: none;
    color: #47463a;
    cursor: pointer;
    min-height: 44px;
    display: inline-flex;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const menuItems: { button: TranslationKey; link: string }[] = [
  {
    button: 'nav.home',
    link: '/',
  },
  {
    button: 'nav.tours',
    link: '/tours',
  },
  {
    button: 'nav.cooperation',
    link: '/cooperation',
  },
  {
    button: 'nav.contact',
    link: '/contact',
  },
  {
    button: 'nav.about',
    link: '/about-us',
  },
]

const Menubar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useI18n()

  return (
    <>
      <StyledMenubar>
        <StyledLogo>
            <Logo large={false} />
        </StyledLogo>
        <StyledMenuButtons>
          {menuItems.map((item) => (
            <Link
              key={item.link}
              to={item.link}
            >
              <MenuButton text={t(item.button)} />
            </Link>
          ))}
        <StyledLanguageSelect
          aria-label={t('language.label')}
          value={language}
          onChange={(event) => setLanguage(event.target.value as 'EN' | 'PL')}
        >
          <option value='EN'>EN</option>
          <option value='PL'>PL</option>
        </StyledLanguageSelect>
        </StyledMenuButtons>
        <StyledMobileMenuToggle
          type='button'
          aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={isMobileMenuOpen}
          aria-controls='mobile-navigation-menu'
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </StyledMobileMenuToggle>
      </StyledMenubar>
      <StyledMobileMenu
        id='mobile-navigation-menu'
        $isOpen={isMobileMenuOpen}
      >
        {menuItems.map((item) => (
          <StyledMenuLink
            key={item.link}
            to={item.link}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MenuButton text={t(item.button)} />
          </StyledMenuLink>
        ))}
      </StyledMobileMenu>
    </>
  )
}

export default Menubar
