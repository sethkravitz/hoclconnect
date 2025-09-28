import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Search, Handshake, Shield, Clock, CheckCircle } from 'lucide-react'
import { trackEvent } from '../lib/analytics'
import MetaTags from '../components/SEO/MetaTags'
import Breadcrumbs from '../components/Layout/Breadcrumbs'
import Card from '../components/UI/Card'
import MidArticleCTA from '../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../constants/seo'

const HowItWorksPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "HOCl Partner Matching Process",
        "description": "Free 3-step process connecting buyers with vetted hypochlorous acid partners",
        "provider": {
          "@type": "Organization",
          "name": "HOCl Connect"
        },
        "serviceType": "Partner Matching",
        "areaServed": "United States",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free matching service for buyers"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://hoclconnect.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "How It Works",
            "item": "https://hoclconnect.com/how-it-works"
          }
        ]
      }
    ]
  }
  
  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/how-it-works'
    })
  }

  return (
    <>
      <MetaTags
        title="How It Works - HOCl Partner Matching Process | HOCl Connect"
        description="Learn how our free HOCl partner matching process works. We connect buyers with vetted suppliers, bottlers, and manufacturers in 1-3 business days."
        keywords="HOCl matching process, how it works, partner introductions, supplier matching"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'How It Works' }]} />

          {/* Header with Disclaimer */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How Our Matching Process Works</h1>
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 max-w-3xl mx-auto mb-8">
              <p className="text-blue-800 mt-2">
                HOCl Connect is a free matching service, not a manufacturer. We gather your needs and introduce you to the right partners 
                who can fulfill your requirements.
              </p>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple 3-step process typically takes 1–3 business days from your initial request to partner introductions.
            </p>
          </div>

          {/* Main Process Steps */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                </div>
                <Card.Content className="pt-8 pb-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Brief</h3>
                  <p className="text-gray-600">
                    Complete our guided intake form. Tell us about your needs - use case, rough quantities, 
                    timeline, and any preferences. Don't worry if you're not sure about technical details; 
                    our form is designed to help non-experts.
                  </p>
                </Card.Content>
              </Card>

              <Card className="text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                </div>
                <Card.Content className="pt-8 pb-6">
                  <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Match</h3>
                  <p className="text-gray-600">
                    Our team reviews your requirements and scores potential partners based on industry expertise, 
                    capacity, location, and other factors. We identify the best 2-3 matches from our vetted network 
                    of suppliers, bottlers, and manufacturers.
                  </p>
                </Card.Content>
              </Card>

              <Card className="text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                </div>
                <Card.Content className="pt-8 pb-6">
                  <Handshake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Intro</h3>
                  <p className="text-gray-600">
                    We make direct introductions via email, sharing your requirements summary with matched partners. 
                    From there, you work directly with them on pricing, terms, and specifications. We're available 
                    to help facilitate if needed.
                  </p>
                </Card.Content>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Typical Timeline</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-semibold">
                    Day 0
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">You submit your request</h3>
                    <p className="text-gray-600 text-sm">Complete the intake form with your requirements</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-semibold">
                    Day 1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">We review and score matches</h3>
                    <p className="text-gray-600 text-sm">Our team evaluates your needs against our partner network</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center font-semibold">
                    Day 2-3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Partner introductions</h3>
                    <p className="text-gray-600 text-sm">Direct email introductions with 2-3 best-fit partners</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Complex or specialized requests may take slightly longer. 
                  Rush requests can sometimes be accommodated - just let us know your urgency in the intake form.
                </p>
              </div>
            </div>
          </div>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            title="Ready to Start Your Matching Process?"
            description="Tell us about your HOCl needs and get connected with vetted partners in 1-3 business days."
          />

          {/* Privacy & Trust */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Privacy & Trust</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <Card.Content className="p-6 text-center">
                  <Shield className="h-10 w-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Protected Information</h3>
                  <p className="text-gray-600 text-sm">
                    We only share your brief with matched partners. Your contact information is never shared 
                    without your explicit consent during the introduction process.
                  </p>
                </Card.Content>
              </Card>
              
              <Card>
                <Card.Content className="p-6 text-center">
                  <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Vetted Partners</h3>
                  <p className="text-gray-600 text-sm">
                    All partners in our network undergo initial vetting for business credentials, 
                    industry experience, and basic quality standards before being eligible for introductions.
                  </p>
                </Card.Content>
              </Card>
              
              <Card>
                <Card.Content className="p-6 text-center">
                  <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">No Obligation</h3>
                  <p className="text-gray-600 text-sm">
                    Introductions are free and carry no obligation. You evaluate partners directly 
                    and choose who to work with based on your own criteria and negotiations.
                  </p>
                </Card.Content>
              </Card>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What Makes Us Different</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Industry Focus</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Specialized in hypochlorous acid industry</li>
                    <li>• Deep understanding of different applications</li>
                    <li>• Know the regulatory requirements by industry</li>
                    <li>• Understand technical specifications and quality standards</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Buyer-Focused Service</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Completely free for buyers</li>
                    <li>• Guided forms designed for non-experts</li>
                    <li>• Fast turnaround on introductions</li>
                    <li>• No pressure - you choose your partners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your HOCl Partners?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Start our guided intake process and get connected with vetted partners in your industry. 
              The process is free for buyers and typically takes just 1-3 business days.
            </p>
            <Link
              to="/quote"
              onClick={() => handleCTAClick('Start Matching Process', '/quote')}
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <span>Start Matching Process</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorksPage