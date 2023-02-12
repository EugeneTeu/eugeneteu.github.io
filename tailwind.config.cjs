/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                fadeIn: 'fadeIn 2s ease-in forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },

            backgroundImage: {
                hero: "url('/src/assets/profile-1.jpg')",
            },
            fontFamily: {
                sans: [
                    ' ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
                ],
            },
            typography: ({ theme }) => ({
                // normal: {
                //     css: {
                //         '--tw-prose-body': theme('colors.white'),
                //         '--tw-prose-headings': theme('colors.white'),
                //     },
                // },
            }),
        },
    },
    darkMode: 'class',
    plugins: [require('@tailwindcss/typography')],
}
