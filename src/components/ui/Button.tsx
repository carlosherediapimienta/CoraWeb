import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none touch-manipulation',
  {
    variants: {
      variant: {
        primary: 'bg-cora-primary text-white hover:bg-opacity-90 focus:ring-cora-primary/50 active:scale-95',
        secondary: 'bg-transparent border-2 border-cora-primary text-cora-primary hover:bg-cora-primary hover:text-white focus:ring-cora-primary/50 active:scale-95',
        outline: 'bg-transparent border border-cora-border-medium text-cora-text hover:bg-cora-bg focus:ring-cora-border-medium/50 active:scale-95',
        ghost: 'bg-transparent text-cora-text hover:bg-cora-bg focus:ring-cora-text/50 active:scale-95',
        white: 'bg-white text-cora-primary hover:bg-cora-bg focus:ring-white/50 active:scale-95',
        accent: 'bg-cora-accent text-cora-primary hover:bg-cora-accent/90 focus:ring-cora-accent/50 active:scale-95',
      },
      size: {
        xs: 'h-8 px-3 text-xs min-w-[32px]',
        sm: 'h-10 px-4 text-sm min-w-[40px]',
        md: 'h-12 px-6 text-base min-w-[48px]',
        lg: 'h-14 px-8 text-lg min-w-[56px]',
        xl: 'h-16 px-10 text-xl min-w-[64px]',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth,
    loading = false,
    icon,
    iconPosition = 'right',
    children,
    disabled,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading

    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {icon && iconPosition === 'left' && !loading && (
          <span className="mr-2" aria-hidden="true">
            {icon}
          </span>
        )}
        
        <span className={cn(
          "flex items-center",
          loading && "opacity-0"
        )}>
          {children}
        </span>
        
        {icon && iconPosition === 'right' && !loading && (
          <span className="ml-2" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
