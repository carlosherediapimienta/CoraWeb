import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'accent'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  container?: boolean
}

export function Section({ 
  children, 
  className, 
  background = 'white',
  padding = 'lg',
  container = true 
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-[#ebe2db]',
    accent: 'bg-[#4c0f2e] text-white'
  }

  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24'
  }

  return (
    <section className={cn(
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      {container ? (
        <div className="container-custom">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
