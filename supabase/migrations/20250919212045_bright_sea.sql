/*
  # Remove bottler types from database schema

  1. Schema Updates
    - Remove 'bottler' from leads.intent check constraint
    - Remove 'bottler' from partners.type check constraint
    - Update any existing 'bottler' records to 'supplier' type

  2. Data Migration
    - Convert existing bottler leads to supplier leads
    - Convert existing bottler partners to supplier partners

  3. Security
    - No RLS policy changes needed
*/

-- Update existing bottler leads to supplier
UPDATE leads 
SET intent = 'supplier' 
WHERE intent = 'bottler';

-- Update existing bottler partners to supplier
UPDATE partners 
SET type = 'supplier' 
WHERE type = 'bottler';

-- Drop existing check constraints
ALTER TABLE leads DROP CONSTRAINT IF EXISTS leads_intent_check;
ALTER TABLE partners DROP CONSTRAINT IF EXISTS partners_type_check;

-- Recreate check constraints without 'bottler'
ALTER TABLE leads 
ADD CONSTRAINT leads_intent_check 
CHECK (intent = ANY (ARRAY['supplier'::text, 'private-label'::text]));

ALTER TABLE partners 
ADD CONSTRAINT partners_type_check 
CHECK (type = ANY (ARRAY['supplier'::text, 'private-label'::text]));