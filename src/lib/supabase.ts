// Legacy Supabase file - no longer used
// The application now uses Replit Database with PostgreSQL
// This file is kept for reference but should be removed in the future

console.warn('Supabase is no longer used - this file should be removed')

export const supabase = null

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          created_at: string
          intent: 'supplier' | 'private-label'
          industry: string
          amount_band?: string
          cadence?: string
          timeline?: string
          strength_choice?: string
          format?: string
          packaging_goal?: string
          ack_purity: boolean
          notes?: string
          companion_interest: boolean
          region_pref?: string
          company?: string
          contact_name?: string
          email?: string
          phone?: string
          experience_level?: string
          unknown_fields?: Record<string, any>
          score: number
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          intent: 'supplier' | 'private-label'
          industry: string
          amount_band?: string
          cadence?: string
          timeline?: string
          strength_choice?: string
          format?: string
          packaging_goal?: string
          ack_purity?: boolean
          notes?: string
          companion_interest?: boolean
          region_pref?: string
          company?: string
          contact_name?: string
          email?: string
          phone?: string
          experience_level?: string
          unknown_fields?: Record<string, any>
          score?: number
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          intent?: 'supplier' | 'private-label'
          industry?: string
          amount_band?: string
          cadence?: string
          timeline?: string
          strength_choice?: string
          format?: string
          packaging_goal?: string
          ack_purity?: boolean
          notes?: string
          companion_interest?: boolean
          region_pref?: string
          company?: string
          contact_name?: string
          email?: string
          phone?: string
          experience_level?: string
          unknown_fields?: Record<string, any>
          score?: number
          status?: string
        }
      }
      partners: {
        Row: {
          id: string
          created_at: string
          company_name: string
          type: 'supplier' | 'private-label'
          industries: string[]
          regions: string[]
          containers: string[]
          ppm_ranges: string[]
          moq_notes?: string
          leadtime_range_weeks?: string
          certs_summary?: string
          contact_email?: string
          active: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          company_name: string
          type: 'supplier' | 'private-label'
          industries: string[]
          regions: string[]
          containers: string[]
          ppm_ranges: string[]
          moq_notes?: string
          leadtime_range_weeks?: string
          certs_summary?: string
          contact_email?: string
          active?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          company_name?: string
          type?: 'supplier' | 'private-label'
          industries?: string[]
          regions?: string[]
          containers?: string[]
          ppm_ranges?: string[]
          moq_notes?: string
          leadtime_range_weeks?: string
          certs_summary?: string
          contact_email?: string
          active?: boolean
        }
      }
      matches: {
        Row: {
          id: string
          lead_id: string
          partner_id: string
          matched_at: string
          reason?: string
        }
        Insert: {
          id?: string
          lead_id: string
          partner_id: string
          matched_at?: string
          reason?: string
        }
        Update: {
          id?: string
          lead_id?: string
          partner_id?: string
          matched_at?: string
          reason?: string
        }
      }
    }
  }
}