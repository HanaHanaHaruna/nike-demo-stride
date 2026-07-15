import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonTone = 'default' | 'sale'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  tone?: ButtonTone
  children: ReactNode
}

// Fill/border per appearance × tone, mirroring the Figma Button set (77:728).
// tone=sale routes the fill through the sale surface / sale border tokens; the
// set keeps the sale fill constant across hover/pressed, so no hover override.
const toneClasses: Record<ButtonTone, Record<ButtonVariant, string>> = {
  default: {
    primary:
      'bg-action-primary-default text-text-on-action hover:bg-action-primary-hover active:bg-action-primary-pressed',
    secondary:
      'bg-surface-default text-text-default border-button border-action-secondary-border hover:bg-surface-product',
  },
  sale: {
    primary: 'bg-surface-sale text-text-on-action',
    secondary:
      'bg-surface-default text-text-sale border-button border-border-sale hover:bg-surface-product',
  },
}

// Sizes mirror the Figma Button set (node 77:728): fixed control heights with
// horizontal inset padding only — vertical centering comes from min-height, and
// labels use the design-system regular-weight Body styles (Body/M, Body/L).
const sizeClasses: Record<ButtonSize, string> = {
  small: 'min-h-control-sm px-4 gap-2 text-md',
  medium: 'min-h-control-md px-6 gap-2 text-md',
  large: 'min-h-control-lg px-8 gap-3 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'medium',
  tone = 'default',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`Button inline-flex items-center justify-center rounded-control transition-colors ${toneClasses[tone][variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
