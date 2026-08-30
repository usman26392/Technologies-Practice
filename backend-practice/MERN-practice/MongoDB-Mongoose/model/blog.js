
import mongoose, { SchemaTypes } from "mongoose";


const { Schema, model } = mongoose;

// const blogSchema = new Schema({
//     title: String,
//     slug: String,
//     published: Boolean,
//     author: String,
//     content: String,
//     tags: [String],
//     createdAt: Date,
//     updatedAt: Date,
//     comments: [
//         {
//             content: String,
//             user: String,
//             votes: Number,
//         }
//     ]
// });



// with extra validation
// const blogSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     slug: {
//         type: String,
//         required: true,
//         lowercase: true,
//     },
//     published: {
//         type: Boolean,
//         default: false,
//     },
//     author: {
//         type: String,
//         required: true
//     },
//     content: String,
//     tags: [String],
//     createdAt: {
//         type: Date,
//         default: () => Date.now(),
//         immutable: true,
//     },
//     updatedAt: Date,
//     comments: [
//         {
//             content: String,
//             user: String,
//             votes: Number,
//         }
//     ]
// });



// for user and blog relation
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
    },
    published: {
        type: Boolean,
        default: false,
    },
    author: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: Date,
    comments: [
        {
            user: {
                type: SchemaTypes.ObjectId,
                ref: "User",
                required: true
            },
            content: String,
            votes: Number,
        }
    ]
});



// Auto set updated at before saving blog 
blogSchema.pre("save", function () {
    this.updatedAt = Date.now();
});


const Blog = model("Blog", blogSchema);
export default Blog;


