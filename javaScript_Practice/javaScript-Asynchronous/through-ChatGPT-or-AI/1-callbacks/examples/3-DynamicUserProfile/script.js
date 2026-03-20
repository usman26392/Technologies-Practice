


// Code to fetch user profile data and update the DOM using a callback

function fetchUserProfile(callback) {
  console.log("Fetching user profile...");
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      console.log("User profile fetched.");
      callback(data); // Call the callback function with the fetched data
    })
    .catch((error) => console.error("Error fetching user profile:", error));
}

// a callback function
function displayUserProfile(profile) {
  // console.log(profile)
  const profileArea = document.getElementById("profileArea");
      profileArea.innerHTML = `
      <h2>User Profile</h2>
      <p>Name: ${profile.name}</p>
      <p>Username: ${profile.username}</p>
      <p>Email: ${profile.email}</p>
      <p>Phone: ${profile.phone}</p>
      <p>Website: ${profile.website}</p>
    `;
  console.log("Profile display.");
}

document.getElementById("loadProfileBtn").addEventListener("click", function () {
    fetchUserProfile(displayUserProfile);
  });





  // This example demonstrates how to use the Fetch API to retrieve data from an external source and update the DOM using a callback function.