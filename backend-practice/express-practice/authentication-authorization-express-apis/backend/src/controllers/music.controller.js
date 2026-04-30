import jwt from "jsonwebtoken";
import { uploadFile } from "../services/imagekit-storage.js";
import { musicModel } from "../models/music.model.js";
import { albumModel } from "../models/album.model.js";

export async function createMusic(req, res) {
  const { title } = req.body;
  const file = req.file;
  const result = await uploadFile(file.buffer.toString("base64"));

  //   console.log("result", result);

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });

  res.status(201).json({
    message: "Music created successfully!",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
    },
  });
}

export async function createAlbum(req, res) {
  const { title, musics } = req.body;

  const newAlbum = await albumModel.create({
    title,
    artist: req.user.id,
    musics: musics,
  });

  //   console.log("newAlbum", newAlbum);

  res.status(201).json({
    message: "Album created successfully",
    album: {
      id: newAlbum._id,
      title: newAlbum.title,
      artist: newAlbum.artist,
      musics: newAlbum.musics,
    },
  });
}

export async function getAllMusics(req, res) {
  const musics = await musicModel
  .find()
  // .skip(1)
  .limit(20)
  .populate("artist");
  // console.log(musics);

  res.status(200).json({
    message: "Musics fetched successfully!",
    musics: musics,
  });
}

export async function getAlbums(req, res) {
  const albums = await albumModel
    .find()
    .select("title artist")
    .populate("artist", "userName email");

  res.status(200).json({
    message: "Albums fetched successfully!",
    albums: albums,
  });
}

export async function getAlbumById(req, res) {
  const albumId = req.params.id;

  // console.log(albumId)

  const album = await albumModel
  .findById(albumId)
  .populate("artist", "userName email")
  .populate("musics")

  // console.log('album', album);

  return res.status(200).json({
    message: "Album fetched successfully",
    album: album,
  });

}
