import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, CheckCircle, Package, Beaker, HelpCircle, Timer, Droplets, Building2, SprayCan as Spray } from 'lucide-react'
import { useToast } from '../../hooks/useToast'
import { useUtmParams } from '../../hooks/useUtmParams'
import { trackEvent } from '../../lib/analytics'
import Card from '../UI/Card'

type Path = 'bulk' | 'private-label'

interface FormData {
  path?: Path
  // Bulk HOCl fields
  bulk_use_case?: string
  amount_band?: string
  cadence?: string
  timeline?: string
  bulk_format_pref?: string
  // Private Label fields
  pl_product_type?: string
  pl_end_format?: string
  pl_run_size_band?: string
  pl_launch_window?: string
  pl_scope?: string
  // Common fields
  region_pref?: string
  company?: string
  contact_name?: string
  email?: string
  phone?: string
  notes: string
  unknown_fields: Record<string, boolean>
}

const IntakeForm = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { toast } = useToast()
  const { getUtmParams } = useUtmParams()
  
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    path: undefined,
    notes: '',
    unknown_fields: {}
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  // Initialize path from query params
  useEffect(() => {
    const pathParam = searchParams.get('path')
    const useParam = searchParams.get('use')
    const categoryParam = searchParams.get('category')
    const emailParam = searchParams.get('email')
    let initialPath: Path | undefined = undefined
    
    if (pathParam === 'bulk') {
      initialPath = 'bulk'
    } else if (pathParam === 'pl') {
      initialPath = 'private-label'
    }

    if (initialPath && !formData.path) {
      setFormData(prev => ({ ...prev, path: initialPath }))
    }
    
    // Pre-fill use case for bulk flow
    if (useParam && !formData.bulk_use_case) {
      setFormData(prev => ({ ...prev, bulk_use_case: useParam }))
    }
    
    // Pre-fill category for private label flow
    if (categoryParam && !formData.pl_product_type) {
      const productTypeMap: Record<string, string> = {
        'skincare': 'face-body-mist'
      }
      const productType = productTypeMap[categoryParam] || categoryParam
      setFormData(prev => ({ ...prev, pl_product_type: productType }))
    }
    
    // Pre-fill email if provided
    if (emailParam && !formData.email) {
      setFormData(prev => ({ ...prev, email: emailParam }))
    }
  }, [searchParams, formData.path, formData.bulk_use_case, formData.pl_product_type, formData.email])

  const updateFormData = (updates: Partial<FormData>) => {
    // Track lead started on first interaction
    if (!hasStarted) {
      trackEvent('lead_started', {
        path: formData.path,
        source_page: document.referrer || 'direct'
      })
      setHasStarted(true)
    }
    
    setFormData(prev => ({ ...prev, ...updates }))
  }

  const updateUnknownField = (field: string, isUnknown: boolean) => {
    setFormData(prev => ({
      ...prev,
      unknown_fields: { ...prev.unknown_fields, [field]: isUnknown }
    }))
  }

  const getTotalSteps = () => {
    return 5 // Path -> Flow Step 1 -> Flow Step 2 -> Flow Step 3 -> About You
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return !!formData.path
      case 1:
        if (formData.path === 'bulk') {
          return !!formData.bulk_use_case
        } else {
          return !!formData.pl_product_type
        }
      case 2:
        if (formData.path === 'bulk') {
          return !!(formData.amount_band && formData.timeline)
        } else {
          return !!(formData.pl_run_size_band && formData.pl_launch_window)
        }
      case 3:
        if (formData.path === 'bulk') {
          return !!formData.bulk_format_pref
        } else {
          return !!formData.pl_scope
        }
      case 4:
        return !!(formData.contact_name && formData.email)
      default:
        return true
    }
  }

  const handleSubmit = async () => {
    if (!canProceed()) {
      toast({
        type: 'error',
        title: 'Missing Required Information',
        message: 'Please fill in all required fields before submitting.'
      })
      return
    }

    setIsSubmitting(true)
    try {
      // Map path to legacy intent field
      const intent = formData.path === 'private-label' ? 'private-label' : 'supplier'
      
      // Map use case to industry field
      let industry = 'other'
      if (formData.path === 'bulk') {
        industry = formData.bulk_use_case || 'other'
      } else if (formData.path === 'private-label') {
        // Map product types to industries
        const productToIndustry: Record<string, string> = {
          'face-body-mist': 'beauty',
          'cleanser-toner': 'beauty',
          'multi-surface': 'jansan',
          'other': 'other'
        }
        industry = productToIndustry[formData.pl_product_type || 'other'] || 'other'
      }

      // Build requirements object
      const requirements = {
        path: formData.path,
        utm_params: getUtmParams(), // Store UTM parameters with the lead
        bulk_use_case: formData.bulk_use_case,
        amount_band: formData.amount_band,
        cadence: formData.cadence,
        timeline: formData.timeline,
        bulk_format_pref: formData.bulk_format_pref,
        pl_product_type: formData.pl_product_type,
        pl_end_format: formData.pl_end_format,
        pl_run_size_band: formData.pl_run_size_band,
        pl_launch_window: formData.pl_launch_window,
        pl_scope: formData.pl_scope,
        region_pref: formData.region_pref,
        unknown_fields: formData.unknown_fields
      }

      // Calculate score
      let score = 0
      if (formData.path) score += 2
      if (formData.bulk_use_case || formData.pl_product_type) score += 2
      if (formData.amount_band || formData.pl_run_size_band) score += 1
      if (formData.timeline || formData.pl_launch_window) score += 1
      if (formData.region_pref) score += 1
      if (formData.company) score += 1

      // Store lead summary for thank you page
      const leadSummary = {
        path: formData.path,
        company: formData.company,
        contact_name: formData.contact_name,
        email: formData.email,
        requirements,
        submitted_at: new Date().toISOString()
      }
      localStorage.setItem('lastSubmittedLead', JSON.stringify(leadSummary))

      // Submit to the new API endpoint
      const leadData = {
        intent,
        industry,
        company: formData.company || null,
        contactName: formData.contact_name!,
        email: formData.email!,
        phone: formData.phone || null,
        notes: formData.notes || null,
        // Map form fields to database schema
        amountBand: formData.amount_band,
        cadence: formData.cadence,
        timeline: formData.timeline,
        strengthChoice: null, // Not collected in this form
        format: formData.bulk_format_pref,
        packagingGoal: formData.pl_scope,
        ackPurity: true, // Assuming acknowledgment of purity
        companionInterest: false, // Not collected in this form
        regionPref: formData.region_pref,
        experienceLevel: null, // Not collected in this form
        unknownFields: formData.unknown_fields,
        score,
        status: 'new'
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit lead')
      }

      // Track successful submission
      trackEvent('lead_submitted', {
        path: formData.path,
        industry,
        score,
        utm_source: getUtmParams().utm_source,
        utm_medium: getUtmParams().utm_medium,
        utm_campaign: getUtmParams().utm_campaign
      })

      toast({
        type: 'success',
        title: 'Request Submitted Successfully',
        message: 'Thanks — we\'ll review and introduce you to best-fit partners within 1–3 business days.'
      })

      navigate('/thank-you')
    } catch (error) {
      console.error('Submission error:', error)
      toast({
        type: 'error',
        title: 'Submission Failed',
        message: 'Please try again or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderProgressBar = () => {
    const totalSteps = getTotalSteps()
    const progress = ((currentStep + 1) / totalSteps) * 100

    return (
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Step {currentStep + 1} of {totalSteps}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    )
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return renderPathStep()
      case 1:
        return formData.path === 'bulk' ? renderBulkUseCaseStep() : renderPLProductTypeStep()
      case 2:
        return formData.path === 'bulk' ? renderBulkAmountTimingStep() : renderPLPackagingRunSizeStep()
      case 3:
        return formData.path === 'bulk' ? renderBulkFormatPreferenceStep() : renderPLScopeStep()
      case 4:
        return renderAboutYouStep()
      default:
        return null
    }
  }

  const renderPathStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose your path</h2>
        <p className="text-gray-600">What are you looking to do with HOCl?</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          { 
            id: 'bulk', 
            title: 'Get Bulk HOCl Liquid', 
            description: 'Purchase large quantities for your facility or operations',
            icon: Package
          },
          { 
            id: 'private-label', 
            title: 'Launch My Own HOCl Product', 
            description: 'Create your own branded HOCl product line',
            icon: Beaker
          }
        ].map((option) => {
          const Icon = option.icon
          return (
            <button
              key={option.id}
              onClick={() => updateFormData({ path: option.id as Path })}
              className={`p-6 text-left rounded-lg border-2 transition-all hover:shadow-sm ${
                formData.path === option.id
                  ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start space-x-4">
                <Icon className={`h-6 w-6 mt-1 ${formData.path === option.id ? 'text-blue-600' : 'text-gray-400'}`} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )

  const renderBulkUseCaseStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Where will you use it?</h2>
        <p className="text-gray-600">Different uses may call for different approaches. We'll guide you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { id: 'janitorial', title: 'Janitorial/Facility', description: 'Schools, gyms, offices, cleaning services', icon: Building2 },
          { id: 'agriculture', title: 'Agriculture', description: 'Farms, livestock, veterinary applications', icon: '🌾' },
          { id: 'food-processing', title: 'Food Processing', description: 'Food safety, equipment sanitization', icon: '🏭' },
          { id: 'clinical', title: 'Clinical', description: 'Healthcare, dental, medical facilities', icon: '🏥' },
          { id: 'other', title: 'Other', description: 'Tell us about your specific use case', icon: HelpCircle }
        ].map((option) => {
          const Icon = typeof option.icon === 'string' ? () => <span className="text-2xl">{option.icon}</span> : option.icon
          return (
            <button
              key={option.id}
              onClick={() => updateFormData({ bulk_use_case: option.id })}
              className={`p-4 text-left rounded-lg border-2 transition-all ${
                formData.bulk_use_case === option.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start space-x-3">
                <Icon className={`h-6 w-6 mt-1 ${formData.bulk_use_case === option.id ? 'text-blue-600' : 'text-gray-400'}`} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )

  const renderBulkAmountTimingStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">How much & when?</h2>
        <p className="text-gray-600">Help us understand your volume needs and schedule.</p>
      </div>

      <div className="space-y-6">
        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            About how much to start? *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { 
                id: 'cases', 
                title: 'A few cases (≤~25 gal)',
                description: 'Cases of bottles, small batches',
                icon: '📦'
              },
              { 
                id: 'drums', 
                title: 'A few drums (~100–300 gal)',
                description: 'A drum ≈ 55 gal, moderate volumes',
                icon: '🛢️'
              },
              { 
                id: 'tote', 
                title: 'A tote (~275–330 gal)',
                description: 'A tote ≈ 275–330 gal, larger operations',
                icon: '🏗️'
              },
              { 
                id: 'not-sure-amount', 
                title: 'Not sure',
                description: 'We\'ll help you figure it out',
                icon: '❓'
              }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  updateFormData({ amount_band: option.id })
                  updateUnknownField('amount_band', option.id === 'not-sure-amount')
                }}
                className={`p-4 text-left rounded-lg border-2 transition-all ${
                  formData.amount_band === option.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{option.title}</h3>
                    <p className="text-xs text-gray-600">{option.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Cadence */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Is this one-time or ongoing?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: 'one-time', title: 'One-time' },
              { id: 'monthly', title: 'Monthly' },
              { id: 'quarterly', title: 'Quarterly' },
              { id: 'not-sure-cadence', title: 'Not sure' }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  updateFormData({ cadence: option.id })
                  updateUnknownField('cadence', option.id === 'not-sure-cadence')
                }}
                className={`p-3 text-center rounded-lg border-2 transition-all ${
                  formData.cadence === option.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-sm font-medium text-gray-900">{option.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            When do you need your first delivery? *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { id: 'asap', title: 'ASAP', description: 'Rush order, very urgent' },
              { id: '2-4-weeks', title: '~2–4 weeks', description: 'Standard timeframe' },
              { id: '1-2-months', title: '~1–2 months', description: 'Planning ahead' }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => updateFormData({ timeline: option.id })}
                className={`p-4 text-center rounded-lg border-2 transition-all ${
                  formData.timeline === option.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Timer className="h-4 w-4 text-gray-600" />
                  <span className="font-semibold text-gray-900">{option.title}</span>
                </div>
                <p className="text-xs text-gray-600">{option.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderBulkFormatPreferenceStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Format preference</h2>
        <p className="text-gray-600">How should your HOCl arrive?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { id: 'ready-to-use', title: 'Ready-to-use', description: 'Use straight out of container', icon: '🚰' },
          { id: 'concentrate', title: 'Concentrate', description: 'Dilute before use (lower shipping costs)', icon: '🧪' },
          { id: 'not-sure-format', title: 'Not sure', description: 'Recommend for me', icon: '❓' }
        ].map((option) => (
          <button
            key={option.id}
            onClick={() => {
              updateFormData({ bulk_format_pref: option.id })
              updateUnknownField('bulk_format_pref', option.id === 'not-sure-format')
            }}
            className={`p-6 text-center rounded-lg border-2 transition-all ${
              formData.bulk_format_pref === option.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-3xl mb-3">{option.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
            <p className="text-sm text-gray-600">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  )

  const renderPLProductTypeStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What are you launching?</h2>
        <p className="text-gray-600">Pick the closest product type. We'll help refine the details.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { id: 'face-body-mist', title: 'Face & Body Mist', description: 'Skincare, wellness, spa products', icon: Droplets },
          { id: 'cleanser-toner', title: 'Cleanser & Toner', description: 'Multi-purpose cleansing products', icon: '🧴' },
          { id: 'multi-surface', title: 'Multi-Surface Cleaner', description: 'All-purpose cleaning solutions', icon: Spray },
          { id: 'other', title: 'Other', description: 'Tell us about your product idea', icon: HelpCircle }
        ].map((option) => {
          const Icon = typeof option.icon === 'string' ? () => <span className="text-2xl">{option.icon}</span> : option.icon
          return (
            <button
              key={option.id}
              onClick={() => updateFormData({ pl_product_type: option.id })}
              className={`p-4 text-left rounded-lg border-2 transition-all ${
                formData.pl_product_type === option.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start space-x-3">
                <Icon className={`h-6 w-6 mt-1 ${formData.pl_product_type === option.id ? 'text-blue-600' : 'text-gray-400'}`} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )

  const renderPLPackagingRunSizeStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Packaging & run size</h2>
        <p className="text-gray-600">Help us understand your production goals.</p>
      </div>

      <div className="space-y-6">
        {/* End Format */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            End format
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'bottles-ready', title: 'Bottles ready to sell', description: 'Consumer products with your branding' },
              { id: 'not-sure-format', title: 'Not sure', description: 'Recommend for me' }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  updateFormData({ pl_end_format: option.id })
                  updateUnknownField('pl_end_format', option.id === 'not-sure-format')
                }}
                className={`p-4 text-center rounded-lg border-2 transition-all ${
                  formData.pl_end_format === option.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{option.title}</h3>
                <p className="text-xs text-gray-600">{option.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* First PO Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            First PO size *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: 'pilot', title: 'Pilot <1K', description: 'Test the market' },
              { id: '1-5k', title: '1–5K', description: 'Small launch' },
              { id: '5-20k', title: '5–20K', description: 'Standard launch' },
              { id: '20k-plus', title: '20K+', description: 'Large scale' }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => updateFormData({ pl_run_size_band: option.id })}
                className={`p-3 text-center rounded-lg border-2 transition-all ${
                  formData.pl_run_size_band === option.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h3 className="font-semibold text-gray-900 text-sm">{option.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{option.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Target Launch Window */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Target launch window *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[
              { id: 'asap', title: 'ASAP', description: 'Rush timeline' },
              { id: '4-8-weeks', title: '~4–8 weeks', description: 'Standard timeline' },
              { id: '2-3-months', title: '~2–3 months', description: 'Planning ahead' },
              { id: 'not-sure-timeline', title: 'Not sure', description: 'Recommend for me' }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  updateFormData({ pl_launch_window: option.id })
                  updateUnknownField('pl_launch_window', option.id === 'not-sure-timeline')
                }}
                className={`p-3 text-center rounded-lg border-2 transition-all ${
                  formData.pl_launch_window === option.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h3 className="font-semibold text-gray-900 text-sm">{option.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{option.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderPLScopeStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Scope</h2>
        <p className="text-gray-600">How much do you want partners to handle?</p>
      </div>

      <div className="space-y-6">
        {/* Packaging Scope */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Packaging approach *
          </label>
          <div className="grid grid-cols-1 gap-3">
            {[
              { id: 'turnkey', title: 'Turnkey (partner supplies packaging)', description: 'Partner handles bottles, labels, and packaging' },
              { id: 'bring-packaging', title: 'I\'ll bring packaging', description: 'You supply bottles, labels, or other materials' },
              { id: 'not-sure-scope', title: 'Not sure', description: 'Recommend the best approach for me' }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  updateFormData({ pl_scope: option.id })
                  updateUnknownField('pl_scope', option.id === 'not-sure-scope')
                }}
                className={`p-4 text-left rounded-lg border-2 transition-all ${
                  formData.pl_scope === option.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Anything else we should know?
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => updateFormData({ notes: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Tell us about your product vision, target market, or any specific requirements..."
          />
        </div>
      </div>
    </div>
  )

  const renderAboutYouStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">About you</h2>
        <p className="text-gray-600">We'll use this information to make partner introductions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company (optional)
          </label>
          <input
            type="text"
            value={formData.company || ''}
            onChange={(e) => updateFormData({ company: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your name *
          </label>
          <input
            type="text"
            value={formData.contact_name || ''}
            onChange={(e) => updateFormData({ contact_name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
            placeholder="First and last name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email address *
          </label>
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
            placeholder="your.email@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone (optional)
          </label>
          <input
            type="tel"
            value={formData.phone || ''}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Region preference
          </label>
          <select
            value={formData.region_pref || ''}
            onChange={(e) => updateFormData({ region_pref: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">Select region preference</option>
            <option value="near-me">Near me (lower shipping costs)</option>
            <option value="anywhere-us">Anywhere in U.S.</option>
            <option value="international">International friendly</option>
          </select>
        </div>
      </div>

      {/* Summary Card */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Summary of your request:</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p><strong>Path:</strong> {formData.path === 'bulk' ? 'Get Bulk HOCl Liquid' : 'Launch My Own HOCl Product'}</p>
          
          {formData.path === 'bulk' && (
            <>
              <p><strong>Use case:</strong> {formData.bulk_use_case}</p>
              <p><strong>Amount:</strong> {formData.amount_band}</p>
              <p><strong>Cadence:</strong> {formData.cadence}</p>
              <p><strong>Timeline:</strong> {formData.timeline}</p>
              <p><strong>Format:</strong> {formData.bulk_format_pref}</p>
            </>
          )}
          
          {formData.path === 'private-label' && (
            <>
              <p><strong>Product type:</strong> {formData.pl_product_type}</p>
              <p><strong>Run size:</strong> {formData.pl_run_size_band}</p>
              <p><strong>Launch window:</strong> {formData.pl_launch_window}</p>
              <p><strong>Scope:</strong> {formData.pl_scope}</p>
            </>
          )}
          
          <p><strong>Region preference:</strong> {formData.region_pref || 'None specified'}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto">
      {renderProgressBar()}

      <Card className="min-h-96">
        <Card.Content className="p-8">
          {renderStep()}
        </Card.Content>
        
        <Card.Footer className="flex justify-between">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
          )}
          
          <div className="ml-auto">
            {currentStep < getTotalSteps() - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canProceed()}
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !canProceed()}
                className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    <span>Submit Request</span>
                  </>
                )}
              </button>
            )}
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default IntakeForm