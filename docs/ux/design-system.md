# Design System — robabby.com

## Typography

| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | Syne | Headings, hero name, section titles, brand mark, nav items |
| `--font-body` | Instrument Sans | Body text, UI elements, badges, labels, descriptions |

**Weights:**
- Display: 400 (section titles), 600 (headings), 700 (hero name)
- Body: 400 (text), 500 (labels, badges), 600 (emphasis)

## Color Palette

### Backgrounds
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0a0a0f` | Page background, deepest layer |
| `--color-surface` | `#141418` | Card backgrounds, section alternation |
| `--color-elevated` | `#1e1e24` | Elevated cards, hover states |

### Accent Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#3b82f6` | Primary actions, links, active states, timeline |
| `--color-primary-glow` | `rgba(59, 130, 246, 0.4)` | Glow effects, focus rings |
| `--color-secondary` | `#a8a29e` | Secondary text, subtle labels, warm balance |
| `--color-accent` | `#60a5fa` | Hover highlights, gradient endpoints |
| `--color-accent-glow` | `rgba(96, 165, 250, 0.3)` | Subtle glow effects |

### Borders
| Token | Value | Usage |
|-------|-------|-------|
| `--color-border` | `#1e1e24` | Card borders, dividers |
| `--color-border-subtle` | `rgba(59, 130, 246, 0.1)` | Faint card borders, section edges |

### Text
| Token | Value | Contrast on bg | Contrast on surface | Usage |
|-------|-------|----------------|---------------------|-------|
| `--color-text` | `#f5f5f4` | 18.1:1 | 16.8:1 | Primary content, headings |
| `--color-text-2` | `#a8a29e` | 7.8:1 | 7.3:1 | Secondary descriptions, labels |
| `--color-text-muted` | `#847d77` | 4.9:1 | 4.5:1 | Tertiary info, timestamps |

### Status
| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#22c55e` | Availability indicator |

## Accessibility

- All text meets WCAG AA (4.5:1 body, 3:1 large text)
- All interactive elements have visible focus states using `--color-primary`
- Animations respect `prefers-reduced-motion`
- Semantic HTML throughout

## Design Principles

1. **Precision over decoration.** No ornament for its own sake.
2. **Show, don't tell.** The site itself demonstrates frontend craft.
3. **Accessibility is non-negotiable.** WCAG AA minimum everywhere.
4. **Performance is a feature.** Fast loads, no layout shift.
