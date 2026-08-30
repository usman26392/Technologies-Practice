
<!-- EJS (Embedded JavaScript) is a lightweight templating engine for JavaScript that enables developers to generate dynamic HTML markup using plain JavaScript. Widely used in Node.js and web development, it allows embedding JavaScript code directly within HTML files to render server-side or client-side content dynamically. -->

How it works
EJS processes templates that mix HTML and JavaScript code enclosed in special delimiters:


<% %> for control flow (no output)
<%= %> for escaped output (prevents XSS)
<%- %> for unescaped output
