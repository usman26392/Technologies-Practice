import mongoose from "mongoose";
import Blog from "./model/blog.js";
import User from "./model/user.js";




mongoose.connect("mongodb://usmannawaz53_db_user:SxEfCZ7pyPWNBrMM@ac-zevecaf-shard-00-00.zwlreem.mongodb.net:27017,ac-zevecaf-shard-00-01.zwlreem.mongodb.net:27017,ac-zevecaf-shard-00-02.zwlreem.mongodb.net:27017/?ssl=true&replicaSet=atlas-5p3qaa-shard-0&authSource=admin&appName=ClusterPractice");


// // Create a new blog post object
// const article = new Blog({
//     title: "Blog Post 1",
//     slug: "blog-post-1",
//     published: true,
//     content: "This is the content of the first blog post.",
//     tags: ["blog", "post", "1", "2"]
// });

// // Insert the article into the database
// const result = await article.save();
// // console.log(result);



// // Find a single blog post
// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);


// OR
// Create a new blog post object using create
// const article = await Blog.create({
//     title: "Blog Post 1",
//     slug: "blog-post-1",
//     published: true,
//     content: "This is the content of the first blog post.",
//     tags: ["blog", "post", "1", "2", "3"]
// });

// article.title = "Updated Blog Post";
// article.save();


// findbyid
// const specificArticle = await Blog.findById("69e8c2c57e8d92d93d4202e4").exec();

//exclude some fields
// const specificArticle = await Blog.findById("69e8c2c57e8d92d93d4202e4", "title content comments").exec();

// console.log(specificArticle);


// delete one
// const blog = await Blog.deleteOne({
//     title: "Blog Post 1",
// });

// console.log(blog);


// delete many
// const blog = await Blog.deleteMany({
//     title: "Blog Post 1",
// });


// console.log(blog);



// when we used required in schema
// const article = new Blog({
//     title: "Awesome post",
//     slug: "Awesome-Post",
//     author: "Usman",
//     published: true,
//     content: "This is the content of the post",
//     tags: ["features", "announcements"]
// });

// article.save();

// // console.log(article);


// check existence in db
// const blog = await Blog.exists({
//     author: "Usman"
// });
// console.log(blog);

//

// const blog = await Blog.find({
//     author: "Usman",
// });

// console.log(blog);


// const blog = await Blog.where("author").equals("Usman");
// console.log(blog);


// select specific fields
// const blog = await Blog.where("author").equals("Usman").select("title content");
// console.log(blog);



// from here we added user model and did the relation between blog and user

// const user = await User.create({
//     name: "Usman",
//     email: "usman@mail.com",
// });

// const article = await Blog.create({
//     title: "Awesome post check",
//     slug: "Awesome-Post",
//     author: user._id,
//     published: true,
//     content: "This is the content of the post",
//     tags: ["features", "announcements"]
// });


// console.log(article);


// populate author
// const article = await Blog.findOne({
//     title: "Awesome post check"
// }).populate("author");

// console.log(article);



// for the updatedAT
// const article = await Blog.findById("69e913f36ae60228a76bec39").exec();
// article.title = "Updated Blog Post 2";
// await article.save();
// console.log(article);
