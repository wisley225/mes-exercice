/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'my-bounce': 'bounce-no-scale 2.5s  infinite',
        'my-bounce2': 'bounce-no-scale2 2s  infinite',
        'my-bounce3': 'bounce-no-scale 2.7s  infinite',
        'my-wiggle': 'wiggle 2s infinite'

      },
      keyframes: {
        'bounce-no-scale': {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(.03,1.12,1,-0.31)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        'bounce-no-scale2': {
          '0%, 100%': { transform: 'translateX(-25%)', animationTimingFunction: 'cubic-bezier(.03,1.12,1,-0.31)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        'wiggle': {
          '0%': { transform: 'rotateY(360deg)' },
          
        }

     
      },

    
    
    },
  },
  plugins: [],
}

