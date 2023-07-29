/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryColor: '#ff3741',
        primaryColorShade: '#B81F25',
        secondaryColor: '#003EA1',
        secondaryColorShade: '#147CB1',
        backgroundColor: '#A6A6A60D',
        tertiaryColor: '#04C1E7',
        tColor:'#949494',
        tColor2:'#454545',
        tColor3:'#504F54',
    },
      fontFamily:{
        SLNormal: 'SolaimanLipiNormal',
        Montserrat:'Montserrat',
      }},
  },
  plugins: [
    (function({ addBase }) {
      addBase({
         'h1': { fontSize: "4.0rem" },
         'h2': { fontSize: "3.5rem" },
         'h3': { fontSize: "3.0rem" },
         'h4': { fontSize: "2.5rem" },
         'h5': { fontSize: "2.0rem" },
         'h6': { fontSize: "1.5rem" },
       })
     }),
  ],
}

