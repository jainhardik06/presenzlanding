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
        'presenz-blue': '#052dff',
        'presenz-dark': '#0a0a0a',
        'presenz-light': 'rgba(5,0,108,0.99)',
      },
    },
  },
  plugins: [],
}
export default config
