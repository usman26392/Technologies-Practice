import express from "express";

const app = express();


// config ejs
// syntax:
// app.set(name, value);
// must be a valid Express setting name.

app.set("view engine", "ejs");
app.set("views", "public");




app.get("/", (req, res)=> {
    // res.render("index");
    // OR
    res.render("index", {
        title: "Welcome text from backend",
        message: "Hello from EJS",
        people: ["Farhan", "Usman", "Fahad", "Rehan"]
    })
})



app.listen(8000, () => {
    console.log("Server started!");
});
