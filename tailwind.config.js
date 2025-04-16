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
            200: "#B9DEDD",
            400: "#22D6CD",
            600: "#65D4CC",
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
  