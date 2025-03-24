import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // Breakpoints predeterminados
      xs: "475px", // Extra small devices
      sm: "640px", // Small devices
      md: "768px", // Medium devices
      lg: "1024px", // Large devices
      xl: "1280px", // Extra large devices
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#00DCA1",
        secondary: "#805AFF",
        black: "#272727",
        background: "#354747",
        gray: "#D8D8D8",
        red: "#F45757",
        white: "#FFFFFF",
        denied: "#FF0000",
        yellow: "#EDF037",
        pink: "#E62DF6",
        blue: "#0070D8",
        violet: "#805AFF",
      },
    },
  },
  plugins: [],
};
export default config;
