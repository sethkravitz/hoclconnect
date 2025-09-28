export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HOCl Connect",
  "description": "B2B marketplace connecting buyers with vetted hypochlorous acid suppliers, bottlers, and private label manufacturers",
  "url": "https://hoclconnect.com",
  "logo": "https://hoclconnect.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-HOCL-123",
    "contactType": "customer service",
    "email": "hello@hoclconnect.com"
  },
  "serviceOffered": [
    {
      "@type": "Service",
      "name": "HOCl Supplier Matching",
      "description": "Connect businesses with vetted hypochlorous acid suppliers"
    },
    {
      "@type": "Service",
      "name": "Bottling Partner Matching", 
      "description": "Find qualified bottling and filling services for HOCl products"
    },
    {
      "@type": "Service",
      "name": "Private Label Manufacturing",
      "description": "Match with private label and contract manufacturers for HOCl products"
    }
  ]
}