// This simulates a server-side API call
export async function subscribeToNewsletter(previousState, formData) {
  console.log("formData", formData);

  const email = formData.get("email");

  // Artificial delay for demonstration
  await new Promise((res) => setTimeout(res, 1000));

  // Basic validation logic
  if (!email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (email === "test@example.com") {
    return { success: false, message: "This email is already subscribed." };
  }

  return { success: true, message: "Check your inbox to confirm!" };
}
