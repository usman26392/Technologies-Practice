
import { Router } from "express";
import { userRegister } from "../controllers/auth.controller.js";





export const userRouter = Router();


// POST API: /api/auth/register
userRouter.post("/register", userRegister);
