/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030303',
        card: '#0D0F15',
        'card-hover': '#141722',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-highlight': 'rgba(255, 255, 255, 0.18)',
        accent: {
          orange: '#FF5C00',
          purple: '#8B5CF6',
          green: '#10B981',
          blue: '#3B82F6'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Outfit"', '"Urbanist"', '"Bricolage Grotesque"', 'sans-serif'],
        urbanist: ['"Urbanist"', 'sans-serif'],
        mono: ['monospace']
      },
      boxShadow: {
        'glow-orange': '0 0 30px -5px rgba(255, 92, 0, 0.25)',
        'glow-purple': '0 0 30px -5px rgba(139, 92, 246, 0.25)',
        'glow-card': '0 10px 40px -10px rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}
