import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import MetaTags from '../components/SEO/MetaTags'
import Breadcrumbs from '../components/Layout/Breadcrumbs'
import Card from '../components/UI/Card'
import { useToast } from '../hooks/useToast'
import { ORGANIZATION_SCHEMA } from '../constants/seo'

const ContactPage = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Placeholder for actual contact form submission
    console.log('Contact form submitted:', formData)
    
    toast({
      type: 'success',
      title: 'Message Sent',
      message: 'Thank you for contacting us. We\'ll respond within 1 business day.'
    })

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    })
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

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
        "name": "Contact",
        "item": "https://hoclconnect.com/contact"
      }
    ]
  }

  return (
    <>
      <MetaTags
        title="Contact HOCl Connect - Get Help with Partner Matching"
        description="Contact our team for help with HOCl partner matching. We're here to answer questions and help connect you with suppliers, bottlers, and manufacturers."
        keywords="contact HOCl Connect, support, help, partner matching assistance"
        structuredData={structuredData}
        organizationSchema={ORGANIZATION_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about HOCl partner matching? We're here to help connect you with the right suppliers, bottlers, and manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <Card.Header>
                  <h2 className="text-xl font-semibold text-gray-900">Get in Touch</h2>
                </Card.Header>
                <Card.Content>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">hello@hoclconnect.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">1-555-HOCL-123</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">United States</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Response Time</p>
                        <p className="text-gray-600">Within 1 business day</p>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <Card.Content className="p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Need Partners Fast?</h3>
                  <p className="text-blue-800 text-sm mb-4">
                    Skip the contact form and go straight to our guided intake process. 
                    Most buyers receive partner introductions within 1-3 business days.
                  </p>
                  <a
                    href="/quote"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Start Matching Process
                  </a>
                </Card.Content>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <Card.Header>
                  <h2 className="text-xl font-semibold text-gray-900">Send us a message</h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Have questions about our service or need help with something specific? We're here to help.
                  </p>
                </Card.Header>
                <Card.Content>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => updateFormData('name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => updateFormData('company', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Your company (optional)"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => updateFormData('subject', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="partner-matching">Questions about partner matching</option>
                          <option value="existing-request">Question about existing request</option>
                          <option value="partner-application">I want to become a partner</option>
                          <option value="technical-support">Technical support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </Card.Content>
              </Card>
            </div>
          </div>

          {/* Common Questions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Common Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <Card.Content className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">How does matching work?</h3>
                  <p className="text-gray-600 text-sm">
                    Complete our guided intake form, and we'll introduce you to 2-3 best-fit partners 
                    within 1-3 business days.
                  </p>
                </Card.Content>
              </Card>

              <Card>
                <Card.Content className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Is there a cost to buyers?</h3>
                  <p className="text-gray-600 text-sm">
                    No, our matching service is completely free for buyers. We're compensated by 
                    our partner network when successful matches are made.
                  </p>
                </Card.Content>
              </Card>

              <Card>
                <Card.Content className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Do you manufacture HOCl?</h3>
                  <p className="text-gray-600 text-sm">
                    No, we don't manufacture or sell HOCl. We're a matching service that connects 
                    buyers with vetted suppliers, bottlers, and manufacturers.
                  </p>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage