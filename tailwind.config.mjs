/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				lucas: {
					pink: '#FF00C7',   // Tu rosa original
					purple: '#400062', // Tu morado original
					dark: '#090052',   // Tu azul original
                    fire: '#FF4D00',   // NUEVO: Naranja fuego sacado del logo
				}
			},
			fontFamily: {
				'display': ['Bangers', 'system-ui', 'cursive'],
				'body': ['Montserrat', 'system-ui', 'sans-serif'],
			}
		},
	},
	plugins: [],
}