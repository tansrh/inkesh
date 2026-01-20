-- src/db/schema.sql
-- Artists Table
CREATE TABLE IF NOT EXISTS artists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  bio TEXT,
  portfolio JSONB
);
-- Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES artists(id),
  name VARCHAR(100) NOT NULL,
  contact VARCHAR(100) NOT NULL,
  preferred_date TIMESTAMP,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);


/*

ALTER TABLE bookings DROP CONSTRAINT bookings_artist_id_fkey;

ALTER TABLE bookings
ADD CONSTRAINT bookings_artist_id_fkey
FOREIGN KEY (artist_id) REFERENCES artists(id) ON DELETE CASCADE;


*/