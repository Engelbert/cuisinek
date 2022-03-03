module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{css,astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    theme: {
        fontFamily: {
        sans: ['Caviar Dreams', 'sans-serif'],
        display: ['Caviar Dreams', 'sans-serif'],
        body: ['Reading', 'sans-serif']
        },
        extend: {}
    },
    variants: {},
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ]
};