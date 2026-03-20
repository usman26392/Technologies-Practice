import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";


export async function createPost(req, res) {
  const token = req.cookies.tokenUser;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decode", decode);

    const IsAuthenticateUser = await userModel.findOne({
      _id: decode.id,
    });

    console.log(IsAuthenticateUser)


  } catch (error) {
    return res.status(401).json({
      message: "Token is invalid!",
    });
  }

  res.send("Post created successfully!")


}
