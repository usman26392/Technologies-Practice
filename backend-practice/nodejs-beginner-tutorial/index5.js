
// node js , url module
import url from "node:url";



const myString = "https://www.google.com/search?q=hello+world";


// built-in API to parse the url string and return an object
const urlObj = new URL(myString)
// console.log(urlObj);



// format
const formattedUrl = url.format(urlObj);
// console.log("formatted Url: ", formattedUrl );


// it is like a variable that holds the current file url
// console.log("current file Url: ", import.meta.url);

// fileURLToPath(): it converts a file URL to a file path

// console.log("file path: ", url.fileURLToPath(import.meta.url) )


// built-in URLSearchParams() to work with query parameters
const params = new URLSearchParams(urlObj.search);
// get
console.log("search params: ", params.get("q") );

// append
params.append("lang", "en");
console.log("after appending lang: ", params.toString() );

// delete
console.log(params.delete("q"));
console.log("after deleting q: ", params.toString() );


// has
console.log("has lang: ", params.has("lang") );
