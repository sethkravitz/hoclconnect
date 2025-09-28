import { useEffect, useState } from 'react'

interface UtmParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

export const useUtmParams = () => {
  const [utmParams, setUtmParams] = useState<UtmParams>({})

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const params: UtmParams = {}

    // Extract UTM parameters
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    
    utmKeys.forEach(key => {
      const value = urlParams.get(key)
      if (value) {
        params[key as keyof UtmParams] = value
      }
    })

    setUtmParams(params)

    // Store in sessionStorage for persistence across the session
    if (Object.keys(params).length > 0) {
      sessionStorage.setItem('utmParams', JSON.stringify(params))
    }
  }, [])

  // Get UTM params from either state or sessionStorage
  const getUtmParams = (): UtmParams => {
    if (Object.keys(utmParams).length > 0) {
      return utmParams
    }
    
    try {
      const stored = sessionStorage.getItem('utmParams')
      return stored ? JSON.parse(stored) : {}
    } catch {
      return {}
    }
  }

  return { utmParams, getUtmParams }
}