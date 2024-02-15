/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      screens: {
        xs: '310px', // Agregado un tamaño extra para dispositivos muy pequeños
        sm: '640px', // Modificado para dispositivos pequeños (teléfonos)
        md: '750px', // Modificado para dispositivos medianos (tabletas)
        lg: '1010px', // Modificado para dispositivos grandes (laptops)
        xl: '1280px', // Mantenido para dispositivos extra grandes (laptops grandes, monitores)
        '2xl': '1536px' // Mantenido para dispositivos extra extra grandes (monitores grandes)
      },
      colors:{
        primary: {
          '50': '#f2f7fb',
          '100': '#e7f0f8',
          '200': '#d3e2f2',
          '300': '#b9cfe8',
          '400': '#9cb6dd',
          '500': '#839dd1',
          '600': '#6a7fc1',
          '700': '#6374ae',
          '800': '#4a5989',
          '900': '#414e6e',
          '950': '#262c40',
      },
      second: {
        '50': '#f6f5fd',
        '100': '#efecfb',
        '200': '#e1dcf8',
        '300': '#ccc0f2',
        '400': '#b19de8',
        '500': '#8d69db',
        '600': '#8456d1',
        '700': '#7444bd',
        '800': '#61399e',
        '900': '#513082',
        '950': '#331d58',
      },
      container:{
        center: true,
      }
      }
    },
  },
  plugins: [],
}