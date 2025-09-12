export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.08)" },
      colors: {
        brandBlue: "#1e3a8a", // custom blue
      },
      fontFamily: {
        signature: ["Poppins", "sans-serif"], // custom font
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
