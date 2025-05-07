import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'akkodis-navy': '#0A1E3F',
        'akkodis-cyan': '#00AEEF',
        'akkodis-yellow': '#FFD100',
        'akkodis-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
export default config 