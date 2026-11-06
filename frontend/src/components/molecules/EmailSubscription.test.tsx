import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { I18nProvider } from '../../i18n/I18nContext'
import EmailSubscription from './EmailSubscription'
import { subscribeToNewsletter } from '../../support/api'

jest.mock('../../support/api', () => ({
  subscribeToNewsletter: jest.fn(),
}))

const subscribeMock = subscribeToNewsletter as jest.MockedFunction<
  typeof subscribeToNewsletter
>

const renderSubscription = () =>
  render(
    <I18nProvider>
      <EmailSubscription title='' date='' />
    </I18nProvider>,
  )

beforeEach(() => {
  subscribeMock.mockReset()
})

test('submits a trimmed email and displays the double opt-in success message', async () => {
  subscribeMock.mockResolvedValue({ status: 201 })
  renderSubscription()

  await userEvent.type(
    screen.getByRole('textbox', { name: 'Email address for newsletter' }),
    '  reader@example.com  ',
  )
  await userEvent.click(screen.getByRole('button', { name: 'Inform me' }))

  await waitFor(() => expect(subscribeMock).toHaveBeenCalledWith('reader@example.com'))
  expect(
    await screen.findByText(
      'Thank you for subscribing! Please check your inbox to confirm your email address.',
    ),
  ).toBeInTheDocument()
})

test('displays the backend message for an existing subscription response', async () => {
  subscribeMock.mockResolvedValue({
    status: 200,
    message: 'Żądanie zostało przyjęte',
  })
  renderSubscription()

  await userEvent.type(
    screen.getByRole('textbox', { name: 'Email address for newsletter' }),
    'reader@example.com',
  )
  await userEvent.click(screen.getByRole('button', { name: 'Inform me' }))

  expect(await screen.findByText('Żądanie zostało przyjęte')).toBeInTheDocument()
})

test.each(['', 'not-an-email'])(
  'does not send an empty or invalid email: %s',
  async (email) => {
    renderSubscription()
    const input = screen.getByRole('textbox', { name: 'Email address for newsletter' })
    if (email) fireEvent.change(input, { target: { value: email } })

    await userEvent.click(screen.getByRole('button', { name: 'Inform me' }))

    expect(subscribeMock).not.toHaveBeenCalled()
    expect(
      screen.getByText('Please enter a valid email address.'),
    ).toBeInTheDocument()
  },
)

test('submits on Enter', async () => {
  subscribeMock.mockResolvedValue({ status: 201 })
  renderSubscription()

  const input = screen.getByRole('textbox', { name: 'Email address for newsletter' })
  await userEvent.type(input, 'reader@example.com{enter}')

  await waitFor(() => expect(subscribeMock).toHaveBeenCalledTimes(1))
})

test('disables the form while the request is pending and prevents duplicate submits', async () => {
  let resolveRequest:
    | ((value: Awaited<ReturnType<typeof subscribeToNewsletter>>) => void)
    | undefined
  subscribeMock.mockImplementation(
    () =>
      new Promise((resolve) => {
        resolveRequest = resolve
      }),
  )
  renderSubscription()

  const input = screen.getByRole('textbox', { name: 'Email address for newsletter' })
  const button = screen.getByRole('button', { name: 'Inform me' })
  await userEvent.type(input, 'reader@example.com')
  await userEvent.click(button)
  await userEvent.click(button)

  expect(input).toBeDisabled()
  expect(button).toBeDisabled()
  expect(subscribeMock).toHaveBeenCalledTimes(1)

  resolveRequest?.({ status: 201 })
  await waitFor(() => expect(button).toBeEnabled())
})

test('shows a generic message when the API request fails', async () => {
  subscribeMock.mockRejectedValue(new Error('Network error'))
  renderSubscription()

  await userEvent.type(
    screen.getByRole('textbox', { name: 'Email address for newsletter' }),
    'reader@example.com',
  )
  await userEvent.click(screen.getByRole('button', { name: 'Inform me' }))

  expect(
    await screen.findByText('Something went wrong. Please try again later.'),
  ).toBeInTheDocument()
})
