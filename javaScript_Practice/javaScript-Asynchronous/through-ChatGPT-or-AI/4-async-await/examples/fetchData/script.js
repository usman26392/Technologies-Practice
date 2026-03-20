// .then/.catch syntax jub hum use karray hotay hayn tub, async await use karnay ki zaroot nai hotti.
// jo async await kaam karta hay wohi, .then/.catch kaam karta hay.

// example: data fetching with .then/.catch syntax
// function fetchPost(postId) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response is not ok!");
//       }
//       return response.json(); // Parse JSON data from the response
//     })
//     .then((data) => {
//       console.log("fetch post/data ", data);
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation!", error);
//     });
// }

// // Fetch post with ID 1
// fetchPost(1);



// example: Data fetching with async await syntax
async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUserData();
