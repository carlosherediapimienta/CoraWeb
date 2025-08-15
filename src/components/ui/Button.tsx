import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-[#4c0f2e] text-white hover:bg-opacity-90 focus:ring-[#4c0f2e]/50',
        secondary: 'bg-transparent border-2 border-[#4c0f2e] text-[#4c0f2e] hover:bg-[#4c0f2e] hover:text-white focus:ring-[#4c0f2e]/50',
        outline: 'bg-transparent border border-gray-300 text-[#2d161e] hover:bg-gray-50 focus:ring-gray-300/50',
        ghost: 'bg-transparent text-[#2d161e] hover:bg-gray-100 focus:ring-gray-300/50',
        white: 'bg-white text-[#4c0f2e] hover:bg-gray-100 focus:ring-white/50',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
