# Zod - Beginner Friendly Guide

## What is Zod?

Zod is a **TypeScript-first schema validation library**. It allows you to define schemas for your data and validate it at runtime, ensuring your data is exactly what you expect.


## Key Idea
A schema defines the shape and rules for your data:
schema ka matlab yey hay k is ko aysay samjein k kissi jaga koi event hat bachun ka
os event k andar sirf male or 10 say 20 saal k bachay a sakhtay hein bus.
- is k andar sirf male (shape of schema) or 10 say 20 saal k bachay ( rule of schema) yey kahlaata hay "Schema".
- issi tarhan user jo form fill karta hay os may hum form fields par schema lagaatay
- hain k hummay jo b user data apna day ga wo kiya hoga or kistarhan ka hoga.
  



### Simple Analogy 🏗️

Think of Zod like a **blueprint for data**:
- Just like a blueprint tells contractors exactly how to build a house
- Zod tells your app exactly what shape your data should have
- If data doesn't match the blueprint, Zod tells you what's wrong

### Key Features ✨
- ✅ **Type-Safe** - Automatically infers TypeScript types from schemas
- ✅ **Zero Dependencies** - Tiny library (~2KB gzipped)
- ✅ **Works Everywhere** - Node.js and all modern browsers
- ✅ **Clear Error Messages** - Tells you exactly what went wrong
- ✅ **Easy to Use** - Simple, readable schema definitions
- ✅ **Composable** - Build complex schemas from simple ones

## Installation

```bash
npm install zod
```

## Basic Example - Email Validation

### Step 1: Import Zod

```jsx
import * as z from "zod";
```

### Step 2: Create a Schema

```jsx
// Define what a valid email looks like
// Schema: "An email must be text and have @ symbol"
const emailSchema = z.string().email("Invalid email format");
```

### Step 3: Validate Data

```jsx
// Method 1: .parse() - throws error if invalid
try {
  const email = emailSchema.parse("user@example.com");
  console.log("Valid:", email);
} catch (error) {
  console.log("Invalid:", error.message);
}

// Method 2: .safeParse() - returns result object (safer)
const result = emailSchema.safeParse("user@example.com");

if (result.success) {
  console.log("Valid email:", result.data);
} else {
  console.log("Validation errors:", result.error);
}
```

## Common Validation Types

```jsx
// Strings
z.string()
  .min(5, "Too short")
  .max(10, "Too long")
  .email("Invalid email")
  .regex(/^[A-Z]/, "Must start with capital letter")
  .url("Invalid URL")

// Numbers
z.number()
  .min(0, "Must be positive")
  .max(100, "Must be less than 100")
  .int("Must be an integer")

// Booleans
z.boolean()

// Dates
z.date()

// Arrays
z.array(z.string())  // Array of strings
z.array(z.number().min(0))  // Array of positive numbers

// Optional values
z.string().optional()  // Can be string or undefined
z.string().nullable()  // Can be string or null
```

## Object Schema - Registration Form Example

```jsx
const userSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name too short")
    .max(50, "Name too long"),

  email: z
    .string()
    .email("Invalid email"),

  password: z
    .string()
    .min(8, "Password too short")
    .regex(/[A-Z]/, "Need uppercase")
    .regex(/[0-9]/, "Need number"),

  age: z
    .number()
    .min(18, "Must be 18+"),

  acceptTerms: z
    .boolean()
    .refine(val => val === true, "Must accept terms")
});

// Extract TypeScript type automatically
type User = z.infer<typeof userSchema>;
```

## Advanced Patterns

### 1. Cross-Field Validation (Password Matching)

```jsx
const registerSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // Where to show error
});
```

### 2. Conditional Validation

```jsx
const schema = z.object({
  userType: z.enum(["admin", "user"]),
  permissions: z.string().optional(),
}).refine((data) => {
  if (data.userType === "admin" && !data.permissions) {
    return false;
  }
  return true;
}, {
  message: "Admins must have permissions",
  path: ["permissions"],
});
```

### 3. Transformations (Convert Data)

```jsx
const schema = z.object({
  age: z.string().transform((val) => parseInt(val)), // String → Number
  email: z.string().transform((val) => val.toLowerCase()), // Normalize
});
```

### 4. Enums (Limited Options)

```jsx
const roleSchema = z.enum(["admin", "moderator", "user"]);

// Only these values are valid
roleSchema.parse("admin"); // ✓ OK
roleSchema.parse("superuser"); // ✗ Error
```

### 5. Discriminated Unions

```jsx
const shapeSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("circle"), radius: z.number() }),
  z.object({ type: z.literal("square"), side: z.number() }),
]);
```

## Real-Life Use Cases

### 1. Form Validation ✓
```jsx
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function LoginForm() {
  const handleSubmit = (formData) => {
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      // Show errors to user
      setErrors(result.error);
    } else {
      // Submit form
      submitLogin(result.data);
    }
  };
}
```

### 2. API Request Validation ✓
```jsx
const userResponse = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
});

async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json();
  
  // Validate API response
  const user = userResponse.parse(data);
  return user;
}
```

### 3. Configuration Validation ✓
```jsx
const configSchema = z.object({
  apiUrl: z.string().url(),
  port: z.number().min(1).max(65535),
  debug: z.boolean().optional(),
});

const config = configSchema.parse(process.env);
```

### 4. Environment Variables ✓
```jsx
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(10),
  NODE_ENV: z.enum(["development", "production"]),
});

const env = envSchema.parse(process.env);
```

## Zod vs Other Validators

| Feature | Zod | Yup | Joi | Pinia |
|---------|-----|-----|-----|-------|
| Bundle Size | ~2KB | ~12KB | ~30KB | - |
| TypeScript | ⭐⭐⭐ Best | ⭐⭐ Good | ⭐ Limited | - |
| Learning Curve | ⭐ Easy | ⭐ Easy | ⭐⭐ Medium | - |
| Error Messages | ⭐⭐⭐ Great | ⭐⭐ Good | ⭐⭐ Good | - |
| Async Validation | ✅ Yes | ✅ Yes | ✅ Yes | - |
| JSON Schema | ✅ Yes | ❌ No | ❌ No | - |

## Parsing Methods Explained

### .parse() - Use When You're Sure
```jsx
// Throws error if invalid
const data = schema.parse(input);
// Use with try/catch
```

### .safeParse() - Safer Choice
```jsx
// Returns result object, doesn't throw
const result = schema.safeParse(input);
if (result.success) {
  // Use result.data
} else {
  // Use result.error
}
```

### .parseAsync() - For Async Validation
```jsx
// Use with async refinements/transforms
const data = await schema.parseAsync(input);
```

### .safeParseAsync() - Safe Async
```jsx
const result = await schema.safeParseAsync(input);
```

## Error Handling

### Access Detailed Errors

```jsx
const result = emailSchema.safeParse("invalid");

if (!result.success) {
  // Get array of all issues
  result.error.issues.forEach((issue) => {
    console.log(issue.path);     // ["email"]
    console.log(issue.message);  // "Invalid email"
    console.log(issue.code);     // "invalid_type"
  });

  // Get formatted error message
  console.log(result.error.message);
}
```

## Best Practices

1. **Use .safeParse() in production** - Don't let errors crash your app
2. **Create schemas for all user input** - Forms, APIs, files, etc.
3. **Reuse schemas** - Define once, validate everywhere
4. **Type inference** - Use `z.infer<typeof schema>` for types
5. **Custom error messages** - Make errors user-friendly
6. **Validate early** - Check data at the entry point

## Project Example

In this project, you'll find:

```
src/features/zod/
├── registrationSchema.js    # Schema definitions
├── RegistrationForm.jsx     # Complex form validation
├── SimpleValidator.jsx      # Real-time validation
├── RegistrationForm.css
└── SimpleValidator.css
```

**Key Learning Points:**
- Define reusable schemas
- Handle validation errors elegantly
- Combine multiple validation rules
- Use `safeParse()` for safe validation
- Extract TypeScript types automatically

## Common Patterns You'll Use

```jsx
// Pattern 1: Form Submission
const handleSubmit = (formData) => {
  const result = mySchema.safeParse(formData);
  if (!result.success) {
    setErrors(formatErrors(result.error));
  } else {
    submitForm(result.data);
  }
};

// Pattern 2: Real-time Validation
const handleChange = (field, value) => {
  const result = fieldSchema.safeParse(value);
  setFieldError(field, result.error?.message);
};

// Pattern 3: API Validation
const response = await fetch('/api/endpoint');
const data = responseSchema.parse(await response.json());
```

## Next Steps

1. Try adding a schema for a login form
2. Create validation for a todo item (title, completed, priority)
3. Validate API response data
4. Create custom error messages for your forms
5. Combine Zod with Zustand for form state management

## Helpful Resources

- [Official Zod Docs](https://zod.dev/)
- [Zod GitHub](https://github.com/colinhacks/zod)
- [Zod Examples](https://zod.dev/api)

Happy validating! 🎉
