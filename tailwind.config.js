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
			red: 'lime',
		},
		fontFamily: {
			sans: ['Nunito Sans', 'sans-serif'],
		},
		fontSize: {
			xs: '12px',
			s: '14px',
			m: '16px',
			l: '18px',
			xl: '21px',
			'2xl': '24px',
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
		width: {
			full: '100%',
			input: '350px',
			filter: '175px',
			card: '280px',
		},
		height: {
			card: '350px',
			half: '180px',
		},
		borderRadius: {
			regular: '6px',
		},
		extend: {
			boxShadow: {
				bottom: '0 4px 20px -14px rgba(0, 0, 0, 0.3)',
				tool: '8px 2px 20px rgba(0, 0, 0, 0.1)',
				card: '4px 8px 20px rgba(0, 0, 0, 0.1)',
				rounded: '0 0 20px rgba(0, 0, 0, 0.2)',
			},
		},
	},
	plugins: [],
};
