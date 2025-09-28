import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, CheckCircle, Clock, Package, Users } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import MetaTags from '../../components/SEO/MetaTags'
import Breadcrumbs from '../../components/Layout/Breadcrumbs'
import Card from '../../components/UI/Card'
import FAQList from '../../components/FAQ/FAQList'
import MidArticleCTA from '../../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../../constants/seo'

const JanitorialPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
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
            "name": "Use Cases",
            "item": "https://hoclconnect.com/use-cases"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Janitorial",
            "item": "https://hoclconnect.com/use-cases/janitorial"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "Is HOCl safe to use around occupied buildings?",
      answer: "Yes, HOCl is safe for use in occupied spaces when used as directed. It's non-toxic, doesn't produce harmful fumes, and breaks down into basic salt water. However, always follow label instructions and ensure adequate ventilation during application."
    },
    {
      question: "How does HOCl compare to traditional disinfectants for janitorial use?",
      answer: "HOCl is as effective as bleach against most pathogens but without the harsh odors, corrosive effects, or safety concerns. It works faster than quaternary ammonium compounds and doesn't leave residue that requires rinsing."
    },
    {
      question: "What concentration of HOCl should I use for different janitorial applications?",
      answer: "General surface cleaning: 50-80 ppm. High-touch areas: 80-200 ppm. Restroom cleaning: 100-200 ppm. Equipment sanitization: 200+ ppm. Always verify with your supplier that concentrations meet your specific pathogen kill requirements."
    },
    {
      question: "Can I use HOCl in floor scrubbers and other cleaning equipment?",
      answer: "Many floor scrubbers and cleaning equipment can use HOCl, but check with equipment manufacturers first. HOCl is less corrosive than bleach, but some seals and components may need evaluation for compatibility."
    },
    {
      question: "How do I train janitorial staff to use HOCl safely?",
      answer: "HOCl is easier to train on than traditional chemicals due to its safety profile. Focus on proper dilution (if using concentrate), application techniques, and emphasize that while safer, it should still be handled as a commercial cleaning product with appropriate PPE."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/use-cases/janitorial'
    })
  }

  return (
    <>
      <MetaTags
        title="HOCl for Janitorial & Facilities: Choose the Right Bulk Format"
        description="Complete guide to using hypochlorous acid (HOCl) for janitorial and facility cleaning. Learn about typical volumes, formats, and what to include in your supplier brief."
        keywords="HOCl janitorial, facility cleaning, bulk disinfectant, janitorial supplies, facility management"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[
            { label: 'Use Cases', href: '/use-cases' },
            { label: 'Janitorial' }
          ]} />

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                HOCl for Janitorial & Facilities: Choose the Right Bulk Format
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl">
              HOCl is transforming janitorial operations with safer, more effective cleaning. Here's how to size your needs, 
              choose the right format, and what to tell suppliers to get the best match for your facilities.
            </p>
          </div>

          {/* Typical amounts & cadence */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Typical amounts & cadence</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Facility Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Square Footage
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Monthly Usage
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reorder Frequency
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Small Office
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2,000-5,000 sq ft
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        5-15 gallons
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Monthly cases
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        School/Gym
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        10,000-50,000 sq ft
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        50-200 gallons
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2-4 drums monthly
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Large Office/Retail
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        25,000-100,000 sq ft
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        100-400 gallons
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Monthly totes or 6-8 drums
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Hospital/Healthcare
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        50,000-200,000 sq ft
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        300-1,000 gallons
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2-4 totes monthly
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Manufacturing Plant
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        100,000+ sq ft
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        500-2,000+ gallons
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Weekly/bi-weekly totes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Recommended formats */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recommended formats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <Package className="h-5 w-5 text-green-600" />
                    <span>Cases (5-25 gallons)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                      <strong>Best for:</strong> Small offices, testing, flexible dispensing
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm">Advantages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• No special handling equipment needed</li>
                        <li>• Easy to distribute across locations</li>
                        <li>• Different bottles for different areas</li>
                        <li>• Lower upfront investment</li>
                        <li>• Fast shipping and delivery</li>
                      </ul>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                      <strong>Considerations:</strong> Higher per-gallon cost, more packaging waste
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <div className="text-blue-600 text-xl">🛢️</div>
                    <span>Drums (55 gallons)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                      <strong>Best for:</strong> Schools, gyms, mid-size facilities
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm">Advantages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Good balance of cost and convenience</li>
                        <li>• Standardized size for easy inventory</li>
                        <li>• Compatible with most dispensing systems</li>
                        <li>• Better per-gallon pricing than cases</li>
                        <li>• Manageable with forklift or dolly</li>
                      </ul>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                      <strong>Considerations:</strong> Requires drum handling equipment, storage space
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <div className="text-purple-600 text-xl">🏗️</div>
                    <span>Totes (275+ gallons)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                      <strong>Best for:</strong> Large facilities, healthcare, manufacturing
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm">Advantages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Lowest per-gallon cost</li>
                        <li>• Fewer deliveries and container changes</li>
                        <li>• Integrated dispensing systems available</li>
                        <li>• Best for high-volume operations</li>
                        <li>• Reduced packaging waste</li>
                      </ul>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                      <strong>Considerations:</strong> Requires forklift, dedicated storage space, higher upfront cost
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* What to include in your brief */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What to include in your brief</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Essential Information</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <Building2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Facility type and square footage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Users className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Daily occupancy and foot traffic levels</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Package className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Current chemical usage (gallons/month)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Cleaning schedule and application methods</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Available handling equipment (forklift, etc.)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-3">Helpful Details</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span>Areas of highest concern (restrooms, kitchens, high-touch)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span>Current disinfectants and any issues with them</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span>Staff training and safety priorities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span>Budget parameters and approval process</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span>Timeline for testing and rollout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="bulk"
            useCase="janitorial"
            title="Upgrade Your Janitorial Program"
            description="Get matched with HOCl suppliers who understand facility cleaning and can provide the right formats for your operations."
          />

          {/* FAQ Section */}
          <div className="mb-16">
            <FAQList faqs={faqs} title="Janitorial HOCl FAQs" />
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Upgrade Your Janitorial Program?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Tell us about your facilities and cleaning needs. We'll match you with HOCl suppliers who understand 
              janitorial operations and can provide the right format and concentrations.
            </p>
            <Link
              to="/quote?path=bulk&use=janitorial"
              onClick={() => handleCTAClick('Get Matched with Janitorial Suppliers', '/quote?path=bulk&use=janitorial')}
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <span>Get Matched with Janitorial Suppliers</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default JanitorialPage