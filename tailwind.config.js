/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f5efe3',
          raised: '#fbf7ee',
          sunk: '#ece3d2',
        },
        ink: {
          DEFAULT: '#26221f',
          soft: '#544c44',
          faint: '#8d8377',
        },
        rule: '#c3cede',
        margin: '#c9584c',
        highlight: {
          DEFAULT: '#e29b12',
          wash: '#f7dfa6',
        },
        tag: {
          sage: '#63795f',
          blue: '#4f6d8c',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
        hand: ['Caveat', 'cursive'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 6.6vw, 5.75rem)', { lineHeight: '0.94', letterSpacing: '-0.03em' }],
        display: ['clamp(1.5rem, 2.7vw, 2.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        heading: ['clamp(1.1875rem, 1.9vw, 1.625rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        subheading: ['clamp(0.9375rem, 1vw, 1.0625rem)', { lineHeight: '1.35', letterSpacing: '-0.005em' }],
        body: ['0.9375rem', { lineHeight: '1.625rem' }],
        caption: ['0.75rem', { lineHeight: '1.45', letterSpacing: '0.01em' }],
        micro: ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      maxWidth: {
        page: '1760px',
      },
      spacing: {
        rail: 'var(--rail)',
      },
      boxShadow: {
        page: '0 1px 2px rgba(80, 64, 44, 0.06), 0 12px 28px -18px rgba(80, 64, 44, 0.38)',
        lifted: '0 2px 6px rgba(80, 64, 44, 0.09), 0 24px 44px -24px rgba(80, 64, 44, 0.45)',
      },
      transitionTimingFunction: {
        page: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
