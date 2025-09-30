import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category?: string
}

interface FAQListProps {
  faqs: FAQItem[]
  title?: string
  showCategories?: boolean
}

const FAQList = ({ faqs, title = "Frequently Asked Questions", showCategories = false }: FAQListProps) => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const categories = showCategories 
    ? [...new Set(faqs.map(faq => faq.category).filter(Boolean))]
    : []

  const getFAQsByCategory = (category?: string) => {
    return faqs.filter(faq => faq.category === category)
  }

  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our HOCl partner matching service.
          </p>
        </div>

        {showCategories && categories.length > 0 ? (
          <div className="space-y-8">
            {categories.map(category => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                  {category} Questions
                </h3>
                <div className="space-y-4">
                  {getFAQsByCategory(category).map((faq) => {
                    const globalIndex = faqs.indexOf(faq)
                    return (
                      <FAQItem
                        key={globalIndex}
                        faq={faq}
                        index={globalIndex}
                        isOpen={openItems.includes(globalIndex)}
                        onToggle={() => toggleItem(globalIndex)}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

interface FAQItemProps {
  faq: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ faq, index, isOpen, onToggle }: FAQItemProps) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
    <button
      onClick={onToggle}
      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
    >
      <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
      {isOpen ? (
        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
      ) : (
        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
      )}
    </button>
    
    {isOpen && (
      <div 
        id={`faq-answer-${index}`}
        className="px-6 pb-4 text-gray-600 leading-relaxed"
      >
        {faq.answer}
      </div>
    )}
  </div>
)

export default FAQList