CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'active', 'unsubscribed')),
  confirmation_token_hash VARCHAR(64),
  confirmed_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'newsletter_subscribers_status_check'
      AND conrelid = 'newsletter_subscribers'::regclass
  ) THEN
    ALTER TABLE newsletter_subscribers
      ADD CONSTRAINT newsletter_subscribers_status_check
      CHECK (status IN ('pending', 'active', 'unsubscribed'));
  END IF;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS newsletter_subscribers_email_lower_unique
  ON newsletter_subscribers (LOWER(email));
