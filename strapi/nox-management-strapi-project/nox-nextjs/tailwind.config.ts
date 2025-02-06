import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	// ignore specific classes that it detects in your text content:
	blocklist: ["container", "collapse"],
	theme: {
		colors: {
			brown: "#A37B65",
			black: "#181818",
			black2: "#060606",
			black3: "#1A1A1A",
			white: "#ffffff",
			"gray-dark": "#2C2C2C",
			"gray-dark2": "#363636",
			"gray-light": "#7A7F81",
			"gray-light2": "#484848",
		},
		fontSize: {
			xs: [
				"1.25rem", // 20px
				{
					lineHeight: "1.3125em",
					// letterSpacing: "-0.01em",
					fontWeight: "400",
				},
			],
			sm: [
				"1.75rem", // 28px
				{
					lineHeight: "1.2777em",
					// letterSpacing: "-0.01em",
					fontWeight: "400",
				},
			],
			md: [
				"1.875rem", // 30px
				{
					lineHeight: "1.1818em",
					// letterSpacing: "-0.01em",
					fontWeight: "400",
				},
			],
			lg: [
				"2.25rem", // 36px
				{
					lineHeight: "1.46666em",
					// letterSpacing: "-0.01em",
					fontWeight: "400",
				},
			],
			xl: [
				"4.375rem", // 70px
				{
					lineHeight: "1.11111em",
					// letterSpacing: "-0.01em",
					fontWeight: "400",
				},
			],
			"2xl": [
				"5.625rem", // 90px
				{
					lineHeight: "1.1em",
					// letterSpacing: "-0.01em",
					fontWeight: "400",
				},
			],
		},
		container: {
			center: true,
		},
		screens: {
			// xs: "475px", // self created
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			"2xl": "1366px",
		},
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "base", // only generate global styles, it is html element base
		}),
	],
} satisfies Config;

