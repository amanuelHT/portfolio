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
        waveFloat: {
          '0%, 100%': {
            transform: 'translateX(0) translateY(0)',
          },
          '25%': {
            transform: 'translateX(-1%) translateY(2%)',
          },
          '50%': {
            transform: 'translateX(-2%) translateY(0)',
          },
          '75%': {
            transform: 'translateX(-1%) translateY(-2%)',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'typing': 'typing 25s steps(40, end) infinite, blink .75s step-end infinite',
        'waveFloat': 'waveFloat 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
