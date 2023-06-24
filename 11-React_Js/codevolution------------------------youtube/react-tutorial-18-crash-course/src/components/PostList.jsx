import { useEffect, useState } from "react";

export default function PostList() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setPost(json) )
    }, []);

    
    return(
        <>
            {
                post.map(function(pt) {
                   return (
                    <h1 key={pt.title} > {pt.title} </h1>
                   )
                })
            }
        </>
    )
}