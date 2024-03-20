import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "xs": '12px',
        "sm": '14px',
        "base": '16px',
        "lg": '18px',
        "lg2": '20px',
        "xl": '24px',
        "xl2": '32px',
        '2xl': '36px' 
      },
      colors: {
        primary: '#3563E9',
        background: '#F6F7F9',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
