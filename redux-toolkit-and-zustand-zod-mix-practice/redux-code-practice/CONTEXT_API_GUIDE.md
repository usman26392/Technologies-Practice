# React Context API - Beginner Friendly Guide

## What is React Context API?

React Context API is a built-in React feature that allows you to share state (data) across multiple components **without passing props through every level** (prop drilling).

### Real-Life Example: Theme Switcher 🎨

Imagine you have a dark mode toggle button in your header, but your entire app needs to know about the theme preference. Without Context API, you'd have to:

```jsx
// ❌ WITHOUT Context API (Prop Drilling)
function App() {
  const [theme, setTheme] = useState("light");
  return <Header theme={theme} setTheme={setTheme} />;
}

function Header({ theme, setTheme }) {
  return <ThemeToggle theme={theme} setTheme={setTheme} />;
}

function ThemeToggle({ theme, setTheme }) {
  // Finally can use it here, but had to pass through 2 levels!
  return <button onClick={() => setTheme("dark")}>Toggle</button>;
}
```

With Context API, you can access the theme directly where you need it:

```jsx
// ✅ WITH Context API (Clean)
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle</button>;
}
```

## How Context API Works

### Step 1: Create a Context
```jsx
import { createContext } from "react";

export const ThemeContext = createContext();
```

### Step 2: Create a Provider Component
The Provider manages the state(data) and provides it to child components:

```jsx
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Step 3: Wrap Your App
```jsx
function App() {
  return (
    <ThemeProvider>
      <YourComponents />
    </ThemeProvider>
  );
}
```

### Step 4: Use the Context in Components
```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function MyComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### Step 5 (Best Practice): Create a Custom Hook
Instead of using `useContext` directly into the Component, create a reusable hook:

```jsx
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  
  return context;
}
```

Then use it simply:
```jsx
function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  // ...
}
```

## When to Use Context API

✅ **Good Use Cases:**
- Theme management (dark/light mode)
- User authentication state
- Language/localization settings
- Notification/toast alerts
- Global UI state (modals, sidebars visibility)

❌ **Not Ideal For:**
- Frequently changing data (causes unnecessary re-renders)
- Complex state logic (use Redux instead)
- Performance-critical applications with large state trees

## Context API vs Redux Toolkit

| Feature | Context API | Redux Toolkit |
|---------|-------------|---------------|
| Setup | Simple | More setup required |
| Learning Curve | Beginner-friendly | Steeper |
| Performance | Good for moderate data | Better for large state |
| DevTools | Limited | Excellent debugging |
| Middleware | No | Yes |
| Best For | Simple global state | Complex state management |

## Project Example

In this project, you'll find:

```
src/features/theme/
├── ThemeContext.jsx     # Context creation and Provider
├── useTheme.js          # Custom hook (best practice)
├── ThemeSwitcher.jsx    # Component that changes theme
├── ThemeDisplay.jsx     # Component that displays theme
├── ThemeSwitcher.css
└── ThemeDisplay.css
```

**Key Points:**
- Multiple components (`ThemeSwitcher` and `ThemeDisplay`) share the same state
- When `ThemeSwitcher` toggles the theme, `ThemeDisplay` updates automatically
- No prop drilling needed!
- Both components are wrapped inside `ThemeProvider` in `App.jsx`

## Common Patterns


### . Multiple Contexts
```jsx
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <YourApp />
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
```

### . Context with Local Storage
```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## Tips & Best Practices

1. **Always use custom hooks** - Makes code cleaner and easier to maintain
2. **Split contexts by concern** - Keep theme, auth, and notifications separate
3. **Error handling** - Check if hook is used within provider
4. **Performance** - Memoize context value to avoid unnecessary re-renders
5. **Use TypeScript** (optional) - Provides better type safety

## Next Steps

- Try modifying the theme switcher to add more themes (light, dark, auto)
- Persist theme preference to localStorage
- Combine Context API with local storage for user preferences
- Compare with Redux Toolkit for larger applications

Happy coding! 🚀
