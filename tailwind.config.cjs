/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx}",
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: "0.75rem",
                sm: "0.75rem",
                md: "1rem",
                lg: "1rem",
                "2xl": "1.2rem",
            },
            screens: {
                sm: "600px",
                md: "728px",
                lg: "984px",
                xl: "1240px",
                "2xl": "1400px",
            },
        },
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
