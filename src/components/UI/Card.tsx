import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

const Card = ({ children, className = '', hover = false }: CardProps) => {
  return (
    <div 
      className={`
        bg-white rounded-lg border border-gray-200 shadow-sm 
        ${hover ? 'hover:shadow-md transition-shadow duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

const CardContent = ({ children, className = '' }: CardContentProps) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return (
    <div className={`px-6 py-4 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter

export default Card