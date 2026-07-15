import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-action-primary-default text-text-on-action hover:bg-action-primary-hover active:bg-action-primary-pressed',
  secondary:
    'bg-surface-default text-text-default border border-action-secondary-border hover:bg-surface-product',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-4 py-2 text-md',
  lg: 'px-6 py-4 text-2xl',
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
      className={`Button rounded-control font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
