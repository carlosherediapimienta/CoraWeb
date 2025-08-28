import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'accent' | 'primary' | 'transparent'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  container?: boolean
  fullWidth?: boolean
  id?: string
}

export function Section({ 
  children, 
  className, 
  background = 'white',
  padding = 'lg',
  container = true,
  fullWidth = false,
  id
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-cora-bg',
    accent: 'bg-cora-accent',
    primary: 'bg-cora-primary text-white',
    transparent: 'bg-transparent'
  }

  const paddingClasses = {
    none: '',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20 md:py-24',
    xl: 'py-20 sm:py-24 md:py-32',
    '2xl': 'py-24 sm:py-32 md:py-40'
  }

  const containerClasses = fullWidth ? 'container-fluid' : 'container-custom'

  return (
    <section 
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      {container ? (
        <div className={containerClasses}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
