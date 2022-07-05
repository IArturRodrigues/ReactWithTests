/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{ts,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            poppins: 'Poppins, sans-serif'
         },
         colors: {
            app: {
               blue: '#4b69fd',
               orange: '#4b69fd',
               beige: '#fff9eb',
               gray: `#c4c4c4`,
               black: '#000000',
            },
         },
      },
   },
   plugins: [],
}
