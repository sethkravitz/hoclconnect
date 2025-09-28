import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, ArrowRight, Package, Truck, CheckCircle, Clock, DollarSign } from 'lucide-react'
import { trackEvent } from '../lib/analytics'
import MetaTags from '../components/SEO/MetaTags'
import Breadcrumbs from '../components/Layout/Breadcrumbs'
import Card from '../components/UI/Card'
import FAQList from '../components/FAQ/FAQList'
import MidArticleCTA from '../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../constants/seo'

const BulkHOClPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Bulk HOCl Supplier Matching",
        "description": "Connect with vetted hypochlorous acid suppliers for bulk liquid purchases",
        "provider": {
          "@type": "Organization",
          "name": "HOCl Connect"
        },
        "serviceType": "Supplier Matching",
        "areaServed": "United States",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free matching service for buyers"
        }
      },
      {
        "@type": "Service",
        "name": "Bulk HOCl Supplier Matching",
        "description": "Connect with vetted hypochlorous acid suppliers for bulk liquid purchases - totes, drums, and cases",
        "provider": {
          "@type": "Organization",
          "name": "HOCl Connect"
        },
        "serviceType": "Supplier Matching",
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
            "name": "Get Bulk HOCl",
            "item": "https://hoclconnect.com/bulk-hocl"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "What price ranges should I expect for bulk HOCl?",
      answer: "Prices vary by volume, concentration, and supplier. Generally expect $3-8 per gallon for ready-to-use solutions in bulk quantities. Concentrates cost more upfront but offer better per-gallon economics when diluted. We'll match you with suppliers who can provide specific pricing for your volume needs."
    },
    {
      question: "How long does it take to get bulk HOCl delivered?",
      answer: "Lead times typically range from 1-4 weeks depending on the supplier and order size. Distributors with inventory can often ship within days, while on-site manufacturers may need 2-4 weeks for production. Rush orders are sometimes available for urgent needs."
    },
    {
      question: "When should I choose a tote vs drums vs cases?",
      answer: "Cases (up to ~25 gal) are good for testing or smaller operations. Drums (~55 gal) work well for moderate, regular use. Totes (~275+ gal) are most cost-effective for high-volume operations and offer the best per-gallon pricing."
    },
    {
      question: "What's the difference between ready-to-use and concentrate?",
      answer: "Ready-to-use (RTU) solutions are pre-diluted to working strength - just open and use. Concentrates need dilution but cost less to ship and store. RTU is simpler but concentrate offers better economics for larger volumes."
    },
    {
      question: "Can I set up recurring bulk orders?",
      answer: "Yes, most suppliers offer recurring delivery programs with volume discounts. This helps ensure consistent supply and often provides better pricing. We can match you with suppliers who specialize in recurring bulk programs."
    },
    {
      question: "What do I need to know about receiving bulk HOCl?",
      answer: "You'll need proper unloading equipment (forklift for totes/drums) and appropriate storage areas away from direct sunlight. Suppliers typically provide advance shipping notice and delivery appointments. Most offer guidance on proper handling and storage."
    },
    {
      question: "Do suppliers provide certificates of analysis?",
      answer: "Yes, reputable suppliers provide certificates of analysis (COA) with each batch showing PPM concentration, pH levels, and other quality parameters. This documentation is important for quality control and regulatory compliance."
    },
    {
      question: "What if I'm not sure about the right concentration?",
      answer: "No problem! The suppliers we introduce you to are experienced in your application and can recommend appropriate concentrations based on your intended use. They can also provide samples for testing before larger orders."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/bulk-hocl'
    })
  }
  return (
    <>
      <MetaTags
        title="Buy Hypochlorous Acid in Bulk (Totes, Drums, Cases) | HOCl Connect"
        description="Connect with trusted HOCl suppliers for bulk liquid purchases. Get totes, drums, or cases of hypochlorous acid with fast delivery and competitive pricing."
        keywords="bulk HOCl, hypochlorous acid suppliers, bulk liquid HOCl, chemical suppliers, totes, drums, cases"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Get Bulk HOCl' }]} />

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Buy Hypochlorous Acid in Bulk (Totes, Drums, Cases)
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl">
              Connect with trusted suppliers for bulk hypochlorous acid liquid. Whether you need cases for testing, 
              drums for regular use, or totes for high-volume operations, we'll match you with suppliers who 
              understand your industry and can deliver the right solution.
            </p>
          </div>

          {/* What You Can Get */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What you can get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900">Ready-to-Use (RTU)</h3>
                </Card.Header>
                <Card.Content>
                  <p className="text-gray-600 mb-4">
                    Pre-mixed to working strength. Open the container and it's ready to use immediately.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• No mixing or dilution required</li>
                    <li>• Consistent concentration every time</li>
                    <li>• Ideal for immediate use applications</li>
                    <li>• Higher shipping costs due to water weight</li>
                  </ul>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900">Concentrate</h3>
                </Card.Header>
                <Card.Content>
                  <p className="text-gray-600 mb-4">
                    Higher concentration that you dilute to working strength with water.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Lower shipping and storage costs</li>
                    <li>• Better per-gallon economics for large volumes</li>
                    <li>• Requires dilution equipment and knowledge</li>
                    <li>• More flexibility in final concentrations</li>
                  </ul>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Containers */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Containers & when to choose them</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/containers/cases" className="block">
                <Card hover className="h-full">
                  <Card.Content className="p-6 text-center">
                    <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cases</h3>
                    <p className="text-gray-600 text-sm mb-3">Up to ~25 gallons</p>
                    <p className="text-gray-600 text-sm">
                      Perfect for testing, smaller operations, or businesses just getting started with HOCl.
                    </p>
                    <ArrowRight className="h-4 w-4 text-blue-600 mx-auto mt-4" />
                  </Card.Content>
                </Card>
              </Link>

              <Link to="/containers/55-gallon-drum" className="block">
                <Card hover className="h-full">
                  <Card.Content className="p-6 text-center">
                    <div className="text-4xl mb-4">🛢️</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">55-Gallon Drums</h3>
                    <p className="text-gray-600 text-sm mb-3">~55 gallons each</p>
                    <p className="text-gray-600 text-sm">
                      Standard choice for regular use. Good balance of volume and handling convenience.
                    </p>
                    <ArrowRight className="h-4 w-4 text-blue-600 mx-auto mt-4" />
                  </Card.Content>
                </Card>
              </Link>

              <Link to="/containers/275-gallon-tote" className="block">
                <Card hover className="h-full">
                  <Card.Content className="p-6 text-center">
                    <div className="text-4xl mb-4">🏗️</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">275+ Gallon Totes</h3>
                    <p className="text-gray-600 text-sm mb-3">275-330+ gallons</p>
                    <p className="text-gray-600 text-sm">
                      Best per-gallon pricing for high-volume operations. Requires forklift for handling.
                    </p>
                    <ArrowRight className="h-4 w-4 text-blue-600 mx-auto mt-4" />
                  </Card.Content>
                </Card>
              </Link>
            </div>
          </section>

          {/* Lead Times & Freight */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Lead times & freight basics</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Supplier Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Typical Lead Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Freight Options
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Distributors (with inventory)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        1-5 business days
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Standard LTL, expedited available
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        On-site manufacturers
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        2-4 weeks
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Fresh production, scheduled delivery
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Rush orders
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        1-2 weeks
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Premium pricing, expedited shipping
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* What to Include in Your Brief */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What to include in your brief</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-3">Essential Information</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>How you'll use the HOCl (cleaning, sanitizing, etc.)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Approximate volume needed (gallons per month/order)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Preferred container size (cases, drums, totes)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Timeline for first delivery</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-3">Helpful Details</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Your location (for freight calculations)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>One-time or recurring orders</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Ready-to-use vs concentrate preference</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Any specific concentration requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="bulk"
            title="Ready to Find Your Bulk HOCl Supplier?"
            description="Get matched with trusted suppliers who understand your volume needs and can deliver on your timeline."
          />
          {/* Main CTA */}
          <section className="mb-16">
            <Card className="bg-blue-600 border-0 text-white text-center">
              <Card.Content className="p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Get Your Bulk HOCl Supply?</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Tell us about your volume needs and application. We'll match you with qualified suppliers 
                  who can provide competitive pricing and reliable delivery.
                </p>
                <Link
                  to="/quote?path=bulk"
                  onClick={() => handleCTAClick('Get Matched for Bulk HOCl', '/quote?path=bulk')}
                  className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  <span>Get Matched for Bulk HOCl</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <p className="text-blue-200 text-sm mt-3">Free service • Usually 1-3 business days</p>
              </Card.Content>
            </Card>
          </section>

          {/* FAQ Section */}
          <FAQList faqs={faqs} title="Bulk HOCl FAQs" />

          {/* Final CTA */}
          <div className="mt-16 bg-gray-900 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Start Your Bulk HOCl Match</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our free matching service connects you with trusted suppliers for totes, drums, or cases 
              of hypochlorous acid. Get started today.
            </p>
            <Link
              to="/quote?path=bulk"
              onClick={() => handleCTAClick('Get Started Free', '/quote?path=bulk')}
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BulkHOClPage