# Copilot Instructions for This Project

## General Guidelines

- Follow the existing project structure: keep PHP, JS, and SASS code in their respective folders.
- Do not mix PHP, HTML, JS, or CSS/SASS in the same file unless the file already does so.
- Use includes for reusable PHP components (header, footer, meta, etc.).
- All new SASS code must be placed in a partial file in the correct folder.
- All SASS partials and classes must use the BEM naming convention.
- For JavaScript, use modular components and place them in the appropriate subfolder (`common-components` or `pages-components`).
- Do not hardcode strings that should be translatable or language-specific; use the appropriate language folder or mechanism.
- When adding assets (images, fonts, etc.), place them in the correct subfolder under `assets`.
- `style.scss` is the Root stylesheet for inner pages, while `home.scss` is for the home page.
- `custom.js` is the Root JavaScript file for inner pages, while `home.js` is for the home page.
- For the other pages(inner pages of a website) except the home page that is `index.php`, use `style.scss` and `custom.js` as the main files.
- For all pages except the home page (`index.php`), use separate include files: `meta.php` for meta tags, `loader.php` for the loader, `header.php` for the header, `footer.php` for the footer, and `scripts.php` for scripts.
- Use the `style-guide.md` for reference on UI patterns and components.
- If you find a `ul` element, use font-size 16px (1em base) and convert all related px values to em.
- Convert px to em with 16px base unless otherwise specified.
- Do not change px unit where border is used.
- If you find any font-size other than 16px base, convert all related properties to that base.
- Document new rules with a clear example and a reason in a comment.


## Figma Dev Mode MCP Rules

- The Figma Dev Mode MCP Server provides an assets endpoint which can serve image and SVG assets.
- IMPORTANT: If the Figma Dev Mode MCP Server returns a localhost source for an image or an SVG, use that image or SVG source directly.
- IMPORTANT: DO NOT import/add new icon packages, all the assets should be in the Figma payload.
- IMPORTANT: do NOT use or create placeholders if a localhost source is provided.

## PHP

- Use clear, semantic HTML structure within PHP files.
- Do not use `<br>` elements for layout or spacing.
- Use includes for repeated sections (header, footer, side panels, etc.).
- Keep logic and presentation separate as much as possible.

## HTML

- Do use semantic HTML5 elements like <header>, <footer>, <main>, <section>, <article>.
- Do not use <div> or <span> for layout when a semantic element is available.
- Use BEM (Block Element Modifier) naming convention for classes and file names.
- Ensure all images have descriptive `alt` attributes for accessibility (not empty unless decorative).
- Use custom-row and col_1 up to col_12 classes for grid layout with breakpoint classes like col_sm_1, col_md_1, col_lg_1, col_xl_1, etc.
- HTML structure must follow: section > container/container-s > custom-row > col_1 up to col_12.
- Use loading="lazy" for images below the fold.

## Accessibility & Performance

- Use semantic HTML and ARIA attributes where appropriate.
- Optimize images and assets for web performance.
- Minimize inline styles and scripts.
- Avoid using tabindex unless necessary for accessibility.

## SASS/CSS

- Only use variables from `_variable.scss` for all SASS properties.
- Use variables, mixins, and functions from the `abstract` folder for all spacing, color, and media queries.
- Add new styles to the appropriate partial and import them as needed.
- Ensure new styles work for both LTR and RTL layouts.
<!-- - Use mixins from \_mixins.scss for media queries and flex/grid layouts. -->
- Use spacing and color variables from `_variable.scss` for all SASS properties.
- I have two root files: `style.scss` (instead of index.php) and `home.scss` (home page specific styles). Import partials accordingly.
- All `@media` queries should be nested within their relevant selectors, not placed at the root level.
- Ensures strict compliance with your variable usage policy.

## JavaScript

- Write modular, reusable code.
- Place shared logic in `common-components` and page-specific logic in `pages-components`.
- Avoid inline JS in HTML/PHP files; use external JS files.
- Only apply the “no inline JS” rule to all .php and .html files in src/html/.

## Build & Automation

- Use the `gulpfile.js` for build tasks (SASS compilation, minification, etc.).
- Do not commit generated files (e.g., `.map`, `.min.css`, `.min.js`) unless necessary.

## Documentation

- Document new components and functions with clear comments.
- Update the style guide (`style-guide.md`) if you introduce new UI patterns or components.

<!-- ## Updating These Guidelines
- When adding a new rule, use clear, concise language and provide an example.
- Test new rules on a sample file before enforcing.
- Document the reason for each new rule in a comment. -->
