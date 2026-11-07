const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const sequelize = require('./util/database');

const migrationsDir = path.join(__dirname, 'migrations');

const legacyMigrations = [
  '001-internationalized-post-content.sql',
  '002-add-post-data.sql',
  '003-newsletter-subscribers.sql',
];

function getChecksum(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

async function getMigrationChecksum(filename) {
  const content = fs.readFileSync(
    path.join(migrationsDir, filename),
    'utf8'
  );

  return getChecksum(content);
}

async function bootstrapLegacyMigrations() {
  const [rows] = await sequelize.query(`
    SELECT
      to_regclass('public.post_translations') IS NOT NULL
        AS has_translations,

      to_regclass('public.newsletter_subscribers') IS NOT NULL
        AS has_newsletter,

      to_regclass('public.newsletter_subscribers_email_lower_unique')
        IS NOT NULL AS has_newsletter_index,

      EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'posts'
          AND column_name = 'map_data'
      ) AS has_map_data,

      NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'posts'
          AND column_name IN (
            'title',
            'subtitle',
            'text_lead',
            'text_paragraphs',
            'metadata',
            'hero'
          )
      ) AS old_columns_removed,

      NOT EXISTS (
        SELECT 1
        FROM posts p
        WHERE NOT EXISTS (
          SELECT 1 FROM post_translations t
          WHERE t.post_id = p.id AND t.language = 'EN'
        )
        OR NOT EXISTS (
          SELECT 1 FROM post_translations t
          WHERE t.post_id = p.id AND t.language = 'PL'
        )
      ) AS translations_complete
  `);

  const state = rows[0];

  const verified =
    state.has_translations &&
    state.has_newsletter &&
    state.has_newsletter_index &&
    state.has_map_data &&
    state.old_columns_removed &&
    state.translations_complete;

  if (!verified) {
    throw new Error(
      'Nie można potwierdzić stanu wcześniejszych migracji. Przerwano bootstrap.'
    );
  }

  for (const filename of legacyMigrations) {
    const checksum = await getMigrationChecksum(filename);

    const [existing] = await sequelize.query(
      `SELECT checksum FROM schema_migrations WHERE filename = :filename`,
      { replacements: { filename } }
    );

    if (existing.length > 0) {
      if (existing[0].checksum !== checksum) {
        throw new Error(`Niezgodny checksum migracji: ${filename}`);
      }

      continue;
    }

    await sequelize.query(
      `INSERT INTO schema_migrations (filename, checksum)
       VALUES (:filename, :checksum)`,
      { replacements: { filename, checksum } }
    );

    console.log(`Oznaczono jako wcześniej wykonaną: ${filename}`);
  }
}

async function runMigrations() {
  await sequelize.authenticate();

  await sequelize.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      filename TEXT PRIMARY KEY,
      checksum TEXT NOT NULL,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await bootstrapLegacyMigrations();

  const files = fs
    .readdirSync(migrationsDir)
    .filter((file) => file.endsWith('.sql'))
    .sort();

  for (const filename of files) {
    const filePath = path.join(migrationsDir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const checksum = getChecksum(content);

    const [existing] = await sequelize.query(
      `SELECT checksum FROM schema_migrations WHERE filename = :filename`,
      { replacements: { filename } }
    );

    if (existing.length > 0) {
      if (existing[0].checksum !== checksum) {
        throw new Error(
          `Migracja ${filename} została zmieniona po wykonaniu.`
        );
      }

      console.log(`Pominięto: ${filename}`);
      continue;
    }

    const transaction = await sequelize.transaction();

    try {
      await sequelize.query(content, { transaction });

      await sequelize.query(
        `INSERT INTO schema_migrations (filename, checksum)
         VALUES (:filename, :checksum)`,
        {
          replacements: { filename, checksum },
          transaction,
        }
      );

      await transaction.commit();

      console.log(`Wykonano: ${filename}`);
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  console.log('Migracje zakończone.');
}

runMigrations()
  .catch((error) => {
    console.error('Błąd migracji:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await sequelize.close();
  });