# Design-System Conformance Report — nike-demo-stride

Audit of this repository against the **Brand Design System — Library** and
**Brand Guidelines** Figma files, pulled live via the Figma MCP server.
Figma is the source of truth.

Sources inspected:
- Token Reference frame — `b2zDLbxV5C5HUS9HzFzSYH` node `5:2` (canvas `2009:9`)
- Mode Check frame (light + dark halves) — `zyCOmD7UqVrnkpdhSPjU9p` node `1:321`
- Button component set — `b2zDLbxV5C5HUS9HzFzSYH` node `77:728`
- ProductCard component set — `b2zDLbxV5C5HUS9HzFzSYH` node `78:88`

Legend: **FIX** = corrected in Phase 4 · **CONTENT-NOTE** = informational, no
code change · **INTENTIONAL-ASK** = needs a product decision (left untouched).

---

## PHASE 1 — Token value sync

### 1.1 Variable names / values (light + dark)

Diffed every primitive and semantic variable returned by `get_variable_defs`
(Token Reference frame + Button/ProductCard nodes) and both halves of the Mode
Check frame against `src/styles/tokens.css`.

**Result: full match. No diffs.**

- Primitives — black `#111111`, white `#ffffff`, volt-500 `#dfff00`,
  grey-100 `#f5f5f5`, grey-200 `#e5e5e5`, grey-500 `#757575`, red-600 `#d33a2c`,
  the `--size-*` 4-pt scale, radius (`sm`=8, `card`=8, `control`/`pill`=9999),
  stroke widths (border 1, button 1.5, focus 2), and all 8 type styles
  (Display XL 96/96/-1, Display L 64/64/-1, Heading M 32/38, Body L 18/28,
  Body M 16/24, Caption 12/16/+4, JP Body 16/28, JP Heading 32/44) — all match.
- Light semantic aliases (Mode Check light half): `surface/bg/default→white`,
  `surface/bg/product→grey-100`, `text/default→black`, `text/secondary→grey-500`,
  `action/primary/default→black`, `text/sale→red-600` — all match `:root`.
- Dark semantic aliases (Mode Check dark half): `surface/bg/default→black`,
  `surface/bg/product→grey-900`, `text/default→white`, `text/secondary→grey-400`,
  `action/primary/default→white`, `text/sale→red-400` — all match
  `[data-theme="dark"]`.

### 1.2 Button component spec (node `77:728`)

Figma spec extracted (per size / per state):

| Size   | min-height | horizontal padding        | label type      |
|--------|-----------|----------------------------|-----------------|
| small  | 36px      | `--space-inset-md` (16)    | Body/M (16)     |
| medium | 44px      | `--space-inset-lg` (24)    | Body/M (16)     |
| large  | 52px      | `--space-inset-xl` (32)    | Body/L (18)     |

Radius: `--radius-control` (pill) for every size/state.

| State    | primary fill              | secondary                                   | label       |
|----------|---------------------------|---------------------------------------------|-------------|
| default  | `--action-primary-default`| bg `--surface-bg-default` + 1.5px `--action-secondary-border` | `--text-on-action` / `--text-default` |
| hover    | `--action-primary-hover`  | bg `--surface-bg-product` + same border      | — |
| pressed  | `--action-primary-pressed`| bg `--surface-bg-product` + same border      | — |
| focused  | default fill + 2px `--border-focus` ring | + focus ring                  | — |
| disabled | `--surface-bg-disabled`   | `--surface-bg-disabled`                      | `--text-disabled` |
| tone=sale| `--surface-bg-sale`       | —                                            | `--text-sale` |

Secondary border width = `--stroke-width-button` (1.5px). Disabled uses the
disabled surface/text tokens — **never opacity**.

Repo `src/components/Button.tsx` diffs:

| # | Item | Figma | Repo | Class |
|---|------|-------|------|-------|
| B1 | `lg` label size | Body/L = 18px (`text-lg`) | `text-2xl` = **24px** (not a valid button label size) | **FIX** |
| B2 | Secondary border width | 1.5px (`--stroke-width-button`) | `border` = 1px | **FIX** |
| B3 | Size taxonomy | small / medium / large + min-heights 36/44/52 | only `md` / `lg`, height from `py-*` padding | **INTENTIONAL-ASK** |
| B4 | Label font-weight | Body/M/L = regular (400) | `font-medium` (500) | **INTENTIONAL-ASK** |
| B5 | disabled / focused / tone=sale states | defined in the set | not implemented (unused in app) | **CONTENT-NOTE** |

### 1.3 ProductCard component spec (node `78:88`)

Figma spec: 340px wide, image block `h-340` on `--surface-bg-product`
(hover `--surface-bg-product-hover`), `--radius-card` (8), pad `--space-inset-sm`
(12); optional `新着` badge on `--surface-bg-accent` / `--radius-chip`; text block
gap `--space-stack-xs` (8). Text order **name → category → price**; all three
Body/M (16). Sale tone: price `--text-sale`, original price `--text-secondary`.

Repo `src/components/ProductCard.tsx` diffs:

| # | Item | Figma | Repo | Class |
|---|------|-------|------|-------|
| P1 | Category size | Body/M = 16px (`text-md`) | `text-sm` = 14px | **FIX** |
| P2 | Text order | name → category → price | category → name → price | **INTENTIONAL-ASK** |
| P3 | Name font-weight | Body/M regular (400) | `font-medium` (500) | **INTENTIONAL-ASK** |
| P4 | Real `<img>` vs placeholder icon; “カートに追加” button; no `新着` badge / sale tone | placeholder icon, no button | app-level additions | **CONTENT-NOTE** |

All repo card styling already routes through the correct semantic tokens
(`bg-surface-product`, `text-text-secondary`, `rounded-card`, etc.).

---

## PHASE 2 — Usage conformance sweep

Grepped all `src/**` for raw values, primitive leakage, and hardcoded theming.

| Check | Result |
|-------|--------|
| Raw hex outside `tokens.css` | **0** (only `placehold.co` URL params `F5F5F5/111111` in `data/products.ts` — image content, not styling → CONTENT-NOTE) |
| Tailwind arbitrary values (`bg-[#…]`, `rounded-[8px]`, `p-[…]`) | **0** |
| px/rem literals in components | **0** |
| Primitive tokens (`var(--color-*)`, `var(--size-*)`, `var(--radius-pill)`) used directly in components | **0** — components consume semantic Tailwind classes only |
| Button radius not via `--radius-control` | **0** (`rounded-control`) |
| Button hover/pressed not from action tokens | **0** |
| Disabled styling via `opacity` | **0** |
| Sale red not via `--text-sale` / `--border-sale` | **0** (no sale UI rendered yet) |
| Hardcoded dark styling (`dark:`, hex) instead of `data-theme="dark"` scope | **0** — theming is entirely token-scoped via `ThemeToggle` |

Phase 2 is clean. The Tailwind config (`tailwind.config.js`) is the single
token-binding layer; every utility resolves to a semantic CSS custom property.

---

## PHASE 3 — Brand rule conformance

| # | Rule | Verdict | Evidence |
|---|------|---------|----------|
| 1 | Display headlines: display stack, ALL CAPS, brand-voice only, never JP | **FAIL → FIX** | `Hero.tsx` H1 uses `font-display` but renders title-case “Move Your Limits”; DS Display styles are UPPER. Header “STRIDE” ok. No display font on JP. |
| 2 | JP UI strings: JP stack, line-height ≥ 1.75 for body | **FAIL → FIX** | `Hero.tsx` subcopy is `font-jp text-md` with no line-height → falls back to ~1.2–1.5. DS JP/Body = 28/16 = 1.75. |
| 3 | Volt = accent only, no large volt surfaces/body text, ≤5% | **PASS** | Volt used only via `text-text-accent` on Header nav hover. Est. usage ≪ 1%. |
| 4 | Controls pill via `--radius-control`; cards via `--radius-card` | **PASS** | Button/ThemeToggle `rounded-control`; ProductCard `rounded-card`. |
| 5 | Product imagery on `--surface-bg-product` | **PASS** | ProductCard image `bg-surface-product`; Hero on `bg-surface-product`. |
| 6 | Hero/editorial copy < ~12 words | **PASS** (note) | Hero H1 = 3 words; JP subcopy one short sentence. |

Additional CONTENT-NOTES:
- `Hero.tsx` H1 is `text-4xl` (48px), between DS Display L (64) and Heading M
  (32) — acceptable as a responsive step, but not a named display style.
- `ProductGrid.tsx` H2 “Featured Sneakers” is `text-2xl font-medium`, not the
  Heading/M style (32/38 bold). Editorial heading, low impact.

---

## PHASE 4 — Fix plan

**Applied (FIX):**
- B1 — Button `lg` label `text-2xl` → `text-lg` (Body/L 18px).
- B2 — Button secondary border → `--stroke-width-button` (1.5px) via new
  `borderWidth.button` token.
- P1 — ProductCard category `text-sm` → `text-md` (Body/M 16px).
- Rule 1 — Hero H1 gets `uppercase`.
- Rule 2 — Hero JP subcopy gets `leading-jp-body` (28px, 1.75) via new
  `lineHeight.jp-body` / `jp-heading` tokens.

**Resolved by product decision (all three approved → applied):**
- B3 — Button size API reshaped to the Figma set: `small` / `medium` / `large`
  with control heights 36 / 44 / 52 (new `minHeight.control-*` tokens),
  horizontal insets 16 / 24 / 32 (`px-4/6/8`), and labels Body/M / Body/M /
  Body/L. Height now comes from `min-height` + `inline-flex` centering, not
  `py-*`. Call sites updated: ProductCard `md`→`medium`, Hero CTA `lg`→`large`.
- B4 / P3 — Dropped `font-medium` from the Button base and the ProductCard name;
  both now render at the DS regular (400) Body weight.
- P2 — ProductCard reordered to **name → category → price** to match the set.

**Informational only (CONTENT-NOTE):** B5, P4, placeholder image hex,
Hero H1 size, ProductGrid H2 style.
