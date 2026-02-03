// Centralized color palette for the Risers Consultancy brand
// Use these constants throughout the codebase to maintain consistency

export const colors = {
  // Primary Brand Colors
  primary: {
    DEFAULT: '#084B73',
    light: '#0a5a8a',
    dark: '#063a5a',
    darker: '#081F30',
  },

  // Background Colors
  background: {
    light: '#f9fafb', // gray-50
    white: '#ffffff',
    dark: '#1f2937', // gray-800
  },

  // Text Colors
  text: {
    primary: '#111827', // gray-900
    secondary: '#4b5563', // gray-600
    muted: '#6b7280', // gray-500
    light: '#9ca3af', // gray-400
    white: '#ffffff',
  },

  // Status Colors
  status: {
    success: '#22c55e', // green-500
    error: '#ef4444', // red-500
    warning: '#f59e0b', // amber-500
    info: '#3b82f6', // blue-500
  },

  // Social Media Colors
  social: {
    whatsapp: '#25D366',
    instagram: {
      from: '#8B5CF6', // purple-500
      to: '#EC4899', // pink-500
    },
    facebook: '#1877F2',
    tiktok: '#000000',
  },

  // Border Colors
  border: {
    light: '#e5e7eb', // gray-200
    DEFAULT: '#d1d5db', // gray-300
    dark: '#9ca3af', // gray-400
  },
} as const;

// CSS class strings for common color patterns
// Use these for Tailwind className props where static values are needed
export const colorClasses = {
  // Focus states for form inputs (uses CSS variable from globals.css)
  focusBorder: 'focus:border-[var(--primary-blue)]',
  focusRing: 'focus:ring-[var(--primary-blue)]/10',

  // Text colors
  textPrimary: 'text-[var(--primary-blue)]',

  // Background colors  
  bgPrimary: 'bg-[var(--primary-blue)]',
} as const;

// Type for accessing color values
export type ColorPalette = typeof colors;
