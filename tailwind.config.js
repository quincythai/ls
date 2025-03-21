// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Adjust if you use other extensions
    ],
    theme: {
      extend: {
        colors: {
          // Primary colors
          primary: {
            100: '#D7F1EF', // Lightest primary color
            200: '#BFD8E9',
            300: '#CEE4C4', // Lightest primary color
          },
          // Secondary colors
          secondary: {
            100: '#93B7CE', // Base secondary color
            200: '#C4D7E4', // Lighter tint
            300: '#7491A4', // Medium tint
            400: '#3E82AC', // Darkest tint
            500: '#65D4CC', // Base secondary color
            600: '#96E2DC', // Lighter tint
            700: '#81CEC8', // Medium tint
            800: '#37C4BA', // Darkest tint
            900: '#13202A', // Base secondary color (dark)
            1000: '#202A13', // Lighter tint (dark)
            1100: '#172632', // Medium tint (dark)
            1200: '#0F1A22', // Darkest tint (dark)
          },
          // Text color
          text: '#000000', // Black text
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif'], // Define 'Inter' font family
        },
        fontSize: {
          'heading-1': '40px',
          'heading-2': '35px',
          'heading-3': '30px',
          'heading-4': '28px',
          paragraph: '16px',
          'small-text': '14px',
          caption: '14px',
        },
        fontWeight: {
          regular: '400',
          bold: '700',
        },
        lineHeight: {
          'heading': '100%',
          'paragraph': '100%',
        },
        letterSpacing: {
          normal: '0.46px',
        },
        borderRadius: {
          '12': '12px', // Border radius for buttons
        },
        boxShadow: {
          default: '0 2px 10px rgba(0, 0, 0, 0.1)', // Default shadow for buttons
        },
      },
    },
    plugins: [],
  }
  