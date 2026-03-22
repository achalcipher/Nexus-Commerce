/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(40px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeInLeft: { '0%': { opacity: '0', transform: 'translateX(-40px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        fadeInRight: { '0%': { opacity: '0', transform: 'translateX(40px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        pulse2: { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.05)' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease forwards',
        fadeInLeft: 'fadeInLeft 0.7s ease forwards',
        fadeInRight: 'fadeInRight 0.7s ease forwards',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        pulse2: 'pulse2 2s ease-in-out infinite',
        slideDown: 'slideDown 0.4s ease forwards',
      },
    },
  },
  plugins: [],
};
