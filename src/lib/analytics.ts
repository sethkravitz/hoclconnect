// Analytics utility for tracking events
// In production, this would integrate with Google Analytics, Mixpanel, etc.

export interface EventProperties {
  [key: string]: string | number | boolean | undefined
}

export const trackEvent = (eventName: string, properties?: EventProperties) => {
  // Console logging for development - replace with actual analytics in production
  console.log('📊 Event Tracked:', {
    event: eventName,
    timestamp: new Date().toISOString(),
    properties: properties || {},
    url: window.location.href,
    userAgent: navigator.userAgent
  })

  // Placeholder for actual analytics integration:
  // gtag('event', eventName, properties)
  // mixpanel.track(eventName, properties)
  // segment.track(eventName, properties)
}

export const trackPageView = (pageName: string, properties?: EventProperties) => {
  trackEvent('page_view', {
    page_name: pageName,
    ...properties
  })
}