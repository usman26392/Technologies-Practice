// Using Fetch API with Promises:
// The Fetch API returns a 'Promise' that resolves to the Response object representing the response to the request.

function fetchPost(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response is not ok!");
      }
      return response.json(); // Parse JSON data from the response
    })
    .then((data) => {
      console.log("post", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation!", error);
    });
}

// Fetch post with ID 1
fetchPost(1);
