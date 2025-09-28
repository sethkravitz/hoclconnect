import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Clock, Users, ArrowRight } from 'lucide-react'
import MetaTags from '../components/SEO/MetaTags'
import Card from '../components/UI/Card'

interface LeadSummary {
  path?: string
  company?: string
  contact_name?: string
  email?: string
  requirements?: any
  submitted_at?: string
}

const ThankYouPage = () => {
  const [leadSummary, setLeadSummary] = useState<LeadSummary | null>(null)

  useEffect(() => {
    // Retrieve lead summary from localStorage
    try {
      const stored = localStorage.getItem('lastSubmittedLead')
      if (stored) {
        const summary = JSON.parse(stored)
        setLeadSummary(summary)
        // Clear after reading to avoid stale data
        localStorage.removeItem('lastSubmittedLead')
      }
    } catch (error) {
      console.error('Error reading lead summary:', error)
    }
  }, [])

  const getPathLabel = (path?: string) => {
    switch (path) {
      case 'bulk':
        return 'Get Bulk HOCl Liquid'
      case 'private-label':
        return 'Launch My Own HOCl Product'
      default:
        return 'HOCl Partner Matching'
    }
  }

  return (
    <>
      <MetaTags
        title="Thank You - Request Submitted | HOCl Connect"
        description="Your HOCl partner matching request has been submitted. We'll review and introduce you to best-fit partners within 1-3 business days."
        keywords="thank you, request submitted, partner matching"
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thank You! Request Submitted Successfully
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've received your {leadSummary?.path ? getPathLabel(leadSummary.path) : 'partner matching'} request. 
              Our team will review your requirements and introduce you to the best-fit partners.
            </p>
          </div>

          {/* Request Summary */}
          {leadSummary && (
            <Card className="mb-12">
              <Card.Header>
                <h2 className="text-xl font-semibold text-gray-900">Your Request Summary</h2>
              </Card.Header>
              <Card.Content>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Request Type</h3>
                    <p className="text-gray-600 mb-4">{getPathLabel(leadSummary.path)}</p>
                    
                    {leadSummary.contact_name && (
                      <>
                        <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                        <div className="space-y-1 text-gray-600">
                          <p><strong>Name:</strong> {leadSummary.contact_name}</p>
                          <p><strong>Email:</strong> {leadSummary.email}</p>
                          {leadSummary.company && <p><strong>Company:</strong> {leadSummary.company}</p>}
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Submitted</h3>
                    <p className="text-gray-600">
                      {leadSummary.submitted_at ? 
                        new Date(leadSummary.submitted_at).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit'
                        }) : 
                        'Just now'
                      }
                    </p>
                  </div>
                </div>
              </Card.Content>
            </Card>
          )}

          {/* What Happens Next */}
          <Card className="mb-12">
            <Card.Header>
              <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>What Happens Next</span>
              </h2>
            </Card.Header>
            <Card.Content>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Review & Scoring (Within 24 hours)</h3>
                    <p className="text-gray-600 text-sm">
                      Our team reviews your requirements and scores potential partners based on industry expertise, 
                      capacity, location, and other factors specific to your needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Partner Selection (1-2 business days)</h3>
                    <p className="text-gray-600 text-sm">
                      We identify the top 2-3 partners from our vetted network who are the best match 
                      for your specific requirements and can meet your timeline.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Direct Introductions (2-3 business days)</h3>
                    <p className="text-gray-600 text-sm">
                      We make direct email introductions with your matched partners, sharing your requirements 
                      summary. You'll work directly with them on pricing and specifications.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-800">
                      <strong>Typical response time:</strong> Most buyers receive partner introductions within 1-3 business days. 
                      Complex or specialized requests may take slightly longer.
                    </p>
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>

          {/* Email Receipt Option */}
          <Card className="mb-12 bg-gray-50 border-gray-200">
            <Card.Content className="p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Want a copy of your request?</h3>
              <p className="text-gray-600 text-sm mb-4">
                We can send you a plain-text summary of your submission for your records.
              </p>
              <button
                onClick={() => {
                  trackEvent('email_receipt_request', {
                    source_page: '/thank-you'
                  })
                  // Placeholder for email receipt functionality
                  alert('Email receipt feature coming soon! Your request is safely stored in our system.')
                }}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Send me an email copy
              </button>
            </Card.Content>
          </Card>

          {/* Next Steps */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">While You Wait</h2>
            <p className="text-gray-600 mb-6">
              Explore our educational resources to learn more about HOCl applications and best practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              <Link
                to="/guides/bulk-buyers"
                className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-left"
              >
                <h3 className="font-semibold text-gray-900 mb-1">Bulk Buyer's Guide</h3>
                <p className="text-sm text-gray-600">Container options and cost optimization</p>
              </Link>
              
              <Link
                to="/guides/private-label-playbook"
                className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-left"
              >
                <h3 className="font-semibold text-gray-900 mb-1">Private Label Playbook</h3>
                <p className="text-sm text-gray-600">MOQs, timelines, and launch planning</p>
              </Link>
            </div>

            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThankYouPage