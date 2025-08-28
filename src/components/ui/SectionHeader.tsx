import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showDivider?: boolean
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  align = 'center',
  className,
  children,
  size = 'lg',
  showDivider = false
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const sizeClasses = {
    sm: {
      title: 'text-2xl sm:text-3xl md:text-4xl',
      subtitle: 'text-sm sm:text-base',
      description: 'text-base sm:text-lg',
      margin: 'mb-8 sm:mb-10'
    },
    md: {
      title: 'text-3xl sm:text-4xl md:text-5xl',
      subtitle: 'text-sm sm:text-base md:text-lg',
      description: 'text-lg sm:text-xl',
      margin: 'mb-10 sm:mb-12'
    },
    lg: {
      title: 'text-4xl sm:text-5xl md:text-6xl',
      subtitle: 'text-base sm:text-lg',
      description: 'text-xl sm:text-2xl',
      margin: 'mb-12 sm:mb-16'
    },
    xl: {
      title: 'text-5xl sm:text-6xl md:text-7xl',
      subtitle: 'text-lg sm:text-xl',
      description: 'text-2xl sm:text-3xl',
      margin: 'mb-16 sm:mb-20'
    }
  }

  const currentSize = sizeClasses[size]

  return (
    <div className={cn(
      currentSize.margin,
      alignClasses[align],
      className
    )}>
      {subtitle && (
        <p className="text-cora-primary font-medium text-sm sm:text-base md:text-lg uppercase tracking-wide mb-2 sm:mb-3">
          {subtitle}
        </p>
      )}
      
      <h2 className={cn(
        "font-serif font-normal text-cora-text leading-tight mb-4 sm:mb-6",
        currentSize.title
      )}>
        {title}
      </h2>
      
      {description && (
        <p className={cn(
          "text-cora-text-secondary leading-relaxed",
          currentSize.description,
          align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-3xl'
        )}>
          {description}
        </p>
      )}
      
      {showDivider && (
        <div className={cn(
          "w-20 h-1 bg-cora-primary mt-8 sm:mt-10",
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        )} />
      )}
      
      {children}
    </div>
  )
}
