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
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: 'rgba(204, 204, 204, 0.3)', // 背景颜色
        boxforeground: 'var(--boxforeground)',
        boxbackground: 'var(--boxbackground)'
      },
    },
  },
  plugins: [],
};
export default config;
 