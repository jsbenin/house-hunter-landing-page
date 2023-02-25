/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        neutral: "#F0F3FD",
        brandGreen: {
          100: "#D1FAE5",
          500: "#10B981",
          700: "#047857"
        },
        brandBlue: {
          100: "#626687",
          900: "#1B1C57"
        }
      },
      fontFamily: {
        lexend: ["Lexend"]
      }
    },
  },
  plugins: [],
}
