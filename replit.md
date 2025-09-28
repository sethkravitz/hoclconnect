# Overview

HOCl Connect is a B2B marketplace platform that connects buyers with vetted hypochlorous acid (HOCl) suppliers, bottlers, and private label manufacturers. The platform serves as a free matching service, helping businesses find the right partners for bulk HOCl purchases or private label product development. The application focuses on lead generation through an intake form system and partner matching rather than direct e-commerce transactions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: React Router v7 for client-side navigation with SEO-friendly URLs
- **Styling**: Tailwind CSS for utility-first styling and responsive design
- **Build Tool**: Vite for fast development and optimized production builds
- **SEO Strategy**: Comprehensive meta tags, structured data (JSON-LD), and React Helmet for dynamic head management

## Backend Architecture
- **Server Framework**: Express.js running on Node.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **API Design**: RESTful API with structured error handling and validation
- **Development Setup**: Concurrent development servers using tsx for TypeScript execution

## Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle with connection pooling
- **Schema Management**: Centralized schema definitions in shared directory for consistency
- **Migration System**: Drizzle Kit for database schema migrations and management
- **Data Validation**: Zod schemas for runtime type checking and API validation

## Authentication and Authorization
- **Current State**: No authentication system implemented
- **Access Control**: Open API endpoints for lead submission
- **Future Considerations**: Admin interface would require authentication for lead management

## Form Processing and Lead Management
- **Lead Capture**: Multi-step intake form with conditional logic based on user path (bulk vs private label)
- **Data Persistence**: Form submissions stored in PostgreSQL with comprehensive lead tracking
- **UTM Tracking**: Session-based UTM parameter preservation for marketing attribution
- **Analytics Integration**: Event tracking system with placeholder for production analytics services

## External Dependencies

**Core Technologies**:
- Node.js and npm for package management
- PostgreSQL database (configured for Replit deployment)
- TypeScript for type safety across the entire stack

**Frontend Libraries**:
- React and React DOM for UI framework
- React Router DOM for navigation
- React Helmet Async for SEO meta tag management
- Lucide React for consistent iconography

**Backend Libraries**:
- Express.js for server framework
- CORS for cross-origin resource sharing
- Drizzle ORM and Drizzle Kit for database operations
- pg (node-postgres) for PostgreSQL connectivity

**Development Tools**:
- Vite for frontend build tooling
- ESLint and TypeScript ESLint for code quality
- Tailwind CSS and PostCSS for styling
- Concurrently for running multiple development processes

**Third-Party Integrations**:
- Google Fonts (Inter) for typography
- Planned analytics integration (Google Analytics, Mixpanel, or similar)
- Email service integration for lead notifications (to be implemented)

**Deployment Dependencies**:
- Replit hosting platform
- Environment variables for database configuration
- Static asset serving through Vite build process