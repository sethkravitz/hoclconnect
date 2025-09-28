import React, { createContext, useContext, useState, ReactNode } from 'react'
import { X, CheckCircle, AlertTriangle, AlertCircle, Info } from 'lucide-react'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
}

interface ToastContextType {
  toast: (toast: Omit<Toast, 'id'>) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

const ToastIcon = ({ type }: { type: ToastType }) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case 'error':
      return <AlertCircle className="h-5 w-5 text-red-500" />
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    case 'info':
      return <Info className="h-5 w-5 text-blue-500" />
    default:
      return <Info className="h-5 w-5 text-blue-500" />
  }
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (newToast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(7)
    const toastWithId = { ...newToast, id }
    
    setToasts((prev) => [...prev, toastWithId])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, newToast.duration || 5000)
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-md"
            role="alert"
          >
            <div className="flex items-start space-x-3">
              <ToastIcon type={toast.type} />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900">{toast.title}</h4>
                {toast.message && (
                  <p className="text-sm text-gray-600 mt-1">{toast.message}</p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}