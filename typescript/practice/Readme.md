
# for installation when you want to execute typescript code through node
npm install typescript --save-dev


# for execution typeScript file.
npx tsc

# for watching ts files
npx tsc --watch




Setting Up TypeScript Configuration (Optional but Recommended)
To streamline the process, you can create a tsconfig.json file to configure TypeScript settings. Here’s how:
1. Create tsconfig.json: Run the following command to generate a default tsconfig.json:
npx tsc --init

2. Configure tsconfig.json: Edit the tsconfig.json file to set options like the output directory or specify files to compile. A simple configuration might look like this:
{
  "compilerOptions": {
    "target": "es6",          // JavaScript version
    "module": "commonjs",     // Module system
    "outDir": "./dist",       // Output directory for compiled files
    "rootDir": "./src",       // Root directory of your TypeScript files
    "strict": true            // Enable strict type-checking options
  },
  "include": ["src/**/*"]     // Include all TypeScript files in the src folder
}

3. If you use the above tsconfig.json, move your TypeScript file to the src directory.
4. Compile Using tsconfig.json: Compile all TypeScript files specified in the configuration:
npx tsc


This setup helps keep your project organized and ensures consistent compilation settings.




# extensions
eslint by Microsoft.
javascript and typescript Nightly by Microsoft
prettier eslint by Rebecca Vest
Pretty typescript Errors by yoavbls
