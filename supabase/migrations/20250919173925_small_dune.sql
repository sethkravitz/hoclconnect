/*
  # Create capabilities table for dynamic form options

  1. New Tables
    - `capabilities`
      - `id` (uuid, primary key)
      - `category` (text) - e.g., 'ppm_ranges', 'containers', 'regions'
      - `subcategory` (text, optional) - for further grouping
      - `value` (text) - the actual value used in forms
      - `display_name` (text) - human-readable name
      - `sort_order` (integer, optional) - for ordering options
      - `is_active` (boolean) - to enable/disable options
      
  2. Security
    - Enable RLS on `capabilities` table
    - Add policy for public read access to active capabilities
    - Add policy for admin users to manage capabilities
    
  3. Sample Data
    - Insert common capability options for the marketplace
*/

CREATE TABLE IF NOT EXISTS capabilities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  subcategory text,
  value text NOT NULL,
  display_name text NOT NULL,
  sort_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_capabilities_category_active 
  ON capabilities(category, is_active) 
  WHERE is_active = true;

ALTER TABLE capabilities ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active capabilities
CREATE POLICY "Public can read active capabilities"
  ON capabilities
  FOR SELECT
  TO public
  USING (is_active = true);

-- Allow authenticated admin users to manage capabilities
CREATE POLICY "Admins can manage capabilities"
  ON capabilities
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.raw_app_meta_data->>'role' = 'admin'
    )
  );

-- Insert sample capabilities data
INSERT INTO capabilities (category, value, display_name, sort_order) VALUES
-- PPM Ranges
('ppm_ranges', '0-50', '0-50 PPM', 1),
('ppm_ranges', '50-100', '50-100 PPM', 2),
('ppm_ranges', '100-200', '100-200 PPM', 3),
('ppm_ranges', '200-500', '200-500 PPM', 4),
('ppm_ranges', '500+', '500+ PPM', 5),
('ppm_ranges', 'variable', 'Variable/Custom', 6),

-- Volume Ranges
('volume_ranges', 'small', 'Small (<1,000 gallons/month)', 1),
('volume_ranges', 'medium', 'Medium (1,000-10,000 gallons/month)', 2),
('volume_ranges', 'large', 'Large (10,000+ gallons/month)', 3),
('volume_ranges', 'custom', 'Custom volume', 4),

-- Container Types
('containers', 'ibc-totes', 'IBC Totes', 1),
('containers', 'drums-55gal', 'Drums (55-gal)', 2),
('containers', 'bottles-1l-5l', 'Bottles (1L-5L)', 3),
('containers', 'spray-bottles', 'Spray Bottles', 4),
('containers', 'custom-packaging', 'Custom Packaging', 5),
('containers', 'flexible', 'Flexible', 6),

-- Timelines
('timelines', 'asap', 'ASAP (Rush order)', 1),
('timelines', '1-month', 'Within 1 month', 2),
('timelines', '2-3-months', '2-3 months', 3),
('timelines', '3-6-months', '3-6 months', 4),
('timelines', '6-months+', '6+ months (Planning ahead)', 5),

-- Regions
('regions', 'northeast', 'Northeast US', 1),
('regions', 'southeast', 'Southeast US', 2),
('regions', 'midwest', 'Midwest US', 3),
('regions', 'southwest', 'Southwest US', 4),
('regions', 'west', 'West Coast US', 5),
('regions', 'canada', 'Canada', 6),
('regions', 'international', 'International', 7),

-- Budget Bands
('budget_bands', 'under-10k', 'Under $10,000', 1),
('budget_bands', '10k-50k', '$10,000 - $50,000', 2),
('budget_bands', '50k-100k', '$50,000 - $100,000', 3),
('budget_bands', '100k-500k', '$100,000 - $500,000', 4),
('budget_bands', '500k+', '$500,000+', 5);