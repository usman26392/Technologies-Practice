import { useState } from "react";


export default function Comments() {
    const [comments, setComments] = useState([]);
    const [postComment, setPostComment] = useState("")
    
    // by default: request is "GET"
    async function fetchComments() {
        const response = await fetch("http://localhost:3000/api/comment");
        const data = await response.json();
        setComments(data);
    }

    // step1: for post 
    async function submitCommentHandler() {
        const response = await fetch("http://localhost:3000/api/comment", {
            method: "POST",
            body: JSON.stringify({postComment}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
    }

    // step1: for Delete request
    async function deleteComment(commentId) {
        const response = await fetch(`http://localhost:3000/api/comment/${commentId}`, {
            method: "DELETE"
        });
        const data = await response.json();
        fetchComments();
    }

    return (
        <>
            <input type="text"
                placeholder="Enter new comment"
                 value={postComment} 
                 onChange={(e)=> setPostComment(e.target.value)}/>
                 <br></br>
                 <br />
            <button onClick={submitCommentHandler} >submit comment</button>
            <br></br>
            <br />


            <button onClick={fetchComments} >load comments</button>
            {
                comments.map(comment=> {
                    return (
                        <div key={comment.id}>
                            <h2>{comment.text} </h2>
                            <button onClick={()=> deleteComment(comment.id) } >Delete</button>
                            <br />
                            <br />
                        </div>
                    )
                })
            }
        </>
    )
}