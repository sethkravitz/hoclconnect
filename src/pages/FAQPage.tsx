import React from 'react'
import MetaTags from '../components/SEO/MetaTags'
import Breadcrumbs from '../components/Layout/Breadcrumbs'
import FAQList from '../components/FAQ/FAQList'
import { ORGANIZATION_SCHEMA } from '../constants/seo'

const FAQPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
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
        "name": "FAQ",
        "item": "https://hoclconnect.com/faq"
      }
    ]
  }

  const faqs = [
    {
      question: "Do you sell or manufacture HOCl?",
      answer: "No. We are a free matching service that connects buyers with vetted hypochlorous acid suppliers, bottlers, and private-label manufacturers. We do not manufacture, sell, or distribute HOCl ourselves.",
      category: "about"
    },
    {
      question: "What does your service cost?",
      answer: "Our matching service is completely free for buyers. We're compensated by our partner network when successful matches are made, ensuring our interests are aligned with finding you the best partners.",
      category: "pricing"
    },
    {
      question: "How quickly can I get partner introductions?",
      answer: "Most buyers receive partner introductions within 1–3 business days. We gather your requirements, score potential matches from our network, and make direct email introductions with the best-fit partners.",
      category: "process"
    },
    {
      question: "What information do I need to provide?",
      answer: "Our guided intake form will walk you through everything we need. Generally, we ask about your intended use, rough volume needs, timeline, and contact information. Don't worry if you're not sure about technical details – we're designed to help non-experts.",
      category: "process"
    },
    {
      question: "What types of partners are in your network?",
      answer: "We work with HOCl suppliers (bulk totes, drums, cases), bottling and filling companies, and private-label manufacturers across multiple industries including beauty, cleaning, agriculture, clinical, and food processing.",
      category: "partners"
    },
    {
      question: "Can I get scented or colored HOCl products?",
      answer: "HOCl itself cannot be scented, colored, or mixed with other chemicals as this affects its stability and effectiveness. However, we can help match you with partners who can provide compatible companion products that are packaged separately.",
      category: "products"
    },
    {
      question: "What if I don't know the technical specifications I need?",
      answer: "That's perfectly fine! Our intake form includes 'recommend for me' and 'not sure' options. The partners we introduce you to are experienced in your industry and can guide you through technical specifications, concentrations, and packaging options.",
      category: "process"
    },
    {
      question: "Do you provide regulatory compliance support?",
      answer: "We don't provide compliance services directly. However, the partners we introduce you to are experienced with regulatory requirements for HOCl products in their industries and can guide you through necessary certifications and documentation.",
      category: "compliance"
    },
    {
      question: "What industries do you serve?",
      answer: "We serve multiple industries including beauty & skincare, clinical & healthcare, janitorial & sanitation, agriculture & livestock, food processing, and others. Our partners have experience across these various applications.",
      category: "industries"
    },
    {
      question: "How do you select which partners to introduce me to?",
      answer: "We score potential partners based on industry expertise, capacity to meet your volume needs, geographic location, timeline compatibility, and other factors specific to your requirements. We typically introduce you to the top 2-3 matches.",
      category: "process"
    },
    {
      question: "What happens after you make introductions?",
      answer: "You work directly with the introduced partners to discuss pricing, terms, specifications, and logistics. We're available to help facilitate conversations if needed, but the business relationship is between you and your chosen partner.",
      category: "process"
    },
    {
      question: "Do you work with international partners?",
      answer: "We have partners across North America and can facilitate connections with international suppliers based on your geographic preferences and any regulatory requirements for your specific application.",
      category: "partners"
    }
  ]

  return (
    <>
      <MetaTags
        title="Frequently Asked Questions | HOCl Connect"
        description="Get answers to common questions about our free HOCl partner matching service. Learn how we connect buyers with suppliers, bottlers, and manufacturers."
        keywords="HOCl FAQ, hypochlorous acid questions, supplier matching, partner introductions"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our free HOCl partner matching service.
            </p>
          </div>

          <FAQList faqs={faqs} showCategories={true} />
        </div>
      </div>
    </>
  )
}

export default FAQPage