
import jwt from "jsonwebtoken";


export function userMiddleware(req, res, next) {

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

    if(decoded.role !== "user") {
      return res.status(403).json({
        message: "You don't have access"
      });
    }
    req.user = decoded;
    next();
    
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

}