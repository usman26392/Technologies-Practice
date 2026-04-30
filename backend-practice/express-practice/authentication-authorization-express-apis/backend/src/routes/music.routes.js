import { Router } from "express";
import { createAlbum, createMusic, getAlbumById, getAlbums, getAllMusics } from "../controllers/music.controller.js";
import multer from "multer";
import musicMiddleware from "../middlewares/music.middleware.js";
import { userMiddleware } from "../middlewares/user.middleware.js";



const upload = multer({
  storage: multer.memoryStorage(),
});



export const musicRouter = Router();


musicRouter.post("/upload",musicMiddleware,upload.single("music"), createMusic);
musicRouter.post("/music/album", musicMiddleware,upload.single("music"), createAlbum);


musicRouter.get("/musics", userMiddleware, getAllMusics);
musicRouter.get("/albums", userMiddleware, getAlbums);
musicRouter.get("/albums/:id", userMiddleware, getAlbumById);



