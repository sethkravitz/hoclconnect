import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'

const StickyMobileCTA = () => {
  const location = useLocation()
  
  // Don't show on quote page or thank you page
  const hiddenPaths = ['/quote', '/thank-you']
  if (hiddenPaths.includes(location.pathname)) {
    return null
  }

  const handleClick = () => {
    trackEvent('cta_click', {
      cta_type: 'sticky_mobile',
      source_page: location.pathname
    })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 md:hidden">
      <Link
        to="/quote"
        onClick={handleClick}
        className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 shadow-lg"
      >
        <span>Get Started Free</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
      <p className="text-xs text-gray-500 text-center mt-2">Free matching • 1-3 business days</p>
    </div>
  )
}

export default StickyMobileCTA