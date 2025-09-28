import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Truck, CheckCircle, Clock, DollarSign, Calculator } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import MetaTags from '../../components/SEO/MetaTags'
import Breadcrumbs from '../../components/Layout/Breadcrumbs'
import Card from '../../components/UI/Card'
import FAQList from '../../components/FAQ/FAQList'
import MidArticleCTA from '../../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../../constants/seo'

const BulkBuyersGuidePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "name": "How to Buy HOCl in Bulk: Complete Buyer's Guide",
        "description": "Step-by-step guide to choosing containers, understanding freight costs, and optimizing your bulk HOCl purchases",
        "supply": [
          "Volume requirements assessment",
          "Facility storage capacity evaluation", 
          "Budget planning worksheet"
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Assess Your Volume Needs",
            "text": "Calculate your monthly HOCl usage and determine whether cases, drums, or totes make the most sense for your operation."
          },
          {
            "@type": "HowToStep",
            "name": "Evaluate Your Facility",
            "text": "Check storage space, handling equipment availability, and delivery access to determine which container types are feasible."
          },
          {
            "@type": "HowToStep",
            "name": "Understand Freight Costs",
            "text": "Learn how distance, weight, freight class, and delivery requirements impact your total cost of ownership."
          },
          {
            "@type": "HowToStep",
            "name": "Plan Your Brief",
            "text": "Compile essential information about your needs, facility, and timeline to get accurate supplier quotes."
          }
        ]
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
            "name": "Guides",
            "item": "https://hoclconnect.com/guides"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Bulk Buyer's Guide",
            "item": "https://hoclconnect.com/guides/bulk-buyers"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "What's the most cost-effective container size for my volume?",
      answer: "Cases work well under 50 gallons/month, drums are optimal for 50-500 gallons/month, and totes provide the best economics above 500 gallons/month. However, you must also consider your storage space, handling equipment, and cash flow preferences."
    },
    {
      question: "How much should I budget for freight costs?",
      answer: "Freight typically adds $0.50-2.00 per gallon to your total cost, depending on distance and container type. Cases have the highest freight cost per gallon, while totes are most efficient. Always get delivered pricing to understand your true cost."
    },
    {
      question: "Can I mix different container types in one order?",
      answer: "Many suppliers accommodate mixed orders, especially for testing different formats or serving different departments. This can help you optimize your overall logistics while maintaining flexibility."
    },
    {
      question: "What's the typical lead time for bulk HOCl orders?",
      answer: "Distributors with inventory can ship within 1-5 days, while manufacturers typically need 2-4 weeks for production. Rush orders may be available for urgent needs, often at premium pricing."
    },
    {
      question: "Should I order Ready-to-Use or Concentrate for bulk purchases?",
      answer: "RTU is simpler but costs more to ship. Concentrate offers better freight economics for larger volumes but requires dilution equipment and knowledge. Choose based on your volume, storage capacity, and staff capabilities."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/guides/bulk-buyers'
    })
  }

  return (
    <>
      <MetaTags
        title="The Bulk Buyer's Guide to HOCl: Containers, Lead Times, Freight Math"
        description="Complete guide to buying hypochlorous acid in bulk. Learn container options, freight cost drivers, lead times, and how to optimize your HOCl purchasing strategy."
        keywords="bulk HOCl buyers guide, hypochlorous acid purchasing, container selection, freight costs, bulk chemical buying"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[
            { label: 'Guides', href: '/guides' },
            { label: 'Bulk Buyer\'s Guide' }
          ]} />

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Bulk Buyer's Guide to HOCl: Containers, Lead Times, Freight Math
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mb-4">
              Buying hypochlorous acid in bulk requires understanding container options, freight economics, 
              and supplier logistics. This comprehensive guide helps you make informed decisions and optimize 
              your purchasing strategy.
            </p>
            <div className="text-sm text-gray-500">
              Last updated: January 11, 2025
            </div>
          </div>

          {/* Container Chooser */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Container chooser: Find your best fit</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Link to="/containers/cases" className="block">
                <Card hover className="h-full">
                  <Card.Content className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Package className="h-8 w-8 text-green-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Cases</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600">
                        <strong>Volume:</strong> 5-25 gallons per case
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Best for:</strong> Testing, small facilities, flexible distribution
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Usage sweet spot:</strong> &lt;50 gallons/month
                      </div>
                      <div className="mt-4">
                        <div className="text-xs text-green-700 bg-green-50 p-2 rounded">
                          ✓ No special equipment needed<br/>
                          ✓ Fast shipping<br/>
                          ✓ Easy to distribute
                        </div>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              </Link>

              <Link to="/containers/55-gallon-drum" className="block">
                <Card hover className="h-full">
                  <Card.Content className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-3xl">🛢️</div>
                      <h3 className="text-xl font-semibold text-gray-900">55-Gallon Drums</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600">
                        <strong>Volume:</strong> 55 gallons per drum
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Best for:</strong> Regular use, predictable volumes
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Usage sweet spot:</strong> 50-500 gallons/month
                      </div>
                      <div className="mt-4">
                        <div className="text-xs text-blue-700 bg-blue-50 p-2 rounded">
                          ✓ Standardized size<br/>
                          ✓ Good cost balance<br/>
                          ✓ Manageable handling
                        </div>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              </Link>

              <Link to="/containers/275-gallon-tote" className="block">
                <Card hover className="h-full">
                  <Card.Content className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-3xl">🏗️</div>
                      <h3 className="text-xl font-semibold text-gray-900">275+ Gallon Totes</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600">
                        <strong>Volume:</strong> 275-330 gallons per tote
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Best for:</strong> High-volume operations, cost optimization
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Usage sweet spot:</strong> 500+ gallons/month
                      </div>
                      <div className="mt-4">
                        <div className="text-xs text-purple-700 bg-purple-50 p-2 rounded">
                          ✓ Lowest per-gallon cost<br/>
                          ✓ Fewer deliveries<br/>
                          ✓ Integrated dispensing
                        </div>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              </Link>
            </div>
          </section>

          {/* Freight Cost Drivers */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Understanding freight cost drivers</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cost Factor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Impact on Cost
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Optimization Tips
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Distance & Zone
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        $0.10-0.50 per gallon per 500 miles
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Consider regional suppliers; consolidate orders
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Container Type
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Cases: highest cost/gal; Totes: lowest cost/gal
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Match container to volume; avoid oversizing storage
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Freight Class
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        HOCl typically Class 55-60 (lower is better)
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Verify classification; concentrate may get better class
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Delivery Requirements
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Liftgate, inside delivery: +$75-200 per shipment
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Arrange dock-level delivery; have equipment ready
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Order Timing
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Rush orders: +25-50% freight premium
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Plan ahead; maintain buffer inventory
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Optimizing Your Orders */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Optimizing your bulk orders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    <span>Total Cost Calculation</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Formula:</h4>
                      <p className="text-sm text-blue-800 font-mono">
                        Total Cost = (Product Price × Volume) + Freight + Handling
                      </p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Product Price:</strong> Per-gallon cost (varies by concentration, volume)</p>
                      <p><strong>Freight:</strong> Distance + container type + special requirements</p>
                      <p><strong>Handling:</strong> Equipment rental, labor, storage preparation</p>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                      <strong>Pro tip:</strong> Compare total delivered cost per gallon, not just product pricing
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span>Order Timing Strategy</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700"><strong>Plan 2-4 weeks ahead</strong> for standard orders</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700"><strong>Maintain 30-day buffer</strong> inventory</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700"><strong>Consolidate shipments</strong> when possible</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700"><strong>Schedule recurring deliveries</strong> for better pricing</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                      <strong>Seasonal note:</strong> Plan extra buffer before holidays and peak demand periods
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Brief Checklist */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What to include in your supplier brief</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Essential Information</span>
                  </h3>
                  <ul className="space-y-3 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <Package className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Monthly volume needs</strong> (current and projected)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Truck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Delivery location</strong> with zip code</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <DollarSign className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Budget range</strong> per gallon or monthly</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Timeline</strong> for first delivery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Intended use case</strong> (cleaning, sanitizing, etc.)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-4">Facility & Logistics Details</h3>
                  <ul className="space-y-3 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Storage capacity</strong> and ceiling height</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Handling equipment</strong> available (forklift, dolly)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Delivery access</strong> (dock, inside, liftgate needed)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Preferred container type</strong> or format</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Recurring delivery preferences</strong> or one-time need</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Pro tip:</strong> Include photos of your delivery area and storage space to help suppliers provide accurate quotes and identify potential challenges early.
                </p>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="bulk"
            title="Apply This Guide to Your Needs"
            description="Use these insights to get matched with bulk HOCl suppliers who understand your volume and logistics requirements."
          />

          {/* FAQ */}
          <div className="mb-16">
            <FAQList faqs={faqs} title="Bulk Buying FAQs" />
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Your Bulk HOCl Supply?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Use this guide's insights to brief suppliers effectively. We'll match you with bulk HOCl partners who understand your volume, container, and logistics needs.
            </p>
            <div className="space-y-4">
              <Link
                to="/quote?path=bulk"
                onClick={() => handleCTAClick('Start Your Bulk Matching Request', '/quote?path=bulk')}
                className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                <span>Start Your Bulk Matching Request</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-blue-200">
                <Link to="/bulk-hocl" className="hover:text-white transition-colors">
                  Learn More About Bulk HOCl
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link to="/compare/tote-vs-drum" className="hover:text-white transition-colors">
                  Compare Container Types
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BulkBuyersGuidePage