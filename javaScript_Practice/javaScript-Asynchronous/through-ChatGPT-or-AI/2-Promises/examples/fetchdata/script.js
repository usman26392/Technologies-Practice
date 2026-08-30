


function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );
}

function updateDOM(posts) {
  const postList = document.getElementById("postList");
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    postList.appendChild(li);
  });
}

// Usage
fetchData()
  .then((posts) => {
    updateDOM(posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
