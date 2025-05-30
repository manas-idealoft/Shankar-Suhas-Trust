/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			fontFamily: {
				cormorant: ["Cormorant Garamond", "serif"],
			},

			fontStyle: {
				italic: "italic",
				normal: "normal",
			},

			backgroundImage: {
				"hero-bg-1": "url('/src/assets/Hero-bg-1.webp')",
				"building-bg": "url('/src/assets/Building-bg.webp')",
				"creators-bg": "url('/src/assets/Creators-bg.webp')",
				"currently-bg": "url('/src/assets/Currently-bg.webp')",
				"origin-bg": "url('/src/assets/Origin-Bg.webp')",
				"form-bg": "url('/src/assets/Form-bg.webp')",
				"main-bg": "url('/src/assets/Main-bg.webp')",
				"purpose-bg": "url('/src/assets/purpose-bg-1.webp')",
				"status-bg": "url('/src/assets/Status-bg.webp')",
				"com-section-1": "url('/src/assets/Community-Section-Image-1.webp')",
				"com-section-2": "url('/src/assets/Community-Section-Image-2.webp')",
				"com-section-3": "url('/src/assets/Community-Section-Image-3.webp')",
			},

			colors: {
				terracotta: "#F46E4E",
				offwhite: "#F6F2E7",
				grey: "#1E1E1E",
				brown: "#C85438",
				beige: "#EDE2CF",
			},
		},
	},

	plugins: [],
};
