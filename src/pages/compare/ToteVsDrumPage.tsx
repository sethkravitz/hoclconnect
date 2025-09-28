import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, DollarSign, Truck, Clock, CheckCircle, AlertTriangle } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import MetaTags from '../../components/SEO/MetaTags'
import Breadcrumbs from '../../components/Layout/Breadcrumbs'
import Card from '../../components/UI/Card'
import FAQList from '../../components/FAQ/FAQList'
import MidArticleCTA from '../../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../../constants/seo'

const ToteVsDrumPage = () => {
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
            "name": "Compare",
            "item": "https://hoclconnect.com/compare"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Tote vs Drum",
            "item": "https://hoclconnect.com/compare/tote-vs-drum"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "At what volume does it make sense to switch from drums to totes?",
      answer: "Generally around 500+ gallons per month. If you're using 8+ drums monthly, totes become more cost-effective and operationally simpler. Consider your storage space, handling equipment, and delivery logistics alongside volume."
    },
    {
      question: "Can I mix totes and drums in the same facility?",
      answer: "Yes, many facilities use both. Totes for main supply and drums for backup, different departments, or testing new products. This gives you flexibility while optimizing costs where volumes justify it."
    },
    {
      question: "Which option is better for small facilities with limited space?",
      answer: "Drums are typically better for space-constrained facilities. They have a smaller footprint and stack better. However, if you use enough volume to justify multiple drums monthly, a single tote might actually save floor space."
    },
    {
      question: "How do freight costs compare between totes and drums?",
      answer: "Totes have lower freight cost per gallon due to better cube utilization and fewer individual containers. Two totes (550-660 gal) ship on one truck vs multiple drum shipments needed for equivalent volume."
    },
    {
      question: "Which container type has better shelf life for HOCl?",
      answer: "Shelf life is similar for both when stored properly. The key factors are container material compatibility, proper sealing, and storage conditions (temperature, light protection). Both steel drums and food-grade plastic totes work well for HOCl."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/compare/tote-vs-drum'
    })
  }

  return (
    <>
      <MetaTags
        title="Tote vs Drum for HOCl: Cost, Storage, and Shipping Comparison"
        description="Compare 275-gallon totes vs 55-gallon drums for bulk HOCl storage. Learn about cost differences, storage requirements, shipping logistics, and when to choose each option."
        keywords="tote vs drum HOCl, IBC vs drum comparison, bulk HOCl storage, container comparison"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[
            { label: 'Compare', href: '/compare' },
            { label: 'Tote vs Drum' }
          ]} />

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tote vs Drum for HOCl: Cost, Storage, and Shipping
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mb-4">
              Choosing between 275-gallon totes and 55-gallon drums affects your per-gallon costs, storage requirements, 
              and operational complexity. This comparison helps you determine which option best fits your facility and volume needs.
            </p>
            <div className="text-sm text-gray-500">
              Last updated: January 11, 2025
            </div>
          </div>

          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">At a glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-blue-50 border-blue-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-blue-900 flex items-center space-x-2">
                    <div className="text-2xl">🛢️</div>
                    <span>55-Gallon Drums</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-blue-800 text-sm">
                      <strong>Best for:</strong> Medium-volume operations, predictable usage, facilities with standard handling equipment
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs text-blue-700">
                      <div>
                        <div className="font-semibold">Capacity</div>
                        <div>55 gallons</div>
                      </div>
                      <div>
                        <div className="font-semibold">Weight (full)</div>
                        <div>~480 lbs</div>
                      </div>
                      <div>
                        <div className="font-semibold">Footprint</div>
                        <div>2.8 sq ft</div>
                      </div>
                      <div>
                        <div className="font-semibold">Sweet spot</div>
                        <div>50-500 gal/mo</div>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-purple-900 flex items-center space-x-2">
                    <div className="text-2xl">🏗️</div>
                    <span>275-Gallon Totes</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-purple-800 text-sm">
                      <strong>Best for:</strong> High-volume operations, cost optimization, facilities with robust handling infrastructure
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs text-purple-700">
                      <div>
                        <div className="font-semibold">Capacity</div>
                        <div>275-330 gallons</div>
                      </div>
                      <div>
                        <div className="font-semibold">Weight (full)</div>
                        <div>~2,500 lbs</div>
                      </div>
                      <div>
                        <div className="font-semibold">Footprint</div>
                        <div>13.3 sq ft</div>
                      </div>
                      <div>
                        <div className="font-semibold">Sweet spot</div>
                        <div>500+ gal/mo</div>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Detailed Comparison */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed comparison</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Factor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        55-Gallon Drums
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        275-Gallon Totes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Per-gallon cost
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Mid-range; better than cases, higher than totes
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Lowest per-gallon cost for bulk purchases
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Handling equipment
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Drum dolly or standard forklift
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Heavy-duty forklift (2,500+ lb capacity)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Storage efficiency
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Good; can palletize 4 drums; manageable stacking
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Excellent; ~21 gal per sq ft vs 20 gal for drums
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Delivery frequency
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        More frequent; 1-4 drums per delivery typical
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Less frequent; 1-2 totes = 5-12 drums equivalent
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Freight efficiency
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Moderate; multiple pallets for large volumes
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        High; two totes per truck, fewer shipments
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Dispensing systems
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Drum pumps, gravity feed, manual dispensing
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Integrated valve systems, automated dispensing
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Flexibility
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        High; easy to move, distribute, or repurpose
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Lower; committed to single location until empty
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Initial investment
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Lower; $300-800 per drum + setup
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Higher; $1,200-2,000 per tote + infrastructure
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Good Choice Bullets */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Good choice if...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-blue-50 border-blue-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-blue-900 flex items-center space-x-2">
                    <div className="text-2xl">🛢️</div>
                    <span>Choose Drums If...</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-3 text-blue-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>You use 50-500 gallons per month</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>You need flexibility to move containers around</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Multiple departments or locations need supply</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Standard forklift or drum dolly handling is preferred</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>You want lower initial cash outlay per order</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Predictable, manageable container sizes are important</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Testing different products or concentrations</span>
                    </li>
                  </ul>
                </Card.Content>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-purple-900 flex items-center space-x-2">
                    <div className="text-2xl">🏗️</div>
                    <span>Choose Totes If...</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-3 text-purple-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>You use 500+ gallons per month consistently</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Per-gallon cost optimization is a priority</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>You have heavy-duty forklift capacity (2,500+ lbs)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>You want fewer delivery disruptions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Centralized dispensing system is acceptable</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>You have adequate storage space with proper access</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Long-term, stable demand for HOCl</span>
                    </li>
                  </ul>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Cost Analysis */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Real-world cost analysis</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Example: 1,000 gallons per month usage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-900">Drum Option (18 drums/month)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Product cost:</span>
                      <span>$4.00/gal × 1,000 gal = $4,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Freight (3 shipments):</span>
                      <span>$750/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Handling/storage:</span>
                      <span>$200/month</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total monthly cost:</span>
                      <span>$4,950</span>
                    </div>
                    <div className="flex justify-between text-blue-700">
                      <span>Cost per gallon:</span>
                      <span>$4.95</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-purple-900">Tote Option (3-4 totes/month)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Product cost:</span>
                      <span>$3.70/gal × 1,000 gal = $3,700</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Freight (2 shipments):</span>
                      <span>$500/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Handling/storage:</span>
                      <span>$150/month</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total monthly cost:</span>
                      <span>$4,350</span>
                    </div>
                    <div className="flex justify-between text-purple-700">
                      <span>Cost per gallon:</span>
                      <span>$4.35</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Monthly savings with totes:</strong> $600 ($7,200/year) • <strong>Payback period:</strong> Tote infrastructure pays for itself in 3-6 months at this volume
                </p>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="bulk"
            title="Need Help Choosing Container Type?"
            description="Tell us about your volume and facility setup. We'll match you with suppliers who can recommend the best container option."
          />

          {/* FAQ */}
          <div className="mb-16">
            <FAQList faqs={faqs} title="Tote vs Drum FAQs" />
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Choose Your Container Type?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you choose drums for flexibility or totes for cost optimization, we'll match you with suppliers who can provide the right container format for your needs.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/quote?path=bulk"
                  onClick={() => handleCTAClick('Get Format Recommendations', '/quote?path=bulk')}
                  className="inline-flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  <span>Get Bulk HOCl Quotes</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/bulk-hocl"
                  onClick={() => handleCTAClick('Learn More About Bulk HOCl', '/bulk-hocl')}
                  className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors border-2 border-blue-400"
                >
                  <span>Learn More About Bulk HOCl</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-blue-200">
                <Link to="/containers/55-gallon-drum" className="hover:text-white transition-colors">
                  55-Gallon Drum Guide
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link to="/containers/275-gallon-tote" className="hover:text-white transition-colors">
                  275-Gallon Tote Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToteVsDrumPage