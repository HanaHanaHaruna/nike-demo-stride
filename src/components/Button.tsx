import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-primary text-surface-default hover:bg-brand-accent',
  secondary:
    'bg-surface-default text-brand-primary border border-brand-primary hover:bg-surface-subtle',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-md py-sm text-md',
  lg: 'px-lg py-md text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`Button rounded-sm font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
