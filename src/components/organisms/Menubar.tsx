import React, { useState } from 'react'
import styled from 'styled-components'
import MenuButton from '../atoms/MenuButton'
import { Link } from 'react-router-dom'
import Logo from '../molecules/Logo'

const StyledMenubar = styled.div`
  width: 100vw;
  height: 10vh;
  /* margin-top: -10vh; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  background: rgba(255, 255, 255, 0.386);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  /* text-align: center; */
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, Arial, sans-serif;
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

const menuItems = [
  {
    button: 'home',
    link: '/',
  },
  {
    button: 'tours',
    link: '/tours',
  },
  {
    button: 'cooperation',
    link: '/cooperation',
  },
  {
    button: 'contact',
    link: '/contact',
  },
  {
    button: 'about us',
    link: '/about-us',
  },
]

const Menubar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <StyledMenubar>
        <StyledLogo>
            <Logo large={false} />
        </StyledLogo>
        <StyledMenuButtons>
          {menuItems.map((item: { button: string; link: string }, index) => (
            <Link
              key={index}
              to={item.link}
            >
              <MenuButton text={item.button} />
            </Link>
          ))}
        </StyledMenuButtons>
        <StyledMobileMenuToggle
          type='button'
          aria-label='Open navigation menu'
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
        {menuItems.map((item: { button: string; link: string }, index) => (
          <StyledMenuLink
            key={index}
            to={item.link}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MenuButton text={item.button} />
          </StyledMenuLink>
        ))}
      </StyledMobileMenu>
    </>
  )
}

export default Menubar
