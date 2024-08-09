import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
		extend: {
			backgroundImage: {
				topo: "url(/background.svg)",
				
			  },
			colors: {
				primary: "#13151a",
				accent: "#7a78cc"
			},
		  keyframes: {
			upDown: {
			  '0%, 100%': { transform: 'translateY(0)' },
			  '50%': { transform: 'translateY(20px)' },
			},
			jump: {
				'0%, 100%': { transform: 'translateY(0)' },
			  '50%': { transform: 'translateY(20px)' },
			  },
			'border-spin': {
					'100%': {
						transform: 'rotate(-360deg)',
					}
			}
		  },
		  animation: {
			upDown1: 'upDown 4s ease-in-out infinite',
			upDown2: 'upDown 5s ease-in-out infinite',
			jump: 'jump 5s infinite',
			'border-spin': 'border-spin 7s linear infinite'
		  },
		},
	  },
	plugins: [require("@anishshobithps/tailwind-breakpoints"),
		require("tailwindcss-animation-delay"),
	],
}
