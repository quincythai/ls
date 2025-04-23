// tailwind.config.js

const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    important: "#root",
    theme: {
      letterSpacing: {
        normal: '0.46px',
      },
    },
    corePlugins: {
      preflight: false,
    },
  }
  