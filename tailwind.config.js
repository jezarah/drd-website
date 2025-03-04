/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
    },
    extend: {
      colors: {
        'primary': '#ff3131',
        'secondary': '#dcdcdc',
        'navbar-bg': '#141414',
        'border-color': '#d3d3d3',
        'white': '#ffffff',
        'black': '#000000',
        'secondary-bg': '#F2F2F2F2',
        'grey-light': '#a8a8a8',
        'grey': '#8a8a8a',
        'success': '#46c046',
      },
      width: {
        '600': '600px',
        '800': '800px',
      },
      minHeight: {
        '672': '42rem',
      },
      maxHeight: {
        '520': '520px',
      },
      maxWidth: {
        '600': '600px',
        '275': '275px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
        slidein900: "slidein 1s ease 900ms forwards",
      },
    },
  },
  plugins: [],
}
