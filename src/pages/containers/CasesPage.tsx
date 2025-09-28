import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Clock, CheckCircle, RefreshCw } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import MetaTags from '../../components/SEO/MetaTags'
import Breadcrumbs from '../../components/Layout/Breadcrumbs'
import Card from '../../components/UI/Card'
import FAQList from '../../components/FAQ/FAQList'
import MidArticleCTA from '../../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../../constants/seo'

const CasesPage = () => {
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
            "name": "Cases",
            "item": "https://hoclconnect.com/containers/cases"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "What's typically in a case of HOCl?",
      answer: "Most cases contain 4-6 bottles ranging from 32oz to 1-gallon each, totaling 5-25 gallons per case. The exact configuration depends on the supplier and your intended use. Some cases may contain smaller bottles (16oz or 8oz) for specific applications."
    },
    {
      question: "How much do cases cost compared to bulk?",
      answer: "Cases typically cost 2-4x more per gallon than drums or totes due to packaging and handling costs. However, they're perfect for testing, small operations, or when you need the flexibility of individual bottles without bulk infrastructure."
    },
    {
      question: "Can I mix different concentrations in one order?",
      answer: "Many suppliers can accommodate mixed orders, allowing you to get different concentrations or bottle sizes in the same shipment. This is especially helpful for facilities testing different applications or serving multiple departments."
    },
    {
      question: "How long do cases of HOCl last in storage?",
      answer: "Shelf life depends on concentration and storage conditions, typically 6-18 months when stored properly in cool, dark conditions. Individual bottles often have longer shelf life than bulk containers due to less air exposure."
    },
    {
      question: "What's the best reorder frequency for cases?",
      answer: "Most small facilities reorder every 1-3 months to balance inventory costs with shipping frequency. Track your usage for 2-3 cycles to find the optimal reorder schedule and take advantage of volume discounts when possible."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/containers/cases'
    })
  }
  return (
    <>
      <MetaTags
        title="Cases & Small Volumes for HOCl: Pilot & Early Runs"
        description="Complete guide to HOCl cases and small volume orders. Perfect for testing, pilot programs, and small facilities. Learn sizing, costs, and reorder strategies."
        keywords="HOCl cases, small volume HOCl, pilot testing, hypochlorous acid bottles"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[
            { label: 'Containers', href: '/containers' },
            { label: 'Cases' }
          ]} />

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cases & Small Volumes for HOCl: Pilot & Early Runs
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl">
              Cases are the perfect entry point for HOCl. Whether you're testing effectiveness, running pilot programs, 
              or operating a small facility, cases offer flexibility without the commitment of bulk containers.
            </p>
          </div>

          {/* Good for trials and small facilities */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Good for trials and small facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-green-50 border-green-200">
                <Card.Header>
                  <h3 className="text-lg font-semibold text-green-900 flex items-center space-x-2">
                    <Package className="h-5 w-5" />
                    <span>Perfect for Testing</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Try different concentrations</li>
                    <li>• Test effectiveness in your application</li>
                    <li>• Compare suppliers without large commitments</li>
                    <li>• Evaluate staff training needs</li>
                    <li>• Assess storage and handling requirements</li>
                  </ul>
                </Card.Content>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <Card.Header>
                  <h3 className="text-lg font-semibold text-blue-900 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Small Operations</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• Use less than 50 gallons per month</li>
                    <li>• No forklift or bulk handling equipment</li>
                    <li>• Limited storage space</li>
                    <li>• Multiple locations with small needs</li>
                    <li>• Seasonal or irregular usage patterns</li>
                  </ul>
                </Card.Content>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <Card.Header>
                  <h3 className="text-lg font-semibold text-purple-900 flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Quick Start</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li>• Fast shipping (often 1-5 days)</li>
                    <li>• No special receiving equipment needed</li>
                    <li>• Start using immediately upon delivery</li>
                    <li>• Easy to distribute across departments</li>
                    <li>• Individual bottles for different areas</li>
                  </ul>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Case Configurations */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Common case configurations</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Bottle Size
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Bottles per Case
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Volume
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        32oz (1 quart)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        12 bottles
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        3 gallons
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Small-scale testing, personal use
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1 gallon
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        4 bottles
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        4 gallons
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        General facility use, refill stations
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1 gallon
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        6 bottles
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        6 gallons
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Small facilities, monthly supply
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        2.5 gallon
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2 bottles
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        5 gallons
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Larger operations, less frequent refills
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        5 gallon
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1 bottle
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        5 gallons
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Single location, bulk dispensing
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Replenishment Cadence */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Replenishment cadence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <Card.Header>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <RefreshCw className="h-5 w-5 text-blue-600" />
                    <span>Monthly Orders</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <strong>Best for:</strong> Regular, predictable usage
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 10-30 gallons per month usage</li>
                      <li>• Consistent operations</li>
                      <li>• Limited storage space</li>
                      <li>• Fresh product preference</li>
                    </ul>
                    <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                      <strong>Pros:</strong> Lower inventory costs, always fresh<br/>
                      <strong>Cons:</strong> Higher per-gallon shipping costs
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span>Quarterly Orders</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <strong>Best for:</strong> Cost optimization
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 20-60 gallons per quarter</li>
                      <li>• Adequate storage available</li>
                      <li>• Volume discount seeking</li>
                      <li>• Reduced administrative overhead</li>
                    </ul>
                    <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                      <strong>Pros:</strong> Better pricing, fewer deliveries<br/>
                      <strong>Cons:</strong> Higher inventory investment
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Package className="h-5 w-5 text-purple-600" />
                    <span>As-Needed Orders</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <strong>Best for:</strong> Irregular or seasonal use
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Variable usage patterns</li>
                      <li>• Seasonal operations</li>
                      <li>• Project-based needs</li>
                      <li>• Testing different applications</li>
                    </ul>
                    <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                      <strong>Pros:</strong> Maximum flexibility<br/>
                      <strong>Cons:</strong> Higher costs, potential stockouts
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <div className="mb-16">
            <FAQList faqs={faqs} title="Cases & Small Volume FAQs" />
          </div>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="bulk"
            title="Ready to Start with Cases?"
            description="Whether you're testing HOCl or need small volumes for ongoing operations, we'll match you with suppliers who can deliver cases on your schedule."
          />
          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start with Cases?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you're testing HOCl for the first time or need small volumes for ongoing operations, 
              we'll match you with suppliers who can deliver cases on your schedule.
            </p>
            <Link
              to="/quote?path=bulk"
              onClick={() => handleCTAClick('Get Matched for Case Orders', '/quote?path=bulk')}
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <span>Get Matched for Case Orders</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CasesPage