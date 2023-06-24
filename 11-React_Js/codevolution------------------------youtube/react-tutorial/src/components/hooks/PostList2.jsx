import { useEffect, useState } from "react";

// get individual data
const PostList2 = () => {
  const [posts, setPost] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);

  return (
    <div>
      PostList
      <input
        type="text"
        placeholder="search id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <h2>{posts.body} </h2>
    </div>
  );
};

export default PostList2;
