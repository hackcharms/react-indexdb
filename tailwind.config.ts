import { Config } from "tailwindcss";
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#461467",
          "50": "#faf6fe",
          "100": "#f4ebfc",
          "200": "#eadafa",
          "300": "#dbbcf6",
          "400": "#c491ef",
          "500": "#ad67e5",
          "600": "#9847d6",
          "700": "#8335bb",
          "800": "#6f3099",
          "900": "#5b287b",
          "950": "#461467",
        },
        secondary: {
          DEFAULT: "#86a5d9ff",
          "50": "#f3f5fb",
          "100": "#e3eaf6",
          "200": "#cddaf0",
          "300": "#abc2e5",
          "400": "#86a5d9",
          "500": "#6584cc",
          "600": "#516bbf",
          "700": "#475aae",
          "800": "#3e4b8f",
          "900": "#364272",
          "950": "#252a46",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/img/circuit-board.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
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
