let posts = [
  { id: 1, title: "First Post", content: "This is the first post" },
  { id: 2, title: "Second Post", content: "This is the second post" },
  { id: 3, title: "Third Post", content: "This is the third post" },
];

export function sendAllpost(req, res) {
  res.json(posts);
}

export function sendSinglePost(req, res) {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}

export function newPostGet(req, res) {
  // console.log(req.body);
  // posts.push(req.body)
  // res.status(201).json(posts);

  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  posts.push(newPost);
  res.status(201).json(posts);

  if (!newPost.title && !newPost.content) {
    return res.status(404).json({
      msg: "Please enter proper title! ",
    });
  }
}

export function postUpdate(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({
      msg: `A post with with the id of ${id} was not found`,
    });
  }
  post.title = req.body.title;
  res.status(201).json(posts);
}

export function postDelete(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({
      msg: `A post with with the id of ${id} was not found`,
    });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(201).json(posts);
}
