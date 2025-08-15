import { useState } from 'react'
import { NewsletterForm } from '@/types'

export const useNewsletter = () => {
  const [formData, setFormData] = useState<NewsletterForm>({
    email: '',
    isSubscribed: false
  })

  const handleEmailChange = (email: string) => {
    setFormData(prev => ({ ...prev, email }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Aquí iría la lógica real para suscribir al newsletter
      // Por ahora simulamos una llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Email suscrito:', formData.email)
      setFormData(prev => ({ 
        ...prev, 
        isSubscribed: true,
        email: ''
      }))
      
      // Resetear después de 5 segundos
      setTimeout(() => {
        setFormData(prev => ({ ...prev, isSubscribed: false }))
      }, 5000)
      
    } catch (error) {
      console.error('Error al suscribir:', error)
      // Aquí podrías manejar errores
    }
  }

  const resetForm = () => {
    setFormData({
      email: '',
      isSubscribed: false
    })
  }

  return {
    formData,
    handleEmailChange,
    handleSubmit,
    resetForm
  }
}
