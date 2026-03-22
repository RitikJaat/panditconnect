/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Spiritual Theme
        saffron: {
          50: '#FFF9F0',
          100: '#FFE8D1',
          300: '#FFB366',
          500: '#FF9933',
          700: '#FF7700',
          900: '#CC5500',
        },
        vermillion: {
          50: '#FFF5F5',
          100: '#FFE5E5',
          300: '#FF6B6B',
          500: '#D32F2F',
          700: '#B71C1C',
          900: '#7C0A0E',
        },
        gold: {
          50: '#FFFBF0',
          100: '#FFF4E6',
          300: '#FFD699',
          500: '#FFB300',
          700: '#CC9000',
        },
        cream: '#FFF4E6',
        'off-white': '#F9F8F6',
        'text-primary': '#2D2D2D',
        'text-secondary': '#666666',
        border: '#E5E5E5',
        'gray-light': '#F5F5F5',
        success: '#4CAF50',
        warning: '#FFA726',
        error: '#F44336',
        info: '#2196F3',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        serif: ['Georgia', 'Constantia', 'serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.3s ease-in-out',
        slideDown: 'slideDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      zIndex: {
        dropdown: '1000',
        modal: '2000',
        tooltip: '3000',
      },
    },
  },
  plugins: [],
}
