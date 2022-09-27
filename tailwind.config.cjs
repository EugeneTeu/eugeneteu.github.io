/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/src/assets/profile-1.jpg')",
            },
            fontFamily: {
                sans: [
                    ' ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
                ],
            },
            typography: ({ theme }) => ({
                normal: {
                    css: {
                        '--tw-prose-body': theme('colors.white'),
                        '--tw-prose-headings': theme('colors.white'),
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
