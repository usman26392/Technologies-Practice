// Code to fetch user profile data and update the DOM using a callback

function fetchUserProfile(callback) {
  console.log("Fetching user profile.....");
  setTimeout(() => {
    // simulated user data
    const userProfile = {
      name: "Muhammad Usman",
      age: "32years",
      email: "usman@mail.com",
    };
    console.log("User profile fetched!");
    callback(userProfile); // caller:  Call the callback function with the fetched data
  }, 2000);
}

// a callback function
function displayUserProfile(profile) {
  const profileArea = document.getElementById("profileArea");
  profileArea.innerHTML = `
        <h2>User Profile</h2>
        <p>Name: ${profile.name}</p>
        <p>Age: ${profile.age}</p>
        <p>Email: ${profile.email}</p>

    `;
  console.log("Profile display.");
}

document.getElementById("loadProfileBtn").addEventListener("click", function() {
    fetchUserProfile(displayUserProfile);
});


