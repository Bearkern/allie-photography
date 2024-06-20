/** @type {import('tailwindcss').Config} */
export default {
  content: ['./node_modules/flowbite/**/*.{js,ts}'],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
    },
    fontSize: {
      sm: ['14px', 1.5],
      base: ['16px', 1.5],
      md: ['20px', 1.5],
      lg: ['24px', 1.5],
      xl: ['28px', 1.5],
      '2xl': ['32px', 1.5],
      '3xl': ['40px', 1.5],
      h6: [
        '16px',
        {
          lineHeight: '1.2',
          fontWeight: '700',
        },
      ],
      h5: [
        '20px',
        {
          lineHeight: '1.2',
          fontWeight: '700',
        },
      ],
      h4: [
        '24px',
        {
          lineHeight: '1.2',
          fontWeight: '700',
        },
      ],
      h3: [
        '28px',
        {
          lineHeight: '1.2',
          fontWeight: '700',
        },
      ],
      h2: [
        '32px',
        {
          lineHeight: '1.2',
          fontWeight: '700',
        },
      ],
      h1: [
        '40px',
        {
          lineHeight: '1.2',
          fontWeight: '700',
        },
      ],
    },
    extend: {
      padding: {
        30: '120px',
      },
      width: {
        '3/8': '37.5%',
        '5/8': '62.5%',
      },
      colors: {
        primary: {
          DEFAULT: '#FCB2A8',
        },
        secondary: {
          DEFAULT: '#5B5050',
          emphasis: '#363030',
        },
        warning: {
          DEFAULT: '#b4543e',
          emphasis: '#f8eeec',
        },
        info: {
          DEFAULT: '#2D6DA9',
          emphasis: '#E2EBF5',
        },
        success: {
          DEFAULT: '#27AE60', // '#1F958B',
          emphasis: '#E5F8ED', // '#E2F5F4',
        },
        light: {
          DEFAULT: '#FAEEE2',
          emphasis: '#FBF9F7',
        },
        grey: {
          100: '#F2F2F2',
          200: '#E0E0E0',
          300: '#BDBDBD',
          400: '#828282',
          500: '#4F4F4F',
          600: '#333333',
        },
      },
      borderRadius: {
        '4xl': '50px',
      },
      boxShadow: {
        DEFAULT: '0 4px 16px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base',
    }),
    require('flowbite/plugin'),
  ],
};
