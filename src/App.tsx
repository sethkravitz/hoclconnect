import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastProvider } from './hooks/useToast'
import { trackEvent } from './lib/analytics'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import StickyMobileCTA from './components/Layout/StickyMobileCTA'
import HomePage from './pages/HomePage'
import ThankYouPage from './pages/ThankYouPage'
import BulkHOClPage from './pages/BulkHOClPage'
import PrivateLabelPage from './pages/PrivateLabelPage'
import HowItWorksPage from './pages/HowItWorksPage'
import FAQPage from './pages/FAQPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FiftyFiveGallonDrumPage from './pages/containers/FiftyFiveGallonDrumPage'
import TwoSeventyFiveGallonTotePage from './pages/containers/TwoSeventyFiveGallonTotePage'
import CasesPage from './pages/containers/CasesPage'
import JanitorialPage from './pages/use-cases/JanitorialPage'
import SkincarePage from './pages/use-cases/SkincarePage'
import BulkBuyersGuidePage from './pages/guides/BulkBuyersGuidePage'
import PrivateLabelPlaybookPage from './pages/guides/PrivateLabelPlaybookPage'
import ToteVsDrumPage from './pages/compare/ToteVsDrumPage'
import RtuVsConcentratePage from './pages/compare/RtuVsConcentratePage'
import TexasPage from './pages/locations/TexasPage'
import CaliforniaPage from './pages/locations/CaliforniaPage'
import IntakeForm from './components/Forms/IntakeForm'
import './index.css'

// Component to handle route tracking and scroll restoration
const RouteTracker = () => {
  const location = useLocation()

  React.useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
    
    // Track page views and categorize them
    const path = location.pathname
    
    // Define pillar pages
    const pillarPages = ['/bulk-hocl', '/private-label', '/how-it-works']
    
    // Define educational pages
    const eduPages = [
      '/guides/', '/compare/', '/containers/', '/use-cases/', '/locations/',
      '/faq', '/about'
    ]
    
    if (pillarPages.includes(path)) {
      trackEvent('view_pillar', {
        page: path,
        timestamp: new Date().toISOString()
      })
    } else if (eduPages.some(pattern => path.startsWith(pattern))) {
      trackEvent('view_edu', {
        page: path,
        timestamp: new Date().toISOString()
      })
    }
  }, [location])

  return null
}

function App() {
  return (
    <HelmetProvider>
      <ToastProvider>
        <Router>
          <RouteTracker />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bulk-hocl" element={<BulkHOClPage />} />
                <Route path="/private-label" element={<PrivateLabelPage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                
                {/* Container pages */}
                <Route path="/containers/55-gallon-drum" element={<FiftyFiveGallonDrumPage />} />
                <Route path="/containers/275-gallon-tote" element={<TwoSeventyFiveGallonTotePage />} />
                <Route path="/containers/cases" element={<CasesPage />} />
                
                {/* Use case pages */}
                <Route path="/use-cases/janitorial" element={<JanitorialPage />} />
                <Route path="/use-cases/skincare" element={<SkincarePage />} />
                
                {/* Guide pages */}
                <Route path="/guides/bulk-buyers" element={<BulkBuyersGuidePage />} />
                <Route path="/guides/private-label-playbook" element={<PrivateLabelPlaybookPage />} />
                
                {/* Comparison pages */}
                <Route path="/compare/tote-vs-drum" element={<ToteVsDrumPage />} />
                <Route path="/compare/rtu-vs-concentrate" element={<RtuVsConcentratePage />} />
                
                {/* Location pages */}
                <Route path="/locations/texas" element={<TexasPage />} />
                <Route path="/locations/california" element={<CaliforniaPage />} />
                
                <Route path="/quote" element={
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8 text-center">
                      <h1 className="text-3xl font-bold text-gray-900 mb-4">Get Matched with HOCl Partners</h1>
                      <p className="text-lg text-gray-600">
                        Tell us about your needs and we'll connect you with the right suppliers, bottlers, or manufacturers.
                      </p>
                    </div>
                    <IntakeForm />
                  </div>
                } />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<div className="p-8">Blog Page - Coming Soon</div>} />
                <Route path="/blog/:slug" element={<div className="p-8">Blog Post - Coming Soon</div>} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="*" element={
                  <div className="max-w-2xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                    <p className="text-lg text-gray-600 mb-8">
                      The page you're looking for doesn't exist.
                    </p>
                    <a href="/" className="text-blue-600 hover:text-blue-700">Return to Homepage</a>
                  </div>
                } />
              </Routes>
            </main>
            <Footer />
            <StickyMobileCTA />
          </div>
        </Router>
      </ToastProvider>
    </HelmetProvider>
  )
}

export default App