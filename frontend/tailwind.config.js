/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'trading': {
          'profit': '#22c55e',    // Green for profits
          'loss': '#ef4444',      // Red for losses
          'neutral': '#64748b',   // Slate for neutral values
          'primary': '#0284c7',   // Sky blue for primary actions
          'secondary': '#475569', // Slate for secondary actions
          'bg': '#f8fafc',       // Light background
          'card': '#ffffff',     // Card background
        }
      },
      fontSize: {
        'ticker': ['1.125rem', '1.75rem'],  // Custom size for ticker symbols
        'price': ['1.25rem', '1.75rem'],    // Custom size for prices
      },
      spacing: {
        'chart': '400px',        // Standard chart height
        'ticker-row': '60px',    // Height for ticker rows
      },
      animation: {
        'price-up': 'pulse 1s ease-in-out',
        'price-down': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        }
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
