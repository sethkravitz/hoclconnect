/*
  # Create partners and matches tables for HOCl Connect

  1. New Tables
    - `partners`
      - `id` (uuid, primary key)
      - `created_at` (timestamptz, default now())
      - `company_name` (text, not null)
      - `type` (text, check constraint for partner types)
      - `industries` (text[], array of industries they serve)
      - `regions` (text[], array of regions they cover)
      - `containers` (text[], array of container types they offer)
      - `ppm_ranges` (text[], array of PPM ranges they provide)
      - `moq_notes` (text, optional)
      - `leadtime_range_weeks` (text, optional)
      - `certs_summary` (text, optional)
      - `contact_email` (text, optional)
      - `active` (boolean, default true)
    
    - `matches`
      - `id` (uuid, primary key)
      - `lead_id` (uuid, references leads)
      - `partner_id` (uuid, references partners)
      - `matched_at` (timestamptz, default now())
      - `reason` (text, optional explanation of match logic)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage partners
    - Add policies for public to read active partners (for future directory)
*/

CREATE TABLE IF NOT EXISTS partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  company_name text NOT NULL,
  type text CHECK (type IN ('supplier', 'bottler', 'private-label')) NOT NULL,
  industries text[] NOT NULL DEFAULT '{}',
  regions text[] NOT NULL DEFAULT '{}',
  containers text[] NOT NULL DEFAULT '{}',
  ppm_ranges text[] NOT NULL DEFAULT '{}',
  moq_notes text,
  leadtime_range_weeks text,
  certs_summary text,
  contact_email text,
  active boolean DEFAULT true
);

CREATE TABLE IF NOT EXISTS matches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid REFERENCES leads(id) ON DELETE CASCADE,
  partner_id uuid REFERENCES partners(id) ON DELETE CASCADE,
  matched_at timestamptz DEFAULT now(),
  reason text
);

-- Enable RLS
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;

-- Policies for partners
CREATE POLICY "Authenticated users can manage partners"
  ON partners
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Public can read active partners"
  ON partners
  FOR SELECT
  TO public
  USING (active = true);

-- Policies for matches
CREATE POLICY "Authenticated users can manage matches"
  ON matches
  FOR ALL
  TO authenticated
  USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_partners_type ON partners(type);
CREATE INDEX IF NOT EXISTS idx_partners_active ON partners(active);
CREATE INDEX IF NOT EXISTS idx_partners_industries ON partners USING GIN(industries);
CREATE INDEX IF NOT EXISTS idx_partners_regions ON partners USING GIN(regions);

CREATE INDEX IF NOT EXISTS idx_matches_lead_id ON matches(lead_id);
CREATE INDEX IF NOT EXISTS idx_matches_partner_id ON matches(partner_id);
CREATE INDEX IF NOT EXISTS idx_matches_matched_at ON matches(matched_at DESC);