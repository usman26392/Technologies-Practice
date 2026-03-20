
import { Router } from "express";
import { loginUser, logoutUser, userRegister } from "../controllers/auth.controller.js";





export const userRouter = Router();


userRouter.post("/auth/register", userRegister);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);



