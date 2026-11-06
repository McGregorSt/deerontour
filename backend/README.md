# Backend API

## Newsletter subscription

`POST /api/v1/newsletter/subscribe` accepts a JSON body containing an `email` string:

```json
{
  "email": "user@example.com"
}
```

The backend trims surrounding whitespace, normalizes the address to lowercase,
and validates its format. A new address is saved with the `pending` status. An
existing address does not create another record; a previously unsubscribed
address is returned to `pending`, with its prior confirmation data cleared.
Response bodies are the same for new and existing addresses. The required
`201`/`200` status distinction still reveals whether an address was already
stored; the rate limit reduces, but does not eliminate, the possibility of
address enumeration. Email confirmation and message delivery are not
implemented yet.

| HTTP status | Response |
| --- | --- |
| `201 Created` | `{"message":"Żądanie zostało przyjęte"}` for a new address |
| `200 OK` | `{"message":"Żądanie zostało przyjęte"}` for an existing address |
| `400 Bad Request` | `{"message":"Podaj prawidłowy adres e-mail"}` |
| `429 Too Many Requests` | Rate limit exceeded; retry later |
| `500 Internal Server Error` | `{"message":"Wystąpił błąd serwera"}` |

Requests are limited to five per IP address per 15-minute window in each
backend process. No endpoint exposes the subscriber list.

## Applying the newsletter migration

The project has no migration runner; existing database changes are SQL files
applied manually. Before deploying the code, apply the migration to the same
PostgreSQL database used by the backend:

```sh
cd /var/www/deerontour/backend
psql -h <host> -U <user> -d <database> -v ON_ERROR_STOP=1 -f migrations/003-newsletter-subscribers.sql
```

The migration only creates `newsletter_subscribers`, its status constraint,
and a unique index on `LOWER(email)`. It is safe to rerun. Do not run it against
production until the host, user, and database have been verified.

Example request:

```sh
curl -i -X POST https://deerontour.com/api/v1/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"newsletter-test@example.invalid"}'
```

After making that request, verify the record in the same PostgreSQL database:

```sql
SELECT id, email, status, confirmation_token_hash, confirmed_at,
       unsubscribed_at, created_at, updated_at
FROM newsletter_subscribers
WHERE email = LOWER('newsletter-test@example.invalid');
```

Run the backend tests with `npm test` from the `backend` directory. They cover
normalization, invalid input, duplicate states, resubscription, concurrent
duplicate handling, and rate limiting; they do not require a live database.

The in-memory rate limit is local to one process and is not shared across
multiple backend instances. Use a shared rate-limit store if the backend is
later scaled horizontally.
