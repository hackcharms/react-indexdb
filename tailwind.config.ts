import { Config } from "tailwindcss";
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(zinc|pink|blue|fuchsia)-(100|200|600)/,
      variants: ["hover", "dark:hover", "dark"],
    },
  ],
};

export default config;