/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			darkBG: 'hsl(207, 26%, 17%)',
			darkElement: 'hsl(209, 23%, 22%)',
			lightText: 'hsl(200, 15%, 8%)',
			lightInput: 'hsl(0, 0%, 52%)',
			lightBG: 'hsl(0, 0%, 98%)',
			white: 'hsl(0, 0%, 100%)',
		},
		fontFamily: {
			sans: ['Nunito Sans', 'sans-serif'],
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1440px',
		},
		maxWidth: {
			desktop: '1440px',
		},
		minWidth: {
			mobile: '350px',
		},
		extend: {
			boxShadow: {
				bottom: '0 4px 20px -14px rgba(0, 0, 0, 0.3)',
			},
		},
	},
	plugins: [],
};
