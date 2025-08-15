import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  children?: ReactNode
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  align = 'center',
  className,
  children 
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <div className={cn(
      'mb-16',
      alignClasses[align],
      className
    )}>
      {subtitle && (
        <p className="text-[#4c0f2e] font-medium text-sm uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-4xl font-bold text-[#2d161e] mb-4">
        {title}
      </h2>
      
      {description && (
        <p className={cn(
          "text-xl text-[#b09287]",
          align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
        )}>
          {description}
        </p>
      )}
      
      {children}
    </div>
  )
}
