import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Menubar from './Menubar'
import { I18nProvider } from '../../i18n/I18nContext'

const renderMenubar = () => render(
  <MemoryRouter>
    <I18nProvider>
      <Menubar />
    </I18nProvider>
  </MemoryRouter>,
)

beforeEach(() => {
  window.localStorage.clear()
})

test('renders navigation and the mobile menu toggle', () => {
  renderMenubar()

  expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact')
  expect(screen.getByRole('button', { name: /open navigation menu/i })).toHaveAttribute('aria-expanded', 'false')
})

test('opens the mobile menu and locks background scrolling', async () => {
  renderMenubar()

  const toggle = screen.getByRole('button', { name: /open navigation menu/i })
  await userEvent.click(toggle)

  expect(toggle).toHaveAttribute('aria-expanded', 'true')
  expect(document.body.style.overflow).toBe('hidden')
  expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact')
})

test('closes the mobile menu with Escape and restores focus', async () => {
  renderMenubar()

  const toggle = screen.getByRole('button', { name: /open navigation menu/i })
  await userEvent.click(toggle)
  fireEvent.keyDown(document, { key: 'Escape' })

  expect(toggle).toHaveAttribute('aria-expanded', 'false')
  expect(document.body.style.overflow).toBe('')
  expect(toggle).toHaveFocus()
})

test('closes the mobile menu after choosing a route', async () => {
  renderMenubar()

  const toggle = screen.getByRole('button', { name: /open navigation menu/i })
  await userEvent.click(toggle)
  await userEvent.click(screen.getByRole('link', { name: /contact/i }))

  expect(toggle).toHaveAttribute('aria-expanded', 'false')
  expect(document.body.style.overflow).toBe('')
})

test('keeps the mobile navigation open until a route is selected or Escape is pressed', async () => {
  renderMenubar()

  const toggle = screen.getByRole('button', { name: /open navigation menu/i })
  await userEvent.click(toggle)
  expect(toggle).toHaveAttribute('aria-expanded', 'true')
  expect(document.body.style.overflow).toBe('hidden')

  fireEvent.keyDown(document, { key: 'Escape' })
  expect(toggle).toHaveAttribute('aria-expanded', 'false')
  expect(document.body.style.overflow).toBe('')
  expect(toggle).toHaveFocus()

  await userEvent.click(toggle)
  await userEvent.click(screen.getByRole('link', { name: /contact/i }))
  expect(toggle).toHaveAttribute('aria-expanded', 'false')
  expect(document.body.style.overflow).toBe('')
})

test('changes language and closes the language list with Escape', async () => {
  renderMenubar()

  const languageToggle = screen.getByRole('button', { name: 'Language' })
  await userEvent.click(languageToggle)
  const languageOptions = screen.getByRole('group', { name: 'Language', hidden: true })
  expect(languageOptions).toBeVisible()
  fireEvent.keyDown(document, { key: 'Escape' })
  expect(languageOptions).not.toBeVisible()
  expect(languageToggle).toHaveFocus()

  await userEvent.click(languageToggle)
  await userEvent.click(screen.getByRole('button', { name: 'PL' }))

  expect(screen.getByRole('link', { name: /strona główna/i })).toBeInTheDocument()
  expect(window.localStorage.getItem('app-language')).toBe('PL')
})

test('closes the language list when clicking outside it', async () => {
  renderMenubar()

  await userEvent.click(screen.getByRole('button', { name: 'Language' }))
  const languageOptions = screen.getByRole('group', { name: 'Language', hidden: true })
  fireEvent.pointerDown(document.body)

  expect(languageOptions).not.toBeVisible()
})
