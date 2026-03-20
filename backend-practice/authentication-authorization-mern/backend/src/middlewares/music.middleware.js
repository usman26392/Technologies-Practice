import jwt from "jsonwebtoken";



export default function musicMiddleware(req, res, next) {
  const token = req.cookies.userToken;

  //   console.log(token)

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You dont have access to create a music/album",
      });
    }
    // new property creates itself
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
}




