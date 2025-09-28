import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, Package, Truck, AlertTriangle, CheckCircle } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import MetaTags from '../../components/SEO/MetaTags'
import Breadcrumbs from '../../components/Layout/Breadcrumbs'
import Card from '../../components/UI/Card'
import FAQList from '../../components/FAQ/FAQList'
import MidArticleCTA from '../../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../../constants/seo'

const TexasPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "HOCl Supply and Distribution in Texas",
        "description": "Hypochlorous acid supply, logistics, and distribution services across Texas including Houston, Dallas, Austin, and San Antonio",
        "provider": {
          "@type": "Organization",
          "name": "HOCl Connect"
        },
        "areaServed": {
          "@type": "State",
          "name": "Texas"
        },
        "serviceType": "Chemical Distribution and Logistics"
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
            "name": "Locations",
            "item": "https://hoclconnect.com/locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Texas",
            "item": "https://hoclconnect.com/locations/texas"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "What are typical freight costs for HOCl delivery in Texas?",
      answer: "Freight costs vary by distance and container type, but Texas benefits from multiple distribution hubs. Expect $200-400 for drums within metro areas, $400-800 for totes. Rural areas may add 25-50% to costs due to longer final-mile delivery."
    },
    {
      question: "How does Texas heat affect HOCl storage and shipping?",
      answer: "Texas heat requires careful attention to storage conditions. HOCl should be kept below 80°F to maintain stability. Many facilities use climate-controlled warehouses, and summer deliveries may require insulated transport or early morning scheduling."
    },
    {
      question: "Which container types work best in Texas?",
      answer: "Totes are popular for large industrial facilities along the Gulf Coast. Drums work well for mid-size operations in Dallas and Austin. Cases are common for smaller businesses and testing, especially in the growing tech and healthcare sectors."
    },
    {
      question: "Are there seasonal shipping delays in Texas?",
      answer: "Hurricane season (June-November) can cause temporary delays along the Gulf Coast. Winter ice storms (rare but possible) may affect North Texas. Plan buffer inventory during peak hurricane season (August-October)."
    },
    {
      question: "What industries in Texas commonly use HOCl?",
      answer: "Major industries include oil & gas (equipment sanitization), agriculture (livestock and crop applications), food processing (especially in East Texas), healthcare facilities, and the growing tech sector in Austin and Dallas for facility cleaning."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/locations/texas'
    })
  }

  return (
    <>
      <MetaTags
        title="HOCl Supply in Texas: Transit Times & Planning Guide"
        description="Complete guide to hypochlorous acid supply in Texas. Learn about shipping hubs, transit times to major metros, container choices, and seasonal considerations for Texas HOCl buyers."
        keywords="HOCl Texas, hypochlorous acid Houston, chemical supply Dallas, Austin sanitizer, San Antonio disinfectant, Texas logistics"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[
            { label: 'Locations', href: '/locations' },
            { label: 'Texas' }
          ]} />

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                HOCl Supply in Texas: Transit Times & Planning
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mb-4">
              Texas offers excellent logistics infrastructure for HOCl distribution with major shipping hubs in Houston, 
              Dallas, and Austin. Understanding regional transit patterns, seasonal considerations, and preferred 
              container types helps optimize your supply chain across the Lone Star State.
            </p>
            <div className="text-sm text-gray-500">
              Last updated: January 11, 2025
            </div>
          </div>

          {/* Shipping Hubs */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Major shipping hubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <div className="text-2xl">🏗️</div>
                    <span>Houston/Gulf Coast</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm">
                      Primary hub for chemical distribution with extensive port facilities and industrial infrastructure.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div className="font-semibold mb-1">Key Advantages:</div>
                      <ul className="space-y-1">
                        <li>• Port of Houston chemical terminals</li>
                        <li>• Established chemical logistics network</li>
                        <li>• Multiple interstate connections</li>
                        <li>• Large industrial customer base</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <div className="text-2xl">🏢</div>
                    <span>Dallas-Fort Worth</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm">
                      Major distribution center serving North Texas and connecting to national freight networks.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div className="font-semibold mb-1">Key Advantages:</div>
                      <ul className="space-y-1">
                        <li>• Central U.S. location</li>
                        <li>• DFW airport cargo facilities</li>
                        <li>• Major trucking hub</li>
                        <li>• Diverse industrial base</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <div className="text-2xl">🎯</div>
                    <span>Austin-San Antonio</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm">
                      Growing tech and healthcare corridor with emerging demand for specialty chemicals.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div className="font-semibold mb-1">Key Advantages:</div>
                      <ul className="space-y-1">
                        <li>• I-35 corridor access</li>
                        <li>• Tech industry demand</li>
                        <li>• Healthcare facilities</li>
                        <li>• Research institutions</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Transit Times */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Typical transit times to major metros</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Destination
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        From Houston
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        From Dallas
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        From Austin
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Houston Metro
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Same day
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Dallas-Fort Worth
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Same day
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1 day
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Austin-San Antonio
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1 day
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Same day
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        East Texas (Tyler, Longview)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1 day
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        West Texas (El Paso, Lubbock)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2-3 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2-3 days
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        South Texas (McAllen, Brownsville)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2-3 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Common Container Choices */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Common container choices in Texas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-purple-50 border-purple-200">
                <Card.Header>
                  <h3 className="text-lg font-semibold text-purple-900 flex items-center space-x-2">
                    <div className="text-2xl">🏗️</div>
                    <span>Totes (Gulf Coast)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-purple-800 text-sm">
                      Preferred by large industrial facilities, petrochemical plants, and food processing operations.
                    </p>
                    <div className="text-xs text-purple-700">
                      <div className="font-semibold mb-1">Why Popular:</div>
                      <ul className="space-y-1">
                        <li>• High-volume industrial demand</li>
                        <li>• Established chemical handling infrastructure</li>
                        <li>• Cost efficiency for large operations</li>
                        <li>• Port proximity reduces freight costs</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <Card.Header>
                  <h3 className="text-lg font-semibold text-blue-900 flex items-center space-x-2">
                    <div className="text-2xl">🛢️</div>
                    <span>Drums (Metro Areas)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-blue-800 text-sm">
                      Standard choice for mid-size facilities in Dallas, Austin, and suburban Houston areas.
                    </p>
                    <div className="text-xs text-blue-700">
                      <div className="font-semibold mb-1">Why Popular:</div>
                      <ul className="space-y-1">
                        <li>• Manageable size for most facilities</li>
                        <li>• Good balance of cost and convenience</li>
                        <li>• Suitable for diverse business types</li>
                        <li>• Easy handling with standard equipment</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <Card.Header>
                  <h3 className="text-lg font-semibold text-green-900 flex items-center space-x-2">
                    <Package className="h-6 w-6" />
                    <span>Cases (Tech/Healthcare)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-green-800 text-sm">
                      Growing demand from tech companies, healthcare facilities, and testing laboratories.
                    </p>
                    <div className="text-xs text-green-700">
                      <div className="font-semibold mb-1">Why Popular:</div>
                      <ul className="space-y-1">
                        <li>• Perfect for pilot programs</li>
                        <li>• Multiple locations/departments</li>
                        <li>• Research and development use</li>
                        <li>• Clean room and lab applications</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Seasonal Notes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Seasonal considerations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-orange-50 border-orange-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-orange-900 flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Hurricane Season (June-November)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-orange-800 text-sm">
                      Gulf Coast facilities should plan for potential supply chain disruptions during hurricane season.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-900 text-sm">Planning Tips:</h4>
                      <ul className="text-xs text-orange-800 space-y-1">
                        <li>• Maintain 4-6 weeks buffer inventory</li>
                        <li>• Peak risk: August-October</li>
                        <li>• Monitor forecasts for delivery planning</li>
                        <li>• Consider inland storage options</li>
                        <li>• Coordinate with suppliers on contingency plans</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-red-900 flex items-center space-x-2">
                    <div className="text-2xl">🌡️</div>
                    <span>Summer Heat (June-September)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-red-800 text-sm">
                      High temperatures require special attention to HOCl storage and transport conditions.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-900 text-sm">Best Practices:</h4>
                      <ul className="text-xs text-red-800 space-y-1">
                        <li>• Climate-controlled storage essential</li>
                        <li>• Schedule deliveries for early morning</li>
                        <li>• Monitor storage temperatures closely</li>
                        <li>• Consider refrigerated transport for sensitive loads</li>
                        <li>• Plan for increased degradation rates</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* What to Include in Brief */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What to include in your Texas brief</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Location-Specific Details</span>
                  </h3>
                  <ul className="space-y-3 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Specific city and zip code</strong> for accurate freight quotes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Truck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Delivery access</strong> (dock height, inside delivery needs)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Preferred delivery times</strong> (early morning for summer)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Hurricane season contingencies</strong> (Gulf Coast facilities)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-4">Texas-Specific Considerations</h3>
                  <ul className="space-y-3 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Climate control needs</strong> for storage and transport</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Industry application</strong> (oil & gas, agriculture, tech, etc.)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Seasonal demand variations</strong> if applicable</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Regional shipping hub preference</strong> (Houston vs Dallas)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="bulk"
            title="Need Texas HOCl Suppliers?"
            description="Get matched with suppliers who understand Texas logistics, seasonal considerations, and regional delivery patterns."
          />

          {/* FAQ */}
          <div className="mb-16">
            <FAQList faqs={faqs} title="Texas HOCl Supply FAQs" />
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Source HOCl in Texas?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Connect with suppliers who understand Texas logistics, seasonal considerations, and regional delivery patterns. 
              Get matched with partners experienced in your area.
            </p>
            <Link
              to="/quote?path=bulk&region=texas"
              onClick={() => handleCTAClick('Get Texas HOCl Quotes', '/quote?path=bulk&region=texas')}
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <span>Get Texas HOCl Quotes</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TexasPage