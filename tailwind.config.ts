// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Complete Neo-Brutalism color system from DESIGN.md
        'surface': '#fff9ef',
        'surface-dim': '#e1d9c7',
        'surface-bright': '#fff9ef',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#fbf3e0',
        'surface-container': '#f6edda',
        'surface-container-high': '#f0e7d5',
        'surface-container-highest': '#eae2cf',
        'on-surface': '#1f1b10',
        'on-surface-variant': '#4d4732',
        'inverse-surface': '#343024',
        'inverse-on-surface': '#f9f0dd',
        'outline': '#7e775f',
        'outline-variant': '#d0c6ab',
        'surface-tint': '#705d00',
        'primary': '#705d00',
        'on-primary': '#ffffff',
        'primary-container': '#ffd700',
        'on-primary-container': '#705e00',
        'inverse-primary': '#e9c400',
        'secondary': '#7b41b3',
        'on-secondary': '#ffffff',
        'secondary-container': '#c588fe',
        'on-secondary-container': '#54118a',
        'tertiary': '#00696f',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#00f1ff',
        'on-tertiary-container': '#006a70',
        'error': '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        'primary-fixed': '#ffe16d',
        'primary-fixed-dim': '#e9c400',
        'on-primary-fixed': '#221b00',
        'on-primary-fixed-variant': '#544600',
        'secondary-fixed': '#f0dbff',
        'secondary-fixed-dim': '#ddb7ff',
        'on-secondary-fixed': '#2c0050',
        'on-secondary-fixed-variant': '#622599',
        'tertiary-fixed': '#79f5ff',
        'tertiary-fixed-dim': '#00dbe8',
        'on-tertiary-fixed': '#002022',
        'on-tertiary-fixed-variant': '#004f54',
        'background': '#fff9ef',
        'on-background': '#1f1b10',
        'surface-variant': '#eae2cf',
      },
      fontFamily: {
        h1: ["var(--font-lexend)"],
        h2: ["var(--font-lexend)"],
        h3: ["var(--font-lexend)"],
        label: ["var(--font-space)"],
        body: ["var(--font-inter)"],
        sans: ["var(--font-inter)"],
      },
      boxShadow: {
        // เงาสไตล์ Neo-Brutalism ที่คุณเห็นในรูป
        'neo': '4px 4px 0px 0px rgba(31, 27, 16, 1)',
        'neo-lg': '6px 6px 0px 0px rgba(31, 27, 16, 1)',
      }
    },
  },
  plugins: [],
};
export default config;