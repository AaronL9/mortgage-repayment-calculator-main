/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "820px",
      lg: "1440px",
    },
    extend: {
      fontWeight: {
        medium: 500,
        bold: 700,
      },
      width: {
        main: "63rem",
      },
      maxWidth: {
        main: "63rem",
      },
      minHeight: {
        151.5: "37.875rem",
        12.5: "3.125rem",
      },
      colors: {
        lime: { 400: "hsl(61, 70%, 52%)", 200: "hsl(61, 70%, 52%, 0.2)" },
        red: "hsl(4, 69%, 50%)",
        "dark-blue-black": "#0E2431",
        "slate-100": "hsl(202, 86%, 94%)",
        "slate-300": "hsl(203, 41%, 72%)",
        "slate-500": "hsl(200, 26%, 54%)",
        "slate-700": "hsl(200, 24%, 40%)",
        "slate-900": "hsl(202, 55%, 16%)",
      },
      padding: {
        0.5: "0.125rem",
      },
      borderRadius: {
        "3xl": "1.5625rem",
        "7xl": "5rem",
      },
      gridTemplateColumns: {
        fit: "repeat(auto-fit, minmax(220px, 1fr))",
      },
    },
  },
  plugins: [],
};
