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
				"building-bg": "url('/src/assets/Building-bg.png')",
				"creators-bg": "url('/src/assets/Creators-bg.png')",
				"currently-bg": "url('/src/assets/Currently-bg.png')",
				"form-bg": "url('/src/assets/Form-bg.png')",
				"main-bg": "url('/src/assets/Main-bg.png')",
				"purpose-bg": "url('/src/assets/Purpose-bg.png')",
				"status-bg": "url('/src/assets/Status-bg.png')",
				"com-section-1": "url('/src/assets/Community-Section-Image-1.png')",
				"com-section-2": "url('/src/assets/Community-Section-Image-2.png')",
				"com-section-3": "url('/src/assets/Community-Section-Image-3.png')",
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
