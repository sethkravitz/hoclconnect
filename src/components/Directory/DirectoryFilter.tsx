import React, { useState } from 'react'
import { Filter, Search, MapPin, Clock, DollarSign } from 'lucide-react'

interface FilterProps {
  onFilterChange?: (filters: any) => void
  filterType: 'suppliers' | 'bottlers' | 'private-label'
}

const DirectoryFilter = ({ onFilterChange, filterType }: FilterProps) => {
  const [filters, setFilters] = useState({
    search: '',
    industry: '',
    region: '',
    container: '',
    volume: '',
    leadTime: '',
    moq: ''
  })

  const updateFilter = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const getIndustryOptions = () => [
    { value: '', label: 'All Industries' },
    { value: 'beauty', label: 'Beauty & Skincare' },
    { value: 'jan-san', label: 'Janitorial & Sanitation' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'veterinary', label: 'Veterinary' },
    { value: 'food-processing', label: 'Food Processing' },
    { value: 'clinical', label: 'Clinical/Dental' },
    { value: 'other', label: 'Other' }
  ]

  const getRegionOptions = () => [
    { value: '', label: 'All Regions' },
    { value: 'northeast', label: 'Northeast US' },
    { value: 'southeast', label: 'Southeast US' },
    { value: 'midwest', label: 'Midwest US' },
    { value: 'southwest', label: 'Southwest US' },
    { value: 'west', label: 'West Coast US' },
    { value: 'canada', label: 'Canada' },
    { value: 'international', label: 'International' }
  ]

  const getContainerOptions = () => {
    switch (filterType) {
      case 'suppliers':
        return [
          { value: '', label: 'All Container Types' },
          { value: 'ibc', label: 'IBC Totes' },
          { value: 'drums', label: 'Drums (55-gal)' },
          { value: 'bottles', label: 'Bottles (1L-5L)' },
          { value: 'custom', label: 'Custom Packaging' }
        ]
      case 'bottlers':
        return [
          { value: '', label: 'All Formats' },
          { value: 'bottles', label: 'Bottles' },
          { value: 'spray', label: 'Spray Bottles' },
          { value: 'pouches', label: 'Pouches' },
          { value: 'custom', label: 'Custom Formats' }
        ]
      case 'private-label':
        return [
          { value: '', label: 'All Packaging' },
          { value: 'complete', label: 'Complete Packaging' },
          { value: 'bottles', label: 'Bottle Products' },
          { value: 'industrial', label: 'Industrial Containers' },
          { value: 'retail', label: 'Retail Packaging' }
        ]
      default:
        return []
    }
  }

  const getVolumeOptions = () => [
    { value: '', label: 'All Volumes' },
    { value: 'small', label: 'Small (<1,000 gal/month)' },
    { value: 'medium', label: 'Medium (1,000-10,000 gal/month)' },
    { value: 'large', label: 'Large (10,000+ gal/month)' }
  ]

  const getMOQOptions = () => [
    { value: '', label: 'All MOQs' },
    { value: 'low', label: 'Low MOQ (<$10k)' },
    { value: 'medium', label: 'Medium MOQ ($10k-$50k)' },
    { value: 'high', label: 'High MOQ ($50k+)' }
  ]

  const getLeadTimeOptions = () => [
    { value: '', label: 'All Lead Times' },
    { value: 'rush', label: 'Rush Orders (1-2 weeks)' },
    { value: 'standard', label: 'Standard (2-4 weeks)' },
    { value: 'extended', label: 'Extended (4+ weeks)' }
  ]

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="h-5 w-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Example Filter Options</h3>
      </div>
      
      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          These filters show the types of criteria we use to match you with the right partners. 
          Use our guided form below to get personalized matches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search partners..."
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Industry */}
        <div>
          <select
            value={filters.industry}
            onChange={(e) => updateFilter('industry', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            {getIndustryOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Region */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <select
            value={filters.region}
            onChange={(e) => updateFilter('region', e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            {getRegionOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Container/Format */}
        <div>
          <select
            value={filters.container}
            onChange={(e) => updateFilter('container', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            {getContainerOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Volume */}
        <div>
          <select
            value={filters.volume}
            onChange={(e) => updateFilter('volume', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            {getVolumeOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Lead Time */}
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <select
            value={filters.leadTime}
            onChange={(e) => updateFilter('leadTime', e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            {getLeadTimeOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* MOQ (for bottlers and private label) */}
        {(filterType === 'bottlers' || filterType === 'private-label') && (
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={filters.moq}
              onChange={(e) => updateFilter('moq', e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              {getMOQOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button
          onClick={() => {
            const resetFilters = {
              search: '',
              industry: '',
              region: '',
              container: '',
              volume: '',
              leadTime: '',
              moq: ''
            }
            setFilters(resetFilters)
            onFilterChange(resetFilters)
          }}
          className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  )
}

export default DirectoryFilter