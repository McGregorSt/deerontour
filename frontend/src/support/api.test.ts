import { subscribeToNewsletter } from './api'

const originalFetch = global.fetch
const fetchMock = jest.fn()

beforeEach(() => {
  fetchMock.mockReset()
  global.fetch = fetchMock
})

afterAll(() => {
  global.fetch = originalFetch
})

test('posts the newsletter email as JSON and returns the backend response', async () => {
  fetchMock.mockResolvedValue({
    status: 200,
    headers: { get: () => 'application/json; charset=utf-8' },
    json: async () => ({ message: 'Żądanie zostało przyjęte' }),
  })

  await expect(subscribeToNewsletter('reader@example.com')).resolves.toEqual({
    status: 200,
    message: 'Żądanie zostało przyjęte',
  })
  expect(fetchMock).toHaveBeenCalledWith(
    expect.stringMatching(/\/api\/v1\/newsletter\/subscribe$/),
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'reader@example.com' }),
    },
  )
})

test('rejects non-JSON API responses so the form can show a generic failure', async () => {
  fetchMock.mockResolvedValue({
    status: 500,
    headers: { get: () => 'text/html' },
  })

  await expect(
    subscribeToNewsletter('reader@example.com'),
  ).rejects.toThrow('Newsletter API returned a non-JSON response')
})
