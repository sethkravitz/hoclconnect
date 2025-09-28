/*
  # Create leads table for HOCl marketplace

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `intent` (text) - supplier, bottler, private-label
      - `industry` (text) - beauty, jan-san, agriculture, etc.
      - `company_name` (text)
      - `contact_name` (text)
      - `contact_email` (text)
      - `contact_phone` (text, optional)
      - `requirements` (jsonb) - dynamic requirements based on intent/industry
      - `budget_band` (text, optional)
      - `notes` (text, optional)
      - `status` (text) - new, processing, matched, closed
      - `created_at` (timestamptz)
      
  2. Security
    - Enable RLS on `leads` table
    - Add policy for authenticated users to insert leads
    - Add policy for admin users to read/update leads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  intent text NOT NULL CHECK (intent IN ('supplier', 'bottler', 'private-label')),
  industry text NOT NULL,
  company_name text NOT NULL,
  contact_name text NOT NULL,
  contact_email text NOT NULL,
  contact_phone text,
  requirements jsonb NOT NULL DEFAULT '{}',
  budget_band text,
  notes text,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'processing', 'matched', 'closed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (for the intake form)
CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users with admin role to read all leads
CREATE POLICY "Admins can read all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.raw_app_meta_data->>'role' = 'admin'
    )
  );

-- Allow authenticated users with admin role to update leads
CREATE POLICY "Admins can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.raw_app_meta_data->>'role' = 'admin'
    )
  );