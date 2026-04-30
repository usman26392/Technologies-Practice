(() => {
  const get_post_btn = document.querySelector("#get-post-btn"),
    output_data = document.querySelector("#output-data"),
    add_form_post = document.querySelector("#add-post-form"),
    title_input = document.querySelector("#title-input");

  async function getAllPost() {
    try {
      const response = await fetch("http://localhost:5000/api/posts/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const posts = await response.json();
      output_data.innerHTML = "";

      posts.forEach((post, idx) => {
        const titleText = post.title;
        const postEl = document.createElement("div");
        postEl.textContent = titleText;
        output_data.appendChild(postEl);
      });
    } catch (error) {
      console.log(error);
    }
  }

  //   submit new post
  async function addPost(e) {
    e.preventDefault();
    const formData = new FormData(this);
    // console.log(formData);
    const title = formData.get("title");
    // console.log("title:", title)

    try {
      const res = await fetch("http://localhost:5000/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      if (!res.ok) {
        throw new Error("Failed to add post!");
      }
      const newPost = await res.json();
      const postEl = document.createElement("div");
      postEl.textContent = newPost.title;
      output_data.appendChild(postEl);
      getAllPost();
      title_input.value = ""
    } catch (error) {
      console.error("Error adding post!");
    }
  }

  get_post_btn.addEventListener("click", getAllPost);
  add_form_post.addEventListener("submit", addPost);



})();
