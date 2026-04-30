

import { useState, FormEvent, ChangeEvent } from "react";
import { userRegistrationSchema, UserRegistration } from "./registrationSchema";
import "./RegistrationForm.css";

/**
 * Registration Form with Zod Validation
 *
 * This component demonstrates:
 * - Form state management with TypeScript
 * - Real-time validation with Zod
 * - Error handling and display
 * - Type-safe form data
 */

// Type for form errors
type FormErrors = Partial<Record<keyof UserRegistration, string>>;

// Initial form state type
interface FormState {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  acceptTerms: boolean;
}

const initialFormStateData: FormState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
  acceptTerms: false,
};

function RegistrationForm() {
  const [formData, setFormData] = useState<FormState>(initialFormStateData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "number" ? parseInt(value) || "" : value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof UserRegistration]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(false);
    setErrors({});

    // Validate form data using Zod
    const result = userRegistrationSchema.safeParse(formData);

    if (!result.success) {
      // Extract errors from Zod error object
      const newErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof UserRegistration;
        newErrors[fieldName] = issue.message;
      });
      setErrors(newErrors);
      return;
    }

    // If validation passes
    setSubmitted(true);
    console.log("Form submitted successfully:", result.data);
    // Reset form
    setFormData(initialFormStateData);
  };

  return (
    <div className="registration-container">
      <div className="form-wrapper">
        <h2>📝 User Registration Form</h2>
        <p className="form-subtitle">Validation powered by Zod (TypeScript)</p>

        {submitted && (
          <div className="success-message">
            ✅ Registration successful! Check console for submitted data.
          </div>
        )}

        <form onSubmit={handleSubmit} className="registration-form">
          {/* Full Name Field */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`form-input ${errors.fullName ? "input-error" : ""}`}
            />
            {errors.fullName && (
              <span className="error-message">{errors.fullName}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`form-input ${errors.email ? "input-error" : ""}`}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Min 8 chars, 1 uppercase, 1 number, 1 special char"
              className={`form-input ${errors.password ? "input-error" : ""}`}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
            <p className="field-hint">
              Example: SecurePass123!
            </p>
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className={`form-input ${errors.confirmPassword ? "input-error" : ""}`}
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          {/* Age Field */}
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Must be 18 or older"
              className={`form-input ${errors.age ? "input-error" : ""}`}
            />
            {errors.age && (
              <span className="error-message">{errors.age}</span>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="form-group checkbox-group">
            <label htmlFor="acceptTerms" className="checkbox-label">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span>I accept the terms and conditions</span>
            </label>
            {errors.acceptTerms && (
              <span className="error-message">{errors.acceptTerms}</span>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>

        <p className="form-footer">
          Zod validates form data and provides detailed error messages!
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
