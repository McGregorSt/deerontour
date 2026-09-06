import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Menubar from './Menubar'

test('renders a mobile menu toggle', () => {
  render(
    <MemoryRouter>
      <Menubar />
    </MemoryRouter>,
  )

  const toggle = screen.getByRole('button', { name: /open navigation menu/i })

  expect(toggle).toBeInTheDocument()
  expect(toggle).toHaveAttribute('aria-expanded', 'false')
})

test('opens the mobile menu and exposes correct route links', async () => {
  render(
    <MemoryRouter>
      <Menubar />
    </MemoryRouter>,
  )

  const toggle = screen.getByRole('button', { name: /open navigation menu/i })

  await userEvent.click(toggle)

  expect(toggle).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact')
})
