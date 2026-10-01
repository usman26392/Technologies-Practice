const API_URL = "http://localhost:3000/api/users/";

const registerForm = document.querySelector("#registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Senior developers often use FormData to handle form submissions.
    // const formData = new FormData(registerForm);
    // const data = Object.fromEntries(formData.entries());
    // console.log(data)

    const userName = document.querySelector("#userName").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    //   send values to the server in JSON format
      body: JSON.stringify({
        userName,
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("user registered successfully!");
      window.location.href = "/login.html";
    } else {
      alert(data.message || "Registration failed. Please try again.");
    }
  });
}
