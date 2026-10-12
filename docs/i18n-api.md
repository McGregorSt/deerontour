# Internationalized content API

The client stores the selected language as `EN` or `PL` and sends it as a `lang` query parameter. UI labels come from `src/i18n/translations.ts`; post copy is returned by the API for the requested language.

## Translation table

Keep canonical identifiers and image paths on the base post. Store translatable copy separately:

```sql
CREATE TABLE post_translations (
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  language CHAR(2) NOT NULL CHECK (language IN ('EN', 'PL')),
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL DEFAULT '',
  country_label TEXT NOT NULL,
  text_lead TEXT NOT NULL DEFAULT '',
  text_paragraphs JSONB NOT NULL DEFAULT '[]'::jsonb,
  metadata JSONB,
  hero JSONB,
  PRIMARY KEY (post_id, language)
);
```

`text_paragraphs` uses the client shape `[ { "paragraphLead": "...", "paragraphText": ["..."] } ]`. Store one row for each supported language per published post.

## API contract

Accept `lang=EN|PL` on list and detail routes, for example:

```text
GET /blog/tours?lang=PL
GET /blog/tours/details/iceland?lang=EN
GET /blog/tours/europe?lang=PL
GET /blog/tours/countries/europe?lang=PL
```

Join the requested translation in the same query as the post:

```sql
SELECT p.id, p.country, p.continent, p.image_url, t.language,
       t.title, t.subtitle, t.country_label, t.text_lead,
       t.text_paragraphs, t.metadata, t.hero
FROM posts AS p
JOIN post_translations AS t ON t.post_id = p.id
WHERE t.language = $1;
```

For country filters, return stable codes and localized labels so filtering remains language-independent:

```json
{ "countries": [{ "code": "iceland", "label": "Islandia" }] }
```

## Rollout

1. Create `post_translations` and add EN and PL rows for each post.
2. Read and validate the `lang` query parameter on every content endpoint; default missing values to `EN`.
3. Return the matching translation fields and `language` with each post. The client also accepts a `translations` object for local/mock records.
4. Use the language selector in the global menu to switch locale; the provider persists it and content views refetch with the selected code.