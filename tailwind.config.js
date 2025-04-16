// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    important: "#root",
    theme: {
      extend: {
        colors: {
          lafayette: {
            100: "#D7F1EF",
            400: "#22D6CD",
            600: "#6E9C9A",
            900: "#0F202B"
          },
        },
      },
      letterSpacing: {
        normal: '0.46px',
      },
    },
    corePlugins: {
      preflight: false,
    },
  }
  