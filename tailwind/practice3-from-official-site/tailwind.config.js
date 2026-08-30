/** @type {import('tailwindcss').Config} */
// import plugin from "tailwindcss/plugin";

export default {
	// important: '#app',
	// content: ["./**/*.{html,js}"],
	content: {
		relative: true,
		files: ["./index.html", "./index2.html", "./assets/scripts/*.{js}"],
	},
	// ignore specific classes that it detects in your text content:
	blocklist: ["container", "collapse"],
	darkMode: "selector",
	// is say yey hoga k html element par class dark lagnay say "dark mode"
	// lagay ga web par. matlab ye hay k class base kaam karay ga dark mode.
	// Customizing the above selector: OR with data attribute
	// darkMode: ['selector', '[data-mode="dark"]'],
	theme: {
		// colors: {
		//   'green': '#ffbd33', // yahan par Tailwind k built-in dosray colors maintain nahien rahein gay. jo hum define karyn gay bus wohi ahayn gay.
		// // hun yahan apnay primary , secondary colors define karsakhtay hayn.
		// // "primary": "red"
		// },
		screens: {
			// xs: "475px", // self created
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			"2xl": "1366px",
		},
		extend: {
			spacing: {
				96: "96px", // Here, 96'key already in spacing, so it has been just updated not added.
				100: "25rem",
			},
			// colors: {
			//   blue: '#1fed33', // yahan par Tailwind k built-in dosray colors maintain rahein gay extend object ki waja say.
			//   // 'blue-400': '#ffbd33',
			// },
			backgroundSize: ({ theme }) => ({
				...theme("spacing"),
			}),
			// typography plugin
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						color: theme("colors.gray.800"),
						a: {
							color: "#3182ce",
							"&:hover": {
								color: "yellowGreen",
							},
						},
					},
				},
				myColorsPink: {
					css: {
						"--tw-prose-body": theme("colors.pink[800]"),
						"--tw-prose-headings": theme("colors.pink[900]"),
						"--tw-prose-lead": theme("colors.pink[700]"),
						"--tw-prose-links": theme("colors.pink[900]"),
						"--tw-prose-bold": theme("colors.pink[900]"),
						"--tw-prose-counters": theme("colors.pink[600]"),
						"--tw-prose-bullets": theme("colors.pink[400]"),
						"--tw-prose-hr": theme("colors.pink[300]"),
						"--tw-prose-quotes": theme("colors.pink[900]"),
						"--tw-prose-quote-borders": theme("colors.pink[300]"),
						"--tw-prose-captions": theme("colors.pink[700]"),
						"--tw-prose-code": theme("colors.pink[900]"),
						"--tw-prose-pre-code": theme("colors.pink[100]"),
						"--tw-prose-pre-bg": theme("colors.pink[900]"),
						"--tw-prose-th-borders": theme("colors.pink[300]"),
						"--tw-prose-td-borders": theme("colors.pink[200]"),
						"--tw-prose-invert-body": theme("colors.pink[200]"),
						"--tw-prose-invert-headings": theme("colors.white"),
						"--tw-prose-invert-lead": theme("colors.pink[300]"),
						"--tw-prose-invert-links": theme("colors.white"),
						"--tw-prose-invert-bold": theme("colors.white"),
						"--tw-prose-invert-counters": theme("colors.pink[400]"),
						"--tw-prose-invert-bullets": theme("colors.pink[600]"),
						"--tw-prose-invert-hr": theme("colors.pink[700]"),
						"--tw-prose-invert-quotes": theme("colors.pink[100]"),
						"--tw-prose-invert-quote-borders": theme("colors.pink[700]"),
						"--tw-prose-invert-captions": theme("colors.pink[400]"),
						"--tw-prose-invert-code": theme("colors.white"),
						"--tw-prose-invert-pre-code": theme("colors.pink[300]"),
						"--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
						"--tw-prose-invert-th-borders": theme("colors.pink[600]"),
						"--tw-prose-invert-td-borders": theme("colors.pink[700]"),
					},
				},
			}),
		},
	},
	plugins: [
		// plugin(function ({ addVariant }) {
		// 	// Add a `third` variant, ie. `third-child:pb-0`
		// 	addVariant("third-child", "&:nth-child(3)");
		// }),

		// official plugins
		// require("@tailwindcss/typography")
		// ({
		// 	className: "brand-editor"
		// }),
		require("@tailwindcss/forms")({
			strategy: "base", // only generate global styles, it is element base
		}),
		
	],
};
