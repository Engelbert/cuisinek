module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{css,astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    theme: {
        fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Nunito', 'sans-serif'],
        body: ['Nunito', 'sans-serif']
        },
        extend: {}
    },
    variants: {},
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ]
};