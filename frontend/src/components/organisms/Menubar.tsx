import React, { useState } from 'react'
import styled from 'styled-components'
import MenuButton from '../atoms/MenuButton'
import { Link } from 'react-router-dom'
import Logo from '../molecules/Logo'

const StyledMenubar = styled.div`
  width: 100vw;
  height: 10vh;
  margin-top: -10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 996;
  background: rgba(255, 255, 255, 0.386);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, Arial, sans-serif;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    height: auto;
    min-height: 64px;
    padding: 0.75rem 1rem;
    margin-top: 0;
  }
`

const StyledMenuButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > * {
    text-decoration: none;
    color: #827f6a;
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

const StyledMobileMenuToggle = styled.button`
  display: none;
  border: none;
  background: transparent;
  color: #827f6a;
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
  gap: 0.5rem;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-8px)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: all 0.2s ease;

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
    <StyledMenubar>
      <Logo large={false} />
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
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        ☰
      </StyledMobileMenuToggle>
      <StyledMobileMenu $isOpen={isMobileMenuOpen}>
        {menuItems.map((item: { button: string; link: string }, index) => (
          <Link
            key={index}
            to={item.link}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MenuButton text={item.button} />
          </Link>
        ))}
      </StyledMobileMenu>
    </StyledMenubar>
  )
}

export default Menubar
