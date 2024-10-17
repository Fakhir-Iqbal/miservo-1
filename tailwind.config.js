const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      colors: {
        "sea-green": {
          DEFAULT: "#83c893",
        },
        "lime": {
          DEFAULT: "#bad66d",
        },
        "purple": {
          DEFAULT: "#be83c8",
          1000: "#0d1858"
        },
        "cyan": {
          DEFAULT: "#83c8bb",
        },
        "beige": {
          DEFAULT: "#c8b983",
        },
      },

    },
  },
  plugins: [

    function ({ addUtilities }) {
      const newUtilities = {
        // Flex Center (Row direction)
        '.d-flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        // Flex Center (Column direction)
        '.d-flex-column-center': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        // Flex Item Center (Column direction)
        '.d-flex-column-item-center': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        // Flex Item End (Column direction)
        '.d-flex-column-item-end': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
        },
        // Flex Start (Row direction)
        '.d-flex-row-start': {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        },
        // Flex Start (Column center)
        '.d-flex-start-center': {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        // Flex Start (Column direction)
        '.d-flex-column-start': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        },
        // Flex between (Y center)
        '.d-flex-between-y-center': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.w-max-content': {
          width: 'max-content',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};

module.exports = withMT(config);