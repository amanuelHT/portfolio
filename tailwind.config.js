module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        typing: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#f6e8d7' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'typing': 'typing 25s steps(40, end) infinite, blink .75s step-end infinite',
      },
    },
  },
  plugins: [],
};
