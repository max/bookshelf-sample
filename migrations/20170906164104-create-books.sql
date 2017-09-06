-- MIGRATE-UP! --
CREATE TABLE books(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  description text,
  created_at timestamptz NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at timestamptz NOT NULL DEFAULT timezone('utc'::text, now())
);
-- MIGRATE-DOWN! --
DROP TABLE books;
