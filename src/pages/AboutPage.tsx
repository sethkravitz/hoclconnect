import React from 'react'
import { Users, Shield, Clock, CheckCircle } from 'lucide-react'
import MetaTags from '../components/SEO/MetaTags'
import Breadcrumbs from '../components/Layout/Breadcrumbs'
import Card from '../components/UI/Card'
import { ORGANIZATION_SCHEMA } from '../constants/seo'

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
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
        "name": "About",
        "item": "https://hoclconnect.com/about"
      }
    ]
  }

  return (
    <>
      <MetaTags
        title="About HOCl Connect - Free Partner Matching Service"
        description="Learn about HOCl Connect's mission to connect buyers with vetted hypochlorous acid suppliers, bottlers, and manufacturers. We don't manufacture HOCl - we make introductions."
        keywords="about HOCl Connect, partner matching, hypochlorous acid marketplace"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'About' }]} />

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About HOCl Connect</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're a free B2B matching service connecting buyers with trusted hypochlorous acid partners.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">We Are Not a Manufacturer</h2>
              <p className="text-blue-800 text-lg leading-relaxed max-w-3xl mx-auto">
                HOCl Connect is a specialized B2B marketplace that connects buyers with vetted hypochlorous acid 
                suppliers, bottlers, and private-label manufacturers. We don't manufacture or sell HOCl ourselves – 
                we're the bridge that helps you find the right partners for your specific needs.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <Card.Content className="p-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualify Leads</h3>
                  <p className="text-gray-600 text-sm">
                    We gather detailed requirements through our guided intake process, designed to help non-experts.
                  </p>
                </Card.Content>
              </Card>

              <Card className="text-center">
                <Card.Content className="p-6">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Vet Partners</h3>
                  <p className="text-gray-600 text-sm">
                    All partners undergo vetting for business credentials, industry experience, and quality standards.
                  </p>
                </Card.Content>
              </Card>

              <Card className="text-center">
                <Card.Content className="p-6">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Matching</h3>
                  <p className="text-gray-600 text-sm">
                    We score and match partners based on expertise, capacity, location, and your specific requirements.
                  </p>
                </Card.Content>
              </Card>

              <Card className="text-center">
                <Card.Content className="p-6">
                  <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Introductions</h3>
                  <p className="text-gray-600 text-sm">
                    We make direct email introductions with the best-fit partners – typically 2-3 matches per request.
                  </p>
                </Card.Content>
              </Card>
            </div>
          </div>

          {/* Why We Exist */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why We Exist</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  The hypochlorous acid industry can be challenging to navigate, especially for newcomers. 
                  Buyers often struggle to find the right type of partner – whether they need bulk supply, 
                  bottling services, or complete private-label manufacturing.
                </p>
                <p>
                  Different applications require different expertise. A beauty brand needs suppliers who 
                  understand skincare regulations and gentle formulations. An agriculture company needs 
                  partners experienced with EPA requirements and larger-scale operations.
                </p>
                <p>
                  We created HOCl Connect to solve this matching problem. By specializing in the HOCl 
                  industry, we can quickly identify which partners have the right experience, capacity, 
                  and capabilities for each buyer's specific needs.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900">Buyer-Focused</h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Completely free for buyers</li>
                    <li>• Guided forms designed for non-experts</li>
                    <li>• Fast turnaround on introductions</li>
                    <li>• No pressure – you choose your partners</li>
                    <li>• Available to help facilitate if needed</li>
                  </ul>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900">Industry Expertise</h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Specialized in hypochlorous acid applications</li>
                    <li>• Understanding of different industry requirements</li>
                    <li>• Knowledge of regulatory landscapes</li>
                    <li>• Experience with technical specifications</li>
                    <li>• Awareness of quality standards and certifications</li>
                  </ul>
                </Card.Content>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your HOCl Partners?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you need suppliers, bottlers, or private-label manufacturers, we're here to help 
              you find the right partners for your hypochlorous acid needs.
            </p>
            <div className="space-y-4">
              <a
                href="/quote"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Start Matching Process
              </a>
              <div className="text-blue-200 text-sm">
                Free for buyers • Usually 1-3 business days
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage