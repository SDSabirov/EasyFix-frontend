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
      primary: '#164863',
      secondary: '#427D9D',
      tertiary: '#E4003A',
      light:'#F8EDE3',
      primaryOpacity: 'rgba(22, 72, 99, 0.1)',
      blackOpacity: 'rgba(0, 0, 0, 0.5)',
    },
    extend: {
      backgroundImage: {
        'contact': "url('/assets/img/oven.png)",
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
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
        
      },
      
    },
  },
  
  plugins: [
    require('flowbite/plugin')
  ],
}

