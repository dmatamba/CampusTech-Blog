/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bleuTech: '#2563EB',
        noirProfond: '#0F172A',
        vertIA: '#10B981',
        grisClair: '#F1F5F9',
      },
    },
  },
  plugins: [],
}
