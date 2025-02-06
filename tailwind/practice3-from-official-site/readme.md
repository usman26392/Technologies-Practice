npm install -D tailwindcss postcss autoprefixer
npm install vite
npx tailwindcss init -p

# setup go to package.json file and edit scripts object
"scripts": {
"start": "vite"
},

# run:
npm run start


# for installation prettier
npm install -D prettier prettier-plugin-tailwindcss

<!-- postcss import  -->
npm install -D postcss-import

<!-- prettierrc manual commands for all files in to project -->
# check/diagnose files where is left to format.
npx prettier --check .

# format files that was not format
npx prettier --write .



<!-- official plugins -->
npm install -D @tailwindcss/typography


# pending topics
1) Getting started
2) Official Plugins


- prefers contrast
- Forced colors mode
- Open/closed state
- Print styles
- ARIA states
- Open/closed state




