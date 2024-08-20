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
                "clark-green": {
                    DEFAULT: "#328677",
                    100: "#bbc7c3",
                    200: "#afbab7",
                    300: "#93ada6",
                    400: "#6fa194",
                    500: "#4e9485",
                    600: "#328677",
                    700: "#1f6157",
                    800: "#103b36",
                    900: "#041413",
                    1000: "#000000",
                },
            },
        },
    },
    plugins: [],
};
export default config;
