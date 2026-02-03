# Color System

This directory contains the centralized color palette for The Risers Consultancy brand.

## Usage

Import the colors from `colors.ts`:

```typescript
import { colors, colorClasses } from '@/lib/colors';
```

### Using Colors

#### 1. For inline styles (dynamic values):
```tsx
<div style={{ backgroundColor: colors.primary.DEFAULT }}>
  Content
</div>
```

#### 2. For Tailwind classes with CSS variables:
```tsx
<input className="focus:border-[var(--primary-blue)] focus:ring-[var(--primary-blue)]/10" />
```

#### 3. For gradient backgrounds:
```tsx
<button style={{ 
  backgroundImage: `linear-gradient(to right, ${colors.primary.DEFAULT}, ${colors.primary.light})` 
}}>
  Submit
</button>
```

#### 4. For hover states with inline styles:
```tsx
<a
  style={{ backgroundColor: colors.primary.DEFAULT }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary.light}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.DEFAULT}
>
  Link
</a>
```

## Color Palette

### Primary Colors
- `colors.primary.DEFAULT` - #084B73 (Main brand blue)
- `colors.primary.light` - #0a5a8a (Hover states)
- `colors.primary.dark` - #063a5a (Pressed states)
- `colors.primary.darker` - #081F30 (Very dark variant)

### Text Colors
- `colors.text.primary` - #111827 (Headings, important text)
- `colors.text.secondary` - #4b5563 (Body text)
- `colors.text.muted` - #6b7280 (Subtle text)
- `colors.text.light` - #9ca3af (Placeholder, disabled)

### Status Colors
- `colors.status.success` - #22c55e (Success messages)
- `colors.status.error` - #ef4444 (Error states)
- `colors.status.warning` - #f59e0b (Warnings)
- `colors.status.info` - #3b82f6 (Info messages)

### Social Media Colors
- `colors.social.whatsapp` - #25D366
- `colors.social.instagram.from` - #8B5CF6
- `colors.social.instagram.to` - #EC4899
- `colors.social.facebook` - #1877F2

## CSS Variables

The primary color is also available as a CSS variable in `globals.css`:
```css
--primary-blue: #084B73;
```

Use this in Tailwind classes:
```tsx
<div className="bg-[var(--primary-blue)]" />
```

## Examples

See `app/components/Contact.tsx` for real-world usage examples.
