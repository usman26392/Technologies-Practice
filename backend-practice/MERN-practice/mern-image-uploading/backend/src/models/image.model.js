
import mongoose from "mongoose";


// schema
const imageSchema = new mongoose.Schema({
    image: String,
    caption: String
});


// modal 
export const imageuploadcollection = mongoose.model("imageuploadcollection", imageSchema)
