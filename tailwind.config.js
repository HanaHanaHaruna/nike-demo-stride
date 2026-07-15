/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Every design value points at a CSS custom property from
      // src/styles/tokens.css (names = Figma WEB code syntax). No raw values.
      // Components consume SEMANTIC tokens only; primitives are never exposed
      // here (the audit showed no component needs a raw primitive).
      colors: {
        // surface
        'surface-canvas': 'var(--surface-bg-canvas)',
        'surface-default': 'var(--surface-bg-default)',
        'surface-product': 'var(--surface-bg-product)',
        'surface-product-hover': 'var(--surface-bg-product-hover)',
        'surface-raised': 'var(--surface-bg-raised)',
        'surface-inverse': 'var(--surface-bg-inverse)',
        'surface-accent': 'var(--surface-bg-accent)',
        'surface-disabled': 'var(--surface-bg-disabled)',
        'surface-sale': 'var(--surface-bg-sale)',
        // action
        'action-primary-default': 'var(--action-primary-default)',
        'action-primary-hover': 'var(--action-primary-hover)',
        'action-primary-pressed': 'var(--action-primary-pressed)',
        'action-secondary-border': 'var(--action-secondary-border)',
        // text
        'text-default': 'var(--text-default)',
        'text-secondary': 'var(--text-secondary)',
        'text-inverse': 'var(--text-inverse)',
        'text-on-action': 'var(--text-on-action)',
        'text-on-accent': 'var(--text-on-accent)',
        'text-accent': 'var(--text-accent)',
        'text-sale': 'var(--text-sale)',
        'text-disabled': 'var(--text-disabled)',
        // icon
        'icon-default': 'var(--icon-default)',
        'icon-secondary': 'var(--icon-secondary)',
        'icon-inverse': 'var(--icon-inverse)',
        'icon-disabled': 'var(--icon-disabled)',
        // border
        'border-default': 'var(--border-default)',
        'border-strong': 'var(--border-strong)',
        'border-focus': 'var(--border-focus)',
        'border-sale': 'var(--border-sale)',
      },
      // Spacing decision: map Tailwind's numeric keys onto the Figma --size-*
      // tokens. They align 1:1 with the 4px system (so utilities like px-4 are
      // unchanged in meaning), but routing through --size-* means every spacing
      // value resolves through a CSS custom property instead of a raw px.
      spacing: {
        0: 'var(--size-0)',
        1: 'var(--size-1)',
        2: 'var(--size-2)',
        3: 'var(--size-3)',
        4: 'var(--size-4)',
        5: 'var(--size-5)',
        6: 'var(--size-6)',
        8: 'var(--size-8)',
        10: 'var(--size-10)',
        12: 'var(--size-12)',
        16: 'var(--size-16)',
        20: 'var(--size-20)',
        24: 'var(--size-24)',
        32: 'var(--size-32)',
      },
      borderRadius: {
        control: 'var(--radius-control)',
        card: 'var(--radius-card)',
        chip: 'var(--radius-chip)',
        input: 'var(--radius-input)',
        pill: 'var(--radius-pill)',
      },
      fontFamily: {
        display: 'var(--font-family-display)',
        body: 'var(--font-family-body)',
        jp: 'var(--font-family-jp)',
      },
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        md: 'var(--font-size-md)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
      },
      fontWeight: {
        regular: 'var(--font-weight-regular)',
        medium: 'var(--font-weight-medium)',
        bold: 'var(--font-weight-bold)',
      },
      letterSpacing: {
        tight: 'var(--tracking-tight)',
        normal: 'var(--tracking-normal)',
        wide: 'var(--tracking-wide)',
      },
      lineHeight: {
        'jp-body': 'var(--line-height-jp-body)',
        'jp-heading': 'var(--line-height-jp-heading)',
      },
      borderWidth: {
        // Design-system control stroke = --stroke-width-button (1.5px).
        button: 'var(--stroke-width-button)',
      },
      minHeight: {
        // Component-intrinsic control heights from the Figma Button set
        // (node 77:728, sizes small/medium/large). The design system does not
        // expose these as variables — Figma uses literal min-heights — so they
        // are centralized here to keep component JSX free of raw values.
        'control-sm': '36px',
        'control-md': '44px',
        'control-lg': '52px',
      },
    },
  },
  plugins: [],
}
