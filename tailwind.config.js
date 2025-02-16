import { ACCENT_COLOUR, BACKGROUND_COLOUR, PRIMARY_COLOUR } from "./constants";

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./containers/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: PRIMARY_COLOUR,
        accent: ACCENT_COLOUR,
        background: BACKGROUND_COLOUR,
      },
    },
  },
  plugins: [],
};
