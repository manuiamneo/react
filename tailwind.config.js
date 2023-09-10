/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      /* MAIN */
      'primary': '#09c778',
      'secondary': '#01a0f9',
      'black': '#3d4152',
      'white': '#ffffff',
      'page-white': '#FDFDFD',
      'border-clr': '#D6D6D6',
      'neutral-gray': 'rgba(0, 10, 32, 0.05)',
    },
    fontSize: {
      'small'   : '.625rem', // 10px
      'default' : '.75rem',  // 12px
      'medium'  : '.875rem', // 14px
      'big'     : '1rem',    // 16px
      'large'   : '1.125rem',// 18px
      'xl'      : '1.25rem', // 20px
      '2xl'     : '1.5rem',  // 24px
      '3xl'     : '1.875rem' // 30px
    },
    spacing: {
      0: '0rem',
      1: '0.0625rem',  // 1px
      2: '0.125rem',   // 2px
      4: '0.25rem',    // 4px
      5: '0.313rem',   //5px
      6: '0.375rem',   // 6px
      8: '0.5rem',     // 8px
      10: '0.625rem',  // 10px
      12: '0.75rem',   // 12px
      14: '0.875rem',  // 14px
      15: '0.9375rem',  // 15px
      16: '1rem',      // 16px
      18: '1.125rem',  //18px
      20: '1.25rem',  // 20px
      22:'1.375rem', //22px
      24: '1.5rem',   // 24px
      26 : '1.625rem', //26px
      28: '1.75rem',  // 28px
      30: '1.875rem', //30px
      32: '2rem',     // 32px
      36: '2.25rem',  // 36px
      38: '2.375rem', //38px
      40: '2.5rem',   // 40px
      42: '2.625rem',   // 40px
      44: '2.75rem', // 44px
      46: '2.875rem', // 46px
      48: '3rem',   // 48px
      50: '3.125rem',  // 50px
      56: '3.5rem', // 56px
      60: '3.75rem', //60px
      64: '4rem',   // 64px
      75: '4.6875rem', //75px
      80: '5rem',   // 80px
      96: '6rem',   // 96px
      100: '6.25rem', // 100px
      112: '7rem',  // 112px
      128: '8rem',  // 128px
      144: '9rem',  // 144px
      150: '9.375rem', // 150px
      160: '10rem', // 160px
      176: '11rem', // 176px
      192: '12rem', // 192px
      200: '12.5rem', //200px
      208: '13rem', // 208px
      224: '14rem', // 224px
      240: '15rem', // 240px
      250: '15.625rem', //250px
      256: '16rem', // 256px
      288: '18rem', // 288px
      300: '18.75rem', //300px
      320: '20rem', // 320px
      350: '21.875rem', //350px
      384: '24rem', // 384px
      400: '25rem', //400px
    },
  },
  plugins: [],
  prefix: 't-',
}