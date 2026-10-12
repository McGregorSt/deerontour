import React from 'react'
import { render, screen } from '@testing-library/react'
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

test('renders a mobile menu toggle', () => {
  renderMenubar()

  const toggle = screen.getByRole('button', { name: /open navigation menu/i })

  expect(toggle).toBeInTheDocument()
  expect(toggle).toHaveAttribute('aria-expanded', 'false')
})

test('opens the mobile menu and exposes correct route links', async () => {
  renderMenubar()

  const toggle = screen.getByRole('button', { name: /open navigation menu/i })

  await userEvent.click(toggle)

  expect(toggle).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact')
})
