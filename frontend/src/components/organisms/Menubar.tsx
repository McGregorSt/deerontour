import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useI18n } from '../../i18n/I18nContext'
import { Language, TranslationKey } from '../../i18n/translations'
import Logo from '../molecules/Logo'

const StyledMenubar = styled.header<{ $isScrolled: boolean; $mobileMenuOpen: boolean }>`
  position: fixed;
  inset: ${({ $isScrolled }) => ($isScrolled ? '0.75rem 1.25rem auto' : '0 0 auto')};
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ $isScrolled }) => ($isScrolled ? 'calc(100% - 2.5rem)' : '100%')};
  height: ${({ $isScrolled }) => ($isScrolled ? '5.5rem' : '6.75rem')};
  border-radius: ${({ $isScrolled }) => ($isScrolled ? '12px' : '0')};
  padding: 0 clamp(1.25rem, 5vw, 5rem);
  background-color: ${({ $isScrolled, $mobileMenuOpen }) => {
    if ($mobileMenuOpen) return 'rgba(248, 247, 243, 0.98)'
    return $isScrolled ? 'rgba(250, 249, 246, 0.58)' : 'transparent'
  }};
  color: ${({ $isScrolled, $mobileMenuOpen }) => (
    $isScrolled || $mobileMenuOpen ? '#262720' : '#fff'
  )};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(18px) saturate(180%)' : 'none')};
  -webkit-backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(18px) saturate(180%)' : 'none')};
  box-shadow: ${({ $isScrolled }) => (
    $isScrolled
      ? '0 8px 28px rgba(35, 37, 26, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.65)'
      : 'none'
  )};
  border-bottom: ${({ $isScrolled }) => (
    $isScrolled ? '1px solid rgba(255, 255, 255, 0.35)' : '1px solid transparent'
  )};
  isolation: isolate;
  font-family: 'Montserrat', sans-serif;
  transition:
    inset 300ms ease,
    width 300ms ease,
    height 300ms ease,
    border-radius 300ms ease,
    background-color 300ms ease,
    color 300ms ease,
    box-shadow 300ms ease,
    backdrop-filter 300ms ease,
    -webkit-backdrop-filter 300ms ease;

  &::before {
    position: absolute;
    z-index: 0;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(5, 8, 7, 0.38) 0%, rgba(5, 8, 7, 0.16) 68%, rgba(5, 8, 7, 0) 100%);
    content: '';
    opacity: ${({ $isScrolled, $mobileMenuOpen }) => ($isScrolled || $mobileMenuOpen ? 0 : 1)};
    pointer-events: none;
    transition: opacity 300ms ease;
  }

  @media (max-width: 1024px) {
    inset: ${({ $isScrolled }) => ($isScrolled ? '0.5rem 0.5rem auto' : '0 0 auto')};
    width: ${({ $isScrolled }) => ($isScrolled ? 'calc(100% - 1rem)' : '100%')};
    height: ${({ $isScrolled }) => ($isScrolled ? '4.25rem' : '5rem')};
    min-height: 0;
    flex-wrap: nowrap;
    padding: 0 clamp(0.75rem, 3vw, 1.5rem);
  }

  @media (min-width: 1025px) and (max-width: 1100px) {
    padding-inline: 2rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before {
      transition: none;
    }
  }
`

const StyledBrand = styled.div`
  position: relative;
  z-index: 1003;
  flex: 0 0 auto;

  & > div > a {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    color: inherit;
  }

  & > div > a > div:first-child {
    width: 3.25rem;
    height: 3.5rem;
  }

  & > div > a > div:last-child {
    width: auto;
  }

  @media (max-width: 600px) {
    & > div > a > div:first-child {
      width: 2.7rem;
      height: 3rem;
    }

    & > div > a > div:last-child > div:first-child {
      font-size: 1.05rem;
    }

    & > div > a > div:last-child > div:last-child {
      font-size: 0.48rem;
    }
  }
`

const StyledNav = styled.nav<{ $mobileMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(2rem, 3vw, 2.75rem);
  position: relative;
  z-index: 1001;

  @media (max-width: 1024px) {
    position: fixed;
    inset: 0;
    z-index: 1001;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    padding: 6rem 1.5rem 3rem;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(248, 247, 243, 0.98);
    color: #262720;
    opacity: ${({ $mobileMenuOpen }) => ($mobileMenuOpen ? 1 : 0)};
    visibility: ${({ $mobileMenuOpen }) => ($mobileMenuOpen ? 'visible' : 'hidden')};
    pointer-events: ${({ $mobileMenuOpen }) => ($mobileMenuOpen ? 'auto' : 'none')};
    transform: ${({ $mobileMenuOpen }) => ($mobileMenuOpen ? 'translateY(0)' : 'translateY(-0.5rem)')};
    transition:
      opacity 280ms ease,
      transform 280ms ease,
      visibility 0s linear ${({ $mobileMenuOpen }) => ($mobileMenuOpen ? '0ms' : '280ms')};
  }

  @media (max-width: 600px) {
    gap: 1.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const StyledMenuLink = styled(NavLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.35rem 0;
  color: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0.25rem;
    left: 0;
    height: 1px;
    background: currentColor;
    content: '';
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 280ms ease;
  }

  &:hover::after,
  &[aria-current='page']::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 5px;
  }

  @media (max-width: 1024px) {
    min-height: 48px;
    font-size: clamp(1.25rem, 4vw, 1.75rem);
    letter-spacing: 0.1em;
  }

  @media (max-width: 600px) {
    min-height: 48px;
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    letter-spacing: 0.08em;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`

const StyledLanguagePicker = styled.div`
  position: relative;
  margin-left: 0.3rem;

  @media (max-width: 1024px) {
    margin: 0;
  }
`

const StyledMobileMenuToggle = styled.button`
  position: relative;
  z-index: 1003;
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: inline-flex;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`

const StyledToggleIcon = styled.span<{ $isOpen: boolean }>`
  position: relative;
  display: block;
  width: 21px;
  height: 1px;
  background: ${({ $isOpen }) => ($isOpen ? 'transparent' : 'currentColor')};
  transition: background-color 250ms ease;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    width: 21px;
    height: 1px;
    background: currentColor;
    content: '';
    transition: transform 250ms ease;
  }

  &::before {
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0) rotate(45deg)' : 'translateY(-6px)')};
  }

  &::after {
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0) rotate(-45deg)' : 'translateY(6px)')};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before,
    &::after {
      transition: none;
    }
  }
`

const StyledLanguageToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  padding: 0.4rem 0.55rem;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  cursor: pointer;

  &::after {
    width: 0.38rem;
    height: 0.38rem;
    border-right: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    content: '';
    transform: rotate(45deg) translateY(-0.1rem);
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`

const StyledLanguageOptions = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.35rem);
  right: 0;
  z-index: 1004;
  display: ${({ $isOpen }) => ($isOpen ? 'grid' : 'none')};
  min-width: 5rem;
  padding: 0.35rem;
  border: 1px solid rgba(38, 39, 32, 0.08);
  background: #f8f7f3;
  box-shadow: 0 8px 24px rgba(35, 37, 26, 0.12);
  color: #262720;

  @media (max-width: 1024px) {
    right: 50%;
    transform: translateX(50%);
  }
`

const StyledLanguageOption = styled.button`
  min-height: 44px;
  padding: 0.65rem 1rem;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-align: center;
  cursor: pointer;

  &[aria-selected='true'],
  &:hover {
    background: rgba(38, 39, 32, 0.07);
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: -2px;
  }
`

const menuItems: { label: TranslationKey; path: string; end?: boolean }[] = [
  { label: 'nav.home', path: '/', end: true },
  { label: 'nav.tours', path: '/tours' },
  { label: 'nav.cooperation', path: '/cooperation', end: true },
  { label: 'nav.contact', path: '/contact', end: true },
  { label: 'nav.about', path: '/about-us', end: true },
]

const LanguagePicker: React.FC = () => {
  const { language, setLanguage, t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const pickerRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !pickerRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const chooseLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    setIsOpen(false)
  }

  return (
    <StyledLanguagePicker ref={pickerRef}>
      <StyledLanguageToggle
        ref={toggleRef}
        type='button'
        aria-label={t('language.label')}
        aria-expanded={isOpen}
        aria-controls='language-options'
        onClick={() => setIsOpen((open) => !open)}
      >
        {language}
      </StyledLanguageToggle>
      <StyledLanguageOptions
        id='language-options'
        role='group'
        aria-label={t('language.label')}
        aria-hidden={!isOpen}
        $isOpen={isOpen}
      >
        {(['EN', 'PL'] as const).map((option) => (
          <StyledLanguageOption
            key={option}
            type='button'
            aria-pressed={language === option}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => chooseLanguage(option)}
          >
            {option}
          </StyledLanguageOption>
        ))}
      </StyledLanguageOptions>
    </StyledLanguagePicker>
  )
}

const Menubar: React.FC = () => {
  const { t } = useI18n()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(() => window.scrollY > 80)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const isScrolled = hasScrolled || location.pathname !== '/'

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 80)
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.querySelector<HTMLAnchorElement>('#primary-navigation a')?.focus()

    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const languageOptions = document.getElementById('language-options')
        if (languageOptions?.getAttribute('aria-hidden') === 'false') return

        setIsMobileMenuOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key === 'Tab') {
        const menu = document.getElementById('primary-navigation')
        const focusableElements = menu?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]):not([tabindex="-1"])',
        )
        const firstElement = focusableElements?.[0]
        const lastElement = focusableElements?.[focusableElements.length - 1]

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }
    document.addEventListener('keydown', handleMenuKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleMenuKeyDown)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <StyledMenubar $isScrolled={isScrolled} $mobileMenuOpen={isMobileMenuOpen}>
      <StyledBrand>
        <Logo
          large={false}
          light={false}
          lightText={!isScrolled && !isMobileMenuOpen}
        />
      </StyledBrand>
      <StyledNav
        id='primary-navigation'
        aria-label={t('nav.label')}
        $mobileMenuOpen={isMobileMenuOpen}
      >
        {menuItems.map((item) => (
          <StyledMenuLink
            key={item.path}
            to={item.path}
            end={item.end}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t(item.label)}
          </StyledMenuLink>
        ))}
        <LanguagePicker />
      </StyledNav>
      <StyledMobileMenuToggle
        ref={toggleRef}
        type='button'
        aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
        aria-expanded={isMobileMenuOpen}
        aria-controls='primary-navigation'
        onClick={() => setIsMobileMenuOpen((open) => !open)}
      >
        <StyledToggleIcon $isOpen={isMobileMenuOpen} aria-hidden='true' />
      </StyledMobileMenuToggle>
    </StyledMenubar>
  )
}

export default Menubar
