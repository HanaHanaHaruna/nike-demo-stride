# TOKEN_AUDIT.md

Inventory of every hardcoded design value in `nike-demo-stride`, mapped to
the Figma design-system contract (Library file `Brand Design System —
Library`). Generated in **Phase 1**, before any refactoring.

Token names use Figma's WEB code syntax (`slash/name` → `--kebab-case`).

Status legend (filled in Phase 6):
`RESOLVED` = rebound to token, visually identical ·
`SNAPPED` = value was inconsistent with the system, snapped to the nearest/mandated token (visual change) ·
`EXCEPTION` = intentionally left raw (justified).

---

## A. `src/styles/tokens.css` (OLD) — replaced wholesale by the Figma contract

The previous file defined a bespoke, non-Figma token set. Every line is
replaced by `tokens.css` regenerated from the MCP `get_variable_defs`
output.

| Old var | Old value | New contract token | Status |
|---|---|---|---|
| `--color-brand-primary` | `#111111` | `--action-primary-default` / `--text-default` → `--color-black` (#111111) | RESOLVED |
| `--color-brand-accent` | `#FF6B00` | **NO MATCH** (no orange in system) — usages snap to `--action-primary-hover` / `--text-accent` | SNAPPED |
| `--color-surface-default` | `#FFFFFF` | `--surface-bg-default` → `--color-white` | RESOLVED |
| `--color-surface-subtle` | `#F5F5F5` | `--surface-bg-product` → `--color-grey-100` (#F5F5F5) | RESOLVED |
| `--color-text-primary` | `#111111` | `--text-default` → `--color-black` | RESOLVED |
| `--color-text-secondary` | `#757575` | `--text-secondary` → `--color-grey-500` (#757575) | RESOLVED |
| `--spacing-xs/sm/md/lg/xl` | 4/8/16/24/40px | `--size-1/2/4/6/10` | RESOLVED |
| `--radius-sm` | `4px` | `--radius-xs` (4) — but button remapped to `--radius-control` | SNAPPED |
| `--radius-md` | `8px` | `--radius-card` (→`--radius-sm` 8) | RESOLVED |
| `--radius-full` | `9999px` | `--radius-pill` (unused by components) | RESOLVED |
| `--font-size-sm/md/lg/xl` | 14/16/24/40px | `--font-size-sm`/`-md`/`-2xl`/**(40 NO MATCH)** | SNAPPED |

---

## B. Component-level usages

### `src/App.tsx`
| Context | Hardcoded (via old utility) | Token / new utility | Status |
|---|---|---|---|
| root bg | `bg-surface-default` | `--surface-bg-default` (`bg-surface-default`) | RESOLVED |

### `src/index.css`
| Context | Hardcoded | Token | Status |
|---|---|---|---|
| body font-family | `system-ui, 'Segoe UI', Roboto, sans-serif` | `--font-family-body` (`"Inter", system-ui, sans-serif`) | RESOLVED |
| body background | `var(--color-surface-default)` | `var(--surface-bg-default)` | RESOLVED |
| body color | `var(--color-text-primary)` | `var(--text-default)` | RESOLVED |

### `src/components/Header.tsx`
| Context | Hardcoded | Token / new utility | Status |
|---|---|---|---|
| header padding | `px-xl`(40) `py-md`(16) | `px-10` `py-4` (`--size-10/4`) | RESOLVED |
| header bg | `bg-surface-default` | `--surface-bg-default` | RESOLVED |
| STRIDE size | `text-lg`(24) | `text-2xl` (`--font-size-2xl` 24) | RESOLVED |
| STRIDE weight | `font-bold` | `--font-weight-bold` | RESOLVED |
| STRIDE tracking | `tracking-wide` (Tailwind 0.025em) | `--tracking-wide` (4px) | SNAPPED |
| STRIDE color | `text-text-primary` | `--text-default` | RESOLVED |
| STRIDE face | (system) | `--font-family-display` (`font-display`) | SNAPPED |
| nav gap | `gap-lg`(24) | `gap-6` (`--size-6`) | RESOLVED |
| nav link size | `text-md`(16) | `--font-size-md` | RESOLVED |
| nav link color | `text-text-primary` | `--text-default` | RESOLVED |
| nav link hover | `hover:text-brand-accent` (#FF6B00) | `hover:text-text-accent` (`--text-accent`) | SNAPPED |
| cart icon size | `width/height="24"` | `w-6 h-6` (`--size-6`) | RESOLVED |
| cart icon color | `text-text-primary` | `--icon-default` (`text-icon-default`) | RESOLVED |
| cart icon stroke | `strokeWidth="1.5"` | SVG glyph geometry (≈`--stroke-width-1-5`) | EXCEPTION |

### `src/components/Hero.tsx`
| Context | Hardcoded | Token / new utility | Status |
|---|---|---|---|
| section gap | `gap-md`(16) | `gap-4` (`--size-4`) | RESOLVED |
| section padding | `px-xl py-xl`(40) | `px-10 py-10` (`--size-10`) | RESOLVED |
| section bg | `bg-surface-subtle` (#F5F5F5) | `--surface-bg-product` (`bg-surface-product`) | RESOLVED |
| heading size | `text-xl`(40) | **NO 40px TOKEN** → `text-4xl` (`--font-size-4xl` 48) | SNAPPED |
| heading weight | `font-bold` | `--font-weight-bold` | RESOLVED |
| heading color | `text-text-primary` | `--text-default` | RESOLVED |
| heading face | (system) | `--font-family-display` (`font-display`) | SNAPPED |
| subcopy size | `text-md`(16) | `--font-size-md` | RESOLVED |
| subcopy color | `text-text-secondary` | `--text-secondary` | RESOLVED |
| subcopy (JP) face | (system) | `--font-family-jp` (`font-jp`) | RESOLVED |
| subcopy max width | `max-w-md` (Tailwind 28rem) | Tailwind built-in; no width token in system | EXCEPTION |

### `src/components/Button.tsx`
| Context | Hardcoded | Token / new utility | Status |
|---|---|---|---|
| radius | `rounded-sm`(4) | `--radius-control` (pill) — Phase 4 mandate | SNAPPED |
| weight | `font-medium` | `--font-weight-medium` | RESOLVED |
| primary bg | `bg-brand-primary` (#111) | `--action-primary-default` | RESOLVED |
| primary label | `text-surface-default` (#fff) | `--text-on-action` | RESOLVED |
| primary hover | `hover:bg-brand-accent` (#FF6B00) | `--action-primary-hover` | SNAPPED |
| primary pressed | (none) | `active:` `--action-primary-pressed` (Phase 4 requires pressed from action tokens) | SNAPPED (added) |
| secondary bg | `bg-surface-default` | `--surface-bg-default` | RESOLVED |
| secondary label | `text-brand-primary` | `--text-default` | RESOLVED |
| secondary border color | `border-brand-primary` | `--action-secondary-border` | RESOLVED |
| secondary border width | `border` (1px) | Tailwind built-in; DS `stroke-width/button`=1.5 (variant unused in app) | EXCEPTION |
| secondary hover | `hover:bg-surface-subtle` | `--surface-bg-product` | RESOLVED |
| size md | `px-md py-sm text-md` (16/8/16) | `px-4 py-2 text-md` | RESOLVED |
| size lg | `px-lg py-md text-lg` (24/16/24) | `px-6 py-4 text-2xl` | RESOLVED |

### `src/components/ProductCard.tsx`
| Context | Hardcoded | Token / new utility | Status |
|---|---|---|---|
| card bg | `bg-surface-default` | `--surface-bg-default` | RESOLVED |
| card radius | `rounded-md`(8) | `--radius-card` (8) | RESOLVED |
| image bg | `bg-surface-subtle` | `--surface-bg-product` | RESOLVED |
| body gap | `gap-xs`(4) | `gap-1` (`--size-1`) | RESOLVED |
| body padding | `p-md`(16) | `p-4` (`--size-4`) | RESOLVED |
| category size | `text-sm`(14) | `--font-size-sm` | RESOLVED |
| category color | `text-text-secondary` | `--text-secondary` | RESOLVED |
| name size/weight | `text-md font-medium` | `--font-size-md` / `--font-weight-medium` | RESOLVED |
| name color | `text-text-primary` | `--text-default` | RESOLVED |
| price size | `text-md` | `--font-size-md` | RESOLVED |
| price color | `text-text-primary` | `--text-default` (regular price; `--text-sale` reserved for sale) | RESOLVED |
| action pad | `pt-sm`(8) | `pt-2` (`--size-2`) | RESOLVED |
| action label (JP) face | (system) | `--font-family-jp` (`font-jp`) | RESOLVED |

### `src/components/ProductGrid.tsx`
| Context | Hardcoded | Token / new utility | Status |
|---|---|---|---|
| section gap | `gap-lg`(24) | `gap-6` (`--size-6`) | RESOLVED |
| section padding | `px-xl py-xl`(40) | `px-10 py-10` (`--size-10`) | RESOLVED |
| heading size | `text-lg`(24) | `text-2xl` (`--font-size-2xl`) | RESOLVED |
| heading weight | `font-medium` | `--font-weight-medium` | RESOLVED |
| heading color | `text-text-primary` | `--text-default` | RESOLVED |
| items gap | `gap-lg`(24) | `gap-6` (`--size-6`) | RESOLVED |

### `src/data/products.ts`
| Context | Hardcoded | Token | Status |
|---|---|---|---|
| placeholder image URLs | `.../F5F5F5/111111?text=...` | placehold.co URL params (data, not stylesheet design values) | EXCEPTION |

---

## C. MISSING tokens (needed by components, absent from contract)

| Need | Where | Nearest tokens | Action taken |
|---|---|---|---|
| font-size **40px** | Hero heading | `--font-size-3xl` (32) / `--font-size-4xl` (48) | **SNAPPED to 4xl (48)**. No 40px exists in the Figma scale; 48 keeps the hero above the 24px section headings. Confirm if you prefer 32 or 64. |

No new color/spacing/radius tokens were required by the components; all
map onto existing semantic tokens.

---

## D. Tailwind spacing decision

Mapped Tailwind's numeric spacing keys onto the Figma `--size-*` tokens
(`4 → var(--size-4)`, etc.) rather than keeping Tailwind's raw-px defaults.
Both align 1:1 with the 4px system so the component diff is identical
(`px-md` → `px-4`), but routing through `--size-*` fulfils the core goal
(every spacing value resolves through a CSS custom property that matches
Figma's WEB code syntax) instead of emitting raw px.

---

## E. Phase 6 — Verification results

- **Build + typecheck:** `npm run build` (`tsc -b && vite build`) — PASS.
- **`src` grep (hex / rgb / arbitrary `[..]` / stale token names):** 0 matches
  outside `tokens.css`.
- **Compiled utilities:** every color/spacing/radius/type utility emits
  `var(--token)` (verified in `dist` CSS), including `:hover`/`:active`.
- **Dark mode:** `[data-theme=dark]` block present in bundle; toggling
  `<html data-theme>` flips all semantic colors.

**Inventory tally (Section B usages):** 62 lines total —
**50 RESOLVED · 8 SNAPPED · 4 EXCEPTION** (+1 MISSING token, the 40px hero
size, resolved via the 48px snap).

**SNAPPED (visual changes vs. pre-refactor, all deliberate):**
1. Button radius `4px → --radius-control` (pill) — Phase 4 mandate.
2. Button primary hover `#FF6B00 → --action-primary-hover` (grey-800).
3. Button primary pressed — added `--action-primary-pressed` (Phase 4).
4. Nav-link hover `#FF6B00 → --text-accent` (no orange in the system).
5. Hero heading `40px → --font-size-4xl` (48px) — no 40px token exists.
6. Hero heading face → `--font-family-display` (Anton, falls back to sans).
7. STRIDE wordmark face → `--font-family-display`.
8. STRIDE letter-spacing `0.025em → --tracking-wide` (4px).

**EXCEPTIONS (left raw, justified):**
- `strokeWidth="1.5"` on the cart SVG — glyph geometry, not a themeable
  color/space/radius token (icon *color* is tokenised via `currentColor`).
- Button secondary `border` width (1px, Tailwind built-in) — variant unused
  in the app; DS `stroke-width/button` (1.5) noted for future.
- Hero `max-w-md` — Tailwind built-in max-width; no width token in system.
- `products.ts` placehold.co image URLs (`.../F5F5F5/111111`) — external
  service URL params (data), not stylesheet design values.
- **Compiled `dist` CSS only:** Tailwind *preflight* internals emit a few
  framework hex values (`--tw-ring-color:#3b82f680`, `::placeholder #9ca3af`,
  transparent `#0000` shadow/ring resets, `--tw-ring-offset-color:#fff`).
  These are Tailwind base-layer defaults for ring/shadow utilities the app
  does not use; they are not in the `src` tree and not part of the token
  contract.

**Scoped dark sections (Phase 5.3):** the repo had **no** previously-hardcoded
dark sections (the hero used light `surface/bg/product`). Nothing needed
conversion; the `data-theme="dark"` mechanism is in place and available for
any future locally-scoped dark block.
