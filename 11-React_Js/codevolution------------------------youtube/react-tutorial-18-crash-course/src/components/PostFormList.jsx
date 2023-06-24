import { useState } from "react";


const PostFormList = () => {
  const [userid, setUserid] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function postSubmitHandler(e) {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: userid,
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div>
      <h1>Post form </h1>
      <form onSubmit={postSubmitHandler}>
        <div>
          <input
            type="text"
            placeholder="user id"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit">Post submit</button>
      </form>
    </div>
  );
};

export default PostFormList;
