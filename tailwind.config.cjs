/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'body': '#0F172A',
      'boxes': '#1E293B',
      'logobg': '#666666',
      'logofont': '#FFFFFF',
      'button': '#38BDF8',
      
    },
  },
  },
  plugins: [],
}
