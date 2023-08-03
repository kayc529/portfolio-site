/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        // lightBlue: 'rgb(204, 236, 236)',
        lightBlue: 'rgb(158, 228, 236)',
        textGrey: 'rgba(0,0,0,0.65)',
        transparentWhite: 'rgba(255,255,255,0.3)',
      },
      width: {
        profilePic: '300px',
        mainContent: '1024px',
        mainContentTablet: '768px',
        mainContentMobile: '480px',
        button: '200px',
      },
      maxWidth: {
        'content-xl': '1280px',
        'content-lg': '1024px',
        'content-md': '768px',
        'content-sm': '480px',
      },
      minWidth: {
        'content-sm': '480px',
      },
      height: {
        profilePic: '300px',
        header: '530px',
        'header-md': '650px',
        'header-sm': '900px',
        footer: '350px',
      },
      fontFamily: {
        roboto: "'Roboto Slab', serif",
        libre: "'Libre Baskerville', serif",
      },
      fontSize: {
        sm: '0.75rem',
        md: '0.875rem',
        lg: '1rem',
        xl: '1.25rem',
        h1: '3rem',
        h2: '2.5rem',
        h3: '2.25rem',
        h4: '1.875rem',
        h5: '1.5rem',
      },
    },
  },
  plugins: [],
};
