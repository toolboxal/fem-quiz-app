/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik'],
      },
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        textColorPrimary: 'rgb(var(--textColorPrimary) / <alpha-value>)',
        textColorSecondary: 'rgb(var(--textColorSecondary) / <alpha-value>)',
        optionBackground: 'rgb(var(--optionBackground) / <alpha-value>)',
        optionTile: 'rgb(var(--optionTile) / <alpha-value>)',
        purplePrimary: 'rgb(var(--purplePrimary) / <alpha-value>)',
        purpleSecondary: 'rgb(var(--purpleSecondary) / <alpha-value>)',
        green: 'rgb(var(--green) / <alpha-value>)',
        red: 'rgb(var(--red) / <alpha-value>)',
      },
      backgroundImage: {
        mobileLight:
          "url('/assets/images/pattern-background-mobile-light.svg')",
        mobileDark: "url('/assets/images/pattern-background-mobile-dark.svg')",
        tabletLight:
          "url('/assets/images/pattern-background-tablet-light.svg')",
        tabletDark: "url('/assets/images/pattern-background-tablet-dark.svg')",
        desktopLight:
          "url('/assets/images/pattern-background-desktop-light.svg')",
        desktopDark:
          "url('/assets/images/pattern-background-desktop-dark.svg')",
      },
    },
  },
  plugins: [],
}
