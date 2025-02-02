/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    colors: {
      primary: '#0c2a3b',
      secondary: '#1C6E8C',
      tertiary: '#E4003A',
      darkblue:'#1C3D56',
      light:'#F8EDE3',
      primaryOpacity: 'rgba(22, 72, 99, 0.1)',
      blackOpacity: 'rgba(0, 0, 0, 0.5)',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        quicksand:['Quicksand','sans-serif']
      },
      backgroundImage: {
        'contact': "url('/assets/img/oven.png)",
      },
      animation: {
        bounceSlow: 'bounce 2s infinite',
        flashShadow: 'flashShadow 2s ease-in-out infinite',
        flashShadowTwoSides: 'flashShadowTwoSides 5s ease-in-out infinite',
        pulseSlow: 'pulseSlow 5s ease-in-out infinite',
        fadeUp: 'fadeUp 1s ease-in-out',  
        fadeDown: 'fadeDown 0.2s ease-in-out', 
        fadeRight: 'fadeRight 0.2s ease-in-out', 
        fadeInLeft: 'fadeInLeft 0.2s ease-in-out', 
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          
        },
        flashShadow: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(0, 0, 0, 0)' },  // No shadow
          '50%': { boxShadow: '0 0 40px rgba(255, 255, 255, 0.8)' },     // Flashing shadow
        },
        flashShadowTwoSides: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(0, 0, 0, 0)' },  // No shadow
          '30%': { boxShadow: '0 0 40px rgba(0, 0, 255, 0.8)'},
          '50%':  {boxShadow: '0 0 40px  rgba(255, 0, 0, 0.8)'}   // Flashing shadow
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' }, // Start lower, invisible
          '100%': { opacity: '1', transform: 'translateY(0)' },  // End at normal position, visible
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' }, // Start higher, invisible
          '100%': { opacity: '1', transform: 'translateY(0)' },   // End at normal position, visible
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(100)' }, // Start fully visible, no horizontal movement
          '100%': { opacity: '1', transform: 'translateX(0)' }, // Move to the right, fade out
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-150px)' }, // Start off-screen to the left, invisible
          '100%': { opacity: '1', transform: 'translateX(0)' },    // Move to original position, fade in
        },
        
      },
      
    },
  },
  
  plugins: [
    require('flowbite/plugin')
  ],
}

