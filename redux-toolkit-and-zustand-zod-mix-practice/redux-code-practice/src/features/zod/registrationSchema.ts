import * as z from "zod";

/**
 * Zod Schema - User Registration Form Validation
 *
 * Zod is a TypeScript-first schema validation library
 * Key benefits:
 * - Define once, validate anywhere
 * - Type-safe (TypeScript integration)
 * - Clear error messages
 * - Composable schemas
 * - No runtime dependencies
 *
 * Real-life use cases:
 * - Form validation (login, registration, etc.)
 * - API request/response validation
 * - Configuration validation
 * - Data transformation and cleaning
 */

// Define the schema for user registration
export const userRegistrationSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Full name must be at least 2 characters")
      .max(50, "Full name must be less than 50 characters")
      .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),

    email: z.string().email("Please enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[!@#$%^&*]/, "Password must contain at least one special character (!@#$%^&*)"),

    confirmPassword: z.string(),
    age: z
      .number()
      .min(18, "You must be at least 18 years old")
      .max(120, "Please enter a valid age"),

    acceptTerms: z
      .boolean()
      .refine((val) => val === true, "You must accept the terms and conditions"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // This sets which field the error appears on
  });

// Extract the TypeScript type from the schema
export type UserRegistration = z.infer<typeof userRegistrationSchema>;





/**
 * How Zod Works:
 *
 * 1. z.object() - Creates a schema for an object with specific properties
 * 2. z.string(), z.number(), z.boolean() - Define the type of each field
 * 3. .min(), .max() - Add validation rules
 * .email(), .regex() - Add custom validators
 * 4. .refine() - Add cross-field validation (e.g., password matching)
 * 5. z.infer<typeof schema> - Extract TypeScript type automatically
 *
 * Parsing Methods:
 * - .parse() - Throws error if invalid (use with try/catch)
 * - .safeParse() - Returns result object with success flag (safer)
 */
