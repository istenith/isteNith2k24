
import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    fontFamily: {
      actor :['actor','sans-serif'],
      barlowb: ['barlow', 'sans-serif'],
      barlowlight : ['barlowlight', 'sans-serif'],
      barlowmedium : ['barlowmedium', 'sans-serif'],
      fontsemi : ['fontsemi','sans-serif'],
      namelight : ['namelight','sans-serif'],
    },


    
    extend: {
      height: {
        '155': '155px', 
        // Add your custom height
      },
      colors: {
        'custom-black': "#252525",
        'custom-white': "#F2F2F2",
        'custom-gray': '#1E1E1E',
        'custom-color': '#AE9B9B',
        'custom-gray1': '#171616',
        'custom-grayt': '#575757',
        'white-48': 'rgba(255, 255, 255, 0.48)',
       ' white-60': 'rgba(255, 255, 255, 0.60)',
       'custom-grayblog': {
          DEFAULT: '#575757',
          53: 'rgba(87, 87, 87, 0.53)',
        },
        'custom-graytags': {
          DEFAULT: '#151515',
          60: 'rgba(21, 21, 21, 0.6)',
        },
      },
      textColor: {
        'white-60': 'rgba(255, 255, 255, 0.6)',
        'text-black': "#000000" // 60% opacity white for text
      },
      borderColor: {
        'white-60': 'rgba(255, 255, 255, 0.6)', // 60% opacity white for borders
      },
      
      width: {
        '72': '18rem', // Custom width value
        '84': '21rem', // Another custom width value
        '96': '24rem', // Another custom width value
        '120': '30rem'
      },
      spacing: {
        '128': '32rem', 
        '140': '35rem',
        '116': "28rem"
      },

      letterSpacing: {
        'expanded': '0em', 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '15xl': '15rem',
        '10xl': '10rem',

        '30px': '30px',   // Custom font size 30px
        '141px': '141px',

          '1.5xl': '1.375rem',  
          '1.2xl': '1.2rem',  // Custom size 1.2xl, equivalent to 19.2px
          '1.3xl': '1.3rem', 


      },
      
 
    },
  },
  plugins: [nextui()],
};
export default config;
