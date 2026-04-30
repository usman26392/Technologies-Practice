import { Router } from "express";
import { createPost } from "../controllers/post.controller.js";



export const userPostRouter = Router();

userPostRouter.post("/create", createPost);
