import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, Beaker, CheckCircle, AlertTriangle, Calculator, Truck } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import MetaTags from '../../components/SEO/MetaTags'
import Breadcrumbs from '../../components/Layout/Breadcrumbs'
import Card from '../../components/UI/Card'
import FAQList from '../../components/FAQ/FAQList'
import MidArticleCTA from '../../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../../constants/seo'

const RtuVsConcentratePage = () => {
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
            "name": "RTU vs Concentrate",
            "item": "https://hoclconnect.com/compare/rtu-vs-concentrate"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "How much can I save with concentrate vs ready-to-use?",
      answer: "Freight savings typically range from 20-60% depending on volume and distance. A 275-gallon tote of 10x concentrate yields 2,750 gallons of working solution, shipping at the same cost as 275 gallons of RTU. However, you need dilution equipment and procedures."
    },
    {
      question: "Is it difficult to dilute HOCl concentrate properly?",
      answer: "With proper equipment and training, it's straightforward. You need accurate flow meters or measuring systems, clean water supply, and pH testing capability. Most suppliers provide detailed dilution procedures and can recommend appropriate equipment."
    },
    {
      question: "What equipment do I need for concentrate dilution?",
      answer: "Basic setup includes mixing tanks, flow meters or measuring devices, pH meters, and pumps. For continuous operation, automated dilution systems can maintain consistent concentrations. Investment ranges from $2,000 for basic setups to $15,000+ for automated systems."
    },
    {
      question: "Does concentrate have the same shelf life as RTU?",
      answer: "Concentrate typically has shorter shelf life than RTU due to higher concentrations. However, you dilute smaller quantities as needed, so waste is often reduced. Proper storage (cool, dark, sealed) is critical for both but especially concentrates."
    },
    {
      question: "Can I switch between RTU and concentrate from the same supplier?",
      answer: "Most suppliers offer both formats, and many customers use a hybrid approach - concentrate for bulk applications and RTU for smaller or specialty uses. This gives flexibility while optimizing costs where volumes justify concentrate handling."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/compare/rtu-vs-concentrate'
    })
  }

  return (
    <>
      <MetaTags
        title="Ready-to-Use vs Concentrate HOCl: Cost, Storage, and Handling Comparison"
        description="Compare ready-to-use vs concentrate hypochlorous acid for bulk applications. Learn about cost differences, dilution requirements, storage needs, and when to choose each format."
        keywords="RTU vs concentrate HOCl, ready-to-use hypochlorous acid, HOCl concentrate dilution, bulk HOCl formats"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[
            { label: 'Compare', href: '/compare' },
            { label: 'RTU vs Concentrate' }
          ]} />

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready-to-Use vs Concentrate for HOCl
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mb-4">
              Choosing between ready-to-use (RTU) and concentrate affects your costs, storage requirements, 
              and operational complexity. This comparison helps you understand the trade-offs and determine 
              the best format for your volume and capabilities.
            </p>
            <div className="text-sm text-gray-500">
              Last updated: January 11, 2025
            </div>
          </div>

          {/* Definitions */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What's the difference?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-blue-50 border-blue-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-blue-900 flex items-center space-x-2">
                    <Droplets className="h-6 w-6" />
                    <span>Ready-to-Use (RTU)</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-blue-800 text-sm">
                      Pre-diluted to working strength (typically 50-200 ppm). Open the container and it's ready to use immediately.
                    </p>
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-900 text-sm mb-2">Typical Concentrations:</h4>
                      <ul className="text-xs text-blue-800 space-y-1">
                        <li>• General cleaning: 50-80 ppm</li>
                        <li>• Sanitizing: 80-200 ppm</li>
                        <li>• Heavy duty: 200+ ppm</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-green-900 flex items-center space-x-2">
                    <Beaker className="h-6 w-6" />
                    <span>Concentrate</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-3">
                    <p className="text-green-800 text-sm">
                      Higher concentration (typically 500-2,000+ ppm) that you dilute with water to achieve working strength.
                    </p>
                    <div className="bg-green-100 p-3 rounded-lg">
                      <h4 className="font-semibold text-green-900 text-sm mb-2">Common Ratios:</h4>
                      <ul className="text-xs text-green-800 space-y-1">
                        <li>• 5:1 concentrate (yields 5x volume)</li>
                        <li>• 10:1 concentrate (yields 10x volume)</li>
                        <li>• 20:1 concentrate (yields 20x volume)</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Pros and Cons */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Pros & cons comparison</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                  <Droplets className="h-5 w-5" />
                  <span>Ready-to-Use (RTU)</span>
                </h3>
                
                <Card className="mb-6 bg-green-50 border-green-200">
                  <Card.Header>
                    <h4 className="font-semibold text-green-900">Advantages</h4>
                  </Card.Header>
                  <Card.Content>
                    <ul className="space-y-2 text-green-800">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>No mixing required</strong> - Use straight from container</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Consistent concentration</strong> - No dilution errors</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Simple operation</strong> - Minimal training required</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>No equipment needed</strong> - For mixing or dilution</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Better stability</strong> - Lower concentrations are more stable</span>
                      </li>
                    </ul>
                  </Card.Content>
                </Card>

                <Card className="bg-red-50 border-red-200">
                  <Card.Header>
                    <h4 className="font-semibold text-red-900">Disadvantages</h4>
                  </Card.Header>
                  <Card.Content>
                    <ul className="space-y-2 text-red-800">
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Higher shipping costs</strong> - Paying to ship water weight</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>More storage space</strong> - Lower concentration = more containers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Higher per-gallon cost</strong> - Premium for convenience</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Limited flexibility</strong> - Fixed concentration</span>
                      </li>
                    </ul>
                  </Card.Content>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center space-x-2">
                  <Beaker className="h-5 w-5" />
                  <span>Concentrate</span>
                </h3>
                
                <Card className="mb-6 bg-green-50 border-green-200">
                  <Card.Header>
                    <h4 className="font-semibold text-green-900">Advantages</h4>
                  </Card.Header>
                  <Card.Content>
                    <ul className="space-y-2 text-green-800">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Lower shipping costs</strong> - Less water weight to transport</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Reduced storage space</strong> - Smaller containers for same yield</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Better economics</strong> - Lower per-gallon cost at scale</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Concentration flexibility</strong> - Adjust strength as needed</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Less frequent deliveries</strong> - Higher yield per shipment</span>
                      </li>
                    </ul>
                  </Card.Content>
                </Card>

                <Card className="bg-red-50 border-red-200">
                  <Card.Header>
                    <h4 className="font-semibold text-red-900">Disadvantages</h4>
                  </Card.Header>
                  <Card.Content>
                    <ul className="space-y-2 text-red-800">
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Dilution equipment</strong> - Requires mixing systems and training</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Quality control</strong> - Must test diluted concentrations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Water quality matters</strong> - Clean water source required</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Shorter shelf life</strong> - Higher concentrations degrade faster</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Staff training</strong> - Proper dilution procedures critical</span>
                      </li>
                    </ul>
                  </Card.Content>
                </Card>
              </div>
            </div>
          </section>

          {/* When to Choose */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">When to choose each format</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-blue-50 border-blue-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-blue-900">Choose RTU If...</h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-3 text-blue-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>You use &lt;200 gallons per month</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Simplicity is more important than cost savings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>You need consistent, precise concentrations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Multiple locations or departments use different strengths</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>You don't want to invest in dilution equipment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Staff training should be minimal</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Quality of water supply is variable or unknown</span>
                    </li>
                  </ul>
                </Card.Content>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-green-900">Choose Concentrate If...</h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-3 text-green-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You use 200+ gallons per month consistently</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cost optimization is a priority</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You have space and budget for dilution equipment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Freight costs are significant (long distances)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You need different concentrations for different applications</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You have reliable, clean water supply</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Staff can be trained on dilution procedures</span>
                    </li>
                  </ul>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Cost Example */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Cost comparison example</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Scenario: 500 gallons working solution per month, 500 miles from supplier</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-900 flex items-center space-x-2">
                    <Droplets className="h-5 w-5" />
                    <span>RTU Option</span>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Product cost:</span>
                      <span>$4.50/gal × 500 gal = $2,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Freight:</span>
                      <span>$900/month (2 tote shipments)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Handling:</span>
                      <span>$100/month</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total monthly cost:</span>
                      <span>$3,250</span>
                    </div>
                    <div className="flex justify-between text-blue-700">
                      <span>Cost per working gallon:</span>
                      <span>$6.50</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-900 flex items-center space-x-2">
                    <Beaker className="h-5 w-5" />
                    <span>10:1 Concentrate Option</span>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Product cost:</span>
                      <span>$15.00/gal × 50 gal = $750</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Freight:</span>
                      <span>$200/month (cases)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dilution/handling:</span>
                      <span>$250/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Equipment amortization:</span>
                      <span>$150/month</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total monthly cost:</span>
                      <span>$1,350</span>
                    </div>
                    <div className="flex justify-between text-green-700">
                      <span>Cost per working gallon:</span>
                      <span>$2.70</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5 text-green-600" />
                  <p className="text-sm text-green-800">
                    <strong>Monthly savings with concentrate:</strong> $1,900 ($22,800/year) • <strong>ROI on dilution equipment:</strong> Typically 2-6 months
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="bulk"
            title="Need Format Recommendations?"
            description="Tell us about your volume and capabilities. We'll match you with suppliers who can provide the right format and support."
          />

          {/* FAQ */}
          <div className="mb-16">
            <FAQList faqs={faqs} title="RTU vs Concentrate FAQs" />
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Choose Your HOCl Format?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you prefer the simplicity of RTU or the economics of concentrate, we'll match you with suppliers who can provide the right format and support for your operation.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/quote?path=bulk"
                  onClick={() => handleCTAClick('Get Format Recommendations', '/quote?path=bulk')}
                  className="inline-flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  <span>Get Format Recommendations</span>
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
                <Link to="/guides/bulk-buyers" className="hover:text-white transition-colors">
                  Bulk Buyer's Guide
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

export default RtuVsConcentratePage