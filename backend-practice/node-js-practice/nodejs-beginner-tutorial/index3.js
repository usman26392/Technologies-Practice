
// node js path module

import url from "node:url";
import path from "node:path";

// just a sample file path
const filePath = "C:/Users/HP/Desktop/nodejs/about.html";

// basename
// console.log(path.basename(filePath));

// dirname
// console.log(path.dirname(filePath))

// // extname
// console.log(path.extname(filePath));

// // parse
// console.log(path.parse(filePath));


// getting current file path and directory path
// const _fileName = url.fileURLToPath(import.meta.url);
// const _dirName = path.dirname(_fileName);
// console.log("file name:", _fileName);
// console.log("file directory:", _dirName);



// join
// const joinedPath = path.join("C:", "Users", "HP", "Desktop", "nodejs", "about.html");
// console.log(joinedPath);

// resolve(): it resolves the absolute path from the current working directory
const resolvedPath = path.resolve("public", "contact.html");
console.log("resolved path:", resolvedPath);
