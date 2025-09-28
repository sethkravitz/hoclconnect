import React from 'react'
import { Link } from 'react-router-dom'
import { Beaker, ArrowRight, Package, Clock, Award, Palette, Droplets, SprayCan as Spray } from 'lucide-react'
import { trackEvent } from '../lib/analytics'
import MetaTags from '../components/SEO/MetaTags'
import Breadcrumbs from '../components/Layout/Breadcrumbs'
import Card from '../components/UI/Card'
import FAQList from '../components/FAQ/FAQList'
import MidArticleCTA from '../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../constants/seo'

const PrivateLabelPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Private Label HOCl Manufacturing",
        "description": "Connect with private label manufacturers to launch your own hypochlorous acid product line",
        "provider": {
          "@type": "Organization",
          "name": "HOCl Connect"
        },
        "serviceType": "Private Label Manufacturing",
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
        "name": "Private Label HOCl Manufacturing",
        "description": "Connect with private label manufacturers to launch your own hypochlorous acid product line",
        "provider": {
          "@type": "Organization",
          "name": "HOCl Connect"
        },
        "serviceType": "Private Label Manufacturing",
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
            "name": "Private Label",
            "item": "https://hoclconnect.com/private-label"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "What are typical MOQs for private label HOCl products?",
      answer: "Minimum order quantities usually range from 5,000 to 50,000+ units depending on the product complexity and manufacturer. Simple spray bottles typically have lower MOQs (5,000-10,000), while complex formulations or custom packaging may require 25,000+ units. We'll match you with manufacturers whose minimums fit your volume goals."
    },
    {
      question: "How long does it take from order to receiving finished products?",
      answer: "Typical timelines are 8-12 weeks for your first production run. This includes 2-3 weeks for setup and approvals, 4-6 weeks for production, and 2-3 weeks for packaging and quality testing. Subsequent reorders are usually faster once everything is established."
    },
    {
      question: "Do I need to supply my own packaging materials?",
      answer: "It depends on the service level you choose. Full turnkey manufacturers source everything for you. Some manufacturers offer hybrid options where you can supply specific items like custom bottles or labels while they handle the rest. We'll match you with partners who offer the service level you prefer."
    },
    {
      question: "Can I do a pilot run before committing to large quantities?",
      answer: "Many manufacturers offer smaller pilot runs for market testing, typically 1,000-5,000 units at a higher per-unit cost. This lets you test the market and refine your product before scaling to full production volumes. We can identify partners who are flexible with testing quantities."
    },
    {
      question: "What should I expect for my first purchase order size?",
      answer: "Most manufacturers require your first PO to meet their minimum MOQ, which covers setup costs and ensures efficient production runs. Plan for $25,000-$100,000+ for your initial order depending on product complexity and packaging. We'll help you understand the investment requirements upfront."
    },
    {
      question: "Do private label manufacturers help with regulatory compliance?",
      answer: "Experienced manufacturers understand regulations for HOCl products in different applications (FDA for personal care, EPA for antimicrobials, etc.). They typically provide guidance on labeling requirements, safety data sheets, and necessary registrations, though final compliance responsibility rests with your brand."
    },
    {
      question: "Can manufacturers help with product formulation and development?",
      answer: "Yes, full-service manufacturers often provide formulation support, helping optimize your product for stability, effectiveness, and market appeal. They can adjust concentrations, suggest complementary ingredients (within regulatory limits), and provide guidance based on their market experience."
    },
    {
      question: "What ongoing support do manufacturers provide?",
      answer: "Good manufacturing partners provide ongoing production scheduling, quality control, inventory management, and often fulfillment services. They typically assign account managers to handle your orders and can help scale production as your business grows."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/private-label'
    })
  }
  return (
    <>
      <MetaTags
        title="Launch a Private-Label HOCl Product (Turnkey Options) | HOCl Connect"
        description="Connect with private label manufacturers to launch your own hypochlorous acid product. From face mists to cleaners - complete turnkey solutions available."
        keywords="private label HOCl, contract manufacturing, turnkey manufacturing, HOCl product launch, OEM manufacturing"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Private Label' }]} />

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Beaker className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Launch a Private-Label HOCl Product (Turnkey Options)
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl">
              Ready to launch your own hypochlorous acid product line? We'll connect you with experienced 
              manufacturers who can handle everything from formulation to finished products. Whether you want 
              face mists, surface cleaners, or specialized applications, we'll find partners who can bring 
              your vision to market.
            </p>
          </div>

          {/* Popular Product Types */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular product types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card hover>
                <Card.Content className="p-6 text-center">
                  <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Face & Body Mist</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Gentle formulations for skincare, wellness, and beauty applications. Popular in spa and personal care markets.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Typical MOQ: 5,000-15,000 units</li>
                    <li>• Common sizes: 2oz, 4oz, 8oz bottles</li>
                    <li>• Lead time: 8-10 weeks</li>
                  </ul>
                </Card.Content>
              </Card>

              <Card hover>
                <Card.Content className="p-6 text-center">
                  <Palette className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cleanser & Toner</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Multi-purpose cleansing products for face, hands, and surfaces. Growing category in natural beauty.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Typical MOQ: 10,000-25,000 units</li>
                    <li>• Common sizes: 4oz, 8oz, 16oz bottles</li>
                    <li>• Lead time: 10-12 weeks</li>
                  </ul>
                </Card.Content>
              </Card>

              <Card hover>
                <Card.Content className="p-6 text-center">
                  <Spray className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Surface Cleaner</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    All-purpose cleaning solutions for home, office, and commercial use. Large addressable market.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Typical MOQ: 15,000-50,000 units</li>
                    <li>• Common sizes: 16oz, 32oz spray bottles</li>
                    <li>• Lead time: 8-12 weeks</li>
                  </ul>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* MOQs & Timelines */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">MOQs & timelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <Package className="h-5 w-5 text-blue-600" />
                    <span>Minimum Order Quantities</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-900">Simple Products</span>
                        <span className="text-sm text-gray-600">5K-15K units</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-1/3"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-900">Standard Products</span>
                        <span className="text-sm text-gray-600">15K-35K units</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-600 h-2 rounded-full w-2/3"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-900">Complex/Custom</span>
                        <span className="text-sm text-gray-600">25K-50K+ units</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Production Timelines</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
                        1-3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Setup & Approvals</h4>
                        <p className="text-sm text-gray-600">Formulation, packaging design, label approvals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
                        4-8
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Production</h4>
                        <p className="text-sm text-gray-600">Manufacturing, filling, packaging, quality control</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
                        1-2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Final Steps</h4>
                        <p className="text-sm text-gray-600">Final testing, packaging, shipping preparation</p>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Packaging & Labeling */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Packaging & labeling</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">What partners need from you</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-blue-900 mb-3">Brand Assets</h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• Logo files (vector preferred)</li>
                    <li>• Brand colors and fonts</li>
                    <li>• Label copy and claims</li>
                    <li>• Any required regulatory text</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 mb-3">Product Specifications</h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• Preferred container sizes</li>
                    <li>• Closure types (pump, trigger, cap)</li>
                    <li>• Label material preferences</li>
                    <li>• Secondary packaging needs</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Full turnkey partners can handle packaging sourcing and label design 
                  if you prefer to focus on your brand and marketing.
                </p>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="private-label"
            title="Ready to Launch Your HOCl Product?"
            description="Get matched with experienced manufacturers who can handle everything from formulation to finished products."
          />
          {/* Cost Components */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Cost components</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Setup & Development</h4>
                    <p className="text-sm text-gray-600">One-time costs for formulation, tooling, artwork</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-gray-900">$5K-25K</span>
                    <p className="text-xs text-gray-500">One-time</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Per-Unit Manufacturing</h4>
                    <p className="text-sm text-gray-600">Product, packaging, labor (varies by volume)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-gray-900">$2-8</span>
                    <p className="text-xs text-gray-500">Per unit</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">First Order Total</h4>
                    <p className="text-sm text-gray-600">Typical investment for initial production run</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-gray-900">$25K-100K+</span>
                    <p className="text-xs text-gray-500">Initial investment</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Planning tip:</strong> Budget for 20-30% buffer on initial costs and timelines. 
                  Subsequent reorders have lower per-unit costs once setup is complete.
                </p>
              </div>
            </div>
          </section>

          {/* Main CTA */}
          <section className="mb-16">
            <Card className="bg-blue-600 border-0 text-white text-center">
              <Card.Content className="p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Launch Your HOCl Product?</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Tell us about your product vision and target market. We'll match you with manufacturers 
                  who can help bring your HOCl product from concept to market-ready.
                </p>
                <Link
                  to="/quote?path=pl"
                  onClick={() => handleCTAClick('Start My Private-Label Match', '/quote?path=pl')}
                  className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  <span>Start My Private-Label Match</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <p className="text-blue-200 text-sm mt-3">Free service • Usually 1-3 business days</p>
              </Card.Content>
            </Card>
          </section>

          {/* FAQ Section */}
          <FAQList faqs={faqs} title="Private Label FAQs" />

          {/* Final CTA */}
          <div className="mt-16 bg-gray-900 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Launch Your HOCl Product Line</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our free matching service connects you with experienced private label manufacturers 
              who can handle everything from formulation to finished products.
            </p>
            <Link
              to="/quote?path=pl"
              onClick={() => handleCTAClick('Get Started Free', '/quote?path=pl')}
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

export default PrivateLabelPage