// example: further working on file system of node js

// run the file like that: node index2.js

// import fs from "node:fs";

// // readFile(): callback version
// fs.readFile("./public/about.html", "utf-8", (err, data)=> {
//   if (err) throw err;
//   console.log(data)
// });

// // readFileSync(): synchronous version
// const data = fs.readFileSync("./public/about.html", "utf-8");
// console.log(data);

/** ----------------------------------------------------------------------------------- */
// Promise  version
// import fs from "node:fs/promises";
// fs.readFile("./public/about.html", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));



/** ------------------------------------------------------------------------------- */
// async/await version
// import fs from "node:fs/promises";
// async function myReadFile() {
//   try {
//     const data = await fs.readFile("./public/about.html", "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// myReadFile();



/** --------------------------------------------------------------------------- */
// write files
import fs from "node:fs/promises";

async function myWriteFile() {
    try {
        await fs.writeFile("./public/newFile.txt", "This is a new file created by node js");
    } catch (error) {
        console.log(error)
    }
}

myWriteFile();

// we can overwrite as well.
async function myOverwriteFile() {
    try {
        await fs.writeFile("./public/test.txt", "This is a overwritten content created by node js");
    } catch (error) {
        console.log(error)
    }
}

myOverwriteFile();

// append file
async function myAppendFile() {
    try {
        // we can add some third party cdns / files as well like that: await fs.appendFile("./public/test.txt", "\n<script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'></script>" );
        await fs.appendFile("./public/test.txt", "\nThis is appended content." );
    } catch (error) {
        console.log(error)
    }
}

myAppendFile();



