module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      zIndex: {
        'max': '9999999'
      },
      colors: {
        'rose': '#F3B5B8'
      },
      backgroundImage: {
        'introduction-hero': "linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.8)),url('/images/introduction-hero.webp')",
        'about-hero': "linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url('/images/about-hero.webp')"
      }
    }
  },
  plugins: [],
}