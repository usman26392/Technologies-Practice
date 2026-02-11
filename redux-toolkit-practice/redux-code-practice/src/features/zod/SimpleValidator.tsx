

import { useState, ChangeEvent } from "react";
import * as z from "zod";
import "./SimpleValidator.css";

/**
 * Simple Validator - Demonstrates Zod basics with TypeScript
 *
 * This component shows:
 * - Basic schema creation
 * - .safeParse() method for safe validation
 * - Real-time validation feedback
 * - Type inference from schema
 */

// Simple email schema
const emailSchema = z
  .string()
  .email("Invalid email format");

// Simple password schema
const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters")
  .max(20, "Password must be at most 20 characters");

function SimpleValidator() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const validateEmail = (value: string): void => {
    const result = emailSchema.safeParse(value);
    if (!result.success) {
      setEmailError(result.error.issues[0].message);
    } else {
      setEmailError("");
    }
    setEmail(value);
  };

  const validatePassword = (value: string): void => {
    const result = passwordSchema.safeParse(value);
    if (!result.success) {
      setPasswordError(result.error.issues[0].message);
    } else {
      setPasswordError("");
    }
    setPassword(value);
  };

  const isFormValid: boolean = !!(email && password && !emailError && !passwordError);

  return (
    <div className="validator-container">
      <div className="validator-card">
        <h3>🔐 Simple Login Validator</h3>
        <p className="validator-subtitle">Real-time validation with Zod (TypeScript)</p>

        <div className="validator-form">
          <div className="validator-field">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => validateEmail(e.target.value)}
              placeholder="Enter email"
              className={`validator-input ${emailError ? "invalid" : email ? "valid" : ""}`}
            />
            {emailError && (
              <span className="validator-error">{emailError}</span>
            )}
            {!emailError && email && (
              <span className="validator-success">✓ Valid email</span>
            )}
          </div>

          <div className="validator-field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => validatePassword(e.target.value)}
              placeholder="Enter password (min 6 chars)"
              className={`validator-input ${passwordError ? "invalid" : password ? "valid" : ""}`}
            />
            {passwordError && (
              <span className="validator-error">{passwordError}</span>
            )}
            {!passwordError && password && (
              <span className="validator-success">✓ Valid password</span>
            )}
          </div>

          <button
            className={`validator-button ${isFormValid ? "enabled" : "disabled"}`}
            disabled={!isFormValid}
          >
            {isFormValid ? "✓ Login" : "Fill Form"}
          </button>
        </div>

        <div className="validator-info">
          <p>Zod validates as you type - get instant feedback!</p>
        </div>
      </div>
    </div>
  );
}

export default SimpleValidator;
