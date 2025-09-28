import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, X, Mail, Target } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import Card from './Card'

interface MidArticleCTAProps {
  path?: 'bulk' | 'private-label'
  useCase?: string
  title?: string
  description?: string
}

const MidArticleCTA = ({ 
  path, 
  useCase, 
  title = "Get a Tailored Shortlist",
  description = "Tell us your needs and get matched with the right partners in 1-3 business days."
}: MidArticleCTAProps) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    selectedPath: path || '',
    selectedUseCase: useCase || ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track conversion event
    trackEvent('cta_click', {
      cta_type: 'mid_article',
      cta_title: title,
      path: formData.selectedPath,
      use_case: formData.selectedUseCase,
      source_page: window.location.pathname
    })

    // Build query params for /quote
    const params = new URLSearchParams()
    if (formData.selectedPath) params.set('path', formData.selectedPath)
    if (formData.selectedUseCase) params.set('use', formData.selectedUseCase)
    if (formData.email) params.set('email', formData.email)

    // Navigate to quote with prefilled data
    navigate(`/quote?${params.toString()}`)
    setIsModalOpen(false)
  }

  const openModal = () => {
    trackEvent('cta_click', {
      cta_type: 'mid_article_open',
      cta_title: title,
      source_page: window.location.pathname
    })
    setIsModalOpen(true)
  }

  return (
    <>
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white text-center my-12">
        <Card.Content className="p-8">
          <Target className="h-10 w-10 text-blue-200 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">
            {description}
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            <span>Get My Shortlist</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-blue-200 text-sm mt-3">Free service • Usually 1-3 business days</p>
        </Card.Content>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Get Your Tailored Shortlist</h4>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are you looking for? *
                </label>
                <select
                  required
                  value={formData.selectedPath}
                  onChange={(e) => setFormData(prev => ({ ...prev, selectedPath: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select option</option>
                  <option value="bulk">Get Bulk HOCl Liquid</option>
                  <option value="pl">Launch My Own HOCl Product</option>
                </select>
              </div>

              {formData.selectedPath === 'bulk' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Use case (optional)
                  </label>
                  <select
                    value={formData.selectedUseCase}
                    onChange={(e) => setFormData(prev => ({ ...prev, selectedUseCase: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select use case</option>
                    <option value="janitorial">Janitorial/Facility Cleaning</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="food-processing">Food Processing</option>
                    <option value="clinical">Clinical/Healthcare</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Continue to Full Form</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-3 text-center">
              This will take you to our detailed form to get matched with partners.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default MidArticleCTA