/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        colors:{
          primary:'#2774E9',
          'background':'#F5F5F5',
          'line-color':'#E0E0E0'
   
         },
         fontFamily:{
          sans:['var(--font-poppins)']
         }
       },
  },
  plugins: [],
  // darkMode: 'class',
}

