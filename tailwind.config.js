module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust based on your project structure
        "./public/index.html", // Ensure Tailwind scans relevant files
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1E40AF", // Custom primary color
                secondary: "#9333EA", // Custom secondary color
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Custom font family
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'), // Example plugin for better form styling
        require('@tailwindcss/typography'),
    ],
};

