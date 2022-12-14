import { Config } from "tailwindcss";

import plugin from 'tailwindcss/plugin';

export default <Config>{
  content: [],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 3s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(2deg)" },
          "75%": { transform: "rotate(-2deg)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities, theme }) {
      // addUtilities({'.-z-1': 'z-index:-1'})
    })
  ],
};
