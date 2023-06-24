import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => ( setPost(json)))
  }, []);

  console.log(posts)


  return <div>
    PostList
    {
        posts.map((post, idx)=> (<h2 key={post.id} >{post.title} </h2> ) )
    }
  </div>;
};

export default PostList;
