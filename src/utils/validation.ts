export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0
}

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength
}

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength
}

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export const getFieldError = (field: string, value: string, rules: Record<string, any>): string | null => {
  if (rules.required && !validateRequired(value)) {
    return `${field} es requerido`
  }
  
  if (rules.minLength && !validateMinLength(value, rules.minLength)) {
    return `${field} debe tener al menos ${rules.minLength} caracteres`
  }
  
  if (rules.maxLength && !validateMaxLength(value, rules.maxLength)) {
    return `${field} debe tener máximo ${rules.maxLength} caracteres`
  }
  
  if (rules.email && !validateEmail(value)) {
    return `${field} debe ser un email válido`
  }
  
  if (rules.url && !validateUrl(value)) {
    return `${field} debe ser una URL válida`
  }
  
  if (rules.phone && !validatePhone(value)) {
    return `${field} debe ser un teléfono válido`
  }
  
  return null
}
