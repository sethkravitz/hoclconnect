import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, CheckCircle, Clock, Package, Award, Droplets } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import MetaTags from '../../components/SEO/MetaTags'
import Breadcrumbs from '../../components/Layout/Breadcrumbs'
import Card from '../../components/UI/Card'
import FAQList from '../../components/FAQ/FAQList'
import MidArticleCTA from '../../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../../constants/seo'

const SkincarePage = () => {
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
            "name": "Use Cases",
            "item": "https://hoclconnect.com/use-cases"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Skincare",
            "item": "https://hoclconnect.com/use-cases/skincare"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "What concentration of HOCl is safe for skincare products?",
      answer: "Skincare HOCl products typically range from 50-200 ppm, with face mists usually at the lower end (50-80 ppm) and therapeutic applications potentially higher. The exact concentration depends on intended use and must comply with FDA cosmetic or OTC drug regulations."
    },
    {
      question: "How long does it take to launch a HOCl skincare product?",
      answer: "Typical timeline is 12-16 weeks from concept to finished products. This includes 2-3 weeks for formulation and packaging setup, 8-10 weeks for production, and 2-3 weeks for quality testing and compliance documentation."
    },
    {
      question: "What's the shelf life of HOCl skincare products?",
      answer: "HOCl skincare products typically have 12-24 months shelf life when properly formulated and packaged. Proper pH buffering, appropriate packaging materials, and controlled storage conditions are crucial for stability."
    },
    {
      question: "Do I need FDA approval for HOCl skincare products?",
      answer: "HOCl cosmetic products don't require FDA pre-approval, but must comply with cosmetic regulations. If making drug claims (like antimicrobial benefits), additional OTC drug regulations apply. Work with experienced manufacturers who understand these requirements."
    },
    {
      question: "Can I customize the scent or add other ingredients to HOCl products?",
      answer: "Pure HOCl cannot be mixed with fragrances or most other ingredients as they can destabilize it. However, manufacturers can create companion products, dual-chamber packaging, or carefully formulated stable combinations. Discuss options with your manufacturer."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/use-cases/skincare'
    })
  }

  return (
    <>
      <MetaTags
        title="HOCl for Skincare & Beauty: Packaging & Launch Timeline"
        description="Complete guide to launching hypochlorous acid (HOCl) skincare products. Learn about product types, MOQs, timelines, and label requirements for beauty brands."
        keywords="HOCl skincare, hypochlorous acid beauty, private label skincare, beauty manufacturing, skincare launch"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[
            { label: 'Use Cases', href: '/use-cases' },
            { label: 'Skincare' }
          ]} />

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                HOCl for Skincare & Beauty: Packaging & Launch Timeline
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl">
              HOCl is gaining momentum in skincare for its gentle yet effective properties. Here's what you need to know 
              about product types, manufacturing requirements, and launching your HOCl beauty line.
            </p>
          </div>

          {/* Product types */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular product types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card hover>
                <Card.Content className="p-6 text-center">
                  <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Face & Body Mist</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Refreshing sprays for daily skincare routines. Popular in wellness and clean beauty.
                  </p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex justify-between">
                      <span>Typical MOQ:</span>
                      <span className="font-medium">5,000-15,000 units</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Common sizes:</span>
                      <span className="font-medium">2oz, 4oz, 8oz</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeline:</span>
                      <span className="font-medium">10-14 weeks</span>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card hover>
                <Card.Content className="p-6 text-center">
                  <div className="text-4xl mb-4">🧴</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cleanser & Toner</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Multi-step skincare products combining cleansing and toning benefits.
                  </p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex justify-between">
                      <span>Typical MOQ:</span>
                      <span className="font-medium">10,000-25,000 units</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Common sizes:</span>
                      <span className="font-medium">4oz, 8oz, 16oz</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeline:</span>
                      <span className="font-medium">12-16 weeks</span>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card hover>
                <Card.Content className="p-6 text-center">
                  <div className="text-4xl mb-4">💊</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Targeted Treatment</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Concentrated products for specific skin concerns and therapeutic applications.
                  </p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex justify-between">
                      <span>Typical MOQ:</span>
                      <span className="font-medium">3,000-10,000 units</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Common sizes:</span>
                      <span className="font-medium">1oz, 2oz, 4oz</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeline:</span>
                      <span className="font-medium">14-18 weeks</span>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* MOQs & timelines */}
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
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Lower MOQ (3K-8K units)</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Simple formulations (pure HOCl + buffer)</li>
                        <li>• Standard bottle shapes and sizes</li>
                        <li>• Basic label designs</li>
                        <li>• Single concentration</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-900 mb-2">Standard MOQ (10K-25K units)</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Multi-product lines</li>
                        <li>• Custom packaging elements</li>
                        <li>• Enhanced formulations</li>
                        <li>• Multiple size options</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-medium text-red-900 mb-2">Higher MOQ (25K+ units)</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Completely custom packaging</li>
                        <li>• Complex formulation development</li>
                        <li>• Multiple product variations</li>
                        <li>• Premium packaging materials</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Production Timeline</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                        1-2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Setup & Approvals</h4>
                        <p className="text-sm text-gray-600 mb-2">Product development, packaging design, compliance review</p>
                        <ul className="text-xs text-gray-500">
                          <li>• Formulation finalization</li>
                          <li>• Packaging sourcing</li>
                          <li>• Label design and approval</li>
                          <li>• Regulatory compliance check</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                        8-12
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Production</h4>
                        <p className="text-sm text-gray-600 mb-2">Manufacturing, filling, packaging, quality control</p>
                        <ul className="text-xs text-gray-500">
                          <li>• Batch production</li>
                          <li>• Filling and packaging</li>
                          <li>• In-process quality testing</li>
                          <li>• Label application</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                        2-4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Final Steps</h4>
                        <p className="text-sm text-gray-600 mb-2">Final testing, packaging, shipping preparation</p>
                        <ul className="text-xs text-gray-500">
                          <li>• Stability testing</li>
                          <li>• Final inspection</li>
                          <li>• Secondary packaging</li>
                          <li>• Shipping logistics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* Label checklist */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Label checklist</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span>Required Elements</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">Product name and brand</span>
                        <p className="text-xs text-gray-600">Clear identification of your product and brand</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">Ingredient list (INCI names)</span>
                        <p className="text-xs text-gray-600">Must use standard cosmetic ingredient naming</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">Net contents (volume/weight)</span>
                        <p className="text-xs text-gray-600">Accurate measurement in appropriate units</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">Manufacturer information</span>
                        <p className="text-xs text-gray-600">Name and address of responsible party</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">Directions for use</span>
                        <p className="text-xs text-gray-600">Clear instructions for safe and effective use</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Considerations</h3>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h4 className="font-medium text-yellow-900 text-sm mb-1">Cosmetic vs. Drug Claims</h4>
                      <p className="text-xs text-yellow-800">
                        Cosmetic claims focus on cleansing, beautifying, promoting attractiveness. 
                        Drug claims (antimicrobial, treating conditions) require different regulations.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-blue-900 text-sm mb-1">Warnings & Precautions</h4>
                      <p className="text-xs text-blue-800">
                        Include appropriate warnings like "For external use only," "Avoid contact with eyes," 
                        and any specific precautions for your formulation.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h4 className="font-medium text-purple-900 text-sm mb-1">Lot Codes & Expiration</h4>
                      <p className="text-xs text-purple-800">
                        Include batch/lot identification and expiration dates. Consider PAO (Period After Opening) 
                        symbols for products with longer shelf life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="private-label"
            title="Launch Your HOCl Skincare Line"
            description="Get matched with manufacturers experienced in HOCl skincare who can handle formulation, compliance, and production."
          />

          {/* FAQ Section */}
          <div className="mb-16">
            <FAQList faqs={faqs} title="Skincare HOCl FAQs" />
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Launch Your HOCl Skincare Line?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Tell us about your product vision and target market. We'll match you with manufacturers experienced 
              in HOCl skincare who can handle formulation, compliance, and production.
            </p>
            <Link
              to="/quote?path=pl&category=skincare"
              onClick={() => handleCTAClick('Get Matched with Skincare Manufacturers', '/quote?path=pl&category=skincare')}
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <span>Get Matched with Skincare Manufacturers</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkincarePage