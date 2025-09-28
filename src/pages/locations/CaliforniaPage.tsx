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

const CaliforniaPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "HOCl Supply and Distribution in California",
        "description": "Hypochlorous acid supply, logistics, and distribution services across California including Los Angeles, San Francisco, San Diego, and Central Valley",
        "provider": {
          "@type": "Organization",
          "name": "HOCl Connect"
        },
        "areaServed": {
          "@type": "State",
          "name": "California"
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
            "name": "California",
            "item": "https://hoclconnect.com/locations/california"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "How do California regulations affect HOCl supply?",
      answer: "California has strict environmental and transportation regulations. Most reputable suppliers are already compliant with CARB, Prop 65, and DOT requirements. Always verify your supplier has proper California certifications and can provide compliant documentation."
    },
    {
      question: "What are typical delivery costs in California?",
      answer: "Costs vary significantly by region. Expect $300-600 for drums within major metro areas, $600-1,200 for totes. Rural areas and mountain regions may add 50-100% to costs due to distance and specialized routing requirements."
    },
    {
      question: "How do port delays affect HOCl availability?",
      answer: "Port congestion can impact raw material supplies and container availability. Most established suppliers maintain buffer inventory and alternative sourcing to minimize disruptions. Consider this when planning procurement timing."
    },
    {
      question: "Which California regions have the highest HOCl demand?",
      answer: "Major demand centers include Los Angeles (entertainment, aerospace), San Francisco Bay Area (tech, biotech), Central Valley (agriculture), and San Diego (biotech, military). Each region has different typical applications and volume requirements."
    },
    {
      question: "How does wildfire season affect HOCl logistics?",
      answer: "Wildfire season (May-October) can cause temporary road closures and air quality issues. Suppliers typically have contingency routes and may recommend increased inventory during peak fire season. Some facilities use HOCl for fire damage cleanup."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/locations/california'
    })
  }

  return (
    <>
      <MetaTags
        title="HOCl Supply in California: Transit Times & Planning Guide"
        description="Complete guide to hypochlorous acid supply in California. Learn about shipping hubs, transit times to major metros, container choices, and seasonal considerations for California HOCl buyers."
        keywords="HOCl California, hypochlorous acid Los Angeles, chemical supply San Francisco, Bay Area sanitizer, San Diego disinfectant, California logistics"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[
            { label: 'Locations', href: '/locations' },
            { label: 'California' }
          ]} />

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                HOCl Supply in California: Transit Times & Planning
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mb-4">
              California's diverse economy and strict regulations create unique considerations for HOCl supply. 
              From ports in Los Angeles to tech centers in Silicon Valley, understanding regional logistics patterns, 
              compliance requirements, and seasonal factors helps optimize your California supply chain.
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
                    <div className="text-2xl">🚢</div>
                    <span>Los Angeles/Long Beach</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm">
                      Primary West Coast hub with extensive port facilities and chemical distribution infrastructure.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div className="font-semibold mb-1">Key Advantages:</div>
                      <ul className="space-y-1">
                        <li>• Largest U.S. port complex</li>
                        <li>• Established chemical logistics</li>
                        <li>• Major highway intersections</li>
                        <li>• Large industrial customer base</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <div className="text-2xl">🌉</div>
                    <span>San Francisco Bay Area</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm">
                      Tech and biotech corridor with growing demand for specialized chemicals and clean solutions.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div className="font-semibold mb-1">Key Advantages:</div>
                      <ul className="space-y-1">
                        <li>• Oakland port facilities</li>
                        <li>• Tech industry demand</li>
                        <li>• Biotech and pharma clusters</li>
                        <li>• Environmental consciousness</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <div className="text-2xl">🌾</div>
                    <span>Central Valley</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm">
                      Agricultural heartland with significant demand for crop protection and livestock applications.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div className="font-semibold mb-1">Key Advantages:</div>
                      <ul className="space-y-1">
                        <li>• Agricultural distribution network</li>
                        <li>• I-5 corridor access</li>
                        <li>• Food processing facilities</li>
                        <li>• Large volume applications</li>
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
                        From LA/Long Beach
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        From Bay Area
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        From Central Valley
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Los Angeles Metro
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Same day
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1 day
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        San Francisco Bay Area
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Same day
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Same day
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        San Diego
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1 day
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
                        Sacramento
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Same day
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Same day
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Central Valley (Fresno, Bakersfield)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1 day
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
                        Northern California (Redding, Eureka)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2-3 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        1-2 days
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Common container choices in California</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-blue-50 border-blue-200">
                <Card.Header>
                  <h3 className="text-lg font-semibold text-blue-900 flex items-center space-x-2">
                    <div className="text-2xl">🛢️</div>
                    <span>Drums (Most Common)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-blue-800 text-sm">
                      Preferred across diverse industries from tech facilities to food processing operations.
                    </p>
                    <div className="text-xs text-blue-700">
                      <div className="font-semibold mb-1">Why Popular:</div>
                      <ul className="space-y-1">
                        <li>• Versatile for varied business sizes</li>
                        <li>• Manageable for urban facilities</li>
                        <li>• Good for regulatory compliance</li>
                        <li>• Standard handling equipment</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <Card.Header>
                  <h3 className="text-lg font-semibold text-green-900 flex items-center space-x-2">
                    <Package className="h-6 w-6" />
                    <span>Cases (Tech/Biotech)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-green-800 text-sm">
                      High demand from Silicon Valley, biotech companies, and research institutions.
                    </p>
                    <div className="text-xs text-green-700">
                      <div className="font-semibold mb-1">Why Popular:</div>
                      <ul className="space-y-1">
                        <li>• Perfect for R&D and testing</li>
                        <li>• Clean room compatible</li>
                        <li>• Multiple facility distribution</li>
                        <li>• Premium applications</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <Card.Header>
                  <h3 className="text-lg font-semibold text-yellow-900 flex items-center space-x-2">
                    <div className="text-2xl">🏗️</div>
                    <span>Totes (Agriculture/Industrial)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-yellow-800 text-sm">
                      Used by large agricultural operations, food processing, and some industrial facilities.
                    </p>
                    <div className="text-xs text-yellow-700">
                      <div className="font-semibold mb-1">Why Popular:</div>
                      <ul className="space-y-1">
                        <li>• Cost efficient for high volume</li>
                        <li>• Agricultural applications</li>
                        <li>• Food processing facilities</li>
                        <li>• Port proximity advantages</li>
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
              <Card className="bg-red-50 border-red-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-red-900 flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Wildfire Season (May-October)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-red-800 text-sm">
                      Wildfires can disrupt transportation routes and affect air quality at storage facilities.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-900 text-sm">Planning Tips:</h4>
                      <ul className="text-xs text-red-800 space-y-1">
                        <li>• Monitor Cal Fire conditions</li>
                        <li>• Plan alternate delivery routes</li>
                        <li>• Consider increased inventory during peak season</li>
                        <li>• Coordinate with suppliers on contingencies</li>
                        <li>• Some facilities use HOCl for fire damage cleanup</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-blue-900 flex items-center space-x-2">
                    <div className="text-2xl">🚢</div>
                    <span>Port Congestion (Year-round)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-blue-800 text-sm">
                      LA/Long Beach port delays can affect raw material supplies and container availability.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-900 text-sm">Mitigation Strategies:</h4>
                      <ul className="text-xs text-blue-800 space-y-1">
                        <li>• Work with suppliers who maintain buffer inventory</li>
                        <li>• Consider alternative sourcing regions</li>
                        <li>• Plan longer lead times during peak shipping</li>
                        <li>• Monitor port performance reports</li>
                        <li>• Discuss contingency plans with suppliers</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* What to Include in Brief */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What to include in your California brief</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>California-Specific Requirements</span>
                  </h3>
                  <ul className="space-y-3 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <div className="text-2xl">📋</div>
                      <span><strong>Regulatory compliance needs</strong> (Prop 65, CARB, local requirements)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Precise location</strong> (city, zip, delivery accessibility)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Delivery time preferences</strong> (avoid peak traffic)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Truck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Environmental considerations</strong> (urban restrictions, emissions zones)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-4">Regional Considerations</h3>
                  <ul className="space-y-3 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Industry application</strong> (tech, agriculture, biotech, aerospace)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Sustainability goals</strong> (many CA companies prioritize green solutions)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Quality standards</strong> (pharmaceutical grade, food grade, etc.)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 mr-2 inline-block bg-blue-100 rounded-full mt-0.5 flex-shrink-0" />
                      <span><strong>Seasonal demand patterns</strong> (agriculture cycles, wildfire season)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="bulk"
            title="Need California HOCl Suppliers?"
            description="Connect with suppliers who understand California's regulatory environment, diverse industries, and regional logistics patterns."
          />

          {/* FAQ */}
          <div className="mb-16">
            <FAQList faqs={faqs} title="California HOCl Supply FAQs" />
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Source HOCl in California?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Connect with suppliers who understand California's unique regulatory environment, diverse industries, 
              and regional logistics patterns. Get matched with compliant, experienced partners.
            </p>
            <Link
              to="/quote?path=bulk&region=california"
              onClick={() => handleCTAClick('Get California HOCl Quotes', '/quote?path=bulk&region=california')}
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <span>Get California HOCl Quotes</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaliforniaPage