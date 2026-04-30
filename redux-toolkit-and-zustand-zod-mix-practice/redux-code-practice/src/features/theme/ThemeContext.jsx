

import { createContext, useState } from "react";

/**
 * React Context API - Beginner Friendly Example
 * 
 * This is a simple Theme Switcher using React Context API
 * Real-life use case: Managing application theme (dark/light mode)
 * 
 * Benefits of Context API:
 * - Avoids prop drilling (passing props through multiple levels)
 * - Simple state management for app-wide data like themes, user auth, etc.
 * - Built into React, no external dependencies needed
 */

// Step 1: Create a Context
export const ThemeContext = createContext();

// Step 2: Create a Provider Component that manages the global state
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Value to be shared across all components
  const ThemeValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={ThemeValue}>
      {children}
    </ThemeContext.Provider>
  );
}
