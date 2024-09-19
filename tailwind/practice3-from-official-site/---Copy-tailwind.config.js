/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    // colors: { 
    //   'blue': '#ffbd33', // yahan par Tailwind k built-in dosray colors maintain nahien rahein gay. jo hum define karyn gay bus wohi ahayn gay.
    // // hun yahan apnay primary , secondary colors define karsakhtay hayn.
    // // "primary": "red"
    // },
    extend: {
      spacing: {
        100: "25rem",
      },
      colors: { 
        'blue': '#ffbd33', // yahan par Tailwind k built-in dosray colors maintain rahein gay extend object ki waja say.
        // 'blue-400': '#ffbd33', 
      },
      
    },
  },
  plugins: [],
};
