import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Package, Clock, DollarSign, CheckCircle, AlertTriangle } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import MetaTags from '../../components/SEO/MetaTags'
import Breadcrumbs from '../../components/Layout/Breadcrumbs'
import Card from '../../components/UI/Card'
import FAQList from '../../components/FAQ/FAQList'
import MidArticleCTA from '../../components/UI/MidArticleCTA'
import { ORGANIZATION_SCHEMA } from '../../constants/seo'

const PrivateLabelPlaybookPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "name": "Private-Label HOCl Playbook: Complete Launch Guide",
        "description": "Step-by-step playbook for launching your own HOCl product line with proper MOQ planning, timeline management, and cost optimization",
        "supply": [
          "Market research and positioning strategy",
          "Budget planning for first production run",
          "Brand assets and compliance documentation"
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Define Your Project Scope",
            "text": "Determine whether you need turnkey manufacturing or will supply some components yourself. This affects MOQs, timelines, and costs."
          },
          {
            "@type": "HowToStep",
            "name": "Plan Your Pilot Run",
            "text": "Start with smaller quantities to test the market before committing to full production volumes. Budget for higher per-unit costs initially."
          },
          {
            "@type": "HowToStep",
            "name": "Calculate First PO Investment",
            "text": "Factor in setup costs, minimum order quantities, packaging materials, and working capital needs for your initial production run."
          },
          {
            "@type": "HowToStep",
            "name": "Build Timeline Buffer",
            "text": "Account for formulation approval, packaging procurement, production scheduling, and quality testing. Add 20-30% buffer to initial estimates."
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
            "name": "Private-Label Playbook",
            "item": "https://hoclconnect.com/guides/private-label-playbook"
          }
        ]
      }
    ]
  }

  const faqs = [
    {
      question: "What's the minimum investment needed to launch a HOCl product?",
      answer: "Plan for $25,000-75,000 for your first production run, including setup costs ($5K-15K), minimum order quantities (5K-15K units at $2-6 each), and working capital. Pilot runs can start lower but cost more per unit."
    },
    {
      question: "How long does it really take from concept to finished products?",
      answer: "Realistic timeline is 12-20 weeks. This includes 2-4 weeks for setup and approvals, 8-12 weeks for production, and 2-4 weeks for testing and shipping. Always add buffer time for approvals and unexpected delays."
    },
    {
      question: "Should I do a pilot run before my main production?",
      answer: "Yes, if budget allows. Pilot runs (500-2,000 units) let you test the market, refine packaging, and validate demand before committing to full MOQs. Expect to pay 50-100% more per unit for pilots."
    },
    {
      question: "What's the difference in cost between turnkey and supplying my own packaging?",
      answer: "Turnkey is typically 15-30% more expensive per unit but includes all materials and reduces complexity. Supplying your own packaging requires minimum quantities, quality specifications, and additional coordination but can reduce costs."
    },
    {
      question: "How do I budget for ongoing production after the first run?",
      answer: "Reorders are typically 30-50% cheaper per unit since setup costs are eliminated. Plan for 8-12 week reorder cycles, maintain 2-3 months of inventory, and negotiate volume pricing as you scale."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/guides/private-label-playbook'
    })
  }

  return (
    <>
      <MetaTags
        title="Private-Label HOCl Playbook: MOQs, Timelines, and Cost Components"
        description="Complete playbook for launching your HOCl product line. Learn about MOQs, production timelines, cost planning, pilot runs, and first PO optimization strategies."
        keywords="private label HOCl playbook, HOCl product launch, MOQ planning, manufacturing timelines, private label costs"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[
            { label: 'Guides', href: '/guides' },
            { label: 'Private-Label Playbook' }
          ]} />

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Private-Label HOCl Playbook: MOQs, Timelines, and Cost Components
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mb-4">
              Launching your own HOCl product requires careful planning around minimum order quantities, production timelines, and cost management. This playbook walks you through the key decisions and planning steps for a successful launch.
            </p>
            <div className="text-sm text-gray-500">
              Last updated: January 11, 2025
            </div>
          </div>

          {/* Project Scope */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Choose your project scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <Target className="h-5 w-5 text-green-600" />
                    <span>Turnkey Manufacturing</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Partner handles everything: formulation, packaging sourcing, labeling, production, and fulfillment.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Advantages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fastest time to market</li>
                        <li>• Lower complexity for you</li>
                        <li>• Partner expertise in compliance</li>
                        <li>• One point of contact</li>
                        <li>• No minimum packaging orders</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Trade-offs:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Higher per-unit costs (15-30%)</li>
                        <li>• Less control over materials</li>
                        <li>• Dependent on partner capabilities</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <Package className="h-5 w-5 text-blue-600" />
                    <span>Supply Your Own Materials</span>
                  </h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      You source bottles, labels, caps, or other packaging materials. Partner handles formulation and filling.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Advantages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Lower per-unit costs</li>
                        <li>• Full control over packaging quality</li>
                        <li>• Custom packaging options</li>
                        <li>• Better margin potential</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Trade-offs:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• More complex coordination</li>
                        <li>• Separate packaging minimums</li>
                        <li>• Quality responsibility</li>
                        <li>• Longer lead times</li>
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* MOQ Planning */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Understanding MOQs by product complexity</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product Complexity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Typical MOQ Range
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Setup Investment
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Timeline
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        <div>
                          <div className="font-semibold">Simple Products</div>
                          <div className="text-xs text-gray-600">Standard bottles, basic formulation, simple labels</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        3,000-8,000 units
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        $5,000-12,000
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        8-12 weeks
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        <div>
                          <div className="font-semibold">Standard Products</div>
                          <div className="text-xs text-gray-600">Multiple sizes, custom labels, specialty caps</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        8,000-20,000 units
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        $10,000-25,000
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        10-16 weeks
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        <div>
                          <div className="font-semibold">Complex Products</div>
                          <div className="text-xs text-gray-600">Custom packaging, multiple SKUs, special formulations</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        15,000-50,000+ units
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        $20,000-50,000+
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        14-20 weeks
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-yellow-800">
                  <strong>Planning tip:</strong> MOQs can often be split across multiple SKUs (different sizes, labels) with the same base formulation. This gives you product variety without increasing minimums.
                </p>
              </div>
            </div>
          </section>

          {/* Pilot Strategy */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Pilot run strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-green-50 border-green-200">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-green-900">When Pilots Make Sense</h3>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-3 text-green-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Testing new market or customer segment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Validating product-market fit before major investment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Refining formulation or packaging based on user feedback</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Limited launch budget requiring proof of concept</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Building social proof and testimonials</span>
                    </li>
                  </ul>
                </Card.Content>
              </Card>

              <Card>
                <Card.Header>
                  <h3 className="text-xl font-semibold text-gray-900">Pilot Run Economics</h3>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Typical Pilot Specs:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Volume: 500-2,000 units</li>
                        <li>• Cost premium: 50-100% vs full production</li>
                        <li>• Timeline: 6-10 weeks</li>
                        <li>• Setup costs: $2,000-8,000</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Example:</strong> 1,000 unit pilot</p>
                      <p>• Setup: $5,000</p>
                      <p>• Production: $8/unit vs $4/unit at full scale</p>
                      <p>• Total: $13,000 ($13/unit)</p>
                      <p>• Full MOQ equivalent: 5,000 units at $25,000 ($5/unit)</p>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </section>

          {/* First PO Planning */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">First PO planning worksheet</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                    <DollarSign className="h-5 w-5" />
                    <span>Cost Components</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Setup & Development</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Formulation development: $2,000-8,000</li>
                        <li>• Packaging design & setup: $1,000-5,000</li>
                        <li>• Label artwork & proofs: $500-2,000</li>
                        <li>• Regulatory compliance: $1,000-3,000</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Production Costs</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Raw materials: $1-3 per unit</li>
                        <li>• Packaging materials: $0.50-2 per unit</li>
                        <li>• Filling & labor: $0.25-0.75 per unit</li>
                        <li>• Quality testing: $0.05-0.25 per unit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                    <Package className="h-5 w-5" />
                    <span>Investment Planning</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Budget Breakdown</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Setup costs</span>
                          <span>20-30%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Production</span>
                          <span>60-70%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Buffer/contingency</span>
                          <span>10-20%</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Investment Ranges</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Pilot (500-1,000): $8,000-15,000</li>
                        <li>• Small launch (3,000-5,000): $20,000-35,000</li>
                        <li>• Standard launch (8,000-15,000): $35,000-75,000</li>
                        <li>• Large launch (20,000+): $75,000-150,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Planning */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Key timeline milestones</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    Week 1-3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Project Setup & Approvals</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Finalize formulation and concentrations</li>
                      <li>• Approve packaging materials and design</li>
                      <li>• Complete regulatory compliance review</li>
                      <li>• Finalize label copy and artwork</li>
                      <li>• Sign manufacturing agreement</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    Week 4-12
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Production Phase</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Packaging materials procurement (4-8 weeks)</li>
                      <li>• Production scheduling and batching</li>
                      <li>• Filling, capping, and labeling</li>
                      <li>• Quality control testing</li>
                      <li>• Secondary packaging preparation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    Week 13-16
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Final Testing & Shipping</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Stability testing and final QC</li>
                      <li>• Certificate of analysis generation</li>
                      <li>• Finished goods packaging</li>
                      <li>• Logistics coordination</li>
                      <li>• Delivery and receipt confirmation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-yellow-800">
                    <strong>Buffer recommendation:</strong> Add 20-30% to timeline estimates. Common delays include packaging approvals, regulatory reviews, and seasonal manufacturing capacity constraints.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <MidArticleCTA 
            path="private-label"
            title="Plan Your Product Launch"
            description="Use this playbook's insights to get matched with experienced manufacturers who can guide you through each phase."
          />

          {/* FAQ */}
          <div className="mb-16">
            <FAQList faqs={faqs} title="Private Label Planning FAQs" />
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Launch Your HOCl Product?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Use this playbook to plan your project scope, budget, and timeline. We'll match you with experienced manufacturers who can guide you through each phase of your product launch.
            </p>
            <div className="space-y-4">
              <Link
                to="/quote?path=pl"
                onClick={() => handleCTAClick('Start Your Private Label Request', '/quote?path=pl')}
                className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                <span>Start Your Private Label Request</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-blue-200">
                <Link to="/private-label" className="hover:text-white transition-colors">
                  Learn More About Private Label
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link to="/use-cases/skincare" className="hover:text-white transition-colors">
                  HOCl for Skincare Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivateLabelPlaybookPage