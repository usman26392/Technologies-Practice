
// node js , crypto module
import crypto from "node:crypto";

// createHash() method to create a hash object
const hashObj = crypto.createHash("sha256");
// hashObj.update("password@123&#");

// console.log("Binary:", hashObj.digest("binary"));
// console.log("In Hex:", hashObj.digest("hex"));
// console.log("In Base64:", hashObj.digest("base64"));


// text convert into encrypted text
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("This is a secret message", "utf-8", "hex");
encrypted += cipher.final("hex");
console.log("Encrypted text:", encrypted);

// encrypted text convert into original text
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf-8");
decrypted += decipher.final("utf-8");
console.log("Decrypted text:", decrypted);


