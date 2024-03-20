import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "text-xs": '12px',
        "text-sm": '14px',
        "text-base": '16px',
        "text-lg": '18px',
        "text-lg2": '20px',
        "text-xl": '24px',
        "text-xl2": '32px',
        'text-2xl': '36px' 
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
