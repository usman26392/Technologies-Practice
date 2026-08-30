
function logger(req, res, next) {
     console.log(`Request received from ${req.ip} for ${req.method} ${req.originalUrl}`);

    next();
} 

export default logger;



// sample
// function auth(req, res, next) {
//     if (!req.headers.authorization) {
//         return res.status(401).send("Unauthorized");
//     }
//     next();
// }