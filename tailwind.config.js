
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
   ,
  ],
  theme: {
    extend: {
      translate: {
        'z-10': '10px',
        'z-20': '20px',
        'z-30': '30px',
        // Add more as needed
      },
    },
  },
  variants: {
    extend: {
      translate: ['hover', 'focus'],
    },
  },
  plugins: [
   
  ],
};