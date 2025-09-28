import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, AlertTriangle, CheckCircle, Truck } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import MetaTags from '../../components/SEO/MetaTags'
import Breadcrumbs from '../../components/Layout/Breadcrumbs'
import Card from '../../components/UI/Card'
import FAQList from '../../components/FAQ/FAQList'
import MidArticleCTA from '../../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../../constants/seo'

const TwoSeventyFiveGallonTotePage = () => {
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
            "name": "Containers",
            "item": "https://hoclconnect.com/containers"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "275-Gallon Tote",
            "item": "https://hoclconnect.com/containers/275-gallon-tote"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "What's the difference between 275 and 330-gallon totes?",
      answer: "The main difference is capacity - 275-gallon totes are more common and fit standard pallets better. 330-gallon totes offer more volume but may have shipping constraints. Both use the same footprint and handling equipment."
    },
    {
      question: "Can I store totes outside?",
      answer: "Totes should not be stored outdoors long-term. While the plastic can handle weather, HOCl degrades in sunlight and temperature extremes. If temporary outdoor storage is necessary, use covers and limit exposure to 1-2 weeks maximum."
    },
    {
      question: "How do I dispense from a tote?",
      answer: "Most facilities use a tote dispensing system with a valve at the bottom or a pump system. Never tip or attempt to pour from a tote - they weigh over 2,400 pounds when full and require proper dispensing equipment."
    },
    {
      question: "What happens to empty totes?",
      answer: "Many suppliers offer tote return programs where they pick up empties for reconditioning. Some totes are single-use and become your responsibility for disposal or recycling. Ask about the return policy when ordering."
    },
    {
      question: "Do I need special permits for totes?",
      answer: "Generally no special permits are required for HOCl totes, but check local regulations for bulk chemical storage. Some municipalities have requirements for quantities over 200 gallons. Your supplier can provide guidance on local regulations."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/containers/275-gallon-tote'
    })
  }
  return (
    <>
      <MetaTags
        title="275–330 Gallon IBC Tote for HOCl: When It Makes Sense"
        description="Complete guide to IBC totes for hypochlorous acid. Learn when to choose totes over drums, storage requirements, freight considerations, and handling best practices."
        keywords="IBC tote HOCl, 275 gallon tote, hypochlorous acid bulk storage, IBC container"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[
            { label: 'Containers', href: '/containers' },
            { label: '275-Gallon Tote' }
          ]} />

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              275–330 Gallon IBC Tote for HOCl: When It Makes Sense
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl">
              IBC (Intermediate Bulk Container) totes offer the best per-gallon economics for high-volume HOCl users. 
              Here's when they make sense and what you need to know about handling, storage, and freight.
            </p>
          </div>

          {/* When to Pick a Tote */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">When to pick a tote</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-green-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-green-900 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Totes make sense when you...</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-2 text-green-800">
                    <li>• Use 500+ gallons per month</li>
                    <li>• Want the lowest per-gallon cost</li>
                    <li>• Have forklift capacity for 2,500+ lbs</li>
                    <li>• Have adequate indoor storage space</li>
                    <li>• Need less frequent deliveries</li>
                    <li>• Want to minimize container handling</li>
                    <li>• Have dispensing systems in place</li>
                  </ul>
                </Card.Content>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-yellow-900 flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Consider alternatives if you...</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-2 text-yellow-800">
                    <li>• Use less than 300 gallons per month</li>
                    <li>• Don't have forklift with 2,500+ lb capacity</li>
                    <li>• Have limited ceiling height (&lt;7 feet)</li>
                    <li>• Need very flexible dispensing options</li>
                    <li>• Want to minimize upfront investment</li>
                    <li>• Have challenging delivery access</li>
                  </ul>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Storage Notes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Storage requirements</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Package className="h-5 w-5 text-blue-600" />
                    <span>Space Requirements</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Dimensions</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Height: 46" (on pallet: 50")</li>
                        <li>• Footprint: 40" x 48" (standard pallet)</li>
                        <li>• Door width needed: 50"+ for delivery</li>
                        <li>• Ceiling height: 7+ feet recommended</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Weight Considerations</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Empty tote: 130-160 lbs</li>
                        <li>• Full 275-gal tote: ~2,450 lbs</li>
                        <li>• Full 330-gal tote: ~2,900 lbs</li>
                        <li>• Floor loading: 600+ lbs/sq ft</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Storage Best Practices</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Keep indoors, away from direct sunlight</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Maintain temperature between 50-75°F</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Ensure adequate ventilation in storage area</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Keep on pallets for air circulation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Position for easy forklift access</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Install dispensing system before first use</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Freight Considerations */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Freight considerations</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Consideration
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Truck Requirements
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Flatbed or step-deck trailer with crane or forklift
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        May limit delivery locations and increase cost
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Access Requirements
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Dock height loading, wide doors, clear path
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Must confirm facility can accommodate delivery
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Multiple Totes
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        2 totes per truckload (550-660 gallons)
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Better freight economics for large orders
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Appointment Delivery
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Usually required 24-48 hours advance notice
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Plan ahead for delivery scheduling
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Freight Class
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Typically Class 55-60 depending on concentration
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Affects LTL pricing and handling requirements
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <div className="mb-16">
            <FAQList faqs={faqs} title="IBC Tote FAQs" />
          </div>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="bulk"
            title="Ready for IBC Tote Delivery?"
            description="Tell us about your volume needs and facility setup. We'll match you with suppliers who can deliver totes efficiently."
          />
          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for IBC Tote Delivery?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Tell us about your volume needs and facility setup. We'll match you with suppliers who can deliver totes efficiently to your location.
            </p>
            <Link
              to="/quote?path=bulk"
              onClick={() => handleCTAClick('Get Matched with Tote Suppliers', '/quote?path=bulk')}
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <span>Get Matched with Tote Suppliers</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TwoSeventyFiveGallonTotePage