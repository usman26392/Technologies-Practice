import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";


export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3000/posts")
            .then((res) => setPosts(res.data.posts))

        return () => {
        }
    }, [posts])





    return (
        <div className="feed-section">
            {
                posts.length > 0 ? (
                    posts.map((post, idx) => (
                        <div className="post-card" key={post._id} >
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption} </p>
                        </div>
                    ))
                ) : (<h1>Post is not available</h1>)
            }
        </div>
    )
}
