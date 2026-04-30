
import { useState } from "react";

function LiveValidationForm() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

//   console.log("errors:", errors )

  // Validation function (can validate single field)
  const validateField = (name, value) => {
    let error = "";

    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!value.includes("@")) {
        error = "Invalid email format";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }

    return error;
  };

  // Handle change + validate instantly
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form state
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    // Validate only this field
    const error = validateField(name, value);

    // Update error state
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation check
    const emailError = validateField("email", form.email);
    const passwordError = validateField("password", form.password);

    if (!emailError && !passwordError) {
      alert("Form submitted successfully!");
      console.log(form);
    } else {
      setErrors({
        email: emailError,
        password: passwordError
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      {/* Email */}
      <div>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default LiveValidationForm;