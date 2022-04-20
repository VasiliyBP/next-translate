module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  options: {
    // Whitelist classes that only exist in condition e.g. `text-${color}-500`
    whitelist: [],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        max: 99999,
      },
      fontSize: {
        '2xs': ['.625rem', '.75rem'],
        lsm: ['.750rem', '.85rem'],
      },
      height: {
        4.5: '1.125rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        navbar: '70px',
      },
      width: {
        4.5: '1.125rem',
        sidebar: '300px',
      },
      strokeWidth: {
        0.5: 0.5,
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.133em',
        wider: '0.16em',
      },
      colors: {
        blue: {
          darkest: '#307087',
          dark: '#36809a',
          DEFAULT: '#4db5da',
        },
        red: {
          DEFAULT: '#fa490a',
          light: '#E05A59',
        },
        green: {
          DEFAULT: '#00a67c',
        },
        ui: {
          muted: '#53575f',
          hover: '#7a7f8d',
        },
        white: {
          darkest: '#747778',
          dark: '#8e9191',
          DEFAULT: '#f6f6f6',
          light: '#ffffff',
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
  ],
};
