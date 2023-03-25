
import { comments } from "../../../../data/comments"

// API route
export default function handler(req, res) {
    if(req.method === "GET") {
        res.status(200).json(comments)
    }
    // step2: for post 
    else if(req.method === "POST") {
        const comment = req.body.postComment;
        const newComment = {
            id: Date.now(),
            text: comment
        }
        comments.push(newComment);
        res.status(201).json(newComment)
    }
}

