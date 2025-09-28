import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Users, Clock, CheckCircle, Droplets, Building2, Beaker } from 'lucide-react'
import { trackEvent } from '../lib/analytics'
import MetaTags from '../components/SEO/MetaTags'
import FAQList from '../components/FAQ/FAQList'

const HomePage = () => {
  // Optimized Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HOCl Connect",
    "url": "https://hoclconnect.com",
    "logo": "https://hoclconnect.com/logo.png"
  }

  // WebSite Schema for search functionality
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://hoclconnect.com",
    "name": "HOCl Connect",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hoclconnect.com/search?q={query}",
      "query-input": "required name=query"
    }
  }

  // FAQ Schema matching on-page content
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you manufacture or sell HOCl?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We are a free matching service that connects you to vetted HOCl manufacturers and private-label partners."
        }
      },
      {
        "@type": "Question",
        "name": "What does it cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The service is free to buyers. We're compensated by partners we refer when applicable."
        }
      },
      {
        "@type": "Question",
        "name": "How fast do I get introductions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually within 1–3 business days after you submit your requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What if I'm not sure about technical details?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No problem—share your use case, rough volumes, and timeline. We help translate that into manufacturer specs."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common use cases include jan-san, food service, healthcare, pet, and consumer skin-safe applications. We'll route you accordingly."
        }
      }
    ]
  }

  const faqs = [
    {
      question: "Do you manufacture or sell HOCl?",
      answer: "No. We're a matching service that connects buyers with vetted suppliers and manufacturers. We don't make or sell HOCl ourselves."
    },
    {
      question: "What does it cost me?",
      answer: "Free to buyers. We're compensated by our partner network when successful matches are made."
    },
    {
      question: "How fast do I get introductions?",
      answer: "Usually 1-3 business days. We gather your requirements, score potential matches, and make direct email introductions."
    },
    {
      question: "What if I'm not sure about technical details?",
      answer: "That's fine! Our intake form is designed for non-experts. The partners we introduce you to can guide you through specifications."
    },
    {
      question: "What industries do you serve?",
      answer: "Beauty, cleaning, agriculture, healthcare, food processing, and more. We match you with partners experienced in your specific application."
    }
  ]

  const handleCTAClick = (ctaText: string, ctaUrl: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      cta_url: ctaUrl,
      source_page: '/'
    })
  }
  return (
    <>
      <MetaTags
        title="HOCl Manufacturers (Bulk & Private Label) | HOCl Connect"
        description="Get matched with vetted hypochlorous acid (HOCl) manufacturers in the U.S. Choose bulk liquid or private label. Free matching, usually 1–3 business days."
        canonical="https://hoclconnect.com/"
        ogTitle="Find Vetted HOCl Manufacturers | HOCl Connect"
        ogDescription="We match you with verified hypochlorous acid suppliers for bulk or private label. Free, fast introductions."
        ogImage="https://hoclconnect.com/og/home.jpg"
        organizationSchema={organizationSchema}
        websiteSchema={websiteSchema}
        faqSchema={faqSchema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Droplets className="h-16 w-16 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Launch Your HOCl Product:
              <span className="block text-blue-200">We Connect You to Expert Partners</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100 leading-relaxed">
              Whether you need bulk liquid or want to launch your own product line, we connect you with the right partners.
              <span className="block font-semibold text-white mt-2">Free matching service — usually 1-3 business days.</span>
            </p>

            {/* Primary CTAs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              <Link
                to="/bulk-hocl"
                onClick={() => handleCTAClick('Get Bulk HOCl Liquid', '/bulk-hocl')}
                className="bg-white text-blue-700 px-8 py-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-3 group text-lg"
              >
                <Building2 className="h-5 w-5" />
                <span>Get Bulk HOCl Liquid</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/private-label"
                onClick={() => handleCTAClick('Launch My Own HOCl Product', '/private-label')}
                className="bg-blue-500 text-white px-8 py-6 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center space-x-3 group border-2 border-blue-400 text-lg"
              >
                <Beaker className="h-5 w-5" />
                <span>Launch My Own HOCl Product</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <Link
              to="/quote"
              onClick={() => handleCTAClick('Get Started Now — Free', '/quote')}
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-10 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors text-xl shadow-lg"
            >
              <span>Get Started Now — Free</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <div className="text-blue-200 text-sm mt-4">
              Free matching service • Usually 1-3 business days • We don't manufacture HOCl
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple process — usually 1-3 business days from request to introductions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brief</h3>
              <p className="text-gray-600">
                Complete our guided intake form. Tell us about your needs — use case, volumes, 
                and timeline. Don't worry if you're not sure about details.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Match</h3>
              <p className="text-gray-600">
                We review your requirements and score potential partners from our vetted network 
                based on industry expertise, capacity, and location.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Intro</h3>
              <p className="text-gray-600">
                Direct email introductions with 2-3 best-fit partners. You work directly with them 
                on pricing and specifications.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              onClick={() => handleCTAClick('See the Complete Process', '/how-it-works')}
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              <span>See the Complete Process</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Vetted Partners</h3>
              <p className="text-sm text-gray-600">Pre-screened suppliers and manufacturers</p>
            </div>
            <div>
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Industry Knowledge</h3>
              <p className="text-sm text-gray-600">Understanding of HOCl applications and requirements</p>
            </div>
            <div>
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Fast Introductions</h3>
              <p className="text-sm text-gray-600">Usually 1-3 business days to partner introductions</p>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Free to Buyers</h3>
              <p className="text-sm text-gray-600">No cost for our matching service</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQList faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your HOCl Product?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need bulk liquid or a complete product line, we'll connect you with the perfect manufacturing partners.
          </p>
          <Link
            to="/quote"
            onClick={() => handleCTAClick('Get Started Now — Free', '/quote')}
            className="inline-flex items-center space-x-2 bg-orange-500 text-white px-10 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors text-xl shadow-lg"
          >
            <span>Get Started Now — Free</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage