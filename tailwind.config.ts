import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "darth": "#13161d",
        accent: "#dffc45"
      },
      textStrokeWidth: (theme: (arg0: string) => any) => ({
        ...theme('spacing'), // Use Tailwind's built-in spacing scale
      }),
      textStrokeColor: (theme: (arg0: string) => any) => ({ ...theme('colors') })
    },
  },
  variants: {
    extend: {
      textStrokeWidth: ['responsive', 'hover'],
      textStrokeColor: ['responsive', 'hover'],
    },
  },
  plugins: [function ({ addUtilities, theme, e }: any) {
    const strokeWidths = theme('textStrokeWidth');
    const strokeColors = theme('textStrokeColor');

    const strokeWidthUtilities = Object.fromEntries(
      Object.entries(strokeWidths).map(([key, value]) => [
        `.${e(`text-stroke-w-${key}`)}`, {
          '-webkit-text-stroke-width': value,
        },
      ])
    );

    const strokeColorUtilities = Object.fromEntries(
      Object.entries(strokeColors).map(([key, value]) => [
        `.${e(`text-stroke-c-${key}`)}`, {
          '-webkit-text-stroke-color': value,
        },
      ])
    );

    addUtilities(strokeWidthUtilities, ['responsive', 'hover']);
    addUtilities(strokeColorUtilities, ['responsive', 'hover']);

    
  },],
};
export default config;
