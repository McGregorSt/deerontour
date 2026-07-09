import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Menubar from './Menubar'

test('renders a mobile menu toggle', () => {
  render(
    <MemoryRouter>
      <Menubar />
    </MemoryRouter>,
  )

  expect(screen.getByRole('button', { name: /open navigation menu/i })).toBeInTheDocument()
})
