-- Migration: create study rooms tables
-- Run this against your Supabase project via the SQL Editor or supabase db push.

-- ============================================================================
-- study_rooms
-- ============================================================================
CREATE TABLE IF NOT EXISTS study_rooms (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic                 TEXT NOT NULL,
  name                  TEXT NOT NULL,
  description           TEXT,
  tags                  TEXT[]   NOT NULL DEFAULT '{}',
  status                TEXT     NOT NULL DEFAULT 'active'
                          CHECK (status IN ('active', 'archived')),
  max_participants      INTEGER  CHECK (max_participants > 0),
  created_by_public_key TEXT     NOT NULL,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for topic-based queries (most common filter)
CREATE INDEX IF NOT EXISTS idx_study_rooms_topic
  ON study_rooms (topic, status, created_at DESC);

-- Index for creator lookup
CREATE INDEX IF NOT EXISTS idx_study_rooms_created_by
  ON study_rooms (created_by_public_key);

-- ============================================================================
-- study_room_members
-- ============================================================================
CREATE TABLE IF NOT EXISTS study_room_members (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id     UUID NOT NULL REFERENCES study_rooms(id) ON DELETE CASCADE,
  public_key  TEXT NOT NULL,
  joined_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT uq_room_member UNIQUE (room_id, public_key)
);

CREATE INDEX IF NOT EXISTS idx_study_room_members_room
  ON study_room_members (room_id, joined_at ASC);

CREATE INDEX IF NOT EXISTS idx_study_room_members_key
  ON study_room_members (public_key);

-- ============================================================================
-- study_room_messages
-- ============================================================================
CREATE TABLE IF NOT EXISTS study_room_messages (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id            UUID NOT NULL REFERENCES study_rooms(id) ON DELETE CASCADE,
  sender_public_key  TEXT NOT NULL,
  content            TEXT NOT NULL CHECK (char_length(content) <= 2000),
  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  edited_at          TIMESTAMPTZ
);

-- Paginated message history (newest first per room)
CREATE INDEX IF NOT EXISTS idx_study_room_messages_room
  ON study_room_messages (room_id, created_at DESC);
