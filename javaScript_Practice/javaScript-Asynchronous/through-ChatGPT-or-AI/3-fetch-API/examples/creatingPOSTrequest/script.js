
function createPost(postData) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    .then(response => {
        if(!response.ok) {
            throw new Error("Network response was not ok")
        }
        // console.log("response", response)
        return response.json();
    })
    .then(data=> {
        console.log('Created Post', data)
    })
    .catch(error=> {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Data for the new post
const newPost = {
    title: "Usman",
    body: "I am front end developer!",
    userId: 1
}

// create a new post
createPost(newPost);

