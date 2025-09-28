import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Truck, CheckCircle } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import MetaTags from '../../components/SEO/MetaTags'
import Breadcrumbs from '../../components/Layout/Breadcrumbs'
import Card from '../../components/UI/Card'
import FAQList from '../../components/FAQ/FAQList'
import MidArticleCTA from '../../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../../constants/seo'

const FiftyFiveGallonDrumPage = () => {
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
            "name": "55-Gallon Drum",
            "item": "https://hoclconnect.com/containers/55-gallon-drum"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "How much does a 55-gallon drum of HOCl weigh?",
      answer: "A full 55-gallon drum of HOCl weighs approximately 460-480 pounds (210-218 kg), including the drum weight. The exact weight depends on the concentration and drum material."
    },
    {
      question: "Can I store 55-gallon drums of HOCl outside?",
      answer: "HOCl should be stored indoors or in covered areas away from direct sunlight and temperature extremes. UV light and heat can degrade the product. Ideal storage is in a cool, dry place between 50-75°F."
    },
    {
      question: "Do I need special equipment to handle 55-gallon drums?",
      answer: "Yes, you'll need a drum dolly or forklift to move full drums safely. A drum pump is recommended for dispensing. Never attempt to lift or tip a full drum manually."
    },
    {
      question: "How long does HOCl last in a 55-gallon drum?",
      answer: "Shelf life varies by concentration and storage conditions, typically 6-12 months when stored properly. Always check the manufacturer's expiration date and certificates of analysis for specific products."
    },
    {
      question: "Can drums be returned or recycled?",
      answer: "Many suppliers offer drum return programs for steel drums, which can be reconditioned and reused. Plastic drums may be recyclable depending on your local waste management programs. Ask your supplier about their drum return policy."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/containers/55-gallon-drum'
    })
  }
  return (
    <>
      <MetaTags
        title="55-Gallon Drum for HOCl: Specs, Palletization, Shipping Tips"
        description="Complete guide to 55-gallon drums for hypochlorous acid. Learn specifications, storage requirements, handling tips, and when drums are the right choice for your facility."
        keywords="55 gallon drum HOCl, hypochlorous acid drum, bulk HOCl storage, drum specifications"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[
            { label: 'Containers', href: '/containers' },
            { label: '55-Gallon Drum' }
          ]} />

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              55-Gallon Drum for HOCl: Specs, Palletization, Shipping Tips
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl">
              The 55-gallon drum is the workhorse of bulk HOCl supply. Perfect for facilities with moderate to high usage that want predictable quantities without the complexity of totes.
            </p>
          </div>

          {/* When to Pick a Drum */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">When to pick a drum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-green-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-green-900 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Good fit when you...</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-2 text-green-800">
                    <li>• Use 50-200 gallons per month</li>
                    <li>• Want predictable container sizes</li>
                    <li>• Have forklift or drum handling equipment</li>
                    <li>• Need easier inventory management than cases</li>
                    <li>• Want better per-gallon pricing than small containers</li>
                    <li>• Have adequate indoor storage space</li>
                  </ul>
                </Card.Content>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-yellow-900">Consider alternatives if you...</h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-2 text-yellow-800">
                    <li>• Use less than 50 gallons per month (consider cases)</li>
                    <li>• Use more than 500 gallons per month (consider totes)</li>
                    <li>• Don't have drum handling equipment</li>
                    <li>• Have very limited storage space</li>
                    <li>• Need maximum cost efficiency for high volumes</li>
                  </ul>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Specs Table */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Drum specifications</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Specification
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Steel Drum
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plastic Drum
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Capacity
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        55 gallons (208 liters)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        55 gallons (208 liters)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Dimensions (H x Dia)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        34.5" x 22.5"
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        35" x 23"
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Empty Weight
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        35-45 lbs
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        15-25 lbs
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Full Weight (approx)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        495-505 lbs
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        475-485 lbs
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Closure Type
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2" bung + 3/4" vent
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2" bung + 3/4" vent
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Footprint
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2.8 sq ft
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2.9 sq ft
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Palletization
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        4 drums per standard pallet
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        4 drums per standard pallet
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Receiving Checklist */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Receiving checklist</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center space-x-2">
                    <Truck className="h-5 w-5" />
                    <span>Before Delivery</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Confirm you have forklift or drum dolly available</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Clear storage area with 35"+ ceiling height</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Verify loading dock can handle 2,000+ lb pallet</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Schedule delivery appointment with driver</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center space-x-2">
                    <Package className="h-5 w-5" />
                    <span>Upon Arrival</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Inspect drums for dents, leaks, or damage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Verify quantity matches bill of lading</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Check labels and lot numbers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Move to storage immediately after inspection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <div className="mb-16">
            <FAQList faqs={faqs} title="55-Gallon Drum FAQs" />
          </div>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="bulk"
            title="Ready for 55-Gallon Drums?"
            description="Tell us about your facility's needs and we'll match you with suppliers who can deliver drums on your timeline."
          />
          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Order 55-Gallon Drums of HOCl?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Tell us about your facility's needs and we'll match you with suppliers who can deliver drums on your timeline.
            </p>
            <Link
              to="/quote?path=bulk"
              onClick={() => handleCTAClick('Get Matched with Drum Suppliers', '/quote?path=bulk')}
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <span>Get Matched with Drum Suppliers</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FiftyFiveGallonDrumPage